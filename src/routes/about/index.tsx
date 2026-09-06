import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      Hello "/about/"!
      <Link to="/">to Index!!</Link>
    </div>
  );
}
