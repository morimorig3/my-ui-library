import { useEffect, useState } from "react";
import { Playground } from "../../../components/layouts/Playground";
import { ControlSwitch } from "../../../components/layouts/ControlSwitch";
import { StateGuide } from "../../../components/layouts/StateGuide";
import { Button } from "../../../components/ui/Button";
import { useInteractionState } from "../../../hooks/useInteractionState";
import { states } from "./states";

/** 触って状態の変わり方を確かめるボタン。いまの状態を下の一覧で強調する */
export const LiveButton = () => {
  const [disabled, setDisabled] = useState(false);
  const [slow, setSlow] = useState(false);
  const [loading, setLoading] = useState(false);
  // 「送信しました」を出した時刻。続けて押しても、出している時間を数え直す
  const [doneAt, setDoneAt] = useState<number | null>(null);
  const { state, handlers } = useInteractionState();

  useEffect(() => {
    if (!loading) return;
    const timer = setTimeout(() => {
      setLoading(false);
      setDoneAt(Date.now());
    }, 1800);
    return () => clearTimeout(timer);
  }, [loading]);

  useEffect(() => {
    if (doneAt === null) return;
    const timer = setTimeout(() => setDoneAt(null), 1400);
    return () => clearTimeout(timer);
  }, [doneAt]);

  const send = () => {
    if (slow) {
      setDoneAt(null);
      setLoading(true);
    } else {
      setDoneAt(Date.now());
    }
  };

  // 無効と処理中はホバーや押下の見た目が出ないので、そのときは強調しない。フォーカスの輪はいつでも出る
  const blocked = disabled || loading;
  const activeIds = [
    ...(disabled ? ["disabled"] : loading ? ["loading"] : []),
    ...(!blocked && state.hover ? ["hover"] : []),
    ...(!blocked && state.pressed ? ["pressed"] : []),
    ...(state.focusVisible ? ["focus"] : []),
  ];
  if (activeIds.length === 0) activeIds.push("normal");

  const done = doneAt !== null;

  return (
    <Playground
      controls={
        <>
          <ControlSwitch checked={disabled} onChange={setDisabled}>
            無効にする
          </ControlSwitch>
          <ControlSwitch checked={slow} onChange={setSlow}>
            送信を遅くする
          </ControlSwitch>
        </>
      }
      guide={<StateGuide items={states} activeIds={activeIds} />}
      hint="カーソルを乗せる、押す、Tabキーで選んでSpaceかEnterを押す。右上のスイッチで、使えないときと待つときも試せます。"
    >
      <Button
        className="w-40"
        aria-disabled={disabled}
        loading={loading}
        onClick={send}
        {...handlers}
      >
        送信する
      </Button>
      <p
        className={`min-h-[1.8em] text-sm text-primary-pressed transition-opacity duration-200 motion-reduce:transition-none ${done ? "opacity-100" : "opacity-0"}`}
        aria-live="polite"
      >
        {done ? "送信しました" : ""}
      </p>
    </Playground>
  );
};
