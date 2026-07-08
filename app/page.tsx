import FlowField from "@/components/FlowField";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ChapterAgents from "@/components/ChapterAgents";
import ChapterEval from "@/components/ChapterEval";
import ChapterRules from "@/components/ChapterRules";
import Process from "@/components/Process";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <FlowField />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ProofBar />
        <ChapterAgents />
        <ChapterEval />
        <ChapterRules />
        <Process />
        <Experience />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  );
}
