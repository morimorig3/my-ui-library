import { useState } from "react";
import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ControlSwitch } from ".";

const meta = {
  title: "Layouts/ControlSwitch",
  component: ControlSwitch,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  args: {
    checked: false,
    onChange: () => {},
    children: "無効にする",
  },
  render: function Render(args) {
    const [checked, setChecked] = useState(args.checked);
    return (
      <ControlSwitch checked={checked} onChange={setChecked}>
        {args.children}
      </ControlSwitch>
    );
  },
} satisfies Meta<typeof ControlSwitch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Off: Story = {};

export const On: Story = {
  args: {
    checked: true,
    children: "送信を遅くする",
  },
};

/** Playground の右上に並べたときの見え方 */
export const Pair: Story = {
  render: function Render() {
    const [disabled, setDisabled] = useState(false);
    const [slow, setSlow] = useState(true);
    return (
      <div className="flex flex-wrap justify-end gap-1.5">
        <ControlSwitch checked={disabled} onChange={setDisabled}>
          無効にする
        </ControlSwitch>
        <ControlSwitch checked={slow} onChange={setSlow}>
          送信を遅くする
        </ControlSwitch>
      </div>
    );
  },
};
