"use client";

import { KobyNav } from "./components/koby-ai-ui";
import {
  HeroSection,
  ProblemSection,
  SolutionSection,
  UserFlowSection,
  AiLayerSection,
  MultimodalSection,
  ArchitectureSection,
  BusinessValueSection,
  ResultsSection,
  ConclusionSection,
} from "./components/koby-ai-sections";
import { KOBY_AI_GITHUB } from "./koby-ai-data";
import { Terminal, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

export function KobyAiPage() {
  return (
    <div className="min-h-screen bg-[#f4efea] text-[#383838] selection:bg-[#ffde00] selection:text-[#383838] font-mono">
      {/* Red/Coral Announcement Bar */}
      <div className="koby-announcement bg-[#ff7169] border-b-2 border-[#383838] px-4 text-center font-mono text-xs font-bold text-[#383838] uppercase flex items-center justify-center gap-3">
        <span>☕ KOBY&apos;S CAFE PDF ASSISTANT: MENUS, RECIPES &amp; OPERATIONS IN ONE SEARCH</span>
        <a 
          href={KOBY_AI_GITHUB} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="underline hover:opacity-80 inline-flex items-center gap-1 font-extrabold"
        >
          EXPLORE GITHUB <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Main Top Navigation */}
      <KobyNav />

      {/* Main Content Area */}
      <main>
        {/* 01. Hero */}
        <HeroSection />

        {/* Canary Yellow Marquee Banner */}
        <div className="py-3 bg-[#ffde00] border-b-2 border-[#383838] overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee font-mono text-xs sm:text-sm font-bold uppercase tracking-wider text-[#383838]">
            UNSTRUCTURED DATA SILOS ↓ DENSE EMBEDDINGS ↓ FAISS SIMILARITY SEARCH ↓ GROUNDED AI RESPONSE · UNSTRUCTURED DATA SILOS ↓ DENSE EMBEDDINGS ↓ FAISS SIMILARITY SEARCH ↓ GROUNDED AI RESPONSE
          </div>
        </div>

        {/* 02. Problem */}
        <ProblemSection />

        {/* 03. Solution */}
        <SolutionSection />

        {/* 04. User Flow */}
        <UserFlowSection />

        {/* 05. AI Layer */}
        <AiLayerSection />

        {/* 06. Multimodal */}
        <MultimodalSection />

        {/* 07. Architecture */}
        <ArchitectureSection />

        {/* 08. Business Value */}
        <BusinessValueSection />

        {/* 09. Results */}
        <ResultsSection />

        {/* 10. Conclusion */}
        <ConclusionSection />
      </main>

      {/* Neo-Brutalist Footer */}
      <footer className="bg-white border-t-2 border-[#383838] py-14 px-4 mt-16 font-mono text-xs">
        <div className="koby-container">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Brand Col */}
            <div className="space-y-3">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-[2px] bg-[#ffde00] border-2 border-[#383838] flex items-center justify-center font-bold text-sm text-[#383838] shadow-[-2px_2px_0px_0px_#383838]">
                  ⚡
                </div>
                <span className="font-bold text-base uppercase tracking-wider text-[#383838]">Koby&apos;s AI</span>
              </div>
              <p className="text-[#545454] text-xs leading-relaxed max-w-xs">
                Turning Koby&apos;s Cafe menus, recipes, operating procedures, and approved contributions into a searchable AI assistant.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-2.5">
              <span className="font-bold text-sm text-[#383838] uppercase tracking-wider">PORTFOLIO</span>
              <ul className="space-y-2 text-xs font-semibold text-[#545454]">
                <li><a href="#hero" className="hover:text-[#6fc2ff] transition-colors">01. Overview &amp; Console</a></li>
                <li><a href="#problem" className="hover:text-[#6fc2ff] transition-colors">02. Business Problem</a></li>
                <li><a href="#solution" className="hover:text-[#6fc2ff] transition-colors">03. Solution Pipeline</a></li>
                <li><a href="#flow" className="hover:text-[#6fc2ff] transition-colors">04. 10-Step User Flow</a></li>
              </ul>
            </div>

            {/* AI Architecture Links */}
            <div className="space-y-2.5">
              <span className="font-bold text-sm text-[#383838] uppercase tracking-wider">SYSTEM &amp; TECH</span>
              <ul className="space-y-2 text-xs font-semibold text-[#545454]">
                <li><a href="#ai-layer" className="hover:text-[#6fc2ff] transition-colors">05. Embeddings &amp; RAG</a></li>
                <li><a href="#multimodal" className="hover:text-[#6fc2ff] transition-colors">06. Multimodal Ingestion</a></li>
                <li><a href="#architecture" className="hover:text-[#6fc2ff] transition-colors">07. 3D Isometric Topology</a></li>
                <li><a href="#results" className="hover:text-[#6fc2ff] transition-colors">09. Implementation Facts</a></li>
              </ul>
            </div>

            {/* Repos & Social */}
            <div className="space-y-3">
              <span className="font-bold text-sm text-[#383838] uppercase tracking-wider">RESOURCES</span>
              <div>
                <a
                  href={KOBY_AI_GITHUB}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="koby-btn-primary inline-flex items-center gap-2 text-xs font-bold py-2.5 px-4 shadow-[-3px_3px_0px_0px_#383838]"
                >
                  <Terminal className="w-4 h-4" />
                  GitHub Repository
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Copyright Row */}
          <div className="border-t-2 border-[#383838]/20 pt-6 flex flex-wrap items-center justify-between gap-4 text-[#818181] text-xs">
            <div>
              © 2026 Koby&apos;s AI
            </div>
            <div className="flex items-center gap-4 font-bold text-[#383838]">
              <Link href="/" className="hover:text-[#6fc2ff] uppercase underline">
                ← Return to Sparsh Portfolio
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
