import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { DevidingLine } from ".";

const meta = {
  title: "Layouts/DevidingLine",
  component: DevidingLine,
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
} satisfies Meta<typeof DevidingLine>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    startText: "名前の由来",
  },
};

export const WithEndText: Story = {
  args: {
    startText: "名前の由来",
    endText: "終了のテキスト",
  },
};
