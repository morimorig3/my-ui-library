import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "../../components/layouts/PageHeading";
import { SectionHeading } from "../../components/layouts/SectionHeading";
import { ExplanationItem, ExplanationList } from "../../components/layouts/ExplanationList";
import { CompareDemo } from "../../components/layouts/CompareDemo";
import { MemoWall } from "../../components/layouts/MemoWall";
import { References } from "../../components/layouts/References";
import { FootnoteMarker, FootnotePanel, Footnotes } from "../../components/layouts/Footnote";
import { notes } from "./-select/notes";
import { LiveSelect } from "./-select/LiveSelect";
import { ArrowDemo, LabelDemo, TypeaheadDemo } from "./-select/demos";

export const Route = createFileRoute("/ui/select")({
  component: RouteComponent,
});

/** 本文と、その下で開く脚注 */
const Body = ({ children }: { children: ReactNode }) => (
  <Footnotes notes={notes}>
    {children}
    <div className="text-sm">
      <FootnotePanel />
    </div>
  </Footnotes>
);

function RouteComponent() {
  return (
    <div className="flex flex-col gap-y-16">
      <PageHeading
        label="第04室"
        title="セレクトボックス"
        description="たたんだ一覧を開いて、その中からひとつを選ぶ部品です。"
      />

      <section>
        <SectionHeading
          label="操作"
          subLabel="触る"
          title="触るとどうなるか"
          icon={
            <svg
              viewBox="0 0 32 32"
              width="30"
              height="30"
              className="flex-none block"
              aria-hidden="true"
            >
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <ellipse cx="16" cy="25" rx="10" ry="3.2" stroke="#2F7D86" strokeWidth="1.8" />
                <path
                  d="M13 22.5 L13 9.5 C13 7.8 15.6 7.8 15.6 9.5 L15.6 16 M15.6 15 C15.6 13.6 18 13.6 18 15 L18 16.4 M18 15.8 C18 14.5 20.3 14.5 20.3 15.8 L20.3 20 C20.3 21.6 19.6 22.6 18.8 23.2"
                  stroke="#2E2A26"
                  strokeWidth="1.8"
                />
                <path
                  d="M8.5 7 L10 8.6 M7 11.5 L9 11.6 M11.8 4.5 L12.2 6.6"
                  stroke="#2F7D86"
                  strokeWidth="1.6"
                />
              </g>
            </svg>
          }
        />
        <LiveSelect />
      </section>

      <section>
        <SectionHeading
          label="解説"
          subLabel="読む・見比べる"
          title="なぜ気持ちいいと感じるのか"
          icon={
            <svg
              viewBox="0 0 32 32"
              width="30"
              height="30"
              className="flex-none block"
              aria-hidden="true"
            >
              <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path
                  d="M16 9.5 C12.5 7.2 8 7 4.5 8 L4.5 24.5 C8 23.5 12.5 23.7 16 26 C19.5 23.7 24 23.5 27.5 24.5 L27.5 8 C24 7 19.5 7.2 16 9.5 Z"
                  stroke="#2E2A26"
                  strokeWidth="1.8"
                />
                <path d="M16 9.5 L16 26" stroke="#2E2A26" strokeWidth="1.6" />
                <path
                  d="M20.5 8.3 L20.5 15 L22.4 13.4 L24.3 15 L24.3 7.9"
                  stroke="#2F7D86"
                  strokeWidth="1.6"
                />
              </g>
            </svg>
          }
        />
        <ExplanationList>
          <ExplanationItem
            title="いまの値と、開けるしるしが、いつも見えている"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "矢印がある",
                    content: <ArrowDemo arrow />,
                    caption: "矢印があるので、押すと候補が出てくると分かります。",
                  },
                  {
                    label: "矢印がない",
                    content: <ArrowDemo arrow={false} />,
                    caption:
                      "今の値は出ていますが、ただの文字に見え、押せることに気づきにくくなります。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                レストランの入り口に「本日のスープ」の札があれば、今日のスープが分かります。店員さんに聞けば、ほかの候補も教えてもらえます。セレクトボックスも、閉じているあいだは、いま選んでいる値を枠の中に出しておき、ほかの候補は開いたときにだけ見せます
                <FootnoteMarker id="10" />
                。枠の右端に添える下向きの矢印は、開いて選ぶ欄によく付いている目じるしです
                <FootnoteMarker id="7" />
                <FootnoteMarker id="10" />
                。昔のMacの指針にも、下向きの三角形を付けると書かれていました
                <FootnoteMarker id="11" />
                。開かなくても中身の見当がつくよう、何を選ぶ欄かを言葉で添えておくことも勧められています
                <FootnoteMarker id="2" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="マウスがなくても、打つだけで目当てへ飛べる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "打つと飛べる",
                    content: <TypeaheadDemo typeahead />,
                    caption: "数字を打つだけで、長い一覧でもすぐ目当ての時刻に届きます。",
                  },
                  {
                    label: "打っても動かない",
                    content: <TypeaheadDemo typeahead={false} />,
                    caption: "数字を打っても動きません。矢印キーで1つずつたどることになります。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                辞書の「つめ」を使えば、頭の文字から、目当てのページの近くへ一気に開けます。セレクトボックスも、キーボードだけで開いて選べるようにしておくことが求められています
                <FootnoteMarker id="12" />
                。矢印キーで1つずつたどるだけでなく、頭の文字を打てば、その文字で始まる項目へ飛べるようにする作り方が示されています
                <FootnoteMarker id="8" />
                。長い一覧で役に立ち、画面を見ずに操作する人の助けにもなります
                <FootnoteMarker id="7" />
                。見た目をそろえるために一から作り直したセレクトボックスでは、こうした動きが抜け落ちやすいと報告されています
                <FootnoteMarker id="13" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="選んだあとも、何の欄かが分かる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "枠の外にラベル",
                    content: <LabelDemo outside />,
                    caption: "選んだあとも、何を選んだ欄かがひと目で分かります。",
                  },
                  {
                    label: "枠の中の表示だけ",
                    content: <LabelDemo outside={false} />,
                    caption: "選ぶと「都道府県を選択」が消え、何の欄だったかが分からなくなります。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                引き出しにラベルを貼っておけば、中身を入れたあとも、何をしまう場所か迷いません。セレクトボックスにも、ほかの入力欄と同じように、何を選ぶ欄かを示すラベルを付けるよう勧められています
                <FootnoteMarker id="14" />
                。ラベルの代わりに、枠の中に「都道府県を選択」のような最初の表示を置く作りもあります。ただ、値を選ぶとその文字は消えてしまいます。入力欄の中の薄い文字をラベル代わりにすると、入れたあとに何の欄か分からなくなり、見直しもしにくくなる、と指摘されています
                <FootnoteMarker id="15" />
                。セレクトボックスでも、同じことが起こりそうです。
              </p>
            </Body>
          </ExplanationItem>
        </ExplanationList>
      </section>

      <MemoWall
        subTitle="名前の由来"
        title="「選び出す」から、プルダウンへ"
        icon={
          <svg
            viewBox="0 0 32 32"
            width="26"
            height="26"
            className="flex-none block"
            aria-hidden="true"
          >
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="5" width="24" height="8" rx="2.5" stroke="#3D3833" strokeWidth="1.7" />
              <path d="M21 8 L23 10 L25 8" stroke="#2F7D86" strokeWidth="1.5" />
              <rect
                x="4"
                y="15.5"
                width="24"
                height="12"
                rx="2.5"
                stroke="#3D3833"
                strokeWidth="1.5"
              />
              <path d="M8 19.5 L20 19.5" stroke="#3D3833" strokeWidth="1.4" />
              <path d="M8 23.5 L17 23.5" stroke="#2F7D86" strokeWidth="1.4" />
            </g>
          </svg>
        }
      >
        <Body>
          <p>
            セレクトは、英語で「選び出す」という意味です。「離して」と「集める」を合わせたラテン語から来ています
            <FootnoteMarker id="16" />。
          </p>
          <p className="mt-3">
            ウェブの部品になったのは1993年のことです。当時のブラウザの試作版では、一覧から選ぶ欄は、入力欄の一種として作られていました
            <FootnoteMarker id="17" />
            。そのすぐあと、規格づくりに関わっていた人が、別の部品にして「SELECT」と名付けるよう提案しました
            <FootnoteMarker id="18" />
            。この名前のまま、1995年の規格に入っています
            <FootnoteMarker id="19" />。
          </p>
          <p className="mt-3">
            日本では「プルダウン」とも呼ばれます。グーグルのフォームの日本語版も、この形式を「プルダウン」と呼んでいます
            <FootnoteMarker id="20" />
            。一方で、マイクロソフトのエクセルの日本語のヘルプでは「ドロップダウン リスト」です
            <FootnoteMarker id="21" />
            。アップルは、選んだ項目が枠に出る一覧を「ポップアップ」と呼び、「プルダウン」とは分けてきました
            <FootnoteMarker id="22" />
            。アップルの呼び方に合わせると、セレクトボックスは「ポップアップ」の仲間になります。
          </p>
        </Body>
      </MemoWall>

      <References notes={notes} />
    </div>
  );
}
