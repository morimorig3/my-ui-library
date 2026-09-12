import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/ui")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="max-w-180 mx-auto py-10">
      <Outlet />
    </div>
  );
}
