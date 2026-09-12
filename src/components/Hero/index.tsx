import svgImage from "./paper-plane.svg?url";
import styles from "./styles.module.css";

const Cloud = ({ className }: { className: string }) => (
  <svg
    className={`${styles.cloud} ${className}`}
    viewBox="0 0 120 62"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M18 54C6 54 1 42 12 37C8 24 22 15 33 22C39 7 64 5 71 20C84 11 102 20 101 34C114 35 117 52 104 54Z"
      strokeWidth="1.5"
      strokeLinejoin="round"
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);

export const Hero = () => {
  return (
    <section>
      <div className={styles.hero}>
        <div className={styles.sky} aria-hidden="true">
          <Cloud className={styles.cloud1} />
          <Cloud className={styles.cloud2} />
          <Cloud className={styles.cloud3} />
          <Cloud className={styles.cloud4} />
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
        触っていて、
        <br />
        気持ちのいいUIを集めました。
      </p>
      <p className="text-center leading-loose">
        押した、選べた、書けた。
        <br />
        そのときの小さな心地よさがどこから来るのかを、
        <br />
        実際に触りながら確かめられるサイトです。
      </p>
      <span>気になる部品をひとつ</span>
    </section>
  );
};
