import { useId, useState, type CSSProperties } from "react";
import styles from "./styles.module.css";

interface Props {
  labels: string[];
  selected?: number;
  onChange?: (index: number) => void;
}

type AnchorCSSProperties = CSSProperties & { [key: string]: string };

export const TabList = ({ labels, selected: controlled, onChange }: Props) => {
  const [inner, setInner] = useState(0);
  const name = useId();
  // アンカー名はページ全体で共有されるので、TabList ごとに別の名前にする
  const anchorPrefix = `--tab${name.replace(/[^a-zA-Z0-9_-]/g, "")}`;
  const selected = controlled ?? inner;
  const setSelected = (index: number) => {
    setInner(index);
    onChange?.(index);
  };

  return (
    <div className="relative inline-flex gap-3 rounded-full bg-bg-secondary text-text-secondary text-sm p-1.5">
      <span
        className={`absolute bg-bg-white rounded-full ${styles.indicator}`}
        style={
          {
            "--tab-position-anchor": `${anchorPrefix}-${selected}`,
          } as AnchorCSSProperties
        }
      />
      {labels.map((label, index) => (
        <label
          key={index}
          className={`relative z-10 text-center whitespace-nowrap px-4 py-2 rounded-full transition-colors ${styles.tab} has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-primary
          ${selected === index ? "text-primary" : "cursor-pointer hover:bg-bg-fouthly"}`}
          style={
            {
              "--tab-anchor-name": `${anchorPrefix}-${index}`,
            } as AnchorCSSProperties
          }
        >
          <input
            type="radio"
            name={name}
            value={index}
            checked={selected === index}
            onChange={() => setSelected(index)}
            className="sr-only"
          />
          {label}
        </label>
      ))}
    </div>
  );
};
