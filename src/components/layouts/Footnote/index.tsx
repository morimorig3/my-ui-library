import { createContext, use, useId, useState, type ReactNode } from "react";

type Note = { id: string; body: ReactNode };
type Value = {
  notes: Note[];
  active: string | null;
  toggle: (id: string) => void;
  panelId: string;
};

const Ctx = createContext<Value | null>(null);

const useFootnotes = () => {
  const ctx = use(Ctx);
  if (!ctx) throw new Error("useFootnotes must be used within <Footnotes>");
  return ctx;
};

export const Footnotes = ({ notes, children }: { notes: Note[]; children: ReactNode }) => {
  const [active, setActive] = useState<string | null>(null);
  const toggle = (id: string) => setActive((p) => (p === id ? null : id));
  const panelId = useId();
  return <Ctx value={{ notes, active, toggle, panelId }}>{children}</Ctx>;
};

export const FootnoteMarker = ({ id }: { id: string }) => {
  const { notes, active, toggle, panelId } = useFootnotes();
  const n = notes.findIndex((n) => n.id === id) + 1;
  return (
    <sup>
      <button
        type="button"
        className="cursor-pointer inline-block min-w-[1.3em] mx-0.5 px-1 py-2 rounded-sm text-[10px] transition-colors relative bg-bg-thirdly after:absolute after:-inset-1 aria-expanded:bg-primary aria-expanded:text-bg-white"
        aria-expanded={active === id}
        aria-controls={panelId}
        onClick={() => toggle(id)}
      >
        {n}
      </button>
    </sup>
  );
};

export const FootnotePanel = () => {
  const { notes, active, panelId } = useFootnotes();
  const index = notes.findIndex((n) => n.id === active);
  const note = index === -1 ? undefined : notes[index];
  const [last, setLast] = useState<{ note: Note; number: number } | undefined>(
    note && { note, number: index + 1 },
  );
  if (note && note !== last?.note) setLast({ note, number: index + 1 });
  const shown = last;
  return (
    <div
      id={panelId}
      className="grid grid-rows-[0fr] transition-[grid-template-rows] data-[open=true]:grid-rows-[1fr]"
      data-open={!!note}
      inert={!note}
    >
      <div className="overflow-hidden min-h-0">
        {shown && (
          <div className="border-t border-border mt-4 pt-2">
            <span className="mr-2">{shown.number}</span>
            <span>{shown.note.body}</span>
          </div>
        )}
      </div>
    </div>
  );
};
