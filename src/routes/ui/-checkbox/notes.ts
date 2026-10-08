/** チェックボックスのページの脚注。id はページでの登場順（操作 → 解説 → 名前の由来） */
export const notes = [
  {
    id: "1",
    body: "W3C「Understanding WCAG 2.2: 1.4.11 Non-text Contrast」。部品とその状態を見分けるのに必要な見た目は、となりの色と3:1以上のコントラストにするよう求めています（レベルAA）。チェックボックスの中の印も例に挙がっています。白地に#9D9D9Dの枠線（2.7:1）や、#AAAのフォーカスの輪（2.3:1）は足りない例です。無効の部品は対象外です。",
  },
  {
    id: "2",
    body: "Jakob Nielsen「Checkboxes vs. Radio Buttons」Nielsen Norman Group、2004年。標準の見た目（チェックボックスは四角にチェックかX、ラジオボタンは丸に点）を使うこと、チェックボックスはいくつ選んでもよいことを挙げています。四角とラベルのどちらを押しても選べるようにすること、ラベルは肯定的な言い方にして「これ以上メールを送らないで」のような否定を避けること、受け取るかどうかを選ぶ項目は最初は空にしておくことも勧めています。",
  },
  {
    id: "3",
    body: "W3C「Understanding WCAG 2.2: 1.4.1 Use of Color」。色を、情報を伝えるただひとつの見た目の手段にしないよう求めています（レベルA）。チェックボックスについて直接は書かれていません。",
  },
  {
    id: "4",
    body: 'W3C WAI「ARIA Authoring Practices Guide: Checkbox Pattern」。フォーカスがあるときSpaceキーで状態を切り替えることを挙げています。3状態のチェックボックスでは、下の項目が全部選ばれていればチェック済み、一部なら一部選択（aria-checked="mixed"）、全部外れていれば未チェックを示すとしています。',
  },
  {
    id: "5",
    body: 'MDN Web Docs「<input type="checkbox">」。関連づけたラベルを押しても切り替えられ、スマートフォンのような小さな画面では特に便利だとしています。中間の状態（indeterminate）は見た目だけの変化で、送られる値は変わらず、JavaScriptからしか設定できないと説明しています。',
  },
  {
    id: "6",
    body: "GOV.UK Frontend「checkboxes/_mixin.scss」。ホバーできない端末（iOSなどのタッチ端末）ではホバーの見た目を出さない、というコメントを付けて、(hover: none) と (pointer: coarse) のときにホバーの見た目を消しています。押したあとに色が残るから、という理由までは書かれていません。",
  },
  {
    id: "7",
    body: "W3C「Selectors Level 4」:focus-visible。ブラウザがフォーカスの印を描くべきと判断したときにだけ当たる、と定めています。",
  },
  {
    id: "8",
    body: "IBM Carbon Design System「Read-only states pattern」。無効の部品は読み上げで伝わりにくく、コントラストの基準も満たさないため、読んでもらいたい情報には使わないよう勧めています。",
  },
  {
    id: "9",
    body: "Jakob Nielsen「Response Times: The 3 Important Limits」Nielsen Norman Group、1993年。0.1秒は、すぐに反応したと感じる限界のおよそだとしています。1993年の本文は、この速さなら結果を見せるだけでよいとしています。2014年の追記では、0.1秒を画面の部品を直接動かしていると感じる限界とし、選んだものはハイライトするなどして示すべきだとも書いています。経験にもとづく目安で、チェックボックスで測った値ではありません。",
  },
  {
    id: "10",
    body: "Raluca Budiu「Fitts's Law and Its Applications in UX」Nielsen Norman Group、2022年。アイコンと文字を合わせた的はアイコンだけより大きく、フィッツの法則からは当てやすいと考えられるとして、アイコンだけを押せる範囲にしないよう勧めています。チェックボックスそのものについての記事ではありません。",
  },
  {
    id: "11",
    body: "GOV.UK Design System「Checkboxes」。複数の選択肢から選ぶときにチェックボックスを使い、ひとつしか選べないときは使わないとしています。選択肢を最初から選んでおかないことも求めています。",
  },
  {
    id: "12",
    body: "Wiktionary「checkbox」。check と box を合わせた語としています。意味として、紙の書式で印を付けられる欄と、画面の上で設定のオンとオフを切り替える四角の2つを挙げ、同じ意味の語に tick box を挙げています。",
  },
  {
    id: "13",
    body: "David Canfield Smith, Charles Irby, Ralph Kimball, Eric Harslem「The Star User Interface: An Overview」AFIPS National Computer Conference、1982年。1981年4月に発表された Xerox 8010 Star には、オンとオフを切り替える独立した設定（state parameters）があり、オンのときは白黒を反転して表示したと書かれています。",
  },
  {
    id: "14",
    body: "Apple「Lisa User Interface Guidelines」1983年（社内文書の断片、GUIdebook の転載）。フォームの節に「text fields, check boxes, and buttons」とあります。今回調べた範囲では、画面の部品の文書に check boxes という語が出てくるいちばん古い例です。これより前の例がないとは言い切れません。",
  },
  {
    id: "15",
    body: "Apple「Inside Macintosh: Macintosh Toolbox Essentials」Control Manager の章。チェックボックスをオンにすると、中に「X」を描くと書かれています。確かめたのは1990年代の版で、1985年の初版の文言は確かめていません。",
  },
  {
    id: "16",
    body: "T. Berners-Lee, D. Connolly「Hypertext Markup Language - 2.0」RFC 1866、1995年11月。INPUT TYPE=CHECKBOX を、はいかいいえの選択（boolean choice）を表すものとしています。",
  },
  {
    id: "17",
    body: "Nippon.com「Maru and Batsu: Circles and Crosses for Saying Yes and No」2025年。日本では○が正しい、×が誤りを表すこと、テストでは✓を不正解の印に使うこともあり、日本以外の人が戸惑うことがあると書いています。",
  },
];
