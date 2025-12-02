'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';

const sectionMotionProps = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.3 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

const projects = [
  {
    title: 'NASA Student Launch Initiative — Project RANCH',
    body:
      'As Payload Team Lead and Outreach Coordinator, I helped design and build an 8-foot high-power rocket that flew to approximately 4,300 feet. I worked on the payload bay architecture, airframe trade studies, and design decisions such as transitioning from carbon-fiber to fiberglass couplers to meet NASA’s flight-time requirements. I also contributed to more than 400–500 pages of technical documentation reviewed by NASA engineers and led STEM outreach lessons and social media to connect our work to the broader community.',
  },
  {
    title: 'American Rocketry Challenge (ARC)',
    body:
      'As Co-Captain, I led design, simulation, and testing for a mid-power competition rocket targeting an apogee of about 820–825 feet with a fragile egg payload and a 43–46 second flight-time window, under a 650 g mass limit. I used OpenRocket to study flight dynamics, stability, and drag, and Fusion 360 to design 3D-printed components such as adjustable-infill nose cones for altitude control and a nylon–carbon-fiber tail cone for stability. Our team achieved a qualifying score of 9, placed 24th out of roughly 1,000 teams nationally, and was the only team from Georgia to advance to nationals.',
  },
  {
    title: 'UGA Bio-Inspired & AI-Designed Airfoil Research',
    body:
      'I interned in the lab of Dr. Ramana Pidaparti at the University of Georgia, where I studied the aerodynamic performance of bio-inspired and generative AI-designed airfoils. Over 7–8 weeks (full-time), I used XFOIL and other CFD tools, Fusion 360, and 3D printing to model and manufacture airfoils, then validated their performance in a wind tunnel. I compared lift, drag, and lift-to-drag ratios for peregrine falcon–inspired, hawk-inspired, and AI-generated profiles. This work evolved into a gold medal–winning regional science fair project and state-level competition.',
  },
  {
    title: 'Governor’s Honors Program (GHP) — Mechanical & Aerospace Engineering',
    body:
      'I was selected as a Governor’s Honors Program alumnus in Mechanical & Aerospace Engineering after a multi-stage interview and portfolio process. Over four weeks, I studied topics such as calculus-based physics, triple integrals, thermodynamics with Cantera, and signal processing using FFTs in Python. I also worked on a capstone project (ERAS2 – an electrohydrodynamic “ionic wind” aircraft concept), contributing primarily to the engine team and supporting airfoil selection and analysis.',
  },
  {
    title: 'Civil Air Patrol — Cadet Commander',
    body:
      'I currently serve as a Cadet Captain and Cadet Commander of a squadron based at Ben Epps Airport, overseeing roughly 30 cadets and 15 senior members. My responsibilities include planning and leading weekly three-hour meetings, organizing events such as airport control tower tours, indoor skydiving visits, and ruck marches, and teaching aerospace and leadership lessons. I have also served as Deputy Commander for Operations, Deputy Commander for Support, and a flight sergeant at encampment, where I supervised and trained a flight of ~20 cadets over six days of intensive instruction.',
  },
];

const skillGroups = [
  {
    title: 'Aerospace & simulation',
    items: [
      'OpenRocket for flight dynamics, stability, and performance trade studies',
      'XFOIL and other CFD tools for airfoil analysis and lift/drag prediction',
      'Basic exposure to thermodynamics and combustion modeling using Cantera',
      'Altimeter and flight-data analysis (e.g., AltimeterTwo and high-power altimeters)',
    ],
  },
  {
    title: 'Design, CAD, and fabrication',
    items: [
      'Fusion 360 (CAD) for airframes, payload bays, and 3D-printable components',
      '3D printing of structural and aerodynamic parts (including nylon–carbon-fiber composites)',
      'Basic finite element analysis, iterative design, and design-for-manufacturing',
      'Practical build experience: composites, recovery systems, payload integration, and test rigs',
    ],
  },
  {
    title: 'Programming & computation',
    items: [
      'Proficient in Python (data analysis, simulation scripts, FFT signal processing)',
      'Proficient in JavaScript and comfortable in modern web stacks (used for this portfolio)',
      'Experience with LaTeX for technical documentation and reports',
      'Working with tooling such as Git/GitHub and modern developer workflows',
    ],
  },
  {
    title: 'Leadership, communication, and teaching',
    items: [
      'Planning and leading multi-hour meetings and training for Civil Air Patrol cadets',
      'Designing and teaching STEM outreach lessons for elementary and middle school students',
      'Writing large-scale technical documentation (hundreds of pages) for NASA SLI',
      'Coordinating teams through design reviews, test campaigns, and competition deadlines',
    ],
  },
];

const beyondEngineering = [
  'Outside of my engineering work, I am active in marching band and varsity tennis. As Front Ensemble Leader in the Oconee County High School Warrior Marching Band, I help new members adapt to the pace and expectations of competition, focusing on both musical precision and section culture.',
  'I also play on the varsity tennis team, where I have served in key positions such as 3 singles and 2 doubles. In both activities, I mentor younger students, lead by example, and learn how to stay composed under pressure — skills that translate directly into engineering projects and leadership roles.',
];

export default function AboutPage() {
  return (
    <div className="pb-24">
      <motion.section
        {...sectionMotionProps}
        className="mx-auto max-w-6xl px-6 py-20 space-y-4 rounded-3xl border border-white/5 bg-gradient-to-br from-white/5 via-white/0 to-white/10"
      >
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">About</p>
        <h1 className="text-4xl font-semibold text-white sm:text-5xl">About Saahil Doshi</h1>
        <p className="text-lg font-semibold uppercase tracking-[0.2em] text-accentneongreen/80">
          High school aerospace engineer-in-training building rockets, airfoils, and teams.
        </p>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="space-y-4 text-base leading-relaxed text-primary-foreground/80"
        >
          {[`I am a high school student at Oconee County High School (class of 2027) with a focused interest in aerospace and mechanical engineering. Rather than only studying theory, I spend most of my time designing, simulating, and building systems that actually fly: high-power research rockets, competition vehicles, and experimental airfoils.`,
            'My work spans national rocketry competitions, NASA’s Student Launch Initiative, undergraduate-level research at the University of Georgia, and leadership in the Civil Air Patrol. Across these projects, I have learned how to move from an idea to a fully documented, tested system — balancing analytical modeling, CAD and simulation, documentation, and team leadership.',
          ].map((paragraph) => (
            <motion.p key={paragraph} variants={itemVariants}>
              {paragraph}
            </motion.p>
          ))}
        </motion.div>
      </motion.section>

      <motion.div {...sectionMotionProps}>
        <Section id="work" title="What I’m working on" kicker="Focus Projects">
          <p className="text-primary-foreground/80">A few of the projects that define my current trajectory as an engineer:</p>
          <motion.ul
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mt-6 space-y-6"
          >
            {projects.map((project) => (
              <motion.li key={project.title} variants={itemVariants} className="space-y-2">
                <p className="font-semibold text-white">{project.title}</p>
                <p className="text-base leading-relaxed text-primary-foreground/80">{project.body}</p>
              </motion.li>
            ))}
          </motion.ul>
        </Section>
      </motion.div>

      <motion.div {...sectionMotionProps}>
        <Section id="skills" title="Skills & tools" kicker="Toolbox">
          <p className="text-primary-foreground/80">
            Through these projects, I’ve built a set of technical and leadership skills that I continue to deepen.
          </p>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid gap-8 md:grid-cols-2"
          >
            {skillGroups.map((group) => (
              <motion.div
                key={group.title}
                variants={itemVariants}
                className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">{group.title}</p>
                <ul className="space-y-2 text-primary-foreground/80">
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </motion.div>

      <motion.div {...sectionMotionProps}>
        <Section id="beyond" title="Beyond engineering" kicker="Balance">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-4 text-primary-foreground/80"
          >
            {beyondEngineering.map((paragraph) => (
              <motion.p key={paragraph} variants={itemVariants}>
                {paragraph}
              </motion.p>
            ))}
          </motion.div>
        </Section>
      </motion.div>

      <motion.div {...sectionMotionProps}>
        <Section id="looking" title="What I’m looking for" kicker="Next Steps">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="space-y-6 text-primary-foreground/80"
          >
            <motion.p variants={itemVariants}>
              I am looking for opportunities to contribute to ambitious aerospace and mechanical engineering projects, whether through research, design teams, or summer programs. If you are working on something where a motivated high school engineer with hands-on rocketry, CFD, CAD, and leadership experience could be useful, I would be excited to connect.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="/projects">View my projects</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full border-accentneongreen/50 text-accentneongreen"
              >
                <Link href="/contact">Get in touch</Link>
              </Button>
            </motion.div>
          </motion.div>
        </Section>
      </motion.div>
    </div>
  );
}
