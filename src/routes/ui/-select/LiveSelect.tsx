import { useState } from "react";
import { Playground } from "../../../components/layouts/Playground";
import { ControlSwitch } from "../../../components/layouts/ControlSwitch";
import { StateGuide } from "../../../components/layouts/StateGuide";
import { Select, type SelectOption } from "../../../components/ui/Select";
import { useInteractionState } from "../../../hooks/useInteractionState";
import { states } from "./states";

// 「午前中」は受付が終わった想定で、選べない項目にする
const times: SelectOption[] = [
  { value: "午前中", label: "午前中", disabled: true },
  { value: "12〜14時", label: "12〜14時" },
  { value: "14〜16時", label: "14〜16時" },
  { value: "16〜18時", label: "16〜18時" },
  { value: "18〜20時", label: "18〜20時" },
  { value: "19〜21時", label: "19〜21時" },
];

/** 触って状態の変わり方を確かめる、お届けの時間帯の欄。いまの状態を下の一覧で強調する */
export const LiveSelect = () => {
  const [disabled, setDisabled] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState<string | null>(null);
  // セレクトボックスは押すとすぐ開くので、押している最中は見分けない
  const { state, handlers } = useInteractionState({ pressKeys: [] });

  // 無効のときはホバーの見た目が出ず、フォーカスも受けない
  const activeIds = [
    value === null ? "unselected" : "selected",
    ...(disabled ? ["disabled"] : []),
    ...(!disabled && state.hover ? ["hover"] : []),
    ...(!disabled && state.focusVisible ? ["focus"] : []),
    ...(open ? ["open", "unavailable"] : []),
    ...(open && highlight !== null ? ["highlight"] : []),
  ];

  const message = value === null ? "まだ選んでいません" : `「${value}」を選んでいます`;

  return (
    <Playground
      controls={
        <>
          <button
            type="button"
            onClick={() => setValue(null)}
            disabled={value === null}
            className="inline-flex min-h-8 cursor-pointer items-center rounded-full px-3 py-1 text-sm text-text-primary transition-colors duration-150 select-none hover:bg-white-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-default disabled:text-text-secondary/50 disabled:hover:bg-transparent motion-reduce:transition-none"
          >
            はじめに戻す
          </button>
          <ControlSwitch checked={disabled} onChange={setDisabled}>
            無効にする
          </ControlSwitch>
        </>
      }
      guide={<StateGuide items={states} activeIds={activeIds} />}
      hint="枠にカーソルを乗せる、押して開く。Tabキーで入って、Spaceキーか矢印キーで開くこともできます。開いたら矢印キーで動かし、Enterキーで決めます。Escキーなら、選ばずに閉じます。薄い「午前中」は選べません。右上の「はじめに戻す」で、まだ選んでいない状態に戻せます。スイッチで、使えないときも試せます。"
    >
      <Select
        label="お届けの時間帯"
        options={times}
        value={value}
        onChange={setValue}
        disabled={disabled}
        className="w-56"
        triggerProps={handlers}
        onOpenChange={setOpen}
        onHighlightChange={setHighlight}
      />
      <p className="min-h-[1.8em] text-sm text-primary-pressed" aria-live="polite">
        {message}
      </p>
    </Playground>
  );
};
