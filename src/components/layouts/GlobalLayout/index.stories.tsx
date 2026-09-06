import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { GlobalLayout } from "./index";

const meta = {
  title: "Layouts/GlobalLayout",
  component: GlobalLayout,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof GlobalLayout>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <div className="bg-blue-200">Page Content Here</div>,
  },
};
