import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "../../components/layouts/PageHeading";
import { SectionHeading } from "../../components/layouts/SectionHeading";
import { ExplanationItem, ExplanationList } from "../../components/layouts/ExplanationList";
import { CompareDemo } from "../../components/layouts/CompareDemo";
import { MemoWall } from "../../components/layouts/MemoWall";
import { References } from "../../components/layouts/References";
import { FootnoteMarker, FootnotePanel, Footnotes } from "../../components/layouts/Footnote";
import { notes } from "./-radio/notes";
import { LiveRadio } from "./-radio/LiveRadio";
import { DelayDemo, HitAreaDemo, ShapeDemo, VisibleDemo } from "./-radio/demos";

export const Route = createFileRoute("/ui/radio")({
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
        label="第03室"
        title="ラジオボタン"
        description="いくつかの中から、ひとつだけを選ぶ丸い部品です。"
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
        <LiveRadio />
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
            title="ほかを選ぶと、前の選択がひとりでに外れる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "同時に入れ替わる",
                    content: <DelayDemo delay={0} />,
                    caption: "新しい丸に点が入るのと同時に、前の丸の点が消えます。",
                  },
                  {
                    label: "少し遅れて外れる",
                    content: <DelayDemo delay={500} />,
                    caption:
                      "新しい丸に点が入ってから、少し遅れて前の点が消えます。一瞬ふたつ選ばれて見え、迷います。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                テレビのチャンネルを変えると、前の番組は消えて、新しい番組だけが映ります。ラジオボタンも同じで、ひとつを選ぶと、同じまとまりのほかの選択は自動で外れます
                <FootnoteMarker id="7" />
                。外す手間がいらないので、選ぶことだけに気持ちを向けられます。選んだ丸をもう一度押しても外れず、外れるのはほかを選んだときだけです
                <FootnoteMarker id="8" />
                。新しい丸に点が入るのと、前の丸の点が消えるのが同時なら、入れ替わったことが一度で見て取れます。人が「すぐ」と感じる時間は、ほんのわずかだと言われています
                <FootnoteMarker id="9" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="丸い形は「ひとつだけ」の合図"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "丸に点",
                    content: <ShapeDemo shape="round" />,
                    caption: "見ただけで、ひとつだけ選ぶ部品だと分かります。",
                  },
                  {
                    label: "四角に印",
                    content: <ShapeDemo shape="square" />,
                    caption:
                      "同じようにひとつしか選べないのに、いくつも選べるように見えます。押してほかが外れたとき、戸惑います。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                マークシートの答えの欄は、ひとつだけ塗りつぶす丸い形をしていることがよくあります。画面の部品でも、ラジオボタンは小さな丸で、選ぶと中に点が入ります。いくつでも選べるチェックボックスは、小さな四角です
                <FootnoteMarker id="10" />
                。多くの画面でこの形がそろえられてきたので、押す前から、ひとつだけ選ぶのか、いくつも選べるのか、見当がつきます
                <FootnoteMarker id="11" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="選択肢がぜんぶ見えていると、比べやすい"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "ぜんぶ見える",
                    content: <VisibleDemo visible />,
                    caption: "4つの選択肢が縦に並んでいます。開かなくても見比べられます。",
                  },
                  {
                    label: "開いて選ぶ",
                    content: <VisibleDemo visible={false} />,
                    caption:
                      "同じ4つが一覧に入っています。中身を見るには、まず開かなければなりません。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                食堂の店先に並んだ食品サンプルなら、メニューをめくらなくても、見比べてひとつに決められます。ラジオボタンも、選択肢をはじめから全部画面に出しておきます。開いて選ぶ一覧は、開くまで中身が見えません。全部見えていれば、見比べながら選べます
                <FootnoteMarker id="10" />
                。選択肢が少ないときは、一覧に入れるより、ラジオボタンで並べたほうがよいことが多いとされています。中身を確かめるためだけに一覧を開き、何も選ばずに閉じる人も多く見られました
                <FootnoteMarker id="12" />
                。ただ、選択肢が多いときは、一覧のほうが向くとされています
                <FootnoteMarker id="13" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="丸だけでなく、文字を押しても選べる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "文字も押せる",
                    content: <HitAreaDemo textClickable />,
                    caption: "丸と文字のどちらを押しても選べます。",
                  },
                  {
                    label: "丸だけ押せる",
                    content: <HitAreaDemo textClickable={false} />,
                    caption: "文字を押しても何も起きません。小さな丸をねらい直すことになります。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                引き出しは、細いつまみより、広い取っ手のほうが開けやすいものです。ラジオボタンの丸はとても小さいので、となりの文字まで押せるようにしておくと、ねらう的が大きくなります
                <FootnoteMarker id="10" />
                。文字と丸を結びつけておけば、文字を押しても丸が選ばれ、細かい手の動きが苦手な人の助けにもなります
                <FootnoteMarker id="14" />
                。的が大きいほどねらいやすい、という考え方にも沿っています
                <FootnoteMarker id="15" />。
              </p>
            </Body>
          </ExplanationItem>
        </ExplanationList>
      </section>

      <MemoWall
        subTitle="名前の由来"
        title="ラジオの選局ボタンから、画面の丸へ"
        icon={
          <svg
            viewBox="0 0 32 32"
            width="26"
            height="26"
            className="flex-none block"
            aria-hidden="true"
          >
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              <rect x="4" y="9" width="24" height="17" rx="3" stroke="#3D3833" strokeWidth="1.7" />
              <path d="M10 9 L21 4.5" stroke="#3D3833" strokeWidth="1.5" />
              <circle cx="11" cy="16" r="3.5" stroke="#3D3833" strokeWidth="1.5" />
              <rect
                x="17"
                y="13.5"
                width="3"
                height="4"
                rx="0.8"
                stroke="#3D3833"
                strokeWidth="1.4"
              />
              <rect
                x="21.5"
                y="13.5"
                width="3"
                height="5.5"
                rx="0.8"
                fill="#2F7D86"
                stroke="#2F7D86"
                strokeWidth="1.4"
              />
              <path d="M8 22 L24 22" stroke="#3D3833" strokeWidth="1.4" />
            </g>
          </svg>
        }
      >
        <Body>
          <p>
            ラジオボタンという名前は、ラジオの選局ボタンから来ています。ひとつを押すとほかは切れて、一度に聴ける局はひとつだけ、という動きが同じだからです。アップルの1985年の資料は、カーラジオのボタンのように動くのでこう呼ぶ、と説明しています
            <FootnoteMarker id="16" />
            。マイクロソフトの資料は、ラジオの選局ボタンのように働くから、と書いています。ただ、使う人向けの文書では「オプションボタン」と呼ぶよう決めています
            <FootnoteMarker id="13" />
            。押しボタンで局を選ぶラジオは、1930年代の終わりごろには売り文句になっていました
            <FootnoteMarker id="17" />。
          </p>
          <p className="mt-3">
            1981年のゼロックスのスターにも、ひとつだけを選ぶ設定がありました。ただ、形は丸ではなく四角を並べたもので、選んだものを白黒反転して示していました
            <FootnoteMarker id="18" />
            。「ラジオボタン」という言葉は、アップルの1982年の草稿に、チェックボックスの一種として出てきます。1984年の草稿では、丸いチェックボックスのような形をした、別の部品になっています
            <FootnoteMarker id="19" />
            。名前のほうが、丸い形より先にあったことになります。
          </p>
          <p className="mt-3">
            ウェブでは、1995年の規格で定められました。このころは、どれも選ばれていなければ、ブラウザが最初の選択肢を選ぶ決まりでした
            <FootnoteMarker id="20" />
            。いまの規格では、どれも選ばれていない状態も認められています
            <FootnoteMarker id="7" />。
          </p>
        </Body>
      </MemoWall>

      <References notes={notes} />
    </div>
  );
}
