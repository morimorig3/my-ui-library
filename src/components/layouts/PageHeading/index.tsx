import { DevidingLine } from "../DevidingLine";

interface Props {
  label: string;
  title: string;
  description: string;
}

export const PageHeading = ({ label, title, description }: Props) => {
  return (
    <header>
      <DevidingLine startText={label} className="mb-6.5" />
      <h1 className="font-kiwi-maru text-[40px] text-text-black mb-4">{title}</h1>
      <p className="leading-loose">{description}</p>
    </header>
  );
};
