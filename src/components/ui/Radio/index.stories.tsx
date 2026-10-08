import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { Radio } from ".";

const meta = {
  title: "UI/Radio",
  component: Radio,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    name: "size",
    children: "ふつう",
  },
};

export const Checked: Story = {
  args: {
    name: "size",
    children: "ふつう",
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    name: "size",
    children: "ふつう",
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    name: "size",
    children: "ふつう",
    disabled: true,
    defaultChecked: true,
  },
};

/** 同じ name の 3 つ。ひとつを選ぶと、ほかが外れる */
export const Group: Story = {
  args: {
    children: "",
  },
  render: () => (
    <fieldset className="flex flex-col items-start">
      <legend className="mb-1 pl-2.5 text-sm">ごはんの量</legend>
      <Radio name="rice">少なめ</Radio>
      <Radio name="rice" defaultChecked>
        ふつう
      </Radio>
      <Radio name="rice">大盛り</Radio>
    </fieldset>
  ),
};
