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
  { label: 'Duration', value: '7–8 weeks · 8 hours/day' },
  { label: 'Methods', value: 'XFOIL CFD · Fusion 360 · Wind tunnel' },
  { label: 'Outcome', value: 'Regional gold medal · State finalist' },
];

const MEDIA = [
  { src: '/images/airfoil-cad.svg', caption: 'Fusion 360 CAD model of a bio-inspired airfoil with integrated mounting features.' },
  { src: '/images/airfoil-wind-tunnel.svg', caption: 'Wind tunnel test rig and instrumentation used for repeated force measurements.' },
  { src: '/images/airfoil-poster.svg', caption: 'Science fair poster summarizing CFD results and wind tunnel findings.' },
  { src: '/images/airfoil-lab.svg', caption: 'UGA lab workspace used for modeling, fabrication, and data reduction.' },
];

export default function UgaAirfoilResearchPage() {
  return (
    <div className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/airfoil-hero.svg"
        badge="UGA Airfoil Research · Summer Internship & Science Fair"
        title="Bio-Inspired and AI-Designed Airfoils — UGA Research & Science Fair"
        subtitle="Under the mentorship of Dr. Ramana Pidaparti at the University of Georgia, I conducted an 8-week research project comparing the aerodynamic performance of bio-inspired, generative AI-designed, and control airfoils using XFOIL simulations, Fusion 360 modeling, 3D printing, and wind tunnel testing."
        actions={(
          <div className="flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="rounded-full">
              <a href="#results" className="inline-flex items-center gap-2">
                View Results
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen">
              <a href="#" className="inline-flex items-center gap-2">
                Download Report
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

        <Section id="overview" title="Research Overview" kicker="Overview">
          <AnimatedSection className="space-y-6">
            <p>
              This project combined university-level research with a competitive science fair entry. Under the mentorship of Dr. Ramana Pidaparti at the University of Georgia, I spent 7–8 weeks working full-time—approximately eight hours per day—in a lab focused on airfoil design and aerodynamic performance. The goal was to compare how bio-inspired, generative AI-designed, and conventional airfoil shapes perform in terms of lift, drag, and lift-to-drag ratio.
            </p>
            <p>
              To do this, I used XFOIL for computational fluid dynamics (CFD) simulations, modeled candidate geometries in Fusion 360, and fabricated physical prototypes via 3D printing. These airfoils were then tested in a wind tunnel using a custom-built test rig to validate and calibrate the simulation results. The project culminated in a regional science fair entry that earned a gold medal and advanced to the state-level competition.
            </p>
            <p>
              Beyond the technical results, this project served as a bridge between computational analysis and experimental validation. It reinforced my interest in aerospace research and provided early hands-on experience with aerodynamic testing workflows typically encountered in undergraduate and graduate-level engineering programs.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="objectives" title="Problem Statement & Objectives" kicker="Research Question">
          <AnimatedSection className="space-y-6">
            <p>
              The central research question was whether nature’s optimized wing geometries outperform airfoils generated by machine learning approaches, and how both compare to a conventional control airfoil. Specifically:
            </p>
            <ul className="list-disc space-y-3 pl-5 text-primary-foreground/80">
              <li>How do bio-inspired airfoils based on peregrine falcon and hawk wings perform in terms of lift, drag, and lift-to-drag ratio?</li>
              <li>Can generative AI-designed airfoils achieve comparable or superior aerodynamic efficiency to biologically inspired designs?</li>
              <li>How closely do XFOIL simulation results align with experimental data obtained from wind tunnel testing?</li>
            </ul>
            <p>The primary objectives were to:</p>
            <ul className="list-disc space-y-3 pl-5 text-primary-foreground/80">
              <li>Design and parameterize a family of bio-inspired, AI-generated, and control airfoils.</li>
              <li>Run XFOIL simulations to estimate aerodynamic performance across a range of angles of attack.</li>
              <li>Fabricate 3D-printed prototypes and collect experimental wind tunnel data.</li>
              <li>Compare simulation and experimental results and interpret the implications for aerospace and renewable energy applications.</li>
            </ul>
          </AnimatedSection>
        </Section>

        <Section id="methods" title="CFD, CAD, and Generative Design Workflow" kicker="Methodology">
          <AnimatedSection className="space-y-6">
            <p>
              The project followed a repeatable workflow that integrated computational tools, CAD modeling, and physical fabrication:
            </p>
            <ul className="list-disc space-y-3 pl-5 text-primary-foreground/80">
              <li>
                <strong className="text-white">Airfoil generation and selection:</strong> Bio-inspired candidates were derived from peregrine falcon and hawk wing geometries. A control airfoil was selected to represent a conventional engineering baseline. Generative AI tools were then used to propose candidate airfoils, which were filtered based on geometric feasibility and manufacturability.
              </li>
              <li>
                <strong className="text-white">CFD via XFOIL:</strong> Each airfoil was analyzed in XFOIL to estimate lift coefficient, drag coefficient, and lift-to-drag ratio across a range of angles of attack and Reynolds numbers representative of the wind tunnel test conditions.
              </li>
              <li>
                <strong className="text-white">CAD modeling in Fusion 360:</strong> Approved airfoil profiles were modeled in Fusion 360, extruded to appropriate chord and span dimensions, and prepared for 3D printing. Mounting features were built into the models to interface with the wind tunnel test rig.
              </li>
              <li>
                <strong className="text-white">3D printing and post-processing:</strong> Airfoils were printed using appropriate materials and layer heights to balance surface finish with fabrication time. Supports were removed and surfaces were lightly finished to minimize roughness that could significantly affect drag.
              </li>
            </ul>
            <div className="grid gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <FigureCard src="/images/airfoil-cad.svg" caption="Sample airfoil CAD model in Fusion 360 with mounting interface." />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.45, ease: 'easeOut', delay: 0.05 }}
              >
                <FigureCard src="/images/gallery-flight-02.svg" caption="XFOIL lift/drag polar plots used to select candidate airfoils." />
              </motion.div>
            </div>
          </AnimatedSection>
        </Section>

        <Section id="experimental" title="Wind Tunnel Testing & Data Collection" kicker="Experimental Setup">
          <AnimatedSection className="space-y-6">
            <p>
              To validate the simulations, I designed and used a wind tunnel test setup that allowed for repeated, controlled measurements of aerodynamic forces on each airfoil:
            </p>
            <ul className="list-disc space-y-3 pl-5 text-primary-foreground/80">
              <li>
                <strong className="text-white">Test rig design:</strong> A dedicated mount was built to hold each airfoil at a fixed angle of attack, with the ability to swap airfoils quickly between runs. The rig interfaced with force-measurement instrumentation to capture lift and drag data.
              </li>
              <li>
                <strong className="text-white">Controlled test conditions:</strong> Wind tunnel speeds and angles of attack were selected to mirror the conditions used in XFOIL, enabling direct comparison between simulated and experimental performance.
              </li>
              <li>
                <strong className="text-white">Force measurement and logging:</strong> For each configuration, lift and drag forces were measured and recorded. Repeated trials were performed to reduce the impact of random noise and to identify any systematic biases.
              </li>
              <li>
                <strong className="text-white">Calibration and error analysis:</strong> Baseline runs and control measurements were used to calibrate the system, and discrepancies between repeated measurements were analyzed to estimate uncertainty.
              </li>
            </ul>
          </AnimatedSection>
        </Section>

        <Section id="results" title="Results & Analysis" kicker="Findings">
          <AnimatedSection className="space-y-6">
            <p>The results showed clear performance differences between bio-inspired, AI-generated, and control airfoils:</p>
            <ul className="list-disc space-y-3 pl-5 text-primary-foreground/80">
              <li>
                The <strong className="text-white">peregrine falcon-inspired airfoil</strong> achieved the highest lift-to-drag ratio, reaching a value of approximately <strong className="text-white">61.5</strong>, indicating exceptional aerodynamic efficiency under the tested conditions.
              </li>
              <li>
                The <strong className="text-white">hawk-inspired airfoil</strong> produced the highest lift, with measured forces up to <strong className="text-white">6.757 newtons</strong>, making it especially effective in scenarios prioritizing lift over drag minimization.
              </li>
              <li>
                The <strong className="text-white">AI-designed airfoil</strong> performed competitively, with lift and drag characteristics that in some cases approached or matched the performance of the bio-inspired designs. This result suggests that generative AI can approximate some of the aerodynamic advantages found in nature.
              </li>
            </ul>
            <p>
              Although there were differences between simulated and measured values, the trends from XFOIL were consistent with the wind tunnel data. Where discrepancies appeared, they could often be explained by surface finish, 3D-printing tolerances, or slight misalignments in the test rig. These differences highlighted the importance of both high-fidelity geometry and careful experimental setup in aerodynamic testing.
            </p>
            <p>
              Overall, the project demonstrated that bio-inspired airfoils—especially those derived from high-performance birds such as the peregrine falcon—offer excellent lift-to-drag characteristics, while AI-generated airfoils show promise as a tool for exploring unconventional but effective geometries.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="applications" title="Applications and Engineering Impact" kicker="Applications">
          <AnimatedSection className="space-y-6">
            <p>The findings from this project have implications beyond the specific test configurations:</p>
            <ul className="list-disc space-y-3 pl-5 text-primary-foreground/80">
              <li>
                <strong className="text-white">Aerospace and UAVs:</strong> High lift-to-drag airfoils informed by bio-inspired shapes could improve the efficiency and endurance of unmanned aerial vehicles and small aircraft, particularly in low Reynolds number regimes.
              </li>
              <li>
                <strong className="text-white">Renewable energy:</strong> Lessons from bio-inspired and AI-generated airfoils can be applied to wind turbine blade design, where slight improvements in aerodynamic efficiency can translate into substantial gains in power output over time.
              </li>
              <li>
                <strong className="text-white">Design workflows:</strong> Combining bio-inspired intuition, generative AI, and traditional CFD tools offers a template for future engineering workflows that can rapidly explore large design spaces while still grounding decisions in physical testing.
              </li>
            </ul>
            <p>
              On a personal level, this project strengthened my understanding of aerodynamics, CFD, and experimental methods, and showed me how research can move from concept to prototype to validated data.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="context" title="Mentorship, Science Fair, and Academic Context" kicker="Programs">
          <AnimatedSection className="space-y-6">
            <p>
              The research was conducted under the mentorship of <strong className="text-white">Dr. Ramana Pidaparti</strong> at the University of Georgia, where I worked in his lab for 7–8 weeks as a high school student, spending full days immersed in modeling, simulation, and testing. This environment exposed me to the pace and expectations of university-level engineering research.
            </p>
            <p>
              I adapted the project into a science fair entry that advanced through the regional level with a <strong className="text-white">gold medal</strong> and continued on to the state competition. In preparing for judging, I created detailed posters, data visualizations, and explanations that distilled CFD concepts and wind tunnel methodology into an accessible narrative for a broad audience.
            </p>
            <p>
              Together with my work in rocketry competitions and NASA Student Launch, this research contributed to my selection for the <strong className="text-white">Governor’s Honors Program</strong> in Mechanical and Aerospace Engineering, where I continued to deepen my engagement with aerospace topics in a rigorous academic setting.
            </p>
          </AnimatedSection>
        </Section>

        <Section id="media" title="Media and Downloads" kicker="Media">
          <AnimatedSection className="space-y-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {MEDIA.map((item, index) => (
                <motion.div
                  key={item.caption}
                  initial={{ opacity: 0, scale: 0.98 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.45, ease: 'easeOut', delay: index * 0.05 }}
                >
                  <FigureCard src={item.src} caption={item.caption} />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button asChild className="rounded-full">
                <a href="#" className="inline-flex items-center gap-2">
                  Download Research Summary (PDF)
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-accentneongreen/50 text-accentneongreen">
                <a href="#" className="inline-flex items-center gap-2">
                  Download Science Fair Poster (PDF)
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </AnimatedSection>
        </Section>
      </div>
    </div>
  );
}
