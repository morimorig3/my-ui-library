import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Button } from ".";

const meta = {
  title: "UI/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "押してみる",
  },
};

export const Disabled: Story = {
  args: {
    children: "押せません",
    "aria-disabled": true,
  },
};

export const Loading: Story = {
  args: {
    children: "送信する",
    loading: true,
  },
};
