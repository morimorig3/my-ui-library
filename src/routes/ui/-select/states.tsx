import type { ReactNode } from "react";
import type { StateGuideItem } from "../../../components/layouts/StateGuide";
import { FootnoteMarker, FootnotePanel, Footnotes } from "../../../components/layouts/Footnote";
import { notes } from "./notes";

const Reason = ({ children }: { children: ReactNode }) => (
  <Footnotes notes={notes}>
    {children}
    <FootnotePanel />
  </Footnotes>
);

export const states: StateGuideItem[] = [
  {
    id: "unselected",
    title: "未選択",
    description: "枠の中に「選んでください」と薄い文字で出ます。",
    reason: (
      <Reason>
        <p>
          まだ何も選んでいない、という状態です。文字を薄くして、選んだ値と見分けます。最初に何か選んでおくかどうかは、指針によって意見が分かれます。答えを聞く欄では、答えに影響しないよう、選ばずに出す指針があります
          <FootnoteMarker id="1" />
          。多くの人が選びそうな項目を、はじめから出しておくよう勧める指針もあります
          <FootnoteMarker id="2" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "selected",
    title: "選択済み",
    description: "枠に選んだ値が出ます。開くと、その項目の左に印が付きます。",
    reason: (
      <Reason>
        <p>
          選ぶと一覧が閉じて、枠の表示が選んだ値に変わります
          <FootnoteMarker id="2" />
          。開いたときは印で示すので、一覧の中から探しやすくなります
          <FootnoteMarker id="3" />
          。色だけに頼らず、印の形でも伝えています
          <FootnoteMarker id="4" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "hover",
    title: "ホバー",
    description: "枠の線が少し濃くなります。",
    reason: (
      <Reason>
        <p>押せる場所だと伝えます。指で触る画面では、この変化を出しません。</p>
      </Reason>
    ),
  },
  {
    id: "focus",
    title: "フォーカス",
    description: "枠のまわりに輪が出ます。",
    reason: (
      <Reason>
        <p>
          キーボードで操作する人は、この輪を見て、いまどこにいるかを知ります
          <FootnoteMarker id="5" />
          。マウスで押したときには出さず、キーボードで選んだときだけ出しています。
        </p>
      </Reason>
    ),
  },
  {
    id: "open",
    title: "開いている",
    description: "枠の下に一覧が出て、右の矢印が上を向きます。",
    reason: (
      <Reason>
        <p>
          選ぶか、閉じるかを待っている状態です。矢印の向きを変えて、開いていることを形でも伝えます
          <FootnoteMarker id="6" />
          。一覧はラベルを隠さない位置に出し、何を選んでいるかが見えるようにしています
          <FootnoteMarker id="7" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "highlight",
    title: "選ぼうとしている項目",
    description: "一覧の中で、カーソルや矢印キーで指している項目の背景が色づきます。",
    reason: (
      <Reason>
        <p>
          Enterキーを押せば、どれが選ばれるかを示します。矢印キーで動かしているあいだは、値はまだ変わりません。決めたときにはじめて変わります
          <FootnoteMarker id="8" />
          。そのため、選んである印とは別の見た目にしています。いま指している項目と、選んである項目を取り違える人がいた、という調査もあります
          <FootnoteMarker id="1" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "unavailable",
    title: "選べない項目",
    description: "文字が薄くなり、矢印キーで動かすと飛ばされます。",
    reason: (
      <Reason>
        <p>
          その項目はあるけれど、いまは選べないことを伝えます。消してしまうと並びが変わって覚えにくくなるので、消さずに薄く残すよう勧められています
          <FootnoteMarker id="7" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "disabled",
    title: "無効",
    description: "枠と文字が薄くなり、押しても開きません。",
    reason: (
      <Reason>
        <p>
          いまは選べないことを伝えます。無効にした欄には、キーボードでもたどり着けず、フォームを送っても値は送られません
          <FootnoteMarker id="9" />。
        </p>
      </Reason>
    ),
  },
];
