import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { ExplanationItem, ExplanationList } from ".";
import { CompareDemo } from "../CompareDemo";
import { FootnoteMarker, FootnotePanel, Footnotes } from "../Footnote";
import { Button } from "../../ui/Button";
import { UnpleasantButton } from "../../ui/Button/UnpleasantButton";

const notes = [
  {
    id: "1",
    body: "Kate Moran「Flat UI Elements Attract Less Attention and Cause Uncertainty」Nielsen Norman Group、2017年。",
  },
  {
    id: "2",
    body: "W3C「WCAG 2.2」達成基準 1.4.3 コントラスト（最低限）、1.4.11 非テキストのコントラスト、1.4.1 色の使用。",
  },
];

const meta = {
  title: "Layouts/ExplanationList",
  component: ExplanationList,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  decorators: [
    (Story) => (
      <div className="w-180">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof ExplanationList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <ExplanationItem
          title="見ただけで、押せると分かる"
          demo={
            <CompareDemo
              options={[
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
              ]}
            />
          }
        >
          <Footnotes notes={notes}>
            <p>
              塗りや影があると、人は触る前に「押せる」と判断できます。平らな画面では、押せる場所を探すのに時間がかかるという調査があります
              <FootnoteMarker id="1" />。
            </p>
            <div className="text-sm">
              <FootnotePanel />
            </div>
          </Footnotes>
        </ExplanationItem>
        <ExplanationItem title="背景から、見分けやすくする">
          <Footnotes notes={notes}>
            <p>
              ボタンと背景の明るさの差が小さいと、ボタンが見つけにくくなります。色だけでなく、形や文字の濃さでも区別できるようにします
              <FootnoteMarker id="2" />。
            </p>
            <div className="text-sm">
              <FootnotePanel />
            </div>
          </Footnotes>
        </ExplanationItem>
      </>
    ),
  },
};

export const Checkbox: Story = {
  args: {
    children: (
      <ExplanationItem
        title="文字を押しても、チェックが入る"
        demo={
          <CompareDemo
            options={[
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
            ]}
          />
        }
      >
        <p>
          小さな四角だけが押せる場所だと、狙うのに手間がかかります。文字まで押せると、ぐっと楽になります。
        </p>
      </ExplanationItem>
    ),
  },
};
