import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ToolTip } from ".";

const meta = {
  title: "UI/ToolTip",
  component: ToolTip,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToolTip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
