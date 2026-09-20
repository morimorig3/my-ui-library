import { cn } from "../../../lib/cn";
import { MicroLabel } from "../MicroLabel";

interface Props {
  startText: string;
  endText?: string;
  className?: string;
}

export const DevidingLine = ({ startText, endText, className }: Props) => {
  return (
    <div className={cn("flex items-center gap-3.5", className)}>
      <MicroLabel label={startText} />
      <span className="w-full h-px bg-border"></span>
      {endText && <MicroLabel label={endText} />}
    </div>
  );
};
