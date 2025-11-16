import type { ReactNode } from 'react';

export type SectionProps = {
  id?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
};

export function Section({ id, title, kicker, children }: SectionProps) {
  return (
    <section id={id} className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {kicker ? (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">{kicker}</p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        </div>
        <div className="mt-10 space-y-6 text-base leading-relaxed text-primary-foreground/80">{children}</div>
      </div>
    </section>
  );
}
