import { cn } from "../../../lib/cn";
import { DevidingLine } from "../DevidingLine";

interface Props {
  /** 区切り線の左に出す短いラベル */
  label: string;
  /** 区切り線の右に出す補足 */
  subLabel?: string;
  title: string;
  className?: string;
}

export const SectionHeading = ({ label, subLabel, title, className }: Props) => {
  return (
    <header className={cn("flex flex-col gap-y-4.5 mb-5", className)}>
      <DevidingLine startText={label} endText={subLabel} />
      <h2 className="font-kiwi-maru text-xl text-text-black">{title}</h2>
    </header>
  );
};
