import { ArrowUpRight } from "lucide-react";
import { stickers } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/Reveal";
import { scrollToSection } from "@/lib/scroll";

const Gallery = () => (
  <section id="gallery" data-testid="gallery-section" className="scroll-mt-20 border-t border-border">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        index="05"
        label="Creative Gallery"
        title={<>Original sticker <span className="text-primary">designs.</span></>}
        sub="A peek at my Gen Z-inspired sticker line — expressive characters, cool typography and everyday phrases, drawn for laptops, notebooks and water bottles. All concepts are original."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {stickers.map((s, i) => (
          <Reveal key={s.name} delay={i * 0.07}>
            <figure data-testid={`gallery-card-${i}`} className="group">
              <div className="overflow-hidden rounded-2xl border border-border">
                <img
                  src={s.image}
                  alt={`Original sticker design: ${s.name}`}
                  className="aspect-square w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] group-hover:rotate-1"
                />
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="font-display text-lg font-medium">{s.name}</span>
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{s.tag}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}

        <Reveal delay={0.35}>
          <button
            data-testid="gallery-custom-cta"
            onClick={() => scrollToSection("#contact")}
            className="group flex h-full min-h-[280px] w-full flex-col justify-between rounded-2xl bg-foreground p-8 text-left text-background"
          >
            <p className="font-mono text-[11px] uppercase tracking-[0.22em] opacity-70">Ask About Custom Designs</p>
            <div>
              <p className="font-display text-2xl font-semibold leading-snug">
                Want a sticker pack for your brand, event or community?
              </p>
              <span className="mt-5 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.18em]">
                Let's design one together
                <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </button>
        </Reveal>
      </div>
    </div>
  </section>
);

export default Gallery;
