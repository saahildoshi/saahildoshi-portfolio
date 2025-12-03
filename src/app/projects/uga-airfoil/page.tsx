import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
};

function MediaCard({ src, caption }: { src: string; caption: string }) {
  return (
    <motion.div variants={item} className="space-y-3">
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-xl border border-white/10">
        <Image src={src} alt={caption} fill className="object-contain p-4" />
      </div>
      <p className="text-sm text-primary-foreground/70">{caption}</p>
    </motion.div>
  );
}

export default function UgaAirfoilPage() {
  return (
    <div className="space-y-12 pb-24">
      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary/80 to-primary" />
        <div className="relative mx-auto max-w-6xl px-6 py-24">
          <span className="inline-flex items-center rounded-full border border-accentneongreen/30 bg-accentneongreen/10 px-4 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.35em] text-accentneongreen">
            Research Internship
          </span>
          <h1 className="mt-6 text-4xl font-bold text-white sm:text-5xl">UGA Airfoil Research Internship</h1>
          <p className="mt-4 max-w-3xl text-lg text-primary-foreground/80">
            Assisted faculty with airfoil design iterations, additive manufacturing of test articles, and data acquisition for a
            subsonic wind-tunnel campaign focused on low-Re performance.
          </p>
          <div className="mt-8 flex gap-4">
            <Button asChild>
              <Link href="/projects">Back to Projects</Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/contact">
                Request Internship Summary
                <ArrowUpRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 space-y-8">
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentneongreen">Project Overview</p>
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Designing raptor-inspired airfoils</h2>
            </div>
            <p className="text-lg text-primary-foreground/80">
              Built a comparative study between control, hawk-inspired, peregrine-inspired, and generative AI airfoils to measure
              low-speed performance. I supported CAD, wind-tunnel instrumentation, and data reduction to trace how geometry choices
              shifted stall onset, pressure distribution, and lift-to-drag behavior across prototype iterations.
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              {[{ label: 'Tunnel Runs', value: '25+ sweeps' }, { label: 'AoA Envelope', value: '-4° to 18°' }, { label: 'CAD Iterations', value: '15 design revisions' }].map((stat) => (
                <div key={stat.label} className="rounded-xl border border-white/10 bg-white/5 p-4">
                  <p className="text-sm uppercase tracking-[0.1em] text-primary-foreground/60">{stat.label}</p>
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="py-20 space-y-8"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentneongreen">Airfoil Geometry & CAD Models</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Raptor morphologies translated into prototypes</h2>
            <p className="text-primary-foreground/80">
              Developed CAD and manufacturing drawings for each candidate airfoil, blending bio-inspired curvature with additive
              manufacturing constraints. These models were scaled for the wind tunnel and paired with matching drawings to align
              geometry assumptions between simulation and fabrication.
            </p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-3"
          >
            <MediaCard src="/images/uga-airfoil/Control-Airfoil-CAD-Model.png" caption="Control airfoil CAD model for baseline comparisons." />
            <MediaCard src="/images/uga-airfoil/Control-Airfoil-Drawing.png" caption="Control airfoil drawing and reference dimensions." />
            <MediaCard src="/images/uga-airfoil/Hawk-CAD-Model.png" caption="Red-tailed hawk-inspired planform with adjusted camber." />
            <MediaCard src="/images/uga-airfoil/Hawk-Inspired-Airfoil-Drawing.png" caption="Manufacturing drawing for the hawk-inspired geometry." />
            <MediaCard src="/images/uga-airfoil/Peregrine-Falcon-Inspired-CAD-Model.png" caption="Peregrine falcon-inspired CAD exploring high camber near the LE." />
            <MediaCard src="/images/uga-airfoil/Peregrine-Falcon-Inspired-Airfoil-Drawing.png" caption="Peregrine-inspired drawing aligning tunnel mounting points." />
            <MediaCard src="/images/uga-airfoil/Gen-AI-CAD-Model.png" caption="Generative AI-driven CAD variant balancing thickness and camber." />
            <MediaCard src="/images/uga-airfoil/Gen-AI-Airfoil-Drawing.png" caption="Drawing used to machine molds for the AI-generated concept." />
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="py-20 space-y-8"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentneongreen">Demonstration Aircraft & Interchangeable Wing System</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Linking CAD to classroom-ready demonstrations</h2>
            <p className="text-primary-foreground/80">
              Fabricated a lightweight demonstration plane with swappable wings to visualize how each airfoil altered lift, stall,
              and flow attachment. The setup allowed lab visitors to feel aerodynamic differences before reviewing tunnel data.
            </p>
          </div>
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="grid gap-8 md:grid-cols-3"
          >
            <MediaCard src="/images/uga-airfoil/Mechanical-Wing-Toy-Interchangeable-Wings-Picture.png" caption="Interchangeable wing mockup demonstrating relative camber changes." />
            <MediaCard src="/images/uga-airfoil/Demonstration-Plane-CAD-Model.png" caption="CAD model of the demonstration aircraft with modular pylons." />
            <MediaCard src="/images/uga-airfoil/Demonstration-Plane-Interchangeable-Wings-Picture.png" caption="Physical demonstrator used to contrast lift and stall behaviors." />
          </motion.div>
        </motion.section>

        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="py-20 space-y-12"
        >
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accentneongreen">Simulation & Experimental Results</p>
            <h2 className="text-3xl font-bold text-white sm:text-4xl">Validating airfoil behavior across XFOIL and wind-tunnel tests</h2>
            <p className="text-primary-foreground/80">
              Combined XFOIL sweeps with tunnel data to align predicted stall angles, lift-to-drag ratios, and pressure profiles.
              Data reduction workflows converted raw balance voltages into aerodynamic coefficients to highlight which raptor form
              factors translated into measurable performance gains.
            </p>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">XFOIL Results</h3>
              <p className="text-primary-foreground/80">
                Simulated lift and drag curves showed the hawk-inspired airfoil postponing stall by roughly 2°, while the AI design
                delivered the highest L/D plateau near moderate angles of attack. These graphs guided which prototypes advanced to
                tunnel testing and validated the hypothesis that bio-inspired camber could delay separation.
              </p>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 md:grid-cols-2"
            >
              <MediaCard src="/images/uga-airfoil/Control-CL/CD-Results-Graph.png" caption="Control airfoil XFOIL curves establishing stall and baseline L/D." />
              <MediaCard src="/images/uga-airfoil/Gen-AI-XFOIL-Graph.png" caption="Generative AI design showing elevated L/D across mid-range AoA." />
              <MediaCard src="/images/uga-airfoil/Hawk-XFOIL-Results-Graph.png" caption="Hawk-inspired geometry delaying stall and smoothing lift roll-off." />
              <MediaCard src="/images/uga-airfoil/Peregrine-Falcon-XFOIL-Results-Graph.png" caption="Peregrine-inspired profile with sharper stall but strong low-AoA lift." />
            </motion.div>
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-white">Wind Tunnel Results</h3>
              <p className="text-primary-foreground/80">
                Force balance outputs were converted from raw voltages using calibration matrices to derive lift, drag, and moment
                coefficients. The generative AI airfoil ultimately achieved the best L/D in physical testing, though the hawk
                geometry maintained a smoother stall onset. Differences between simulation and experiment highlighted Reynolds
                effects and mounting interference that were absent in XFOIL.
              </p>
            </div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="space-y-8"
            >
              <MediaCard src="/images/uga-airfoil/Final-WindTunnel-(Summative-Testing)-Results.png" caption="Summative test runs comparing aerodynamic coefficients across airfoils." />
              <MediaCard src="/images/uga-airfoil/Final-Formative-Testing-Results.png" caption="Formative testing results used to refine mounting and measurement repeatability." />
            </motion.div>
            <motion.div
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="grid gap-8 md:grid-cols-2"
            >
              <MediaCard src="/images/uga-airfoil/CP-Metrics-Results-Graph.png" caption="Center-of-pressure metrics demonstrating shifts across AoA." />
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
