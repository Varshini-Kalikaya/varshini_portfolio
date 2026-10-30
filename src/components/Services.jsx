import { ArrowUpRight, Braces, Globe, Layers, Sticker } from "lucide-react";
import { services } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { scrollToSection } from "@/lib/scroll";

const icons = { globe: Globe, braces: Braces, layers: Layers, sticker: Sticker };

const Services = () => (
  <section id="services" data-testid="services-section" className="scroll-mt-20 border-t border-border bg-card/40">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        index="02"
        label="Services"
        title={<>What I can help you <span className="text-primary">build.</span></>}
        sub="Practical, honestly-scoped help for websites, APIs, full-stack apps and creative design work."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2">
        {services.map((s, i) => {
          const Icon = icons[s.icon];
          return (
            <Reveal key={s.title} delay={i * 0.08}>
              <div
                data-testid={`service-card-${s.icon}`}
                className="card-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-8"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-background text-primary transition-colors duration-300 group-hover:border-primary/50">
                  <Icon size={20} />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold sm:text-2xl">{s.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                <button
                  data-testid={`service-discuss-${s.icon}`}
                  onClick={() => scrollToSection("#contact")}
                  className="mt-6 inline-flex items-center gap-1.5 font-mono text-xs uppercase tracking-[0.18em] text-primary"
                >
                  Discuss a Project
                  <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </Reveal>
          );
        })}
      </div>
    </div>
  </section>
);

export default Services;
