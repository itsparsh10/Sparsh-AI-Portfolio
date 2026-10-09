"use client";

import { SupportAgentNav } from "./components/support-agent-ui";
import {
  HeroSection,
  ProblemSection,
  WhyItMattersSection,
  SolutionSection,
  HowItWorksSection,
  IntelligenceSection,
  ArchitectureSection,
  BusinessValueSection,
  ResultsSection,
  ConclusionSection
} from "./components/support-agent-sections";

export function SupportAgentPage() {
  return (
    <div className="support-agent-page">
      {/* Monad-Inspired Header Navigation */}
      <SupportAgentNav />

      {/* 01. Hero — What did I build? */}
      <HeroSection />
      <div className="sa-hairline" />

      {/* 02. Problem — What real problem exists? */}
      <ProblemSection />
      <div className="sa-hairline" />

      {/* 03. Why it matters — Why existing LLMs fail */}
      <WhyItMattersSection />
      <div className="sa-hairline" />

      {/* 04. Solution — What did I build to solve it? */}
      <SolutionSection />
      <div className="sa-hairline" />

      {/* 05. How it works — End-to-end workflow */}
      <HowItWorksSection />
      <div className="sa-hairline" />

      {/* 06. Intelligence — Why RAG & Why Multi-Agent? */}
      <IntelligenceSection />
      <div className="sa-hairline" />

      {/* 07. Architecture — System engineering */}
      <ArchitectureSection />
      <div className="sa-hairline" />

      {/* 08. Business Value — What does this enable/save? */}
      <BusinessValueSection />
      <div className="sa-hairline" />

      {/* 09. Results — Measured capabilities */}
      <ResultsSection />
      <div className="sa-hairline" />

      {/* 10. Conclusion — Learning & future steps */}
      <ConclusionSection />
    </div>
  );
}
