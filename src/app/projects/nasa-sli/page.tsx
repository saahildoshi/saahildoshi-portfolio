'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import NextImage from 'next/image';

import AnimatedHero from '@/components/animated/AnimatedHero';
import AnimatedSection from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

const stats = [
  { label: 'Length', value: '92 in (4" diameter)' },
  { label: 'Target Apogee', value: '4,200–4,300 ft' },
  { label: 'Liftoff Mass', value: '16.6 lb with motor' },
];

const specificationRows = [
  { parameter: 'Propulsion', value: 'AeroTech K1100T reload, K-class final selection' },
  { parameter: 'Airframe', value: 'Roll-wrapped carbon-fiber body tubes; fiberglass couplers (final change)' },
  { parameter: 'Fins', value: 'Delrin fins on a bolted, removable fin can with aluminum thrust structure' },
  { parameter: 'Recovery', value: '18" drogue at apogee; 48" main at ~650 ft AGL; shear pins and dual deployment' },
  { parameter: 'Avionics', value: 'Dual RRC3+ altimeters, independent power and charges, Featherweight GPS telemetry' },
  { parameter: 'Payload', value: 'ACORN: STEMnaut, Featherweight GPS data return, max-V/apogee/landing time logging, 360° camera mount' },
  { parameter: 'Stability', value: 'OpenRocket verified; stability maintained 1.6–2.0 calibers through burn (see stability table)' },
  { parameter: 'Testing', value: 'Two full-scale test flights plus LRR launch in Huntsville, Alabama' },
];

const architectureFigures = [
  { src: '/images/nasa-sli/Booster-CAD.jpg', caption: 'Booster CAD showing removable fin can and thrust structure.' },
  { src: '/images/nasa-sli/Fin-Schematics.jpg', caption: 'Delrin fin geometry and mounting schematics.' },
  { src: '/images/nasa-sli/NoseCone-and-Camera-Assembly.jpg', caption: 'Elliptical nose cone with integrated 360° camera mount and ballast.' },
  { src: '/images/nasa-sli/Full-Rocket-Exploded-CAD.jpg', caption: 'Full-stack exploded CAD illustrating booster, avionics bay, and payload interfaces.' },
];

const payloadFigures = [
  { src: '/images/nasa-sli/Payload-Bay-Assembly.jpg', caption: 'ACORN payload bay assembly with STEMnaut and sensor mounting.' },
  { src: '/images/nasa-sli/Camera-Holder.jpg', caption: '360° camera holder integrated ahead of the payload bay.' },
  { src: '/images/nasa-sli/NoseCone-Dimensioned.jpg', caption: 'Dimensioned nose cone drawing used for mass properties and ballast tuning.' },
];

const avionicsFigures = [
  { src: '/images/nasa-sli/Av-Bay-Assembled.jpg', caption: 'Assembled avionics bay with dual altimeters and harnessing.' },
  { src: '/images/nasa-sli/Av-Bay-Exploded.jpg', caption: 'Exploded avionics bay layout highlighting independent charge canisters.' },
  { src: '/images/nasa-sli/Av-Bay-Sled.jpg', caption: 'Avionics sled with RRC3+ altimeters and GPS wiring routed for EMI mitigation.' },
  { src: '/images/nasa-sli/Switchband-Dimensioned.jpg', caption: 'Switchband dimensions for safe external arming.' },
  { src: '/images/nasa-sli/Seperation-Points.jpg', caption: 'Separation points and charge locations for dual deployment.' },
  { src: '/images/nasa-sli/Wiring-Schematic.jpg', caption: 'Final wiring schematic with redundant power paths and independent charges.' },
];

const simulationFigures = [
  { src: '/images/nasa-sli/Final-Open-Rocket.jpg', caption: 'Final OpenRocket simulation showing ascent and recovery events.' },
  { src: '/images/nasa-sli/Stability-Table.jpg', caption: 'Stability margins table across flight phases.' },
  { src: '/images/nasa-sli/Temperature-Graph.jpg', caption: 'Temperature profile during launch operations.' },
  { src: '/images/nasa-sli/WindSpeed-Graph.jpg', caption: 'Wind speed profile across the flight window.' },
  { src: '/images/nasa-sli/WindGust-Graph.jpg', caption: 'Wind gust measurements correlated to ascent timeline.' },
];

const flightFigures = [
  { src: '/images/nasa-sli/Rocket-On-Pad-Picture.jpg', caption: 'Rocket on the pad before a full-scale test flight.' },
  { src: '/images/nasa-sli/Rocket-Being-Carried-To-Pad-Picture.jpg', caption: 'Team transporting the vehicle to the rail at Huntsville.' },
  { src: '/images/nasa-sli/Onsite-Setup-Photo.jpg', caption: 'Onsite setup with avionics arming and final checks.' },
  { src: '/images/nasa-sli/LandingConfig-1.jpg', caption: 'Landing configuration from early testing.' },
  { src: '/images/nasa-sli/LandingConfig-2.jpg', caption: 'Post-flight inspection of recovery connections.' },
  { src: '/images/nasa-sli/LandingConfig-3.jpg', caption: 'Recovered vehicle showing intact airframe and payload interfaces.' },
  { src: '/images/nasa-sli/Launch2-LandingConfig.jpg', caption: 'Second launch landing configuration with main deployment verified.' },
  { src: '/images/nasa-sli/Launch2-LandingConfig-2.jpg', caption: 'Alternate view of landing configuration from test flight two.' },
  { src: '/images/nasa-sli/Flight-Altimeter-Graph.jpg', caption: 'Flight altimeter data from full-scale test.' },
  { src: '/images/nasa-sli/Simulated-Vs-Real-Altimeter-Graph.jpg', caption: 'Comparison of simulated vs. real altimeter data.' },
];

const galleryImages = [
  'Final-Team-Photo-At-Hunstville-With-FinalPaintedRocket.jpg',
  'Onsite-Setup-Photo.jpg',
  'TeamPhoto.jpg',
  'Launch2-LandingConfig-2.jpg',
  'Launch2-LandingConfig.jpg',
  'Rocket-On-Pad-Picture.jpg',
  'Rocket-Being-Carried-To-Pad-Picture.jpg',
  'AvBay-Assembled-RealLife-Picture.jpg',
  'LandingConfig-3.jpg',
  'LandingConfig-2.jpg',
  'LandingConfig-1.jpg',
  'OnSite-Setup-Picture.jpg',
  'Temperature-Graph.jpg',
  'WindGust-Graph.jpg',
  'WindSpeed-Graph.jpg',
  'Simulated-Vs-Real-Altimeter-Graph.jpg',
  'Flight-Altimeter-Graph.jpg',
  'NoseCone-RealLife-Image.jpg',
  'Stability-Table.jpg',
  'Wiring-Schematic.jpg',
  'Seperation-Points.jpg',
  'NoseCone-Dimensioned.jpg',
  'Camera-Holder.jpg',
  'Switchband-Dimensioned.jpg',
  'Av-Bay-Sled.jpg',
  'Av-Bay-Exploded.jpg',
  'Av-Bay-Assembled.jpg',
  'Full-Rocket-Exploded-CAD.jpg',
  'Payload-Bay-Assembly.jpg',
  'NoseCone-and-Camera-Assembly.jpg',
  'Fin-Schematics.jpg',
  'Booster-CAD.jpg',
  'Final-Open-Rocket.jpg',
  'Final-Dimensioned-Rocket.jpg',
];

export default function NasaSliPage() {
  return (
    <div className="bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/nasa-sli/Final-Dimensioned-Rocket.jpg"
        badge="NASA Student Launch Initiative · 2024–2025"
        title="NASA Student Launch Initiative — Project RANCH"
        subtitle="92-inch carbon-fiber launch vehicle targeting a 4,200–4,300 ft apogee with redundant dual-deployment recovery, K-class propulsion, and ACORN data-return payload."
        actions={
          <div className="flex flex-wrap items-center gap-4">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-accentneongreen px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary hover:bg-accentneongreen/90"
            >
              <a href="#gallery">View Gallery</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-accentneongreen/50 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-accentneongreen hover:bg-accentneongreen/10"
            >
              <a href="#downloads">Download Report</a>
            </Button>
          </div>
        }
      />

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
            Project RANCH is the Oconee County Rocketry Association’s NASA SLI vehicle: a 92-inch, 4-inch-diameter carbon-fiber launch system with fiberglass couplers, Delrin fins on a removable fin can, and a K-class AeroTech motor. The vehicle maintains stability between 1.6 and 2.0 calibers throughout burn, employs dual RRC3+ altimeters with independent power and charges, and uses an 18-inch drogue with a 48-inch main deployed near 650 feet AGL.
          </p>
          <p>
            After two full-scale test flights validated ascent stability, charge sizing, and recovery sequencing, the final launch in Huntsville reached approximately 4,300 feet—within the 4,200–4,300 foot target band—returning flight data via Featherweight GPS and the ACORN payload. Outreach objectives were fulfilled through STEM lessons and community events aligned with the NASA SLI outreach rubric.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="specifications" title="Specifications" kicker="CDR / FRR Data">
          <p>
            Final vehicle specifications reflect CDR, FRR, and LRR flysheet values, emphasizing a carbon-fiber primary structure, fiberglass couplers, and Delrin fin can architecture sized for the selected K1100T motor.
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
            <FigureCard src="/images/nasa-sli/Final-Dimensioned-Rocket.jpg" caption="Dimensioned flight vehicle with coupler interfaces and avionics bay layout." />
            <FigureCard src="/images/nasa-sli/Stability-Table.jpg" caption="Stability margins and mass properties across ascent and recovery phases." />
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="architecture" title="Launch Vehicle Architecture" kicker="Structures">
          <p>
            The primary airframe uses roll-wrapped carbon fiber for strength-to-weight efficiency, paired with fiberglass couplers to simplify bonding and absorb landing loads. Delrin fins bolt into a removable fin can with an aluminum thrust structure around a 54 mm motor mount, allowing maintenance without disturbing avionics. The elliptical nose cone houses ballast and a camera mount while keeping a smooth profile for drag management.
          </p>
          <p>
            Mechanical interfaces emphasize serviceability: shear pins secure each section, vent holes and O-rings manage internal pressure, and threaded inserts at the couplers allow repeated assembly. The final layout supports rapid field integration and protects avionics during high-energy deployment events.
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {architectureFigures.map((figure) => (
              <FigureCard key={figure.src} src={figure.src} caption={figure.caption} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="payload" title="Payload – ACORN" kicker="Data Return">
          <p>
            ACORN provides real-time data return via Featherweight GPS, capturing maximum velocity, apogee, and landing time while carrying a STEMnaut outreach element and Insta360 integration. The payload bay interfaces with the forward coupler and nose cone, using dedicated mounting to isolate sensors from deployment loads.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {payloadFigures.map((figure) => (
              <FigureCard key={figure.src} src={figure.src} caption={figure.caption} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="avionics" title="Avionics & Recovery" kicker="Redundancy">
          <p>
            The avionics stack employs dual RRC3+ altimeters with independent batteries and charges, routed through an avionics sled designed for EMI control and clean harnessing. External arming via the switchband ensures safe ground ops, while charge wells and separation points isolate ejection events. Recovery uses an 18-inch drogue at apogee and a 48-inch main near 650 feet AGL, secured with shear pins and redundant igniters.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {avionicsFigures.map((figure) => (
              <FigureCard key={figure.src} src={figure.src} caption={figure.caption} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="simulation" title="Simulation & Ground Testing" kicker="Analysis">
          <p>
            OpenRocket simulations guided motor selection, stability management, and parachute sizing. Environmental data—temperature, wind speed, and gusts—were logged alongside ejection testing to correlate conditions with ascent performance. Stability margins were tracked throughout the burn and coast phases to validate the final center-of-gravity placement and fin planform.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {simulationFigures.map((figure) => (
              <FigureCard key={figure.src} src={figure.src} caption={figure.caption} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="flight" title="Flight Campaign" kicker="Test Flights & Huntsville">
          <p>
            Two full-scale test flights validated recovery sequencing, charge sizing, and avionics redundancy before launch week. The final flight in Huntsville, Alabama, achieved ~4,300 feet, matching simulation predictions and returning Featherweight GPS data and RRC3+ altimeter logs. Field operations emphasized pad prep discipline, independent arming checks, and rapid post-flight inspection of separation hardware and harnessing.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            {flightFigures.map((figure) => (
              <FigureCard key={figure.src} src={figure.src} caption={figure.caption} />
            ))}
          </div>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="outreach" title="Outreach & Community Impact" kicker="STEM Engagement">
          <p>
            Outreach commitments from the FRR were fulfilled through classroom lessons, CTAE Day participation, and community events that introduced elementary and middle school students to rocketry and aerospace engineering. Demonstrations covered aerodynamic forces, recovery principles, and the role of payload data in mission success, reinforcing NASA SLI’s emphasis on education alongside flight performance.
          </p>
        </Section>
      </AnimatedSection>

      <AnimatedSection>
        <Section id="gallery" title="Final Gallery" kicker="Media">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((filename) => (
              <div key={filename} className="overflow-hidden rounded-2xl border border-white/5 bg-surface">
                <div className="relative aspect-video w-full">
                  <NextImage
                    src={`/images/nasa-sli/${filename}`}
                    alt={filename.replace(/-/g, ' ')}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  />
                </div>
                <div className="px-4 py-3 text-sm text-primary-foreground/70">{filename.replace(/-/g, ' ').replace(/\.jpg$/i, '')}</div>
              </div>
            ))}
          </div>
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
              <Link href="#">Full Technical Report (PDF)</Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-accentneongreen/50 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-accentneongreen hover:bg-accentneongreen/10"
            >
              <Link href="#">Drawings and Files (ZIP)</Link>
            </Button>
          </div>
        </Section>
      </AnimatedSection>
    </div>
  );
}
