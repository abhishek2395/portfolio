"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#research", label: "Research" },
  { href: "#recommendations", label: "Praise" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        scrolled
          ? "border-b border-line bg-void/80 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      <nav className="mx-auto flex h-16 w-full max-w-[1140px] items-center justify-between px-6 sm:px-10">
        <a
          href="#top"
          className="font-serif text-xl leading-none text-paper transition-colors hover:text-moss"
        >
          Abhishek Jaiswal
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[13px] uppercase tracking-[0.14em] text-fog transition-colors hover:text-paper"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full border border-moss/40 px-5 py-2 font-mono text-[13px] uppercase tracking-[0.12em] text-moss transition-colors duration-200 hover:border-moss hover:bg-moss/10 sm:inline-flex"
          >
            Resume
          </a>
          <a
            href="https://calendly.com/talkwithabhishek/interview-me"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-moss px-5 py-2 font-mono text-[13px] font-medium uppercase tracking-[0.12em] text-void transition-transform duration-200 hover:scale-[1.03]"
          >
            Book a call
          </a>
        </div>
      </nav>
    </header>
  );
}
