import { useEffect, useRef, useState, type ReactNode } from "react";
import { Checkbox } from "../../../components/ui/Checkbox";
import { cn } from "../../../lib/cn";

const slots = ["午前", "午後", "夜"];

/** いくつでも選べるリストの選んだ項目を持つ */
const useMultiSelect = (initial: string[] = []) => {
  const [selected, setSelected] = useState(initial);
  const toggle = (item: string) =>
    setSelected((prev) => (prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]));
  return [selected, toggle] as const;
};

const Question = ({ children }: { children: ReactNode }) => (
  <div className="flex flex-col items-start">
    <p className="mb-1 pl-2.5 text-sm">受け取れる時間帯を選んでください</p>
    {children}
  </div>
);

/**
 * Checkbox と同じ見た目を Tailwind で作ったもの。Checkbox の見た目は CSS Modules で決まっていて
 * 形や印、押せる範囲を変えられないので、見比べでは別に作る
 */
interface FakeProps {
  checked: boolean;
  onChange: () => void;
  /** 四角か丸か */
  shape?: "square" | "round";
  /** 選んだときに印を出すか。出さないときは色だけが変わる */
  mark?: boolean;
  /** 外したときと選んだときを、明るさの近い赤みと緑みで塗る */
  redGreen?: boolean;
  /** 文字を押しても切り替わるか */
  textClickable?: boolean;
  children: string;
}

const FakeCheckbox = ({
  checked,
  onChange,
  shape = "square",
  mark = true,
  redGreen = false,
  textClickable = true,
  children,
}: FakeProps) => {
  const round = shape === "round";
  const box = (
    <span className="relative inline-grid size-[22px] flex-none">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        aria-label={textClickable ? undefined : children}
        className={cn(
          "m-0 size-[22px] cursor-pointer appearance-none border-2 outline-none [grid-area:1/1]",
          "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-pressed",
          round ? "rounded-full" : "rounded-md",
          redGreen
            ? "border-[#c0796b] bg-[#c0796b] checked:border-[#6f9a6a] checked:bg-[#6f9a6a]"
            : "border-text-secondary bg-bg-white checked:border-primary checked:bg-primary",
          round && "checked:bg-bg-white",
        )}
      />
      {checked && mark && (
        <svg
          className="pointer-events-none size-[22px] [grid-area:1/1]"
          viewBox="0 0 22 22"
          aria-hidden="true"
        >
          {round ? (
            <circle cx="11" cy="11" r="5" className="fill-primary" />
          ) : (
            <path
              d="M6 11.5 L9.5 15 L16 7.5"
              className="fill-none stroke-bg-white"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      )}
    </span>
  );
  const row =
    "inline-flex min-h-11 items-center gap-3 rounded-[10px] pr-3 pl-2.5 text-[15px] text-text-black select-none";

  return textClickable ? (
    <label
      className={cn(
        row,
        "cursor-pointer transition-colors duration-150 motion-reduce:transition-none [@media(hover:hover)]:hover:bg-white-hover",
      )}
    >
      {box}
      {children}
    </label>
  ) : (
    // 文字は四角と結び付いていないので、押しても何も起きない
    <div className={row}>
      {box}
      <span>{children}</span>
    </div>
  );
};

/* 1. 押したら、すぐにチェックが付く */

export const DelayDemo = ({ delay }: { delay: number }) => {
  const [shown, setShown] = useState(false);
  // 押した結果。見た目に出すのは delay ミリ秒あと
  const wanted = useRef(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  const onChange = () => {
    wanted.current = !wanted.current;
    clearTimeout(timer.current);
    if (delay === 0) setShown(wanted.current);
    else timer.current = setTimeout(() => setShown(wanted.current), delay);
  };

  return (
    <Checkbox checked={shown} onChange={onChange}>
      お知らせメールを受け取る
    </Checkbox>
  );
};

/* 2. 文字を押しても、チェックできる */

export const HitAreaDemo = ({ textClickable }: { textClickable: boolean }) => {
  const [selected, toggle] = useMultiSelect();

  return (
    <Question>
      {slots.map((slot) => (
        <FakeCheckbox
          key={slot}
          checked={selected.includes(slot)}
          onChange={() => toggle(slot)}
          textClickable={textClickable}
        >
          {slot}
        </FakeCheckbox>
      ))}
    </Question>
  );
};

/* 3. 四角い形は、いくつでも選べる合図 */

export const ShapeDemo = ({ shape }: { shape: "square" | "round" }) => {
  const [selected, toggle] = useMultiSelect();

  return (
    <Question>
      {slots.map((slot) => (
        <FakeCheckbox
          key={slot}
          checked={selected.includes(slot)}
          onChange={() => toggle(slot)}
          shape={shape}
        >
          {slot}
        </FakeCheckbox>
      ))}
    </Question>
  );
};

/* 4. 印を付けると「はい」になる言葉 */

export const WordingDemo = ({ positive }: { positive: boolean }) => (
  <Checkbox>{positive ? "お知らせメールを受け取る" : "お知らせメールを受け取らない"}</Checkbox>
);

/* 5. 色が分からなくても、印で分かる */

export const ColorDemo = ({ mark }: { mark: boolean }) => {
  // 違いが見えるよう、ひとつだけ選んだ状態から始める
  const [selected, toggle] = useMultiSelect(["午後"]);

  return (
    <Question>
      {slots.map((slot) => (
        <FakeCheckbox
          key={slot}
          checked={selected.includes(slot)}
          onChange={() => toggle(slot)}
          mark={mark}
          redGreen
        >
          {slot}
        </FakeCheckbox>
      ))}
    </Question>
  );
};
