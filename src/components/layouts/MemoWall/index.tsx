import { ReactNode } from "react";
import styles from "./styles.module.css";
import { MicroLabel } from "../MicroLabel";

interface Props {
  subTitle: string;
  title: string;
  /** 見出しの左に出すアイコン */
  icon?: ReactNode;
  children: ReactNode;
}

export const MemoWall = ({ subTitle, title, icon, children }: Props) => {
  return (
    <section className={`bg-bg-secondary p-5.5 ${styles["inset-shadow"]}`}>
      <MicroLabel label={subTitle} className="mb-2" />
      <h3 className="font-kiwi-maru text-text-black mb-3 flex items-center gap-x-2.5">
        {icon}
        <span>{title}</span>
      </h3>
      <div className="leading-loose max-w-120">{children}</div>
    </section>
  );
};
