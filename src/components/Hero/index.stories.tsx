import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Hero } from ".";

const meta = {
  title: "Hero",
  component: Hero,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    nextId: "ui-list",
    works: [
      {
        no: 1,
        name: "ボタン",
        artwork: { width: 16, height: 12, frame: "dark", picture: "button" },
      },
      {
        no: 2,
        name: "チェックボックス",
        artwork: { width: 12, height: 15, frame: "wood", picture: "checkbox" },
      },
      {
        no: 3,
        name: "ラジオボタン",
        artwork: { width: 14, height: 14, frame: "cream", picture: "radio" },
      },
      {
        no: 4,
        name: "トグルスイッチ",
        artwork: { width: 13, height: 10, frame: "wood", picture: "toggle" },
      },
      {
        no: 8,
        name: "セレクトボックス",
        artwork: { width: 13, height: 16, frame: "cream", picture: "select" },
      },
      {
        no: 9,
        name: "スライダー",
        artwork: { width: 17, height: 11, frame: "dark", picture: "slider" },
      },
    ],
  },
};
