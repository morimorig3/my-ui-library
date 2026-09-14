import { ReactNode } from "react";
import styles from "./styles.module.css";
import { TabList } from "../../ui/TabList";

export const ComponentBlock = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className={`flex flex-col items-center justify-center rounded-2xl bg-bg-white border border-border-boundary p-4.5 ${styles.shadow}`}
    >
      <div className="ml-auto">
        <TabList labels={["ちょうどいい", "気持ちよくないほう"]} />
      </div>
      <div className="py-10">{children}</div>
    </div>
  );
};
