"use client";

import { useState } from "react";
import { Check, Copy, FileText } from "lucide-react";

/* Brand glyphs — inlined because the pinned lucide-react version lacks them */
function GithubGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.55 0-.27-.01-1.17-.02-2.12-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.19 1.76 1.19 1.03 1.75 2.69 1.25 3.35.95.1-.74.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.81 1.19 1.83 1.19 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.67.8.55A11.51 11.51 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
    </svg>
  );
}

function LinkedinGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

const EMAIL = "abhishek.jaiswal@rutgers.edu";

/* ─── Email row with copy feedback ─── */
function EmailRow() {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      <a
        href={`mailto:${EMAIL}`}
        className="font-mono text-[15px] text-paper underline decoration-moss/50 underline-offset-4 transition-colors hover:text-moss sm:text-lg"
      >
        {EMAIL}
      </a>
      <button
        type="button"
        onClick={handleCopy}
        aria-label="Copy email address"
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-fog transition-colors hover:border-moss/60 hover:text-moss"
      >
        {copied ? <Check className="h-4 w-4 text-moss" /> : <Copy className="h-4 w-4" />}
      </button>
    </div>
  );
}

/* ─── Dual resume download ─── */
const RESUMES = [
  {
    eyebrow: "Hiring a product manager?",
    title: "AI Product Manager",
    sub: "Roadmaps, PRDs, eval-driven quality bars, stakeholder alignment",
    href: "/resume-ai-product-manager.pdf",
  },
  {
    eyebrow: "Hiring an engineer?",
    title: "AI Engineer",
    sub: "Agentic systems, LLM evaluation, RAG, Python in production",
    href: "/resume-ai-engineer.pdf",
  },
];

function ResumeCards() {
  return (
    <div className="grid w-full max-w-[760px] gap-5 sm:grid-cols-2">
      {RESUMES.map((r) => (
        <a
          key={r.title}
          href={r.href}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col gap-3 rounded-[20px] border border-line bg-panel/70 p-7 text-left transition-all duration-200 hover:-translate-y-1 hover:border-moss/50 hover:bg-panel"
        >
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-fog">
            {r.eyebrow}
          </p>
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-moss" />
            <span className="font-serif text-2xl leading-none text-paper">
              {r.title}
            </span>
          </div>
          <p className="text-sm leading-6 text-fog">{r.sub}</p>
          <span className="mt-2 font-mono text-[12px] text-moss opacity-70 transition-opacity group-hover:opacity-100">
            Download PDF ↓
          </span>
        </a>
      ))}
    </div>
  );
}

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative scroll-mt-16 overflow-hidden border-t border-line py-28 sm:py-36"
    >
      {/* Soft moss glow behind the headline */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(106,169,49,0.35), transparent 65%)",
        }}
      />

      <div className="relative mx-auto flex w-full max-w-[1140px] flex-col items-center gap-12 px-6 text-center sm:px-10">
        <div className="flex flex-col items-center gap-6">
          <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-moss">
            Contact
          </p>
          <h2 className="max-w-[700px] font-serif text-[clamp(2.4rem,5.5vw,4.2rem)] leading-[1.08] text-paper">
            Let&apos;s ship something{" "}
            <span className="italic text-moss">real.</span>
          </h2>
          <p className="max-w-[520px] text-base leading-7 text-fog">
            Two resumes, one builder — pick the lens that fits your role. Or
            grab 30 minutes on my calendar; I answer email faster than most
            APIs.
          </p>
        </div>

        <div className="flex flex-col items-center gap-6">
          <a
            href="https://calendly.com/talkwithabhishek/interview-me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-moss px-8 py-4 text-base font-semibold text-void transition-transform duration-200 hover:scale-[1.03]"
          >
            Book a 30-min call
            <span aria-hidden>↗</span>
          </a>
          <EmailRow />
        </div>

        <ResumeCards />

        <div className="flex items-center gap-6">
          <a
            href="https://github.com/abhishek2395"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub — abhishek2395"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-fog transition-colors hover:border-moss/60 hover:text-moss"
          >
            <GithubGlyph />
          </a>
          <a
            href="https://www.linkedin.com/in/iamabhishekjaiswal"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn — iamabhishekjaiswal"
            className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-line text-fog transition-colors hover:border-moss/60 hover:text-moss"
          >
            <LinkedinGlyph />
          </a>
        </div>
      </div>
    </section>
  );
}
