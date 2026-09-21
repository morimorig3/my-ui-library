import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { References } from ".";

const meta = {
  title: "Layouts/References",
  component: References,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-150">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof References>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    notes: [
      {
        id: "1",
        body: "ヤコブ・ニールセン『ユーザビリティエンジニアリング原論』第5章「応答時間の限界」。0.1秒を、利用者が自分で直接操作していると感じられる上限としている。",
      },
      {
        id: "2",
        body: "Patrick Haggard, Valerian Chambon「Sense of agency」Current Biology 22巻10号、2012年。自分の行為が外界の変化を引き起こしたという感覚についての概説。",
      },
      {
        id: "33",
        body: "ドナルド・A・ノーマン『誰のためのデザイン? 増補・改訂版』新曜社、2015年。「シグニファイア」の章。",
      },
      {
        id: "999",
        body: "Kate Meyer「Flat UI Elements Attract Less Attention and Cause Uncertainty」Nielsen Norman Group、2017年。平らな要素は押せることが伝わりにくいという調査。",
      },
    ],
  },
};
