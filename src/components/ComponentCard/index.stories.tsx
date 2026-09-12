import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ComponentCard } from ".";

const meta = {
  title: "ComponentCard",
  component: ComponentCard,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-80 h-80">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ComponentCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    imageUrl: "https://placehold.jp/150x150.png",
    name: "コンポーネント名",
    description: "コンポーネント説明コンポーネント説明コンポーネント説明コンポーネント説明。",
  },
};
