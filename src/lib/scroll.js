let lenis = null;

export const setLenis = (instance) => {
  lenis = instance;
};

export const scrollToSection = (hash) => {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenis) {
    lenis.scrollTo(el, { offset: -72, duration: 1.2 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
};
