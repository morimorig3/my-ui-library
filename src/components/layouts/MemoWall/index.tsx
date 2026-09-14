import { ReactNode } from "react";
import styles from "./styles.module.css";

interface Props {
  subTitle: string;
  title: string;
  children: ReactNode;
}

export const MemoWall = ({ subTitle, title, children }: Props) => {
  return (
    <section className={`bg-bg-secondary p-5.5 ${styles["inset-shadow"]}`}>
      <p className="text-xs mb-2">{subTitle}</p>
      <h3 className="font-kiwi-maru text-text-black mb-3">{title}</h3>
      <div className="text-sm leading-loose">{children}</div>
    </section>
  );
};
