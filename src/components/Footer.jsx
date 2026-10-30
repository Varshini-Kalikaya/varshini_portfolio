import { ArrowUp } from "lucide-react";
import { EMAIL, GITHUB_PROFILE, LINKEDIN } from "@/lib/data";
import { scrollToSection } from "@/lib/scroll";

const Footer = () => (
  <footer data-testid="site-footer" className="border-t border-border">
    <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-5 py-10 sm:px-8 md:flex-row">
      <p className="font-mono text-xs text-muted-foreground">
        © {new Date().getFullYear()} Kalikaya Varshini — designed & built with care.
      </p>
      <div className="flex items-center gap-6">
        <a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer" data-testid="footer-github" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary">
          GitHub
        </a>
        <a href={LINKEDIN} target="_blank" rel="noopener noreferrer" data-testid="footer-linkedin" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary">
          LinkedIn
        </a>
        <a href={`mailto:${EMAIL}`} data-testid="footer-email" className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground transition-colors hover:text-primary">
          Email
        </a>
        <button
          data-testid="footer-back-to-top"
          onClick={() => scrollToSection("#home")}
          aria-label="Back to top"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors hover:border-primary hover:text-primary"
        >
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  </footer>
);

export default Footer;
