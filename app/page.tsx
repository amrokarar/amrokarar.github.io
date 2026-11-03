import Image from "next/image";

type Project = {
  name: string;
  href: string;
  blurb: string;
  tags: string[];
  image?: string;
  /** "cover" fills the tile (default); "contain" letterboxes a square logo on white. */
  imageFit?: "cover" | "contain";
};

const projects: Project[] = [
  {
    name: "Khana AI",
    href: "https://apps.apple.com/us/app/khana-recipe-organizer/id6755608632",
    image: "/khana.png",
    imageFit: "contain",
    blurb:
      "Paste a cooking video, get a recipe you can cook hands-free. Khana AI is an iOS app that turns TikTok, YouTube and Instagram cooking videos into clean, structured recipes, then a voice assistant walks you through the steps while you cook. I built it end to end: the SwiftUI app, the FastAPI backend, the extraction pipeline and the voice agent.",
    tags: [
      "iOS",
      "SwiftUI",
      "FastAPI",
      "MongoDB",
      "Gemini",
      "LiveKit Agents",
      "Voice AI",
    ],
  },
  {
    name: "Reframe",
    href: "https://github.com/tofu7654/reframe",
    image: "/reframe.svg",
    blurb:
      "A framework for dynamic UI that reshapes itself around how you actually work. Reframe watches usage patterns, spots your workflows, and offers a faster layout with the evidence behind it. You preview, accept, or undo. Nothing changes without your say. Safe by construction: declarative manifests, an approved component registry, zero runtime code generation. Built with TanStack Start, React, and TypeScript as a LinkedIn-style demo.",
    tags: [
      "Adaptive UI",
      "Human-centered AI",
      "Privacy-first",
      "Explainable recommendations",
      "React",
      "TypeScript",
      "Hackathon",
    ],
  },
];

const strengths = [
  {
    lead: "I measure before I optimize.",
    detail:
      "My biggest wins came from building the eval set first, then letting the numbers decide which model, prompt or architecture to keep.",
  },
  {
    lead: "I care about speed and cost, not only accuracy.",
    detail:
      "Both at Freddie Mac (60s to 12s) and in KhanaAI (p50 cut 50%), I got there by removing unnecessary LLM calls rather than adding bigger models.",
  },
  {
    lead: "I ship end to end.",
    detail:
      "I’ve taken an agent from design to a production release with external lenders, and built a consumer app alone, from SwiftUI to FastAPI, LiveKit voice agents, Firebase and MongoDB.",
  },
  {
    lead: "I can explain AI to non-engineers.",
    detail:
      "I’ve presented to everyone from interns to SVPs and lender executives, and helped business teams understand why an AI system is judged by how often it’s right, not by whether it’s “bug free.”",
  },
];

export default function Home() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16 sm:px-10 sm:py-24">
      <section>
        <h1 className="text-5xl font-normal sm:text-6xl">I’m Amro Karar.</h1>
        <p className="mt-10 text-lg leading-snug">
          I build agentic AI systems.
          <br />
          Evaluation first.
          <br />
          Fast and cost-aware.
          <br />
          Shipped end to end.
        </p>
      </section>

      <section id="projects" className="mt-28">
        <div className="grid gap-x-7 gap-y-14 sm:grid-cols-2">
          {projects.map((project) => {
            const external = project.href.startsWith("http");
            return (
              <article key={project.name} className="text-center">
                <a
                  href={project.href}
                  className="group block"
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                >
                  <div
                    className={`relative aspect-[16/10] w-full overflow-hidden transition ${
                      project.imageFit === "contain"
                        ? "bg-white"
                        : "bg-neutral-800 group-hover:bg-neutral-700"
                    }`}
                  >
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={`${project.name} icon`}
                        fill
                        unoptimized
                        className={`transition group-hover:scale-[1.03] ${
                          project.imageFit === "contain" ? "object-contain p-12" : "object-cover"
                        }`}
                      />
                    )}
                  </div>
                  <h2 className="mt-7 inline-block border-b border-current text-3xl uppercase font-normal">
                    {project.name}
                  </h2>
                </a>
                <p className="mx-auto mt-5 max-w-md text-left text-base leading-relaxed">
                  {project.blurb}
                </p>
                {project.tags.length > 0 && (
                  <p className="mx-auto mt-3 max-w-md text-left text-sm text-neutral-400">
                    {project.tags.join(" · ")}
                  </p>
                )}
              </article>
            );
          })}
        </div>
      </section>

      <section id="about" className="mt-28 max-w-2xl">
        <h2 className="text-3xl font-normal">About</h2>
        <div className="mt-6 space-y-4 text-lg leading-relaxed">
          <p>
            I’m an AI engineer who builds agentic systems that real people
            depend on. At Freddie Mac, I architected and was the primary
            engineer for the agentic layer of the company’s first
            external-facing agentic AI application, a LangGraph agent that
            helps lenders find the legal clauses that matter for loan
            compliance.
          </p>
          <p>
            I start with evaluation: before tuning anything, I work with
            subject-matter experts to build a labeled dataset and an
            LLM-as-a-judge harness, so every prompt or model change is
            measured, not guessed. That approach took the agent from about 70%
            to 95% accuracy in SME testing, and choosing the right model for
            each step, consolidating LLM calls and running independent nodes in
            parallel cut p95 latency from 60 seconds to 12.
          </p>
          <p>
            Before that, as an intern, I helped build Freddie Mac’s first GenAI
            platform, a RAG-based document Q&amp;A app used by more than 5,000
            employees.
          </p>
          <p>
            Outside work I build KhanaAI, an iOS app that turns TikTok,
            Instagram, YouTube and blog links into clean recipes and guides you
            through cooking with a real-time voice assistant. Its pipeline is
            deterministic first and only calls an LLM when it has to, which
            halved response time and kept costs down.
          </p>
        </div>

        <h3 className="mt-12 text-2xl font-normal">What I bring as an engineer</h3>
        <ul className="mt-6 space-y-4 text-lg leading-relaxed">
          {strengths.map((s) => (
            <li key={s.lead}>
              <span className="font-semibold">{s.lead}</span> {s.detail}
            </li>
          ))}
        </ul>
      </section>

      <section id="contact" className="mt-28 max-w-2xl">
        <h2 className="text-3xl font-normal">Contact</h2>
        <p className="mt-6 text-lg leading-relaxed">
          <a href="mailto:amrokarar@gmail.com" className="underline">
            amrokarar@gmail.com
          </a>
          <br />
          <a href="https://github.com/amrokarar" className="underline" target="_blank" rel="noopener noreferrer">GitHub</a>
          {" · "}
          <a href="https://www.linkedin.com/in/amro-karar-746417217/" className="underline" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </section>
    </main>
  );
}
