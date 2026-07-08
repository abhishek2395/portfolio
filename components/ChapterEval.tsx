"use client";

import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const ease = [0.22, 1, 0.36, 1] as const;

/* Real trajectory scores from the agentic harness run, July 2026 */
const RUNS = [
  { model: "claude-sonnet-4.5", score: 5.0 },
  { model: "deepseek-v3", score: 5.0 },
  { model: "gpt-4o-mini", score: 5.0 },
  { model: "gemini-3.5-flash", score: 4.55 },
  { model: "llama-3.3-70b", score: 3.65 },
];

const FINDINGS = [
  {
    stat: "±0.5",
    text: "Swapping the judge model moves composite scores by up to half a point — judge choice is a product decision, not a detail.",
  },
  {
    stat: "12/15",
    text: "Pairwise model comparisons that look decisive on a leaderboard are statistical ties under bootstrap confidence intervals.",
  },
  {
    stat: "0 → ∅",
    text: "One frontier model hit a trap task honestly — searched four times, never fabricated — but also never answered. Invisible to single-turn evals.",
  },
];

/* ─── Terminal-styled score panel ─── */
function ScorePanel() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const reduce = useReducedMotion();

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-[20px] border border-line bg-panel/80"
    >
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
        <span className="h-3 w-3 rounded-full bg-[#3a3a30]" />
        <span className="h-3 w-3 rounded-full bg-[#3a3a30]" />
        <span className="h-3 w-3 rounded-full bg-moss/60" />
        <span className="ml-3 font-mono text-[12px] text-fog">
          agentic-harness · trajectory scores · live run jul 2026
        </span>
      </div>

      {/* Bars */}
      <div className="flex flex-col gap-5 px-6 py-7 sm:px-8">
        {RUNS.map((r, i) => (
          <div key={r.model} className="flex items-center gap-4">
            <span className="w-[130px] shrink-0 truncate text-right font-mono text-[12px] text-fog sm:w-[150px]">
              {r.model}
            </span>
            <div className="relative h-6 flex-1 overflow-hidden rounded-full bg-void/70">
              <motion.div
                className="absolute inset-y-0 left-0 rounded-full"
                style={{
                  background:
                    r.score >= 5
                      ? "linear-gradient(90deg, rgba(168,208,96,0.35), rgba(168,208,96,0.85))"
                      : r.score >= 4.5
                        ? "linear-gradient(90deg, rgba(168,208,96,0.25), rgba(168,208,96,0.55))"
                        : "linear-gradient(90deg, rgba(164,160,148,0.25), rgba(164,160,148,0.5))",
                }}
                initial={reduce ? { width: `${(r.score / 5) * 100}%` } : { width: 0 }}
                animate={inView ? { width: `${(r.score / 5) * 100}%` } : {}}
                transition={{ duration: 1.1, delay: 0.15 + i * 0.12, ease }}
              />
            </div>
            <span className="w-11 shrink-0 font-mono text-[13px] text-paper tabular-nums">
              {r.score.toFixed(2)}
            </span>
          </div>
        ))}

        <p className="pt-1 font-mono text-[11px] leading-5 text-fog/80">
          $ five models · mock tool sandbox · judged on task success, tool
          efficiency, honesty, reasoning<span className="animate-caret-blink">▌</span>
        </p>
      </div>
    </div>
  );
}

export default function ChapterEval() {
  return (
    <section className="border-t border-line bg-panel/25 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        {/* Header */}
        <div className="mb-16 flex max-w-[720px] flex-col gap-6">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-moss">
              Exhibit 02 · Open Source
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-paper">
              Which model actually deserves your $20/month?
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-7 text-fog">
              My LLM evaluation framework answers that with receipts: one
              OpenRouter key unlocks 300+ models, an LLM-as-judge scores every
              response across six quality dimensions, a multi-judge panel
              checks the judges against each other, and an agentic harness
              scores <em className="text-paper not-italic">trajectories</em> —
              not just answers. Every score traces back to a stored response, a
              judge rationale, and a full tool-call transcript.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <a
              href="https://github.com/abhishek2395/llm-eval"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-fit items-center gap-1.5 font-mono text-[14px] text-moss transition-colors hover:text-paper"
            >
              github.com/abhishek2395/llm-eval
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </Reveal>
        </div>

        {/* Panel + findings */}
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_360px] lg:gap-14">
          <Reveal delay={0.15}>
            <ScorePanel />
          </Reveal>

          <div className="flex flex-col justify-center gap-9">
            <Reveal delay={0.25}>
              <p className="font-mono text-[12px] uppercase tracking-[0.2em] text-fog">
                Findings from real runs
              </p>
            </Reveal>
            {FINDINGS.map((f, i) => (
              <Reveal key={f.stat} delay={0.3 + i * 0.1}>
                <div className="flex gap-5 border-l border-moss/40 pl-5">
                  <span className="shrink-0 whitespace-nowrap font-serif text-2xl leading-none text-moss">
                    {f.stat}
                  </span>
                  <p className="text-sm leading-6 text-fog">{f.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
