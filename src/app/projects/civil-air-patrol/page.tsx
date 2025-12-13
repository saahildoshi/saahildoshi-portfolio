'use client';

import type { ReactNode } from 'react';
import {
  ArrowUpRight,
  CalendarDays,
  GraduationCap,
  Mountain,
  Ribbon,
  Shield,
  Target,
  TowerControl,
  Users,
  Wind,
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
  { label: 'Cadets Mentored', value: '50+ over 3 years' },
];

const QUICK_HIGHLIGHTS = [
  {
    icon: Users,
    text: 'Lead a 30-cadet corps, overseeing a structured chain of command.',
  },
  {
    icon: CalendarDays,
    text: 'Design and execute weekly training curricula with measurable outcomes.',
  },
  {
    icon: Target,
    text: 'Foster cadet growth through structured feedback and promotion boards.',
  },
  { icon: Shield, text: 'Uphold rigorous standards for professionalism, safety, and CAP protocol.' },
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
    icon: Ribbon,
  },
  {
    title: 'Indoor Skydiving (iFLY)',
    subtitle: 'Aerospace learning · Applied physics',
    description:
      'Organized an indoor skydiving trip to connect airflow concepts to body position and stability.',
    meta: ['Logistics', 'Safety planning', 'STEM connection'],
    icon: Wind,
  },
  {
    title: 'Airport Control Tower Tour',
    subtitle: 'Aviation exposure · Real operations',
    description:
      'Coordinated an ATC tower tour so cadets could see real-world airspace coordination.',
    meta: ['External partners', 'Scheduling', 'Preparation'],
    icon: TowerControl,
  },
  {
    title: 'Mountain Hike & Ruck March',
    subtitle: 'Resilience · Team cohesion',
    description:
      'Led a hike and ruck march to build physical fitness, discipline, and teamwork.',
    meta: ['Planning', 'Cadet readiness', 'Team leadership'],
    icon: Mountain,
  },
];

const TIMELINE = [
  {
    label: 'Milestone Exams',
    title: 'Key Milestone Awards (Wright Brothers, Mitchell, Earhart)',
    detail:
      'Passed comprehensive, closed-book milestone exams covering aerospace, leadership, character, and fitness.',
    icon: GraduationCap,
  },
  {
    label: 'Advanced Training',
    title: 'Regional Cadet Leadership School (RCLS)',
    detail:
      'Completed a week-long leadership development course at Maxwell Air Force Base, focusing on advanced management and instructional techniques.',
    icon: Target,
  },
  {
    label: 'Fitness & Standards',
    title: 'Physical Fitness Excellence',
    detail:
      'Consistently met and exceeded Cadet Physical Fitness Program standards through disciplined personal training.',
    icon: Target,
  },
];

const MEDIA_ITEMS = [
  { src: '', caption: 'Leading a squadron formation at Ben Epps Airport.' },
  { src: '', caption: 'Conducting a classroom lesson on aerospace principles.' },
  { src: '', caption: 'Briefing cadets during a field leadership exercise.' },
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
                  <h2 className="text-xl font-semibold">Leadership Impact</h2>
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
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-accentneongreen/20 bg-accentneongreen/10 p-2 text-accentneongreen">
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
                    At the heart of my Civil Air Patrol journey is my leadership service within our
                    local squadron at Ben Epps Airport. Here, I guide a dynamic unit of cadets and
                    senior members through a comprehensive program spanning aerospace education,
                    leadership, character development, and physical fitness.
                  </p>
                  <p className="text-primary-foreground/80">
                    Progression in CAP means evolving from a participant to a leader. As Cadet
                    Captain and Commander, I stand at the top of the cadet chain of command,
                    responsible for translating high-level guidance from senior members into
                    actionable weekly plans, rigorous training schedules, and the professional
                    standards every cadet is expected to meet.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Meeting Rhythm
                  </p>
                  <h3 className="mt-2 text-base font-semibold">A Structured Tuesday Night</h3>
                  <ol className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accentneongreen/70" />
                      <span>Staff Sync → Objectives, roles, and accountability.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accentneongreen/70" />
                      <span>Instruction Blocks → Aerospace, leadership, and character.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accentneongreen/70" />
                      <span>Drill & Hands-On → Applying standards under pressure.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 h-2 w-2 rounded-full bg-accentneongreen/70" />
                      <span>Feedback Loop → Boards, coaching, and setting future goals.</span>
                    </li>
                  </ol>
                </GlassCard>
              </div>

              <GlassCard className="p-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                      My Responsibilities
                    </p>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                      <li>Translate squadron goals into weekly training schedules.</li>
                      <li>
                        Uphold standards for discipline, uniforms, and customs & courtesies.
                      </li>
                      <li>Mentor cadets through promotions and leadership progression.</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                      My Leadership Philosophy
                    </p>
                    <ul className="space-y-2 text-sm text-primary-foreground/80">
                      <li>Lead with clear expectations and consistent follow-up.</li>
                      <li>Balance firm standards with constructive feedback and support.</li>
                      <li>Empower cadets through delegation, ownership, and coaching.</li>
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
                    As Cadet Commander, I am ultimately responsible for the performance and
                    development of the entire cadet corps. My weekly duties involve translating
                    squadron goals into detailed meeting plans, delegating tasks to flight staff,
                    and continuously monitoring the effectiveness of our training delivery.
                  </p>
                  <p className="text-primary-foreground/80">
                    My prior roles as Deputy Commander for Operations, Deputy for Support, and Alpha
                    Flight Sergeant provided a holistic understanding of squadron management. I
                    learned to balance the intricate demands of scheduling and logistics with the
                    crucial human elements of mentorship, discipline, and morale.
                  </p>
                  <p className="text-primary-foreground/80">
                    Across all of these positions, my focus has been on developing people, not just
                    issuing commands. I cultivate an environment of growth by setting clear
                    expectations, providing consistent feedback, and empowering cadets to build
                    confidence, discipline, and deep aerospace knowledge.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Role Stack
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
                              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentneongreen/70" />
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
                    Every Tuesday night, our squadron convenes for a three-hour intensive meeting
                    covering aerospace, leadership, character, and fitness. As Commander, I ensure
                    every session is meticulously planned with clear learning objectives and a
                    healthy balance between classroom theory and hands-on application.
                  </p>
                  <p className="text-primary-foreground/80">
                    In my dual capacity as the cadet Leadership and Aerospace Officer, I specialize
                    in designing and delivering curricula. I take complex subjects like fluid
                    dynamics, aerodynamics, and leadership theory and transform them into
                    accessible, interactive lessons that resonate with cadets.
                  </p>
                  <p className="text-primary-foreground/80">
                    A cornerstone of our program is the post-activity feedback loop. Following major
                    events or promotion boards, I lead sessions to reinforce strengths, pinpoint
                    areas for improvement, and guide cadets in self-reflection and personal growth.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Delivery Style
                  </p>
                  <h3 className="mt-2 text-base font-semibold">From Theory to Action</h3>
                  <p className="mt-3 text-sm text-primary-foreground/80">
                    My instructional philosophy is built on the idea that engagement comes from
                    doing, not just listening. I design lessons that move concepts from the textbook
                    to the real world, turning abstract theory into tangible, hands-on experience.
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentneongreen/70" />
                      <span>
                        <span className="font-semibold text-white">
                          Interactive & Hands-On Learning:
                        </span>{' '}
                        Instead of just lecturing on aerodynamics, we build and launch model rockets.
                        Leadership theory is taught through practical exercises where cadets must
                        lead a team to solve a problem under pressure.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentneongreen/70" />
                      <span>
                        <span className="font-semibold text-white">
                          Collaborative Problem-Solving:
                        </span>{' '}
                        I use small-group discussions and ethical dilemmas to develop leadership
                        judgment. Cadets debate scenarios, make decisions as a team, and defend
                        their reasoning, building critical thinking skills.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentneongreen/70" />
                      <span>
                        <span className="font-semibold text-white">Feedback for Growth:</span>{' '}
                        Whether through formal promotion boards or informal after-action reviews,
                        every activity concludes with a structured feedback loop to provide clear,
                        actionable guidance for improvement.
                      </span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accentneongreen/70" />
                      <span>
                        <span className="font-semibold text-white">Peer-Led Instruction:</span> I
                        empower senior cadets to teach and mentor junior cadets, reinforcing their
                        own knowledge while building a culture of ownership and relatable
                        instruction.
                      </span>
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
                    Serving as a Flight Sergeant during a week-long encampment was one of my most
                    formative leadership challenges. For six intense days, I led a flight of 20
                    cadets in a high-tempo, military-style environment, pushing my abilities to
                    maintain standards and morale under pressure.
                  </p>
                  <p className="text-primary-foreground/80">
                    Encampment is a cornerstone of the CAP experience. These 7–10 day events immerse
                    cadets in a demanding, structured environment focused on accelerated learning in
                    aerospace, leadership, drill, physical training, and character.
                  </p>
                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    High-Tempo Execution
                  </p>
                  <div className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>
                        <span className="font-semibold text-white">Accountability:</span> Wake-ups,
                        formations, punctuality, and cadence calls.
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>
                        <span className="font-semibold text-white">Standards:</span> Drill
                        precision, customs, courtesies, and uniform readiness.
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>
                        <span className="font-semibold text-white">Mentorship:</span> Stress
                        management, confidence-building, and team cohesion.
                      </span>
                    </div>
                    <div className="flex gap-3">
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accentneongreen/70" />
                      <span>
                        <span className="font-semibold text-white">Coordination:</span> Adjusting
                        schedules, resolving conflicts, and maintaining safety.
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Hotel Flight Sergeant Duties
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
                    Mentorship Impact
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
                  Beyond our weekly routine, I spearheaded special activities to provide cadets with
                  deeper, more tangible exposure to the worlds of aviation and leadership.
                </p>
                <p className="text-primary-foreground/80">
                  Executing these initiatives involved comprehensive logistical planning,
                  coordination with external partners, rigorous safety and transport protocols, and
                  ensuring every cadet was prepared with clear objectives.
                </p>
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                {INITIATIVES.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <Reveal key={item.title} delay={idx * 0.05}>
                      <GlassCard className="p-6">
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                              {item.subtitle}
                            </p>
                            <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
                          </div>
                          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-accentneongreen/20 bg-accentneongreen/10 text-accentneongreen">
                            <Icon className="h-5 w-5" />
                          </div>
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
                  );
                })}
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
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-accentneongreen/20 bg-accentneongreen/10 p-3 text-accentneongreen">
                            <Icon className="h-6 w-6" />
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
                  schedules, communicating under pressure, and modeling the professional standards
                  expected of modern aerospace leaders.
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
                                    My time in Civil Air Patrol has been foundational to my growth as an aspiring
                                    aerospace engineer and leader. Serving as Cadet Commander, Deputy Commander,
                                    Flight Sergeant, and instructor has been a practical education in strengthening
                                    the key skills of effective leadership.
                                  </p>
                                  <p className="text-primary-foreground/80">
                                    This hands-on leadership experience is the perfect complement to my technical
                                    work in rocketry and research. It has trained me to lead teams, communicate with
                                    clarity, and effectively teach others—competencies that are directly applicable
                                    and highly valuable in any engineering environment.
                                  </p>
                                </div>

                <GlassCard className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">
                    Core Strengths
                  </p>
                  <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
                    <li>
                      <span className="font-semibold text-white">Leadership & Mentoring:</span>{' '}
                      Guiding cadets through promotions and professional development.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Instructional Design:</span>{' '}
                      Building lessons that turn abstract concepts into engaging practice.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Operational Management:</span>{' '}
                      Planning meetings, coordinating events, and maintaining accountability.
                    </li>
                    <li>
                      <span className="font-semibold text-white">Professionalism & Discipline:</span>{' '}
                      Upholding standards while supporting cadet growth and morale.
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
