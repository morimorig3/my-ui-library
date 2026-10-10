import { ReactNode } from "react";
import styles from "./styles.module.css";
import { Link } from "@tanstack/react-router";

export const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.root}>
      <header className={styles.inner}>
        {/* 狭い画面では横に収まらないので、ロゴの下に説明を置く */}
        <div className="flex flex-col items-start justify-center gap-1 h-16 sm:flex-row sm:justify-between sm:items-center sm:gap-4">
          <Link to="/">
            <h1 className="font-kiwi-maru text-2xl text-text-black whitespace-nowrap">
              やさしいUI
            </h1>
          </Link>
          <p className="text-xs whitespace-nowrap sm:text-sm">触って、なるほどと思うためのサイト</p>
        </div>
      </header>
      <main className={styles.inner}>
        <div>{children}</div>
      </main>
      <footer className={`mt-16 ${styles.inner}`}>
        <div className="flex justify-between items-center py-6 border-t border-border">
          <span className="text-sm text-text-sub">やさしいUI</span>
          <span className="text-sm text-text-sub">すこしずつ増えてます</span>
        </div>
      </footer>
    </div>
  );
};
