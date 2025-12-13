'use client';

import type { ReactNode } from 'react';
import Image from 'next/image';
import { ArrowUpRight, FlaskConical, Activity, Cpu, Wind, Gauge } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHero from '@/components/animated/AnimatedHero';
import { AnimatedSection } from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { Button } from '@/components/ui/button';

const IMAGE_BASE_PATH = '/images/uga-airfoil';

// -------------------- DATA --------------------

const HERO_STATS = [
  { label: 'Duration', value: '8 weeks · 8 hours/day' },
  { label: 'Methods', value: 'XFOIL CFD · Fusion 360 · Wind tunnel' },
  { label: 'Outcome', value: 'Regional gold medal · State finalist' },
];

const QUICK_HIGHLIGHTS = [
  {
    icon: FlaskConical,
    label: 'Research focus',
    text: 'Bio-inspired vs generative AI vs control airfoils under matched wind-tunnel conditions.',
  },
  {
    icon: Cpu,
    label: 'Toolchain',
    text: 'XFOIL for CFD, Fusion 360 for CAD, and 3D-printed prototypes in a closed loop.',
  },
  {
    icon: Wind,
    label: 'Validation',
    text: 'Wind tunnel testing with a custom rig to compare simulations to measured forces.',
  },
  {
    icon: Gauge,
    label: 'Key result',
    text: 'Peregrine-inspired geometry achieved an L/D ≈ 61.5, outperforming the baseline.',
  },
];

const CONCEPT_MEDIA = [
  {
    src: `${IMAGE_BASE_PATH}/Mechanical-Wing-Toy-Interchangeable-Wings-Picture.png`,
    caption:
      'Mechanical wing toy with interchangeable wings used as an early physical demonstrator of lift and geometry effects.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Demonstration-Plane-CAD-Model.png`,
    caption:
      'CAD model of the demonstration plane used to test interchangeable wing configurations.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Demonstration-Plane-Interchangeable-Wings-Picture.png`,
    caption:
      'Physical demonstration plane with swappable wings used to communicate airfoil concepts in outreach and judging.',
  },
];

const AIRFOIL_CAD_IMAGES = [
  {
    src: `${IMAGE_BASE_PATH}/Control-Airfoil-CAD-Model.png`,
    caption: 'Control airfoil CAD model serving as the conventional engineering baseline.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Hawk-CAD-Model.png`,
    caption: 'Hawk-inspired airfoil CAD model capturing high-lift bird wing geometry.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Peregrine-Falcon-Inspired-CAD-Model.png`,
    caption: 'Peregrine falcon-inspired airfoil CAD model optimized for high lift-to-drag performance.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Gen-AI-CAD-Model.png`,
    caption: 'Generative AI-designed airfoil CAD model derived from machine-generated geometry.',
  },
];

const AIRFOIL_PROFILE_IMAGES = [
  {
    src: `${IMAGE_BASE_PATH}/Control-Airfoil-Drawing.png`,
    caption: 'Control airfoil 2D profile drawing used to define the baseline geometry.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Hawk-Inspired-Airfoil-Drawing.png`,
    caption: 'Hawk-inspired airfoil profile derived from wing cross-sections.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Peregrine-Falcon-Inspired-Airfoil-Drawing.png`,
    caption:
      'Peregrine falcon-inspired airfoil profile tracing nature’s optimized wing sections.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Gen-AI-Airfoil-Drawing.png`,
    caption:
      'Generative AI-designed airfoil profile illustrating a non-intuitive but effective shape.',
  },
];

const PERFORMANCE_GRAPHS = [
  {
    src: `${IMAGE_BASE_PATH}/CP-Metrics-Results-Graph.png`,
    caption:
      'Composite performance metrics comparing control, bio-inspired, and AI-designed airfoils.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Control-CL:CD-Results-Graph.png`,
    caption: 'Control airfoil lift-to-drag results highlighting baseline performance.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Hawk-Cl:CD-Results-Graph.png`,
    caption: 'Hawk-inspired airfoil lift-to-drag curve emphasizing its strong lift characteristics.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Gen-AI-XFOIL-Graph.png`,
    caption: 'Generative AI airfoil XFOIL polar showing competitive aerodynamic behavior.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Hawk-XFOIL-Results-Graph.png`,
    caption: 'Hawk airfoil XFOIL results used to pre-screen candidates before printing.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Peregrine-Falcon-XFOIL-Results-Graph.png`,
    caption:
      'Peregrine falcon airfoil XFOIL polar showing its exceptionally high lift-to-drag ratio.',
  },
];

const WIND_TUNNEL_RESULTS = [
  {
    src: `${IMAGE_BASE_PATH}/Final-Formative-Testing-Results.png`,
    caption:
      'Formative wind tunnel testing results used to iterate on geometry and calibration.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Final-WindTunnel(Summative-Testing)-Results.png`,
    caption:
      'Summative wind tunnel results comparing final airfoil candidates under matched conditions.',
  },
];

const MEDIA = [
  {
    src: `${IMAGE_BASE_PATH}/Peregrine-Falcon-Inspired-CAD-Model.png`,
    caption:
      'Peregrine falcon-inspired airfoil CAD model used in XFOIL and wind tunnel testing.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Final-WindTunnel(Summative-Testing)-Results.png`,
    caption: 'Summative wind tunnel data visualizing lift and drag trends across airfoils.',
  },
  {
    src: `${IMAGE_BASE_PATH}/Demonstration-Plane-Interchangeable-Wings-Picture.png`,
    caption:
      'Interchangeable-wing demonstration plane used to communicate results to judges and students.',
  },
  {
    src: `${IMAGE_BASE_PATH}/CP-Metrics-Results-Graph.png`,
    caption:
      'High-level comparison chart summarizing the performance of all tested airfoils.',
  },
];

// -------------------- UI HELPERS --------------------

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/5 bg-white/5/10 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

type PillProps = {
  label: string;
  value: string;
};

function Pill({ label, value }: PillProps) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs md:text-sm">
      <span className="uppercase tracking-[0.25em] text-accentneongreen/80">{label}</span>
      <span className="font-medium text-primary-foreground/90">{value}</span>
    </div>
  );
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// -------------------- PAGE --------------------

export default function UgaAirfoilResearchPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/uga-airfoil/Airfoil-Hero.svg"
        badge="UGA Airfoil Research · Summer Internship & Science Fair"
        title="Bio-Inspired and AI-Designed Airfoils — UGA Research & Science Fair"
        subtitle="Under the mentorship of Dr. Ramana Pidaparti at the University of Georgia, I conducted an 8-week research project comparing the aerodynamic performance of bio-inspired, generative AI-designed, and control airfoils using XFOIL simulations, Fusion 360 modeling, 3D printing, and wind tunnel testing."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#results" className="inline-flex items-center gap-2">
                View Results
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-accentneongreen/50 text-accentneongreen"
            >
              <a
                href="/Wing-Performance-Characteristics-Science-Fair.png"
                className="inline-flex items-center gap-2"
              >
                View Science Fair Poster
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        }
      />

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        {/* Stats + highlight row */}
        <AnimatedSection className="space-y-8">
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_STATS.map((stat, idx) => (
              <Reveal key={stat.label} delay={idx * 0.05}>
                <StatCard label={stat.label} value={stat.value} />
              </Reveal>
            ))}
          </div>

          <GlassCard className="p-6 md:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-xl space-y-3">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                  At a glance
                </p>
                <h2 className="text-xl font-semibold">A full research pipeline, end-to-end</h2>
                <p className="text-sm text-primary-foreground/75">
                  This project moves from bio-inspired and AI-generated geometry to XFOIL analysis, CAD,
                  3D printing, and wind-tunnel validation—mirroring an undergraduate research workflow.
                </p>
              </div>

              <div className="grid w-full gap-3 sm:grid-cols-2 md:max-w-md">
                <Pill label="Domain" value="Experimental aerodynamics" />
                <Pill label="Mentor" value="Dr. Ramana Pidaparti · UGA" />
                <Pill label="Tools" value="XFOIL · Fusion 360 · 3D printing" />
                <Pill label="Awards" value="Regional gold medal" />
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {QUICK_HIGHLIGHTS.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={0.1 + idx * 0.05}>
                    <div className="flex h-full flex-col gap-3 rounded-2xl border border-white/5 bg-black/40 p-4">
                      <div className="flex items-center gap-3">
                        <div className="rounded-xl border border-accentneongreen/30 bg-accentneongreen/10 p-2 text-accentneongreen">
                          <Icon className="h-4 w-4" />
                        </div>
                        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-accentneongreen/80">
                          {item.label}
                        </p>
                      </div>
                      <p className="text-sm text-primary-foreground/75">{item.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </GlassCard>
        </AnimatedSection>

        {/* Overview */}
        <Section id="overview" title="Research Overview" kicker="Overview">
          <AnimatedSection className="space-y-10">
            <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
              <GlassCard className="p-6 lg:p-7">
                <div className="space-y-6">
                  <p>
                    This project combined university-level research with a competitive science fair entry.
                    Under the mentorship of Dr. Ramana Pidaparti at the University of Georgia, I spent 7–8
                    weeks working full-time—approximately eight hours per day—in a lab focused on airfoil
                    design and aerodynamic performance. The goal was to compare how bio-inspired, generative
                    AI-designed, and conventional airfoil shapes perform in terms of lift, drag, and
                    lift-to-drag ratio.
                  </p>
                  <p>
                    To do this, I used XFOIL (Created by MIT) for computational fluid dynamics (CFD)
                    simulations, modeled candidate geometries in Fusion 360, and fabricated physical
                    prototypes via 3D printing. These airfoils were then tested in a wind tunnel using a
                    custom-built test rig to validate and calibrate the simulation results. The project
                    culminated in a regional science fair entry that earned a gold medal and advanced to the
                    state-level competition.
                  </p>
                  <p>
                    Beyond the technical results, this project served as a bridge between computational
                    analysis and experimental validation. It reinforced my interest in aerospace research and
                    provided early hands-on experience with aerodynamic testing workflows typically
                    encountered in undergraduate and graduate-level engineering programs.
                  </p>
                </div>
              </GlassCard>

              <div className="space-y-4">
                <GlassCard className="p-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Role
                  </p>
                  <p className="text-sm text-primary-foreground/80">
                    Independent high school researcher embedded in a UGA engineering lab, responsible for
                    the full pipeline: concept, simulation, CAD, fabrication, testing, and communication.
                  </p>
                </GlassCard>
                <GlassCard className="p-5 space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Skills strengthened
                  </p>
                  <ul className="space-y-2 text-sm text-primary-foreground/80">
                    <li>CFD interpretation and XFOIL workflow.</li>
                    <li>Parametric CAD and design-for-manufacture.</li>
                    <li>Wind-tunnel test planning and calibration.</li>
                    <li>Data visualization and science communication.</li>
                  </ul>
                </GlassCard>
              </div>
            </div>

            {/* Concept / demo hardware gallery */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Concept Hardware & Demonstration Plane</h3>
              <p className="text-sm text-primary-foreground/70">
                Early prototypes made the physics tangible—helpful both for my own intuition and for
                explaining lift, drag, and geometry to judges and younger students.
              </p>
              <div className="grid gap-6 md:grid-cols-3">
                {CONCEPT_MEDIA.map((item, index) => (
                  <Reveal key={item.caption} delay={index * 0.05}>
                    <div className="space-y-3">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          className="object-contain p-4"
                          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 33vw, 100vw"
                        />
                      </div>
                      <p className="text-sm text-primary-foreground/70">{item.caption}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Section>

        {/* Problem & Objectives */}
        <Section
          id="objectives"
          title="Problem Statement & Objectives"
          kicker="Research Question"
        >
          <AnimatedSection className="space-y-8">
            <div className="grid gap-8 lg:grid-cols-2">
              <GlassCard className="p-6 lg:p-7 space-y-4">
                <p>
                  The central research question was whether nature’s optimized wing geometries
                  outperform airfoils generated by machine learning approaches, and how both compare to a
                  conventional control airfoil. Specifically:
                </p>
                <ul className="list-disc space-y-3 pl-5 text-sm text-primary-foreground/80">
                  <li>
                    How do bio-inspired airfoils based on peregrine falcon and hawk wings perform in
                    terms of lift, drag, and lift-to-drag ratio?
                  </li>
                  <li>
                    Can generative AI-designed airfoils achieve comparable or superior aerodynamic
                    efficiency to biologically inspired designs?
                  </li>
                  <li>
                    How closely do XFOIL simulation results align with experimental data obtained from
                    wind tunnel testing?
                  </li>
                </ul>
              </GlassCard>

              <GlassCard className="p-6 lg:p-7 space-y-4">
                <p>The primary objectives were to:</p>
                <ul className="list-disc space-y-3 pl-5 text-sm text-primary-foreground/80">
                  <li>Design and parameterize a family of bio-inspired, AI-generated, and control airfoils.</li>
                  <li>Run XFOIL simulations to estimate aerodynamic performance across a range of angles of attack.</li>
                  <li>Fabricate 3D-printed prototypes and collect experimental wind tunnel data.</li>
                  <li>
                    Compare simulation and experimental results and interpret the implications for aerospace
                    and renewable energy applications.
                  </li>
                </ul>
              </GlassCard>
            </div>
          </AnimatedSection>
        </Section>

        {/* Methods */}
        <Section
          id="methods"
          title="CFD, CAD, and Generative Design Workflow"
          kicker="Methodology"
        >
          <AnimatedSection className="space-y-10">
            <GlassCard className="p-6 lg:p-7 space-y-6">
              <p>
                The project followed a repeatable workflow that integrated computational tools, CAD
                modeling, and physical fabrication:
              </p>
              <ul className="list-disc space-y-3 pl-5 text-sm text-primary-foreground/80">
                <li>
                  <strong className="text-white">Airfoil generation and selection:</strong> Bio-inspired
                  candidates were derived from peregrine falcon and hawk wing geometries. A control airfoil
                  was selected to represent a conventional engineering baseline. Generative AI tools were
                  then used to propose candidate airfoils, which were filtered based on geometric feasibility
                  and manufacturability.
                </li>
                <li>
                  <strong className="text-white">CFD via XFOIL:</strong> Each airfoil was analyzed in XFOIL to
                  estimate lift coefficient, drag coefficient, and lift-to-drag ratio across a range of
                  angles of attack and Reynolds numbers representative of the wind tunnel test conditions.
                </li>
                <li>
                  <strong className="text-white">CAD modeling in Fusion 360:</strong> Approved airfoil profiles
                  were modeled in Fusion 360, extruded to appropriate chord and span dimensions, and prepared
                  for 3D printing. Mounting features were built into the models to interface with the wind
                  tunnel test rig.
                </li>
                <li>
                  <strong className="text-white">3D printing and post-processing:</strong> Airfoils were printed
                  using appropriate materials and layer heights to balance surface finish with fabrication
                  time. Supports were removed and surfaces were lightly finished to minimize roughness that
                  could significantly affect drag.
                </li>
              </ul>
            </GlassCard>

            {/* Highlight: CAD & XFOIL pairing */}
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <GlassCard className="p-4">
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                      <Image
                        src={`${IMAGE_BASE_PATH}/Control-Airfoil-CAD-Model.png`}
                        alt="Sample control airfoil CAD model in Fusion 360 with mounting interface."
                        fill
                        className="object-contain p-4"
                        sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <p className="text-sm text-primary-foreground/70">
                      Control airfoil CAD model in Fusion 360 with integrated mounting features for the
                      wind tunnel rig.
                    </p>
                  </div>
                </GlassCard>
              </Reveal>

              <Reveal delay={0.05}>
                <GlassCard className="p-4">
                  <div className="space-y-3">
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                      <Image
                        src={`${IMAGE_BASE_PATH}/Peregrine-Falcon-XFOIL-Results-Graph.png`}
                        alt="XFOIL lift/drag polar plots for the peregrine falcon-inspired airfoil."
                        fill
                        className="object-contain p-4"
                        sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                      />
                    </div>
                    <p className="text-sm text-primary-foreground/70">
                      XFOIL lift/drag polar for the peregrine falcon-inspired airfoil used to select
                      high-performing geometry for fabrication.
                    </p>
                  </div>
                </GlassCard>
              </Reveal>
            </div>

            {/* Airfoil CAD models */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">Airfoil CAD Models</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-accentneongreen/80">
                  Geometry · Mounting · Consistency
                </p>
              </div>
              <p className="text-sm text-primary-foreground/70">
                Each candidate airfoil was modeled in Fusion 360 with consistent chord, span, and
                mounting features so that performance differences reflected geometry rather than hardware.
              </p>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {AIRFOIL_CAD_IMAGES.map((item, index) => (
                  <Reveal key={item.caption} delay={index * 0.03}>
                    <GlassCard className="p-4">
                      <div className="space-y-3">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                          <Image
                            src={item.src}
                            alt={item.caption}
                            fill
                            className="object-contain p-4"
                            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                        <p className="text-sm text-primary-foreground/70">{item.caption}</p>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Airfoil profile drawings */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">Airfoil Profile Drawings</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-accentneongreen/80">
                  Coordinates · Sections · Profiles
                </p>
              </div>
              <p className="text-sm text-primary-foreground/70">
                2D profile drawings captured the exact coordinates of each airfoil, providing the link
                between natural wing sections, AI-generated shapes, and manufacturable CAD geometry.
              </p>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                {AIRFOIL_PROFILE_IMAGES.map((item, index) => (
                  <Reveal key={item.caption} delay={index * 0.03}>
                    <GlassCard className="p-4">
                      <div className="space-y-3">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                          <Image
                            src={item.src}
                            alt={item.caption}
                            fill
                            className="object-contain p-4"
                            sizes="(min-width: 1280px) 25vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                        <p className="text-sm text-primary-foreground/70">{item.caption}</p>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Section>

        {/* Experimental setup */}
        <Section
          id="experimental"
          title="Wind Tunnel Testing & Data Collection"
          kicker="Experimental Setup"
        >
          <AnimatedSection className="space-y-8">
            <GlassCard className="p-6 lg:p-7 space-y-6">
              <p>
                To validate the simulations, I designed and used a wind tunnel test setup that allowed
                for repeated, controlled measurements of aerodynamic forces on each airfoil:
              </p>
              <ul className="list-disc space-y-3 pl-5 text-sm text-primary-foreground/80">
                <li>
                  <strong className="text-white">Test rig design:</strong> A dedicated mount was built
                  to hold each airfoil at a fixed angle of attack, with the ability to swap airfoils
                  quickly between runs. The rig interfaced with force-measurement instrumentation to
                  capture lift and drag data.
                </li>
                <li>
                  <strong className="text-white">Controlled test conditions:</strong> Wind tunnel speeds
                  and angles of attack were selected to mirror the conditions used in XFOIL, enabling
                  direct comparison between simulated and experimental performance.
                </li>
                <li>
                  <strong className="text-white">Force measurement and logging:</strong> For each
                  configuration, lift and drag forces were measured and recorded. Repeated trials were
                  performed to reduce the impact of random noise and to identify any systematic biases.
                </li>
                <li>
                  <strong className="text-white">Calibration and error analysis:</strong> Baseline runs
                  and control measurements were used to calibrate the system, and discrepancies between
                  repeated measurements were analyzed to estimate uncertainty.
                </li>
              </ul>
            </GlassCard>

            {/* Wind tunnel summary figures */}
            <div className="grid gap-6 md:grid-cols-2">
              {WIND_TUNNEL_RESULTS.map((item, index) => (
                <Reveal key={item.caption} delay={index * 0.05}>
                  <GlassCard className="p-4">
                    <div className="space-y-3">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          className="object-contain p-4"
                          sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                      <p className="text-sm text-primary-foreground/70">{item.caption}</p>
                    </div>
                  </GlassCard>
                </Reveal>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* Results */}
        <Section id="results" title="Results & Analysis" kicker="Findings">
          <AnimatedSection className="space-y-10">
            <GlassCard className="p-6 lg:p-7 space-y-6">
              <p>
                The results showed clear performance differences between bio-inspired, AI-generated,
                and control airfoils:
              </p>
              <ul className="list-disc space-y-3 pl-5 text-sm text-primary-foreground/80">
                <li>
                  The <strong className="text-white">peregrine falcon-inspired airfoil</strong> achieved
                  the highest lift-to-drag ratio, reaching a value of approximately{' '}
                  <strong className="text-white">61.5</strong>, indicating exceptional aerodynamic
                  efficiency under the tested conditions.
                </li>
                <li>
                  The <strong className="text-white">hawk-inspired airfoil</strong> produced the highest
                  lift, with measured forces up to{' '}
                  <strong className="text-white">6.757 newtons</strong>, making it especially effective
                  in scenarios prioritizing lift over drag minimization.
                </li>
                <li>
                  The <strong className="text-white">AI-designed airfoil</strong> performed competitively,
                  with lift and drag characteristics that in some cases approached or matched the
                  performance of the bio-inspired designs. This result suggests that generative AI can
                  approximate some of the aerodynamic advantages found in nature.
                </li>
              </ul>
              <p>
                Although there were differences between simulated and measured values, the trends from
                XFOIL were consistent with the wind tunnel data. Where discrepancies appeared, they could
                often be explained by surface finish, 3D-printing tolerances, or slight misalignments in
                the test rig. These differences highlighted the importance of both high-fidelity geometry
                and careful experimental setup in aerodynamic testing.
              </p>
              <p>
                Overall, the project demonstrated that bio-inspired airfoils—especially those derived from
                high-performance birds such as the peregrine falcon—offer excellent lift-to-drag
                characteristics, while AI-generated airfoils show promise as a tool for exploring
                unconventional but effective geometries.
              </p>
            </GlassCard>

            {/* Performance graphs */}
            <div className="space-y-4">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <h3 className="text-lg font-semibold">Performance Graphs & XFOIL Polars</h3>
                <p className="text-xs uppercase tracking-[0.25em] text-accentneongreen/80">
                  Lift · Drag · L/D
                </p>
              </div>
              <p className="text-sm text-primary-foreground/70">
                These plots summarize how each airfoil behaved across angles of attack, highlighting both
                absolute lift and efficiency as measured by lift-to-drag ratio.
              </p>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {PERFORMANCE_GRAPHS.map((item, index) => (
                  <Reveal key={item.caption} delay={index * 0.03}>
                    <GlassCard className="p-4">
                      <div className="space-y-3">
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                          <Image
                            src={item.src}
                            alt={item.caption}
                            fill
                            className="object-contain p-4"
                            sizes="(min-width: 1280px) 33vw, (min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          />
                        </div>
                        <p className="text-sm text-primary-foreground/70">{item.caption}</p>
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </div>
          </AnimatedSection>
        </Section>

        {/* Applications */}
        <Section
          id="applications"
          title="Applications and Engineering Impact"
          kicker="Applications"
        >
          <AnimatedSection className="space-y-6">
            <GlassCard className="p-6 lg:p-7 space-y-4">
              <p>
                The findings from this project have implications beyond the specific test
                configurations:
              </p>
              <ul className="list-disc space-y-3 pl-5 text-sm text-primary-foreground/80">
                <li>
                  <strong className="text-white">Aerospace and UAVs:</strong> High lift-to-drag
                  airfoils informed by bio-inspired shapes could improve the efficiency and endurance of
                  unmanned aerial vehicles and small aircraft, particularly in low Reynolds number
                  regimes.
                </li>
                <li>
                  <strong className="text-white">Renewable energy:</strong> Lessons from bio-inspired
                  and AI-generated airfoils can be applied to wind turbine blade design, where slight
                  improvements in aerodynamic efficiency can translate into substantial gains in power
                  output over time.
                </li>
                <li>
                  <strong className="text-white">Design workflows:</strong> Combining bio-inspired
                  intuition, generative AI, and traditional CFD tools offers a template for future
                  engineering workflows that can rapidly explore large design spaces while still grounding
                  decisions in physical testing.
                </li>
              </ul>
              <p>
                On a personal level, this project strengthened my understanding of aerodynamics, CFD,
                and experimental methods, and showed me how research can move from concept to prototype to
                validated data.
              </p>
            </GlassCard>
          </AnimatedSection>
        </Section>

        {/* Programs / context */}
        <Section
          id="context"
          title="Mentorship, Science Fair, and Academic Context"
          kicker="Programs"
        >
          <AnimatedSection className="space-y-6">
            <GlassCard className="p-6 lg:p-7 space-y-4">
              <p>
                The research was conducted under the mentorship of{' '}
                <strong className="text-white">Dr. Ramana Pidaparti</strong> at the University of
                Georgia, where I worked in his lab for 7–8 weeks as a high school student, spending full
                days immersed in modeling, simulation, and testing. This environment exposed me to the
                pace and expectations of university-level engineering research.
              </p>
              <p>
                I adapted the project into a science fair entry that advanced through the regional level
                with a <strong className="text-white">gold medal</strong> and continued on to the state
                competition. In preparing for judging, I created detailed posters, data visualizations,
                and explanations that distilled CFD concepts and wind tunnel methodology into an
                accessible narrative for a broad audience.
              </p>
              <p>
                Together with my work in rocketry competitions and NASA Student Launch, this research
                contributed to my selection for the{' '}
                <strong className="text-white">Governor’s Honors Program</strong> in Mechanical and
                Aerospace Engineering, where I continued to deepen my engagement with aerospace topics in
                a rigorous academic setting.
              </p>
            </GlassCard>
          </AnimatedSection>
        </Section>

        {/* Media / downloads */}
        <Section id="media" title="Media and Downloads" kicker="Media">
          <AnimatedSection className="space-y-8">
            <GlassCard className="p-6 lg:p-7 space-y-5">
              <div className="flex flex-wrap items-center gap-3">
                <Button asChild className="rounded-full">
                  <a href="#" className="inline-flex items-center gap-2">
                    Download Research Summary (PDF)
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-full border-accentneongreen/50 text-accentneongreen"
                >
                  <a
                    href="/Wing-Performance-Characteristics-Science-Fair.png"
                    className="inline-flex items-center gap-2"
                  >
                    View Science Fair Poster (PNG)
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </Button>
              </div>

              <p className="text-sm text-primary-foreground/70">
                A selection of visuals that capture the project—from CAD geometry to wind-tunnel data
                and demonstration hardware.
              </p>

              <div className="grid gap-6 md:grid-cols-2">
                {MEDIA.map((item, index) => (
                  <Reveal key={item.caption} delay={index * 0.05}>
                    <div className="space-y-3">
                      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/5 bg-black/40">
                        <Image
                          src={item.src}
                          alt={item.caption}
                          fill
                          className="object-contain p-4"
                          sizes="(min-width: 1024px) 50vw, (min-width: 768px) 50vw, 100vw"
                        />
                      </div>
                      <p className="text-sm text-primary-foreground/70">{item.caption}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </GlassCard>
          </AnimatedSection>
        </Section>
      </div>
    </div>
  );
}
