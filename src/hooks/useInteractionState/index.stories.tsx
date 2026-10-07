import type { Meta, StoryObj } from "@storybook/tanstack-react";
import { useInteractionState, type InteractionState } from ".";
import { Button } from "../../components/ui/Button";

/** いまの状態を並べて見せる。オンのものは緑になる */
const StateView = ({ state }: { state: InteractionState }) => (
  <ul className="mt-6 flex gap-4 text-sm">
    {Object.entries(state).map(([key, on]) => (
      <li key={key} className={on ? "text-primary" : "text-text-secondary"}>
        {key}: {on ? "on" : "off"}
      </li>
    ))}
  </ul>
);

const ButtonDemo = () => {
  const { state, handlers } = useInteractionState();
  console.log(state);

  return (
    <div className="flex flex-col items-center">
      <Button className="w-40" {...handlers}>
        送信する
      </Button>
      <StateView state={state} />
    </div>
  );
};

const CheckboxDemo = () => {
  // チェックボックスは Enter では切り替わらないので、Space だけを押す操作とみなす
  const { state, handlers } = useInteractionState({ pressKeys: [" "] });
  return (
    <div className="flex flex-col items-center">
      <label className="flex items-center gap-2 p-2">
        <input type="checkbox" {...handlers} />
        同意する
      </label>
      <StateView state={state} />
    </div>
  );
};

const meta = {
  title: "Hooks/useInteractionState",
  component: ButtonDemo,
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ButtonDemo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const WithButton: Story = {};

export const WithCheckbox: Story = {
  render: () => <CheckboxDemo />,
};
