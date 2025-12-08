import NextImage from 'next/image';

export type FigureCardProps = {
  src: string;
  caption: string;
  orientation?: 'portrait' | 'landscape';
  ratio?: string;
};

export function FigureCard({ src, caption, orientation = 'landscape', ratio }: FigureCardProps) {
  const aspect = ratio ? `aspect-[${ratio}]` : orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-video';

  return (
    <div className="space-y-3">
      <div className={`relative w-full ${aspect} overflow-hidden rounded-xl border border-white/10`}>
        <NextImage
          src={src}
          alt={caption}
          fill
          className="object-contain p-4"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="text-sm text-primary-foreground/70">{caption}</div>
    </div>
  );
}
