import { ReactNode } from "react";
import styles from "./styles.module.css";

export const ComponentBlock = ({ children, name }: { children: ReactNode; name?: string }) => {
  return (
    <div className={styles.container} data-name={name}>
      {children}
    </div>
  );
};
