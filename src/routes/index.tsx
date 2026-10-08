import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { ComponentCard } from "../components/ComponentCard";
import buttonImage from "../assets/images/info-graphic-button.svg?url";
import checkboxImage from "../assets/images/info-graphic-checkbox.svg?url";
import radioImage from "../assets/images/info-graphic-radio.svg?url";

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
      </ul>
    </div>
  );
}
