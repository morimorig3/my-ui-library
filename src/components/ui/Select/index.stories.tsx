import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { expect, userEvent, within } from "storybook/test";
import { Select, type SelectOption } from ".";

const times: SelectOption[] = [
  { value: "morning", label: "午前中", disabled: true },
  { value: "12-14", label: "12〜14時" },
  { value: "14-16", label: "14〜16時" },
  { value: "16-18", label: "16〜18時" },
  { value: "18-20", label: "18〜20時" },
  { value: "19-21", label: "19〜21時" },
];

/** 選んだ値を持っておく入れ物。ストーリーごとに最初の値を変える */
const Stateful = ({
  initial = null,
  ...props
}: Omit<Parameters<typeof Select>[0], "value" | "onChange"> & { initial?: string | null }) => {
  const [value, setValue] = useState(initial);
  return <Select {...props} value={value} onChange={setValue} />;
};

const meta = {
  title: "UI/Select",
  component: Stateful,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    label: "お届けの時間帯",
    options: times,
    className: "w-56",
  },
} satisfies Meta<typeof Stateful>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Selected: Story = {
  args: {
    initial: "14-16",
  },
};

export const Disabled: Story = {
  args: {
    initial: "14-16",
    disabled: true,
  },
};

/** ラベルを出さないときは aria-label で名前を付ける */
export const WithoutLabel: Story = {
  args: {
    label: undefined,
    "aria-label": "お届けの時間帯",
  },
};

/** キーボードで開き、選べない項目を飛ばして選ぶ */
export const Keyboard: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const combobox = canvas.getByRole("combobox", { name: "お届けの時間帯" });

    await userEvent.tab();
    await userEvent.keyboard("{ArrowDown}");
    await expect(combobox).toHaveAttribute("aria-expanded", "true");
    // 先頭の「午前中」は選べないので、最初に指すのは「12〜14時」
    await expect(combobox).toHaveAttribute(
      "aria-activedescendant",
      canvas.getByRole("option", { name: "12〜14時" }).id,
    );

    await userEvent.keyboard("{ArrowDown}{Enter}");
    await expect(combobox).toHaveAttribute("aria-expanded", "false");
    await expect(combobox).toHaveTextContent("14〜16時");

    // Esc では選ばずに閉じる
    await userEvent.keyboard("{ArrowDown}{ArrowDown}{Escape}");
    await expect(combobox).toHaveTextContent("14〜16時");

    // 頭の文字で探す
    await userEvent.keyboard("18{Enter}");
    await expect(combobox).toHaveTextContent("18〜20時");
  },
};
