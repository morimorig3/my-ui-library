import { useEffect, useState, type ReactNode } from "react";
import { Playground } from "../../../components/layouts/Playground";
import { ControlSwitch } from "../../../components/layouts/ControlSwitch";
import { StateGuide } from "../../../components/layouts/StateGuide";
import { Checkbox } from "../../../components/ui/Checkbox";
import { useInteractionState, type InteractionState } from "../../../hooks/useInteractionState";
import { states } from "./states";

const items = ["にんじん", "たまねぎ", "じゃがいも"];

type Value = "unchecked" | "checked" | "indeterminate";

interface RowProps {
  id: string;
  value: Value;
  disabled: boolean;
  onChange: () => void;
  /** この行のホバー、フォーカス、押下を親に知らせる */
  report: (id: string, state: InteractionState) => void;
  children: ReactNode;
}

/** 1 行ぶんのチェックボックス。ハンドラは行全体（label）に付ける */
const Row = ({ id, value, disabled, onChange, report, children }: RowProps) => {
  // チェックボックスは Enter では切り替わらないので、Space だけを押す操作とみなす
  const { state, handlers } = useInteractionState({ pressKeys: [" "] });

  useEffect(() => {
    report(id, state);
  }, [id, state, report]);

  return (
    <Checkbox
      checked={value === "checked"}
      indeterminate={value === "indeterminate"}
      disabled={disabled}
      onChange={onChange}
      labelProps={handlers}
    >
      {children}
    </Checkbox>
  );
};

/** 触って状態の変わり方を確かめる買い物リスト。いま触っている行の状態を下の一覧で強調する */
export const LiveCheckbox = () => {
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);
  const [interactions, setInteractions] = useState<Record<string, InteractionState>>({});

  const report = (id: string, state: InteractionState) =>
    setInteractions((prev) => (prev[id] === state ? prev : { ...prev, [id]: state }));

  const parentValue: Value =
    selected.length === items.length
      ? "checked"
      : selected.length === 0
        ? "unchecked"
        : "indeterminate";
  const valueOf = (id: string): Value =>
    id === "all" ? parentValue : selected.includes(id) ? "checked" : "unchecked";

  const toggleAll = () => setSelected(parentValue === "checked" ? [] : items);
  const toggle = (item: string) =>
    setSelected((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : items.filter((i) => i === item || prev.includes(i)),
    );

  // カーソルが乗っている行、なければキーボードで選んでいる行の値を強調する。どれもなければ親の値
  const entries = Object.entries(interactions);
  const pointed = entries.find(([, s]) => s.hover || s.pressed)?.[0];
  const focused = entries.find(([, s]) => s.focusVisible)?.[0];
  const target = pointed ?? focused ?? "all";

  // 無効のときはホバーや押下の見た目が出ないので、強調しない。フォーカスも受けない
  const activeIds = [
    valueOf(target),
    ...(disabled ? ["disabled"] : []),
    ...(!disabled && entries.some(([, s]) => s.hover) ? ["hover"] : []),
    ...(!disabled && entries.some(([, s]) => s.pressed) ? ["pressed"] : []),
    ...(!disabled && focused ? ["focus"] : []),
  ];

  const message =
    selected.length === 0
      ? "まだ何も選んでいません"
      : `${items.length}品のうち${selected.length}品を選んでいます`;

  return (
    <Playground
      controls={
        <ControlSwitch checked={disabled} onChange={setDisabled}>
          無効にする
        </ControlSwitch>
      }
      guide={<StateGuide items={states} activeIds={activeIds} />}
      hint="四角か文字にカーソルを乗せる、押す、Tabキーで選んでSpaceを押す。一部だけ選ぶと、上の四角に横線が出ます。右上のスイッチで、使えないときも試せます。"
    >
      <div className="flex flex-col items-start">
        <Row id="all" value={parentValue} disabled={disabled} onChange={toggleAll} report={report}>
          野菜をすべて選ぶ
        </Row>
        <div className="flex flex-col items-start pl-8">
          {items.map((item) => (
            <Row
              key={item}
              id={item}
              value={valueOf(item)}
              disabled={disabled}
              onChange={() => toggle(item)}
              report={report}
            >
              {item}
            </Row>
          ))}
        </div>
      </div>
      <p className="min-h-[1.8em] text-sm text-primary-pressed" aria-live="polite">
        {message}
      </p>
    </Playground>
  );
};
