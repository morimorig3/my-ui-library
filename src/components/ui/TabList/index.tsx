import { useState, type CSSProperties } from "react";
import styles from "./styles.module.css";

interface Props {
  labels: string[];
}

type AnchorCSSProperties = CSSProperties & { [key: string]: string };

export const TabList = ({ labels }: Props) => {
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative inline-flex gap-3 rounded-full bg-bg-secondary text-text-secondary text-sm p-1.5">
      <span
        className={`absolute bg-bg-white rounded-full ${styles.indicator}`}
        style={
          {
            "--tab-position-anchor": `--tab-${selected}`,
          } as AnchorCSSProperties
        }
      />
      {labels.map((label, index) => (
        <label
          key={index}
          className={`relative z-10 text-center whitespace-nowrap px-4 py-2 rounded-full transition-colors ${styles.tab}
          ${selected === index ? "text-primary" : "cursor-pointer hover:bg-bg-thirdly"}`}
          style={
            {
              "--tab-anchor-name": `--tab-${index}`,
            } as AnchorCSSProperties
          }
        >
          <input
            type="radio"
            name="tab"
            value={index}
            checked={selected === index}
            onChange={() => setSelected(index)}
            className="hidden"
          />
          {label}
        </label>
      ))}
    </div>
  );
};
