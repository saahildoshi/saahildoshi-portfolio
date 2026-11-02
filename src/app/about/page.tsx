import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Download } from 'lucide-react';

import { Button } from '@/components/ui/button';

const METHODS = [
  ['Flight analysis', 'OpenRocket stability, performance trade studies, motor selection, and flight reconstruction.'],
  ['Analysis', 'XFOIL aerodynamics, ANSYS finite-element analysis, morphology metrics, experimental comparison, and wind-tunnel validation.'],
  ['Design & fabrication', 'Fusion 360, parametric assemblies, additive manufacturing, fiberglass structures, and integration fixtures.'],
  ['Avionics & data', 'Redundant deployment electronics, GPS telemetry, wiring architecture, and post-flight data analysis.'],
  ['Technical communication', 'NASA design reviews, engineering reports, research presentations, and STEM instruction.'],
  ['Leadership', 'Technical-team coordination, cadet command, mentorship, outreach planning, and after-action review.'],
];

const MILESTONES = [
  ['2026', 'Began a UGA Young Dawgs internship with Dr. Xianqiao Wang, developing a reproducible microstructure-generation and 2D ANSYS compression pipeline.'],
  ['2026', 'Earned the General Carl A. Spaatz Award and promotion to Civil Air Patrol Cadet Colonel while serving as Squadron Commander.'],
  ['2026', 'BEAMS modular research rocket documented in an AIAA-published project; NAR Level 1 certification remains in progress.'],
  ['2025', 'Completed the Governor’s Honors Program and helped develop a functioning ERAS2 ionic engine producing 24 g total thrust.'],
  ['2025', 'Project RANCH completed NASA Student Launch with a measured final apogee of 4,274.8 ft.'],
  ['2024-2026', 'Conducted UGA airfoil research and presented the resulting work through science-fair and technical-review settings. Recognized at the AIAA Region II Conference as 1st Place in the High School Category.'],
  ['2024', 'Co-led an American Rocketry Challenge team to 24th place nationally.'],
  ['Ongoing', 'Serve as a Civil Air Patrol Cadet Colonel and Squadron Commander, leading approximately 30 cadets.'],
];

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-white/10 py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="eyebrow">About · Class of 2027</p>
            <h1 className="mt-6 text-5xl font-medium leading-[0.98] tracking-[-0.055em] text-white sm:text-7xl">A student engineer committed to evidence, iteration, and useful systems.</h1>
            <p className="mt-7 text-lg leading-8 text-primary-foreground/68">
              I am a senior at Oconee County High School pursuing aerospace engineering. My work spans flight-tested rockets, aerodynamic and computational mechanics research, electrohydrodynamic propulsion, technical publication, and sustained youth leadership.
            </p>
            <p className="mt-5 text-lg leading-8 text-primary-foreground/68">
              I am most interested in the point where analysis becomes hardware: defining constraints, evaluating a design, building the system, measuring its performance, and documenting what the result actually demonstrates.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild><Link href="/projects">Inspect projects</Link></Button>
              <Button asChild variant="outline"><a href="/Saahil-Doshi-Resume.pdf" className="gap-2">Résumé <Download className="h-4 w-4" /></a></Button>
            </div>
          </div>
          <figure className="border border-white/10 bg-surface">
            <div className="relative aspect-[4/3]">
              <Image src="/images/uga-airfoil/Cashton&Saahil-With-Award.jpeg" alt="Saahil Doshi and research partner with awards following their aerospace research presentation" fill priority className="object-cover" sizes="(min-width: 1024px) 52vw, 100vw" />
            </div>
            <figcaption className="border-t border-white/10 px-5 py-4 font-mono text-xs leading-5 text-primary-foreground/55">Research presentation and recognition · Aero-structural optimization project</figcaption>
          </figure>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr]">
            <div>
              <p className="eyebrow">How I work</p>
              <h2 className="mt-5 text-4xl font-medium tracking-[-0.045em] text-white">Technical range supported by project evidence.</h2>
            </div>
            <div className="border-t border-white/10">
              {METHODS.map(([title, detail], index) => (
                <div key={title} className="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[2rem_12rem_1fr]">
                  <span className="font-mono text-xs text-accentneongreen">{String(index + 1).padStart(2, '0')}</span>
                  <h3 className="font-medium text-white">{title}</h3>
                  <p className="text-sm leading-6 text-primary-foreground/62">{detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 bg-[#151a1c] py-16 sm:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <figure className="border border-white/10 bg-primary">
            <div className="relative aspect-[4/3]"><Image src="/images/nasa-sli/Final-Team-Photo-At-Hunstville-With-FinalPaintedRocket.png" alt="Project RANCH team with its final launch vehicle at NASA Student Launch" fill className="object-cover" sizes="(min-width: 1024px) 55vw, 100vw" /></div>
            <figcaption className="border-t border-white/10 px-5 py-4 font-mono text-xs text-primary-foreground/55">Project RANCH · NASA Student Launch · Huntsville</figcaption>
          </figure>
          <div>
            <p className="eyebrow">Team responsibility</p>
            <h2 className="mt-5 text-4xl font-medium leading-tight tracking-[-0.045em] text-white">Personal ownership within larger engineering programs.</h2>
            <p className="mt-6 leading-7 text-primary-foreground/68">My portfolio distinguishes between team outcomes and my direct contribution. On Project RANCH, I served as Payload Team Lead. In ARC, I served as Co-Captain. In ERAS2, I worked on the engine subteam. In Young Dawgs, I build and validate the computational pipeline. In Civil Air Patrol, I hold direct command and instructional responsibility as a Cadet Colonel.</p>
            <p className="mt-5 leading-7 text-primary-foreground/68">That distinction matters: strong engineering is collaborative, but an accurate technical record should still make ownership, interfaces, and decisions clear.</p>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <p className="eyebrow">Selected chronology</p>
          <div className="mt-8 border-t border-white/10">
            {MILESTONES.map(([year, detail]) => (
              <div key={`${year}-${detail}`} className="grid gap-3 border-b border-white/10 py-5 sm:grid-cols-[7rem_1fr]">
                <p className="font-mono text-sm text-accentneongreen">{year}</p>
                <p className="max-w-3xl leading-7 text-primary-foreground/68">{detail}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm text-accentneongreen hover:text-white">Contact me <ArrowUpRight className="h-4 w-4" /></Link>
            <Link href="/projects/civil-air-patrol" className="inline-flex items-center gap-2 text-sm text-primary-foreground/65 hover:text-white">Leadership record <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </section>
    </div>
  );
}
