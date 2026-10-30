import { useState } from "react";
import { Github, Linkedin, Mail, Send } from "lucide-react";
import { toast } from "sonner";
import { budgetRanges, EMAIL, LINKEDIN, projectTypes } from "@/lib/data";
import { GITHUB_PROFILE } from "@/lib/data";
import { Reveal, SectionHeading } from "@/components/Reveal";

const contactRows = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}`, testid: "contact-email" },
  { icon: Linkedin, label: "LinkedIn", value: "kalikaya-varshini", href: LINKEDIN, testid: "contact-linkedin" },
  { icon: Github, label: "GitHub", value: "Varshini-Kalikaya", href: GITHUB_PROFILE, testid: "contact-github" },
];

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", type: projectTypes[0], budget: budgetRanges[0], description: "" });

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) {
      toast.error("Please fill in your name, email and project description.");
      return;
    }
    const subject = encodeURIComponent(`Project enquiry — ${form.type} from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nProject Type: ${form.type}\nBudget: ${form.budget}\n\n${form.description}`
    );
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
    toast.success("Opening your email app with the enquiry pre-filled.");
  };

  return (
    <section id="contact" data-testid="contact-section" className="scroll-mt-20 border-t border-border">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHeading
          index="07"
          label="Contact"
          title={<>Have a Project <span className="text-primary">in Mind?</span></>}
          sub="Let's turn your idea into something useful, creative, and well-built."
        />

        <div className="mt-14 grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="space-y-4">
              {contactRows.map((row) => (
                <Reveal key={row.label}>
                  <a
                    href={row.href}
                    target={row.href.startsWith("mailto") ? undefined : "_blank"}
                    rel="noopener noreferrer"
                    data-testid={row.testid}
                    className="card-lift flex items-center gap-4 rounded-2xl border border-border bg-card p-5"
                  >
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border text-primary">
                      <row.icon size={18} />
                    </span>
                    <span>
                      <span className="block font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{row.label}</span>
                      <span className="mt-1 block font-medium">{row.value}</span>
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <p className="mt-8 flex items-center gap-2.5 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute h-full w-full animate-ping rounded-full bg-green-500 opacity-70" />
                  <span className="relative h-2 w-2 rounded-full bg-green-500" />
                </span>
                Currently open to freelance & student projects
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <form
              onSubmit={submit}
              data-testid="contact-form"
              className="rounded-2xl border border-border bg-card p-7 sm:p-9"
            >
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Your Name *</span>
                  <input
                    data-testid="contact-input-name"
                    value={form.name}
                    onChange={set("name")}
                    placeholder="Jane Doe"
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Email *</span>
                  <input
                    data-testid="contact-input-email"
                    type="email"
                    value={form.email}
                    onChange={set("email")}
                    placeholder="jane@example.com"
                    className={inputCls}
                  />
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Project Type *</span>
                  <select data-testid="contact-input-type" value={form.type} onChange={set("type")} className={inputCls}>
                    {projectTypes.map((t) => (
                      <option key={t}>{t}</option>
                    ))}
                  </select>
                </label>
                <label className="block">
                  <span className="mb-2 block text-sm font-medium">Budget Range (optional)</span>
                  <select data-testid="contact-input-budget" value={form.budget} onChange={set("budget")} className={inputCls}>
                    {budgetRanges.map((b) => (
                      <option key={b}>{b}</option>
                    ))}
                  </select>
                </label>
              </div>
              <label className="mt-5 block">
                <span className="mb-2 block text-sm font-medium">Project Description *</span>
                <textarea
                  data-testid="contact-input-description"
                  value={form.description}
                  onChange={set("description")}
                  rows={5}
                  placeholder="Tell me about your idea, goals and timeline…"
                  className={`${inputCls} resize-none`}
                />
              </label>
              <button
                type="submit"
                data-testid="contact-submit"
                className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
              >
                <Send size={15} />
                Send Message
              </button>
              <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
                Your details are only used to reply to your enquiry — no newsletters, no spam.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
