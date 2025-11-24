import type { ReactNode } from 'react';

import { cn } from '@/lib/utils';

export type SectionProps = {
  id?: string;
  title: string;
  kicker?: string;
  children: ReactNode;
  className?: string;
  contentClassName?: string;

  /** 
   * Enables tighter vertical spacing for small sections 
   * (fixes the large black gap on pages like NASA SLI Outreach section)
   */
  compact?: boolean;
};

export function Section({
  id,
  title,
  kicker,
  children,
  className,
  contentClassName,
  compact = false,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        compact ? 'py-8 sm:py-10' : 'py-16 sm:py-20',
        'scroll-mt-24',
        className
      )}
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <div className="max-w-3xl">
          {kicker ? (
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
              {kicker}
            </p>
          ) : null}

          <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
            {title}
          </h2>
        </div>

        {/* Body */}
        <div
          className={cn(
            compact ? 'mt-6 space-y-3' : 'mt-10 space-y-6',
            'text-base leading-relaxed text-primary-foreground/80',
            contentClassName
          )}
        >
          {children}
        </div>
      </div>
    </section>
  );
}
