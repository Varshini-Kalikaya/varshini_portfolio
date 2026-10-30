import { skillGroups } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/Reveal";

const Skills = () => (
  <section id="skills" data-testid="skills-section" className="scroll-mt-20 border-t border-border bg-card/40">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        index="04"
        label="Skills"
        title={<>The stack I study <span className="text-primary">and build with.</span></>}
        sub="Honest tags, no percentage bars — these are tools I can discuss, demonstrate and keep learning."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={i * 0.06}>
            <div
              data-testid={`skill-group-${g.title.toLowerCase().replace(/[^a-z]+/g, "-")}`}
              className="card-lift h-full rounded-2xl border border-border bg-card p-7"
            >
              <p className="font-mono text-xs uppercase tracking-[0.22em] text-primary">{`0${i + 1}`}</p>
              <h3 className="mt-3 font-display text-xl font-semibold">{g.title}</h3>
              <div className="mt-5 flex flex-wrap gap-2">
                {g.skills.map((s) => (
                  <span key={s} className="rounded-full bg-secondary px-3.5 py-1.5 text-sm text-secondary-foreground">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
