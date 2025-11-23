import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

export default function UgaAirfoilPage() {
  return (
    <div className="space-y-12 pb-24">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/80 to-primary" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
            Research Internship
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">UGA Airfoil Research Internship</h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
            Assisted faculty with airfoil design iterations, additive manufacturing of test articles, and data acquisition for a
            subsonic wind-tunnel campaign focused on low-Re performance.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Request Internship Summary
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section id="overview" title="Overview" kicker="Program">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard label="Tunnel Runs" value="25+" />
          <StatCard label="AoA Sweep" value="-4° to 18°" />
          <StatCard label="CAD Iterations" value="15 designs" />
        </div>
        <p>
          Produced CAD for multiple custom airfoils, printed molds, and supported balance calibration. Authored quick-look reports
          for each test day summarizing lift/drag behavior and instrumentation anomalies.
        </p>
      </Section>

      <Section id="role" title="Responsibilities" kicker="My Role">
        <p>
          Built LabVIEW dashboards for live force visualization, maintained the DAQ wiring, and performed uncertainty analysis on
          the balance system. Assisted with leading outreach lab days for K-12 visitors to explain wind-tunnel fundamentals.
        </p>
      </Section>

      <Section id="results" title="Key Findings" kicker="Results">
        <div className="section-grid">
          <FigureCard src="/images/project-uga.svg" caption="3D-printed airfoil inserts ready for tunnel testing." />
          <div className="space-y-4">
            <p>Captured laminar separation bubble behavior and recommended geometry changes that improved Cl/Cd by 12%.</p>
            <p>Documented a standard operating procedure for sensor calibration now used by incoming interns.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
