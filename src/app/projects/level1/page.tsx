import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

export default function LevelOneFleetPage() {
  return (
    <div className="space-y-12 pb-24">

     {/* Hero Section */}
<section
  className="relative isolate overflow-hidden bg-cover bg-center"
  style={{
    backgroundImage: "url('/images/level1/Level1-Hero.svg')",
  }}
>
  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/80 to-primary" />

  <div className="relative mx-auto max-w-6xl px-6 py-24">
    <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
      Research Rocket
    </span>

    <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">
      BEAMS Rocket — Level 1 Certification Vehicle
    </h1>

    <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
      A fully 3D-printed high-power rocket designed for my NAR Level 1 certification 
      and the BEAMS biological experiment.  
      The vehicle carries a 132-sample botanical payload to ~3000 feet to study 
      plant germination under high-G ascent stresses.
    </p>

    <div className="mt-8 flex gap-4">
      <Button asChild>
        <Link href="/projects">Back to Projects</Link>
      </Button>

      <Button asChild variant="outline">
        <Link href="/contact">
          Request Full Specs
          <ArrowUpRight className="ml-2 h-4 w-4" />
        </Link>
      </Button>
    </div>
  </div>
</section>


      {/* Overview */}
      <Section id="overview" title="Mission Overview" kicker="Overview">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard label="Apogee Target" value="~3000 ft" />
          <StatCard label="Max Acceleration" value="~38 g (373 m/s²)" />
          <StatCard label="Payload Capacity" value="132 samples" />
        </div>

        <p>
          The BEAMS mission (Botanical Experiment on Aeronautical Mechanical Stress) investigates how early-stage plant 
          germination responds to the mechanical environment of high-power flight. The rocket carries eleven modular seed bays, 
          each containing twelve germinated samples, hermetically sealed and mechanically secured for ascent. After flight, 
          samples will be analyzed for stress-response indicators and developmental differences.
        </p>
      </Section>

      {/* Design Section */}
      <Section id="design" title="Vehicle Architecture" kicker="Design">
        <p>
          The rocket is fully 3D printed, using threaded interfaces to enable rapid assembly and modular part replacement. 
          All lower airframe sections share a 2.598 inch outer diameter, while the payload bay expands to 3.598 inches to 
          accommodate the seed trays. The avionics bay uses the team’s standardized AV-bay platform, ensuring compatibility with 
          future Level 1 designs.
        </p>

        <p>
          The payload system consists of eleven stacked bays, each sliding into four internal rails and locked in place by a 
          threaded rod, washers, and a plexiglass cover. The entire structure is sealed with O-rings and end-caps to maintain 
          containment throughout ascent, descent, and landing.
        </p>

        <div className="section-grid">
          <FigureCard src="/images/beams-payload.png" caption="Payload bay with eleven stacked seed trays (BEAMS proposal)." />
          <FigureCard src="/images/beams-nosecone.png" caption="Threaded Ogive nose cone, 12.5 inch length." />
        </div>
      </Section>

      {/* Simulation Results */}
      <Section id="simulations" title="Launch Simulations" kicker="Analysis">
        <p>
          OpenRocket simulations were conducted using final mass estimates, drag profiles, and chute sizing. 
          The projected apogee is approximately 3000 ft on an H-class motor, with drift predictions ranging from 
          2 ft in calm winds to ~1500 ft in 20 mph winds.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/beams-openrocket.png" caption="OpenRocket configuration from the BEAMS report." />
          <div className="space-y-3">
            <p className="text-primary-foreground/80">Wind Drift Estimates:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-foreground/80">
              <li>0 mph — 2 ft</li>
              <li>5 mph — 240 ft</li>
              <li>10 mph — 520 ft</li>
              <li>20 mph — 1511 ft</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* Role Section */}
      <Section id="role" title="My Role" kicker="Contributions">
        <p>
          I designed the BEAMS rocket from the ground up, authored the technical documentation, and developed the modular payload 
          system capable of carrying 132 biological samples. I modeled the airframe, nose cone, seed trays, and transitions in 
          Fusion 360, ran the OpenRocket simulations, and integrated the design into our team’s standardized AV-bay framework.
        </p>

        <p>
          This rocket will also serve as my NAR Level 1 certification vehicle, where I am responsible for CAD, fabrication, 
          avionics wiring, recovery system sizing, and launch-day operations.
        </p>
      </Section>

      {/* Lessons Learned */}
      <Section id="lessons" title="Key Outcomes" kicker="Outcomes">
        <div className="section-grid">
          <div className="space-y-4">
            <p>Developed a modular payload architecture capable of biological research.</p>
            <p>Gained experience designing fully 3D-printed threaded flight hardware.</p>
            <p>Refined high-power simulation procedures and mass-tracking workflows.</p>
          </div>
        </div>
      </Section>

    </div>
  );
}
