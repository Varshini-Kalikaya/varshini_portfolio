import { Award, BadgeCheck, GraduationCap, MapPin } from "lucide-react";
import { certifications, exploringChips, highlights } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/Reveal";

const About = () => (
  <section id="about" data-testid="about-section" className="scroll-mt-20">
    <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading index="01" label="About Me" title={<>A developer with a <span className="text-primary">designer's eye.</span></>} />

      <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <Reveal>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground sm:text-lg">
              <p>
                I'm Varshini, an Information Technology student at Vignan's Lara Institute of
                Technology and Science. I enjoy the full journey of building software — shaping
                the frontend, wiring up the backend, and everything in between.
              </p>
              <p>
                Most of my time goes into Python, React and FastAPI, with a growing interest in
                cloud technologies, API security and AI-powered applications. I learn by building:
                from a cloud reliability platform to an API security analyzer and an AI document
                analysis tool.
              </p>
              <p>
                Away from code, I design Gen Z-inspired stickers — a creative outlet that keeps my
                eye for detail sharp.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mt-12">Currently exploring</p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {exploringChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm transition-colors duration-300 hover:border-primary/60 hover:text-primary"
                >
                  {chip}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 sm:flex-row sm:items-center">
              <img
                src="/images/profile.jpg"
                alt="Kalikaya Varshini"
                className="h-16 w-16 rounded-xl object-cover"
              />
              <div>
                <p className="font-display text-lg font-semibold">Kalikaya Varshini</p>
                <p className="text-sm text-muted-foreground">Developer · Designer · Learner</p>
                <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1.5">
                    <GraduationCap size={13} className="text-primary" /> B.Tech in Information Technology — Vignan's Lara
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={13} className="text-primary" /> India · working remotely
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Award size={13} className="text-primary" /> NCC 'B' Certificate holder
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div>
          <Reveal>
            <p className="eyebrow">Experience & Highlights</p>
            <div className="mt-6 divide-y divide-border border-y border-border">
              {highlights.map((h) => (
                <div key={h.title} className="group flex items-start gap-4 py-5">
                  <BadgeCheck size={18} className="mt-1 shrink-0 text-primary" />
                  <div>
                    <p className="font-display text-lg font-medium transition-colors group-hover:text-primary">
                      {h.title}
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">{h.org}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="eyebrow mt-12">Certifications</p>
            <ul className="mt-6 space-y-3">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </div>
  </section>
);

export default About;
