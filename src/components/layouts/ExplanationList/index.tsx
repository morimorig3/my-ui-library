import { useId, type ReactNode } from "react";

interface ListProps {
  children: ReactNode;
}

/** 解説の外枠。額縁のような色の枠の中に、白い紙を 1 枚敷く */
export const ExplanationList = ({ children }: ListProps) => {
  return (
    <div className="p-3.5 bg-bg-thirdly">
      <div className="bg-bg-white px-11 py-1.5">{children}</div>
    </div>
  );
};

interface ItemProps {
  title: string;
  /** 本文。脚注を使うときは Footnotes ごと渡す */
  children: ReactNode;
  /** 本文の下に置く見比べ用のデモ（CompareDemo など） */
  demo?: ReactNode;
}

export const ExplanationItem = ({ title, children, demo }: ItemProps) => {
  const titleId = useId();

  return (
    <section
      aria-labelledby={titleId}
      className="py-8.5 border-t border-border-boundary first:border-t-0"
    >
      <h3 id={titleId} className="font-kiwi-maru text-xl text-text-black">
        {title}
      </h3>
      <div className="mt-3 leading-loose max-w-[30em]">{children}</div>
      {demo && <div className="mt-5">{demo}</div>}
    </section>
  );
};
