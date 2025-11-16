import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

export default function GhpProjectPage() {
  return (
    <div className="space-y-12 pb-24">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/80 to-primary" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
            Propulsion Testbed
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Georgia Hybrid Propulsion</h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
            Development support for a university hybrid propulsion program including test article design, instrumentation, and
            safety documentation that aligned with NASA and Tripoli standards.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Share Propulsion Insight
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section id="overview" title="Program Snapshot" kicker="Overview">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard label="Motor Class" value="L/M hybrid" />
          <StatCard label="Thrust Stand" value="Custom load-cell" />
          <StatCard label="Test Runs" value="12 static firings" />
        </div>
        <p>
          Supported the GHP team with CAD for injector plates, instrumentation layout, and purge system routing. Documented every
          configuration for safety board reviews and ensured compatibility with future propellant combinations.
        </p>
      </Section>

      <Section id="role" title="Responsibilities" kicker="My Role">
        <p>
          Owned the instrumentation plan including thermocouples, pressure transducers, and high-speed data logging. Built
          calibration fixtures and created wiring diagrams that could be referenced by new students. Authored risk assessments for
          oxidizer handling and remote operations.
        </p>
      </Section>

      <Section id="results" title="Results & Next Steps" kicker="Outcomes">
        <div className="section-grid">
          <FigureCard src="/images/project-ghp.svg" caption="Hybrid propulsion feed system layout study." />
          <div className="space-y-4">
            <p>Delivered a reusable test-stand wiring harness and documented procedures for safe quick-disconnect operations.</p>
            <p>Static test campaigns produced high-fidelity thrust curves used to tune internal ballistics models.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
