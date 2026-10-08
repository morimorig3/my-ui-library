import type { InputHTMLAttributes, LabelHTMLAttributes } from "react";
import { cn } from "../../../lib/cn";
import styles from "./styles.module.css";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** 行全体（label）に渡すもの。ホバーや押下を見分けるハンドラなど */
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

/**
 * 丸とラベルの行全体を押して選ぶラジオボタン。
 * 同じ name のものがひとつのまとまりになり、矢印キーで選択が移る
 */
export const Radio = ({ children, className, labelProps, ...props }: Props) => {
  return (
    <label {...labelProps} className={cn(styles.label, className)}>
      <span className={styles.circle}>
        <input type="radio" className={styles.input} {...props} />
        <span className={styles.dot} aria-hidden="true" />
      </span>
      {children}
    </label>
  );
};
