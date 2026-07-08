"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/* ─── Animated count-up number ─── */
function CountUp({
  target,
  suffix,
  active,
}: {
  target: number;
  suffix: string;
  active: boolean;
}) {
  const reduce = useReducedMotion();
  const [value, setValue] = useState(reduce ? target : 0);

  useEffect(() => {
    if (!active || reduce) return;
    let frame: number;
    const start = performance.now();
    const duration = 1600;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(Math.round(eased * target));
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, target, reduce]);

  return (
    <span className="font-serif text-[clamp(2.6rem,4.5vw,3.6rem)] leading-none text-paper tabular-nums">
      {value}
      <span className="text-moss">{suffix}</span>
    </span>
  );
}

const STATS = [
  {
    target: 98,
    suffix: "%",
    label: "automation reached by a production multi-agent AI system",
  },
  {
    target: 300,
    suffix: "+",
    label: "LLMs benchmarked by my open-source eval framework",
  },
  {
    target: 500,
    suffix: "+",
    label: "daily users on analytics products I shipped",
  },
  {
    target: 5,
    suffix: "yrs",
    label: "building data & AI inside Fortune 500 financial services",
  },
];

export default function ProofBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="border-y border-line bg-panel/40">
      <div
        ref={ref}
        className="mx-auto grid w-full max-w-[1140px] grid-cols-2 gap-x-8 gap-y-12 px-6 py-16 sm:px-10 lg:grid-cols-4"
      >
        {STATS.map((s) => (
          <div key={s.label} className="flex flex-col gap-3">
            <CountUp target={s.target} suffix={s.suffix} active={inView} />
            <p className="max-w-[220px] text-sm leading-6 text-fog">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
