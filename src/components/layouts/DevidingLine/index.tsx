interface Props {
  startText: string;
  endText?: string;
}

export const DevidingLine = ({ startText, endText }: Props) => {
  return (
    <div className="flex items-center gap-3.5 text-[10px] tracking-widest">
      <span className="text-nowrap">{startText}</span>
      <span className="w-full h-px bg-border"></span>
      {endText && <span className="text-nowrap">{endText}</span>}
    </div>
  );
};
