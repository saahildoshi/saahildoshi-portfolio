'use client';

import type { ComponentType } from 'react';
import Link from 'next/link';
import type { Route } from 'next';
import { ArrowUpRight, BarChart3, Cpu, Radio, Rocket, Wind, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

import { AnimatedHero } from '@/components/animated/AnimatedHero';
import { AnimatedSection } from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

type ProjectCard = {
  href: Route;
  title: string;
  subtitle: string;
  image: string;
};

type Strength = {
  title: string;
  description: string;
  icon: ComponentType<{ className?: string }>;
};

type TimelineItem = {
  year: string;
  title: string;
  detail: string;
};

const PROJECTS: ProjectCard[] = [
  {
    href: '/projects/nasa-sli',
    title: 'NASA Student Launch Initiative — Project RANCH',
    subtitle: 'Carbon-fiber launch vehicle reaching a targeted 4,300 ft apogee with modular avionics and payload bay.',
    image: '/images/projects/sli.svg',
  },
  {
    href: '/projects/arc',
    title: 'American Rocketry Challenge — Co-Captain',
    subtitle: 'Ranked 24/1000 with precision recovery and mass optimization for dual-egg payload missions.',
    image: '/images/projects/arc.svg',
  },
  {
    href: '/projects/uga-airfoil',
    title: 'UGA Bio-Inspired Airfoil Research',
    subtitle: 'Undergraduate research into leading-edge morphing geometries for low Reynolds number efficiency.',
    image: '/images/projects/uga.svg',
  },
  {
    href: '/projects/level1',
    title: 'Level 1 High-Power Certification Rockets',
    subtitle: 'Composite airframes, fin can integration, and redundant recovery for high-power flight profiles.',
    image: '/images/projects/l1.svg',
  },
];

const STRENGTHS: Strength[] = [
  {
    title: 'Aerodynamics & Flight Simulation',
    description: 'OpenRocket, RASAero, and CFD-informed performance envelopes with sensitivity studies.',
    icon: Wind,
  },
  {
    title: 'CAD & Mechanical Design',
    description: 'Fusion 360 + parametric assemblies for airframes, avionics bays, and payload integration.',
    icon: Wrench,
  },
  {
    title: 'High-Power Rocketry',
    description: 'Tripoli L1 certified with experience across carbon-fiber construction and thrust structures.',
    icon: Rocket,
  },
  {
    title: 'Avionics & Embedded Systems',
    description: 'Redundant altimeters, GPS telemetry, and microcontroller payloads with validated wiring harnesses.',
    icon: Cpu,
  },
  {
    title: 'Composites & Fabrication',
    description: 'Roll-wrapped CF layups, Delrin fin fabrication, and precision machining for structural fidelity.',
    icon: Radio,
  },
  {
    title: 'Data Analysis & Telemetry',
    description: 'Flight reconstruction, sensor fusion, and ground-station telemetry dashboards for mission readiness.',
    icon: BarChart3,
  },
];

const TIMELINE: TimelineItem[] = [
  { year: '2025', title: 'NASA SLI — Project RANCH', detail: 'Full-stack vehicle design, avionics integration, and payload operations.' },
  { year: '2024', title: 'GHP Internship — Bio-Inspired Airfoils', detail: 'Morphing airfoil research with wind tunnel validation and data reduction.' },
  { year: '2024', title: 'ARC Nationals — Rank 24/1000', detail: 'Team co-captain leading aerodynamic refinement and reliability testing.' },
  { year: '2023', title: 'L1 High-Power Certification', detail: 'Certification flight with redundant recovery and composite construction.' },
  { year: '2022', title: 'UAV & Drone Design Projects', detail: 'Early experimentation with lightweight airframes and propulsion integration.' },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/home/hero-placeholder.svg"
        badge="Aerospace Engineering"
        title="Saahil Doshi — Aerospace Engineering Portfolio"
        subtitle="High-power rocketry · aerodynamic design · composite fabrication · simulation · avionics · research"
        actions={(
          <Button asChild size="lg" className="rounded-full">
            <Link href="/projects" className="inline-flex items-center gap-2">
              Explore Projects
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        )}
      />

      <Section id="projects" title="Major Projects" kicker="Portfolio">
        <AnimatedSection>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: 'easeOut' }}
              >
                <Link
                  href={project.href}
                  className="group relative block overflow-hidden rounded-2xl border border-white/5 bg-white/5 shadow-lg transition duration-300 hover:-translate-y-1 hover:border-accentneongreen/50"
                >
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                  </div>
                  <div className="flex flex-col gap-3 p-6">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/70">Case Study</p>
                    <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
                    <p className="text-sm text-primary-foreground/70 line-clamp-2">{project.subtitle}</p>
                    <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-accentneongreen">
                      View Project
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 border-2 border-transparent transition group-hover:border-accentneongreen/50"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  />
                </Link>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section id="strengths" title="Engineering Strengths" kicker="Capabilities">
        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {STRENGTHS.map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, delay: index * 0.05, ease: 'easeOut' }}
                className="rounded-2xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-accentneongreen/15 text-accentneongreen">
                    <strength.icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">{strength.title}</h3>
                </div>
                <p className="mt-4 text-sm text-primary-foreground/70 leading-relaxed">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </Section>

      <Section id="experience" title="Experience Timeline" kicker="Journey">
        <AnimatedSection>
          <div className="relative ml-3 border-l border-white/10 pl-6">
            <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-accentneongreen/60 via-white/10 to-transparent" />
            <div className="space-y-10">
              {TIMELINE.map((item, index) => (
                <motion.div
                  key={`${item.year}-${item.title}`}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, delay: index * 0.04, ease: 'easeOut' }}
                  className="relative pl-6"
                >
                  <span className="absolute -left-[22px] top-1.5 h-3 w-3 rounded-full border border-accentneongreen/70 bg-accentneongreen/80 shadow-[0_0_0_6px_rgba(124,255,144,0.15)]" />
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accentneongreen/70">{item.year}</p>
                  <h3 className="mt-2 text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/70 leading-relaxed">{item.detail}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </AnimatedSection>
      </Section>

      <footer className="border-t border-white/5 bg-primary/80 py-10 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-[0.32em] text-accentneongreen/80">Saahil Doshi</p>
            <p className="text-sm text-primary-foreground/70">Built with Next.js · Aerospace Engineering Portfolio</p>
          </div>
          <div className="flex items-center gap-4 text-sm text-primary-foreground/70">
            <Link href="/projects" className="hover:text-accentneongreen">Projects</Link>
            <Link href="/about" className="hover:text-accentneongreen">About</Link>
            <Link href="/contact" className="hover:text-accentneongreen">Contact</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
