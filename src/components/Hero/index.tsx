import type { MouseEvent } from "react";
import svgImage from "./paper-plane.svg?url";
import styles from "./styles.module.css";

type Props = {
  /** スクロールの案内を押したときに移る先の id */
  nextId: string;
};

export const Hero = ({ nextId }: Props) => {
  // Chrome では、スナップが mandatory のときに届かない位置へなめらかにスクロールさせると、
  // まったく動かない。一覧が短いと一番上を画面の上端まで持ってこられないので、
  // 届く位置に丸めてから自分でスクロールさせる
  const scrollToNext = (event: MouseEvent<HTMLAnchorElement>) => {
    const target = document.getElementById(nextId);
    if (!target) return;
    event.preventDefault();
    const root = document.documentElement;
    const top = Math.min(
      target.getBoundingClientRect().top + window.scrollY,
      root.scrollHeight - window.innerHeight,
    );
    window.scrollTo({ top });
  };

  return (
    <section className={styles.section}>
      <div className={styles.hero}>
        <div className={styles.sky} aria-hidden="true">
          <span className={`${styles.cloud} ${styles.cloud1}`} />
          <span className={`${styles.cloud} ${styles.cloud2}`} />
          <span className={`${styles.cloud} ${styles.cloud3}`} />
        </div>
        <svg className={styles.trail} viewBox="0 0 300 100" fill="none" aria-hidden="true">
          <defs>
            <linearGradient id="heroTrailFade" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#2e2a26" stopOpacity="0" />
              <stop offset="12%" stopColor="#2e2a26" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#2e2a26" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M2 10C32 0 42 36 76 42C110 48 116 20 148 28C182 36 186 72 220 80C250 87 268 76 296 84"
            stroke="url(#heroTrailFade)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="2 14"
          />
        </svg>
        <span className={styles.drift}>
          <span className={styles.lift}>
            <span className={styles.image}>
              <img src={svgImage} width="500" height="240" alt="紙ヒコーキアイコン" />
            </span>
          </span>
        </span>
      </div>
      <p className="font-kiwi-maru text-[46px] text-center text-text-black">
        使うたびに、
        <br />
        ちょっと好きになるUI
      </p>
      <p className="text-center leading-loose">
        押したときや選んだときの小さな気持ちよさ。
        <br />
        その理由を触りながらたしかめる場所です。
      </p>
      <a
        href={`#${nextId}`}
        className={styles.scrollCue}
        onClick={scrollToNext}
        aria-label="部品の一覧へ"
      >
        <span className={styles.scrollLabel}>scroll</span>
        <span className={styles.scrollLine} aria-hidden="true" />
      </a>
    </section>
  );
};
