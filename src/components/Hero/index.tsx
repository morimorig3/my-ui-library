import { useEffect, useRef, useState, type CSSProperties } from "react";
import styles from "./styles.module.css";

/** 額の中に描く絵の種類。本物の部品ではなく、cqw で描いた絵 */
export type ArtworkPicture = "button" | "checkbox" | "radio" | "toggle" | "slider" | "select";

/** 回廊に飾るときの額の設定 */
export type Artwork = {
  /** 額の幅（cqw 単位の数値） */
  width: number;
  /** 額の高さ（cqw 単位の数値） */
  height: number;
  frame: "dark" | "wood" | "cream";
  picture: ArtworkPicture;
};

export type GalleryWork = {
  /** カード一覧での通し番号（1 から） */
  no: number;
  name: string;
  artwork: Artwork;
};

type Props = {
  /** スクロールの案内を押したときに移る先の id */
  nextId: string;
  /** 回廊に並べる作品。トップのカード一覧と同じデータから作る */
  works: GalleryWork[];
};

/** 1 点ぶんの区画の幅（cqw） */
const SLOT_WIDTH = 25;
/** 1 点ぶん（25cqw）を進むのにかける秒数 */
const SECONDS_PER_WORK = 8;

const frameClass = {
  dark: styles.frameDark,
  wood: styles.frameWood,
  cream: undefined,
} satisfies Record<Artwork["frame"], string | undefined>;

export const Hero = ({ nextId, works }: Props) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // ファーストビューが画面外にあるあいだは、流れを止めて負荷を下げる
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsPaused(!entry.isIntersecting);
    });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // 1 セットの幅だけ動かしたら最初に戻す。点数が変わっても 1 点 8 秒の速さを保つ
  const galleryStyle = {
    "--set-width": `${works.length * SLOT_WIDTH}cqw`,
    "--walk-duration": `${works.length * SECONDS_PER_WORK}s`,
  } as CSSProperties;

  return (
    <section ref={sectionRef} className={styles.section} data-paused={isPaused || undefined}>
      <div className={styles.spacer} aria-hidden="true" />
      <div className={styles.wall}>
        <div className={styles.title}>
          <span className={styles.label}>常設展</span>
          <h1 className={styles.heading}>
            使うたびに
            <br />
            ちょっと好きになるUI
          </h1>
        </div>
        <div className={styles.galleryWrap}>
          <div className={styles.gallery} style={galleryStyle} aria-hidden="true">
            {/* 同じセットを 2 つ並べて、継ぎ目なくループさせる */}
            <div className={styles.track}>
              <WorkSet works={works} />
              <WorkSet works={works} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.baseboard} aria-hidden="true" />
      <div className={styles.floor}>
        <p className={styles.lead}>
          押したときや選んだときの小さな気持ちよさ。
          <br />
          その理由を触りながらたしかめる場所です。
        </p>
        <a href={`#${nextId}`} className={styles.scrollCue} aria-label="部品の一覧へ">
          <span className={styles.scrollLabel}>scroll</span>
          <span className={styles.scrollLine} aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

const WorkSet = ({ works }: { works: GalleryWork[] }) => (
  <div className={styles.set}>
    {works.map(({ no, name, artwork }) => (
      <div
        key={no}
        className={`${styles.work} ${frameClass[artwork.frame] ?? ""}`}
        style={{ "--w": artwork.width, "--h": artwork.height } as CSSProperties}
      >
        <div className={styles.pool} />
        <div className={styles.beam} />
        <div className={styles.frame}>
          <div className={styles.mat}>
            <Picture picture={artwork.picture} />
          </div>
        </div>
        <div className={styles.card}>
          <span className={styles.cardNo}>No.{String(no).padStart(2, "0")}</span>
          <span className={styles.cardName}>{name}</span>
        </div>
      </div>
    ))}
  </div>
);

const Picture = ({ picture }: { picture: ArtworkPicture }) => {
  switch (picture) {
    case "button":
      return <span className={styles.uiButton} />;
    case "checkbox":
      return (
        <span className={styles.uiRows}>
          <span className={styles.uiRow}>
            <span className={styles.uiCheck} />
            <span className={`${styles.uiBar} ${styles.uiBarPale}`} />
          </span>
          <span className={styles.uiRow}>
            <span className={`${styles.uiCheck} ${styles.uiCheckOff}`} />
            <span className={styles.uiBar} />
          </span>
        </span>
      );
    case "radio":
      return (
        <span className={styles.uiRows}>
          <span className={styles.uiRow}>
            <span className={`${styles.uiRadio} ${styles.uiRadioOn}`} />
            <span className={`${styles.uiBar} ${styles.uiBarLight}`} />
          </span>
          <span className={styles.uiRow}>
            <span className={styles.uiRadio} />
            <span className={`${styles.uiBar} ${styles.uiBarLong}`} />
          </span>
        </span>
      );
    case "toggle":
      return <span className={styles.uiToggle} />;
    case "slider":
      return <span className={styles.uiSlider} />;
    case "select":
      return (
        <span className={styles.uiSelect}>
          <span className={styles.uiSelectBox} />
          <span className={styles.uiSelectList} />
        </span>
      );
  }
};
