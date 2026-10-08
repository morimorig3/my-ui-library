import { cn } from "../../lib/cn";
import { MicroLabel } from "../layouts/MicroLabel";

interface Props {
  imageUrl: string;
  name: string;
  description: string;
  /** まだページがないとき。リンクにせず、準備中と表示する */
  comingSoon?: boolean;
}

export const ComponentCard = ({ imageUrl, name, description, comingSoon = false }: Props) => {
  return (
    <article
      className={cn(
        "flex flex-col h-full w-full rounded-2xl overflow-hidden bg-bg-white border border-border-boundary p-4 transition-[border-color,box-shadow] duration-200",
        !comingSoon &&
          "group-hover:border-primary group-hover:shadow-[0_6px_20px_rgba(47,125,134,0.12)]",
      )}
    >
      <div className="aspect-8/5 mb-4 overflow-hidden rounded-xl border border-border-boundary">
        <img
          className={cn("w-full h-full object-cover", comingSoon && "opacity-60")}
          src={imageUrl}
          alt=""
        />
      </div>
      <div className="grid gap-1.5 flex-1 content-start">
        <h3 className="font-semibold font-kiwi-maru text-text-black">{name}</h3>
        <p className="text-sm leading-relaxed">{description}</p>
      </div>
      <div className="mt-4">
        {comingSoon ? (
          <MicroLabel label="準備中" />
        ) : (
          <span className="inline-flex items-center gap-1.5 text-sm text-primary">
            見てみる
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none"
            >
              →
            </span>
          </span>
        )}
      </div>
    </article>
  );
};
