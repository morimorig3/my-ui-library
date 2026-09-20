import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { MicroLabel } from ".";

const meta = {
  title: "Layouts/MicroLabel",
  component: MicroLabel,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof MicroLabel>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label: "名前の由来",
  },
};
