import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { TabList } from ".";

const meta = {
  title: "UI/TabList",
  component: TabList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    labels: ["Good", "Bad"],
  },
} satisfies Meta<typeof TabList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const MultiItems: Story = {
  args: {
    labels: ["Good", "Normal", "Worse", "Bad"],
  },
};
