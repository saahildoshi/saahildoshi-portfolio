import type { Route } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowDownRight, ArrowUpRight, Download } from 'lucide-react';

import { AnimatedSection } from '@/components/animated/AnimatedSection';
import { Button } from '@/components/ui/button';

const PROOF_POINTS = [
  { value: '4,274.8 ft', label: 'NASA SLI final apogee' },
  { value: '24th', label: 'ARC national placement' },
  { value: '24 g', label: 'ERAS2 measured thrust' },
  { value: 'Spaatz', label: 'CAP cadet-program capstone' },
];

const SELECTED_WORK: Array<{
  href: Route;
  index: string;
  title: string;
  discipline: string;
  summary: string;
  image: string;
  imageClassName?: string;
}> = [
  {
    href: '/projects/young-dawgs',
    index: '02',
    title: 'AI Microstructure Mechanics',
    discipline: 'Computational Mechanics · Research',
    summary: 'A Python-to-ANSYS research pipeline connecting generated porous microstructures to verified morphology, meshing, and mechanical-response evidence.',
    image: '/images/young-dawgs/ansys-stress.png',
    imageClassName: 'object-cover transition duration-700 group-hover:scale-[1.025]',
  },
  {
    href: '/projects/uga-airfoil-research',
    index: '03',
    title: 'Bio-Inspired & AI Airfoil Research',
    discipline: 'Aerodynamics · Research',
    summary: 'An eight-week research program combining XFOIL analysis, parametric CAD, additive manufacturing, and physical wind-tunnel validation.',
    image: '/images/uga-airfoil/Cashton&Saahil-Presenting.jpeg',
  },
  {
    href: '/projects/arc',
    index: '04',
    title: 'American Rocketry Challenge',
    discipline: 'Flight Dynamics · Optimization',
    summary: 'Competition vehicle iterated through simulation and flight testing to achieve a 24th-place national finish.',
    image: '/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png',
  },
];

const PRACTICES = [
  {
    number: '01',
    title: 'Requirements & systems thinking',
    detail: 'Translate mission rules, interfaces, and verification criteria into an executable vehicle architecture.',
    evidence: 'NASA SLI · ERAS2',
  },
  {
    number: '02',
    title: 'Simulation & aerodynamic analysis',
    detail: 'Use OpenRocket, XFOIL, ANSYS, CAD, and test data to evaluate flight, aerodynamic, and material response.',
    evidence: 'ARC · UGA Research · Young Dawgs',
  },
  {
    number: '03',
    title: 'Prototype, integrate, test',
    detail: 'Build flight hardware, avionics, payloads, and experimental rigs; document failures and close the loop.',
    evidence: 'Project RANCH · BEAMS',
  },
  {
    number: '04',
    title: 'Technical leadership',
    detail: 'Coordinate teams, communicate design decisions, mentor cadets, and present results to technical audiences.',
    evidence: 'CAP · NASA SLI · AIAA',
  },
];

export default function HomePage() {
  return (
    <div className="overflow-hidden">
      <section className="relative border-b border-white/10">
        <div className="mx-auto grid min-h-[calc(100svh-72px)] max-w-6xl gap-10 px-6 py-12 lg:grid-cols-[0.93fr_1.07fr] lg:items-center lg:py-16">
          <AnimatedSection className="relative z-10 max-w-2xl">
            <p className="eyebrow">Class of 2027 · Aerospace Engineering</p>
            <h1 className="mt-7 text-[clamp(3rem,7vw,6.2rem)] font-medium leading-[0.91] tracking-[-0.065em] text-white">
              Engineering systems from analysis to flight.
            </h1>
            <p className="mt-8 max-w-xl text-lg leading-8 text-primary-foreground/70 sm:text-xl">
              I&apos;m Saahil Doshi, a student engineer developing launch vehicles, experimental propulsion systems, aerodynamic research, and computational material models through simulation, fabrication, and physical testing.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href="/projects" className="gap-2">
                  Inspect projects <ArrowDownRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="/Saahil-Doshi-Resume.pdf" className="gap-2">
                  Download résumé <Download className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>

          <AnimatedSection className="relative lg:pl-8">
            <div className="relative aspect-[4/5] overflow-hidden border border-white/15 bg-surface sm:aspect-[16/13] lg:aspect-[4/5]">
              <Image
                src="/images/uga-airfoil/Cashton&Saahil-Presenting.jpeg"
                alt="Saahil Doshi presenting aerospace research at an AIAA event"
                fill
                priority
                className="object-cover object-[55%_center] grayscale-[12%]"
                sizes="(min-width: 1024px) 48vw, 100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 border-t border-white/15 bg-primary/75 px-5 py-4 backdrop-blur-md">
                <div>
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-accentneongreen">Research communication</p>
                  <p className="mt-1 text-sm text-white">Presenting aero-structural research · AIAA</p>
                </div>
                <span className="font-mono text-xs text-primary-foreground/45">01 / 04</span>
              </div>
            </div>
            <div aria-hidden className="absolute -right-16 -top-8 -z-10 hidden h-40 w-40 border-r border-t border-accentneongreen/25 lg:block" />
          </AnimatedSection>
        </div>
      </section>

      <section aria-label="Selected engineering outcomes" className="border-b border-white/10 bg-[#0c1011]">
        <div className="mx-auto grid max-w-6xl grid-cols-2 px-6 lg:grid-cols-4">
          {PROOF_POINTS.map((point, index) => (
            <div key={point.label} className={`py-7 ${index % 2 === 0 ? 'pr-5' : 'border-l border-white/10 pl-5'} lg:border-l lg:border-white/10 lg:px-6 ${index === 0 ? 'lg:border-l-0 lg:pl-0' : ''}`}>
              <p className="text-2xl font-medium tracking-[-0.04em] text-white sm:text-3xl">{point.value}</p>
              <p className="mt-2 font-mono text-[0.64rem] uppercase tracking-[0.13em] text-primary-foreground/45">{point.label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <AnimatedSection className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <p className="eyebrow">01 · Featured case study</p>
              <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-5xl">Project RANCH</h2>
              <p className="mt-5 text-lg leading-8 text-primary-foreground/68">
                A 92-inch fiberglass launch vehicle developed for NASA Student Launch, with redundant recovery, a modular payload architecture, and a final apogee of 4,274.8 ft.
              </p>
              <dl className="mt-8 border-y border-white/10">
                {[
                  ['Role', 'Payload Team Lead'],
                  ['Result', '4,274.8 ft final apogee'],
                  ['Stability', '1.6 - 2.0 calibers'],
                  ['Validation', 'Two full-scale test flights'],
                ].map(([term, detail]) => (
                  <div key={term} className="grid grid-cols-[7rem_1fr] border-t border-white/10 py-3 first:border-t-0">
                    <dt className="font-mono text-xs uppercase tracking-[0.12em] text-primary-foreground/45">{term}</dt>
                    <dd className="text-sm text-primary-foreground/80">{detail}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/projects/nasa-sli" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accentneongreen hover:text-white">
                Open full case study <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <Link href="/projects/nasa-sli" className="group relative block overflow-hidden border border-white/15 bg-surface">
              <div className="relative aspect-[4/5] sm:aspect-[5/4]">
                <Image
                  src="/images/nasa-sli/Final-Team-Photo-At-Hunstville-With-FinalPaintedRocket.png"
                  alt="Project RANCH team with the final painted launch vehicle at NASA Student Launch"
                  fill
                  className="object-cover transition duration-700 group-hover:scale-[1.02]"
                  sizes="(min-width: 1024px) 62vw, 100vw"
                />
              </div>
              <div className="flex items-center justify-between gap-4 border-t border-white/10 bg-surface px-5 py-4">
                <p className="font-mono text-xs text-primary-foreground/55">Huntsville, Alabama · 2025</p>
                <ArrowUpRight className="h-5 w-5 text-accentneongreen transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Selected work</p>
              <h2 className="mt-4 text-4xl font-medium tracking-[-0.045em] text-white sm:text-5xl">Research, flight, and propulsion.</h2>
            </div>
            <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-primary-foreground/65 hover:text-accentneongreen">
              View project index <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 grid gap-px bg-white/10 lg:grid-cols-3">
            {SELECTED_WORK.map((project) => (
              <Link key={project.href} href={project.href} className="group flex flex-col bg-primary">
                <div className="relative aspect-[4/3] overflow-hidden bg-surface">
                  <Image src={project.image} alt="" fill className={project.imageClassName ?? 'object-cover transition duration-700 group-hover:scale-[1.025]'} sizes="(min-width: 1024px) 33vw, 100vw" />
                  <span className="absolute left-4 top-4 border border-white/20 bg-primary/75 px-2 py-1 font-mono text-[0.65rem] text-white backdrop-blur">{project.index}</span>
                </div>
                <div className="flex flex-1 flex-col border-x border-b border-white/10 p-6">
                  <p className="font-mono text-[0.65rem] uppercase tracking-[0.14em] text-accentneongreen">{project.discipline}</p>
                  <h3 className="mt-4 text-2xl font-medium leading-tight tracking-[-0.03em] text-white">{project.title}</h3>
                  <p className="mt-4 flex-1 text-sm leading-6 text-primary-foreground/62">{project.summary}</p>
                  <span className="mt-7 inline-flex items-center gap-2 text-sm text-primary-foreground/80 group-hover:text-accentneongreen">
                    Read case study <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#151a1c] py-20 sm:py-28">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <AnimatedSection>
            <p className="eyebrow">Leadership · Civil Air Patrol</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.045em] text-white sm:text-5xl">Engineering teams require more than technical competence.</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-primary-foreground/68">
              As a Cadet Colonel and Squadron Commander, I lead approximately 30 cadets alongside 15 senior members, plan weekly training, mentor developing leaders, and teach aerospace concepts through applied activities. I earned the General Carl A. Spaatz Award, the cadet program&apos;s capstone honor.
            </p>
            <Link href="/projects/civil-air-patrol" className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-accentneongreen hover:text-white">
              Explore leadership record <ArrowUpRight className="h-4 w-4" />
            </Link>
          </AnimatedSection>
          <AnimatedSection className="grid grid-cols-2 border border-white/10 bg-primary">
            {[
              ['30', 'Cadets led'],
              ['15', 'Senior members'],
              ['3 hr', 'Weekly training block'],
              ['Spaatz', 'Cadet-program capstone'],
            ].map(([value, label], index) => (
              <div key={label} className={`min-h-40 p-6 sm:p-8 ${index % 2 === 1 ? 'border-l border-white/10' : ''} ${index > 1 ? 'border-t border-white/10' : ''}`}>
                <p className="text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">{value}</p>
                <p className="mt-3 font-mono text-[0.66rem] uppercase tracking-[0.14em] text-primary-foreground/45">{label}</p>
              </div>
            ))}
          </AnimatedSection>
        </div>
      </section>

      <section className="border-b border-white/10 py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Engineering practice</p>
          <div className="mt-8 border-t border-white/10">
            {PRACTICES.map((practice) => (
              <div key={practice.number} className="grid gap-4 border-b border-white/10 py-7 md:grid-cols-[4rem_1fr_1.2fr_auto] md:items-start">
                <span className="font-mono text-xs text-accentneongreen">{practice.number}</span>
                <h3 className="text-xl font-medium tracking-[-0.025em] text-white">{practice.title}</h3>
                <p className="text-sm leading-6 text-primary-foreground/62">{practice.detail}</p>
                <p className="font-mono text-[0.65rem] uppercase tracking-[0.12em] text-primary-foreground/40 md:text-right">{practice.evidence}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 lg:flex-row lg:items-end">
          <div className="max-w-3xl">
            <p className="eyebrow">Research · Admissions · Collaboration</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.05em] text-white sm:text-6xl">Looking for the complete technical record?</h2>
            <p className="mt-6 text-lg text-primary-foreground/65">Inspect the case studies, open the supporting reports, or download my résumé for a concise overview.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button asChild size="lg"><Link href="/projects">Project index</Link></Button>
            <Button asChild size="lg" variant="outline"><a href="/Saahil-Doshi-Resume.pdf">Résumé</a></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
