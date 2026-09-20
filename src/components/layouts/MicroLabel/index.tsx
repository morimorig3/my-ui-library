import { cn } from "../../../lib/cn";

interface Props {
  label: string;
  className?: string;
}

export const MicroLabel = ({ label, className }: Props) => {
  return (
    <p className={cn("text-text-secondary text-[11px] tracking-[0.3em] text-nowrap", className)}>
      {label}
    </p>
  );
};
