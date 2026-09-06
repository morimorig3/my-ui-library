import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Header } from ".";

const meta = {
  title: "Layouts/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
