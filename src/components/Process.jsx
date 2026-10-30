import { processSteps } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/Reveal";

const Process = () => (
  <section id="process" data-testid="process-section" className="scroll-mt-20 border-t border-border bg-card/40">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        index="06"
        label="Work Process"
        title={<>Simple, transparent, <span className="text-primary">four steps.</span></>}
        sub="No surprises — you always know what's happening and what comes next."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((s, i) => (
          <Reveal key={s.num} delay={i * 0.08}>
            <div
              data-testid={`process-step-${s.num}`}
              className="card-lift relative h-full rounded-2xl border border-border bg-card p-7"
            >
              <p className="font-mono text-4xl font-bold text-primary/25">{s.num}</p>
              <h3 className="mt-6 font-display text-lg font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
              {i < processSteps.length - 1 && (
                <span className="absolute right-4 top-9 hidden h-px w-8 bg-border lg:block" aria-hidden="true" />
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
