import Link from 'next/link';

import { Section } from '@/components/layout/Section';
import { Button } from '@/components/ui/button';

export default function AboutPage() {
  return (
    <div className="pb-24">
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-[0.35em] text-accentneongreen/80">About</p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">About Saahil Doshi</h1>
        <p className="mt-3 text-lg font-semibold uppercase tracking-[0.2em] text-accentneongreen/80">
          High school aerospace engineer-in-training building rockets, airfoils, and teams.
        </p>
        <div className="mt-6 space-y-4 text-base leading-relaxed text-primary-foreground/80">
          <p>
            I am a high school student at Oconee County High School (class of 2027) with a focused interest in aerospace and
            mechanical engineering. Rather than only studying theory, I spend most of my time designing, simulating, and
            building systems that actually fly: high-power research rockets, competition vehicles, and experimental airfoils.
          </p>
          <p>
            My work spans national rocketry competitions, NASA’s Student Launch Initiative, undergraduate-level research at the
            University of Georgia, and leadership in the Civil Air Patrol. Across these projects, I have learned how to move
            from an idea to a fully documented, tested system — balancing analytical modeling, CAD and simulation,
            documentation, and team leadership.
          </p>
        </div>
      </section>

      <Section id="work" title="What I’m working on" kicker="Focus Projects">
        <p className="text-primary-foreground/80">
          A few of the projects that define my current trajectory as an engineer:
        </p>
        <ul className="mt-6 space-y-6 text-base leading-relaxed text-primary-foreground/80">
          <li>
            <p className="font-semibold text-white">NASA Student Launch Initiative — Project RANCH</p>
            <p className="mt-2">
              As Payload Team Lead and Outreach Coordinator, I helped design and build an 8-foot high-power rocket that flew to
              approximately 4,300 feet. I worked on the payload bay architecture, airframe trade studies, and design decisions
              such as transitioning from carbon-fiber to fiberglass couplers to meet NASA’s flight-time requirements. I also
              contributed to more than 400–500 pages of technical documentation reviewed by NASA engineers and led STEM outreach
              lessons and social media to connect our work to the broader community.
            </p>
          </li>
          <li>
            <p className="font-semibold text-white">American Rocketry Challenge (ARC)</p>
            <p className="mt-2">
              As Co-Captain, I led design, simulation, and testing for a mid-power competition rocket targeting an apogee of
              about 820–825 feet with a fragile egg payload and a 43–46 second flight-time window, under a 650 g mass limit. I
              used OpenRocket to study flight dynamics, stability, and drag, and Fusion 360 to design 3D-printed components
              such as adjustable-infill nose cones for altitude control and a nylon–carbon-fiber tail cone for stability. Our
              team achieved a qualifying score of 9, placed 24th out of roughly 1,000 teams nationally, and was the only team
              from Georgia to advance to nationals.
            </p>
          </li>
          <li>
            <p className="font-semibold text-white">UGA Bio-Inspired & AI-Designed Airfoil Research</p>
            <p className="mt-2">
              I interned in the lab of Dr. Ramana Pidaparti at the University of Georgia, where I studied the aerodynamic
              performance of bio-inspired and generative AI-designed airfoils. Over 7–8 weeks (full-time), I used XFOIL and
              other CFD tools, Fusion 360, and 3D printing to model and manufacture airfoils, then validated their performance
              in a wind tunnel. I compared lift, drag, and lift-to-drag ratios for peregrine falcon–inspired, hawk-inspired, and
              AI-generated profiles. This work evolved into a gold medal–winning regional science fair project and state-level
              competition.
            </p>
          </li>
          <li>
            <p className="font-semibold text-white">Governor’s Honors Program (GHP) — Mechanical & Aerospace Engineering</p>
            <p className="mt-2">
              I was selected as a Governor’s Honors Program alumnus in Mechanical & Aerospace Engineering after a multi-stage
              interview and portfolio process. Over four weeks, I studied topics such as calculus-based physics, triple
              integrals, thermodynamics with Cantera, and signal processing using FFTs in Python. I also worked on a capstone
              project (ERAS2 – an electrohydrodynamic “ionic wind” aircraft concept), contributing primarily to the engine team
              and supporting airfoil selection and analysis.
            </p>
          </li>
          <li>
            <p className="font-semibold text-white">Civil Air Patrol — Cadet Commander</p>
            <p className="mt-2">
              I currently serve as a Cadet Captain and Cadet Commander of a squadron based at Ben Epps Airport, overseeing
              roughly 30 cadets and 15 senior members. My responsibilities include planning and leading weekly three-hour
              meetings, organizing events such as airport control tower tours, indoor skydiving visits, and ruck marches, and
              teaching aerospace and leadership lessons. I have also served as Deputy Commander for Operations, Deputy
              Commander for Support, and a flight sergeant at encampment, where I supervised and trained a flight of ~20 cadets
              over six days of intensive instruction.
            </p>
          </li>
        </ul>
      </Section>

      <Section id="skills" title="Skills & tools" kicker="Toolbox">
        <p className="text-primary-foreground/80">
          Through these projects, I’ve built a set of technical and leadership skills that I continue to deepen.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Aerospace & simulation</p>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>OpenRocket for flight dynamics, stability, and performance trade studies</li>
              <li>XFOIL and other CFD tools for airfoil analysis and lift/drag prediction</li>
              <li>Basic exposure to thermodynamics and combustion modeling using Cantera</li>
              <li>Altimeter and flight-data analysis (e.g., AltimeterTwo and high-power altimeters)</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Design, CAD, and fabrication</p>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Fusion 360 (CAD) for airframes, payload bays, and 3D-printable components</li>
              <li>3D printing of structural and aerodynamic parts (including nylon–carbon-fiber composites)</li>
              <li>Basic finite element analysis, iterative design, and design-for-manufacturing</li>
              <li>Practical build experience: composites, recovery systems, payload integration, and test rigs</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Programming & computation</p>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Proficient in Python (data analysis, simulation scripts, FFT signal processing)</li>
              <li>Proficient in JavaScript and comfortable in modern web stacks (used for this portfolio)</li>
              <li>Experience with LaTeX for technical documentation and reports</li>
              <li>Working with tooling such as Git/GitHub and modern developer workflows</li>
            </ul>
          </div>
          <div className="space-y-4 rounded-2xl border border-white/5 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-accentneongreen/80">Leadership, communication, and teaching</p>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Planning and leading multi-hour meetings and training for Civil Air Patrol cadets</li>
              <li>Designing and teaching STEM outreach lessons for elementary and middle school students</li>
              <li>Writing large-scale technical documentation (hundreds of pages) for NASA SLI</li>
              <li>Coordinating teams through design reviews, test campaigns, and competition deadlines</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="beyond" title="Beyond engineering" kicker="Balance">
        <div className="space-y-4 text-primary-foreground/80">
          <p>
            Outside of engineering, I stay grounded through activities that challenge me to lead, collaborate, and support my community. These roles have shaped how I work under pressure and how I contribute to the groups I’m part of.
          </p>
          <p>
            For two years, I was a member of the Oconee County High School Warrior Marching Band. Although I’m no longer in band, the countless hours of rehearsal and competition taught me discipline, attention to detail, and the importance of maintaining composure during high-pressure performances. Those lessons remain foundational to how I approach engineering problems and team leadership today.
          </p>
          <p>
            I currently serve as the Secretary of the Oconee County High School Student Council, where I manage attendance, keep records, coordinate communication, and support decision-making during meetings. I also help plan and execute major events — including our Homecoming activities, dance logistics, and the Homecoming Parade, which our council launched for the first time last year. These responsibilities have strengthened my organizational skills, my ability to work across teams, and my willingness to step into high-visibility leadership roles.
          </p>
          <p>
          Athletics is another important part of my life. As a Varsity tennis player, I’ve contributed both on and off the court. Beyond competing at a high level, I helped organize and run a UTR tennis tournament at our school’s courts — an event that raised over $500 for our tennis program and brought together dozens of players from around the community. Coordinating the tournament taught me how to manage logistics, work with adults and sponsors, and create a positive environment for healthy competition.
          </p>
          <p>
          These activities may seem separate from engineering, but they sharpen the same skills I depend on in aerospace: consistent discipline, clear communication, teamwork, and the ability to lead under pressure. Together, they form the foundation of how I balance my academic, engineering, and personal commitments.
          </p>
        </div>
      </Section>

      <Section id="looking" title="What I’m looking for" kicker="Next Steps">
        <div className="space-y-6 text-primary-foreground/80">
          <p>
            I am looking for opportunities to contribute to ambitious aerospace and mechanical engineering projects, whether
            through research, design teams, or summer programs. If you are working on something where a motivated high school
            engineer with hands-on rocketry, CFD, CAD, and leadership experience could be useful, I would be excited to connect.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full">
              <Link href="/projects">View my projects</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen">
              <Link href="/contact">Get in touch</Link>
            </Button>
          </div>
        </div>
      </Section>
    </div>
  );
}
