import React from "react";

type ExperienceItem = {
  company: string;
  role: string;
  location?: string;
  dates: string;
  highlights: string[];
  stack?: string[];
};

const EXPERIENCE: ExperienceItem[] = [
  {
    company: "PayPal",
    role: "AI Engineer / AI Application Developer",
    location: "Austin, TX",
    dates: "2024 – Present",
    highlights: [
      "Built production GenAI features (RAG + tools) to reduce time-to-answer for internal support and knowledge workflows.",
      "Designed evaluation pipelines (golden sets, regression checks, qualitative rubrics) to measure answer quality and prevent prompt drift.",
      "Improved retrieval quality via chunking strategy, metadata filters, and embedding tuning; reduced hallucinations with citation-first responses.",
      "Implemented guardrails: input validation, policy-safe tool execution, and fallback routing to deterministic flows for high-risk queries.",
    ],
    stack: ["Python", "TypeScript", "LangChain/LangGraph", "Vector DB", "AWS", "Observability"],
  },
  {
    company: "Accenture",
    role: "AI Engineer (NLP / GenAI)",
    location: "India",
    dates: "2022 – 2024",
    highlights: [
      "Delivered NLP systems for classification and entity extraction across large enterprise datasets.",
      "Developed scalable APIs for model inference with caching, batching, and structured logging.",
      "Partnered with stakeholders to translate business requirements into measurable ML outcomes and SLAs.",
    ],
    stack: ["Python", "Transformers", "REST APIs", "Docker", "MLflow"],
  },
  {
    company: "Ford Motor Company",
    role: "Software / Data Engineer (Connected Services)",
    location: "India",
    dates: "2021 – 2022",
    highlights: [
      "Built analytics pipelines for vehicle/telemetry insights and reliability reporting.",
      "Automated dashboards and monitoring to improve visibility into system performance and anomalies.",
    ],
    stack: ["Python", "SQL", "Cloud", "Dashboards"],
  },
];

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm leading-6">
      {children}
    </span>
  );
}

export default function App() {
  return (
    <div className="min-h-screen">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-black/40">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <div className="font-semibold tracking-tight">Amulya Kantamneni</div>
          <nav className="flex items-center gap-4 text-sm">
            <a className="hover:underline" href="#experience">Experience</a>
            <a className="hover:underline" href="#projects">Projects</a>
            <a className="hover:underline" href="#contact">Contact</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4">
        {/* Hero */}
        <section className="grid gap-10 py-12 md:grid-cols-[1.2fr_.8fr] md:py-16">
          <div>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              AI Engineer • GenAI Application Developer • Full-Stack ML Systems
            </p>

            <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
              Building reliable AI products that feel fast, safe, and useful.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-7 text-neutral-700 dark:text-neutral-300">
              I design and ship LLM-powered applications (RAG, agents, tooling, evals) with strong
              engineering fundamentals: performance, observability, and clean UX.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                className="rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white hover:opacity-90 dark:bg-white dark:text-black"
                href="/Amulya_Kantamneni_Resume.pdf"
                download
              >
                Download Resume
              </a>

              <a
                className="rounded-xl border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/10"
                href="mailto:youremail@example.com"
              >
                Email
              </a>

              <a
                className="rounded-xl border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/10"
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              <Pill>RAG + Agents</Pill>
              <Pill>LLM Evaluation</Pill>
              <Pill>Tooling + Guardrails</Pill>
              <Pill>MLOps + Deployment</Pill>
            </div>
          </div>

          <div className="flex items-start justify-center md:justify-end">
            <div className="w-full max-w-sm rounded-2xl border bg-white p-4 shadow-sm dark:bg-black/20">
              <img
                src="/amulya.jpg"
                alt="Amulya Kantamneni"
                className="aspect-square w-full rounded-xl object-cover"
              />
              <div className="mt-4">
                <div className="text-sm font-medium">Amulya Kantamneni</div>
                <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                  Open to AI/ML Engineer & GenAI roles
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Experience</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-neutral-700 dark:text-neutral-300">
            Recent work focused on shipping production GenAI systems: retrieval quality, evaluation,
            tool reliability, and UX that earns trust.
          </p>

          <div className="mt-8 space-y-4">
            {EXPERIENCE.map((job) => (
              <article key={`${job.company}-${job.role}`} className="rounded-2xl border bg-white p-6 shadow-sm dark:bg-black/20">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <div className="text-base font-semibold">
                      {job.role} · {job.company}
                    </div>
                    <div className="mt-1 text-sm text-neutral-600 dark:text-neutral-300">
                      {job.location ? `${job.location} · ` : ""}{job.dates}
                    </div>
                  </div>
                  {job.stack?.length ? (
                    <div className="flex flex-wrap gap-2">
                      {job.stack.slice(0, 6).map((s) => (
                        <span key={s} className="rounded-full border px-3 py-1 text-xs">
                          {s}
                        </span>
                      ))}
                    </div>
                  ) : null}
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-neutral-800 dark:text-neutral-200">
                  {job.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Projects placeholder */}
        <section id="projects" className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Add 3–6 projects here with: problem → approach → impact → link.
          </p>
        </section>

        {/* Contact */}
        <section id="contact" className="py-12">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-sm text-neutral-700 dark:text-neutral-300">
            Reach out for roles, collaborations, or feedback.
          </p>

          <div className="mt-4 flex flex-wrap gap-3">
            <a
              className="rounded-xl border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 dark:hover:bg-white/10"
              href="mailto:youremail@example.com"
            >
              youremail@example.com
            </a>
          </div>
        </section>

        <footer className="border-t py-8 text-sm text-neutral-600 dark:text-neutral-300">
          © {new Date().getFullYear()} Amulya Kantamneni
        </footer>
      </main>
    </div>
  );
}
