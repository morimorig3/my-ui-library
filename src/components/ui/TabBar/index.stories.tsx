import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { TabBar } from ".";

const meta = {
  title: "UI/TabBar",
  component: TabBar,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-100 h-100 grid justify-center items-center animate-gradient bg-linear-to-br from-rose-500 via-orange-300 to-amber-300 bg-[length:200%_200%]">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
