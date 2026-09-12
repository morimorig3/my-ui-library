interface Props {
  imageUrl: string;
  name: string;
  description: string;
}

export const ComponentCard = ({ imageUrl, name, description }: Props) => {
  return (
    <article className="rounded-2xl overflow-hidden w-full bg-bg-white border border-border-boundary p-6">
      <div className="h-15.5 mb-3.5">
        <img className="object-cover w-full h-full" src={imageUrl} alt="" />
      </div>
      <div className="grid gap-1.5">
        <h3 className="font-semibold font-kiwi-maru text-text-black">{name}</h3>
        <p className="text-sm">{description}</p>
      </div>
    </article>
  );
};
