import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Header } from "../Header";
import { Footer } from "../Footer";

export const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};
