import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { MemoWall } from ".";

const meta = {
  title: "Layouts/MemoWall",
  component: MemoWall,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-150">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof MemoWall>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    subTitle: "名前の由来",
    title: "押しボタンから来た名前",
    children: (
      <p>
        もとは電気のスイッチや機械についている、指で押し込むあの部品のことです。画面の中に操作の場所をつくるとき、人がすでに手で覚えているものをそのまま借りてきたので、名前も見た目も引き継がれました。まわりより少し盛り上がって見える陰影は、装飾ではなく「これは押し込める物体です」と伝えるための手がかりです。のちに画面を平らに整えるフラットデザインが広がったときにその手がかりが消え、押せる場所が分からない、という不便が各所で起きました。いまは影や枠をほどよく戻して、平らさと分かりやすさの間を取る作り方が定着しています。
      </p>
    ),
  },
};
