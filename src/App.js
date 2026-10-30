import { useEffect, Component } from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import { setLenis } from "@/lib/scroll";
import { Toaster } from "@/components/ui/sonner";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Gallery from "@/components/Gallery";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
          <p className="font-mono text-sm">Something went wrong — please refresh the page.</p>
        </div>
      );
    }
    return this.props.children;
  }
}

const Home = () => (
  <div className="relative min-h-screen overflow-x-clip bg-background text-foreground">
    <div className="grain" aria-hidden="true" />
    <Nav />
    <main>
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Gallery />
      <Process />
      <Contact />
    </main>
    <Footer />
    <Toaster position="bottom-right" />
  </div>
);

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    setLenis(lenis);
    let raf;
    const loop = (t) => {
      lenis.raf(t);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      setLenis(null);
    };
  }, []);

  return (
    <ErrorBoundary>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
