import Reveal from "./Reveal";
import { TESTIMONIALS } from "@/lib/testimonials";

export default function Testimonials() {
  return (
    <section
      id="recommendations"
      className="scroll-mt-16 border-t border-line py-28 sm:py-36"
    >
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="mb-14 flex max-w-[680px] flex-col gap-6">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-moss">
              Social proof
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-paper">
              What people say
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-7 text-fog">
              Words from managers, colleagues, and mentors I&rsquo;ve worked
              with over the years — pulled from LinkedIn recommendations. Each
              name links to their profile.
            </p>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={0.08 * (i % 2)}>
              <figure className="flex h-full flex-col gap-5 rounded-[20px] border border-line bg-panel/60 p-7 sm:p-8">
                <span
                  aria-hidden
                  className="font-serif text-5xl leading-[0.4] text-moss/55"
                >
                  &ldquo;
                </span>
                <blockquote className="text-[17px] leading-[1.65] text-paper">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-auto flex items-center gap-3.5 border-t border-line pt-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-moss/30 bg-moss/[0.14] font-mono text-[15px] font-medium text-moss">
                    {t.initials}
                  </span>
                  <span className="flex flex-col gap-0.5">
                    <a
                      href={t.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex w-fit items-center gap-1.5 border-b border-transparent text-[15px] text-paper transition-colors hover:border-moss/50 hover:text-moss"
                    >
                      {t.name}
                      <span className="font-mono text-[11px] text-moss">
                        in ↗
                      </span>
                    </a>
                    <span className="font-mono text-[12px] leading-4 text-fog">
                      {t.title}
                    </span>
                    <span className="font-mono text-[11px] leading-4 text-moss-deep">
                      {t.relationship}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
