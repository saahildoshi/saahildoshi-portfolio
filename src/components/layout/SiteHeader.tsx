'use client';

import type { Route } from 'next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

type NavLink = {
  href: Route;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/projects', label: 'Projects' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

export function SiteHeader() {
  const pathname = usePathname();

  if (pathname?.startsWith('/projects/nasa-sli')) {
    return null;
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-primary/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold uppercase tracking-[0.32em] text-accentneongreen">
          Saahil Doshi
        </Link>
        <nav className="hidden items-center gap-8 text-xs font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn('transition hover:text-accentneongreen', pathname === link.href && 'text-accentneongreen')}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/contact"
          className="hidden rounded-full border border-accentneongreen/30 px-5 py-2 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-accentneongreen shadow-glow hover:bg-accentneongreen hover:text-primary md:inline-flex"
        >
          Mission Inquiry
        </Link>
      </div>
    </header>
  );
}
