import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/ui/button")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <h1 className="text-4xl font-kiwi-maru">ボタン</h1>
    </div>
  );
}
