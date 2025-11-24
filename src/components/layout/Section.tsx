import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type SectionProps = {
  id?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

export function Section({ id, title, kicker, children, className, contentClassName }: SectionProps) {
  return (
    <section id={id} className={cn('py-16 sm:py-20 scroll-mt-24', className)}>
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          {kicker ? (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">{kicker}</p>
          ) : null}
          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
        </div>
        <div className={cn('mt-10 space-y-6 text-base leading-relaxed text-primary-foreground/80', contentClassName)}>
          {children}
        </div>
      </div>
    </section>
  );
}
