'use client';

import type { ReactNode } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  Shield,
  Target,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHero from '@/components/animated/AnimatedHero';
import { AnimatedSection } from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

const HERO_IMAGE = '/images/civil-air-patrol/cap-hero.jpg';

// -------------------- DATA --------------------

const HERO_STATS = [
  { label: 'Rank & Role', value: 'Cadet Captain · Cadet Commander' },
  { label: 'Squadron Size', value: '~30 cadets · 15 senior members' },
  { label: 'Experience', value: '3+ years in Civil Air Patrol' },
];

const OPERATIONS_STATS = [
  { label: 'Weekly Meeting Duration', value: '3 hours every Tuesday' },
  { label: 'Lesson Areas', value: 'Aerospace · Leadership · Character' },
  { label: 'Cadets Mentored', value: '30+ over 3 years' },
];

const QUICK_HIGHLIGHTS = [
  { icon: Users, text: 'Lead and mentor a 30-cadet corps with a structured chain of command.' },
  { icon: CalendarDays, text: 'Plan and execute weekly training with measurable objectives.' },
  { icon: Target, text: 'Build cadet confidence through feedback, boards, and standards.' },
  { icon: Shield, text: 'Maintain professionalism, safety, and CAP-aligned expectations.' },
];

const ROLE_CARDS = [
  {
    title: 'Cadet Commander (current)',
    bullets: [
      'Leads ~30 cadets; sets training priorities and weekly objectives.',
      'Runs cadet staff meetings; coordinates with senior members on schedules, safety, and events.',
      'Oversees conduct, uniform standards, and promotion readiness across the cadet corps.',
    ],
  },
  {
    title: 'Cadet Deputy Commander for Operations',
    bullets: [
      'Managed the training calendar, lesson sequencing, and activity planning.',
      'Coordinated drill, aerospace, and leadership blocks to ensure a balanced program.',
    ],
  },
  {
    title: 'Cadet Deputy Commander for Support',
    bullets: [
      'Oversaw logistics: uniform checks, equipment, attendance tracking, and admin tasks.',
      'Supported event planning and ensured resources were in place for each meeting.',
    ],
  },
  {
    title: 'Alpha Flight Sergeant',
    bullets: [
      'Led a flight in drill, customs and courtesies, and basic leadership skills.',
      'Mentored cadets and enforced standards within a smaller team structure.',
    ],
  },
];

const INITIATIVES = [
  {
    title: 'Wreaths Across America',
    subtitle: 'Service · Honor · Community',
    description:
      'Led the wreath-laying ceremony and Color Guard at Winterville Cemetery, reinforcing service and professionalism.',
    meta: ['Ceremony leadership', 'Coordination', 'Public-facing standards'],
  },
  {
    title: 'Indoor Skydiving (iFLY)',
    subtitle: 'Aerospace learning · Applied physics',
    description:
      'Organized an indoor skydiving trip to connect airflow concepts to body position and stability.',
    meta: ['Logistics', 'Safety planning', 'STEM connection'],
  },
  {
    title: 'Airport Control Tower Tour',
    subtitle: 'Aviation exposure · Real operations',
    description:
      'Coordinated an ATC tower tour so cadets could see real-world airspace coordination.',
    meta: ['External partners', 'Scheduling', 'Preparation'],
  },
  {
    title: 'Mountain Hike & Ruck March',
    subtitle: 'Resilience · Team cohesion',
    description:
      'Led a hike and ruck march to build physical fitness, discipline, and teamwork.',
    meta: ['Planning', 'Cadet readiness', 'Team leadership'],
  },
];

const TIMELINE = [
  {
    label: 'Milestone Exams',
    title: 'Wright Brothers · Billy Mitchell · Amelia Earhart',
    detail:
      'Closed-book milestone exams covering aerospace, leadership, character development, and fitness.',
    icon: GraduationCap,
  },
  {
    label: 'Fitness & Standards',
    title: 'Cadet Physical Fitness Standards',
    detail: 'Maintained CAP physical fitness standards through regular training.',
    icon: Target,
  },
  {
    label: 'Advanced Training',
    title: 'Regional Cadet Leadership School (RCLS)',
    detail:
      'Maxwell Air Force Base (Dec 27 – Jan 3): advanced leadership and management training.',
    icon: Target,
  },
];

const MEDIA_ITEMS = [
  { src: '', caption: 'Squadron formation at Ben Epps Airport.' },
  { src: '', caption: 'Classroom aerospace lesson.' },
  { src: '', caption: 'Field leadership and team-building activity.' },
];

// -------------------- UI HELPERS --------------------

type GlassCardProps = {
  children: ReactNode;
  className?: string;
};

function GlassCard({ children, className = '' }: GlassCardProps) {
  return (
    <div
      className={[
        'rounded-2xl border border-white/5 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.02)] backdrop-blur-xl',
        className,
      ].join(' ')}
    >
      {children}
    </div>
  );
}

type ChipProps = {
  href: string;
  children: ReactNode;
};

function Chip({ href, children }: ChipProps) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-primary-foreground/80 transition hover:border-accentneongreen/40 hover:bg-white/10"
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
      {children}
    </a>
  );
}

type RevealProps = {
  children: ReactNode;
  delay?: number;
};

function Reveal({ children, delay = 0 }: RevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.99 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}

// -------------------- PAGE --------------------

export default function CivilAirPatrolPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image={HERO_IMAGE}
        badge="Civil Air Patrol · Cadet Program"
        title="Civil Air Patrol — Cadet Captain & Cadet Commander"
        subtitle="I lead a cadet corps based at Ben Epps Airport in Athens, Georgia—planning weekly training, mentoring cadets, and maintaining professional standards across aerospace education, leadership development, and character."
        actions={
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#overview" className="inline-flex items-center gap-2">
                Overview <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#roles" className="inline-flex items-center gap-2">
                Leadership <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        }
      />

      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="space-y-14">
          {/* Top Stats */}
          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-3">
              {HERO_STATS.map((stat, idx) => (
                <Reveal key={stat.label} delay={idx * 0.05}>
                  <StatCard label={stat.label} value={stat.value} />
                </Reveal>
              ))}
            </div>
          </AnimatedSection>

          {/* Highlights */}
          <AnimatedSection>
            <GlassCard className="p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    At a glance
                  </p>
                  <h2 className="text-xl font-semibold">Leadership impact, made scannable</h2>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Chip href="#overview">Overview</Chip>
                  <Chip href="#operations">Operations</Chip>
                  <Chip href="#encampment">Encampment</Chip>
                  <Chip href="#events">Initiatives</Chip>
                  <Chip href="#milestones">Milestones</Chip>
                  <Chip href="#media">Media</Chip>
                </div>
              </div>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                {QUICK_HIGHLIGHTS.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.text} delay={idx * 0.05}>
                      <div className="flex gap-3 rounded-2xl border border-white/5 bg-black/20 p-4">
                        <div className="rounded-xl border border-accentneongreen/20 bg-accentneongreen/10 p-2 text-accentneongreen">
                          <Icon className="h-5 w-5" />
                        </div>
                        <p className="text-sm text-primary-foreground/80">{item.text}</p>
                      </div>
                    </Reveal>
                  );
                })}
              </div>
            </GlassCard>
          </AnimatedSection>

          {/* Overview */}
          <Section
            id="overview"
            title="Squadron Leadership in Civil Air Patrol"
            kicker="Overview"
          >
            <AnimatedSection className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
                <div className="space-y-4">
                  <p>
                    My Civil Air Patrol experience is centered on serving in leadership roles within
                    a local squadron at Ben Epps Airport in Athens, Georgia. Our unit combines cadet
                    members and senior (adult) members to deliver a full cadet program that includes
                    aerospace education, leadership training, character development, and physical
                    fitness.
                  </p>
                  <p className="text-primary-foreground/80">
                    As cadets progress, they move from simply attending meetings to helping plan,
                    teach, and command activities for others. In my role as Cadet Captain and Cadet
                    Commander, I operate at the highest cadet leadership level in the squadron chain
                    of command—translating senior member guidance into concrete weekly plans,
                    training schedules, and standards for cadets to follow.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Meeting rhythm
                  </p>
                  <h3 className="mt-2 text-base font-semibold">Tuesday night structure</h3>
                  <ol className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accentneongreen/70" />
                      <span>Staff sync → objectives, roles, accountability.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accentneongreen/70" />
                      <span>Instruction blocks → aerospace + leadership + character.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accentneongreen/70" />
                      <span>Drill / hands-on → standards under time pressure.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accentneongreen/70" />
                      <span>Feedback loop → boards, coaching, next-week goals.</span>
                    </li>
                  </ol>
                </GlassCard>
              </div>

              <GlassCard className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                      What I’m responsible for
                    </p>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                      <li>Turning squadron goals into weekly meeting plans and training schedules.</li>
                      <li>Setting standards: discipline, uniforms, customs/courtesies, professionalism.</li>
                      <li>Mentoring cadets through promotions and leadership progression.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                      How I lead
                    </p>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                      <li>Clear expectations → measurable objectives → consistent follow-up.</li>
                      <li>Firm standards paired with constructive feedback and support.</li>
                      <li>Cadet empowerment: delegation, ownership, and coaching.</li>
                    </ul>
                  </div>
                </div>
              </GlassCard>
            </AnimatedSection>
          </Section>

          {/* Roles */}
          <Section
            id="roles"
            title="Cadet Commander and Leadership Positions"
            kicker="Leadership"
          >
            <AnimatedSection className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
                <div className="space-y-4">
                  <p>
                    As Cadet Commander, I am responsible for the overall performance and
                    development of the cadet corps. On a weekly basis, I translate squadron goals
                    into specific plans for meetings, assign duties to flight staff and element
                    leaders, and monitor how effectively training is delivered.
                  </p>
                  <p className="text-primary-foreground/80">
                    Previously, I served as Cadet Deputy Commander for Operations and Cadet Deputy
                    Commander for Support, as well as Alpha Flight Sergeant. These roles taught me
                    how to manage both the operational and support sides of a cadet squadron—
                    balancing scheduling, logistics, and training with mentoring, discipline, and
                    morale.
                  </p>
                  <p className="text-primary-foreground/80">
                    In all of these positions, I have been responsible not just for calling
                    commands, but for developing people: setting expectations, providing feedback,
                    and building an environment where cadets can grow in confidence, discipline, and
                    aerospace knowledge.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Role stack
                  </p>
                  <div className="mt-4 space-y-4">
                    {ROLE_CARDS.map((role) => (
                      <div
                        key={role.title}
                        className="rounded-2xl border border-white/5 bg-black/20 p-4"
                      >
                        <p className="text-sm font-semibold text-white">{role.title}</p>
                        <ul className="mt-2 space-y-2 text-sm text-primary-foreground/80">
                          {role.bullets.map((b) => (
                            <li key={b} className="flex gap-3">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                              <span>{b}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            </AnimatedSection>
          </Section>

          {/* Operations */}
          <Section
            id="operations"
            title="Weekly Training, Lessons, and Feedback"
            kicker="Operations"
          >
            <AnimatedSection className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-[1.2fr,1fr]">
                <div className="space-y-4">
                  <p>
                    Our squadron conducts three-hour meetings every Tuesday night, combining
                    aerospace education, leadership training, character development, and physical
                    fitness. As Cadet Commander, I am responsible for ensuring that each meeting has
                    a clear plan, defined learning objectives, and a balance between classroom
                    instruction and hands-on activities.
                  </p>
                  <p className="text-primary-foreground/80">
                    I serve as both Leadership Officer and Aerospace Officer at the cadet level. In
                    those roles, I design and deliver lesson plans that break down challenging
                    topics—such as fluid dynamics, basic aerodynamics, and leadership theory—into
                    accessible, interactive sessions.
                  </p>
                  <p className="text-primary-foreground/80">
                    After major activities or promotion boards, I conduct feedback sessions with
                    cadets to reinforce strengths, identify specific improvements, and help them
                    reflect on progress.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Delivery style
                  </p>
                  <h3 className="mt-2 text-base font-semibold">How lessons stay engaging</h3>
                  <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>Demonstrations and hands-on activities (not just lecture).</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>Small-group discussions to reinforce leadership judgment.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>Feedback sessions that translate into promotion readiness.</span>
                    </li>
                  </ul>
                </GlassCard>
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                {OPERATIONS_STATS.map((stat, idx) => (
                  <Reveal key={stat.label} delay={idx * 0.05}>
                    <StatCard label={stat.label} value={stat.value} />
                  </Reveal>
                ))}
              </div>
            </AnimatedSection>
          </Section>

          {/* Encampment */}
          <Section
            id="encampment"
            title="Encampment Line Staff — Hotel Flight Sergeant"
            kicker="Encampment"
          >
            <AnimatedSection className="space-y-8">
              <div className="grid gap-8 lg:grid-cols-[1.1fr,1fr]">
                <div className="space-y-4">
                  <p>
                    One of my most demanding leadership experiences in Civil Air Patrol was serving
                    as a Flight Sergeant on line staff at a week-long encampment, where I led a
                    flight of approximately 20 cadets for six days in a high-tempo, military-style
                    training environment.
                  </p>
                  <p className="text-primary-foreground/80">
                    Cadet encampments are core activities in the CAP program: typically 7–10 day
                    events that place cadets in an intense, structured environment emphasizing
                    aerospace classes, leadership development, drill and ceremonies, physical
                    training, and character education.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    High-tempo execution
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>Accountability: wake-ups, formations, punctuality, cadence.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>Standards: drill precision, customs/courtesies, uniform readiness.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>Mentorship: stress management, confidence-building, cohesion.</span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>Coordination: adjust schedules, resolve issues, maintain safety.</span>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Hotel Flight Sergeant duties
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                    <li>Waking the flight, managing accountability, and ensuring on-time execution.</li>
                    <li>
                      Leading drill and ceremonies; enforcing customs, courtesies, and uniform
                      standards.
                    </li>
                    <li>
                      Coaching cadets through the stress of compressed training with steady clarity.
                    </li>
                    <li>
                      Coordinating with Flight Commander and staff to adapt to issues and ensure
                      safety.
                    </li>
                  </ul>
                </GlassCard>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Mentorship impact
                  </p>
                  <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
                    <li>Helped new cadets manage homesickness and stress across a demanding week.</li>
                    <li>
                      Translated feedback into tangible improvements in drill, standards, and
                      confidence.
                    </li>
                    <li>Built cohesion and discipline that carried through to graduation.</li>
                  </ul>
                </GlassCard>
              </div>
            </AnimatedSection>
          </Section>

          {/* Events / Initiatives */}
          <Section id="events" title="Events and Special Activities" kicker="Initiatives">
            <AnimatedSection className="space-y-8">
              <div className="space-y-4">
                <p>
                  Outside of routine meetings, I have planned and led special activities designed to
                  deepen cadets’ exposure to aviation and leadership.
                </p>
                <p className="text-primary-foreground/80">
                  These events required planning logistics, coordinating with external partners,
                  ensuring safety and transportation plans, and preparing cadets with expectations
                  and objectives in advance.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {INITIATIVES.map((item, idx) => (
                  <Reveal key={item.title} delay={idx * 0.05}>
                    <GlassCard className="p-6">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                            {item.subtitle}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                        </div>
                        <div className="h-10 w-10 rounded-2xl border border-accentneongreen/20 bg-accentneongreen/10" />
                      </div>

                      <p className="mt-3 text-sm text-primary-foreground/80">
                        {item.description}
                      </p>

                      <div className="mt-5 flex flex-wrap gap-2">
                        {item.meta.map((m) => (
                          <span
                            key={m}
                            className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-primary-foreground/80"
                          >
                            {m}
                          </span>
                        ))}
                      </div>
                    </GlassCard>
                  </Reveal>
                ))}
              </div>
            </AnimatedSection>
          </Section>

          {/* Milestones */}
          <Section
            id="milestones"
            title="Awards, Milestones, and Advanced Training"
            kicker="Progress"
          >
            <AnimatedSection className="space-y-8">
              <div className="grid gap-4">
                {TIMELINE.map((t, idx) => {
                  const Icon = t.icon;
                  return (
                    <Reveal key={t.title} delay={idx * 0.05}>
                      <GlassCard className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="rounded-2xl border border-accentneongreen/20 bg-accentneongreen/10 p-3 text-accentneongreen">
                            <Icon className="h-5 w-5" />
                          </div>
                          <div className="min-w-0">
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                              {t.label}
                            </p>
                            <h3 className="mt-1 text-base font-semibold text-white">{t.title}</h3>
                            <p className="mt-2 text-sm text-primary-foreground/80">{t.detail}</p>
                          </div>
                        </div>
                      </GlassCard>
                    </Reveal>
                  );
                })}
              </div>

              <GlassCard className="p-6">
                <p className="text-sm text-primary-foreground/80">
                  These achievements formalize what I practice day-to-day: leading people, managing
                  schedules, communicating under pressure, and modeling professional standards
                  expected of aerospace leaders.
                </p>
              </GlassCard>
            </AnimatedSection>
          </Section>

          {/* Skills / Impact */}
          <Section
            id="skills"
            title="Leadership, Instruction, and Aerospace Education"
            kicker="Impact"
          >
            <AnimatedSection className="space-y-8">
              <div className="grid gap-6 lg:grid-cols-[1.2fr,1fr]">
                <div className="space-y-4">
                  <p>
                    Civil Air Patrol has been one of the most important influences on my development
                    as an aspiring aerospace engineer and leader. Through my roles as Cadet
                    Commander, Deputy Commander for Operations and Support, Flight Sergeant, and
                    instructor, I have strengthened key leadership skills.
                  </p>
                  <p className="text-primary-foreground/80">
                    These experiences complement my technical work in rocketry and aerospace
                    research by training me to lead teams, communicate clearly, and teach
                    others—skills that translate directly into engineering environments.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Core strengths
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    <li>
                      <span className="font-semibold text-white">Leadership and mentoring:</span>{' '}
                      guiding younger cadets through promotions and daily expectations.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Instructional design:</span>{' '}
                      building lessons that turn abstract concepts into engaging practice.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Operational management:</span>{' '}
                      planning meetings, coordinating events, maintaining accountability.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Professionalism and discipline:</span>{' '}
                      upholding standards while supporting cadet growth.
                    </li>
                  </ul>
                </GlassCard>
              </div>
            </AnimatedSection>
          </Section>

          {/* Media */}
          <Section id="media" title="Photos and Figures" kicker="Media">
            <AnimatedSection className="space-y-6">
              <div className="grid gap-6 md:grid-cols-3">
                {MEDIA_ITEMS.map((item, idx) => (
                  <Reveal key={item.caption} delay={idx * 0.05}>
                    <FigureCard src={item.src} caption={item.caption} />
                  </Reveal>
                ))}
              </div>

              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-sm text-primary-foreground/70" />
              </div>
            </AnimatedSection>
          </Section>
        </div>
      </div>
    </div>
  );
}
