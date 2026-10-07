import { useId, useState, type ReactNode } from "react";
import { cn } from "../../../lib/cn";

export interface StateGuideItem {
  id: string;
  title: string;
  /** 短い説明 */
  description: ReactNode;
  /** ボタンクリック時に表示されるエリア */
  reason?: ReactNode;
}

interface Props {
  items: StateGuideItem[];
  /** いま強調する状態のid。チェック済みとホバーのように、同時にいくつでも強調できる */
  activeIds?: string[];
}

export const StateGuide = ({ items, activeIds = [] }: Props) => {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const panelId = useId();
  const selected = items.find((item) => item.id === selectedId && item.reason);

  // 閉じるアニメーションの間も中身を見せておくため、最後に開いた項目を覚えておく
  const [last, setLast] = useState(selected);
  if (selected && selected !== last) setLast(selected);
  const shown = selected ?? last;

  const toggle = (id: string) => setSelectedId((current) => (current === id ? null : id));

  return (
    <div>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(190px,1fr))] gap-x-4.5 gap-y-3.5">
        {items.map((item) => {
          const active = activeIds.includes(item.id);
          const isSelected = item.id === selected?.id;
          const body = (
            <>
              <span
                className={cn(
                  "block font-kiwi-maru transition-colors duration-150 motion-reduce:transition-none",
                  active || isSelected ? "text-primary-pressed" : "text-text-black",
                )}
              >
                {item.title}
                {active && <span className="sr-only">（いまの状態）</span>}
              </span>
              <span className="mt-1 block text-sm leading-relaxed">{item.description}</span>
            </>
          );
          const frame = cn(
            "flex h-full w-full flex-col border-t-3 rounded-b-xl px-2.5 pt-3 pb-2.5 text-left transition-colors duration-150 motion-reduce:transition-none",
            active ? "border-primary" : "border-border-boundary",
          );

          return (
            <li key={item.id}>
              {item.reason ? (
                <button
                  type="button"
                  className={cn(
                    frame,
                    "cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
                    isSelected ? "bg-bg-primary" : "hover:bg-bg-primary/60",
                  )}
                  aria-expanded={isSelected}
                  aria-controls={panelId}
                  onClick={() => toggle(item.id)}
                >
                  {body}
                </button>
              ) : (
                <div className={frame}>{body}</div>
              )}
            </li>
          );
        })}
      </ul>
      {/* 中の高さに合わせて開閉する。脚注が開いて本文が伸びても切れない */}
      <div
        id={panelId}
        className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 motion-reduce:transition-none data-[open=true]:grid-rows-[1fr]"
        data-open={!!selected}
        inert={!selected}
      >
        <div className="min-h-0 overflow-hidden">
          {shown && (
            <div className="mt-4.5 rounded-2xl bg-bg-primary px-5 pt-4.5 pb-4">
              <p className="font-kiwi-maru text-text-black">{shown.title}</p>
              {/* 項目が変わったら脚注の開閉も初めに戻す */}
              <div key={shown.id} className="mt-2 max-w-[32em] text-sm leading-loose">
                {shown.reason}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
