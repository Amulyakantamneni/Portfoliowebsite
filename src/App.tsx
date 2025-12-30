import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Impact from "@/components/Impact";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about" className="scroll-mt-24">
          <About />
        </section>

        <section id="experience" className="scroll-mt-24">
          <Experience />
        </section>

        <section id="impact" className="scroll-mt-24">
          <Impact />
        </section>

        <section id="projects" className="scroll-mt-24">
          <Projects />
        </section>

        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
    </div>
  );
}
