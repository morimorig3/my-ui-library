import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeading } from "../../components/layouts/PageHeading";
import { SectionHeading } from "../../components/layouts/SectionHeading";
import { ExplanationItem, ExplanationList } from "../../components/layouts/ExplanationList";
import { CompareDemo } from "../../components/layouts/CompareDemo";
import { MemoWall } from "../../components/layouts/MemoWall";
import { References } from "../../components/layouts/References";
import { FootnoteMarker, FootnotePanel, Footnotes } from "../../components/layouts/Footnote";
import { notes } from "./-button/notes";
import { LiveButton } from "./-button/LiveButton";
import {
  HitAreaDemo,
  PressFeedbackDemo,
  ReleaseDemo,
  SignifierDemo,
  WaitingDemo,
} from "./-button/demos";

export const Route = createFileRoute("/ui/button")({
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
        label="第01室"
        title="ボタン"
        description="押せることを見せて、押したことを返す部品です。"
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
        <LiveButton />
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
            title="押したら、すぐに返事がある"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "すぐ変わる",
                    content: <PressFeedbackDemo delay={0} />,
                    caption: "押すとすぐに、ボタンが縮んで色が濃くなります。",
                  },
                  {
                    label: "少し遅れる",
                    content: <PressFeedbackDemo delay={300} />,
                    caption: "同じ変化が、押してから少し遅れて出ます。押せたのか、一瞬迷います。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                エレベーターのボタンを押してランプがつくと、もう押さなくていいと分かります。ランプがつかないと、つい何度も押してしまいます。画面のボタンも同じで、押した見た目がすぐに出ると、受け付けられたと分かります
                <FootnoteMarker id="1" />
                。スマートフォンの画面で試した実験では、押してから見た目が変わるまでが少し遅れただけで、ボタンの出来が低く評価されました
                <FootnoteMarker id="9" />
                。人が「すぐ」と感じる時間は、ほんのわずかだと言われています
                <FootnoteMarker id="10" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="待たせるときは、待っていると伝える"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "待っていると伝える",
                    content: <WaitingDemo showSpinner />,
                    caption: "押すとすぐに印が回り、しばらくして終わります。",
                  },
                  {
                    label: "何も変わらない",
                    content: <WaitingDemo showSpinner={false} />,
                    caption: "押してもしばらく何も起きず、急に終わります。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                券売機でボタンを押したあと「しばらくお待ちください」と出ると、待てばよいと分かります。すぐに終わらない処理では、ボタンの中に回る印を出すと、場所を取らずに待つ理由を伝えられます
                <FootnoteMarker id="1" />
                。待ち時間が長くなると考えの流れがとぎれ、さらに長いと注意が続かなくなると言われています
                <FootnoteMarker id="10" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="見ただけで押せると分かる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "ボタンらしい",
                    content: <SignifierDemo looksLikeButton />,
                    caption: "色のついた形の中に文字があり、押せる場所だとひと目で分かります。",
                  },
                  {
                    label: "文字だけ",
                    content: <SignifierDemo looksLikeButton={false} />,
                    caption: "まわりの文と同じ見た目なので、押せるのかどうか迷います。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                ドアに平らな板が付いていれば押し、握る取っ手なら引くと、見ただけで分かります。画面の上では、どこでもクリックすること自体はできます。そのため大切なのは、ここを押せばよいと見て分かる手がかりです
                <FootnoteMarker id="11" />
                <FootnoteMarker id="12" />
                。こうした手がかりの多くは、使ううちに覚えた約束ごとでもあります
                <FootnoteMarker id="11" />
                。手がかりの弱いボタンが並ぶ画面では、目当ての場所を見つけるまでに時間がかかったという調査もあります
                <FootnoteMarker id="13" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="押せる範囲を広くとる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "押せる範囲が広い",
                    content: <HitAreaDemo wide />,
                    caption: "ボタンのどこを押しても反応します。",
                  },
                  {
                    label: "押せる範囲が狭い",
                    content: <HitAreaDemo wide={false} />,
                    caption: "見た目は同じでも、真ん中の文字の上を押したときしか反応しません。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                電卓のキーが小さく詰まっていると、となりの数字を押し間違えます。ボタンは大きく、近くにあるほど、すばやくねらえます
                <FootnoteMarker id="14" />
                。指で操作する画面では、小さすぎると速さや正確さが落ちるという実験もあります
                <FootnoteMarker id="15" />
                。そのため、各社の指針やウェブの基準は、押せる範囲の小ささに下限を決めています
                <FootnoteMarker id="1" />
                <FootnoteMarker id="16" />
                <FootnoteMarker id="17" />
                。大きさと同じくらい、となりのボタンとの間をあけることも大切です
                <FootnoteMarker id="18" />。
              </p>
            </Body>
          </ExplanationItem>

          <ExplanationItem
            title="離すまでは、やめられる"
            demo={
              <CompareDemo
                options={[
                  {
                    label: "離したときに動く",
                    content: <ReleaseDemo onRelease />,
                    caption: "押したまま外へずらして離すと、何も起きません。",
                  },
                  {
                    label: "押した瞬間に動く",
                    content: <ReleaseDemo onRelease={false} />,
                    caption: "押したとたんに動くので、途中でやめられません。",
                  },
                ]}
              />
            }
          >
            <Body>
              <p>
                押しかけたボタンが違うと気づいたら、指を離さずに外へずらせば取りやめられます。ボタンが、押したときではなく、指を離したときに動くからです
                <FootnoteMarker id="19" />
                。この作法は、1980年代はじめのコンピューターにもすでに見られます
                <FootnoteMarker id="20" />。
              </p>
            </Body>
          </ExplanationItem>
        </ExplanationList>
      </section>

      <MemoWall
        subTitle="名前の由来"
        title="芽から、押しボタンへ"
        icon={
          <svg
            viewBox="0 0 32 32"
            width="26"
            height="26"
            className="flex-none block"
            aria-hidden="true"
          >
            <g fill="none" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 21 L16 12.5" stroke="#3D3833" strokeWidth="1.7" />
              <path
                d="M16 14.5 C12.8 14.6 10.2 12.4 9.8 8.8 C13.2 8.6 15.8 10.8 16 14.5 Z"
                stroke="#2F7D86"
                strokeWidth="1.7"
              />
              <path
                d="M16 12.8 C16.4 9.6 18.8 7.4 22.2 7.6 C21.9 10.9 19.4 13 16 12.8 Z"
                stroke="#2F7D86"
                strokeWidth="1.7"
              />
              <ellipse cx="16" cy="24.5" rx="9" ry="3.5" stroke="#3D3833" strokeWidth="1.7" />
              <circle cx="13.2" cy="24.5" r=".9" fill="#3D3833" />
              <circle cx="18.8" cy="24.5" r=".9" fill="#3D3833" />
            </g>
          </svg>
        }
      >
        <Body>
          <p>
            ボタンという言葉は、古いフランス語で「芽」を表す言葉から来ています。その言葉は「突く、押す」という意味の言葉につながっていて、もとは小さく突き出たものを指していました。英語では、まず服のボタンの意味で使われました
            <FootnoteMarker id="21" />。
          </p>
          <p className="mt-3">
            指で押し込んで電気を流す突起もボタンと呼ばれるようになったのは、1840年代からです
            <FootnoteMarker id="21" />
            。そのあと、呼び鈴やエレベーター、照明など、暮らしのあちこちで押しボタンが使われるようになりました
            <FootnoteMarker id="22" />。
          </p>
          <p className="mt-3">
            1960年代はじめの、画面に図を描く仕組みでは、ボタンはまだ画面の外の箱に付いていました
            <FootnoteMarker id="23" />
            。画面の中のボタンに名前が付いた早い例には、1981年に発表されたゼロックスのスターがあります
            <FootnoteMarker id="20" />
            。ただ、これが最初だと言い切れる資料は見つかっていません。
          </p>
        </Body>
      </MemoWall>

      <References notes={notes} />
    </div>
  );
}
