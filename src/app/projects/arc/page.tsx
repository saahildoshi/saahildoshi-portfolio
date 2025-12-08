'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHero from '@/components/animated/AnimatedHero';
import AnimatedSection from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

const HERO_STATS = [
  { label: 'Target Apogee', value: '820 ft (ARC 2023 ruleset)' },
  { label: 'Flight Time Window', value: '43–46 seconds' },
  { label: 'Flight Mass', value: '605 g with egg payload' },
];

const MISSION_SPECS = [
  { label: 'Target Apogee', value: '820 ft' },
  { label: 'Acceptable Flight Time Window', value: '43–46 seconds' },
  { label: 'Maximum Allowed Mass', value: '650 g' },
  { label: 'Actual Flight Mass', value: '605 g (with egg payload)' },
  { label: 'Payload', value: 'One raw egg (uncracked on landing)' },
  { label: 'Motor', value: 'AeroTech F32-6T' },
  { label: 'Altimeter', value: 'Jolly Logic AltimeterTwo' },
  { label: 'Recovery', value: 'Single-deploy 24″ parachute, Kevlar shock cord' },
  { label: 'Airframe Diameter', value: 'BT-80' },
  { label: 'Overall Length', value: '60 in' },
];

const MEDIA = [
  {
    src: '/images/arc/Flight-Logs-650x180.png',
    caption: 'ARC flight logs summarizing altitude, time, and flight-time performance.',
    ratio: '650/180',
  },
  {
    src: '/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png',
    caption: 'Our ARC national finalist team during Capitol Hill recognition.',
    ratio: '350/260',
  },
  {
    src: '/images/arc/Assembled-Rocket-470x80.png',
    caption: 'Final competition-ready BT-80 rocket before qualification flight.',
    ratio: '470/80',
  },
];

export default function ArcProjectPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/arc-hero.svg"
        badge="American Rocketry Challenge · National Finalist"
        title="American Rocketry Challenge — National Finalist Co-Captain"
        subtitle="Mid-power competition rocket engineered for an 820 ft target apogee, 43–46 second flight time, and a 605 g mass limit, flown with a fragile egg payload."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Button size="lg" asChild className="rounded-full">
              <Link href="/projects" className="inline-flex items-center gap-2">
                View All Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        }
      />

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        {/* Hero Stats */}
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

        {/* Overview */}
        <Section id="overview" title="Executive Summary" kicker="American Rocketry Challenge">
          <AnimatedSection className="space-y-6">
            <p>
              In the 2023 American Rocketry Challenge (ARC), I served as Co-Captain of a team that designed, simulated, and flew a
              mid-power competition rocket to meet strict altitude and timing constraints. The mission required the rocket to reach an
              apogee of 820 feet, carry a fragile egg payload, remain within a 43–46 second total flight time window, and stay under a
              650 gram mass limit.
            </p>
            <p>
              I led OpenRocket simulations, CAD development in Fusion 360, reconstruction cycles, and configuration tuning that helped
              the team place 24th nationally out of ~1,000 teams with a qualifying score of 9. This result directly contributed to our
              later invitation to the NASA Student Launch Initiative.
            </p>
          </AnimatedSection>
        </Section>

        {/* Spec Table + Spreadsheets */}
        <Section id="specs" title="Mission Specifications & Constraints" kicker="ARC 2023 Ruleset">
          <AnimatedSection>
            <div className="space-y-8">
              <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
                <p>
                  ARC imposes strict altitude, flight-time, and mass constraints. Every design choice reflected a trade-off between
                  aerodynamic performance, structural mass, and payload safety.
                </p>

                <div className="grid gap-4 sm:grid-cols-2">
                  {MISSION_SPECS.map((spec) => (
                    <div key={spec.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">{spec.label}</p>
                      <p className="mt-2 text-white">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <FigureCard
                  src="/images/arc/Rocket-Configs-Spreadsheet2-330x230.png"
                  caption="Rocket configuration trade study used to tune apogee, mass, and timing."
                  ratio="330/230"
                />
                <FigureCard
                  src="/images/arc/Rocket-Configurations-Spreadsheet-330x230.png"
                  caption="Launch configuration matrix tracking flights, weather, and scoring outcomes."
                  ratio="330/230"
                />
              </div>
            </div>
          </AnimatedSection>
        </Section>

        {/* Vehicle Architecture */}
        <Section id="vehicle" title="Vehicle Architecture" kicker="Airframe, Structure & Recovery">
          <AnimatedSection className="space-y-6">
            <p>
              The rocket consisted of three structural sections: a nylon–carbon fiber 3D-printed nose cone, a BT-80 spiral-wound kraft
              paper airframe, and a 3D-printed nylon–carbon fiber tail cone integrating the fin can and motor mount. Delrin fins bolted
              directly into the tail cone for repeatable alignment.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              <FigureCard
                src="/images/arc/Assembled-Rocket-470x80.png"
                caption="Assembled BT-80 competition rocket with payload bay and recovery system integrated."
                ultraWide
                ratio="470/80"
              />

              <FigureCard
                src="/images/arc/Engine-Bay-With-Motor.png"
                caption="Engine bay with AeroTech F32-6T motor installed and fin-can interfaces visible."
              />

              <FigureCard
                src="/images/arc/NoseCone-230x300.png"
                caption="3D-printed nylon–carbon fiber nose cone with adjustable infill for CG tuning."
                portrait
                ratio="230/300"
              />
            </div>
          </AnimatedSection>
        </Section>

        {/* Testing */}
        <Section id="testing" title="Flight Testing & Performance" kicker="Simulations & Iteration">
          <AnimatedSection className="space-y-6">
            <p>
              Approximately fifteen test flights were conducted to refine configurations and correlate OpenRocket predictions with real
              flight data. Environmental factors such as wind drift required multiple rebuilds of identical airframes.
            </p>
            <p>
              Our final qualifying score of 9 was among the lowest in the nation, reflecting precise altitude and time control and
              reliable recovery performance.
            </p>
          </AnimatedSection>
        </Section>

        {/* Highlights */}
        <Section id="highlights" title="Engineering Highlights" kicker="3D-Printed Structures & Precision Tuning">
          <AnimatedSection>
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
              <ul className="list-disc space-y-3 pl-5 text-primary-foreground/80">
                <li>
                  <strong className="text-white">Adjustable-infill nose cone:</strong> CG tuning by modifying internal infill.
                </li>
                <li>
                  <strong className="text-white">Carbon-reinforced tail cone:</strong> Integrated motor mount and Delrin fin interfaces.
                </li>
                <li>
                  <strong className="text-white">Simulation–test correlation:</strong> Used AltimeterTwo logs to improve aero and drag predictions.
                </li>
                <li>
                  <strong className="text-white">Egg payload protection:</strong> Foam isolation + parachute sizing to meet time constraints.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </Section>

        {/* Team */}
        <Section id="team" title="Team & Operations" kicker="Leadership & Roles">
          <AnimatedSection>
            <FigureCard
              src="/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png"
              caption="Our ARC team after being recognized as national finalists and the only team from Georgia at the 2023 competition."
              ratio="350/260"
            />
          </AnimatedSection>
        </Section>

        {/* Results */}
        <Section id="results" title="National Results & Impact" kicker="From ARC to NASA SLI">
          <AnimatedSection className="space-y-6">
            <p>
              Placing 24th nationally enabled our direct invitation to NASA SLI, where many of the engineering practices refined during ARC
              carried over into higher-power launch vehicle development.
            </p>
          </AnimatedSection>
        </Section>

        {/* Appendix */}
        <Section id="media" title="Media & Downloads" kicker="Appendix">
          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-3">
              {MEDIA.map((item) => (
                <FigureCard key={item.src} {...item} />
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen" asChild>
                <Link href="#">Download ARC Flight Logs (PDF)</Link>
              </Button>
              <Button variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen" asChild>
                <Link href="#">Download ARC Design Summary (PDF)</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Section>
      </div>
    </div>
  );
}
