import { ReactNode } from "react";
import { MicroLabel } from "../MicroLabel";

interface Props {
  label: string;
  title: string;
  children?: ReactNode;
}

export const DescriptionPanel = ({ label, title, children }: Props) => {
  return (
    <div className="p-3.5 bg-bg-thirdly">
      <section className="bg-bg-white p-11">
        <header className="flex flex-col gap-y-4 mb-5">
          <MicroLabel label={label} />
          <h3 className="text-xl font-kiwi-maru text-text-black">{title}</h3>
          <span className="block w-8.5 h-0.5 bg-primary" />
        </header>
        <div>{children}</div>
      </section>
    </div>
  );
};
