'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image';

import AnimatedSection from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { Button } from '@/components/ui/button';

type MediaItem = {
  src: string;
  caption: string;
  orientation?: 'portrait' | 'landscape';
};

const stats = [
  { label: 'Length', value: '92 in (4" diameter)' },
  { label: 'Target Apogee', value: '4,200–4,300 ft' },
  { label: 'Liftoff Mass', value: '16.6 lb with motor' },
];

const specificationRows = [
  { parameter: 'Propulsion', value: 'AeroTech K1100T reload, K-class final selection' },
  { parameter: 'Airframe', value: 'Roll-wrapped fiberglass body tubes; fiberglass couplers (final change)' },
  { parameter: 'Fins', value: 'Delrin fins on a bolted, removable fin can with aluminum thrust structure' },
  { parameter: 'Recovery', value: '18" drogue at apogee; 48" main at ~650 ft AGL; shear pins and dual deployment' },
  { parameter: 'Avionics', value: 'Dual RRC3+ altimeters, independent power and charges, Featherweight GPS telemetry' },
  {
    parameter: 'Payload',
    value:
      'ACORN: STEMnaut, Featherweight GPS data return, max-V/apogee/landing time logging, 360° camera mount',
  },
  { parameter: 'Stability', value: 'OpenRocket verified; stability maintained 1.6–2.0 calibers through burn (see stability table)' },
  { parameter: 'Testing', value: 'Two full-scale test flights plus LRR launch in Huntsville, Alabama' },
];

const architectureFigures: MediaItem[] = [
  { src: '/images/nasa-sli/Booster-CAD.png', caption: 'Booster CAD showing removable fin can and thrust structure.' },
  { src: '/images/nasa-sli/Fin-Schematics.png', caption: 'Delrin fin geometry and mounting schematics.' },
  {
    src: '/images/nasa-sli/NoseCone-and-Camera-Assembly.png',
    caption: 'Elliptical nose cone with integrated 360° camera mount and ballast.',
  },
  {
    src: '/images/nasa-sli/Full-Rocket-Exploded-CAD.png',
    caption: 'Full-stack exploded CAD illustrating booster, avionics bay, and payload interfaces.',
  },
];

const payloadFigures: MediaItem[] = [
  { src: '/images/nasa-sli/Payload-Bay-Assembly.png', caption: 'ACORN payload bay assembly with STEMnaut and sensor mounting.' },
  {
    src: '/images/nasa-sli/Camera-Holder.png',
    caption: '360° camera holder integrated ahead of the payload bay.',
    orientation: 'portrait',
  },
  {
    src: '/images/nasa-sli/NoseCone-Dimensioned.png',
    caption: 'Dimensioned nose cone drawing used for mass properties and ballast tuning.',
    orientation: 'portrait',
  },
];

const avionicsFigures: MediaItem[] = [
  {
    src: '/images/nasa-sli/Av-Bay-Assembled.png',
    caption: 'Assembled avionics bay with dual altimeters and harnessing.',
    orientation: 'portrait',
  },
  {
    src: '/images/nasa-sli/Av-Bay-Exploded.png',
    caption: 'Exploded avionics bay layout highlighting independent charge canisters.',
  },
  {
    src: '/images/nasa-sli/Av-Bay-Sled.png',
    caption: 'Avionics sled with RRC3+ altimeters and GPS wiring routed for EMI mitigation.',
    orientation: 'portrait',
  },
  {
    src: '/images/nasa-sli/Switchband-Dimensioned.png',
    caption: 'Switchband dimensions for safe external arming.',
    orientation: 'portrait',
  },
  { src: '/images/nasa-sli/Seperation-Points.png', caption: 'Separation points and charge locations for dual deployment.' },
  {
    src: '/images/nasa-sli/Wiring-Schematic.png',
    caption: 'Final wiring schematic with redundant power paths and independent charges.',
    orientation: 'portrait',
  },
];

const simulationFigures: MediaItem[] = [
  { src: '/images/nasa-sli/Final-Open-Rocket.png', caption: 'Final OpenRocket simulation showing ascent and recovery events.' },
  { src: '/images/nasa-sli/Stability-Table.png', caption: 'Stability margins table across flight phases.' },
  { src: '/images/nasa-sli/Temperature-Graph.png', caption: 'Temperature profile during launch operations.' },
  { src: '/images/nasa-sli/WindSpeed-Graph.png', caption: 'Wind speed profile across the flight window.' },
  { src: '/images/nasa-sli/WindGust-Graph.png', caption: 'Wind gust measurements correlated to ascent timeline.' },
];

const flightFigures: MediaItem[] = [
  { src: '/images/nasa-sli/Rocket-On-Pad-Picture.png', caption: 'Rocket on the pad before a full-scale test flight.' },
  {
    src: '/images/nasa-sli/Rocket-Being-Carried-To-Pad-Picture.png',
    caption: 'Team transporting the vehicle to the rail at Huntsville.',
  },
  { src: '/images/nasa-sli/Onsite-Setup-Photo.png', caption: 'Onsite setup with avionics arming and final checks.' },
  { src: '/images/nasa-sli/LandingConfig-1.png', caption: 'Landing configuration from early testing.' },
  { src: '/images/nasa-sli/LandingConfig-2.png', caption: 'Post-flight inspection of recovery connections.' },
  {
    src: '/images/nasa-sli/LandingConfig-3.png',
    caption: 'Recovered vehicle showing intact airframe and payload interfaces.',
  },
  {
    src: '/images/nasa-sli/Launch2-LandingConfig.png',
    caption: 'Second launch landing configuration with main deployment verified.',
  },
  {
    src: '/images/nasa-sli/Launch2-LandingConfig-2.png',
    caption: 'Alternate view of landing configuration from test flight two.',
  },
  { src: '/images/nasa-sli/Flight-Altimeter-Graph.png', caption: 'Flight altimeter data from full-scale test.' },
  {
    src: '/images/nasa-sli/Simulated-Vs-Real-Altimeter-Graph.png',
    caption: 'Comparison of simulated vs. real altimeter data.',
  },
];

const galleryImages = [
  'Final-Team-Photo-At-Hunstville-With-FinalPaintedRocket.png',
  'Onsite-Setup-Photo.png',
  'TeamPhoto.png',
  'Launch2-LandingConfig-2.png',
  'Launch2-LandingConfig.png',
  'Rocket-On-Pad-Picture.png',
  'Rocket-Being-Carried-To-Pad-Picture.png',
  'AvBay-Assembled-RealLife-Picture.png',
  'LandingConfig-3.png',
  'LandingConfig-2.png',
  'LandingConfig-1.png',
  'OnSite-Setup-Picture.png',
  'Temperature-Graph.png',
  'WindGust-Graph.png',
  'WindSpeed-Graph.png',
  'Simulated-Vs-Real-Altimeter-Graph.png',
  'Flight-Altimeter-Graph.png',
  'NoseCone-RealLife-Image.png',
  'Stability-Table.png',
  'Wiring-Schematic.png',
  'Seperation-Points.png',
  'NoseCone-Dimensioned.png',
  'Camera-Holder.png',
  'Switchband-Dimensioned.png',
  'Av-Bay-Sled.png',
  'Av-Bay-Exploded.png',
  'Av-Bay-Assembled.png',
  'Full-Rocket-Exploded-CAD.png',
  'Payload-Bay-Assembly.png',
  'NoseCone-and-Camera-Assembly.png',
  'Fin-Schematics.png',
  'Booster-CAD.png',
  'Final-Open-Rocket.png',
  'Final-Dimensioned-Rocket.png',
];

const portraitGalleryImages = new Set([
  'NoseCone-RealLife-Image.png',
  'NoseCone-Dimensioned.png',
  'Switchband-Dimensioned.png',
  'Av-Bay-Sled.png',
  'Wiring-Schematic.png',
  'Camera-Holder.png',
  'Av-Bay-Assembled.png',
  'Av-Bay-Exploded.png',
  'AvBay-Assembled-RealLife-Picture.png',
]);

function MediaCard({ src, caption, orientation = 'landscape' }: MediaItem) {
  const aspect = orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-video';

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

function GalleryCard({ filename, orientation }: { filename: string; orientation: 'landscape' | 'portrait' }) {
  const aspect = orientation === 'portrait' ? 'aspect-[3/4]' : 'aspect-video';
  const caption = filename.replace(/-/g, ' ').replace(/\.png$/i, '');

  return (
    <div className="flex flex-col gap-3">
      <div className={`relative w-full ${aspect} overflow-hidden rounded-xl border border-white/10`}>
        <NextImage
          src={`/images/nasa-sli/${filename}`}
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

export default function NasaSliPage() {
  return (
    <div className="bg-primary text-primary-foreground">
      <section className="relative overflow-hidden">
        <div className="relative w-full aspect-video overflow-hidden rounded-none border-b border-white/10">
          <NextImage
            src="/images/nasa-sli/SLI-Hero.png"
            alt="SLI-Hero"
            fill
            className="object-contain p-4"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-primary/85 to-primary" />
          <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col justify-end gap-6 px-6 pb-16 sm:pb-20">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
                NASA Student Launch Initiative · 2024–2025
              </span>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                NASA Student Launch Initiative — Project RANCH
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80">
                92-inch fiberglass launch vehicle targeting a 4,200–4,300 ft apogee with redundant dual-deployment recovery, K-class
                propulsion, and ACORN data-return payload.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accentneongreen px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary hover:bg-accentneongreen/90"
              >
                <a
                  href="/Final-NASA-SLI-Document.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Report
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <AnimatedSection>
        <Section id="overview" title="Executive Summary" kicker="Overview">
          <div className="grid gap-6 md:grid-cols-3">
            {stats.map((stat) => (
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
          <p>
            Project RANCH is the Oconee County Rocketry Association’s NASA SLI vehicle: a 92-inch, 4-inch-diameter fiberglass launch
            system with fiberglass couplers, Delrin fins on a removable fin can, and a K-class AeroTech motor. The vehicle maintains
            stability between 1.6 and 2.0 calibers throughout burn, employs dual RRC3+ altimeters with independent power and charges, and
            uses an 18-inch drogue with a 48-inch main deployed near 650 feet AGL.
          </p>
          <p>
            After two full-scale test flights validated ascent stability, charge sizing, and recovery sequencing, the final launch in
            Huntsville reached approximately 4,300 feet—within the 4,200–4,300 foot target band—returning flight data via Featherweight GPS
            and the ACORN payload. Outreach objectives were fulfilled through STEM lessons and community events aligned with the NASA SLI
            outreach rubric.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="specifications" title="Specifications" kicker="CDR / FRR Data">
          <p>
            Final vehicle specifications reflect CDR, FRR, and LRR flysheet values, emphasizing a fiberglass primary structure, fiberglass
            couplers, and Delrin fin can architecture sized for the selected K1100T motor.
          </p>
          <div className="overflow-hidden rounded-2xl border border-white/5">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm text-primary-foreground/80">
              <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
                <tr>
                  <th className="px-4 py-3 font-semibold">Parameter</th>
                  <th className="px-4 py-3 font-semibold">Final Value</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {specificationRows.map((row, index) => (
                  <tr key={row.parameter} className={index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                    <td className="px-4 py-4 text-white">{row.parameter}</td>
                    <td className="px-4 py-4">{row.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <MediaCard
              src="/images/nasa-sli/Final-Dimensioned-Rocket.png"
              caption="Dimensioned flight vehicle with coupler interfaces and avionics bay layout."
            />
            <MediaCard
              src="/images/nasa-sli/Stability-Table.png"
              caption="Stability margins and mass properties across ascent and recovery phases."
            />
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="architecture" title="Launch Vehicle Architecture" kicker="Structures">
          <p>
            The primary airframe uses fiberglass for strength-to-weight efficiency, paired with matching fiberglass couplers to simplify
            bonding and absorb landing loads. Delrin fins bolt into a removable fin can with an aluminum thrust structure around a 54 mm
            motor mount, allowing maintenance without disturbing avionics. The elliptical nose cone houses ballast and a camera mount while
            keeping a smooth profile for drag management.
          </p>
          <p>
            Mechanical interfaces emphasize serviceability: shear pins secure each section, vent holes and O-rings manage internal
            pressure, and threaded inserts at the couplers allow repeated assembly. The final layout supports rapid field integration and
            protects avionics during high-energy deployment events.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {architectureFigures.map((figure) => (
              <MediaCard key={figure.src} {...figure} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="payload" title="Payload – ACORN" kicker="Data Return">
          <p>
            ACORN provides real-time data return via Featherweight GPS, capturing maximum velocity, apogee, and landing time while carrying
            a STEMnaut outreach element and Insta360 integration. The payload bay interfaces with the forward coupler and nose cone, using
            dedicated mounting to isolate sensors from deployment loads.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {payloadFigures.map((figure) => (
              <MediaCard key={figure.src} {...figure} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="avionics" title="Avionics & Recovery" kicker="Redundancy">
          <p>
            The avionics stack employs dual RRC3+ altimeters with independent batteries and charges, routed through an avionics sled
            designed for EMI control and clean harnessing. External arming via the switchband ensures safe ground ops, while charge wells
            and separation points isolate ejection events. Recovery uses an 18-inch drogue at apogee and a 48-inch main near 650 feet AGL,
            secured with shear pins and redundant igniters.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {avionicsFigures.map((figure) => (
              <MediaCard key={figure.src} {...figure} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="simulation" title="Simulation & Ground Testing" kicker="Analysis">
          <p>
            OpenRocket simulations guided motor selection, stability management, and parachute sizing. Environmental data—temperature, wind
            speed, and gusts—were logged alongside ejection testing to correlate conditions with ascent performance. Stability margins were
            tracked throughout the burn and coast phases to validate the final center-of-gravity placement and fin planform.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {simulationFigures.map((figure) => (
              <MediaCard key={figure.src} {...figure} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="flight" title="Flight Campaign" kicker="Test Flights & Huntsville">
          <p>
            Two full-scale test flights validated recovery sequencing, charge sizing, and avionics redundancy before launch week. The final
            flight in Huntsville, Alabama, achieved ~4,300 feet, matching simulation predictions and returning Featherweight GPS data and
            RRC3+ altimeter logs. Field operations emphasized pad prep discipline, independent arming checks, and rapid post-flight
            inspection of separation hardware and harnessing.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {flightFigures.map((figure) => (
              <MediaCard key={figure.src} {...figure} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section
          id="outreach"
          title="Outreach & Community Impact"
          kicker="STEM Engagement"
          className="pb-8 sm:pb-12"
        >
          <p>
            Outreach commitments from the FRR were fulfilled through classroom lessons, CTAE Day participation, and community events that
            introduced elementary and middle school students to rocketry and aerospace engineering. Demonstrations covered aerodynamic
            forces, recovery principles, and the role of payload data in mission success, reinforcing NASA SLI’s emphasis on education
            alongside flight performance.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="downloads" title="Downloads" kicker="Documentation">
          <div className="flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accentneongreen px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary hover:bg-accentneongreen/90"
            >
              <a
                href="/Final-NASA-SLI-Document.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Full Technical Report (PDF)
              </a>
            </Button>
           <Button
  asChild
  size="lg"
  variant="outline"
  className="rounded-full border-accentneongreen/50 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-accentneongreen hover:bg-accentneongreen/10"
>
  <a
    href="/Final-SLI-Technical-Drawings.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    Drawings and Files (PDF)
  </a>
</Button>

          </div>
        </Section>
      </AnimatedSection>
    </div>
  );
}
