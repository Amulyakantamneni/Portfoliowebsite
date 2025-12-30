import React, { useEffect, useMemo, useState } from "react";
import { Menu, X } from "lucide-react";

// ✅ update these imports to your actual component paths
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

type SectionId = "home" | "about" | "skills" | "projects" | "contact";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<SectionId>("home");

  const sections: SectionId[] = useMemo(
    () => ["home", "about", "skills", "projects", "contact"],
    []
  );

  const scrollTo = (id: SectionId) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      const OFFSET = 120; // fixed nav height-ish
      let current: SectionId = "home";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (y + OFFSET >= top) current = id;
      }

      setActiveSection(current);
    };

    const onResize = () => {
      if (window.innerWidth >= 768) setIsMenuOpen(false);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [sections]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <button
            onClick={() => scrollTo("home")}
            className="text-lg font-semibold tracking-tight"
            aria-label="Go to home"
          >
            AK<span className="text-blue-600">.</span>
          </button>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {sections.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className={`relative capitalize font-medium transition-colors ${
                  activeSection === item
                    ? "text-blue-600"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item}
                {activeSection === item && (
                  <span className="absolute -bottom-2 left-0 h-0.5 w-full bg-blue-600" />
                )}
              </button>
            ))}
          </div>

          {/* Mobile toggle */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <div className="mx-auto max-w-7xl px-6 py-3">
              {sections.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className={`block w-full py-2 text-left capitalize font-medium ${
                    activeSection === item
                      ? "text-blue-600"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* SECTIONS */}
      <main className="pt-20">
        {/* IMPORTANT: each component should render its own <section id="..."> */}
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
