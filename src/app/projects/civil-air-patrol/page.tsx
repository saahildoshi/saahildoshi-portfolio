'use client';

import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

import AnimatedHero from '@/components/animated/AnimatedHero';
import { AnimatedSection } from '@/components/animated/AnimatedSection';
import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';

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

const MEDIA_ITEMS = [
  { src: '/images/gallery-flight-01.svg', caption: 'Cadet corps formation at Ben Epps Airport (placeholder image).' },
  { src: '/images/gallery-flight-02.svg', caption: 'Classroom aerospace lesson (placeholder image).' },
  { src: '/images/gallery-flight-03.svg', caption: 'Field leadership and team-building activity (placeholder image).' },
];

export default function CivilAirPatrolPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/arc-hero.svg"
        badge="Civil Air Patrol · Cadet Program"
        title="Civil Air Patrol — Cadet Captain & Squadron Commander"
        subtitle="I serve as a Cadet Captain and Cadet Commander in the Civil Air Patrol, leading a squadron based at Ben Epps Airport in Athens, Georgia. Our unit includes approximately 30 cadets and 15 senior (adult) members, and I am responsible for planning and executing weekly aerospace education, leadership training, and character development activities. Beyond weekly operations, I organize special events, mentor new cadets, and help maintain the professional standards that define Civil Air Patrol’s youth leadership program."
        actions={(
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#roles" className="inline-flex items-center gap-2">
                Leadership Role
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full">
              <a href="#encampment" className="inline-flex items-center gap-2">
                Encampment Experience
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        )}
      />

      <div className="mx-auto max-w-6xl space-y-16 px-6 py-16">
        <AnimatedSection>
          <div className="grid gap-6 md:grid-cols-3">
            {HERO_STATS.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <StatCard label={stat.label} value={stat.value} />
              </motion.div>
            ))}
          </div>
        </AnimatedSection>

        <Section id="overview" title="Squadron Leadership in Civil Air Patrol" kicker="Overview">
          <AnimatedSection className="space-y-6">
            <p>
              My Civil Air Patrol experience is centered on serving in leadership roles within a local squadron at Ben Epps Airport in Athens, Georgia. Our unit combines cadet members and senior (adult) members to deliver a full cadet program that includes aerospace education, leadership training, character development, and physical fitness.
            </p>
            <p>
              As cadets progress, they move from simply attending meetings to helping plan, teach, and command activities for others. In my role as Cadet Captain and Cadet Commander, I operate at the highest cadet leadership level in the squadron chain of command, translating senior member guidance into concrete weekly plans, training schedules, and standards for cadets to follow. (Wikipedia)
            </p>
            <p>
              The squadron meets for approximately three hours every Tuesday night, where we run a mix of classroom instruction, drill and ceremonies, hands-on activities, and fitness or team-building exercises. Outside of weekly meetings, I coordinate special events, represent the cadet corps to senior leadership, and ensure that training aligns with Civil Air Patrol regulations and the national cadet program structure.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="roles" title="Cadet Commander and Leadership Positions" kicker="Leadership">
          <AnimatedSection>
            <div className="grid gap-10 lg:grid-cols-[1.2fr,1fr]">
              <div className="space-y-6">
                <p>
                  As Cadet Commander, I am responsible for the overall performance and development of the cadet corps. On a weekly basis, I translate squadron goals into specific plans for meetings, assign duties to flight staff and element leaders, and monitor how effectively training is delivered. I work closely with the senior Deputy Commander for Cadets to align our plans with Civil Air Patrol’s cadet program objectives while also responding to the specific needs of our unit. (Wikipedia)
                </p>
                <p>
                  Previously, I served as Cadet Deputy Commander for Operations and Cadet Deputy Commander for Support, as well as Alpha Flight Sergeant. These roles taught me how to manage both the operational and support sides of a cadet squadron—balancing scheduling, logistics, and training with mentoring, discipline, and morale. Each step up the leadership ladder expanded my responsibility from managing a single flight to coordinating across the entire cadet corps.
                </p>
                <p>
                  In all of these positions, I have been responsible not just for calling commands, but for developing people: setting expectations, providing feedback, and building an environment where cadets can grow in confidence, discipline, and technical aerospace knowledge.
                </p>
              </div>
              <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Cadet Commander (current)</p>
                  <ul className="space-y-2 text-sm text-primary-foreground/80">
                    <li>Leads ~30 cadets; sets training priorities and weekly objectives.</li>
                    <li>Runs cadet staff meetings and coordinates with senior members on schedules, safety, and special events.</li>
                    <li>Oversees conduct, uniform standards, and promotion readiness across the cadet corps.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Cadet Deputy Commander for Operations</p>
                  <ul className="space-y-2 text-sm text-primary-foreground/80">
                    <li>Managed the training calendar, lesson sequencing, and activity planning.</li>
                    <li>Coordinated drill, aerospace, and leadership blocks to ensure a balanced program.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Cadet Deputy Commander for Support</p>
                  <ul className="space-y-2 text-sm text-primary-foreground/80">
                    <li>Oversaw logistics such as uniform checks, equipment, attendance tracking, and administrative tasks.</li>
                    <li>Supported event planning and ensured resources were in place for each meeting.</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Alpha Flight Sergeant</p>
                  <ul className="space-y-2 text-sm text-primary-foreground/80">
                    <li>Led a flight of cadets in drill, customs and courtesies, and basic leadership skills.</li>
                    <li>Served as the primary mentor and disciplinarian for a smaller group within the squadron.</li>
                  </ul>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="operations" title="Weekly Training, Lessons, and Feedback" kicker="Operations">
          <AnimatedSection className="space-y-8">
            <div className="space-y-6">
              <p>
                Our squadron conducts three-hour meetings every Tuesday night, combining aerospace education, leadership training, character development, and physical fitness. As Cadet Commander, I am responsible for ensuring that each meeting has a clear plan, defined learning objectives, and a balance between classroom instruction and hands-on activities.
              </p>
              <p>
                I serve as both Leadership Officer and Aerospace Officer at the cadet level. In those roles, I design and deliver lesson plans that break down challenging topics—such as fluid dynamics, basic aerodynamics, and leadership theory—into accessible, interactive sessions. Lessons often incorporate demonstrations, small-group discussions, and practical exercises so that cadets are not just listening, but applying what they learn.
              </p>
              <p>
                After major activities or promotion boards, I conduct feedback sessions with cadets. During these conversations, I highlight what each cadet is doing well, identify specific areas for improvement (such as drill precision, uniform standards, or leadership presence), and help them reflect on their progress. This feedback loop has helped many cadets advance through promotions and take on greater responsibility within the unit.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-3">
              {OPERATIONS_STATS.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <StatCard label={stat.label} value={stat.value} />
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </Section>

        <Section id="encampment" title="Encampment Line Staff — Hotel Flight Sergeant" kicker="Encampment">
          <AnimatedSection className="space-y-6">
            <p>
              One of my most demanding leadership experiences in Civil Air Patrol was serving as a Flight Sergeant on line staff at a week-long encampment, where I led a flight of approximately 20 cadets for six days in a high-tempo, military-style training environment.
            </p>
            <p>
              Cadet encampments are core activities in the CAP program: typically 7–10 day events that place cadets in an intense, structured environment emphasizing aerospace classes, leadership development, drill and ceremonies, physical training, and character education. (Wikipedia) As a Flight Sergeant, I was responsible for translating that curriculum into day-to-day execution for my flight.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Hotel Flight Sergeant duties</p>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Waking the flight, managing accountability, and ensuring cadets were on time for every formation, class, and activity.</li>
                  <li>Leading drill and ceremonies; enforcing customs, courtesies, and uniform standards.</li>
                  <li>Coaching cadets through the stress of a compressed training environment with clear instructions and steady encouragement.</li>
                  <li>Coordinating with Flight Commander and encampment staff to adjust schedules, respond to issues, and ensure safety.</li>
                </ul>
              </div>
              <div className="rounded-2xl border border-white/5 bg-white/5 p-5 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Mentorship impact</p>
                <ul className="space-y-2 text-sm text-primary-foreground/80">
                  <li>Helped new cadets manage homesickness and stress across a demanding week.</li>
                  <li>Translated feedback into tangible improvements in drill, uniform standards, and confidence.</li>
                  <li>Led the flight toward graduation with higher cohesion, discipline, and self-confidence.</li>
                </ul>
              </div>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="events" title="Events and Special Activities" kicker="Initiatives">
          <AnimatedSection className="space-y-6">
            <p>
              Outside of routine meetings, I have planned and led several special activities designed to deepen cadets’ exposure to aviation and leadership:
            </p>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <span className="font-semibold text-white">Indoor Skydiving Visit (iFLY):</span> Organized a visit to an indoor skydiving facility to give cadets a hands-on sense of airflow, body position, and the physics behind flight in a safe and controlled environment.
              </li>
              <li>
                <span className="font-semibold text-white">Airport Control Tower Tour:</span> Coordinated with air traffic control personnel to arrange a tour of an airport tower, allowing cadets to see how pilots and controllers coordinate safely in real airspace.
              </li>
              <li>
                <span className="font-semibold text-white">Mountain Hike and Ruck March:</span> Led a hike and ruck march event to build resilience, physical fitness, and teamwork outside the classroom.
              </li>
            </ul>
            <p>
              Each of these events required planning logistics, coordinating with external partners, ensuring safety and transportation plans, and preparing cadets with expectations and objectives in advance. These experiences reinforced that aerospace education is not limited to PowerPoint slides; it is most powerful when cadets can see and feel it in real-world settings.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="milestones" title="Awards, Milestones, and Advanced Training" kicker="Progress">
          <AnimatedSection className="space-y-6">
            <p>
              My Civil Air Patrol journey includes multiple formal milestones that reflect both academic preparation and leadership readiness:
            </p>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                I have passed three closed-book milestone exams—the Wright Brothers, Billy Mitchell, and Amelia Earhart achievements—each requiring separate leadership and aerospace tests, along with character development and fitness requirements.
              </li>
              <li>
                I have maintained the Cadet Physical Fitness standards, training regularly to meet the program’s expectations for health and resilience.
              </li>
              <li>
                I will be attending a Regional Cadet Leadership School (RCLS) at Maxwell Air Force Base in Alabama (December 27–January 3), which focuses on advanced leadership and management skills for cadets who are serving in, or preparing for, key leadership roles in their home squadrons. (Wikipedia)
              </li>
            </ul>
            <p>
              These achievements formalize what I have been practicing day-to-day: leading people, managing complex schedules, communicating under pressure, and modeling the professional standards expected of aerospace leaders.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="skills" title="Leadership, Instruction, and Aerospace Education" kicker="Impact">
          <AnimatedSection className="space-y-6">
            <p>
              Civil Air Patrol has been one of the most important influences on my development as an aspiring aerospace engineer and leader. Through my roles as Cadet Commander, Deputy Commander for Operations and Support, Flight Sergeant, and instructor, I have strengthened:
            </p>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>
                <span className="font-semibold text-white">Leadership and mentoring:</span> Guiding younger cadets through promotions, encampment preparation, and daily expectations.
              </li>
              <li>
                <span className="font-semibold text-white">Instructional design:</span> Building lesson plans in aerospace, leadership, and character development that turn abstract concepts into concrete, engaging experiences.
              </li>
              <li>
                <span className="font-semibold text-white">Operational management:</span> Planning three-hour weekly meetings, coordinating special events, and maintaining accountability for a large group of cadets.
              </li>
              <li>
                <span className="font-semibold text-white">Professionalism and discipline:</span> Balancing firm standards with genuine support, and modeling the behavior expected of someone wearing the uniform.
              </li>
            </ul>
            <p>
              These experiences complement my technical work in rocketry and aerospace research by training me to lead teams, communicate clearly, and teach others—skills that are essential in any engineering environment.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="media" title="Photos and Figures" kicker="Media">
          <AnimatedSection>
            <div className="grid gap-6 md:grid-cols-3">
              {MEDIA_ITEMS.map((item) => (
                <motion.div
                  key={item.caption}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut' }}
                >
                  <FigureCard src={item.src} caption={item.caption} />
                </motion.div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild>
                <a href="#">Download Program Summary (PDF)</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#">Download Portfolio Excerpt (PDF)</a>
              </Button>
            </div>
          </AnimatedSection>
        </Section>
      </div>
    </div>
  );
}
