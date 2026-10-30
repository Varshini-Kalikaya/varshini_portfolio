import { useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { scrollToSection } from "@/lib/scroll";

const EASE = [0.22, 1, 0.36, 1];

const MaskedLine = ({ children, delay }) => (
  <span className="block overflow-hidden pb-1">
    <motion.span
      initial={{ y: "110%" }}
      animate={{ y: 0 }}
      transition={{ duration: 0.95, delay, ease: EASE }}
      className="block"
    >
      {children}
    </motion.span>
  </span>
);

const chips = [
  { label: "Full-Stack Dev", className: "left-[-8%] top-[14%]", delay: "0s" },
  { label: "Python", className: "right-[-6%] top-[42%]", delay: "1.2s" },
  { label: "Creative Design", className: "bottom-[10%] left-[6%]", delay: "2.1s" },
];

const Hero = () => {
  const sectionRef = useRef(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotY = useSpring(useTransform(mx, [-1, 1], [7, -7]), { stiffness: 60, damping: 14 });
  const rotX = useSpring(useTransform(my, [-1, 1], [-5, 5]), { stiffness: 60, damping: 14 });
  const { scrollY } = useScroll();
  const ghostY = useTransform(scrollY, [0, 700], [0, 140]);
  const imgY = useTransform(scrollY, [0, 700], [0, 60]);

  const onMouseMove = (e) => {
    const r = sectionRef.current?.getBoundingClientRect();
    if (!r) return;
    mx.set(((e.clientX - r.left) / r.width) * 2 - 1);
    my.set(((e.clientY - r.top) / r.height) * 2 - 1);
  };

  return (
    <section id="home" ref={sectionRef} onMouseMove={onMouseMove} className="relative min-h-screen overflow-hidden pt-[72px]">
      <motion.span
        aria-hidden="true"
        style={{ y: ghostY }}
        className="pointer-events-none absolute -bottom-8 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] font-bold leading-none tracking-tight text-foreground/[0.035]"
      >
        VARSHINI
      </motion.span>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-5 pb-20 pt-10 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:gap-8 lg:pt-16">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
            data-testid="hero-badge"
            className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
            </span>
            Open to Freelance Projects
          </motion.p>

          <h1 className="mt-8 font-display text-[13vw] font-semibold leading-[0.98] tracking-tight sm:text-7xl lg:text-[5.4rem]">
            <MaskedLine delay={0.15}>Building Digital</MaskedLine>
            <MaskedLine delay={0.28}>Experiences That</MaskedLine>
            <MaskedLine delay={0.41}>
              <span className="text-stroke">Stand Out.</span>
            </MaskedLine>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: EASE }}
            className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I'm Varshini, an aspiring developer passionate about building web applications,
            intelligent APIs, and creative digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8, ease: EASE }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button
              data-testid="hero-cta-projects"
              onClick={() => scrollToSection("#projects")}
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
            >
              View My Work
              <ArrowDown size={16} className="transition-transform duration-300 group-hover:translate-y-0.5" />
            </button>
            <button
              data-testid="hero-cta-contact"
              onClick={() => scrollToSection("#contact")}
              className="inline-flex items-center gap-2 rounded-full border border-foreground/25 px-7 py-3.5 text-sm font-semibold transition-colors duration-300 hover:border-primary hover:text-primary"
            >
              Let's Collaborate
            </button>
            <a
              href="/resume.pdf"
              data-testid="hero-resume"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-2 py-3.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary"
            >
              <Download size={15} />
              Download Resume
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: EASE }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <motion.div
            initial="false"
            style={{ rotateX: rotX, rotateY: rotY, transformPerspective: 1000 }}
            className="relative"
          >
            <div className="absolute -inset-3 -rotate-2 rounded-[2rem] border border-primary/30" aria-hidden="true" />
            <motion.div style={{ y: imgY }} className="relative overflow-hidden rounded-[2rem] border border-border shadow-2xl">
              <img
                src="/images/profile.jpg"
                alt="Portrait of Kalikaya Varshini"
                data-testid="hero-portrait"
                className="aspect-square w-full object-cover"
              />
            </motion.div>
            {chips.map((c) => (
              <span
                key={c.label}
                style={{ animationDelay: c.delay }}
                className={`floaty absolute ${c.className} rounded-full border border-border bg-background/90 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.14em] shadow-lg backdrop-blur`}
              >
                {c.label}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
