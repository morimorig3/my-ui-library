import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Hero } from ".";

const meta = {
  title: "Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
