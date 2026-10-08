import { useEffect, useId, useRef, useState, type ReactNode } from "react";
import { cn } from "../../../lib/cn";

const sizes = ["少なめ", "ふつう", "大盛り"];
const ways = ["お店で受け取る", "自宅に届ける", "コンビニで受け取る", "宅配ボックスに届ける"];

const Question = ({ title, children }: { title: string; children: ReactNode }) => (
  <fieldset className="flex flex-col items-start">
    <legend className="mb-1 pl-2.5 text-sm">{title}</legend>
    {children}
  </fieldset>
);

/**
 * Radio と同じ見た目を Tailwind で作ったもの。Radio の見た目は CSS Modules で決まっていて
 * 形や点の出方、押せる範囲を変えられないので、見比べでは別に作る
 */
interface FakeProps {
  name: string;
  checked: boolean;
  onChange: () => void;
  /** 丸か四角か */
  shape?: "round" | "square";
  /** 文字を押しても選べるか */
  textClickable?: boolean;
  children: string;
}

const FakeRadio = ({
  name,
  checked,
  onChange,
  shape = "round",
  textClickable = true,
  children,
}: FakeProps) => {
  const square = shape === "square";
  const circle = (
    <span className="relative inline-grid size-[22px] flex-none place-items-center">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        aria-label={textClickable ? undefined : children}
        className={cn(
          "m-0 size-[22px] cursor-pointer appearance-none border-2 border-text-secondary bg-bg-white outline-none [grid-area:1/1] checked:border-primary",
          "focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-pressed",
          square ? "rounded-md checked:bg-primary" : "rounded-full",
        )}
      />
      {checked &&
        (square ? (
          <svg
            className="pointer-events-none size-[22px] [grid-area:1/1]"
            viewBox="0 0 22 22"
            aria-hidden="true"
          >
            <path
              d="M6 11.5 L9.5 15 L16 7.5"
              className="fill-none stroke-bg-white"
              strokeWidth={2.4}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <span
            className="pointer-events-none size-2.5 rounded-full bg-primary [grid-area:1/1]"
            aria-hidden="true"
          />
        ))}
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
      {circle}
      {children}
    </label>
  ) : (
    // 文字は丸と結び付いていないので、押しても何も起きない
    <div className={row}>
      {circle}
      <span>{children}</span>
    </div>
  );
};

/* 1. ほかを選ぶと、前の選択がひとりでに外れる */

export const DelayDemo = ({ delay }: { delay: number }) => {
  // 違いが見えるよう、ひとつ選んだ状態から始める
  const [selected, setSelected] = useState("ふつう");
  // 外れるのを待っている、前の選択
  const [leaving, setLeaving] = useState<string | null>(null);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);
  const name = useId();

  useEffect(() => () => clearTimeout(timer.current), []);

  const select = (size: string) => {
    if (size === selected) return;
    clearTimeout(timer.current);
    if (delay > 0) {
      setLeaving(selected);
      timer.current = setTimeout(() => setLeaving(null), delay);
    }
    setSelected(size);
  };

  return (
    <Question title="ごはんの量">
      {sizes.map((size) => (
        <FakeRadio
          key={size}
          // 遅れて外れる例では、ふたつ同時に選ばれて見えるよう name を分ける
          name={delay > 0 ? `${name}-${size}` : name}
          checked={size === selected || size === leaving}
          onChange={() => select(size)}
        >
          {size}
        </FakeRadio>
      ))}
    </Question>
  );
};

/* 2. 丸い形は「ひとつだけ」の合図 */

export const ShapeDemo = ({ shape }: { shape: "round" | "square" }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const name = useId();

  return (
    <Question title="ごはんの量">
      {sizes.map((size) => (
        <FakeRadio
          key={size}
          name={name}
          checked={size === selected}
          onChange={() => setSelected(size)}
          shape={shape}
        >
          {size}
        </FakeRadio>
      ))}
    </Question>
  );
};

/* 3. 選択肢がぜんぶ見えていると、比べやすい */

export const VisibleDemo = ({ visible }: { visible: boolean }) => {
  const [selected, setSelected] = useState("");
  const name = useId();

  if (visible) {
    return (
      <Question title="受け取り方法">
        {ways.map((way) => (
          <FakeRadio
            key={way}
            name={name}
            checked={way === selected}
            onChange={() => setSelected(way)}
          >
            {way}
          </FakeRadio>
        ))}
      </Question>
    );
  }

  return (
    <label className="flex flex-col items-start gap-1.5 text-sm">
      <span className="pl-2.5">受け取り方法</span>
      <select
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        className="min-h-11 w-56 cursor-pointer rounded-[10px] border-2 border-text-secondary bg-bg-white px-3 text-[15px] text-text-black outline-none focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-primary-pressed"
      >
        <option value="" disabled>
          選んでください
        </option>
        {ways.map((way) => (
          <option key={way} value={way}>
            {way}
          </option>
        ))}
      </select>
    </label>
  );
};

/* 4. 丸だけでなく、文字を押しても選べる */

export const HitAreaDemo = ({ textClickable }: { textClickable: boolean }) => {
  const [selected, setSelected] = useState<string | null>(null);
  const name = useId();

  return (
    <Question title="ごはんの量">
      {sizes.map((size) => (
        <FakeRadio
          key={size}
          name={name}
          checked={size === selected}
          onChange={() => setSelected(size)}
          textClickable={textClickable}
        >
          {size}
        </FakeRadio>
      ))}
    </Question>
  );
};
