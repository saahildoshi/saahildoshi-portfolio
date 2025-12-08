'use client';

import Link from 'next/link';
import NextImage from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHero from '@/components/animated/AnimatedHero';
import { AnimatedSection } from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { Button } from '@/components/ui/button';

// -----------------------------
// Shared NASA-style MediaCard
// -----------------------------
type MediaItem = {
  src: string;
  caption: string;
  orientation?: 'portrait' | 'landscape';
  ratio?: string;
};

function MediaCard({ src, caption, orientation = 'landscape', ratio }: MediaItem) {
  const aspect = ratio
    ? `aspect-[${ratio}]`
    : orientation === 'portrait'
    ? 'aspect-[3/4]'
    : 'aspect-video';

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

// ----------------------------------
// ARC DATA
// ----------------------------------
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
  { label: 'Payload', value: 'One raw egg (uncracked)' },
  { label: 'Motor', value: 'AeroTech F32-6T' },
  { label: 'Altimeter', value: 'Jolly Logic AltimeterTwo' },
  { label: 'Recovery', value: '24″ parachute, Kevlar shock cord (single deploy)' },
  { label: 'Airframe Diameter', value: 'BT-80' },
  { label: 'Overall Length', value: '60 in' },
];

const DESIGN_MEDIA: MediaItem[] = [
  {
    src: '/images/arc/Assembled-Rocket-470x80.png',
    ratio: '470/80',
    caption: 'Assembled BT-80 competition rocket with egg payload and recovery system.',
  },
  {
    src: '/images/arc/NoseCone-230x300.png',
    orientation: 'portrait',
    caption: '3D-printed nylon–carbon fiber nose cone with adjustable ballast.',
  },
  {
    src: '/images/arc/Engine-Bay-With-Motor.png',
    caption: 'Tail cone, Delrin fin interfaces, and AeroTech F32-6T motor installed.',
  },
];

const MEDIA: MediaItem[] = [
  {
    src: '/images/arc/Flight-Logs-650x180.png',
    ratio: '650/180',
    caption: 'ARC flight logs showing altitude, weather, and flight-time results.',
  },
  {
    src: '/images/arc/Rocket-Configurations-Spreadsheet-330x230.png',
    caption: 'Rocket configuration matrix with mass, ballast, and timing data.',
  },
  {
    src: '/images/arc/Rocket-Configs-Spreadsheet2-330x230.png',
    caption: 'Alternate configuration set with stability and mass property values.',
  },
  {
    src: '/images/arc/Capitol-Hill-Rocket-Team-Picture-350x260.png',
    caption: 'National Finalist team photo during Capitol Hill recognition.',
    ratio: '350/260',
  },
];

// ----------------------------------
// PAGE COMPONENT
// ----------------------------------

export default function ArcProjectPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      {/* HERO HEADER */}
      <AnimatedHero
        image="/images/arc-hero.svg"
        badge="American Rocketry Challenge · National Finalist"
        title="American Rocketry Challenge — National Finalist Co-Captain"
        subtitle="Mid-power competition rocket engineered for an 820 ft apogee, 43–46 second flight time window, and 605 g mass limit while carrying a fragile egg payload."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects" className="inline-flex items-center gap-2">
                View All Projects <ArrowUpRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        }
      />

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        {/* HERO STATS */}
        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45 }}
              >
                <StatCard label={stat.label} value={stat.value} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        {/* EXECUTIVE SUMMARY */}
        <Section id="overview" title="Executive Summary" kicker="American Rocketry Challenge">
          <AnimatedSection className="space-y-6">
            <p>
              As Co-Captain of the 2023 ARC team, I led design, simulation, and field operations for a mid-power rocket engineered to hit a
              precise 820-foot apogee and 43–46 second total flight time while carrying a fragile egg payload. Our final mass of 605 grams
              provided a tight margin for structural strength and recovery hardware.
            </p>
            <p>
              Using OpenRocket for simulation and Fusion 360 for CAD, we developed a BT-80 vehicle with a nylon–carbon fiber nose cone,
              reinforced tail cone, and Delrin fin interfaces. Our qualifying score of 9 was among the lowest nationwide, placing us 24th out
              of ~1,000 teams and making us the only team from Georgia to reach the national finals.
            </p>
          </AnimatedSection>
        </Section>

        {/* MISSION SPECS */}
        <Section id="specs" title="Mission Specifications & Constraints" kicker="ARC 2023 Ruleset">
          <AnimatedSection>
            <p className="mb-8">
              ARC’s strict scoring window forces careful balancing of altitude, mass, drag, and descent rate. Each constraint directly shapes
              the aerodynamic and structural design of the vehicle.
            </p>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {MISSION_SPECS.map((spec) => (
                <div key={spec.label} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/70">
                    {spec.label}
                  </p>
                  <p className="mt-2">{spec.value}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* VEHICLE ARCHITECTURE */}
        <Section id="vehicle" title="Vehicle Architecture" kicker="Airframe, Structure & Recovery">
          <AnimatedSection className="space-y-6">
            <p>
              The BT-80 rocket uses a spiral-wound kraft airframe, a nylon–carbon fiber nose cone with adjustable ballast, and a reinforced
              tail cone integrating Delrin fins and the AeroTech motor mount. A Kevlar shock cord and 24″ parachute were tuned to satisfy the
              43–46 second descent requirement while protecting the egg payload.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {DESIGN_MEDIA.map((item, i) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <MediaCard {...item} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        {/* TESTING */}
        <Section id="testing" title="Flight Testing & Performance" kicker="Simulations & Iteration">
          <AnimatedSection className="space-y-6">
            <p>
              Approximately fifteen test flights were performed to tune mass distribution, drag behavior, and recovery timing. Despite a
              small launch field and frequent wind drift into trees, each rebuild improved consistency and durability.
            </p>
            <p>
              The final qualifying flight achieved a score of 9 — extremely close to the perfect altitude and timing targets — validating
              our simulation-driven, iteration-based engineering approach.
            </p>
          </AnimatedSection>
        </Section>

        {/* ENGINEERING IMPACT */}
        <Section id="impact" title="National Results & Impact" kicker="From ARC → NASA SLI">
          <AnimatedSection className="space-y-6">
            <p>
              Our 24th-place national ranking and near-perfect qualifying score led directly to our selection for the NASA Student Launch
              Initiative — the first invitation ever received by a team from Oconee County.
            </p>
          </AnimatedSection>
        </Section>

        {/* MEDIA */}
        <Section id="media" title="Media & Downloads" kicker="Appendix">
          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-3">
              {MEDIA.map((item, i) => (
                <motion.div
                  key={item.src}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                >
                  <MediaCard {...item} />
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
