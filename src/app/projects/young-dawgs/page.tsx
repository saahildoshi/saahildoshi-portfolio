import AnimatedHero from '@/components/animated/AnimatedHero';
import {
  DecisionGrid,
  ProjectActions,
  ProjectBrief,
  ProjectStats,
  PullQuote,
  TechnicalList,
} from '@/components/layout/CaseStudy';
import { FigureCard } from '@/components/layout/FigureCard';
import { Section } from '@/components/layout/Section';

const stats = [
  { label: 'Evaluation sets', value: '20 + 20 samples' },
  { label: 'Full-model mesh', value: '1.26M TRI6' },
  { label: 'Current result', value: '0.005% checkpoint' },
];

export default function YoungDawgsPage() {
  return (
    <main className="min-h-screen bg-primary text-primary-foreground">
      <AnimatedHero
        image="/images/young-dawgs/ansys-stress.png"
        badge="UGA Young Dawgs · Bio-Digital Mechanics Lab · 2026 - present"
        title="From AI-generated microstructures to mechanics that can be tested"
        subtitle="A research internship with Dr. Xianqiao Wang developing a reproducible Python-to-ANSYS pipeline for generating, evaluating, meshing, and mechanically testing porous material microstructures."
      />
      <ProjectStats items={stats} />

      <Section id="question" title="The research question connects image generation to material behavior" kicker="Research objective">
        <ProjectBrief
          items={[
            {
              label: 'Generation',
              title: 'Create controlled microstructures',
              detail: 'LLM-written procedural programs generate 256 × 256 binary structures under fixed geometry and connectivity conventions.',
            },
            {
              label: 'Evaluation',
              title: 'Measure more than visual similarity',
              detail: 'Separate 20-sample development and held-out sets are evaluated using solid fraction, correlation, lineal-path, thickness, and connectivity metrics.',
            },
            {
              label: 'Mechanics',
              title: 'Move from morphology to response',
              detail: 'Qualified geometry is converted to a vector boundary, meshed, imported into ANSYS, and compressed between rigid frictionless plates.',
            },
          ]}
        />
        <div className="grid gap-10 pt-4 lg:grid-cols-[1.2fr,0.8fr]">
          <div className="space-y-5">
            <p>
              The project asks whether an AI-assisted design workflow can reproduce important characteristics of a reference microstructure while preserving enough geometric and topological integrity for mechanical analysis. A structure that looks plausible is not sufficient if it disconnects, changes under export, or cannot be meshed reliably.
            </p>
            <p>
              My role is to build and validate the computational pipeline: generate structures, compute quantitative descriptors, preserve boundaries through vector conversion, prepare finite-element meshes, and maintain an evidence trail that separates accepted results from failed or provisional runs.
            </p>
          </div>
          <PullQuote>The pipeline treats every transition - image, vector boundary, mesh, solver input, and result - as a verification interface.</PullQuote>
        </div>
      </Section>

      <Section id="evaluation" title="Quantitative gates keep visual resemblance from becoming the only criterion" kicker="Morphology evaluation">
        <TechnicalList
          items={[
            { label: 'Representation', value: '256 × 256 binary arrays with explicit solid and void definitions and four-neighbor connectivity.' },
            { label: 'Sampling', value: '20 development seeds and 20 held-out seeds support iteration without evaluating only on the structures used during development.' },
            { label: 'Descriptors', value: 'Solid fraction, two-point correlation, lineal-path statistics, thickness, component counts, and directional percolation characterize geometry and topology.' },
            { label: 'Reproducibility', value: 'Seeded runs, manifests, hashes, frozen evaluators, and saved receipts preserve the exact configuration behind each accepted result.' },
          ]}
        />
        <DecisionGrid
          items={[
            {
              label: 'Failure mode',
              title: 'A structure can match scalar metrics and still disconnect',
              detail: 'Connectivity and percolation are checked explicitly rather than inferred from similar solid fraction or pore statistics.',
            },
            {
              label: 'Failure mode',
              title: 'Geometry can drift during conversion',
              detail: 'Raster-to-vector and simplification stages are checked against the source boundary before any mechanical result is accepted.',
            },
            {
              label: 'Acceptance logic',
              title: 'A pass must be traceable',
              detail: 'The accepted evaluator and source artifacts remain frozen so later pipeline improvements do not silently rewrite earlier evidence.',
            },
          ]}
        />
      </Section>

      <Section id="meshing" title="Mesh remediation preserved the boundary while improving element quality" kicker="Geometry and finite elements">
        <div className="grid gap-10 lg:grid-cols-[0.85fr,1.15fr] lg:items-start">
          <div className="space-y-5">
            <p>
              The initial fine mesh failed the frozen 10° minimum-angle gate at 8.28°. I changed the meshing strategy without changing the immutable vector boundary or relaxing the acceptance threshold.
            </p>
            <p>
              The revised mesh passed at 11.404° with 2,766,505 nodes and 1,261,670 quadratic triangular elements. That result established a defensible input for the full microstructure model rather than forcing a mechanically convenient geometry.
            </p>
          </div>
          <FigureCard
            src="/images/young-dawgs/mesh-before-after.png"
            caption="Local comparison of the rejected and accepted fine meshes. The boundary is unchanged while midside placement and element quality improve."
            fit="contain"
          />
        </div>
        <FigureCard
          src="/images/young-dawgs/ansys-compression-setup.png"
          caption="Full 10.24 × 10.24 mm specimen between separate rigid contact plates. The imported model retains all 412 pores."
          wide
          fit="contain"
        />
      </Section>

      <Section id="checkpoint" title="The current result is one accepted loading point - not yet a material curve" kicker="ANSYS compression">
        <div className="space-y-6">
          <div className="grid gap-6 lg:grid-cols-2">
            <FigureCard
              src="/images/young-dawgs/ansys-displacement.png"
              caption="Recovered vertical displacement and displacement magnitude at the accepted 0.005% compression checkpoint."
              fit="contain"
            />
            <FigureCard
              src="/images/young-dawgs/ansys-stress.png"
              caption="Recovered normal and equivalent stress fields from the same independently checked native result."
              fit="contain"
            />
          </div>
          <div className="grid gap-10 lg:grid-cols-[1.2fr,0.8fr]">
            <div className="space-y-5">
              <p>
                The v0.6.5 recovery produced one accepted, nonzero measurement for the complete 412-pore model at 0.005% engineering compression. The imposed plate travel was 0.000512 mm, and the recovered nominal compression stress was approximately 0.00590 MPa.
              </p>
              <p>
                This checkpoint demonstrates that the geometry, contact model, solution, and native ANSYS result can be recovered and audited together. It does not establish an effective modulus, stress-strain curve, or comparative material ranking.
              </p>
            </div>
            <PullQuote>Scientific progress here is the verified checkpoint and its evidence chain - not a larger claim than the data supports.</PullQuote>
          </div>
        </div>
      </Section>

      <Section id="next" title="The next stage is sensitivity qualification before additional loading" kicker="Current work">
        <DecisionGrid
          columns={2}
          items={[
            {
              label: 'Repeatability',
              title: 'Reproduce the accepted checkpoint',
              detail: 'Confirm that the same model and evidence path produce consistent fields, reactions, and contact behavior.',
            },
            {
              label: 'Numerics',
              title: 'Qualify mesh and contact sensitivity',
              detail: 'Determine whether the recovered response is stable to justified changes in discretization, contact settings, and output handling.',
            },
            {
              label: 'Loading',
              title: 'Add strain points prospectively',
              detail: 'Only after the checkpoint is qualified should the model advance toward a small multi-point response sequence.',
            },
            {
              label: 'Research boundary',
              title: 'Preserve provisional assumptions',
              detail: 'Material properties, plane-stress thickness, and loading choices remain computational assumptions until independently justified.',
            },
          ]}
        />
        <ProjectActions
          primary={{ href: 'https://engineering.uga.edu/team_member/xianqiao-wang/', label: 'View the UGA lab profile', external: true }}
          secondary={{ href: '/contact', label: 'Discuss the research' }}
        />
      </Section>
    </main>
  );
}
