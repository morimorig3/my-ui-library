import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { SectionHeading } from ".";

const meta = {
  title: "Layouts/SectionHeading",
  component: SectionHeading,
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
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "解説",
    title: "なぜ気持ちいいと感じるのか",
  },
};

export const WithSubLabel: Story = {
  args: {
    label: "操作",
    subLabel: "触る",
    title: "触るとどうなるか",
  },
};
