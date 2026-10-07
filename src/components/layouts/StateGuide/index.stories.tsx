import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { StateGuide, type StateGuideItem } from ".";
import { FootnoteMarker, FootnotePanel, Footnotes } from "../Footnote";

const notes = [
  {
    id: "1",
    body: "ドナルド・A・ノーマン『誰のためのデザイン? 増補・改訂版』新曜社、2015年。シグニファイアの章。",
  },
  {
    id: "2",
    body: "MDN Web Docs「:hover」「:focus-visible」「@media hover」。",
  },
  {
    id: "3",
    body: "W3C「WAI-ARIA Authoring Practices Guide: Button Pattern」。",
  },
];

const withNote = (text: string, id: string) => (
  <Footnotes notes={notes}>
    <p>
      {text}
      <FootnoteMarker id={id} />。
    </p>
    <FootnotePanel />
  </Footnotes>
);

const buttonItems: StateGuideItem[] = [
  {
    id: "normal",
    title: "通常",
    description: "塗りの色で、押せる場所だと分かります。",
    reason: withNote(
      "押せる部品と、読むだけの文字は、見た目で区別できる必要があります。塗りの色は「ここは押せる」という合図になります",
      "1",
    ),
  },
  {
    id: "hover",
    title: "ホバー",
    description: "色が少し明るくなり、ふわっと浮きます。",
    reason: withNote(
      "カーソルを乗せた瞬間に色が変わると、押す前に「ここは反応する」と確かめられます。指で触る画面にはカーソルがないので、マウスなどで合わせられるときだけに絞ります",
      "2",
    ),
  },
  {
    id: "focus",
    title: "フォーカス",
    description: "まわりに輪が出て、選ばれていると分かります。",
    reason: (
      <p>
        キーボードで操作する人は、カーソルを使いません。輪が出ないと、いまどこを選んでいるのか分からなくなります。
      </p>
    ),
  },
  {
    id: "down",
    title: "押下",
    description: "少し沈んで、色が濃くなります。",
  },
  {
    id: "disabled",
    title: "無効",
    description: "色が薄くなり、押せなくなります。",
    reason: withNote(
      "読み上げを使う人にも「ここにボタンがある」と伝えたいときは、選べる状態のまま、押す操作だけを止めておきます",
      "3",
    ),
  },
  {
    id: "loading",
    title: "処理中",
    description: "文字が「送信中」に変わり、印がくるくる回ります。",
    reason: (
      <p>
        待ち時間に何も表示がないと、止まったように見えます。文字と印で処理中だと伝えると、二度押しを防げます。
      </p>
    ),
  },
];

const meta = {
  title: "Layouts/StateGuide",
  component: StateGuide,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-180 bg-bg-white p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof StateGuide>;

export default meta;
type Story = StoryObj<typeof meta>;

/** 「押下」は reason がないので、押せない項目として表示する */
export const Default: Story = {
  args: {
    items: buttonItems,
  },
};

export const Active: Story = {
  args: {
    items: buttonItems,
    activeIds: ["hover"],
  },
};

/** チェック済みとホバーのように、2 つの状態を同時に強調する */
export const Checkbox: Story = {
  args: {
    activeIds: ["checked", "hover"],
    items: [
      {
        id: "unchecked",
        title: "未チェック",
        description: "空の四角が出ています。",
        reason: <p>空の四角は「ここに印を入れられる」という合図になります。</p>,
      },
      {
        id: "checked",
        title: "チェック済み",
        description: "四角が塗られ、印が入ります。",
        reason: <p>塗りと印の両方で示すと、色が見分けにくい人にも伝わります。</p>,
      },
      {
        id: "hover",
        title: "ホバー",
        description: "四角のまわりが少し濃くなります。",
        reason: <p>押す前に、ここが反応する場所だと確かめられます。</p>,
      },
    ],
  },
};
