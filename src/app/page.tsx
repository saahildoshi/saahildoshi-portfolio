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
    subtitle: 'Fiberglass launch vehicle reaching a targeted 4,300 ft apogee with modular avionics and payload bay.',
    image: '/images/projects/sli.svg',
  },
  {
    href: '/projects/arc',
    title: 'American Rocketry Challenge — Co-Captain',
    subtitle:
      'Mid-power competition rocket tuned for 820 ft and a 43–46 second window with a fragile egg payload, finishing 24th of roughly 1,000 teams.',
    image: '/images/projects/arc.svg',
  },
  {
    href: '/projects/uga-airfoil-research',
    title: 'UGA Bio-Inspired & AI Airfoil Research',
    subtitle:
      'Eight-week UGA research project comparing bio-inspired, AI-generated, and control airfoils with XFOIL, Fusion 360, 3D printing, and wind tunnel testing.',
    image: '/images/projects/airfoil.svg',
  },
  {
    href: '/projects/eras2',
    title: 'ERAS2 — Governor\'s Honors Program',
    subtitle: 'GHP Mechanical & Aerospace capstone plane integrating an ionic-wind propulsion system through stacked electrohydrodynamic units.',
    image: '/images/projects/eras.svg',
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
    description: 'Attempting to earn NAR High-Power Level 1 Certification',
    icon: Rocket,
  },
  {
    title: 'Avionics & Embedded Systems',
    description: 'Redundant altimeters, GPS telemetry, and microcontroller payloads with validated wiring harnesses.',
    icon: Cpu,
  },
  {
    title: 'Composites & Fabrication',
    description: 'Fiberglass, Delrin fin fabrication, and precision machining for structural fidelity.',
    icon: Radio,
  },
  {
    title: 'Data Analysis & Telemetry',
    description: 'Flight reconstruction, sensor fusion, and ground-station telemetry dashboards for mission readiness.',
    icon: BarChart3,
  },
];

const TIMELINE: TimelineItem[] = [
  {
    year: '2025',
    title: 'Level 1 Certification',
    detail:
      'Designing and constructing a high-power launch vehicle to carry a germinated-bean payload for G-force analysis, culminating in completion of the NAR Level 1 certification.',
  },
  {
    year: '2025',
    title: 'GHP Engineering — ERAS2 Ionic-Wind Aircraft',
    detail:
      'Designed and analyzed an electrohydrodynamic propulsion system; performed CFD analysis, power modeling, and team-based engineering challenge work.',
  },
  {
    year: '2024',
    title: 'NASA Student Launch Initiative — Project RANCH',
    detail:
      'Payload Team Lead & Outreach Coordinator; 4300-ft high-power vehicle with redundant avionics, fiberglass airframes, and a flight-validated payload experiment.',
  },
  {
    year: '2024',
    title: 'UGA Aerospace Research Internship',
    detail:
      'Bio-inspired & AI-generated airfoil research using XFOIL CFD, Fusion CAD, 3D printing, and wind-tunnel validation; produced region-winning science fair project.',
  },
  {
    year: '2024',
    title: 'American Rocketry Challenge — Nationals (Top 24/1000)',
    detail:
      'Co-Captain leading aerodynamic optimization, OpenRocket simulations, altitude control through adjustable ballast, and iterative test flights.',
  },
  {
    year: '2024',
    title: 'Civil Air Patrol — Cadet Commander',
    detail:
      'Commander of a 45-member squadron; oversight of weekly aerospace training, operations, leadership development, and major STEM/aviation events.',
  },
  {
    year: '2023',
    title: 'Science Olympiad — Wright Stuff',
    detail:
      'Designed and built electric aircraft prototypes optimizing lift and endurance for state-level competition.',
  },
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
