import Link from 'next/link';
import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
  return (
    <div className="space-y-12 pb-24">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">Contact</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Mission inquiries & collaboration</h1>
        <p className="mt-6 max-w-3xl text-lg text-primary-foreground/80">
          I welcome conversations about NASA SLI mentorship, student research, or professional opportunities in launch systems,
          avionics, and aerospace consulting. Email is best, but I am also active on LinkedIn.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Button asChild size="lg">
            <a href="mailto:hello@example.com">Email Me</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="https://www.linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </Link>
          </Button>
        </div>
      </section>

      <Section id="details" title="Availability" kicker="Details">
        <p>
          Based in Georgia with the ability to travel for tests and launches. I maintain active Tripoli/NAR memberships and can
          support range operations, documentation reviews, or remote design consulting.
        </p>
      </Section>
    </div>
  );
}
