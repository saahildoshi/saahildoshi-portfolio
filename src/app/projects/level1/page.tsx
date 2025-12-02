import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

export default function LevelOneFleetPage() {
  return (
    <div className="space-y-12 pb-24">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/80 to-primary" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
            Certification Rockets
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Level 1 Certification Fleet</h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
            Series of Level 1 Tripoli/NAR rockets designed for training, mentorship, and data gathering prior to larger NASA SLI
            vehicles.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Request Fleet Specs
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section id="overview" title="Fleet Overview" kicker="Overview">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard label="Flights" value="20+" />
          <StatCard label="Motor Range" value="H to I" />
          <StatCard label="Telemetry" value="Dual altimeters" />
        </div>
        <p>
          Built multiple fiberglass and phenolic rockets that introduced new team members to composites, avionics harnessing, and
          range operations. Each vehicle included redundant deployment hardware to mirror the NASA SLI architecture at a smaller
          scale.
        </p>
      </Section>

      <Section id="role" title="Role" kicker="Leadership">
        <p>
          Led design reviews, procured hardware, and mentored students through build nights. Authored training guides for ejection
          charge calculations, ground testing, and launch-day procedures.
        </p>
      </Section>

      <Section id="results" title="Key Lessons" kicker="Outcomes">
        <div className="section-grid">
          <FigureCard src="/images/project-level1.svg" caption="Certification vehicles staged for pad operations." />
          <div className="space-y-4">
            <p>Established a checklist template that we now reuse for NASA SLI readiness events.</p>
            <p>Collected telemetry from each flight to validate simulations and refine future vehicle sizing.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
