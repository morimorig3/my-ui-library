import { useState, type ReactNode } from "react";
import { cn } from "../../../lib/cn";
import { TabList } from "../../ui/TabList";

export interface CompareOption {
  /** 切り替えのラベル */
  label: string;
  /** ステージに置くもの */
  content: ReactNode;
  /** ステージの下に出す説明 */
  caption: ReactNode;
}

interface Props {
  options: CompareOption[];
  /** 背景色を変えたいときなどに使う */
  className?: string;
}

export const CompareDemo = ({ options, className }: Props) => {
  const [selected, setSelected] = useState(0);
  const option = options[selected];

  return (
    <div className={cn("rounded-2xl border border-border-boundary p-3", className)}>
      <div className="flex justify-end">
        <TabList labels={options.map((o) => o.label)} selected={selected} onChange={setSelected} />
      </div>
      {/* すべての選択肢を同じマスに重ねて、いちばん高いものに高さを合わせる。切り替えても高さが動かない */}
      <div className="grid place-items-center min-h-30 py-8">
        {options.map((o, index) => (
          <div
            key={index}
            className={cn("[grid-area:1/1]", index !== selected && "invisible")}
            inert={index !== selected}
          >
            {o.content}
          </div>
        ))}
      </div>
      {/* 説明も、いちばん長いものに高さを合わせる。読み上げるのは前に重ねた今の説明だけ */}
      <div className="mx-1 mb-0.5 grid text-sm leading-relaxed text-text-secondary">
        {options.map((o, index) => (
          <p key={index} className="invisible [grid-area:1/1]" aria-hidden="true">
            {o.caption}
          </p>
        ))}
        <p className="[grid-area:1/1]" aria-live="polite">
          {option?.caption}
        </p>
      </div>
    </div>
  );
};
