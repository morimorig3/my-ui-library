import { createFileRoute, Link } from "@tanstack/react-router";
import { Hero } from "../components/Hero";
import { ComponentCard } from "../components/ComponentCard";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div>
      <Hero />
      <ul className="grid grid-cols-3 gap-6 max-w-215 mx-auto">
        <li>
          <Link to="/ui/button">
            <ComponentCard
              imageUrl="https://placehold.jp/150x150.png"
              name="ボタン"
              description="「押せる感」「押した感」を与えるには。"
            />
          </Link>
        </li>
        <li>
          <Link to="/ui/button">
            <ComponentCard
              imageUrl="https://placehold.jp/150x150.png"
              name="ボタン"
              description="「押せる感」「押した感」を与えるには。"
            />
          </Link>
        </li>
        <li>
          <Link to="/ui/button">
            <ComponentCard
              imageUrl="https://placehold.jp/150x150.png"
              name="ボタン"
              description="「押せる感」「押した感」を与えるには。"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
}
