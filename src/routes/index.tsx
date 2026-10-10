import { createFileRoute, Link } from "@tanstack/react-router";
import { SectionHeading } from "../components/layouts/SectionHeading";
import { Hero, type Artwork, type GalleryWork } from "../components/Hero";
import { ComponentCard } from "../components/ComponentCard";
import buttonImage from "../assets/images/info-graphic-button.svg?url";
import checkboxImage from "../assets/images/info-graphic-checkbox.svg?url";
import radioImage from "../assets/images/info-graphic-radio.svg?url";
import selectImage from "../assets/images/info-graphic-select.svg?url";
import toggleImage from "../assets/images/info-graphic-toggle.svg?url";
import chipImage from "../assets/images/info-graphic-chip.svg?url";
import textinputImage from "../assets/images/info-graphic-textinput.svg?url";
import sliderImage from "../assets/images/info-graphic-slider.svg?url";
import tabsImage from "../assets/images/info-graphic-tabs.svg?url";
import accordionImage from "../assets/images/info-graphic-accordion.svg?url";
import paginationImage from "../assets/images/info-graphic-pagination.svg?url";
import modalImage from "../assets/images/info-graphic-modal.svg?url";
import toastImage from "../assets/images/info-graphic-toast.svg?url";
import tooltipImage from "../assets/images/info-graphic-tooltip.svg?url";
import progressImage from "../assets/images/info-graphic-progress.svg?url";
import segmentedImage from "../assets/images/info-graphic-segmented.svg?url";
import textareaImage from "../assets/images/info-graphic-textarea.svg?url";
import searchImage from "../assets/images/info-graphic-search.svg?url";
import stepperImage from "../assets/images/info-graphic-stepper.svg?url";
import datepickerImage from "../assets/images/info-graphic-datepicker.svg?url";
import fileuploadImage from "../assets/images/info-graphic-fileupload.svg?url";
// import breadcrumbImage from "../assets/images/info-graphic-breadcrumb.svg?url";
// import menuImage from "../assets/images/info-graphic-menu.svg?url";
// import drawerImage from "../assets/images/info-graphic-drawer.svg?url";
// import bottomnavImage from "../assets/images/info-graphic-bottomnav.svg?url";
// import stepsImage from "../assets/images/info-graphic-steps.svg?url";
// import alertImage from "../assets/images/info-graphic-alert.svg?url";
// import badgeImage from "../assets/images/info-graphic-badge.svg?url";
// import spinnerImage from "../assets/images/info-graphic-spinner.svg?url";
// import skeletonImage from "../assets/images/info-graphic-skeleton.svg?url";
// import cardImage from "../assets/images/info-graphic-card.svg?url";
// import listImage from "../assets/images/info-graphic-list.svg?url";
// import tableImage from "../assets/images/info-graphic-table.svg?url";
// import avatarImage from "../assets/images/info-graphic-avatar.svg?url";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

type Item = {
  imageUrl: string;
  name: string;
  description: string;
  /** 解説ページがあるときだけ渡す。ないものは準備中のカードになる */
  to?: "/ui/button" | "/ui/checkbox" | "/ui/radio" | "/ui/select";
  /** トップの回廊に飾るときの額。渡したものだけが回廊に並ぶ */
  artwork?: Artwork;
};

type Group = {
  id: string;
  label: string;
  title: string;
  lead: string;
  items: Item[];
};

// 実装するか決まっていない部品は、コメントアウトして一覧に出さない
const groups: Group[] = [
  {
    id: "press",
    label: "押す・選ぶ",
    title: "押したり選んだりするUI",
    lead: "押したときや選んだときに、すぐ手ごたえを返す部品です。",
    items: [
      {
        imageUrl: buttonImage,
        name: "ボタン",
        description: "「押せる感」「押した感」を与えるには。",
        to: "/ui/button",
        artwork: { width: 16, height: 12, frame: "dark", picture: "button" },
      },
      {
        imageUrl: checkboxImage,
        name: "チェックボックス",
        description: "選んだことが、ひと目で伝わるには。",
        to: "/ui/checkbox",
        artwork: { width: 12, height: 15, frame: "wood", picture: "checkbox" },
      },
      {
        imageUrl: radioImage,
        name: "ラジオボタン",
        description: "ひとつだけ選ぶ感じが、わかりやすくなるには。",
        to: "/ui/radio",
        artwork: { width: 14, height: 14, frame: "cream", picture: "radio" },
      },
      {
        imageUrl: toggleImage,
        name: "トグルスイッチ",
        description: "いまオンかオフか、迷わずわかるには。",
        artwork: { width: 13, height: 10, frame: "wood", picture: "toggle" },
      },
      {
        imageUrl: chipImage,
        name: "チップ",
        description: "いくつでも選べることが、さっと伝わるには。",
      },
      {
        imageUrl: segmentedImage,
        name: "セグメンテッドコントロール",
        description: "並んだ中から、ひとつをさっと切りかえるには。",
      },
    ],
  },
  {
    id: "input",
    label: "入力する",
    title: "文字や値を入力するUI",
    lead: "書いた文字や決めた値を受けとる部品です。",
    items: [
      {
        imageUrl: textinputImage,
        name: "テキスト入力",
        description: "何を書けばいいか、迷わず入力できるには。",
      },
      {
        imageUrl: selectImage,
        name: "セレクトボックス",
        description: "たたんだ一覧から、迷わず選べるには。",
        to: "/ui/select",
        artwork: { width: 13, height: 16, frame: "cream", picture: "select" },
      },
      {
        imageUrl: sliderImage,
        name: "スライダー",
        description: "動かしながら、ちょうどいい値を選べるには。",
        artwork: { width: 17, height: 11, frame: "dark", picture: "slider" },
      },
      {
        imageUrl: textareaImage,
        name: "テキストエリア",
        description: "長い文章も、気持ちよく書けるには。",
      },
      {
        imageUrl: searchImage,
        name: "検索ボックス",
        description: "探しているものに、すぐたどり着けるには。",
      },
      {
        imageUrl: stepperImage,
        name: "ステッパー",
        description: "数をひとつずつ、思いどおりに変えられるには。",
      },
      {
        imageUrl: datepickerImage,
        name: "日付ピッカー",
        description: "カレンダーから、迷わず日にちを選べるには。",
      },
      {
        imageUrl: fileuploadImage,
        name: "ファイルアップロード",
        description: "ファイルを、迷わず渡せるには。",
      },
    ],
  },
  {
    id: "navigate",
    label: "移動する・ひらく",
    title: "画面を行き来するUI",
    lead: "いまいる場所と、次に行ける場所を教えてくれる部品です。",
    items: [
      {
        imageUrl: tabsImage,
        name: "タブ",
        description: "いまどこを見ているか、すぐわかるには。",
      },
      {
        imageUrl: accordionImage,
        name: "アコーディオン",
        description: "開けば続きがあることが、伝わるには。",
      },
      {
        imageUrl: paginationImage,
        name: "ページネーション",
        description: "いまどのページにいるか、迷わないには。",
      },
      // {
      //   imageUrl: breadcrumbImage,
      //   name: "パンくずリスト",
      //   description: "いまいる場所と帰り道がひと目でわかるには。",
      // },
      // {
      //   imageUrl: menuImage,
      //   name: "ドロップダウンメニュー",
      //   description: "かくれた選択肢をすっと出すには。",
      // },
      // {
      //   imageUrl: drawerImage,
      //   name: "ドロワー",
      //   description: "画面のはしから道案内を出すには。",
      // },
      // {
      //   imageUrl: bottomnavImage,
      //   name: "ボトムナビゲーション",
      //   description: "親指の届くところで行き来できるには。",
      // },
      // {
      //   imageUrl: stepsImage,
      //   name: "ステップ表示",
      //   description: "いま何番目の手順かがわかるには。",
      // },
    ],
  },
  {
    id: "notify",
    label: "知らせる",
    title: "お知らせを伝えるUI",
    lead: "知ってほしいことを、おどろかせずに伝える部品です。",
    items: [
      {
        imageUrl: modalImage,
        name: "モーダル",
        description: "いま答えてほしいことに、集中してもらうには。",
      },
      {
        imageUrl: toastImage,
        name: "トースト",
        description: "じゃまをせずに、できたことを知らせるには。",
      },
      {
        imageUrl: tooltipImage,
        name: "ツールチップ",
        description: "ちょっとした説明を、そっと添えるには。",
      },
      {
        imageUrl: progressImage,
        name: "プログレスバー",
        description: "あとどれくらいか、待つ人に伝わるには。",
      },
      // {
      //   imageUrl: alertImage,
      //   name: "アラート",
      //   description: "気づいてほしいことを落ち着いて伝えるには。",
      // },
      // {
      //   imageUrl: badgeImage,
      //   name: "バッジ",
      //   description: "新しいお知らせに気づけるには。",
      // },
      // {
      //   imageUrl: spinnerImage,
      //   name: "スピナー",
      //   description: "動いているとわかって安心して待てるには。",
      // },
      // {
      //   imageUrl: skeletonImage,
      //   name: "スケルトン",
      //   description: "中身が届くまで待ちやすくするには。",
      // },
    ],
  },
  // 未実装のカードしかないので、実装するまでカテゴリごと隠す
  // {
  //   id: "display",
  //   label: "見せる・まとめる",
  //   title: "情報を並べて見せるUI",
  //   lead: "たくさんの情報を整理して見やすく並べる部品です。",
  //   items: [
  //     {
  //       imageUrl: cardImage,
  //       name: "カード",
  //       description: "ひとまとまりの情報を手に取りやすくするには。",
  //     },
  //     {
  //       imageUrl: listImage,
  //       name: "リスト",
  //       description: "同じ種類のものをすっきり並べるには。",
  //     },
  //     {
  //       imageUrl: tableImage,
  //       name: "テーブル",
  //       description: "比べたいものを見比べやすくするには。",
  //     },
  //     {
  //       imageUrl: avatarImage,
  //       name: "アバター",
  //       description: "だれなのかがひと目でわかるには。",
  //     },
  //   ],
  // },
];

// 番号はカード一覧での並び順。額の設定があるものだけを回廊に飾る
const galleryWorks: GalleryWork[] = groups
  .flatMap((group) => group.items)
  .flatMap(({ name, artwork }, index) => (artwork ? [{ no: index + 1, name, artwork }] : []));

function IndexPage() {
  return (
    <div>
      <Hero nextId="ui-list" works={galleryWorks} />
      <div id="ui-list" className="grid gap-y-20 max-w-215 mx-auto py-16">
        {groups.map((group) => (
          <section key={group.id}>
            <SectionHeading
              label={group.label}
              subLabel={`${group.items.length}点`}
              title={group.title}
              className="mb-3"
            />
            <p className="mb-8 text-sm leading-loose">{group.lead}</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {group.items.map(({ to, ...card }) => (
                <li key={card.name}>
                  {to ? (
                    <Link
                      to={to}
                      className="group block h-full rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary-pressed"
                    >
                      <ComponentCard {...card} />
                    </Link>
                  ) : (
                    <ComponentCard {...card} comingSoon />
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
