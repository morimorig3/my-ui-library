import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { PageHeading } from ".";

const meta = {
  title: "Layouts/PageHeading",
  component: PageHeading,
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
} satisfies Meta<typeof PageHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "第01室",
    title: "ボタン",
    description:
      "「押せそう」「押した」「効いた」の三つが指のリズムに合っていると、ボタンは気持ちよくなります。",
  },
};
