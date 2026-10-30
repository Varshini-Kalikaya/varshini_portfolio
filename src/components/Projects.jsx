import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { featuredProjects, GITHUB_PROFILE, liveApps } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/Reveal";

const FeaturedRow = ({ p, i }) => (
  <Reveal>
    <article
      data-testid={`project-card-${p.slug}`}
      className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16"
    >
      <div className={`group relative ${i % 2 === 1 ? "lg:order-2" : ""}`}>
        <div className="overflow-hidden rounded-2xl border border-border">
          <img
            src={p.image}
            alt={`${p.title} — ${p.badge}`}
            className="aspect-[3/2] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-border bg-background/90 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur">
          {p.badge}
        </span>
      </div>

      <div className={i % 2 === 1 ? "lg:order-1" : ""}>
        <p className="eyebrow">{p.eyebrow}</p>
        <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">{p.title}</h3>
        <p className="mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">{p.desc}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="rounded-full border border-border bg-card px-3.5 py-1.5 font-mono text-[11px] text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
        <a
          href={GITHUB_PROFILE}
          target="_blank"
          rel="noopener noreferrer"
          data-testid={`project-github-${p.slug}`}
          className="group mt-8 inline-flex items-center gap-2.5 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-transform duration-300 hover:scale-[1.04]"
        >
          <Github size={16} />
          View Project
          <ArrowUpRight size={15} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </article>
  </Reveal>
);

const LiveCard = ({ app, i }) => (
  <Reveal delay={i * 0.1}>
    <div
      data-testid={`live-app-${app.slug}`}
      className="card-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card"
    >
      <div className="relative">
        <img src={app.image} alt={`${app.title} live website preview`} className="aspect-[16/9] w-full object-cover object-top" />
        <span className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-border bg-background/90 px-3.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.18em] backdrop-blur">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
            <span className="relative h-1.5 w-1.5 rounded-full bg-green-500" />
          </span>
          Live · Deployed
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <p className="eyebrow">{app.eyebrow}</p>
        <h3 className="mt-3 font-display text-2xl font-semibold">{app.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{app.desc}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={app.demo}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`live-demo-${app.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.04]"
          >
            <ExternalLink size={14} />
            Visit Live Demo
          </a>
          <a
            href={app.repo}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={`repo-${app.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </div>
    </div>
  </Reveal>
);

const Projects = () => (
  <section id="projects" data-testid="projects-section" className="scroll-mt-20 border-t border-border">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading
        index="03"
        label="Featured Projects"
        title={<>Things I've designed <span className="text-primary">and built.</span></>}
        sub="A mix of full-stack platforms and creative work. The featured previews are illustrative product mockups — the apps in Live & Deployed are real, deployed products you can open right now."
      />

      <div className="mt-20 space-y-24">
        {featuredProjects.map((p, i) => (
          <FeaturedRow key={p.slug} p={p} i={i} />
        ))}
      </div>

      <div className="mt-28">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
              <span className="relative h-2.5 w-2.5 rounded-full bg-green-500" />
            </span>
            <p className="eyebrow">Live & Deployed</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
            Real apps, running <span className="text-primary">in production.</span>
          </h3>
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {liveApps.map((app, i) => (
            <LiveCard key={app.slug} app={app} i={i} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Projects;
