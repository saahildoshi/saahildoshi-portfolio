'use client';

import type { ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import { Image } from '@/components/ui/image';
import { cn } from '@/lib/utils';

type AnimatedHeroProps = {
  image: string;
  badge?: string;
  title: string;
  subtitle: string;
  actions?: ReactNode;
  className?: string;
};

export function AnimatedHero({ image, badge, title, subtitle, actions, className }: AnimatedHeroProps) {
  const { scrollY } = useScroll();
  const parallaxY = useTransform(scrollY, (value) => value * 0.15);

  return (
    <section className={cn('relative isolate overflow-hidden', className)}>
      <motion.div className="absolute inset-0" style={{ y: parallaxY }}>
        <Image src={image} alt={title} fill className="object-cover" priority sizes="100vw" />
      </motion.div>
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black/80 via-primary/80 to-primary"
        initial={{ opacity: 0.6 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 sm:py-28">
        <motion.div
          className="max-w-3xl space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {badge ? (
            <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
              {badge}
            </span>
          ) : null}
          <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">{title}</h1>
          <p className="text-lg leading-relaxed text-primary-foreground/80">{subtitle}</p>
        </motion.div>
        {actions ? (
          <motion.div
            className="flex flex-wrap items-center gap-4"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: 'easeOut', delay: 0.05 }}
          >
            {actions}
          </motion.div>
        ) : null}
      </div>
    </section>
  );
}

export default AnimatedHero;
