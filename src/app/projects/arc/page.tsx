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

const MEDIA = [
  { src: '/images/arc-vehicle.svg', caption: 'Overall vehicle configuration and egg payload bay.' },
  { src: '/images/arc-tailcone.svg', caption: 'Tail cone and Delrin fin assembly with integrated motor mount.' },
  { src: '/images/arc-field.svg', caption: 'Field operations during qualification flights.' },
];

export default function ArcProjectPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/arc-hero.svg"
        badge="American Rocketry Challenge · National Finalist"
        title="American Rocketry Challenge — National Finalist Co-Captain"
        subtitle="Mid-power competition rocket engineered for an 820 ft target apogee, 43–46 second flight time, and a 605 g mass limit, flown with a fragile egg payload."
        actions={(
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects" className="inline-flex items-center gap-2">
                View All Projects
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        )}
      />

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

        <Section id="overview" title="Executive Summary" kicker="American Rocketry Challenge">
          <AnimatedSection className="space-y-6">
            <p>
              In the 2023 American Rocketry Challenge (ARC), I served as Co-Captain of a team that designed, simulated, and flew a
              mid-power competition rocket to meet strict altitude and timing constraints. The mission required the rocket to reach an
              apogee of 820 feet, carry a fragile egg payload, remain within a 43–46 second total flight time window, and stay under a
              650 gram mass limit. Our final vehicle mass was 605 grams with the egg, providing a narrow margin for structural strength,
              recovery hardware, and stability.
            </p>
            <p>
              I led design and analysis work using OpenRocket for flight dynamics and stability simulations, and Fusion 360 for CAD
              development of critical components. The team’s final vehicle—a 60-inch BT-80 rocket with a spiral-wound kraft paper airframe,
              3D-printed nylon-carbon fiber nose cone and tail cone, and Delrin fins—achieved a qualifying score of 9, one of the lowest
              scores nationally. We placed 24th out of approximately 1,000 teams and were the sole team from Georgia to qualify for the
              national finals. This performance directly contributed to our later invitation to participate in the NASA Student Launch
              Initiative.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="specs" title="Mission Specifications & Constraints" kicker="ARC 2023 Ruleset">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
              <p>
                The American Rocketry Challenge imposes tightly defined mission constraints that shape every aspect of the vehicle’s
                design. Each parameter—altitude, time, mass limit, and payload integrity—drives trade-offs in structure, aerodynamics, and
                recovery.
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
          </AnimatedSection>
        </Section>

        <Section id="vehicle" title="Vehicle Architecture" kicker="Airframe, Structure & Recovery">
          <AnimatedSection className="space-y-6">
            <p>
              The competition rocket was a 60-inch vehicle built on a BT-80 diameter spiral-wound kraft paper airframe, chosen for its
              balance of stiffness, mass, and availability. The structural layout consisted of three primary elements: a 3D-printed
              nylon-carbon fiber nose cone, a BT-80 main airframe housing the egg payload and recovery system, and a 3D-printed nylon-carbon
              fiber tail cone that integrated the motor mount and fin interfaces.
            </p>
            <p>
              The fins were machined from Delrin and mounted directly into the 3D-printed tail cone using screws, creating a rigid fin-can
              assembly that simplified alignment and improved structural repeatability across rebuilds. Internally, the rocket used a Kevlar
              shock cord anchored to the motor mount, a 24-inch parachute sized for the mass and drag characteristics of the configuration,
              and a foam-enclosed egg bay to protect the payload during boost, deployment, and landing.
            </p>
            <p>
              Because ARC prohibits dual-deployment systems, the descent profile and parachute sizing had to be tuned to satisfy both the
              flight time window and egg safety. This required careful balancing of mass, drag, and altitude prediction so that the rocket
              would neither overshoot 46 seconds nor descend too quickly and risk egg damage.
            </p>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <FigureCard src="/images/arc-vehicle.svg" caption="Overall vehicle configuration with payload bay layout." />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
              >
                <FigureCard src="/images/arc-tailcone.svg" caption="Tail cone and Delrin fin assembly with integrated motor mount." />
              </motion.div>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="testing" title="Flight Testing & Performance" kicker="Simulations & Iteration">
          <AnimatedSection className="space-y-6">
            <p>
              Throughout the season, I used OpenRocket to model the rocket’s performance with the AeroTech F32-6T motor, focusing on apogee
              prediction, stability margin, and time-to-apogee and landing. By adjusting nose cone ballast, fin geometry, and mass
              distribution, we were able to keep the predicted altitude close to the 820-foot target while maintaining a robust stability
              margin.
            </p>
            <p>
              In practice, the team flew approximately fifteen test flights to refine the configuration and verify that simulated
              performance matched real-world behavior. Our launch field was relatively small for the mission profile, which meant that winds
              and drift posed recurring issues. On multiple occasions, the rocket landed in or near trees, and at one point we had to fully
              rebuild the vehicle after it became stuck. Each rebuild preserved the same aerodynamic layout but improved minor details in
              manufacturing and integration.
            </p>
            <p>
              The final qualifying flight yielded a score of 9—one of the lowest scores in the nation—indicating extremely small deviations
              from the target altitude and time constraints. This combination of simulation-driven design and disciplined testing was
              critical to achieving consistent, predictable performance under variable field conditions.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="highlights" title="Engineering Highlights" kicker="3D-Printed Structures & Precision Tuning">
          <AnimatedSection>
            <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
              <p className="text-primary-foreground/80">
                Key engineering contributions I led on this project included:
              </p>
              <ul className="mt-3 space-y-3 list-disc pl-5 text-primary-foreground/80">
                <li>
                  <strong className="text-white">Adjustable-infill nose cone for altitude control:</strong> I designed a nylon-carbon
                  fiber 3D-printed nose cone whose infill density could be adjusted to tune the rocket’s center of gravity and total mass.
                  This allowed us to make fine-grained adjustments to apogee without redesigning the entire airframe.
                </li>
                <li>
                  <strong className="text-white">3D-printed carbon-reinforced tail cone:</strong> I developed a carbon-fiber-reinforced
                  nylon tail cone that integrated the motor mount and fin attachment points into a single structural element. The Delrin fins
                  were screwed into this tail cone, creating a repeatable geometric reference that simplified rebuilding when the rocket was
                  lost or damaged.
                </li>
                <li>
                  <strong className="text-white">Iterative simulation–test loop:</strong> I led the process of tying OpenRocket simulations
                  to real flight data, using AltimeterTwo logs to refine assumptions about drag and mass distribution. This closed-loop
                  workflow improved the accuracy of our predictions and our confidence heading into qualification flights.
                </li>
                <li>
                  <strong className="text-white">Egg protection and recovery tuning:</strong> I helped design the foam egg enclosure and
                  worked with the team to select a 24-inch parachute and Kevlar shock cord combination that satisfied both the flight time
                  requirement and the requirement that the egg remain uncracked after landing.
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="team" title="Team & Operations" kicker="Leadership & Roles">
          <AnimatedSection className="space-y-6">
            <p>
              As Co-Captain, my responsibilities extended beyond technical design. I helped coordinate build sessions, assign roles, and
              structure test days so that each launch produced usable data. I maintained flight logs, recorded environmental conditions, and
              tracked changes between configurations so that we could identify trends rather than treating each launch as an isolated event.
            </p>
            <p>
              I also worked closely with less experienced teammates to explain OpenRocket simulations, basic stability concepts, and the
              rationale behind our design choices. This emphasis on shared understanding ensured that the entire team could contribute
              meaningfully to solving problems, whether we were adjusting nose weight, troubleshooting recovery, or planning a new test
              flight at short notice.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="results" title="National Results & Impact" kicker="From ARC to NASA SLI">
          <AnimatedSection className="space-y-6">
            <p>
              Our final competition performance placed us 24th out of approximately 1,000 teams nationwide, making us the only team from
              Georgia to advance to the national finals. Our qualifying score of 9 reflected the precision of our altitude and time control,
              as well as the reliability of the vehicle and recovery system.
            </p>
            <p>
              This result directly contributed to our selection for the NASA Student Launch Initiative, marking the first time a team from
              Oconee County was invited to participate. The engineering practices we refined in ARC—simulation-driven design, 3D-printed
              structural components, and disciplined test campaigns—carried forward into our 4,300-foot NASA SLI vehicle and payload.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="media" title="Media & Downloads" kicker="Appendix">
          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-3">
              {MEDIA.map((item, index) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
                >
                  <FigureCard src={item.src} caption={item.caption} />
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
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
