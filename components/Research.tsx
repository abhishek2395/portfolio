import { ArrowUpRight } from "lucide-react";
import Reveal from "./Reveal";

const PAPERS = [
  {
    year: "2025",
    title:
      "AI-Guided Schema Evolution and Real-Time Data Quality Enhancement in Multi-Source Pipelines",
    venue: "IEEE · Int'l Conf. on Data Science and Intelligent Network Computing (ICDSINC)",
    href: "https://ieeexplore.ieee.org/document/11448159",
  },
  {
    year: "2025",
    title:
      "A DBT-Based Column Lineage Tracking Approach for Regulatory and Audit Compliance",
    venue: "Journal of Electrical Systems 21(01)",
    href: "https://www.researchgate.net/publication/397522914_A_DBT-Based_Column_Lineage_Tracking_Approach_for_Regulatory_and_Audit_Compliance",
  },
  {
    year: "2024",
    title: "ML-Based Anomaly Detection Framework for Insurance Policy Data",
    venue: "Journal of Information Systems Engineering & Management 9(4)",
    href: "https://www.researchgate.net/publication/397907535_ML_based_anomaly_detection_framework_for_Insurance_Policy_Data",
  },
];

export default function Research() {
  return (
    <section id="research" className="scroll-mt-16 border-t border-line bg-panel/25 py-28 sm:py-36">
      <div className="mx-auto w-full max-w-[1140px] px-6 sm:px-10">
        <div className="mb-14 flex max-w-[680px] flex-col gap-6">
          <Reveal>
            <p className="font-mono text-[13px] uppercase tracking-[0.22em] text-moss">
              Peer-reviewed
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.12] text-paper">
              Published research
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-base leading-7 text-fog">
              The production work has a paper trail. Co-authored research on
              the same problems I ship against — data quality, lineage for
              auditability, and anomaly detection in insurance data. With
              S.&nbsp;Malviya and V.&nbsp;Koli.
            </p>
          </Reveal>
        </div>

        <div className="flex flex-col">
          {PAPERS.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * i}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group grid gap-3 border-t border-line py-8 transition-colors duration-200 hover:bg-panel/60 md:grid-cols-[100px_minmax(0,1fr)_28px] md:items-baseline md:gap-8"
              >
                <span className="font-mono text-[13px] text-moss">{p.year}</span>
                <span className="flex flex-col gap-2">
                  <span className="font-serif text-xl leading-snug text-paper transition-colors group-hover:text-moss sm:text-2xl">
                    {p.title}
                  </span>
                  <span className="font-mono text-[12px] leading-5 text-fog">
                    {p.venue}
                  </span>
                </span>
                <ArrowUpRight className="hidden h-5 w-5 self-center text-fog transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-moss md:block" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
