import { useState, type KeyboardEvent } from "react";
import { Select, type SelectOption } from "../../../components/ui/Select";

const toOptions = (labels: string[]): SelectOption[] =>
  labels.map((label) => ({ value: label, label }));

/* 1. いまの値と、開けるしるしが、いつも見えている */

/**
 * Select の閉じた枠と同じ見た目を Tailwind で作ったもの。Select の見た目は CSS Modules で決まっていて
 * 矢印だけを消せないので、見比べでは別に作る。違いは矢印のあり・なしだけ
 */
export const ArrowDemo = ({ arrow }: { arrow: boolean }) => (
  <div className="flex w-56 flex-col gap-1.5">
    <span className="pl-0.5 text-sm text-text-black">お届けの時間帯</span>
    <div className="flex min-h-11 items-center justify-between gap-2 rounded-[10px] border-2 border-text-secondary bg-bg-white pr-3 pl-3.5 text-[15px] text-text-black select-none">
      14〜16時
      {arrow && (
        <svg
          className="size-4 flex-none fill-none stroke-text-primary"
          viewBox="0 0 16 16"
          strokeWidth={1.8}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M3.5 6 L8 10.5 L12.5 6" />
        </svg>
      )}
    </div>
  </div>
);

/* 2. マウスがなくても、打つだけで目当てへ飛べる */

// 0:00 から 23:30 まで 30 分きざみ。頭をそろえず「9:00」とし、数字を打てば飛べるようにする
const times = toOptions(
  Array.from({ length: 48 }, (_, i) => `${Math.floor(i / 2)}:${i % 2 === 0 ? "00" : "30"}`),
);

export const TypeaheadDemo = ({ typeahead }: { typeahead: boolean }) => {
  const [value, setValue] = useState<string | null>("12:00");

  // 打っても動かない例では、文字のキーを Select に届く前に止める。矢印キーなどはそのまま通す
  const block = (e: KeyboardEvent) => {
    if (e.key.length === 1 && e.key !== " " && !e.ctrlKey && !e.metaKey && !e.altKey) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div onKeyDownCapture={typeahead ? undefined : block}>
      <Select
        label="待ち合わせの時刻"
        options={times}
        value={value}
        onChange={setValue}
        className="w-56"
      />
    </div>
  );
};

/* 3. 選んだあとも、何の欄かが分かる */

const prefectures = toOptions([
  "北海道",
  "宮城県",
  "東京都",
  "神奈川県",
  "愛知県",
  "大阪府",
  "広島県",
  "福岡県",
]);

export const LabelDemo = ({ outside }: { outside: boolean }) => {
  const [value, setValue] = useState<string | null>(null);

  return outside ? (
    <Select
      label="都道府県"
      options={prefectures}
      value={value}
      onChange={setValue}
      className="w-56"
    />
  ) : (
    // 見た目のラベルはないが、読み上げでは名前が分かるようにしておく
    <Select
      aria-label="都道府県"
      placeholder="都道府県を選択"
      options={prefectures}
      value={value}
      onChange={setValue}
      className="w-56"
    />
  );
};
