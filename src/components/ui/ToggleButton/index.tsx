import styles from "./styles.module.css";

export const ToggleButton = () => {
  return (
    <label className={styles.label}>
      <input className={styles.input} type="checkbox" />
    </label>
  );
};
