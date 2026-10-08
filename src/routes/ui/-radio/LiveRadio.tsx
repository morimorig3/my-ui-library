import { useEffect, useState, type ReactNode } from "react";
import { Playground } from "../../../components/layouts/Playground";
import { ControlSwitch } from "../../../components/layouts/ControlSwitch";
import { StateGuide } from "../../../components/layouts/StateGuide";
import { Radio } from "../../../components/ui/Radio";
import { useInteractionState, type InteractionState } from "../../../hooks/useInteractionState";
import { states } from "./states";

const items = ["少なめ", "ふつう", "大盛り"];

interface RowProps {
  id: string;
  checked: boolean;
  disabled: boolean;
  onChange: () => void;
  /** この行のホバー、フォーカス、押下を親に知らせる */
  report: (id: string, state: InteractionState) => void;
  children: ReactNode;
}

/** 1 行ぶんのラジオボタン。ハンドラは行全体（label）に付ける */
const Row = ({ id, checked, disabled, onChange, report, children }: RowProps) => {
  // ラジオボタンは Enter では選ばれないので、Space だけを押す操作とみなす。矢印キーは移動として扱う
  const { state, handlers } = useInteractionState({ pressKeys: [" "] });

  useEffect(() => {
    report(id, state);
  }, [id, state, report]);

  return (
    <Radio
      name="live-rice"
      value={id}
      checked={checked}
      disabled={disabled}
      onChange={onChange}
      labelProps={handlers}
    >
      {children}
    </Radio>
  );
};

/** 触って状態の変わり方を確かめる、ごはんの量の質問。いま触っている行の状態を下の一覧で強調する */
export const LiveRadio = () => {
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [interactions, setInteractions] = useState<Record<string, InteractionState>>({});

  const report = (id: string, state: InteractionState) =>
    setInteractions((prev) => (prev[id] === state ? prev : { ...prev, [id]: state }));

  // カーソルが乗っている行、なければキーボードで選んでいる行の値を強調する。どれもなければ選んだ行の値
  const entries = Object.entries(interactions);
  const pointed = entries.find(([, s]) => s.hover || s.pressed)?.[0];
  const focused = entries.find(([, s]) => s.focusVisible)?.[0];
  const target = pointed ?? focused ?? selected;
  const value = target !== null && target === selected ? "checked" : "unchecked";

  // 無効のときはホバーや押下の見た目が出ないので、強調しない。フォーカスも受けない
  const activeIds = [
    value,
    ...(selected === null ? ["none"] : []),
    ...(disabled ? ["disabled"] : []),
    ...(!disabled && entries.some(([, s]) => s.hover) ? ["hover"] : []),
    ...(!disabled && entries.some(([, s]) => s.pressed) ? ["pressed"] : []),
    ...(!disabled && focused ? ["focus"] : []),
  ];

  const message = selected === null ? "まだ選んでいません" : `「${selected}」を選んでいます`;

  return (
    <Playground
      controls={
        <>
          {/* 一度選ぶと、ラジオボタンの操作では「どれも選んでいない」に戻れないので、ここで戻す */}
          <button
            type="button"
            onClick={() => setSelected(null)}
            disabled={selected === null}
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
      hint="丸か文字にカーソルを乗せる、押す、Tabキーで入って矢印キーで動かす。ほかを選ぶと、前の選択が外れます。右上の「はじめに戻す」で、どれも選んでいない状態に戻せます。スイッチで、使えないときも試せます。"
    >
      <fieldset className="flex flex-col items-start">
        <legend className="mb-1 pl-2.5 text-sm">ごはんの量</legend>
        {items.map((item) => (
          <Row
            key={item}
            id={item}
            checked={selected === item}
            disabled={disabled}
            onChange={() => setSelected(item)}
            report={report}
          >
            {item}
          </Row>
        ))}
      </fieldset>
      <p className="min-h-[1.8em] text-sm text-primary-pressed" aria-live="polite">
        {message}
      </p>
    </Playground>
  );
};
