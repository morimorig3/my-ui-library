import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "../../components/layouts/PageHeading";
import { SectionHeading } from "../../components/layouts/SectionHeading";
import { ExplanationItem, ExplanationList } from "../../components/layouts/ExplanationList";
import { CompareDemo } from "../../components/layouts/CompareDemo";
import { MemoWall } from "../../components/layouts/MemoWall";
import { References } from "../../components/layouts/References";
import { FootnoteMarker, FootnotePanel, Footnotes } from "../../components/layouts/Footnote";
import { notes } from "./-checkbox/notes";
import { LiveCheckbox } from "./-checkbox/LiveCheckbox";
import { ColorDemo, DelayDemo, HitAreaDemo, ShapeDemo, WordingDemo } from "./-checkbox/demos";

export const Route = createFileRoute("/ui/checkbox")({
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
        label="第02室"
        title="チェックボックス"
        description="選んだかどうかを、小さな四角の印で見せる部品です。"
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
        <LiveCheckbox />
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
            title="押したら、すぐにチェックが付く"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "すぐ付く",
                    content: <DelayDemo delay={0} />,
                    caption: "押したとたんに、四角に印が付きます。",
                  },
                  {
                    label: "少し遅れる",
                    content: <DelayDemo delay={400} />,
                    caption: "押してから少し遅れて、印が付きます。押せたのか、一瞬迷います。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                部屋の照明スイッチは、押せばすぐに明かりがつきます。ペンで用紙の欄にレ点を書けば、その場で印が残ります。チェックボックスも同じで、押したとたんに印が付くと、自分の手で付けたと感じられます。人が「すぐ」と感じる時間は、ほんのわずかだと言われています
                <FootnoteMarker id="9" />
                。印が付くか付かないかという単純な変化なので、少し遅れるだけでも、効いていないように見えてしまいます。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="文字を押しても、チェックできる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "文字も押せる",
                    content: <HitAreaDemo textClickable />,
                    caption: "四角と文字のどちらを押しても、チェックが切り替わります。",
                  },
                  {
                    label: "四角だけ押せる",
                    content: <HitAreaDemo textClickable={false} />,
                    caption: "文字を押しても何も起きません。小さな四角をねらい直すことになります。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                エレベーターのボタンは、数字だけでなく、まわりの枠全体を押せます。チェックボックスの四角はとても小さいので、となりの文字まで押せるようにしておけば、ねらう的が大きくなります。とくにスマートフォンのような小さな画面で助かります
                <FootnoteMarker id="5" />
                。四角と文字のどちらを押しても選べるようにすることは、昔から勧められてきました
                <FootnoteMarker id="2" />
                。的が大きいほどねらいやすい、という考え方にも沿っています
                <FootnoteMarker id="10" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="四角い形は、いくつでも選べる合図"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "四角に印",
                    content: <ShapeDemo shape="square" />,
                    caption: "いくつでも選べる部品だと、すぐに分かります。",
                  },
                  {
                    label: "丸に点",
                    content: <ShapeDemo shape="round" />,
                    caption:
                      "同じように複数選べるのに、ひとつしか選べない部品に見えます。ほかを選ぶと外れるのではと迷います。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                アンケート用紙の「□」の欄には、当てはまるものすべてに印を付けます。画面のチェックボックスも、この形を見ただけで「ここに印を付ける」「いくつ付けてもよい」と分かります。丸い形は、ひとつだけ選ぶ部品の約束です。そのため、四角か丸かで、選び方の違いが伝わります
                <FootnoteMarker id="2" />
                。ひとつしか選べない場面では、チェックボックスを使わないようにする指針もあります
                <FootnoteMarker id="11" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="印を付けると「はい」になる言葉"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "受け取る",
                    content: <WordingDemo positive />,
                    caption: "付ければ受け取る、外せば受け取らない、と迷わず読めます。",
                  },
                  {
                    label: "受け取らない",
                    content: <WordingDemo positive={false} />,
                    caption: "印を付けると何が起きるのか、一度考え直すことになります。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                「お知らせを受け取らない」という欄に印を付けるとき、一度読み返して、付けると受け取らないのだな、と考え直すことがあります。印を付けることは、それ自体が「そうする」という意味を持ちます。そのため、ラベルは「受け取る」のように、そうする言い方にしておくと、付いていれば「する」、外れていれば「しない」とそのまま読めます
                <FootnoteMarker id="2" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="色が分からなくても、印で分かる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "印が出る",
                    content: <ColorDemo mark />,
                    caption: "選んだ四角に白い印が出ます。色が見分けにくくても、印で分かります。",
                  },
                  {
                    label: "色が変わるだけ",
                    content: <ColorDemo mark={false} />,
                    caption:
                      "四角の色が変わるだけで、印は出ません。色の差が見分けにくいと、付いているのか分かりません。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                用紙のレ点は、黒一色でも付いているかどうかが分かります。画面のチェックボックスも、塗りの色だけでなく、印の形で状態を伝えています。色の違いが分かりにくい人にも、選んだかどうかが伝わります
                <FootnoteMarker id="3" />
                。印や四角の線が背景とはっきり見分けられることも大切です
                <FootnoteMarker id="1" />。
              </p>
            </Body>
          </ExplanationItem>
        </ExplanationList>
      </section>

      <MemoWall
        subTitle="名前の由来"
        title="紙の欄から、画面の四角へ"
        icon={
          <svg
            viewBox="0 0 32 32"
            width="26"
            height="26"
            className="flex-none block"
            aria-hidden="true"
          >
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path
                d="M8 4.5 L21 4.5 L25 8.5 L25 27.5 L8 27.5 Z"
                stroke="#3D3833"
                strokeWidth="1.7"
              />
              <rect x="11" y="10" width="5" height="5" rx="1" stroke="#3D3833" strokeWidth="1.5" />
              <path d="M11.8 12.6 L13.3 14 L16.6 9.6" stroke="#2F7D86" strokeWidth="1.7" />
              <path d="M18.5 12.5 L22 12.5" stroke="#3D3833" strokeWidth="1.5" />
              <rect
                x="11"
                y="18.5"
                width="5"
                height="5"
                rx="1"
                stroke="#3D3833"
                strokeWidth="1.5"
              />
              <path d="M18.5 21 L22 21" stroke="#3D3833" strokeWidth="1.5" />
            </g>
          </svg>
        }
      >
        <Body>
          <p>
            チェックボックスは、英語の「チェック（確かめた印）」と「ボックス（四角い枠）」を合わせた言葉です。辞書には、紙の書類で印を付ける欄という意味と、画面の上で設定を切り替える四角という意味の両方が載っています
            <FootnoteMarker id="12" />
            。紙の欄の呼び名が、そのまま画面の部品にも使われたのかもしれません。
          </p>
          <p className="mt-3">
            1981年に発表されたゼロックスのスターには、すでにオンとオフを切り替える設定がありました。ただ、オンのときは白黒を反転させて示していて、四角に印を付ける形ではありませんでした
            <FootnoteMarker id="13" />
            。アップルのリサの1983年の設計資料には「チェックボックス」という言葉が出てきます
            <FootnoteMarker id="14" />
            。初期のマッキントッシュでは、四角の中にレ点ではなく「×」を描いていました
            <FootnoteMarker id="15" />
            。ウェブでは、1995年の規格で、はいかいいえを選ぶ部品として定められています
            <FootnoteMarker id="16" />。
          </p>
          <p className="mt-3">
            印の意味は、国によっても違います。日本では、テストの答えに「○」を付けて正解、「×」で不正解を表します。レ点を不正解の印に使うこともあるので、ほかの国の人が戸惑うことがあると言われています
            <FootnoteMarker id="17" />。
          </p>
        </Body>
      </MemoWall>

      <References notes={notes} />
    </div>
  );
}
