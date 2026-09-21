import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { FootnoteMarker, FootnotePanel, Footnotes } from "./index";
import { ReactNode } from "react";
import { JSX } from "react/jsx-runtime";

const notes = [
  {
    id: "response-time",
    body: "ヤコブ・ニールセン『ユーザビリティエンジニアリング原論』第5章「応答時間の限界」。0.1秒を、利用者が自分で直接操作していると感じられる上限としている。",
  },
  {
    id: "agency",
    body: "行為の結果が自分の行動によるものだと感じる感覚。心理学では sense of agency と呼ばれる。",
  },
];

const meta = {
  title: "Layouts/Footnotes",
  component: Footnotes,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: { notes, children: null },
  render: (
    args: JSX.IntrinsicAttributes & {
      notes: { id: string; body: ReactNode }[];
      children: ReactNode;
    },
  ) => (
    <Footnotes {...args}>
      <p style={{ maxWidth: "40em", lineHeight: 1.8 }}>
        動きの結果が十分の一秒ほどで返ってくると
        <FootnoteMarker id="response-time" />
        、人はその変化を自分が起こしたこととして受け取ります。この感覚を主体感
        <FootnoteMarker id="agency" />
        と呼びます。
      </p>
      <div className="border-t border-border mt-2 pt-2 text-sm">
        <FootnotePanel />
      </div>
    </Footnotes>
  ),
} satisfies Meta<typeof Footnotes>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
