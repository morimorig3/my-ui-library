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
    id: "unchecked",
    title: "未チェック",
    description: "濃い色の線で囲んだ、空の四角です。",
    reason: (
      <Reason>
        <p>
          四角の線は、ここで選べると見分けるための手がかりです。線が薄いと、背景にまぎれて見落とされます
          <FootnoteMarker id="1" />
          。何かを受け取るかどうかを選ぶ項目は、最初は空にしておくのがよいとされています
          <FootnoteMarker id="2" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "checked",
    title: "チェック済み",
    description: "四角が色で塗られ、中に白い印が出ます。",
    reason: (
      <Reason>
        <p>
          選んだことを、色だけでなく印の形でも伝えます。色の違いが分かりにくい人や、白黒の画面でも、印があるかどうかで分かります
          <FootnoteMarker id="3" />
          。印は背景とはっきり見分けられる明るさにしています
          <FootnoteMarker id="1" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "indeterminate",
    title: "中間",
    description: "四角が色で塗られ、中に白い横線が出ます。",
    reason: (
      <Reason>
        <p>
          下に並んだ項目の一部だけを選んでいる、という意味です。全部選べば印に、全部外せば空に変わります
          <FootnoteMarker id="4" />
          。見た目が変わるだけで、送られる値は変わりません
          <FootnoteMarker id="5" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "hover",
    title: "ホバー",
    description: "行の背景がうすく色づき、四角の線が少し濃くなります。",
    reason: (
      <Reason>
        <p>
          四角だけでなく、文字の上でも反応すると分かります。指で触る画面ではこの変化を出しません。カーソルがなく、押したあとに色が残ってしまうことがあるためです
          <FootnoteMarker id="6" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "focus",
    title: "フォーカス",
    description: "四角のまわりに輪が出ます。",
    reason: (
      <Reason>
        <p>
          キーボードで操作する人は、この輪を見て、いまどこを選んでいるかを知ります。輪は背景とはっきり見分けられる色にしています
          <FootnoteMarker id="1" />
          。マウスで押したときには出さず、キーボードで選んだときだけ出しています
          <FootnoteMarker id="7" />
          。選んだ状態でSpaceキーを押すと、チェックが切り替わります
          <FootnoteMarker id="4" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "pressed",
    title: "押下",
    description: "押している間、四角の色が少し濃くなります。",
    reason: (
      <Reason>
        <p>
          押したことを、離す前から目で返します。印が付くのは離したときなので、それまでの間も反応していると分かります。
        </p>
      </Reason>
    ),
  },
  {
    id: "disabled",
    title: "無効",
    description: "四角と文字の色が薄くなり、カーソルを乗せても変わりません。",
    reason: (
      <Reason>
        <p>
          いまは選べないことを伝えます。ただ、薄い色は読みにくく、読み上げでも伝わりにくくなります。見てもらいたい内容を、使えない見た目で表さないようにします
          <FootnoteMarker id="8" />。
        </p>
      </Reason>
    ),
  },
];
