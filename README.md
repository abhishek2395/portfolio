# jaiswalabhishek.com

Personal portfolio of **Abhishek Jaiswal** — AI Product Manager & AI Engineer.
A dark, cinematic single-page scroll: three "exhibits" of shipped AI work,
an animated agent-pipeline diagram, real eval numbers from my open-source
LLM benchmarking framework, and a dual resume tuned to whichever role
you're hiring for.

**Live:** [jaiswalabhishek.com](https://jaiswalabhishek.com)

## Featured work

- **Production multi-agent system** — requirement doc in, graded validation
  (13 checks, PASS/WARN/FAIL) and a QA-ready test plan out. 98% automation
  inside a Fortune 500 financial institution.
- **[LLM Evaluation Framework](https://github.com/abhishek2395/llm-eval)** —
  300+ models, LLM-as-judge across six dimensions, multi-judge reliability
  panel, agentic trajectory harness.
- **[Rules Lawyer](https://github.com/abhishek2395/Rules-Lawyer)** — a RAG
  rules engine that cites its sources and abstains when they're silent.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion ·
deployed on Vercel. The constellation background is a single `<canvas>`;
the pipeline diagrams are hand-built SVG animated on scroll. No UI kit.

## Run locally

```bash
npm install
npm run dev   # http://localhost:3000 — Node ≥ 20.9 required
```

## Notes

- `prefers-reduced-motion` is respected everywhere: the constellation
  renders a static frame and scroll reveals appear without animation.
- OG image and favicon are generated at build time (`app/opengraph-image.tsx`,
  `app/icon.svg`).
- Resumes live in `public/` — one for AI PM roles, one for AI engineering.
