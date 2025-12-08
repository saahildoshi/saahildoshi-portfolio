import NextImage from 'next/image';

export type FigureCardProps = {
  src: string;
  caption: string;
  ratio?: string; // e.g. "330/230"
  portrait?: boolean;
  landscape?: boolean;
  wide?: boolean;
  ultraWide?: boolean;
};

export function FigureCard({
  src,
  caption,
  ratio,
  portrait,
  landscape,
  wide,
  ultraWide,
}: FigureCardProps) {
  // Determine aspect ratio
  let aspectClass = "aspect-video"; // default

  if (ratio) {
    const [w, h] = ratio.split("/").map(Number);
    aspectClass = `aspect-[${w}/${h}]`;
  }

  if (portrait) aspectClass = "aspect-[3/4]";
  if (landscape) aspectClass = "aspect-video";
  if (wide) aspectClass = "aspect-[5/2]";
  if (ultraWide) aspectClass = "aspect-[8/1]";

  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-surface">
      <div className={`relative w-full overflow-hidden ${aspectClass}`}>
        <NextImage
          src={src}
          alt={caption}
          fill
          className="object-contain p-4"
          sizes="(min-width: 1024px) 33vw, 100vw"
        />
      </div>
      <div className="px-5 py-4 text-sm text-primary-foreground/70">
        {caption}
      </div>
    </div>
  );
}
