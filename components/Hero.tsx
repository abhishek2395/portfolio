"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

const ROLES = [
  "AI Product Manager",
  "AI Engineer",
  "Data & AI Strategist",
  "AI Product Builder",
];

/* Rolling role ticker — vertical slide with caret, pauses on each title */
function RotatingRole() {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % ROLES.length), 2600);
    return () => clearInterval(t);
  }, [reduce]);

  // The invisible sizer holds the widest role so the container's width and
  // height account for font, uppercase, and letter-spacing exactly.
  const widest = ROLES.reduce((a, b) => (b.length > a.length ? b : a));

  return (
    <span className="relative inline-flex overflow-hidden align-bottom">
      <span aria-hidden className="invisible whitespace-nowrap">
        {widest}&nbsp;▌
      </span>
      <AnimatePresence initial={false}>
        <motion.span
          key={i}
          className="absolute inset-0 flex items-center gap-1 whitespace-nowrap text-moss"
          initial={reduce ? false : { y: "110%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-110%", opacity: 0 }}
          transition={{ duration: 0.45, ease }}
        >
          {ROLES[i]}
          <span className="animate-caret-blink">▌</span>
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default function Hero() {
  const reduce = useReducedMotion();

  const rise = (delay: number) => ({
    initial: reduce ? undefined : { opacity: 0, y: 32 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease },
  });

  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col justify-center overflow-hidden"
    >
      <div className="mx-auto w-full max-w-[1140px] px-6 pb-24 pt-28 sm:px-10">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1fr)_300px]">
          {/* ── Left: the pitch ── */}
          <div className="flex flex-col gap-9">
            <motion.p
              {...rise(0.05)}
              className="font-mono text-[13px] uppercase tracking-[0.22em] text-fog"
            >
              Abhishek Jaiswal · Plano, TX
              <span className="mx-3 text-moss">/</span>
              Open to: <RotatingRole />
            </motion.p>

            <h1 className="font-serif text-[clamp(2.9rem,7.2vw,5.6rem)] leading-[1.04] text-paper">
              <motion.span {...rise(0.15)} className="block">
                I build the AI products
              </motion.span>
              <motion.span
                {...rise(0.3)}
                className="block italic text-moss"
              >
                I&apos;d manage.
              </motion.span>
            </h1>

            <motion.p
              {...rise(0.45)}
              className="max-w-[560px] text-lg leading-[30px] text-fog"
            >
              Five years shipping data and AI products inside a Fortune 500
              financial institution — most recently a production multi-agent
              system running at 98% automation. On the side: an open-source
              framework that benchmarks 300+ LLMs, because someone has to
              check the models&apos; homework.
            </motion.p>

            <motion.div {...rise(0.6)} className="flex flex-wrap gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-moss px-7 py-3.5 text-base font-semibold text-void transition-transform duration-200 hover:scale-[1.02]"
              >
                See the work
                <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-line px-7 py-3.5 text-base font-medium text-paper transition-colors duration-200 hover:border-moss/60 hover:text-moss"
              >
                Download resume
              </a>
            </motion.div>
          </div>

          {/* ── Right: postage-stamp portrait ── */}
          <motion.div
            initial={reduce ? undefined : { opacity: 0, scale: 0.92, rotate: 6 }}
            animate={{ opacity: 1, scale: 1, rotate: 3 }}
            transition={{ duration: 1.1, delay: 0.5, ease }}
            className="hidden justify-center lg:flex"
          >
            <div className="animate-stamp-float relative w-[260px] drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]">
              <Image
                src="/assets/hero-portrait.jpg"
                alt="Engraved postage-stamp portrait of Abhishek Jaiswal"
                width={520}
                height={620}
                priority
                className="h-auto w-full rounded-[6px]"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.div
        initial={reduce ? undefined : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="animate-scroll-cue flex flex-col items-center gap-2 text-fog">
          <span className="font-mono text-[11px] uppercase tracking-[0.2em]">
            Scroll
          </span>
          <span className="block h-8 w-px bg-gradient-to-b from-fog/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
