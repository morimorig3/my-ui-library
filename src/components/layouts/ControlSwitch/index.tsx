import type { ReactNode } from "react";

interface Props {
  checked: boolean;
  onChange: (checked: boolean) => void;
  /** スイッチの右に出すラベル */
  children: ReactNode;
}

/** 解説ページのデモを操作するためのスイッチ。オンとオフを切り替える */
export const ControlSwitch = ({ checked, onChange, children }: Props) => {
  return (
    <label className="inline-flex min-h-8 cursor-pointer items-center gap-2 rounded-full px-2 py-1 text-sm text-text-primary select-none has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary">
      <input
        type="checkbox"
        role="switch"
        className="peer sr-only"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
      <span className="relative h-5 w-8.5 flex-none rounded-full bg-border-ui transition-colors duration-200 motion-reduce:transition-none peer-checked:bg-primary peer-checked:[&>span]:translate-x-3.5">
        <span className="absolute top-0.5 left-0.5 size-4 rounded-full bg-bg-white shadow-[0_1px_3px_rgba(46,42,38,0.35)] transition-transform duration-200 motion-reduce:transition-none" />
      </span>
      {children}
    </label>
  );
};
