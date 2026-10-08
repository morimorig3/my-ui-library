/** ボタンのページの脚注。id はページでの登場順（操作 → 解説 → 名前の由来） */
export const notes = [
  {
    id: "1",
    body: "Apple「Human Interface Guidelines: Buttons」。目立つボタンは1画面に1〜2個までにすること、独自のボタンには押した状態を必ず入れること（ないと反応していないように感じ、受け付けられたのか迷う）、すぐに終わらない操作ではボタンの中に読み込み中の印を出せること、押せる範囲は少なくとも44×44ptとすることを挙げています。",
  },
  {
    id: "2",
    body: "Kelley Gordon「Button States: Communicate Interaction」Nielsen Norman Group、2025年。ホバーの見た目はマウスを使わない人には見えないこと、処理中はラベルの横に回る印を出すのが一般的であることを挙げています。",
  },
  {
    id: "3",
    body: "W3C「Understanding WCAG 2.2: 2.4.7 Focus Visible」。キーボードで操作できる部品には、フォーカスの印が見える操作方法を用意するよう求めています（レベルAA）。",
  },
  {
    id: "4",
    body: "W3C「Selectors Level 4」9.4節。:focus-visible は、ブラウザがフォーカスの印を描くべきと判断したときに当たります。ポインターで操作し、その要素がキーボード入力を受けない場合は示さない、という目安が書かれています。",
  },
  {
    id: "5",
    body: "W3C「Understanding WCAG 2.2: 2.3.3 Animation from Interactions」（レベルAAA）と、MDN Web Docs「prefers-reduced-motion」。操作で起きる動きを止められるようにすること、端末の「視差効果を減らす」などの設定を prefers-reduced-motion で読み取れることを説明しています。動きで気分が悪くなる人がいるためです。",
  },
  {
    id: "6",
    body: "Vitaly Friedman「Usability Pitfalls of Disabled Buttons, and How To Avoid Them」Smashing Magazine、2021年。無効のボタンは、止められている理由が分からない状態を生むとし、送信したときに確かめて近くで説明する方法を勧めています。",
  },
  {
    id: "7",
    body: "GOV.UK Design System「Button」。無効のボタンはコントラストが低く、一部の人を戸惑わせるので、できるだけ避け、調査で分かりやすくなると示されたときだけ使うとしています。",
  },
  {
    id: "8",
    body: "GitHub Primer「Button guidelines」「Button accessibility」。無効のボタンはフォーカスを受けず、読み上げソフトのフォームモードで見つからないため、一般に避けるとしています。代わりに、フォーカスできる「inactive」の見た目と aria-disabled を使い、理由を伝える方法を示しています。",
  },
  {
    id: "9",
    body: "Topi Kaaresoja, Stephen Brewster, Vuokko Lantz「Towards the temporally perfect virtual button」ACM Transactions on Applied Perception 11巻2号、2014年。スマートフォンの画面で、触れてから反応までの遅れを0〜300ミリ秒で変えた実験です。見た目の反応では、遅れが100ミリ秒と150ミリ秒の間で評価がはっきり下がり、推奨の範囲は30〜85ミリ秒でした。マウスやキーボードにそのまま当てはまるとは示されていません。",
  },
  {
    id: "10",
    body: "Jakob Nielsen「Response Times: The 3 Important Limits」Nielsen Norman Group、1993年。0.1秒はすぐに反応したと感じる限界、1秒は考えの流れがとぎれない限界、10秒は注意を保てる限界としています。経験にもとづく目安です。",
  },
  {
    id: "11",
    body: "Donald A. Norman「Affordance, conventions, and design」interactions 6巻3号、1999年。画面ではどこでもクリックできるので、作り手が気にかけるべきなのは、使う人が「できる」と受け取る操作のほうだと述べています。画面の手がかりの多くは、時間をかけて育った約束ごとだとしています。",
  },
  {
    id: "12",
    body: "Donald A. Norman「Signifiers, not affordances」interactions 15巻6号、2008年。見て分かる手がかりを「シグニファイア」と呼ぶことを提案しています。",
  },
  {
    id: "13",
    body: "Kate Moran「Flat UI Elements Attract Less Attention and Cause Uncertainty」Nielsen Norman Group、2017年。71人の視線を計測した調査で、手がかりの弱いページでは、目当ての要素を見つけるまでの時間が平均22%長く、視線が止まる回数が25%多くなりました。測ったのは見つけるまでの時間で、満足度は測っていません。",
  },
  {
    id: "14",
    body: "I. Scott MacKenzie「Fitts' law as a research and design tool in human-computer interaction」Human-Computer Interaction 7巻、1992年。目標までの距離が長いほど、目標の幅が小さいほど、たどり着くまでの時間が長くなるという、フィッツの法則の解説です。",
  },
  {
    id: "15",
    body: "Pekka Parhi, Amy K. Karlson, Benjamin B. Bederson「Target size study for one-handed thumb use on small touchscreen devices」MobileHCI 2006。片手の親指で操作する場合、単発の操作では9.2mm、続けて押す操作では9.6mmあれば、速さや好みを損なわないとしています。",
  },
  {
    id: "16",
    body: "W3C「Understanding WCAG 2.2: 2.5.8 Target Size (Minimum)」。押せる範囲を24×24 CSSピクセル以上にするよう求めています（レベルAA）。より厳しいレベルAAAの2.5.5では44×44 CSSピクセルです。",
  },
  {
    id: "17",
    body: "Android Developers「Make apps more accessible」。指で操作する要素は、触れる範囲を48×48dp以上にするよう勧め、大きいほどよいとしています。",
  },
  {
    id: "18",
    body: "Apple「Human Interface Guidelines: Accessibility」。部品どうしの間隔は、大きさと同じくらい大切だとしています。枠のある部品のまわりには約12pt、枠のない部品には約24ptの余白を勧めています。",
  },
  {
    id: "19",
    body: "W3C「Understanding WCAG 2.2: 2.5.2 Pointer Cancellation」（レベルA）。押した瞬間には実行せず、離したときに実行するなどして、間違えたら指を外へずらしてやめられるようにすることを求めています。",
  },
  {
    id: "20",
    body: "Jeff Johnson ほか「The Xerox Star: A Retrospective」IEEE Computer、1989年。1981年に発表された Xerox Star の画面部品に「command buttons」があったこと、マウスで指す場所は左ボタンを押した時点で必ず反応を見せ、効果はボタンを離したときに出していたことが書かれています。",
  },
  {
    id: "21",
    body: "Online Etymology Dictionary「button」。古フランス語の boton（芽）から来ていて、bouter（突く、押す）にさかのぼります。英語では1300年ごろから服の留め具などの意味で使われ、指で押して電気の回路を閉じる突起の意味は1840年代からです。",
  },
  {
    id: "22",
    body: "David Trotter「Making Doorbells Ring」London Review of Books 40巻22号、2018年。Rachel Plotnick『Power Button』（MIT Press、2018年）の書評で、世紀の変わり目には呼び鈴、使用人やエレベーターの呼び出し、照明などに押しボタンが使われていたという同書の記述を紹介しています。",
  },
  {
    id: "23",
    body: "Ivan E. Sutherland「Sketchpad: A man-machine graphical communication system」MIT 博士論文、1963年（ケンブリッジ大学の技術報告として2003年に再刊）。消す、動かすといった指示は、作者の前の箱に付いた押しボタンで出していました。",
  },
];
