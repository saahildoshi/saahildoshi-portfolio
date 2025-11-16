import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

export default function ArcProjectPage() {
  return (
    <div className="space-y-10 pb-24">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/80 to-primary" />
        </div>
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
            Autonomous Systems
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">Aerial Robotics Challenge</h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
            Research and development of a modular autonomous aircraft stack that integrates onboard perception, guidance, and
            mission-planning logic for indoor and outdoor sorties.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Discuss ARC Work
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Section id="overview" title="Mission Overview" kicker="Overview">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard label="Flight Hours" value="60+ autonomous" />
          <StatCard label="Vehicles" value="3 custom multirotors" />
          <StatCard label="Software" value="ROS2 stack" />
        </div>
        <p>
          The ARC effort focuses on autonomy in GPS-denied environments. I led integration of perception sensors, SLAM pipelines,
          and a mission executive that could switch behaviors based on target identification. The vehicle stack emphasized rapid field
          servicing and deterministic software builds.
        </p>
      </Section>

      <Section id="role" title="Role & Responsibilities" kicker="My Role">
        <p>
          My role covered systems engineering, GNC development, and field testing. I owned requirements tracking, simulation
          verification, and liaison with safety officers for indoor flight approvals. I also produced the operations checklists and
          debrief templates that kept the team aligned during long test days.
        </p>
      </Section>

      <Section id="results" title="Key Results" kicker="Outcomes">
        <div className="section-grid">
          <FigureCard src="/images/project-arc.svg" caption="ARC prototype with modular sensor wing." />
          <div className="space-y-4">
            <p>Achieved repeatable autonomous waypoint flights with real-time replanning under obstacle encounters.</p>
            <p>Developed calibration rigs and post-flight analytics that reduced troubleshooting time by 40%.</p>
          </div>
        </div>
      </Section>
    </div>
  );
}
