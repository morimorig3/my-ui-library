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
    title: "未選択",
    description: "濃い色の線で囲んだ、空の丸です。",
    reason: (
      <Reason>
        <p>
          丸の線は、ここで選べると見分けるための手がかりです。線が薄いと、背景にまぎれて見落とされます
          <FootnoteMarker id="1" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "checked",
    title: "選択済み",
    description: "丸の線が色に変わり、中に点が入ります。",
    reason: (
      <Reason>
        <p>
          選んだことを、色だけでなく点の形でも伝えます。色の違いが分かりにくい人にも、点があるかどうかで分かります
          <FootnoteMarker id="2" />
          。点は背景とはっきり見分けられる色にしています
          <FootnoteMarker id="1" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "none",
    title: "どれも選んでいない",
    description: "どの丸も空のまま並んでいます。",
    reason: (
      <Reason>
        <p>
          まだ答えていない、という状態です。ラジオボタンは、一度どれかを選ぶと、この状態には戻せません。そのため、「わからない」のような選択肢を足しておくよう勧める指針があります
          <FootnoteMarker id="3" />
          。最初にひとつ選んでおくかどうかは、指針によって意見が分かれます。選ばずに出すと答え忘れに気づきやすく
          <FootnoteMarker id="3" />
          、ひとつ選んでおくと手間が減り、選び直しもしやすい、とされています
          <FootnoteMarker id="4" />。
        </p>
      </Reason>
    ),
  },
  {
    id: "hover",
    title: "ホバー",
    description: "行の背景がうすく色づき、丸の線が少し濃くなります。",
    reason: (
      <Reason>
        <p>
          丸だけでなく、文字の上でも反応すると分かります。この変化は手がかりを足すためのもので、なくても選んだかどうかは分かります
          <FootnoteMarker id="1" />
          。指で触る画面では、この変化を出しません。
        </p>
      </Reason>
    ),
  },
  {
    id: "focus",
    title: "フォーカス",
    description: "丸のまわりに輪が出ます。",
    reason: (
      <Reason>
        <p>
          キーボードで操作する人は、この輪を見て、いまどこにいるかを知ります。Tabキーで止まるのは、まとまりの中で一か所だけです。矢印キーでとなりへ移ると、選択もいっしょに移ります
          <FootnoteMarker id="5" />
          。マウスで押したときには出さず、キーボードで選んだときだけ出しています。
        </p>
      </Reason>
    ),
  },
  {
    id: "pressed",
    title: "押下",
    description: "押している間、丸の中が少し濃くなります。",
    reason: (
      <Reason>
        <p>
          押したことを、離す前から目で返します。点が入るのは離したときなので、それまでの間も反応していると分かります。
        </p>
      </Reason>
    ),
  },
  {
    id: "disabled",
    title: "無効",
    description: "丸と文字の色が薄くなり、カーソルを乗せても変わりません。",
    reason: (
      <Reason>
        <p>
          いまは選べないことを伝えます。ただ、薄い色は読みにくく、読み上げでも伝わりにくくなります。見てもらいたい内容を、使えない見た目で表さないようにします
          <FootnoteMarker id="6" />。
        </p>
      </Reason>
    ),
  },
];
