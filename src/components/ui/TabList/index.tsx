import { useState } from "react";

interface Props {
  labels: string[];
}

export const TabList = ({ labels }: Props) => {
  const [mode, setMode] = useState("left");

  return (
    <div className="rounded-full bg-bg-secondary text-text-secondary text-sm p-1.5">
      <div className="grid grid-cols-2 gap-3 relative">
        <span
          className={`bg-bg-white w-1/2 h-full rounded-full absolute transition-transform ease-[cubic-bezier(0.175,0.885,0.32,1.275)] ${mode === "left" ? "" : "translate-x-full"}`}
        />
        {[
          { value: "left", label: labels[0] },
          { value: "right", label: labels[1] },
        ].map(({ value, label }) => (
          <label
            key={value}
            className={`text-center px-4 py-2 rounded-full z-10 transition-colors
            ${mode === value ? "text-primary" : "cursor-pointer hover:bg-bg-thirdly"}`}
          >
            <input
              type="radio"
              name="mode"
              value={value}
              checked={mode === value}
              onChange={() => setMode(value)}
              className="hidden"
            />
            {label}
          </label>
        ))}
      </div>
    </div>
  );
};
