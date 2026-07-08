import Reveal from "./Reveal";

const ITEMS = [
  {
    period: "2021 — Now",
    role: "Senior Analyst, Product & AI Engineering",
    org: "Tata Consultancy Services · Fortune 500 financial services client · Plano, TX",
    points: [
      "Owned roadmap and PRDs for an internal analytics platform serving Finance, Operations, and Product — cut executive time-to-insight by 30%",
      "Defined the evaluation and quality bar for a production multi-agent AI system shipped to 98% automation",
      "Led a 4-person data engineering team; drove delivery across engineering, data, and business stakeholders in Agile cycles",
      "Built governance and responsible-AI controls for a regulated environment — audit logging, access controls, human-in-the-loop review",
    ],
  },
  {
    period: "2020",
    role: "Data Analyst, Ad Intelligence Product",
    org: "Airfind Corp · Remote, US",
    points: [
      "Took product ownership of an early-stage ad analytics product — KPIs, A/B test methodology, behavior dashboards; recommendations drove 15% revenue growth",
    ],
  },
  {
    period: "2017 — 2019",
    role: "Research Analyst, Automation & Data Quality",
    org: "Media.Net Software Services · Mumbai, India",
    points: [
      "Built Python and SQL automation pipelines for data quality and analytics workflows — cut processing time 40%",
    ],
  },
  {
    period: "2019 — 2020",
    role: "MS, Information Technology & Analytics",
    org: "Rutgers University · Newark, NJ · GPA 3.83",
    points: [
      "Machine learning & statistics, data analysis & visualization, business analytics programming",
    ],
  },
];

const CERTS = [
  "AWS Certified AI Practitioner (AIF-C01) · Active",
  "AI for Product Management · Pendo",
];

const SKILLS = [
  "AI Product Management",
  "Product Strategy",
  "PRDs",
  "Roadmapping",
  "User Discovery",
  "LLM Evaluation",
  "LLM-as-judge",
  "Eval Pipeline Design",
  "Agentic Systems",
  "Multi-Agent Orchestration",
  "RAG",
  "Prompt Engineering",
  "Responsible AI",
  "Python",
  "SQL",
  "Snowflake",
  "AWS",
  "dbt",
  "Docker",
  "ETL & Data Pipelines",
  "A/B Testing",
  "KPI Design",
  "Agile / SCRUM",
  "Stakeholder Management",
];

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-16 border-t border-line py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="mb-14 flex flex-col gap-6">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-moss">
              Track record
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-paper">
              Experience
            </h2>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {ITEMS.map((item, i) => (
            <Reveal key={item.role} delay={0.08 * i}>
              <div className="grid gap-4 border-t border-line py-10 md:grid-cols-[180px_minmax(0,1fr)] md:gap-10">
                <p className="font-mono text-[13px] uppercase tracking-[0.14em] text-moss">
                  {item.period}
                </p>
                <div className="flex flex-col gap-3">
                  <h3 className="font-serif text-2xl leading-tight text-paper">
                    {item.role}
                  </h3>
                  <p className="font-mono text-[13px] text-fog">{item.org}</p>
                  <ul className="mt-2 flex flex-col gap-2.5">
                    {item.points.map((p) => (
                      <li key={p} className="flex gap-3 text-[15px] leading-7 text-fog">
                        <span className="mt-[13px] block h-1 w-1 shrink-0 rounded-full bg-moss/70" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15}>
          <div className="border-t border-line py-10">
            <p className="mb-4 font-mono text-[12px] uppercase tracking-[0.2em] text-fog">
              Skills at a glance
            </p>
            <p className="max-w-[920px] font-mono text-[13px] leading-7 text-fog">
              {SKILLS.join(" · ")}
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap gap-3 border-t border-line pt-10">
            {CERTS.map((c) => (
              <span
                key={c}
                className="rounded-full border border-moss/35 bg-moss/5 px-5 py-2.5 font-mono text-[12px] text-paper"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
