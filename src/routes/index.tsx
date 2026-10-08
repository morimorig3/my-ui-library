import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
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

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div>
      <Hero nextId="ui-list" />
      <ul
        id="ui-list"
        className="snap-start grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-215 mx-auto py-16"
      >
        <li>
          <Link
            to="/ui/button"
            className="group block h-full rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary-pressed"
          >
            <ComponentCard
              imageUrl={buttonImage}
              name="ボタン"
              description="「押せる感」「押した感」を与えるには。"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/ui/checkbox"
            className="group block h-full rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary-pressed"
          >
            <ComponentCard
              imageUrl={checkboxImage}
              name="チェックボックス"
              description="選んだことが、ひと目で伝わるには。"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/ui/radio"
            className="group block h-full rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary-pressed"
          >
            <ComponentCard
              imageUrl={radioImage}
              name="ラジオボタン"
              description="ひとつだけ選ぶ感じが、わかりやすくなるには。"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/ui/select"
            className="group block h-full rounded-2xl focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-primary-pressed"
          >
            <ComponentCard
              imageUrl={selectImage}
              name="セレクトボックス"
              description="たたんだ一覧から、迷わず選べるには。"
            />
          </Link>
        </li>
        <li>
          <ComponentCard
            imageUrl={toggleImage}
            name="トグルスイッチ"
            description="いまオンかオフか、迷わずわかるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={chipImage}
            name="チップ"
            description="いくつでも選べることが、さっと伝わるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={textinputImage}
            name="テキスト入力"
            description="何を書けばいいか、迷わず入力できるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={sliderImage}
            name="スライダー"
            description="動かしながら、ちょうどいい値を選べるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={tabsImage}
            name="タブ"
            description="いまどこを見ているか、すぐわかるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={accordionImage}
            name="アコーディオン"
            description="開けば続きがあることが、伝わるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={paginationImage}
            name="ページネーション"
            description="いまどのページにいるか、迷わないには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={modalImage}
            name="モーダル"
            description="いま答えてほしいことに、集中してもらうには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={toastImage}
            name="トースト"
            description="じゃまをせずに、できたことを知らせるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={tooltipImage}
            name="ツールチップ"
            description="ちょっとした説明を、そっと添えるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={progressImage}
            name="プログレスバー"
            description="あとどれくらいか、待つ人に伝わるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={segmentedImage}
            name="セグメンテッドコントロール"
            description="並んだ中から、ひとつをさっと切りかえるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={textareaImage}
            name="テキストエリア"
            description="長い文章も、気持ちよく書けるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={searchImage}
            name="検索ボックス"
            description="探しているものに、すぐたどり着けるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={stepperImage}
            name="ステッパー"
            description="数をひとつずつ、思いどおりに変えられるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={datepickerImage}
            name="日付ピッカー"
            description="カレンダーから、迷わず日にちを選べるには。"
            comingSoon
          />
        </li>
        <li>
          <ComponentCard
            imageUrl={fileuploadImage}
            name="ファイルアップロード"
            description="ファイルを、迷わず渡せるには。"
            comingSoon
          />
        </li>
      </ul>
    </div>
  );
}
