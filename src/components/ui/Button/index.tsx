import type { ButtonHTMLAttributes, MouseEvent } from "react";
import { cn } from "../../../lib/cn";
import styles from "./styles.module.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
}

export const Button = ({
  children,
  className,
  loading = false,
  onClick,
  "aria-disabled": ariaDisabled,
  ...props
}: Props) => {
  // 処理中は、呼び出し側が aria-disabled={false} を渡していても押せないようにする
  const isBlocked = loading || ariaDisabled === true || ariaDisabled === "true";

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (isBlocked) {
      e.preventDefault();
      return;
    }
    onClick?.(e);
  };

  return (
    <button
      type="button"
      className={cn(styles.button, className)}
      aria-busy={loading || undefined}
      aria-disabled={isBlocked || undefined}
      onClick={handleClick}
      {...props}
    >
      {loading && <span className={styles.spinner} aria-hidden="true" />}
      {children}
    </button>
  );
};
