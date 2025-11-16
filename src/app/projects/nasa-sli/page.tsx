import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';

const NAV_ITEMS = [
  { label: 'Overview', id: 'overview' },
  { label: 'Specs', id: 'specs' },
  { label: 'Vehicle', id: 'vehicle' },
  { label: 'Payload', id: 'payload' },
  { label: 'Avionics', id: 'avionics' },
  { label: 'Testing', id: 'testing' },
  { label: 'Flight', id: 'flight' },
  { label: 'Safety', id: 'safety' },
  { label: 'Timeline', id: 'timeline' },
  { label: 'Team', id: 'team' },
  { label: 'Media', id: 'media' },
  { label: 'Downloads', id: 'downloads' },
];

type SpecRow = {
  parameter: string;
  initial: string;
  final: string;
};

const SPECIFICATION_ROWS: SpecRow[] = [
  {
    parameter: 'Mission Altitude',
    initial: '4,200–4,300 ft target band',
    final: 'Nominal target apogee near 4,300 ft',
  },
  {
    parameter: 'Vehicle Dimensions',
    initial: 'Approximately 92 in × 4 in',
    final: '92 in length × 4 in outer diameter',
  },
  {
    parameter: 'Airframe',
    initial: 'Generic composite tubing',
    final: 'Roll-wrapped carbon-fiber primary airframes with composite couplers',
  },
  {
    parameter: 'Nose Cone',
    initial: 'Ogive 3D-printed PETG',
    final: 'Elliptical 3D-printed nose cone with adjustable infill for CG tuning',
  },
  {
    parameter: 'Fins',
    initial: 'Trapezoidal fin concept',
    final: 'Laser-cut Delrin fins mounted to a removable fin can and thrust structure',
  },
  {
    parameter: 'Motor',
    initial: 'Candidate K-class motors (e.g., K550W, K695R)',
    final: 'K-class AeroTech motor selected to satisfy altitude and thrust-to-weight constraints',
  },
  {
    parameter: 'Recovery',
    initial: 'Dual-deployment concept',
    final: '18 in drogue at apogee; 48 in main near 650 ft AGL; redundant altimeters and dual charges',
  },
  {
    parameter: 'Payload',
    initial: 'Single data-logging experiment',
    final: 'Acorn payload with STEMnaut, Featherweight GPS telemetry, and optional 360° camera integration',
  },
];

const TIMELINE_ENTRIES = [
  { phase: 'Concept + PDR', detail: 'Systems trades, initial simulations, and documentation for NASA review.' },
  { phase: 'CDR + Manufacturing', detail: 'Detailed design release, tooling, composite layups, and avionics prototyping.' },
  { phase: 'Subscale + FDR', detail: 'Static tests, ejection testing, and readiness documentation.' },
  { phase: 'Launch Readiness Review', detail: 'Final integration, checklists, and risk closure before flight campaign.' },
  { phase: 'Flight Campaign', detail: 'Range operations at NASA SLI launch week with onsite data processing.' },
];

const TEAM_ROLES = [
  { title: 'Systems Lead', description: 'Architecture definition, mass properties, interface management, and schedule control.' },
  { title: 'Structures + Recovery', description: 'Composite layups, removable fin can, carbon couplers, and redundant ejection system.' },
  { title: 'Avionics + GNC', description: 'Dual RRC3+ stack, Featherweight GPS, and electrical harnessing with EMI shielding.' },
  { title: 'Payload Integration', description: 'Acorn module with STEMnaut, sensor interfaces, and quick-release mounting.' },
];

const MEDIA_GALLERY = [
  { src: '/images/gallery-flight-01.svg', caption: 'Full stack fit check before weigh-in.' },
  { src: '/images/gallery-flight-02.svg', caption: 'Ejection testing with redundant altimeters firing.' },
  { src: '/images/gallery-flight-03.svg', caption: 'Night-before launch operations planning session.' },
];

function getMediaPlaceholder(index: number) {
  return MEDIA_GALLERY[index % MEDIA_GALLERY.length]?.src ?? '/images/gallery-flight-01.svg';
}

type ProjectRanchPageProps = {
  heroImage: string;
  downloadUrl?: string;
};

function ProjectRanchPage({ heroImage, downloadUrl }: ProjectRanchPageProps) {
  const downloadsHref = downloadUrl ?? '#downloads';

  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <header className="sticky top-0 z-50 border-b border-white/5 bg-primary/90 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.32em] text-accentneongreen">
            Saahil Doshi
          </Link>
          <nav className="hidden items-center gap-6 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground/70 lg:flex">
            {NAV_ITEMS.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="transition hover:text-accentneongreen">
                {item.label}
              </a>
            ))}
          </nav>
          <Button
            asChild
            size="lg"
            className="hidden rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-6 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen hover:bg-accentneongreen hover:text-primary lg:inline-flex"
          >
            <Link href="/contact">
              Mission Inquiry
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="flex gap-4 overflow-x-auto border-t border-white/5 px-6 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.3em] text-primary-foreground/60 lg:hidden">
          {NAV_ITEMS.map((item) => (
            <a key={item.id} href={`#${item.id}`} className="shrink-0 transition hover:text-accentneongreen">
              {item.label}
            </a>
          ))}
        </div>
      </header>

      <main className="pb-24">
        <section className="relative isolate overflow-hidden">
          <div className="absolute inset-0">
            <Image src={heroImage} alt="Project RANCH hero" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-primary/80 to-primary" />
          </div>
          <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 sm:py-28">
            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
                NASA Student Launch Initiative · 2024–2025
              </span>
              <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
                NASA Student Launch Initiative — Project RANCH
              </h1>
              <p className="text-lg leading-relaxed text-primary-foreground/80">
                Project RANCH is a modular, high-power carbon-fiber launch vehicle developed by the Oconee County Rocketry
                Association for the NASA Student Launch Initiative. The rocket is designed to deliver a data-return payload to an
                apogee near 4,300 feet and to recover all vehicle sections safely using a redundant dual-deployment recovery system.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <Button
                asChild
                size="lg"
                className="rounded-full bg-accentneongreen px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary hover:bg-accentneongreen/90"
              >
                <a href="#media">View Gallery</a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-accentneongreen/50 bg-transparent px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-accentneongreen hover:bg-accentneongreen/10"
              >
                <a
                  href={downloadsHref}
                  target={downloadUrl ? '_blank' : undefined}
                  rel={downloadUrl ? 'noopener noreferrer' : undefined}
                >
                  Download Report
                </a>
              </Button>
            </div>
          </div>
        </section>

        <Section id="overview" title="Executive Summary" kicker="Overview">
          <div className="grid gap-6 md:grid-cols-3">
            <StatCard label="Dimensions" value="92 in length × 4 in diameter" />
            <StatCard label="Target Apogee" value="Nominal target near 4,300 ft" />
            <StatCard label="Liftoff Mass" value="~16.6 lb with motor" />
          </div>
          <p>
            Project RANCH is a student-designed high-power rocket that satisfies the mission criteria of the NASA Student Launch
            Initiative. The vehicle is a 92-inch-long, 4-inch-diameter carbon-fiber launch system with an approximate liftoff mass of
            16.6 pounds including motor. The design is organized into three primary sections: a booster, a central avionics bay, and a
            forward payload section capped by a 3D-printed elliptical nose cone with adjustable infill used for center-of-gravity
            control. The launch vehicle is optimized to reach an apogee near 4,300 feet while maintaining robust stability margins
            throughout powered and coasting flight.
          </p>
          <p>
            Structurally, the rocket employs roll-wrapped carbon-fiber airframes, laser-cut Delrin fins, and aluminum and fiberglass
            internal hardware to satisfy both performance and safety requirements. A dual-deployment recovery system uses an 18-inch
            Rocketman drogue at apogee and a 48-inch Rocketman main parachute at approximately 650 feet above ground level, with
            deployment events controlled by redundant RRC3+ altimeters and independent black-powder charges. The payload, titled
            “Acorn,” houses a STEMnaut figure, flight sensors, and a Featherweight GPS-based data transmission system that records and
            returns maximum velocity, apogee, and landing time to a ground receiver.
          </p>
        </Section>

        <Section id="specs" title="Key Specifications and Design Evolution" kicker="Technical">
          <p>
            The final configuration of Project RANCH reflects multiple design iterations informed by simulation, subscale testing, and
            integration constraints. The table below summarizes key parameters and how they evolved from the initial concept to the
            as-built flight vehicle.
          </p>
          <div className="overflow-hidden rounded-2xl border border-white/5">
            <table className="min-w-full divide-y divide-white/10 text-left text-sm text-primary-foreground/80">
              <thead className="bg-white/5 text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
                <tr>
                  <th className="px-4 py-3 font-semibold">Parameter</th>
                  <th className="px-4 py-3 font-semibold">Initial</th>
                  <th className="px-4 py-3 font-semibold">Final</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {SPECIFICATION_ROWS.map((row, index) => (
                  <tr key={row.parameter} className={index % 2 === 0 ? 'bg-white/5' : 'bg-transparent'}>
                    <td className="px-4 py-4 text-white">{row.parameter}</td>
                    <td className="px-4 py-4">{row.initial}</td>
                    <td className="px-4 py-4">{row.final}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        <Section id="vehicle" title="Vehicle Architecture" kicker="Structures">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                The rocket consists of a modular booster, avionics bay, and payload stack joined through carbon-fiber couplers with
                shear pins. The removable fin can integrates Delrin fins, a 54 mm motor mount, and aluminum thrust structure that can
                be serviced without disturbing avionics wiring. Each bay is sealed with O-rings to protect avionics and to contain the
                pressure wave generated during ejection events.
              </p>
              <p>
                Mass properties were driven by a requirement to maintain a caliber of stability between 1.6 and 2.0 through burnout,
                even with propellant slosh and payload tolerances. Adjustable ballast within the elliptical nose cone tunes center of
                gravity while keeping the external geometry smooth for drag management.
              </p>
            </div>
            <div className="space-y-4">
              <p>
                Recovery uses dual Rocketman parachutes sized from OpenRocket simulations to manage descent rates between 65 ft/s at
                drogue and 17 ft/s under main. Independent ejection charges with separate black-powder canisters and ematches allow any
                single fault to be isolated without loss of vehicle.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <StatCard label="Fin Root Thickness" value="0.25 in Delrin" />
                <StatCard label="Motor" value="AeroTech K-class" />
              </div>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            <FigureCard src="/images/gallery-flight-01.svg" caption="Roll-wrapped carbon tubes joined with keyed couplers." />
            <FigureCard src="/images/gallery-flight-02.svg" caption="Removable fin can showing Delrin fins and thrust plate." />
            <FigureCard src="/images/gallery-flight-03.svg" caption="Forward payload bay with carbon stiffeners and harness." />
          </div>
        </Section>

        <Section id="payload" title="Acorn Payload" kicker="Payload">
          <p>
            Acorn hosts the STEMnaut outreach element, Featherweight GPS module, environmental sensing, and optional 360° camera
            integration. The payload slides into a custom aluminum chassis that mates with the avionics bay bulkhead through blind
            fasteners and a quick-disconnect wiring harness for rapid swap-outs during integration tests.
          </p>
          <p>
            Data returned by Featherweight telemetry populates a real-time dashboard that ground crew use to verify mission success,
            including apogee, maximum acceleration, descent rate, and touchdown confirmation. Sensor data is simultaneously recorded on
            a Teensy-based logger for high-rate post-flight analysis.
          </p>
        </Section>

        <Section id="avionics" title="Avionics and Electrical" kicker="Avionics">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="space-y-4">
              <p>
                Redundant Missile Works RRC3+ altimeters manage drogue and main deployments with fully independent power systems and
                arming switches. Featherweight GPS provides continuous position updates while also acting as a tertiary flight computer
                in the event of an altimeter fault.
              </p>
              <p>
                Wiring harnesses are braided, labeled, and strain relieved at every bulkhead penetration. EMI shielding and isolated
                grounds keep the GPS data clean even when igniters fire. A dedicated service panel allows for battery swaps without
                opening the entire avionics bay.
              </p>
            </div>
            <div className="space-y-4">
              <StatCard label="Avionics Redundancy" value="Dual RRC3+ altimeters" />
              <StatCard label="Telemetry" value="Featherweight GPS streaming" />
              <StatCard label="Power" value="Isolated LiPo packs with keyed arming" />
            </div>
          </div>
        </Section>

        <Section id="testing" title="Verification & Testing" kicker="Test Campaign">
          <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
            <li>Subscale flights to validate stability margins and refine recovery sequencing.</li>
            <li>Ground ejection tests to tune black-powder masses, shear pins, and parachute packing strategy.</li>
            <li>Motor retention pull tests and fin flutter analysis to confirm structural margins through Mach transition.</li>
            <li>Avionics-in-the-loop rehearsals where the full electrical stack fired ematches under simulated pressure loads.</li>
          </ul>
        </Section>

        <Section id="flight" title="Mission Operations" kicker="Flight">
          <p>
            Launch operations follow a rehearsed checklist that covers transport, pad setup, RF link verification, ignition, and
            recovery. Responsibilities are divided between pad crew, avionics, safety, and data. Each role reports through mission
            control prior to arming charges, ensuring compliance with NASA range requirements.
          </p>
          <p>
            During flight, telemetry packets are logged to redundant laptops and mirrored to a cloud dashboard for remote mentors.
            Recovery teams track the vehicle using GPS breadcrumbs and maintain radio contact for situational awareness. Post-flight,
            the airframe is inspected, data is downloaded, and the mission report is updated within two hours of landing.
          </p>
        </Section>

        <Section id="safety" title="Safety and Risk Management" kicker="Safety">
          <p>
            Project RANCH implements a qualitative and quantitative hazard analysis updated at each design review. Failure modes are
            categorized by probability and severity with mitigation plans spanning design redundancy, procedural controls, and personal
            protective equipment. Range safety coordination includes NFPA 1127 compliance, Tripoli mentorship, and NASA safety reviews.
          </p>
          <p>
            Every energetic component — black powder, igniters, LiPo batteries — is tracked in a serialized inventory with checkout and
            return logs. Training covers electrical safety, composite fabrication handling, and high-temperature motor operations.
          </p>
        </Section>

        <Section id="timeline" title="Program Timeline" kicker="Schedule">
          <div className="grid gap-6 md:grid-cols-2">
            {TIMELINE_ENTRIES.map((item) => (
              <div key={item.phase} className="rounded-2xl border border-white/5 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-[0.35em] text-accentneongreen/70">{item.phase}</p>
                <p className="mt-3 text-primary-foreground/80">{item.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="team" title="Team Composition" kicker="Team">
          <div className="grid gap-6 md:grid-cols-2">
            {TEAM_ROLES.map((role) => (
              <div key={role.title} className="rounded-2xl border border-white/5 bg-surface/70 p-6">
                <h3 className="text-xl font-semibold text-white">{role.title}</h3>
                <p className="mt-3 text-primary-foreground/80">{role.description}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="media" title="Mission Gallery" kicker="Media">
          <div className="grid gap-6 md:grid-cols-3">
            {MEDIA_GALLERY.map((item, index) => (
              <FigureCard key={item.caption} src={item.src ?? getMediaPlaceholder(index)} caption={item.caption} />
            ))}
          </div>
        </Section>

        <Section id="downloads" title="Downloads & Links" kicker="Resources">
          <p>
            Access to design reports, CAD exports, and checklists can be shared on request. Use the link below to request the latest
            technical package, compliance documents, or mentorship materials.
          </p>
          <Button
            asChild
            size="lg"
            className="rounded-full bg-accentneongreen px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary hover:bg-accentneongreen/90"
          >
            <Link href="/contact">
              Request Documents
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </Section>
      </main>
    </div>
  );
}

export default function Page() {
  return <ProjectRanchPage heroImage="/images/nasa-sli-hero.svg" downloadUrl={undefined} />;
}
