import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ToggleButton } from ".";

const meta = {
  title: "UI/ToggleButton",
  component: ToggleButton,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
