import { ReactNode, useCallback, useId, useRef, type ChangeEvent } from "react";
import styles from "./styles.module.css";

interface Props {
  title: string;
  description: string;
  children?: ReactNode;
}

export const DescriptionItem = ({ title, description, children }: Props) => {
  const toggleId = useId();
  const textRef = useRef<HTMLDivElement>(null);

  const handleToggle = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const el = textRef.current;
    if (!el) return;
    el.style.maxHeight = e.target.checked ? `${el.scrollHeight}px` : "";
  }, []);

  return (
    <div className="rounded-2xl bg-bg-white py-5 px-5.5">
      <p className="font-kiwi-maru text-text-black mb-2">{title}</p>
      <p className="text-sm">{description}</p>
      {children && (
        <>
          <input type="checkbox" id={toggleId} className={styles.toggle} onChange={handleToggle} />
          <div ref={textRef} className={`text-sm leading-loose mb-2 ${styles.text}`}>
            {children}
          </div>
          <label htmlFor={toggleId} className={`text-sm text-primary ${styles.label}`}>
            <span className={styles.readMore}>続きを読む</span>
            <span className={styles.close}>とじる</span>
          </label>
        </>
      )}
    </div>
  );
};
