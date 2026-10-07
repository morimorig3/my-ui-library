import type { ReactNode } from "react";

interface Props {
  /** 右上に並べるデモの操作（ControlSwitch など） */
  controls?: ReactNode;
  /** 真ん中に置く、実際に触れる部品 */
  children: ReactNode;
  /** ステージの下に置く状態の一覧（StateGuide など） */
  guide?: ReactNode;
  /** いちばん下に出す、触り方の案内 */
  hint?: ReactNode;
}

/** 部品を実際に触って、状態の変わり方を確かめる枠 */
export const Playground = ({ controls, children, guide, hint }: Props) => {
  return (
    <div className="rounded-[22px] border border-border-boundary bg-bg-white px-5.5 pt-4.5 pb-6.5 shadow-[0_1px_0_rgba(46,42,38,0.04)]">
      {controls && <div className="flex flex-wrap justify-end gap-1.5">{controls}</div>}
      <div className="flex flex-col items-center gap-2.5 pt-10">{children}</div>
      {guide && <div className="mt-4.5">{guide}</div>}
      {hint && (
        <p className="mt-5.5 text-center text-sm leading-relaxed text-text-secondary">{hint}</p>
      )}
    </div>
  );
};
