import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

type Project = {
  number: string;
  title: string;
  href: Route;
  summary: string;
  timeline: string;
  discipline: string;
  role: string;
  result: string;
  image: string;
  imageClassName?: string;
  tier: 'featured' | 'selected' | 'additional';
};

const PROJECTS: Project[] = [
  {
    number: '01',
    title: 'NASA Student Launch Initiative - Project RANCH',
    href: '/projects/nasa-sli',
    summary: 'A 92-inch fiberglass launch vehicle integrating redundant dual-deployment recovery, modular avionics, and the ACORN data-return payload.',
    timeline: '2024 - 2025',
    discipline: 'Launch systems',
    role: 'Payload Team Lead',
    result: '4,274.8 ft final apogee',
    image: '/images/nasa-sli/Final-Team-Photo-At-Hunstville-With-FinalPaintedRocket.png',
    tier: 'featured',
  },
  {
    number: '02',
    title: 'Young Dawgs - AI Microstructure Mechanics',
    href: '/projects/young-dawgs',
    summary: 'A reproducible Python-to-ANSYS pipeline for generating porous microstructures, evaluating morphology and connectivity, preserving geometry, and recovering mechanical-response fields.',
    timeline: '2026 - present',
    discipline: 'Computational mechanics',
    role: 'Research intern',
    result: 'Accepted 0.005% checkpoint',
    image: '/images/young-dawgs/ansys-displacement.png',
    imageClassName: 'object-cover transition duration-700 group-hover:scale-[1.02]',
    tier: 'selected',
  },
  {
    number: '03',
    title: 'Bio-Inspired & AI Airfoil Research',
    href: '/projects/uga-airfoil-research',
    summary: 'An eight-week research pipeline comparing control, bio-inspired, and AI-generated airfoils through analysis, CAD, additive manufacturing, and wind-tunnel testing.',
    timeline: 'Summer 2024',
    discipline: 'Aerodynamics research',
    role: 'Research intern',
    result: 'AIAA Region II first place',
    image: '/images/uga-airfoil/Cashton&Saahil-Presenting.jpeg',
    tier: 'selected',
  },
  {
    number: '04',
    title: 'American Rocketry Challenge',
    href: '/projects/arc',
    summary: 'A competition launch vehicle optimized for a constrained altitude and flight-time mission through repeated simulation, fabrication, and flight testing.',
    timeline: '2023 - 2024',
    discipline: 'Flight optimization',
    role: 'Co-Captain',
    result: '24th nationally',
    image: '/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png',
    tier: 'selected',
  },
  {
    number: '05',
    title: 'ERAS2 Ionic-Wind Aircraft',
    href: '/projects/eras2',
    summary: 'A four-week residential engineering program developing an integrated electrohydrodynamic propulsion and airframe system.',
    timeline: '2025',
    discipline: 'Experimental propulsion',
    role: 'Engine subteam',
    result: '24 g total thrust',
    image: '/images/eras2/Full-Team-Photo-With-Plane.PNG',
    tier: 'selected',
  },
  {
    number: '06',
    title: 'Civil Air Patrol',
    href: '/projects/civil-air-patrol',
    summary: 'Squadron command, aerospace education, mentorship, and weekly operational planning for a cadet organization at Ben Epps Airport.',
    timeline: 'Ongoing',
    discipline: 'Leadership',
    role: 'Cadet Colonel · Commander',
    result: 'Spaatz Award',
    image: '/images/cap/Saahil-CAP-Cadet-Colonel.jpeg',
    imageClassName: 'object-cover object-top transition duration-700 group-hover:scale-[1.02]',
    tier: 'additional',
  },
  {
    number: '07',
    title: 'BEAMS Research Rocket',
    href: '/projects/level1',
    summary: 'A modular high-power research vehicle carrying a biological payload of 132 germinated bean samples, developed within an AIAA-published fleet architecture.',
    timeline: 'Ongoing',
    discipline: 'Research rocketry',
    role: 'BEAMS mission lead',
    result: 'NAR Level 1 in progress',
    image: '/images/level1/IMG_6786.jpeg',
    tier: 'additional',
  },
  {
    number: '08',
    title: 'Governor’s Honors Program - Mechanical & Aerospace',
    href: '/projects/ghp-mechanical-aero',
    summary: 'A four-week residential program combining calculus-based physics, thermodynamics, signal processing, and sustained applied engineering work.',
    timeline: '2025',
    discipline: 'Advanced study',
    role: 'Engineering scholar',
    result: '~260 residential hours',
    image: '/images/ghp/Full-GHP-Engineering(Including-Other-Concentrations).jpeg',
    tier: 'additional',
  },
];

function ProjectRow({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="group grid gap-0 border border-white/10 bg-primary lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative min-h-72 overflow-hidden bg-surface lg:min-h-[25rem]">
        <Image
          src={project.image}
          alt=""
          fill
          className={project.imageClassName ?? 'object-cover transition duration-700 group-hover:scale-[1.02]'}
          sizes="(min-width: 1024px) 48vw, 100vw"
        />
        <span className="absolute left-4 top-4 border border-white/20 bg-primary/80 px-2 py-1 font-mono text-xs text-white backdrop-blur">{project.number}</span>
      </div>
      <div className="flex flex-col justify-between border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
        <div>
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="eyebrow">{project.discipline}</p>
            <p className="font-mono text-[0.67rem] uppercase tracking-[0.12em] text-primary-foreground/40">{project.timeline}</p>
          </div>
          <h2 className="mt-6 text-3xl font-medium leading-tight tracking-[-0.04em] text-white sm:text-4xl">{project.title}</h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-primary-foreground/65">{project.summary}</p>
        </div>
        <div className="mt-10">
          <dl className="grid gap-px bg-white/10 sm:grid-cols-2">
            <div className="bg-primary p-4"><dt className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-primary-foreground/40">Role</dt><dd className="mt-2 text-sm text-white">{project.role}</dd></div>
            <div className="bg-primary p-4"><dt className="font-mono text-[0.64rem] uppercase tracking-[0.12em] text-primary-foreground/40">Outcome</dt><dd className="mt-2 text-sm text-white">{project.result}</dd></div>
          </dl>
          <span className="mt-6 inline-flex items-center gap-2 text-sm text-accentneongreen group-hover:text-white">Open case study <ArrowUpRight className="h-4 w-4" /></span>
        </div>
      </div>
    </Link>
  );
}

export default function ProjectsPage() {
  const featured = PROJECTS.filter((project) => project.tier !== 'additional');
  const additional = PROJECTS.filter((project) => project.tier === 'additional');

  return (
    <div>
      <header className="border-b border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Project index · 2023 - present</p>
          <h1 className="mt-6 max-w-4xl text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl">Engineering work documented from requirement to result.</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-primary-foreground/65">Selected launch systems, aerodynamic research, experimental propulsion, and leadership programs. Each case study separates personal responsibility from team outcomes and links supporting evidence where available.</p>
        </div>
      </header>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-8 px-6">
          {featured.map((project) => <ProjectRow key={project.href} project={project} />)}
        </div>
      </section>

      <section className="border-t border-white/10 bg-[#0c1011] py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Additional work & leadership</p>
          <div className="mt-8 grid gap-px bg-white/10 lg:grid-cols-3">
            {additional.map((project) => (
              <Link key={project.href} href={project.href} className="group flex flex-col bg-primary">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image src={project.image} alt="" fill className={project.imageClassName ?? 'object-cover transition duration-700 group-hover:scale-[1.02]'} sizes="(min-width: 1024px) 33vw, 100vw" />
                </div>
                <div className="flex flex-1 flex-col border border-white/10 p-6">
                  <div className="flex justify-between gap-3 font-mono text-[0.64rem] uppercase tracking-[0.12em] text-primary-foreground/40"><span>{project.number}</span><span>{project.timeline}</span></div>
                  <h2 className="mt-5 text-2xl font-medium leading-tight tracking-[-0.03em] text-white">{project.title}</h2>
                  <p className="mt-4 flex-1 text-sm leading-6 text-primary-foreground/60">{project.summary}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm text-accentneongreen">Open record <ArrowUpRight className="h-4 w-4" /></span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
