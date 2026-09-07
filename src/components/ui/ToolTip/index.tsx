import styles from "./styles.module.css";

export const ToolTip = () => {
  return (
    <span className={styles.container}>
      Hover Me!<span className={styles.tooltip}>Tool tip here!</span>
    </span>
  );
};
