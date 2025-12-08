export function FigureCard({ src, caption }: FigureCardProps) {
  return (
    <div className="flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface">
      <div className="relative w-full overflow-hidden rounded-xl border border-white/10 aspect-auto">
        <Image
          src={src}
          alt={caption}
          fill
          className="object-contain p-4"
          sizes="(min-width: 768px) 50vw, 100vw"
        />
      </div>
      <div className="px-5 py-4 text-sm text-primary-foreground/70">{caption}</div>
    </div>
  );
}
