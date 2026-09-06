import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ComponentBlock } from "./index";
import { ToggleButton } from "../../ui/ToggleButton";

const meta = {
  title: "Layouts/ComponentBlock",
  component: ComponentBlock,
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
} satisfies Meta<typeof ComponentBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <ToggleButton />,
    name: "Toggle Button",
  },
};
