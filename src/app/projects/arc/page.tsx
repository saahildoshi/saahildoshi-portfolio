'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import NextImage from 'next/image';

import AnimatedHero from '@/components/animated/AnimatedHero';
import { AnimatedSection } from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { Button } from '@/components/ui/button';

type MediaItem = {
  src: string;
  caption: string;
  orientation?: 'portrait' | 'landscape';
  ratio?: string;
};

function MediaCard({ src, caption, orientation = 'landscape', ratio }: MediaItem) {
  const aspect = ratio ? `aspect-[${ratio}]` : orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-video';

  return (
    <div className="space-y-3">
      <div className={`relative w-full ${aspect} overflow-hidden rounded-xl border border-white/10`}>
        <NextImage
          src={src}
          alt={caption}
          fill
          className="object-contain p-4"
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
      </div>
      <div className="text-sm text-primary-foreground/70">{caption}</div>
    </div>
  );
}

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

const DESIGN_MEDIA: MediaItem[] = [
  { src: '/images/arc/Assembled-Rocket-470x80.png', caption: 'Overall vehicle configuration with payload bay layout.', ratio: '470/80' },
  { src: '/images/arc/NoseCone-230x300.png', caption: 'Adjustable ballast nose cone tuned for altitude and timing.', orientation: 'portrait' },
  { src: '/images/arc/Engine-Bay-With-Motor.png', caption: 'Tail cone and Delrin fin assembly with integrated motor mount.' },
];

const MEDIA: MediaItem[] = [
  { src: '/images/arc/Rocket-Configurations-Spreadsheet-330x230.png', caption: 'Rocket configuration spreadsheet tracking ballast, mass, and stability margins.' },
  { src: '/images/arc/Rocket-Configs-Spreadsheet2-330x230.png', caption: 'Alternative configuration set showing mass properties for each flight build.' },
  { src: '/images/arc/Flight-Logs-650x180.png', caption: 'Flight logs with apogee, weather, and timing for each qualification attempt.', ratio: '650/180' },
  { src: '/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png', caption: 'Team photo on Capitol Hill after the national finals.' },
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
        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
@@ -110,67 +143,62 @@ export default function ArcProjectPage() {
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
            <div className="grid gap-6 md:grid-cols-3">
              {DESIGN_MEDIA.map((item, index) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
                >
                  <MediaCard src={item.src} caption={item.caption} orientation={item.orientation} ratio={item.ratio} />
                </motion.div>
              ))}
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
@@ -229,43 +257,43 @@ export default function ArcProjectPage() {
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
                  <MediaCard src={item.src} caption={item.caption} orientation={item.orientation} ratio={item.ratio} />
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
