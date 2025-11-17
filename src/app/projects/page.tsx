import type { Route } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

type Project = {
  title: string;
  href: Route;
  summary: string;
  timeline: string;
  image: string;
};

const PROJECTS: Project[] = [
  {
    title: 'NASA Student Launch Initiative — Project RANCH',
    href: '/projects/nasa-sli',
    summary: 'Carbon-fiber launch vehicle with redundant avionics, dual-deploy recovery, and Acorn payload.',
    timeline: '2024–2025',
    image: '/images/nasa-sli-hero.svg',
  },
  {
    title: 'Aerial Robotics Challenge (ARC)',
    href: '/projects/arc',
    summary: 'Autonomous UAS mission design, custom GNC stack, and perception-driven navigation.',
    timeline: '2023–2024',
    image: '/images/project-arc.svg',
  },
  {
    title: 'Georgia Hybrid Propulsion (GHP)',
    href: '/projects/ghp',
    summary: 'Propulsion test-stand integration, data pipelines, and safety documentation for hybrid motors.',
    timeline: '2023',
    image: '/images/project-ghp.svg',
  },
  {
    title: 'UGA Airfoil Research Internship',
    href: '/projects/uga-airfoil',
    summary: 'Wind-tunnel instrumentation, airfoil prototyping, and aerodynamic data analysis.',
    timeline: 'Summer 2023',
    image: '/images/project-uga.svg',
  },
  {
    title: 'Level 1 Certification Fleet',
    href: '/projects/level1',
    summary: 'Tripoli/NAR Level 1 rockets built for reliability, telemetry integration, and mentorship.',
    timeline: '2019–2022',
    image: '/images/project-level1.svg',
  },
];

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
      <div className="max-w-3xl space-y-5">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">Portfolio</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">Projects and Campaigns</h1>
        <p className="text-lg text-primary-foreground/80">
          Representative aerospace systems projects focused on mission assurance, rigorous testing, and technical documentation.
        </p>
      </div>
      <div className="space-y-8">
        {PROJECTS.map((project) => (
          <Link
            key={project.href}
            href={project.href}
            className="group grid gap-8 rounded-3xl border border-white/5 bg-surface/60 p-6 transition hover:border-accentneongreen/40 md:grid-cols-[2fr,3fr]"
          >
            <div className="relative aspect-video overflow-hidden rounded-2xl">
              <Image src={project.image} alt={project.title} fill className="object-cover" sizes="(min-width: 768px) 40vw, 100vw" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/60" />
              <span className="absolute left-4 top-4 inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
                {project.timeline}
              </span>
            </div>
            <div className="flex flex-col justify-between">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">{project.title}</h2>
                <p className="text-primary-foreground/80">{project.summary}</p>
              </div>
              <Button variant="ghost" size="sm" className="self-start text-accentneongreen">
                Read Case Study
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
