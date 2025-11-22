'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import AnimatedHero from '@/components/animated/AnimatedHero';
import { AnimatedSection } from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

const NAV_ITEMS = [
  { id: 'overview', label: 'Overview' },
  { id: 'constraints', label: 'Mission & Constraints' },
  { id: 'engine', label: 'Engine System' },
  { id: 'airframe', label: 'Airframe & Airfoils' },
  { id: 'testing', label: 'Testing & Data' },
  { id: 'integration', label: 'Integration & Readiness' },
  { id: 'reflection', label: 'Lessons' },
  { id: 'references', label: 'Research' },
];

const HERO_STATS = [
  { label: 'Program Length', value: '4 weeks · GHP Mechanical & Aerospace Engineering' },
  { label: 'Propulsion', value: 'Electrohydrodynamic (ionic wind) engine' },
  { label: 'My Role', value: 'Engine subteam · Airfoil analysis · CAD integration' },
];

const DESIGN_ITERATIONS = [
  {
    title: 'V1 — Initial cathode/anode exploration',
    detail:
      'Investigated mesh, serrated blade, and wire cathodes with single and dual-rod anodes to find stable corona discharge; rejected wire cathodes and copper-plated anodes for low conductivity and weak corona.',
  },
  {
    title: 'V2 — Modular flowrate units',
    detail:
      'Shifted from ~120 g wing-mounted engines (~2.2 m/s flow) to 5-inch modular units aligned to ribs for manufacturability and better attachment, enabling quicker swaps and repeatable geometry.',
  },
  {
    title: 'V3 — Final stacked geometry',
    detail:
      'Documented the final decision: four 20-inch units, dual sheet-metal anodes with a single sheet-metal cathode, acrylic brackets, one transformer per unit; achieved ~6 g thrust per unit (~24 g total) at ~170 g mass.',
  },
];

const MEDIA = [
  { src: '/images/eras2-engine.svg', caption: 'Modular ionic engine units with acrylic brackets and sheet-metal electrodes.' },
  { src: '/images/eras2-airframe.svg', caption: 'WASP-derived airfoil with rectangular V3 wing and engine hardpoints.' },
  { src: '/images/gallery-flight-03.svg', caption: 'Test stand and instrumentation concepts for thrust and velocity logging.' },
];

export default function Eras2ProjectPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/eras2-hero.svg"
        badge="Georgia Governor’s Honors Program · 2025 · Mechanical & Aerospace Engineering"
        title="ERAS2 — Electrohydrodynamic Remote Aircraft System"
        subtitle="A GHP capstone project to design, build, and test an ionic-wind–powered aircraft, combining electrohydrodynamic propulsion with a lightweight, student-designed airframe."
        actions={(
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects">Back to Projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen">
              <Link href="/projects/ghp-mechanical-aero">About GHP</Link>
            </Button>
          </div>
        )}
      />

      <div className="sticky top-16 z-20 border-b border-white/5 bg-primary/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl gap-4 overflow-x-auto px-6 py-3 text-[0.75rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground/70">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="shrink-0 transition hover:text-accentneongreen">
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <StatCard label={stat.label} value={stat.value} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <Section id="overview" title="Project Overview" kicker="Overview">
          <AnimatedSection className="space-y-6">
            <p>
              ERAS2 (Electrohydrodynamic Remote Aircraft System 2) was the capstone project for the Mechanical & Aerospace Engineering major at the Georgia Governor’s Honors Program. Over four weeks, our cohort designed and built a flight vehicle powered by an ionic wind engine—an electrohydrodynamic propulsion system that accelerates air using high-voltage electric fields instead of moving parts.
            </p>
            <p>
              I served on the <strong>Engine subteam</strong>, focusing on the iterative design, testing, and integration of the ionic thruster, while also supporting the <strong>airfoil selection and analysis</strong> for the wing. Working alongside the Flight and Electronics teams, we had to balance thrust, mass, structural strength, and stability to get a realistic, flyable configuration under tight time constraints.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="constraints" title="Mission & Constraints" kicker="Mission Goals">
          <AnimatedSection className="space-y-6">
            <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
              <div className="space-y-4">
                <p className="text-primary-foreground/80">Mission goals included:</p>
                <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
                  <li>Design a remotely launched, electric, propellerless aircraft using an ionic-wind engine as the primary thrust source.</li>
                  <li>Integrate engine, airframe, and electronics into a single flight-ready system.</li>
                  <li>Collect and interpret experimental data on thrust, airflow velocity, and structural performance.</li>
                </ul>
              </div>
              <div className="space-y-4">
                <p className="text-primary-foreground/80">Key constraints:</p>
                <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
                  <li>Strict mass budget at the aircraft and engine level driven by lift capacity and structural limits.</li>
                  <li>Limited high-voltage power budget with transformers pulling roughly 0.7 A at 12 V.</li>
                  <li>Safety and reliability considerations around arcing risk and fragile balsa/basswood structures.</li>
                  <li>Extremely compressed schedule—only a few weeks to progress from concept to multiple flightable iterations.</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="engine" title="Engine System" kicker="Electrohydrodynamic Propulsion">
          <AnimatedSection className="space-y-6">
            <p>
              The ionic engine relied on high-voltage electric fields to accelerate ions and create airflow with no moving parts. Working on the Engine subteam meant balancing thrust, corona stability, mass, and manufacturability while ensuring the design could mount cleanly to the wing. I was responsible for ERAS2-7 initial engine designs, evaluating cathode/anode geometries using wire mesh, sheet metal, and wire to see which produced a stable discharge and measurable flow.
            </p>
            <p>
              When early wire and copper-plated concepts produced weak corona or insufficient conductivity, I documented the failures and steered the team toward serrated sheet-metal cathodes and more rigid anode concepts. I also defined the Engine Test Setup (ERAS2-8), specifying the thrust measurement enclosure and procedures using a kitchen scale to convert mass change to Newtons of thrust in our shared log. After the first flight attempt exposed a bracket failure (ERAS2-101), I proposed corrective actions to redesign attachments and integrate hardpoints into the wing spar.
            </p>
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
              <p className="text-primary-foreground/80">Design iterations I led and documented:</p>
              <ul className="space-y-3 text-primary-foreground/80">
                {DESIGN_ITERATIONS.map((item) => (
                  <li key={item.title} className="rounded-xl border border-white/5 bg-primary/60 p-4">
                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-accentneongreen/80">{item.title}</p>
                    <p className="mt-2 text-primary-foreground/80">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="airframe" title="Airframe & Airfoils" kicker="Wing, Integration, and CAD">
          <AnimatedSection className="space-y-6">
            <p>
              Building on my airfoil research experience, I supported the Flight team in selecting the <strong>WASP (smoothed) airfoil</strong>, which offered a broad Cl/Cd plateau up to roughly 10° angle of attack for stable lift-to-drag performance. Early V1/V2 wings explored more complex geometries with taper, but we ultimately moved to a rectangular V3 wing to simplify builds while retaining lift.
            </p>
            <p>
              The Flight team added modified ribs with hardpoints inside the wingbox so our Engine subteam could mount or swap engines with 1/4″ fasteners. In CAD, I aligned engine brackets to these hardpoints, preserved anode–cathode spacing, and resolved interferences with spars and struts to keep the engine clear of structural members.
            </p>
            <div className="grid gap-6 md:grid-cols-3">
              {MEDIA.map((media, index) => (
                <motion.div
                  key={media.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
                >
                  <FigureCard src={media.src} caption={media.caption} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        <Section id="testing" title="Testing & Data" kicker="Experimental Workflow">
          <AnimatedSection className="space-y-6">
            <p>
              Engine testing used a structured stand with adjustable anode–cathode spacing, capturing airflow velocity and thrust as mass change on a scale converted to Newtons. We compared cathode geometries, copper wrapping, and modular unit configurations to understand which setups produced reliable flow and thrust without excessive mass.
            </p>
            <div className="space-y-3 rounded-2xl border border-white/5 bg-white/5 p-6">
              <p className="text-primary-foreground/80">Key findings:</p>
              <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
                <li>
                  <strong className="text-white">Cathode geometry mattered more than wire material:</strong> serrated sheet-metal cathodes with spaced triangular points produced the most visible corona and highest thrust.
                </li>
                <li>
                  <strong className="text-white">Copper electroplating was not worth the mass:</strong> wrapping electrodes in copper tape did not significantly change flow speed (~2.3 m/s vs ~2.37 m/s control).
                </li>
                <li>
                  <strong className="text-white">Structured engine units outperformed ad-hoc setups:</strong> modular 5-inch brackets and stacked units yielded repeatable thrust and simpler integration.
                </li>
              </ul>
            </div>
            <p>
              Safety improvements included relocating the stand to prevent proximity to the discharge plume after a near-miss during testing, standardizing enclosures, and keeping measurement stations clear of observers.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="integration" title="Integration & Flight Readiness" kicker="Mass, Structure, and Attachments">
          <AnimatedSection className="space-y-6">
            <p>
              Engine and airframe integration revolved around mass budgets and structural changes. Initial estimates placed the system near 1 kg with the engine dominating mass; successive V2/V3 iterations brought the target nearer to 700 g through bracket redesigns and simplified structures. Wingbox changes, additional spars, and nose-spar braces were added specifically to carry engine loads.
            </p>
            <p>
              When the first attachment failed, I documented the nonconformance and helped define corrective actions: one-piece brackets, better material choices, and hardpoint alignment that preserved thrust line and spacing. Those updates enabled the stacked V3 engine to mount securely while meeting the airframe’s lift and stability needs.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="reflection" title="Lessons & Reflection" kicker="Systems Perspective">
          <AnimatedSection className="space-y-6">
            <p>
              ERAS2 was my first experience designing a propulsion system where the engine and the airframe were this tightly coupled. As an Engine subteam member, I learned that it wasn’t enough to maximize thrust in isolation—we had to hit mass budgets, attach to real structures, and survive crashes and non-ideal launches.
            </p>
            <p>
              The project forced me to think like a systems engineer: translate test data into design decisions, coordinate CAD changes with the Flight team, and document failures as nonconformance tickets so the next iteration could be better. It also let me connect my previous airfoil and CFD experience with a completely different kind of propulsion. ERAS2 made clear how much I enjoy bridging detailed experimental work, CAD modeling, and big-picture design.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="references" title="Research & References" kicker="Background">
          <AnimatedSection className="space-y-6">
            <p>
              Our ERAS2 engine and airframe design drew on both prior electrohydrodynamic propulsion literature and internal experimental data.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
              <li>Open literature on electrohydrodynamic (ionic wind) propulsion and corona discharge physics to understand how high-voltage fields accelerate ions and generate thrust.</li>
              <li>Previous ionic aircraft demonstrations used to benchmark realistic thrust-to-weight expectations and safety practices.</li>
              <li>Internal test logs, Google Sheets for thrust and velocity data, and Jira decision tickets (ERAS2-7, ERAS2-8, ERAS2-101, ERAS2-137) documenting geometry changes, mass budgets, and engine performance over time.</li>
            </ul>
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" size="sm" className="rounded-full border-accentneongreen/50 text-accentneongreen">
                <Link href="/projects">Back to Projects</Link>
              </Button>
              <Button asChild variant="outline" size="sm" className="rounded-full border-accentneongreen/50 text-accentneongreen">
                <Link href="/projects/ghp-mechanical-aero">Return to GHP Overview</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Section>
      </div>
    </div>
  );
}
