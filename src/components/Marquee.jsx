import { Sparkle } from "lucide-react";
import { marqueeItems } from "@/lib/data";

const Sequence = ({ hidden }) => (
  <div aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
    {marqueeItems.map((item) => (
      <span key={item} className="flex items-center">
        <span className="whitespace-nowrap px-8 font-display text-2xl font-medium tracking-tight sm:text-3xl">
          {item}
        </span>
        <Sparkle size={18} className="shrink-0 text-primary" />
      </span>
    ))}
  </div>
);

const Marquee = () => (
  <section data-testid="skills-marquee" className="marquee overflow-hidden border-y border-border bg-card/50 py-7">
    <div className="marquee-track">
      <Sequence />
      <Sequence hidden />
    </div>
  </section>
);

export default Marquee;
