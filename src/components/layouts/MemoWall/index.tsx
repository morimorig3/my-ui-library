import { ReactNode } from "react";
import styles from "./styles.module.css";
import { MicroLabel } from "../MicroLabel";

interface Props {
  subTitle: string;
  title: string;
  children: ReactNode;
}

export const MemoWall = ({ subTitle, title, children }: Props) => {
  return (
    <section className={`bg-bg-secondary p-5.5 ${styles["inset-shadow"]}`}>
      <MicroLabel label={subTitle} className="mb-2" />
      <h3 className="font-kiwi-maru text-text-black mb-3">{title}</h3>
      <div className="leading-loose max-w-120">{children}</div>
    </section>
  );
};
