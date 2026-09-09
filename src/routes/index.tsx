import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "../components/Hero";

export const Route = createFileRoute("/")({
  component: IndexPage,
});

function IndexPage() {
  return (
    <div>
      <Hero />
    </div>
  );
}
