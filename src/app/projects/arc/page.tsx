'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHero from '@/components/animated/AnimatedHero';
import { AnimatedSection } from '@/components/animated/AnimatedSection';
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

// Appendix Media
const MEDIA = [
  {
    src: '/images/arc/Flight-Logs-650x180.png',
    caption: 'ARC flight logs summarizing altitude, time, and flight-time performance.',
  },
  {
    src: '/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png',
    caption: 'Our ARC national finalist team during Capitol Hill recognition.',
  },
  {
    src: '/images/arc/Assembled-Rocket-470x80.png',
    caption: 'Final competition-ready BT-80 rocket before qualification flight.',
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
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects" className="inline-flex items-center gap-2">
                View All Projects
                <ArrowUpRight className="h-4 w-4" />
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
              apogee of 820 feet, carry a fragile egg payload, remain within a 43–46 second flight window, and stay under a 650 gram
              mass limit. Our final vehicle mass was 605 grams with the egg, providing a narrow margin for structural strength,
              recovery hardware, and stability.
            </p>
            <p>
              I led design and analysis work using OpenRocket for flight dynamics and stability simulations, and Fusion 360 for CAD
              development of major components. The final vehicle—a 60-inch BT-80 rocket with a kraft paper airframe, 3D-printed
              nylon–carbon fiber nose and tail cones, and Delrin fins—earned a qualifying score of 9, one of the lowest in the nation.
              We placed 24th out of ~1,000 teams, making us the only team from Georgia to reach the national finals and contributing
              directly to our later selection for NASA Student Launch.
            </p>
          </AnimatedSection>
        </Section>

        {/* Mission Spec + Spreadsheets */}
        <Section id="specs" title="Mission Specifications & Constraints" kicker="ARC 2023 Ruleset">
          <AnimatedSection>
            <div className="space-y-10">
              <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
                <p>
                  ARC imposes strict constraints that shape every design decision. Altitude, time, mass limit, and payload safety
                  must all be met simultaneously, requiring careful trade-offs in aerodynamics, structure, and recovery tuning.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {MISSION_SPECS.map((spec) => (
                    <div key={spec.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">
                        {spec.label}
                      </p>
                      <p className="mt-2 text-white">{spec.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preserve wide spreadsheet aspect ratios */}
              <div className="grid gap-6 md:grid-cols-2">
                <FigureCard
                  src="/images/arc/Rocket-Configs-Spreadsheet2-330x230.png"
                  caption="Rocket configuration trade study used to tune apogee, mass, and timing."
                />
                <FigureCard
                  src="/images/arc/Rocket-Configurations-Spreadsheet-330x230.png"
                  caption="Launch configuration matrix tracking flights, weather, and scoring outcomes."
                />
              </div>
            </div>
          </AnimatedSection>
        </Section>

        {/* Vehicle Architecture */}
        <Section id="vehicle" title="Vehicle Architecture" kicker="Airframe, Structure & Recovery">
          <AnimatedSection className="space-y-6">
            <p>
              The ARC vehicle was a 60-inch BT-80 rocket consisting of a nylon–carbon fiber 3D-printed nose cone, kraft paper airframe,
              and a reinforced 3D-printed tail cone that integrated fin mounts and the motor interface. Delrin fins were screw-mounted
              into the tail cone, improving repeatability and alignment through rebuilds.
            </p>
            <p>
              Because ARC prohibits dual-deploy systems, the parachute and mass distribution had to be tuned precisely to meet the
              43–46 second flight time window while keeping the egg payload intact.
            </p>

            {/* Full-width ultra-wide rocket image */}
            <FigureCard
              wide
              src="/images/arc/Assembled-Rocket-470x80.png"
              caption="Assembled BT-80 competition rocket with integrated payload and recovery system."
            />

            {/* Normal-width images side-by-side */}
            <div className="grid gap-6 md:grid-cols-2">
              <FigureCard
                src="/images/arc/Engine-Bay-With-Motor.png"
                caption="Engine bay with AeroTech F32-6T motor installed, showing tail cone and fin interfaces."
              />
              <FigureCard
                src="/images/arc/NoseCone-230x300.png"
                caption="3D-printed nylon–carbon fiber nose cone with adjustable infill for CG tuning."
              />
            </div>
          </AnimatedSection>
        </Section>

        {/* Testing */}
        <Section id="testing" title="Flight Testing & Performance" kicker="Simulations & Iteration">
          <AnimatedSection className="space-y-6">
            <p>
              I modeled the vehicle in OpenRocket using an AeroTech F32-6T motor, iterating on ballast, fin geometry, and mass
              distribution to keep apogee predictions near the 820-ft target while ensuring strong stability margins.
            </p>
            <p>
              Across ~15 test flights, we refined assumptions using AltimeterTwo logs. Field limitations introduced drift and recovery
              risk, and on several occasions the vehicle landed in trees, requiring full rebuilds without altering aerodynamic geometry.
            </p>
            <p>
              Our final qualifying score of 9 indicated extremely small deviations from both altitude and timing constraints, reflecting
              the accuracy of our simulation–test workflow.
            </p>
          </AnimatedSection>
        </Section>

        {/* Engineering Highlights */}
        <Section id="highlights" title="Engineering Highlights" kicker="3D-Printed Structures & Precision Tuning">
          <AnimatedSection>
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
              <p className="text-primary-foreground/80">Key engineering contributions I led on this project included:</p>
              <ul className="list-disc space-y-3 pl-5 text-primary-foreground/80">
                <li>
                  <strong className="text-white">Adjustable-infill nose cone:</strong> CG tuning via variable infill density allowed
                  precise altitude control without redesigning major components.
                </li>
                <li>
                  <strong className="text-white">Carbon-reinforced tail cone:</strong> A fully integrated fin and motor interface improved
                  structural precision and made rebuilds more consistent.
                </li>
                <li>
                  <strong className="text-white">Simulation–test feedback loop:</strong> I tied OpenRocket predictions directly to
                  AltimeterTwo data, improving accuracy across tests.
                </li>
                <li>
                  <strong className="text-white">Egg safety during recovery:</strong> Foam housing and parachute tuning ensured the egg
                  remained uncracked while still meeting the time window.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </Section>

        {/* Team Section */}
        <Section id="team" title="Team & Operations" kicker="Leadership & Roles">
          <AnimatedSection className="space-y-6">
            <p>
              As Co-Captain, I coordinated build sessions, structured test days, maintained flight logs, and helped younger teammates
              understand simulation tools and aerodynamic reasoning.
            </p>

            <FigureCard
              src="/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png"
              caption="Our ARC team recognized as national finalists and the only qualifying team from Georgia."
            />
          </AnimatedSection>
        </Section>

        {/* Results */}
        <Section id="results" title="National Results & Impact" kicker="From ARC to NASA SLI">
          <AnimatedSection className="space-y-6">
            <p>
              We placed 24th nationally out of ~1,000 teams. Our score of 9 reflected exceptional consistency and reliability.
            </p>
            <p>
              This performance directly contributed to our selection for NASA Student Launch—marking the first invitation for a team
              from Oconee County.
            </p>
          </AnimatedSection>
        </Section>

        {/* Appendix Media */}
        <Section id="media" title="Media & Downloads" kicker="Appendix">
          <AnimatedSection className="space-y-8">
            {/* Flight logs — wide image → full width */}
            <FigureCard
              wide
              src="/images/arc/Flight-Logs-650x180.png"
              caption="Flight log summary displaying altitude curves, time-to-apogee, and descent timing."
            />

            {/* Team photo + Assembled rocket */}
            <div className="grid gap-6 md:grid-cols-2">
              <FigureCard
                src="/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png"
                caption="ARC team recognized at the U.S. Capitol."
              />
              <FigureCard
                src="/images/arc/Assembled-Rocket-470x80.png"
                caption="Full vehicle configuration before competition launch."
              />
            </div>

            {/* Download buttons */}
            <div className="flex flex-wrap gap-4">
              <Button asChild variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen">
                <Link href="#">Download ARC Flight Logs (PDF)</Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen">
                <Link href="#">Download ARC Design Summary (PDF)</Link>
              </Button>
            </div>
          </AnimatedSection>
        </Section>
      </div>
    </div>
  );
}
