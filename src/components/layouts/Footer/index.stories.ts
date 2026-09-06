import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Footer } from ".";

const meta = {
  title: "Layouts/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
