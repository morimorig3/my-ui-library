import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { CompareDemo } from ".";
import { Button } from "../../ui/Button";
import { UnpleasantButton } from "../../ui/Button/UnpleasantButton";

const meta = {
  title: "Layouts/CompareDemo",
  component: CompareDemo,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-150 bg-bg-white p-6">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof CompareDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    options: [
      {
        label: "立体",
        content: <Button className="w-40">送信する</Button>,
        caption: "塗りと影があるので、触る前から押せる場所だと分かります。",
      },
      {
        label: "平ら",
        content: <UnpleasantButton>送信する</UnpleasantButton>,
        caption: "手がかりが少ないので、押せる場所かどうか迷います。",
      },
    ],
  },
};

export const WithBackground: Story = {
  args: {
    className: "bg-white-pressed",
    options: [
      {
        label: "差が十分",
        content: <Button className="w-40">送信する</Button>,
        caption: "ボタンの形も文字も、背景からはっきり分かれます。",
      },
      {
        label: "差が小さい",
        // Button の見た目は CSS Modules で決まり、className では塗りを上書きできないので素の button で作る
        content: (
          <button
            type="button"
            className="h-12 w-40 rounded-full bg-white-hover font-bold text-border-ui"
          >
            送信する
          </button>
        ),
        caption: "ボタンが背景にとけこんで、文字も読みにくくなります。",
      },
    ],
  },
};

export const Checkbox: Story = {
  args: {
    options: [
      {
        label: "ラベルも押せる",
        content: (
          <label className="flex cursor-pointer items-center gap-2 p-2">
            <input type="checkbox" />
            同意する
          </label>
        ),
        caption: "文字を押してもチェックが入ります。",
      },
      {
        label: "四角だけ",
        content: (
          <span className="flex items-center gap-2 p-2">
            <input type="checkbox" />
            同意する
          </span>
        ),
        caption: "小さな四角を狙わないと、チェックが入りません。",
      },
    ],
  },
};

/** 選択肢ごとに高さが違っても、いちばん高いものに合わせて枠の高さが動かないことを確かめる */
export const TallContent: Story = {
  args: {
    options: [
      {
        label: "縦に並べる",
        content: (
          <div className="flex flex-col gap-4">
            <Button className="w-40">保存する</Button>
            <Button className="w-40">送信する</Button>
            <Button className="w-40">削除する</Button>
          </div>
        ),
        caption: "ボタンを 3 つ縦に並べると、ステージは 120px より高くなります。",
      },
      {
        label: "1 つだけ",
        content: <Button className="w-40">送信する</Button>,
        caption: "低いものに切り替えても、枠の高さはそのままです。",
      },
    ],
  },
};
