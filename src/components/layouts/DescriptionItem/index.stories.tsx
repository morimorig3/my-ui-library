import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { DescriptionItem } from ".";

const meta = {
  title: "Layouts/DescriptionItem",
  component: DescriptionItem,
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
} satisfies Meta<typeof DescriptionItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "マウスカーソルを合わせる",
    description: "ボタンがほのかに明るくなり、少し浮き上がります。押せそうな感じが先に伝わります。",
  },
};

export const WithChildren: Story = {
  args: {
    title: "マウスカーソルを合わせる",
    description: "ボタンがほのかに明るくなり、少し浮き上がります。押せそうな感じが先に伝わります。",
    children: (
      <p>
        合わせても何も光らない場合、そこは飾りに見えて、押せる場所だと気づいてもらえません。色や高さのわずかな変化は、指を伸ばす前に「ここは反応する」と知らせるための予告です。予告があると、人は狙いを定める前に安心して手を動かせます。
      </p>
    ),
  },
};
