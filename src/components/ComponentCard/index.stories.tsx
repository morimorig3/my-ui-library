import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ComponentCard } from ".";
import buttonImage from "../../assets/images/info-graphic-button.svg?url";

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
    imageUrl: buttonImage,
    name: "コンポーネント名",
    description: "コンポーネント説明コンポーネント説明コンポーネント説明コンポーネント説明。",
  },
};

export const ComingSoon: Story = {
  args: {
    ...Default.args,
    comingSoon: true,
  },
};
