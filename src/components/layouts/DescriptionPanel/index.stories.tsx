import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { DescriptionPanel } from ".";

const meta = {
  title: "Layouts/DescriptionPanel",
  component: DescriptionPanel,
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
} satisfies Meta<typeof DescriptionPanel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "解説",
    title: "なぜ気持ちいいと感じるのか",
    children: (
      <p className="leading-loose text-sm">
        電子レンジのボタンを押して何も起きないと、人はもう一度、今度は強く押します。反応がないと、自分の指がちゃんと届いたのかどうかが分からなくなるからです。画面のボタンが沈んで影を失うのは、その「届いた」を目で見せるための仕掛けです。動きの結果が十分の一秒ほどで返ってくると1、人はその変化を自分が起こしたこととして受け取ります。この感覚を主体感2と呼びます。
      </p>
    ),
  },
};
