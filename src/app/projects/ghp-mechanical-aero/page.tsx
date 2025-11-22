import Link from 'next/link';

import { Section } from '@/components/layout/Section';
import { StatCard } from '@/components/layout/StatCard';
import { FigureCard } from '@/components/layout/FigureCard';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

export default function GhpmAeroPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/ghp-hero.svg" alt="GHP Mechanical & Aerospace Engineering" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-primary/80 to-primary" />
        </div>
        <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-6 py-24 sm:py-28">
          <div className="max-w-3xl space-y-4">
            <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
              Governor’s Honors Program · Mechanical & Aerospace Engineering
            </span>
            <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">Governor’s Honors Program — Mechanical & Aerospace Engineering</h1>
            <p className="text-lg leading-relaxed text-primary-foreground/80">
              Four-week residential program in Georgia focused on mechanical and aerospace engineering. I completed advanced coursework in calculus-based physics, thermodynamics with Cantera, and signal processing, and spent over 100 hours on an applied engineering project that blended university-level theory with hands-on computation.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <Button asChild size="lg" className="rounded-full">
                <Link href="#curriculum">View Curriculum</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen">
                <Link href="#selection">Program Context</Link>
              </Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            <StatCard label="Duration" value="4 weeks residential" />
            <StatCard label="Focus" value="Mechanical & Aerospace Engineering" />
            <StatCard label="Time on Project" value="~1 wk @ 6 hrs/day + 2 wks @ 10 hrs/day" />
          </div>
        </div>
      </section>

      <Section id="overview" title="Program Overview" kicker="Overview">
        <p>
          The Governor’s Honors Program (GHP) is a competitive four-week residential program that brings together some of Georgia’s top high school students for advanced study. I attended GHP in <strong>Mechanical & Aerospace Engineering</strong>, where I lived on campus, worked in labs, and treated the experience as a concentrated introduction to university-level engineering.
        </p>
        <p>
          Over the four weeks, our cohort moved beyond standard high school coursework into calculus-based physics, thermodynamics, computational tools, and engineering mathematics. The structure combined daily seminars with intensive lab work and a multi-week project, giving us a realistic sense of the pace and expectations of an engineering program.
        </p>
        <p>
          For me, GHP was a bridge between my rocketry and research experiences and the broader world of mechanical and aerospace engineering. It reinforced that I not only enjoy building and testing hardware, but also thrive in environments that demand high levels of theoretical understanding, computation, and teamwork.
        </p>
      </Section>

      <Section id="curriculum" title="Curriculum and Technical Topics" kicker="Curriculum">
        <p>
          The first part of GHP emphasized building a strong theoretical and computational foundation. During the <strong>first week</strong> and for approximately <strong>two hours per day during the second week</strong>, we focused on intensive coursework rather than project work. Key topics included:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
          <li>
            <strong>Calculus-based physics with real-world applications:</strong> We extended beyond algebra-based treatments of mechanics into problems that required derivatives and integrals to describe motion, forces, and energy. Many examples were tied directly to engineering contexts such as structural loading and projectile motion.
          </li>
          <li>
            <strong>Thermodynamics with Cantera:</strong> Using <strong>Cantera</strong>, we explored thermodynamic properties, combustion, and reacting flows from a computational perspective. We worked through problems involving state variables, energy balances, and the behavior of gases under different conditions.
          </li>
          <li>
            <strong>Signal processing with FFT in Python:</strong> In Python, we implemented <strong>Fast Fourier Transforms (FFT)</strong> to analyze music and audio samples. This helped connect abstract mathematical operations to visible frequency spectra and practical applications like filtering and feature extraction.
          </li>
          <li>
            <strong>Multivariable calculus and triple integrals:</strong> We solved <strong>triple integral</strong> problems and multivariable integrals in contexts such as mass distributions and continuous charge or density fields, connecting calculus tools to physical modeling.
          </li>
        </ul>
        <p>
          This curriculum exposed me to a style of learning where theory, computation, and physical intuition had to work together, and where the math was no longer isolated from its engineering applications.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/gallery-flight-01.svg" caption="Notebook from calculus-based physics and thermodynamics sessions." />
          <FigureCard src="/images/gallery-flight-02.svg" caption="Python FFT visualization exercises and lab notes." />
        </div>
      </Section>

      <Section id="project" title="Capstone Project and Lab Work" kicker="Applied Work">
        <p>
          After the initial phase focused on coursework, we transitioned into a more intensive project period. Over the remaining weeks, I spent roughly <strong>one week working about six hours per day</strong> and then <strong>two weeks at approximately ten hours per day</strong> on an applied engineering project that pulled together the tools we had learned.
        </p>
        <p>The project required us to:</p>
        <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
          <li>Formulate a problem that was both mathematically rigorous and physically meaningful.</li>
          <li>Use the computational tools introduced in class—such as Python, numerical methods, and, where appropriate, tools like Cantera—to analyze and iterate on our solution.</li>
          <li>Communicate our methodology and results clearly to both instructors and peers.</li>
        </ul>
        <p>
          The extended project time mirrored the feel of an accelerated university lab course. Long, focused work sessions in the lab forced me to manage my time carefully, prioritize tasks, and move constantly between coding, calculations, and discussion with teammates and instructors.
        </p>
      </Section>

      <Section id="schedule" title="Daily Schedule and Workload" kicker="Workload">
        <p>
          The GHP schedule was deliberately rigorous. During the project phase, a typical day combined:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
          <li>
            <strong>Morning sessions</strong> focused on problem-solving, code reviews, or short lectures to introduce new tools or refine our understanding of prior material.
          </li>
          <li>
            <strong>Afternoon and evening lab blocks</strong>, where we worked in teams for <strong>6–10 hours per day</strong> on modeling, computation, and documentation.
          </li>
        </ul>
        <p>
          This rhythm required me to:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
          <li>Balance deep individual focus with collaborative problem-solving.</li>
          <li>Keep track of ongoing simulations, partial results, and next steps so that each block of time built on the previous one.</li>
          <li>Treat the experience like a full-time job, where sustained effort and consistent organization were crucial.</li>
        </ul>
        <p>
          Compared to a standard high school schedule, the intensity of this workload helped me understand what it feels like to live inside an engineering problem for multiple weeks in a row.
        </p>
      </Section>

      <Section id="outcomes" title="Skills and Outcomes" kicker="Outcomes">
        <p>
          GHP significantly expanded both my technical toolkit and my approach to learning:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
          <li>
            <strong>Technical skills:</strong> I strengthened my comfort with calculus-based physics, thermodynamics, and multivariable calculus, and learned to use tools like <strong>Cantera</strong> and <strong>Python/NumPy</strong> for real engineering problems. Working with FFTs deepened my understanding of signals and the frequency domain beyond what a textbook alone could provide.
          </li>
          <li>
            <strong>Computational thinking:</strong> Moving between analytical solutions and numerical simulations helped me see when to lean on closed-form math and when to rely on computation and approximation.
          </li>
          <li>
            <strong>Communication and collaboration:</strong> Long lab sessions required clear communication with instructors and peers, concise explanations of ideas, and a willingness to ask questions when something was unclear.
          </li>
          <li>
            <strong>Resilience and time management:</strong> The intensity of the program forced me to manage my time and energy more carefully than in a typical school setting, and to treat each day as part of a long-term, multi-week deliverable rather than an isolated assignment.
          </li>
        </ul>
        <p>
          These outcomes carried directly into my later work in rocketry, research, and leadership roles, where similar habits of mind and collaboration are essential.
        </p>
      </Section>

      <Section id="selection" title="Selection and Interview Process" kicker="Selection">
        <p>
          Admission to GHP involved a <strong>multi-stage selection process</strong> that lasted several months. I was initially nominated by a teacher and then advanced through school-level and district-level interviews that assessed both academic preparation and my interest in engineering.
        </p>
        <p>
          As part of the application, I assembled a portfolio of my aerospace projects, competitions, and research. I also completed written essays and a video submission describing my approach to engineering design and problem-solving. At the state-level interview, I participated in:
        </p>
        <ul className="list-disc space-y-3 pl-6 text-primary-foreground/80">
          <li>A <strong>group engineering challenge</strong>, which tested collaboration and the ability to reason through open-ended problems under time pressure.</li>
          <li>A <strong>CAD modeling exercise</strong>, which assessed my familiarity with digital design tools.</li>
          <li>A <strong>one-on-one interview</strong>, where I presented my portfolio and discussed how my experiences in rocketry, research, and leadership had prepared me for the program.</li>
        </ul>
        <p>
          Being selected for GHP in Mechanical & Aerospace Engineering confirmed that my work in rocketry, research, and STEM outreach was competitive at a state-wide level, and it pushed me into an environment where I was surrounded by peers with similarly focused ambitions.
        </p>
      </Section>

      <Section id="integration" title="How GHP Fits into My Aerospace Path" kicker="Context">
        <p>
          GHP did not replace my rocketry and research work; it <strong>connected</strong> them. The calculus-based physics and thermodynamics content deepened my understanding of problems I had already encountered in the <strong>American Rocketry Challenge</strong> and <strong>NASA Student Launch Initiative</strong>. The emphasis on modeling and computation tied directly into my <strong>UGA airfoil research</strong>, where I used CFD tools and wind tunnel testing to analyze bio-inspired and AI-generated designs.
        </p>
        <p>
          The program also reinforced the teaching and leadership side of my work in the <strong>Civil Air Patrol</strong> and as Outreach Coordinator for our NASA SLI team. Many of the same skills—clear explanation, patient collaboration, and the ability to communicate technical ideas—showed up in both environments.
        </p>
        <p>
          Taken together, GHP confirmed that the path I am pursuing in mechanical and aerospace engineering is not just something I enjoy, but something I can sustain in an intensive, university-like environment.
        </p>
      </Section>

      <Section id="media" title="Media and Supporting Materials" kicker="Media">
        <div className="grid gap-6 md:grid-cols-2">
          <FigureCard src="/images/gallery-flight-01.svg" caption="GHP classroom session — mechanical & aerospace engineering." />
          <FigureCard src="/images/gallery-flight-02.svg" caption="Python FFT analysis of music samples and lab exercises." />
          <FigureCard src="/images/gallery-flight-03.svg" caption="Thermodynamics and Cantera notes compiled for study sessions." />
          <FigureCard src="/images/gallery-flight-01.svg" caption="Portfolio materials prepared for the state-level interview." />
        </div>
        <div className="flex flex-wrap gap-4">
          <Button asChild variant="outline" size="sm" className="rounded-full border-accentneongreen/50 text-accentneongreen">
            <Link href="#">Download GHP Portfolio Excerpt (PDF)</Link>
          </Button>
          <Button asChild variant="outline" size="sm" className="rounded-full border-accentneongreen/50 text-accentneongreen">
            <Link href="#">Download Program Summary (PDF)</Link>
          </Button>
        </div>
        <div>
          <Button asChild variant="outline" size="sm" className="rounded-full border-accentneongreen/50 text-accentneongreen">
            <Link href="/projects">Back to Projects</Link>
          </Button>
        </div>
      </Section>
    </div>
  );
}
