import AnimatedHero from '@/components/animated/AnimatedHero';
import {
  DecisionGrid,
  ProjectActions,
  ProjectBrief,
  ProjectStats,
  PullQuote,
  TechnicalList,
} from '@/components/layout/CaseStudy';
import { FigureCard } from '@/components/layout/FigureCard';
import { Section } from '@/components/layout/Section';

const stats = [
  { label: 'Final apogee', value: '4,274.8 ft' },
  { label: 'Mission target', value: '≈4,300 ft' },
  { label: 'My role', value: 'Payload Team Lead' },
];

export default function NasaSliPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/nasa-sli/Onsite-Setup-Photo.png"
        badge="NASA Student Launch Initiative · 2024 - 2025"
        title="Project RANCH - a full-scale launch vehicle built around verifiable interfaces"
        subtitle="A 92-inch fiberglass rocket with redundant dual deployment, K-class propulsion, and the ACORN data-return payload; the final flight reached 4,274.8 feet."
      />
      <ProjectStats items={stats} />

      <Section id="overview" title="The mission demanded accuracy at the vehicle level" kicker="Case study">
        <ProjectBrief
          items={[
            {
              label: 'My ownership',
              title: 'Payload Team Lead',
              detail: 'I led ACORN architecture, packaging, CAD coordination, test planning, field integration, and the documentation of payload interfaces.',
            },
            {
              label: 'System challenge',
              title: 'Couple payload and launch vehicle decisions',
              detail: 'Packaging, instrumentation, ballast, recovery loads, access, and field assembly all competed for the same forward-airframe volume and interfaces.',
            },
            {
              label: 'Team outcome',
              title: 'Within about 25 ft of the target',
              detail: 'After two full-scale tests, the final Huntsville flight reached 4,274.8 ft against the nominal 4,300 ft mission target.',
            },
          ]}
        />
        <div className="grid gap-10 pt-4 lg:grid-cols-[1.25fr,0.75fr]">
          <div className="space-y-5">
            <p>
              Project RANCH was Oconee County Rocketry Association’s NASA Student Launch vehicle: a 4-inch-diameter fiberglass airframe using removable Delrin fins, redundant avionics, dual-deployment recovery, and the ACORN payload.
            </p>
            <p>
              My work centered on the forward section, where mission instrumentation had to coexist with structural couplers, nose ballast, a 360° camera, recovery operations, and rapid field access. The result depended on controlling interfaces rather than treating the payload as a separate object.
            </p>
          </div>
          <PullQuote>The flight result belongs to the full team; my direct ownership was the payload system and the interfaces that made it operable.</PullQuote>
        </div>
      </Section>

      <Section id="vehicle" title="Final configuration established the technical baseline" kicker="Vehicle architecture">
        <TechnicalList
          items={[
            { label: 'Airframe', value: '92 in long, 4 in diameter; roll-wrapped fiberglass body tubes and matching fiberglass couplers in the final configuration.' },
            { label: 'Propulsion', value: 'AeroTech K1100T reload in a 54 mm motor mount with an aluminum thrust structure and serviceable fin-can architecture.' },
            { label: 'Stability', value: 'OpenRocket verification maintained approximately 1.6 - 2.0 calibers through motor burn.' },
            { label: 'Recovery', value: '18 in drogue at apogee and 48 in main near 650 ft AGL, with shear pins and redundant deployment events.' },
            { label: 'Avionics', value: 'Dual RRC3+ altimeters with independent power and charges, plus Featherweight GPS telemetry.' },
            { label: 'Payload', value: 'ACORN combined STEMnaut carriage, GPS data return, maximum-velocity/apogee/landing-time logging, and a 360° camera mount.' },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard
            src="/images/nasa-sli/Full-Rocket-Exploded-CAD.png"
            caption="Exploded vehicle CAD showing booster, avionics, payload, and nose interfaces."
          />
          <FigureCard
            src="/images/nasa-sli/Final-Dimensioned-Rocket.png"
            caption="Dimensioned final configuration used to control assembly and mass properties."
          />
        </div>
      </Section>

      <Section id="payload" title="ACORN was designed as an integrated mission system" kicker="My contribution">
        <DecisionGrid
          items={[
            {
              label: 'Architecture',
              title: 'Separate functions, preserve interfaces',
              detail: 'The payload bay isolated sensors and the STEMnaut from deployment loads while keeping mechanical access and electrical routing legible during field assembly.',
            },
            {
              label: 'Instrumentation',
              title: 'Return useful mission data',
              detail: 'Featherweight GPS and onboard logging supported maximum velocity, apogee, landing time, and post-flight reconstruction rather than a purely demonstrative payload.',
            },
            {
              label: 'Forward integration',
              title: 'Coordinate camera, ballast, and recovery',
              detail: 'The camera mount and nose geometry were developed alongside ballast and separation requirements so payload changes did not create hidden stability or recovery conflicts.',
            },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-3">
          <FigureCard src="/images/nasa-sli/Payload-Bay-Assembly.png" caption="ACORN payload-bay assembly and sensor packaging." />
          <FigureCard src="/images/nasa-sli/NoseCone-and-Camera-Assembly.png" caption="Nose and 360° camera assembly integrated ahead of the payload bay." />
          <FigureCard src="/images/nasa-sli/AvBay-Assembled-RealLife-Picture.png" caption="Flight avionics bay during physical integration." fit="cover" />
        </div>
      </Section>

      <Section id="verification" title="Verification progressed from analysis to full-scale flights" kicker="Testing">
        <DecisionGrid
          columns={2}
          items={[
            {
              label: 'Simulation',
              title: 'Control stability and event timing',
              detail: 'OpenRocket guided motor selection, center-of-gravity management, drag assumptions, and recovery sizing before hardware was committed to flight.',
            },
            {
              label: 'Ground testing',
              title: 'Verify deployment as a chain',
              detail: 'Charge sizing, shear-pin behavior, independent altimeters, arming, and harness routing were treated as one recovery sequence rather than isolated component checks.',
            },
            {
              label: 'Full-scale testing',
              title: 'Use flight data to close the model',
              detail: 'Two test flights checked ascent stability, recovery timing, structural interfaces, and discrepancies between simulated and measured performance.',
            },
            {
              label: 'Launch operations',
              title: 'Make the design field-serviceable',
              detail: 'Clear checklists, external arming, accessible couplers, and disciplined pad procedures reduced integration ambiguity during the final campaign.',
            },
          ]}
        />
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/nasa-sli/Simulated-Vs-Real-Altimeter-Graph.png" caption="Simulated and measured altitude profiles used for post-flight comparison." />
          <FigureCard src="/images/nasa-sli/Rocket-On-Pad-Picture.png" caption="Project RANCH configured on the rail before flight." fit="cover" />
        </div>
      </Section>

      <Section id="outreach" title="The project also became a platform for hands-on aerospace education" kicker="STEM outreach · approximately 250 students">
        <div className="grid gap-10 lg:grid-cols-[1.15fr,0.85fr]">
          <div className="space-y-5">
            <p>
              Through Project RANCH outreach, I helped teach hands-on rocketry activities to approximately 250 K-8 students. The challenge was to preserve the engineering substance while making the system approachable to students encountering launch vehicles for the first time.
            </p>
            <p>
              Hardware such as the altimeter, recovery components, and payload packaging made abstract concepts visible. Questions about why the rocket beeps, how the parachute deploys, or what a sensor measures became short lessons in instrumentation, energy, stability, and systems integration.
            </p>
          </div>
          <PullQuote>Technical outreach is strongest when students can handle the hardware, ask what each part does, and connect the answer to the full mission.</PullQuote>
        </div>
      </Section>

      <Section id="outcome" title="The final flight validated the system-level work" kicker="Huntsville">
        <div className="grid gap-10 lg:grid-cols-[0.8fr,1.2fr] lg:items-start">
          <div className="space-y-5">
            <p>
              In Huntsville, Project RANCH reached <strong className="text-white">4,274.8 ft</strong>, approximately 25 ft below the nominal 4,300 ft target. The vehicle returned altimeter and GPS data and completed the recovery sequence with the payload interfaces intact.
            </p>
            <p>
              Beyond the number, the project demonstrated the full engineering cycle: requirements, reviews, component tests, interface control, full-scale flights, field operations, and technical communication.
            </p>
          </div>
          <FigureCard
            src="/images/nasa-sli/Final-Team-Photo-At-Hunstville-With-FinalPaintedRocket.png"
            caption="OCRA in Huntsville with the completed Project RANCH vehicle."
            fit="cover"
          />
        </div>
      </Section>

      <Section id="documentation" title="Technical documentation" kicker="Reports">
        <p className="max-w-3xl">
          The full report records the project’s requirements, reviews, verification evidence, and final flight results; the drawing package contains the principal mechanical definition used for fabrication and integration.
        </p>
        <ProjectActions
          primary={{ href: '/Final-NASA-SLI-Document.pdf', label: 'Download full report' }}
          secondary={{ href: '/Final-SLI-Technical-Drawings.pdf', label: 'Open drawing package' }}
        />
      </Section>
    </main>
  );
}
