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
    id: "normal",
    title: "通常",
    description: "色のついた角の丸い形で、押せる場所だと分かります。",
    reason: (
      <Reason>
        <p>
          押せることは、まず形と色で伝わります。目立つボタンをひとつの画面に1つか2つまでにしておくと、どれを押せばよいのか迷いません
          <FootnoteMarker id="1" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "hover",
    title: "ホバー",
    description: "色が少し明るくなり、影が広がります。",
    reason: (
      <Reason>
        <p>
          指を伸ばす前に、ここは反応すると確かめられます。ただ、指で触る画面にはカーソルがありません
          <FootnoteMarker id="2" />
          。そのため、この変化はマウスを使うときだけ出しています。押せることは、ふだんの姿だけで伝わるようにしています。
        </p>
      </Reason>
    ),
  },
  {
    id: "focus",
    title: "フォーカス",
    description: "まわりに輪が出ます。",
    reason: (
      <Reason>
        <p>
          キーボードで操作する人は、この輪を見て、いまどこを選んでいるかを知ります
          <FootnoteMarker id="3" />
          。マウスで押したときには出さず、キーボードで選んだときだけ出しています
          <FootnoteMarker id="4" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "pressed",
    title: "押下",
    description: "少し縮んで、色が濃くなります。",
    reason: (
      <Reason>
        <p>
          押した手ごたえを目で返します。押した見た目がないと、反応していないように感じて、受け付けられたのか迷うことがあります
          <FootnoteMarker id="1" />
          。動きを減らす設定にしている人には、縮むのをやめて、色だけを変えています
          <FootnoteMarker id="5" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "disabled",
    title: "無効",
    description: "影が消えて平らになり、色が灰色に近づきます。",
    reason: (
      <Reason>
        <p>
          押せない理由が見えないと、何をすればよいのか分からなくなります
          <FootnoteMarker id="6" />
          。そのため、使えないボタンはなるべく使わないようにする指針もあります
          <FootnoteMarker id="7" />
          <FootnoteMarker id="8" />
          。このページのボタンは、使えないときもキーボードで選べるようにしています。読み上げで使う人にも、ここにボタンがあると伝わります
          <FootnoteMarker id="8" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "loading",
    title: "処理中",
    description: "ボタンの中で印が回ります。文字と幅はそのままです。",
    reason: (
      <Reason>
        <p>
          押したことは受け付けられて、いま進めているところだと伝えます
          <FootnoteMarker id="1" />
          <FootnoteMarker id="2" />
          。待っている間に押しても、二度は送られません。
        </p>
      </Reason>
    ),
  },
];
