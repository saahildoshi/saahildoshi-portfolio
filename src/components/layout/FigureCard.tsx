import { Image } from '@/components/ui/image';

export type FigureCardProps = {
  src: string;
  caption: string;
};

export function FigureCard({ src, caption }: FigureCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface">
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image src={src} alt={caption} className="h-full w-full object-cover" fill priority={false} sizes="(min-width: 768px) 50vw, 100vw" />
      </div>
      <div className="px-5 py-4 text-sm text-primary-foreground/70">{caption}</div>
    </div>
  );
}
