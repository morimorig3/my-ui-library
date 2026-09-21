import { ReactNode } from "react";
import { DevidingLine } from "../DevidingLine";

type Note = { id: string; body: ReactNode };

interface Props {
  notes: Note[];
}

export const References = ({ notes }: Props) => {
  return (
    notes.length >= 1 && (
      <div>
        <DevidingLine className="mb-4" startText="脚注" />
        <ol className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-4 text-sm leading-loose">
          {notes.map(({ id, body }, index) => (
            <li key={`${index}${body}`} className="col-span-2 grid grid-cols-subgrid">
              <span>{id}</span>
              <span>{body}</span>
            </li>
          ))}
        </ol>
      </div>
    )
  );
};
