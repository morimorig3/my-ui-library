import styles from "./styles.module.css";

export const TabBar = () => {
  return (
    <nav className={styles.container}>
      <a className={styles.item}>リンゴ</a>
      <a className={styles.item}>ミカン</a>
      <a className={styles.item}>レモン</a>
    </nav>
  );
};
