import { useEffect, useState } from "react";
import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Playground } from ".";
import { ControlSwitch } from "../ControlSwitch";
import { StateGuide, type StateGuideItem } from "../StateGuide";
import { Button } from "../../ui/Button";
import { useInteractionState } from "../../../hooks/useInteractionState";

const meta = {
  title: "Layouts/Playground",
  component: Playground,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-180">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Playground>;

export default meta;
type Story = StoryObj<typeof meta>;

const buttonItems: StateGuideItem[] = [
  { id: "normal", title: "通常", description: "塗りの色で、押せる場所だと分かります。" },
  {
    id: "hover",
    title: "ホバー",
    description: "色が少し明るくなります。",
    reason: <p>押す前に「ここは反応する」と確かめられます。</p>,
  },
  {
    id: "focus",
    title: "フォーカス",
    description: "まわりに輪が出て、選ばれていると分かります。",
    reason: <p>キーボードで操作する人に、いまどこを選んでいるかを伝えます。</p>,
  },
  { id: "down", title: "押下", description: "少し縮んで、色が濃くなります。" },
  { id: "disabled", title: "無効", description: "色が薄くなり、押せなくなります。" },
  { id: "loading", title: "処理中", description: "文字が「送信中」に変わり、印が回ります。" },
];

const ButtonPlayground = () => {
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

  const done = doneAt !== null;
  const send = () => {
    if (slow) {
      setDoneAt(null);
      setLoading(true);
    } else {
      setDoneAt(Date.now());
    }
  };

  const activeId = disabled
    ? "disabled"
    : loading
      ? "loading"
      : state.pressed
        ? "down"
        : state.focusVisible
          ? "focus"
          : state.hover
            ? "hover"
            : "normal";

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
      guide={<StateGuide items={buttonItems} activeIds={[activeId]} />}
      hint="カーソルを置く、押す、離す、Tabキーで選ぶ。右上のスイッチで、無効と処理中も試せます。"
    >
      <Button
        className="w-40"
        aria-disabled={disabled}
        loading={loading}
        onClick={send}
        {...handlers}
      >
        {loading ? "送信中" : "送信する"}
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

export const WithButton: Story = {
  args: { children: null },
  render: () => <ButtonPlayground />,
};

const checkboxItems: StateGuideItem[] = [
  { id: "unchecked", title: "未チェック", description: "空の四角が出ています。" },
  { id: "checked", title: "チェック済み", description: "四角が塗られ、印が入ります。" },
  { id: "hover", title: "ホバー", description: "四角のまわりが少し濃くなります。" },
  { id: "focus", title: "フォーカス", description: "まわりに輪が出ます。" },
  { id: "disabled", title: "無効", description: "色が薄くなり、切り替えられなくなります。" },
];

const CheckboxPlayground = () => {
  const [disabled, setDisabled] = useState(false);
  const [checked, setChecked] = useState(false);
  const { state, handlers } = useInteractionState({ pressKeys: [" "] });

  // チェックの有無と、ホバーやフォーカスは同時に起きるので、いくつでも強調する
  const activeIds = [
    checked ? "checked" : "unchecked",
    ...(disabled ? ["disabled"] : []),
    ...(!disabled && state.hover ? ["hover"] : []),
    ...(state.focusVisible ? ["focus"] : []),
  ];

  return (
    <Playground
      controls={
        <ControlSwitch checked={disabled} onChange={setDisabled}>
          無効にする
        </ControlSwitch>
      }
      guide={<StateGuide items={checkboxItems} activeIds={activeIds} />}
      hint="四角や文字を押す、Tabキーで選んでSpaceキーを押す。"
    >
      <label className="flex items-center gap-2 p-2">
        <input
          type="checkbox"
          checked={checked}
          disabled={disabled}
          onChange={(e) => setChecked(e.target.checked)}
          {...handlers}
        />
        同意する
      </label>
    </Playground>
  );
};

export const WithCheckbox: Story = {
  args: { children: null },
  render: () => <CheckboxPlayground />,
};
