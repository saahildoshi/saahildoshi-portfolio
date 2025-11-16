import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';

export default function AboutPage() {
  return (
    <div className="space-y-12 pb-24">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">About</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Building disciplined aerospace systems</h1>
        <p className="mt-6 max-w-3xl text-lg text-primary-foreground/80">
          I am an aerospace engineering student focused on mission readiness, technical writing, and mentoring younger students
          through rocketry and research projects. My experience spans NASA Student Launch, propulsion testbeds, wind-tunnel research,
          and avionics integration. I thrive at the intersection of requirements definition and hands-on fabrication.
        </p>
      </section>

      <Section id="capabilities" title="Capabilities" kicker="Focus Areas">
        <div className="grid gap-6 md:grid-cols-3">
          <StatCard label="Systems" value="Mission architecture" />
          <StatCard label="Structures" value="Composite fabrication" />
          <StatCard label="Avionics" value="Dual-deploy + telemetry" />
        </div>
        <p>
          Beyond vehicle design, I invest heavily in documentation: checklists, risk analyses, and post-flight reports that capture
          lessons learned and accelerate future development cycles.
        </p>
      </Section>
    </div>
  );
}
