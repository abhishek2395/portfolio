"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

/*
 * Pipeline stages — the real flow: requirement doc in, policies found,
 * comparison SQL across two Snowflake layers, graded validation run,
 * analysis out as a summary + QA test plan.
 */
const STAGES = [
  {
    title: "Requirement Doc",
    sub: ["dropped in by", "the user"],
    cx: 88,
    input: true,
  },
  {
    title: "Policy Agent",
    sub: ["finds every policy", "in scope"],
    cx: 294,
    input: false,
  },
  {
    title: "SQL Agent",
    sub: ["compares two", "Snowflake layers"],
    cx: 500,
    input: false,
  },
  {
    title: "Validation Run",
    sub: ["13 checks per policy", "PASS / WARN / FAIL"],
    cx: 706,
    input: false,
  },
  {
    title: "Analysis Agent",
    sub: ["summary + test plan", "→ qTest / JIRA"],
    cx: 912,
    input: false,
  },
];

/* ─── Flowing pipeline diagram (desktop) ─── */
function FlowDiagram() {
  const ref = useRef<SVGSVGElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  const appear = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 10 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.55, delay, ease },
  });

  const fade = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0 },
    animate: inView ? { opacity: 1 } : {},
    transition: { duration: 0.5, delay, ease },
  });

  return (
    <svg
      ref={ref}
      viewBox="0 0 1000 264"
      fill="none"
      className="hidden w-full sm:block"
      role="img"
      aria-label="Pipeline diagram: a requirement document flows through a policy-extraction agent, a SQL agent comparing two Snowflake layers, a validation run grading every policy PASS, WARN or FAIL across 13 checks, and an analysis agent producing a summary and a QA test plan for qTest or JIRA — coordinated by an orchestrator"
    >
      {/* Orchestrator rail */}
      <motion.g {...appear(0)}>
        <rect x="230" y="12" width="540" height="40" rx="10" fill="#1a1a13" stroke="#a8d060" strokeOpacity="0.5" />
        <text x="500" y="37" textAnchor="middle" fill="#ece9e0" fontSize="13" fontFamily="var(--font-jetbrains)">
          ORCHESTRATOR · plans · routes · retries
        </text>
      </motion.g>

      {/* Control drop-lines to agent stages */}
      {STAGES.filter((s) => !s.input).map((s, i) => (
        <motion.line
          key={`drop-${s.title}`}
          x1={s.cx}
          y1="52"
          x2={s.cx}
          y2="160"
          stroke="#a8d060"
          strokeOpacity="0.22"
          {...fade(0.35 + i * 0.1)}
        />
      ))}

      {/* Stage nodes */}
      {STAGES.map((s, i) => (
        <motion.g key={s.title} {...appear(0.25 + i * 0.14)}>
          <rect
            x={s.cx - 88}
            y="160"
            width="176"
            height="84"
            rx="12"
            fill="#14140f"
            stroke={s.input ? "#a4a094" : "#ece9e0"}
            strokeOpacity={s.input ? 0.4 : 0.16}
            strokeDasharray={s.input ? "5 5" : undefined}
          />
          <text x={s.cx} y="192" textAnchor="middle" fill="#ece9e0" fontSize="14" fontFamily="var(--font-jetbrains)">
            {s.title}
          </text>
          {s.sub.map((line, li) => (
            <text
              key={line}
              x={s.cx}
              y={212 + li * 15}
              textAnchor="middle"
              fill={line.includes("PASS") ? "#a8d060" : "#a4a094"}
              fontSize="11"
              fontFamily="var(--font-jetbrains)"
            >
              {line}
            </text>
          ))}
        </motion.g>
      ))}

      {/* Flowing data connectors between stages */}
      {STAGES.slice(0, -1).map((s, i) => (
        <motion.g key={`link-${s.title}`} {...fade(0.45 + i * 0.14)}>
          <line
            className="flow-line"
            x1={s.cx + 88}
            y1="202"
            x2={s.cx + 112}
            y2="202"
            stroke="#a8d060"
            strokeOpacity="0.75"
            strokeWidth="1.5"
          />
          <polygon
            points={`${s.cx + 118},202 ${s.cx + 110},197.5 ${s.cx + 110},206.5`}
            fill="#a8d060"
            fillOpacity="0.75"
          />
        </motion.g>
      ))}
    </svg>
  );
}

/* ─── Stacked mobile variant ─── */
function FlowStack() {
  return (
    <div className="flex flex-col items-stretch gap-3 sm:hidden">
      <div className="mx-auto rounded-full border border-moss/50 bg-panel-2 px-5 py-2">
        <p className="font-mono text-[11px] text-paper">
          ORCHESTRATOR · plans · routes · retries
        </p>
      </div>
      <div className="mx-auto h-4 w-px bg-moss/40" />
      {STAGES.map((s, i) => (
        <div key={s.title} className="flex flex-col gap-3">
          <div
            className={`rounded-xl border bg-panel px-4 py-3 text-center ${
              s.input ? "border-dashed border-fog/40" : "border-line"
            }`}
          >
            <p className="font-mono text-[13px] text-paper">{s.title}</p>
            <p className="font-mono text-[10px] text-fog">{s.sub.join(" ")}</p>
          </div>
          {i < STAGES.length - 1 && (
            <div className="mx-auto h-4 w-px bg-moss/40" />
          )}
        </div>
      ))}
    </div>
  );
}

/* ─── Verdict + checks strip under the diagram ─── */
function ChecksStrip() {
  return (
    <div className="mt-2 flex flex-col gap-4 border-t border-line pt-5 sm:mt-6 sm:flex-row sm:items-center sm:justify-between">
      <p className="font-mono text-[11px] leading-5 text-fog">
        13 automated checks — domain rules · null checks · constraints · 1:1
        mapping · derivation logic
      </p>
      <div className="flex shrink-0 gap-2">
        <span className="rounded-md bg-moss/15 px-3 py-1.5 font-mono text-[11px] text-moss">
          PASS
        </span>
        <span className="rounded-md bg-[#3d3420] px-3 py-1.5 font-mono text-[11px] text-[#d9b45b]">
          WARN
        </span>
        <span className="rounded-md bg-[#3d2620] px-3 py-1.5 font-mono text-[11px] text-[#e08b6d]">
          FAIL
        </span>
      </div>
    </div>
  );
}

const PILLS = [
  "Claude Sonnet",
  "Snowflake MCP",
  "Python",
  "Agent Orchestration",
  "LLM-as-judge Evaluation",
  "qTest · JIRA",
];

export default function ChapterAgents() {
  return (
    <section id="work" className="scroll-mt-16 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        {/* Header — same shape as Exhibits 02 & 03 */}
        <div className="mb-16 flex max-w-[720px] flex-col gap-6">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-moss">
              Exhibit 01 · Production
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-paper">
              Four agents, one orchestrator, zero manual QA.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-7 text-fog">
              Built for a Fortune 500 US financial institution (via TCS). Drop
              in a requirements document and the pipeline takes over — one
              agent extracts every policy in scope, the next writes SQL to
              compare the data across two Snowflake layers, a validation run
              grades every policy{" "}
              <span className="font-mono text-[14px] text-moss">PASS</span> /{" "}
              <span className="font-mono text-[14px] text-[#d9b45b]">WARN</span> /{" "}
              <span className="font-mono text-[14px] text-[#e08b6d]">FAIL</span>{" "}
              against 13 automated checks, and an analysis agent turns the
              results into a summary plus a QA-ready test plan you can file
              straight into qTest or JIRA.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="text-base leading-7 text-fog">
              I owned the product end to end: defined acceptance criteria and
              the quality bar, built evaluation datasets, ran LLM-as-judge
              scoring for accuracy and hallucination before ship, and added the
              governance a regulated environment demands — audit logging,
              access controls, human-in-the-loop on sensitive steps. It
              replaced a fully manual QA process and reached{" "}
              <span className="text-paper">98% automation</span> with{" "}
              <span className="text-paper">90% fewer errors</span>.
            </p>
          </Reveal>
        </div>

        {/* The flowing pipeline */}
        <Reveal delay={0.15}>
          <div className="rounded-[24px] border border-line bg-panel/60 p-6 shadow-[0_0_80px_rgba(106,169,49,0.07)] sm:p-10">
            <FlowDiagram />
            <FlowStack />
            <ChecksStrip />
          </div>
        </Reveal>

        {/* Stack pills */}
        <Reveal delay={0.25}>
          <div className="mt-10 flex flex-wrap gap-2.5">
            {PILLS.map((p) => (
              <span
                key={p}
                className="rounded-full border border-line bg-panel px-4 py-2 font-mono text-[12px] text-fog"
              >
                {p}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
