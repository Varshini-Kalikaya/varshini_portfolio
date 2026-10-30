import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks } from "@/lib/data";
import { scrollToSection } from "@/lib/scroll";

const LogoMark = () => (
  <svg width="30" height="30" viewBox="0 0 64 64" aria-hidden="true">
    <rect width="64" height="64" rx="14" className="fill-foreground" />
    <path d="M18 19 L32 46 L46 19" fill="none" className="stroke-background" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="49" cy="43" r="4" className="fill-background" />
  </svg>
);

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() =>
    typeof document !== "undefined" && document.documentElement.classList.contains("dark") ? "dark" : "light"
  );

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", next === "dark");
    try {
      localStorage.setItem("vk-theme", next);
    } catch (e) {}
    setTheme(next);
  };

  return (
    <button
      data-testid="theme-toggle"
      onClick={toggle}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className="group relative flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card text-foreground transition-colors hover:border-primary/60 hover:text-primary"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="flex"
        >
          {theme === "dark" ? <Sun size={17} /> : <Moon size={17} />}
        </motion.span>
      </AnimatePresence>
    </button>
  );
};

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (e, hash) => {
    e.preventDefault();
    setOpen(false);
    scrollToSection(hash);
  };

  return (
    <header
      data-testid="site-nav"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <a
          href="#home"
          data-testid="nav-logo"
          onClick={(e) => go(e, "#home")}
          className="flex items-center gap-3"
        >
          <LogoMark />
          <span className="font-display text-lg font-semibold tracking-tight">Varshini</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <a
              key={l.hash}
              href={l.hash}
              data-testid={`nav-link-${l.label.toLowerCase()}`}
              onClick={(e) => go(e, l.hash)}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            data-testid="nav-cta"
            onClick={(e) => go(e, "#contact")}
            className="hidden rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.04] sm:inline-flex"
          >
            Let's Collaborate
          </a>
          <button
            data-testid="nav-mobile-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card md:hidden"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-b border-border bg-background/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1 px-5 py-4">
              {navLinks.map((l) => (
                <a
                  key={l.hash}
                  href={l.hash}
                  data-testid={`nav-mobile-link-${l.label.toLowerCase()}`}
                  onClick={(e) => go(e, l.hash)}
                  className="rounded-lg px-3 py-3 font-display text-xl font-medium transition-colors hover:bg-muted"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Nav;
