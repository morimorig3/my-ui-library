import { useEffect, useId, useRef, useState, type HTMLAttributes, type KeyboardEvent } from "react";
import { cn } from "../../../lib/cn";
import styles from "./styles.module.css";

export interface SelectOption {
  value: string;
  label: string;
  /** 一覧には出すが、選べない項目 */
  disabled?: boolean;
}

interface Props {
  options: SelectOption[];
  /** 選んでいる値。まだ選んでいなければ null */
  value: string | null;
  onChange: (value: string) => void;
  /** 枠の上に出すラベル。出さないときは aria-label で名前を付ける */
  label?: string;
  "aria-label"?: string;
  /** まだ選んでいないときに、枠の中へ薄く出す文字 */
  placeholder?: string;
  disabled?: boolean;
  /** 外枠に付ける。枠の横幅は呼び出し側で決める */
  className?: string;
  /** 枠（combobox）に渡すもの。ホバーやフォーカスを見分けるハンドラなど */
  triggerProps?: HTMLAttributes<HTMLDivElement>;
  /** 一覧を開いた、閉じたときに知らせる */
  onOpenChange?: (open: boolean) => void;
  /** 一覧の中で指している項目が変わったときに知らせる */
  onHighlightChange?: (value: string | null) => void;
}

/** 頭の文字で探すとき、打った文字をためておく時間 */
const TYPEAHEAD_RESET_MS = 500;
/** PageUp、PageDown で動かす数 */
const PAGE_SIZE = 10;

/**
 * たたんだ一覧からひとつを選ぶセレクトボックス。
 * フォーカスは枠に置いたまま、一覧の中で指している項目を aria-activedescendant で伝える
 */
export const Select = ({
  options,
  value,
  onChange,
  label,
  "aria-label": ariaLabel,
  placeholder = "選んでください",
  disabled = false,
  className,
  triggerProps,
  onOpenChange,
  onHighlightChange,
}: Props) => {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(-1);
  const rootRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const typeahead = useRef({
    text: "",
    timer: undefined as ReturnType<typeof setTimeout> | undefined,
  });
  const id = useId();
  const labelId = `${id}-label`;
  const listId = `${id}-list`;
  const optionId = (index: number) => `${id}-option-${index}`;

  const selectedIndex = options.findIndex((o) => o.value === value);
  const selected = options[selectedIndex];

  const openList = (open: boolean, nextHighlight = -1) => {
    setOpen(open);
    setHighlight(open ? nextHighlight : -1);
    onOpenChange?.(open);
    onHighlightChange?.(open ? (options[nextHighlight]?.value ?? null) : null);
  };

  const moveHighlight = (index: number) => {
    setHighlight(index);
    onHighlightChange?.(options[index]?.value ?? null);
  };

  const choose = (index: number) => {
    const option = options[index];
    if (option && !option.disabled) onChange(option.value);
    openList(false);
  };

  // 選べる項目だけをたどる。端では止まる
  const enabledIndexes = options.flatMap((o, i) => (o.disabled ? [] : [i]));
  const first = enabledIndexes[0] ?? -1;
  const last = enabledIndexes.at(-1) ?? -1;
  const step = (from: number, delta: number) => {
    if (from === -1) return delta > 0 ? first : last;
    const target = from + delta;
    const candidates =
      delta > 0
        ? enabledIndexes.filter((i) => i >= target)
        : enabledIndexes.filter((i) => i <= target).reverse();
    return candidates[0] ?? (delta > 0 ? last : first);
  };
  const initial = selected && !selected.disabled ? selectedIndex : first;

  // 打った文字で始まる項目を、いま指している項目の次から探す。同じ文字を続けて打つと順にめぐる
  const findByText = (key: string) => {
    const t = typeahead.current;
    clearTimeout(t.timer);
    t.text += key.toLowerCase();
    t.timer = setTimeout(() => (t.text = ""), TYPEAHEAD_RESET_MS);

    const from = (open ? highlight : selectedIndex) + 1;
    const ordered = [
      ...enabledIndexes.filter((i) => i >= from),
      ...enabledIndexes.filter((i) => i < from),
    ];
    const startsWith = (i: number, text: string) => options[i].label.toLowerCase().startsWith(text);
    const match = ordered.find((i) => startsWith(i, t.text));
    if (match !== undefined) return match;
    const sameLetter = [...t.text].every((c) => c === t.text[0]);
    return sameLetter ? ordered.find((i) => startsWith(i, t.text[0])) : undefined;
  };

  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (disabled) return;
    const printable = e.key.length === 1 && !e.ctrlKey && !e.metaKey && !e.altKey;
    // 頭の文字で探している途中の Space は、文字として扱う
    const typing = printable && (e.key !== " " || typeahead.current.text !== "");

    if (typing) {
      e.preventDefault();
      const match = findByText(e.key);
      if (open) {
        if (match !== undefined) moveHighlight(match);
      } else {
        openList(true, match ?? initial);
      }
      return;
    }

    if (!open) {
      switch (e.key) {
        case "ArrowDown":
        case "Enter":
        case " ":
          e.preventDefault();
          openList(true, initial);
          return;
        case "ArrowUp":
          e.preventDefault();
          openList(true, e.altKey ? initial : first);
          return;
        case "Home":
          e.preventDefault();
          openList(true, first);
          return;
        case "End":
          e.preventDefault();
          openList(true, last);
          return;
      }
      return;
    }

    switch (e.key) {
      case "ArrowDown":
        e.preventDefault();
        moveHighlight(step(highlight, 1));
        return;
      case "ArrowUp":
        e.preventDefault();
        if (e.altKey) choose(highlight);
        else moveHighlight(step(highlight, -1));
        return;
      case "Home":
        e.preventDefault();
        moveHighlight(first);
        return;
      case "End":
        e.preventDefault();
        moveHighlight(last);
        return;
      case "PageDown":
        e.preventDefault();
        moveHighlight(step(highlight, PAGE_SIZE));
        return;
      case "PageUp":
        e.preventDefault();
        moveHighlight(step(highlight, -PAGE_SIZE));
        return;
      case "Enter":
      case " ":
        e.preventDefault();
        choose(highlight);
        return;
      case "Escape":
        e.preventDefault();
        openList(false);
        return;
      // 決めてから、次の部品へフォーカスを移す
      case "Tab":
        choose(highlight);
        return;
    }
  };

  // 指している項目が見える位置まで、一覧を送る
  useEffect(() => {
    if (!open || highlight === -1) return;
    // scrollIntoView はページごと動かしてしまうので、一覧の中だけを送る
    const list = listRef.current;
    const item = list?.querySelector<HTMLElement>(`#${CSS.escape(optionId(highlight))}`);
    if (!list || !item) return;
    if (item.offsetTop < list.scrollTop) {
      list.scrollTop = item.offsetTop - list.clientTop;
    } else if (item.offsetTop + item.offsetHeight > list.scrollTop + list.clientHeight) {
      list.scrollTop = item.offsetTop + item.offsetHeight - list.clientHeight;
    }
  }, [open, highlight]);

  // 外を押したら、選ばずに閉じる
  useEffect(() => {
    if (!open) return;
    const onPointerDown = (e: PointerEvent) => {
      if (!rootRef.current?.contains(e.target as Node)) openList(false);
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  });

  // 無効になったら閉じる
  useEffect(() => {
    if (disabled && open) openList(false);
  });

  useEffect(() => () => clearTimeout(typeahead.current.timer), []);

  return (
    <div ref={rootRef} className={cn(styles.root, className)}>
      {label && (
        // div には label 要素を結び付けられないので、押したら枠にフォーカスを移す
        <span id={labelId} className={styles.label} onClick={() => triggerRef.current?.focus()}>
          {label}
        </span>
      )}
      <div className={styles.field}>
        <div
          {...triggerProps}
          ref={triggerRef}
          role="combobox"
          tabIndex={disabled ? -1 : 0}
          aria-labelledby={label ? labelId : undefined}
          aria-label={label ? undefined : ariaLabel}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={listId}
          aria-activedescendant={open && highlight !== -1 ? optionId(highlight) : undefined}
          aria-disabled={disabled || undefined}
          className={styles.trigger}
          onClick={(e) => {
            triggerProps?.onClick?.(e);
            if (!disabled) openList(!open, initial);
          }}
          onKeyDown={(e) => {
            onKeyDown(e);
            triggerProps?.onKeyDown?.(e);
          }}
          onBlur={(e) => {
            triggerProps?.onBlur?.(e);
            if (open) openList(false);
          }}
        >
          <span className={cn(styles.value, !selected && styles.placeholder)}>
            {selected ? selected.label : placeholder}
          </span>
          <svg className={styles.icon} viewBox="0 0 16 16" aria-hidden="true">
            <path d="M3.5 6 L8 10.5 L12.5 6" />
          </svg>
        </div>
        <ul
          ref={listRef}
          id={listId}
          role="listbox"
          aria-labelledby={label ? labelId : undefined}
          aria-label={label ? undefined : ariaLabel}
          tabIndex={-1}
          hidden={!open}
          className={styles.list}
          // 項目を押してもフォーカスは枠に残す
          onMouseDown={(e) => e.preventDefault()}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={optionId(index)}
              role="option"
              aria-selected={index === selectedIndex}
              aria-disabled={option.disabled || undefined}
              data-highlighted={index === highlight || undefined}
              className={styles.option}
              onPointerMove={(e) => {
                if (e.pointerType === "mouse" && !option.disabled && index !== highlight) {
                  moveHighlight(index);
                }
              }}
              onClick={() => {
                if (!option.disabled) choose(index);
              }}
            >
              <svg className={styles.check} viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 8.5 L6.5 12 L13 4.5" />
              </svg>
              {option.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
