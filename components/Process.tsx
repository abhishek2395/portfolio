import Reveal from "./Reveal";

const STEPS = [
  {
    title: "Discover",
    body: "Start with the business problem, not the technology. Stakeholder interviews, metric deep-dives, and competitive research to understand what “good” looks like before a single line of code or PRD bullet.",
  },
  {
    title: "Define",
    body: "Translate ambiguous business needs into structured requirements — user stories, PRDs, and success metrics engineers can build against and stakeholders can sign off on.",
  },
  {
    title: "Prototype",
    body: "Build a working proof of concept fast — Python, LLM integrations, live UIs. Validate with real outputs, not slide decks. If it doesn't work in a notebook, it won't work in production.",
  },
  {
    title: "Ship",
    body: "Own delivery end to end in Agile sprints — from data pipeline and model integration through stakeholder UAT, validation, and go-live, for products used daily by 500+ people.",
  },
  {
    title: "Measure",
    body: "Define leading and lagging KPIs before launch, instrument tracking, and close the loop. No product is done at launch — it's done when the metrics prove it's working.",
  },
];

export default function Process() {
  return (
    <section id="process" className="scroll-mt-16 border-t border-line bg-panel/25 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="mb-14 flex max-w-[640px] flex-col gap-6">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-moss">
              Method
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-paper">
              How I work
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-7 text-fog">
              I don&apos;t separate &ldquo;technical&rdquo; from
              &ldquo;strategic.&rdquo; The best AI products get built when the
              person writing the Python also understands why the business needs
              it.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-x-8">
          {STEPS.map((s, i) => (
            <Reveal key={s.title} delay={0.1 + i * 0.08}>
              <div className="flex flex-col gap-4 border-t border-moss/30 pt-5">
                <span className="font-mono text-[12px] text-moss">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-serif text-2xl leading-none text-paper">
                  {s.title}
                </h3>
                <p className="text-sm leading-6 text-fog">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
