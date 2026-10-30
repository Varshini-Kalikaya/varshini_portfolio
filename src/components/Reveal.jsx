import { motion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

export const SectionHeading = ({ index, label, title, sub }) => (
  <div className="max-w-3xl">
    <Reveal>
      <p className="eyebrow flex items-center gap-3">
        <span className="text-primary">{index}</span>
        <span className="h-px w-10 bg-primary/50" aria-hidden="true" />
        {label}
      </p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-5 font-display text-3xl font-semibold leading-[1.05] tracking-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </Reveal>
    {sub ? (
      <Reveal delay={0.16}>
        <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">{sub}</p>
      </Reveal>
    ) : null}
  </div>
);
