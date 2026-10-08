import { useEffect, useRef, type InputHTMLAttributes, type LabelHTMLAttributes } from "react";
import { cn } from "../../../lib/cn";
import styles from "./styles.module.css";

interface Props extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  /** 下に並んだ項目の一部だけを選んでいるとき。見た目だけが変わり、送る値は checked で決まる */
  indeterminate?: boolean;
  /** 行全体（label）に渡すもの。ホバーや押下を見分けるハンドラなど */
  labelProps?: LabelHTMLAttributes<HTMLLabelElement>;
}

/** 四角とラベルの行全体を押して切り替えるチェックボックス */
export const Checkbox = ({
  children,
  className,
  indeterminate = false,
  labelProps,
  ...props
}: Props) => {
  const ref = useRef<HTMLInputElement>(null);

  // indeterminate は HTML の属性では書けないので、要素に直接入れる
  useEffect(() => {
    if (ref.current) ref.current.indeterminate = indeterminate;
  }, [indeterminate]);

  return (
    <label {...labelProps} className={cn(styles.label, className)}>
      <span className={styles.box}>
        <input ref={ref} type="checkbox" className={styles.input} {...props} />
        <svg className={styles.mark} viewBox="0 0 22 22" aria-hidden="true">
          <path className={styles.check} d="M6 11.5 L9.5 15 L16 7.5" pathLength={1} />
          <path className={styles.dash} d="M6.5 11 L15.5 11" />
        </svg>
      </span>
      {children}
    </label>
  );
};
