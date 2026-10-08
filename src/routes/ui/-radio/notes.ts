/** ラジオボタンのページの脚注。id はページでの登場順（操作 → 解説 → 名前の由来） */
export const notes = [
  {
    id: "1",
    body: "W3C「Understanding WCAG 2.2: 1.4.11 Non-text Contrast」。部品とその状態を見分けるのに必要な見た目は、となりの色と3:1以上のコントラストにするよう求めています（レベルAA）。図では、灰色（#949494）の空の丸を既定の状態、となりの色と見分けられる塗りを選んだ状態として示す例を合格としています。ラジオボタンは標準ではホバーで見た目が変わらないので、作り手が足したホバーの見た目は3:1を満たさなくてよいとしています。無効の部品は対象外です。",
  },
  {
    id: "2",
    body: "W3C「Understanding WCAG 2.2: 1.4.1 Use of Color」。色を、情報を伝えるただひとつの見た目の手段にしないよう求めています（レベルA）。ラジオボタンの選んだ状態について直接は書かれていません。",
  },
  {
    id: "3",
    body: "GOV.UK Design System「Radios」。選択肢を最初から選んでおかないよう求めています。選んでおくと、質問を見落としたり、違う答えのまま送ったりしやすくなるためです。一度選ぶと、ブラウザを読み込み直さないかぎり何も選んでいない状態に戻せないので、合うなら「どれにもあてはまらない」「わからない」を足すよう勧めています。",
  },
  {
    id: "4",
    body: "Kara Pernice「Radio Buttons: Select One by Default or Leave All Unselected?」Nielsen Norman Group、2014年。たいていは、最初からひとつ選んでおくことを勧めています。作業が早くなること、選び直して元に戻せること、何も選んでいない状態には一度選ぶと戻れず混乱することを理由に挙げています。性別のように決めつけになる項目や、多くの人が何を選ぶかわからない項目では選んでおかないこと、選んでおく前に試して確かめることも書いています。",
  },
  {
    id: "5",
    body: "W3C WAI「ARIA Authoring Practices Guide: Radio Group Pattern」。Tabキーでまとまりに出入りし、入るときは選んでいるボタン、なければ最初のボタンに移るとしています。Spaceキーで選び、矢印キーで次や前のボタンへ移ると、前の選択が外れて新しいボタンが選ばれます。端では反対側へ回り込みます。ツールバーの中のまとまりでは、矢印キーはフォーカスだけを動かします。",
  },
  {
    id: "6",
    body: "IBM Carbon Design System「Read-only states pattern」。無効の部品は読み上げで伝わりにくく、コントラストの基準も満たさないため、読んでもらいたい情報には使わないよう勧めています。",
  },
  {
    id: "7",
    body: "WHATWG「HTML Living Standard」4.10.5.1.16 Radio Button state。あるラジオボタンが選ばれたら、同じまとまりのほかのラジオボタンは、選ばれていない状態にしなければならないと定めています。どれも選ばれていなければ、どれかが選ばれるまで、全部が選ばれていない状態で表示されます。",
  },
  {
    id: "8",
    body: "Microsoft「Guidelines for radio buttons - Windows apps」Microsoft Learn、2025年。ほかのボタンを選ぶと外れるが、同じボタンをもう一度選んでも外れないと書いています。一度選ぶと、何も選んでいない最初の状態には、使う人の操作では戻せないとしています。",
  },
  {
    id: "9",
    body: "Jakob Nielsen「Response Times: The 3 Important Limits」Nielsen Norman Group、1993年。0.1秒は、すぐに反応したと感じる限界のおよそだとしています。応答の時間一般についての目安で、ラジオボタンで測った値ではありません。",
  },
  {
    id: "10",
    body: "Jakob Nielsen「Checkboxes vs. Radio Buttons」Nielsen Norman Group、2004年。ラジオボタンは小さな丸で、選ぶと中に塗った点が出る、チェックボックスは小さな四角で、選ぶとチェックかXが出る、という標準の見た目を挙げています。選択肢が全部見えて比べやすいので、できればドロップダウンよりラジオボタンを使い、縦に1行ずつ並べるよう勧めています。的が大きいほど速く押せるので、丸だけでなくラベルを押しても選べるようにすることも勧めています。",
  },
  {
    id: "11",
    body: "Apple「Human Interface Guidelines: Toggles」。ラジオボタンは小さな丸いボタンにラベルが続くもので、ふつう2〜5個のまとまりで、どれかひとつしか選べない選択肢を示すとしています。選んだものは塗った丸、選んでいないものは空の丸で表します。この説明は macOS の節にあります。",
  },
  {
    id: "12",
    body: "Lars Söderlund「Drop-Down Usability: When You Should (and Shouldn't) Use Them」Baymard Institute、2018年（2025年更新）。選択肢が5個より少ないか10個より多いとき、ドロップダウンはふつう向かず、1〜4個ならラジオボタンのほうがよいことが多いとしています。テストでは、選択肢の少ない任意の項目のドロップダウンを、55%の人が中身を見るためだけに開き、何も選ばずに閉じました。買い物の支払い画面での観察で、アンケートやアプリでは違うこともありうると断っています。",
  },
  {
    id: "13",
    body: "Microsoft「Radio Buttons」Windows 7 向けの UX ガイド、Microsoft Learn。ラジオの選局ボタンのように働くので、そう呼ばれると書いています。選択肢は2〜7個に収め、8個以上ならドロップダウンなどを使うよう勧めています。ドロップダウンはいま選んでいるものに目を向けさせ、ラジオボタンはすべての選択肢を同じ重みで見せる、という違いも挙げています。技術の文書では radio buttons、それ以外、特に使う人向けの文書では option buttons と呼ぶよう定めています。",
  },
  {
    id: "14",
    body: "W3C WAI「H44: Using label elements to associate text labels with form controls」。label 要素で文字と部品を結びつけると、文字を押しても部品が動き、押せる範囲が広がるとしています。手の動きに障害のある人に役立つと書いています。",
  },
  {
    id: "15",
    body: "Raluca Budiu「Fitts's Law and Its Applications in UX」Nielsen Norman Group、2022年。的に届くまでの時間は、的の大きさと距離で決まるとしています。アイコンに文字を添えて全体を押せるようにすると、的が大きくなります。ラジオボタンそのものについての記事ではありません。",
  },
  {
    id: "16",
    body: "Apple「Inside Macintosh」販促版、1985年。ユーザーインターフェースの指針の章（1984年11月30日付）に「They're called radio buttons because they act like the buttons on a car radio.」とあり、丸い形で、オンのときは黒い丸で塗られると書いています。スキャンの文字起こしで確かめたもので、ページの画像は見ていません。",
  },
  {
    id: "17",
    body: "Richard Arnold「Push-Button Tuning and the Philco 41-225」Antique Radio Classified。Radio News 誌1937年12月号を引いて、1938年型のラジオでは押しボタンでの選局が、販売店にとっていちばん強い売り込みの材料だったと紹介しています。押しボタンの仕組みは、電気式やモーター式などさまざまでした。Radio News の原文は確かめていません。",
  },
  {
    id: "18",
    body: "Xerox「STAR Release 1 Product Software Functional Specification」1981年4月15日版。少ない選択肢のうち、いつもひとつだけが有効な設定を choice parameter と呼び、選択肢を四角につなげて並べ、有効なものを反転して表示するとしています。ひとつを選ぶと、前の選択は外れます。文字起こしの中に radio という語は見当たりませんでした。",
  },
  {
    id: "19",
    body: 'Apple「Inside Macintosh」1984年版の草稿（1982〜1984年の草稿を含む）。1982年10月11日付の章は、ひとつだけ印を付けられるチェックボックスの組を、引用符つきの "radio buttons" のように働くと説明しています。1984年5月30日付の Control Manager の章では、ボタンやチェックボックスと並ぶ部品として挙げ、画面では丸いチェックボックスのように見え、オンのものは小さな黒い丸で塗られると書いています。スキャンの文字起こしで確かめたもので、ページの画像は見ていません。',
  },
  {
    id: "20",
    body: "T. Berners-Lee, D. Connolly「Hypertext Markup Language - 2.0」RFC 1866、1995年11月。同じ name の TYPE=RADIO の組を、いくつかの中からひとつを選ぶ欄としています。組のうちいつもちょうどひとつが選ばれていて、どれにも CHECKED がなければ、ブラウザが最初のものを選ばなければならないと定めています。",
  },
];
