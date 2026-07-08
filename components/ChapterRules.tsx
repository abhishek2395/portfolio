"use client";

import { ArrowUpRight, Check, X } from "lucide-react";
import Reveal from "./Reveal";

/* ─── Precedence badge strip ─── */
function PrecedenceStrip() {
  return (
    <div className="flex flex-wrap items-center gap-2 font-mono text-[12px]">
      <span className="rounded-md border border-moss/50 bg-moss/10 px-3 py-1.5 text-moss">
        FAQ
      </span>
      <span className="text-fog">overrides</span>
      <span className="rounded-md border border-line bg-panel px-3 py-1.5 text-paper">
        Errata
      </span>
      <span className="text-fog">overrides</span>
      <span className="rounded-md border border-line bg-panel px-3 py-1.5 text-fog">
        Rulebook
      </span>
    </div>
  );
}

/* ─── Split screen: model memory vs grounded verdict ─── */
function SplitScreen() {
  return (
    <div className="flex flex-col gap-5">
      {/* The question */}
      <div className="rounded-full border border-line bg-panel px-6 py-3.5 text-center">
        <p className="font-mono text-[13px] text-paper">
          &ldquo;Can I play a card if I can&apos;t complete all of its effects?&rdquo;
        </p>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {/* Left: raw model */}
        <div className="flex flex-col gap-4 rounded-[20px] border border-line bg-panel/60 p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-fog">
              Raw model
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3d2620] px-3 py-1 font-mono text-[11px] text-[#e08b6d]">
              <X className="h-3 w-3" /> no citation
            </span>
          </div>
          <p className="text-[15px] leading-7 text-fog">
            &ldquo;No — every effect on the card must fully resolve, otherwise
            the card cannot legally be played. This is a core rule of the
            game.&rdquo;
          </p>
          <p className="mt-auto border-t border-line pt-4 font-mono text-[11px] leading-5 text-fog/70">
            Confident. Fluent. Sourced from model memory — and contradicted by
            the game&apos;s own FAQ.
          </p>
        </div>

        {/* Right: Rules Lawyer */}
        <div className="flex flex-col gap-4 rounded-[20px] border border-moss/40 bg-moss/5 p-6 sm:p-7">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[12px] uppercase tracking-[0.16em] text-moss">
              Rules Lawyer
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-moss/15 px-3 py-1 font-mono text-[11px] text-moss">
              <Check className="h-3 w-3" /> grounded
            </span>
          </div>
          <p className="text-[15px] leading-7 text-paper">
            &ldquo;Verdict: <span className="text-moss">Yes, with limits</span> —
            you resolve as much as you can. The FAQ addresses this directly and
            takes precedence over the rulebook&apos;s general wording.&rdquo;
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="rounded-md bg-void/60 px-2.5 py-1 font-mono text-[11px] text-moss">
              cite: FAQ p.4
            </span>
            <span className="rounded-md bg-void/60 px-2.5 py-1 font-mono text-[11px] text-fog">
              context: Rulebook §5
            </span>
          </div>
          <p className="mt-auto border-t border-moss/20 pt-4 font-mono text-[11px] leading-5 text-fog/70">
            Every verdict cites retrieved text. When sources are silent, it
            abstains instead of guessing.
          </p>
        </div>
      </div>

      <p className="text-center font-mono text-[11px] text-fog/60">
        Illustrative exchange — the real system runs on an ingested corpus with
        an eval harness behind it.
      </p>
    </div>
  );
}

const PILLS = [
  "RAG",
  "Hybrid Retrieval + Rerank",
  "Deterministic Precedence",
  "Faithfulness Judge",
  "Abstention Gate",
  "Qdrant",
  "Claude Opus",
];

export default function ChapterRules() {
  return (
    <section className="border-t border-line py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="mb-16 flex max-w-[720px] flex-col gap-6">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-moss">
              Exhibit 03 · Open Source
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-paper">
              An AI rules judge that proves its answers.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-7 text-fog">
              Rules Lawyer answers contested board-game rules questions with a
              verdict cited to the exact source — respecting the authority
              order real rulings follow. The LLM writes the explanation; it
              never decides which source is authoritative and never invents a
              ruling unsupported by retrieved text. Built with hybrid
              retrieval, a faithfulness judge validated against human
              agreement, and an abstention gate — the eval harness measures
              exactly how much less it hallucinates than the raw model.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="flex flex-col gap-5">
              <PrecedenceStrip />
              <a
                href="https://github.com/abhishek2395/Rules-Lawyer"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex w-fit items-center gap-1.5 font-mono text-[14px] text-moss transition-colors hover:text-paper"
              >
                github.com/abhishek2395/Rules-Lawyer
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <SplitScreen />
        </Reveal>

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
