import type { Route } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { FadeIn } from '@/components/motion/FadeIn';

type FeaturedProject = {
  title: string;
  href: Route;
  description: string;
  image: string;
};

const FEATURED_PROJECTS: FeaturedProject[] = [
  {
    title: 'NASA Student Launch Initiative',
    href: '/projects/nasa-sli',
    description: 'Modular carbon-fiber launch system targeting a 4,300 ft mission profile with advanced avionics.',
    image: '/images/nasa-sli-hero.svg',
  },
  {
    title: 'Aerial Robotics Challenge',
    href: '/projects/arc',
    description: 'Autonomous aerial vehicle research with mission-focused autonomy and perception.',
    image: '/images/project-arc.svg',
  },
  {
    title: 'Georgia Hybrid Propulsion',
    href: '/projects/ghp',
    description: 'Propulsion testbed work spanning hybrid motors, safety analyses, and test integration.',
    image: '/images/project-ghp.svg',
  },
  {
    title: 'UGA Airfoil Research Internship',
    href: '/projects/uga-airfoil',
    description: 'Wind-tunnel campaigns and data systems for collegiate aerodynamics investigations.',
    image: '/images/project-uga.svg',
  },
  {
    title: 'Level 1 Certification Fleet',
    href: '/projects/level1',
    description: 'High-power rockets built for Tripoli/NAR certifications and performance testing.',
    image: '/images/project-level1.svg',
  },
];

export default function HomePage() {
  return (
    <div className="space-y-24">
      <section className="relative isolate overflow-hidden bg-surface/30">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 sm:py-28">
          <FadeIn>
            <div className="max-w-3xl space-y-5">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">Aerospace Portfolio</p>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Saahil Doshi — Aerospace Engineering Portfolio</h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80">
                Mission-focused engineering work that spans launch vehicle design, avionics integration, payload development, and
                rigorous testing campaigns. I design for reliability first and pair systems-level thinking with disciplined execution.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.15}>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link href="/projects">
                  View Projects
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/contact">Contact</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="mb-10 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">Featured Work</p>
            <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">Mission portfolio</h2>
          </div>
          <Button asChild variant="ghost" size="sm" className="hidden text-primary-foreground/70 hover:text-accentneongreen sm:inline-flex">
            <Link href="/projects">See all</Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {FEATURED_PROJECTS.map((project, index) => (
            <FadeIn key={project.href} delay={index * 0.05}>
              <Link
                key={project.href}
                href={project.href}
                className="group flex flex-col overflow-hidden rounded-3xl border border-white/5 bg-surface transition hover:border-accentneongreen/30"
              >
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
                </div>
                <div className="flex flex-1 flex-col gap-2 px-6 py-6">
                  <p className="text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">Featured</p>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm text-primary-foreground/70">{project.description}</p>
                  <span className="mt-4 inline-flex items-center text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">
                    Explore
                    <ArrowUpRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </div>
  );
}
