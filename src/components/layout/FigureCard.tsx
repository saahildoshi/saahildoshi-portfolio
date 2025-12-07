import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

export type FigureCardProps = {
  src: string;
  caption: string;

  // Optional layout overrides
  wide?: boolean;        // Let card span multiple grid columns
  tall?: boolean;        // Prefer vertical aspect
  ultraWide?: boolean;   // Very long rocket images
  ratio?: string;        // Example: "470/80"
};

export function FigureCard({
  src,
  caption,
  wide = false,
  tall = false,
  ultraWide = false,
  ratio,
}: FigureCardProps) {
  // Aspect ratio logic
  const aspectClass = ratio
    ? `aspect-[${ratio}]`
    : ultraWide
    ? 'aspect-[5/1]'
    : tall
    ? 'aspect-[3/4]'
    : 'aspect-video'; // default ~16:9

  return (
    <div
      className={cn(
        'flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface',
        wide && 'md:col-span-2 lg:col-span-3'
      )}
    >
      <div className={cn('relative w-full overflow-hidden', aspectClass)}>
        <Image
          src={src}
          alt={caption}
          fill
          className="object-contain p-4"
          sizes="100vw"
        />
      </div>

      <div className="px-5 py-4 text-sm text-primary-foreground/70">
        {caption}
      </div>
    </div>
  );
}
