import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Link } from "@tanstack/react-router";

export const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.root}>
      <header className={styles.inner}>
        <div className="flex justify-between items-center h-16">
          <Link to="/">
            <h1 className={`${styles.title} text-2xl`}>やさしいUI</h1>
          </Link>
          <p className="text-sm">触って、なるほどと思うためのサイト</p>
        </div>
      </header>
      <main className={styles.inner}>
        <div>{children}</div>
      </main>
      <footer className={styles.inner}>
        <div className="flex justify-between items-center py-6 border-t">
          <span className="text-sm">やさしいUI</span>
          <span className="text-sm">すこしずつ増えてます</span>
        </div>
      </footer>
    </div>
  );
};
