import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Checkbox } from ".";

const meta = {
  title: "UI/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "お知らせメールを受け取る",
  },
};

export const Checked: Story = {
  args: {
    children: "お知らせメールを受け取る",
    defaultChecked: true,
  },
};

export const Indeterminate: Story = {
  args: {
    children: "野菜をすべて選ぶ",
    indeterminate: true,
  },
};

export const Disabled: Story = {
  args: {
    children: "お知らせメールを受け取る",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    children: "お知らせメールを受け取る",
    disabled: true,
    defaultChecked: true,
  },
};
