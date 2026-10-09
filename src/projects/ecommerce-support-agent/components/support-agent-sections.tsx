"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  FileText,
  ShieldCheck,
  Zap,
  Layers,
  Database,
  Search,
  Bot,
  Brain,
  Terminal,
  Code,
  Sparkles,
  HelpCircle,
  Clock,
  TrendingUp,
  Award,
  ChevronRight,
  FileCode,
  Github,
  Play,
  Cpu,
  GitBranch
} from "lucide-react";
import { supportAgentData, SUPPORT_AGENT_GITHUB } from "../support-agent-data";
import { DotGridPattern } from "@/components/background-pattern/dot-grid-pattern";
import { ArcBandsBackground } from "@/components/background-gradient/arc-bands-background";

/* ============================================================================
   01. HERO — What did I build?
   ============================================================================ */
export function HeroSection() {
  const [selectedTicketIdx, setSelectedTicketIdx] = useState(0);
  const [activeViewTab, setActiveViewTab] = useState<"resolution" | "json" | "citations">("resolution");
  const ticket = supportAgentData.sampleTickets[selectedTicketIdx];

  return (
    <DotGridPattern id="hero" className="sa-section sa-hero-section relative pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 overflow-hidden">
      {/* Soft Ambient Halo */}
      <div className="sa-gradient-halo top-10 left-1/2 -translate-x-1/2" />

      <div className="sa-container relative z-10 flex flex-col items-center text-center">
        {/* Display Title (Steep Signifier Style) */}
        <h1 className="sa-display max-w-4xl mb-6">
          AI-powered support agent for faster insights and <em>zero chaos</em>
        </h1>

        {/* Tagline */}
        <p className="sa-lead max-w-3xl mb-8">
          {supportAgentData.tagline}
        </p>

        {/* Vibrant & Colorful Micro-Animated Tech Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10 max-w-4xl">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-indigo-50 text-indigo-700 border border-indigo-200/80 flex items-center gap-1.5 shadow-2xs hover:scale-105 transition-transform">
            <Bot className="w-3.5 h-3.5 text-indigo-600" /> CrewAI Multi-Agent
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-amber-50 text-amber-900 border border-amber-200/80 flex items-center gap-1.5 shadow-2xs hover:scale-105 transition-transform">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" /> Google Gemini LLM
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-emerald-50 text-emerald-800 border border-emerald-200/80 flex items-center gap-1.5 shadow-2xs hover:scale-105 transition-transform">
            <Database className="w-3.5 h-3.5 text-emerald-600" /> FAISS Vector Store
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-cyan-50 text-cyan-800 border border-cyan-200/80 flex items-center gap-1.5 shadow-2xs hover:scale-105 transition-transform">
            <Cpu className="w-3.5 h-3.5 text-cyan-600" /> Local Embeddings (all-MiniLM-L6-v2)
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-rose-50 text-rose-800 border border-rose-200/80 flex items-center gap-1.5 shadow-2xs hover:scale-105 transition-transform">
            <Zap className="w-3.5 h-3.5 text-rose-600" /> FastAPI & Pydantic v2
          </span>
          <span className="px-3.5 py-1.5 rounded-full text-xs font-sans font-medium bg-blue-50 text-blue-800 border border-blue-200/80 flex items-center gap-1.5 shadow-2xs hover:scale-105 transition-transform">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-600" /> Evidence-First Citation
          </span>
        </div>

        {/* Action Button */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-14">
          <a
            href={SUPPORT_AGENT_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="sa-btn sa-btn-primary shadow-sm"
          >
            <Github className="w-4 h-4" />
            View Source Code
          </a>
        </div>

        {/* Steep Floating Artifact: Live Ticket Resolution Engine Simulator */}
        <div id="demo-simulator" className="w-full max-w-6xl text-left sa-card-artifact scroll-mt-32">
          {/* Header Block */}
          <div className="mb-4 pb-4 border-b border-[var(--sa-hairline)]">
            <div className="font-sans text-xs font-bold text-[var(--sa-sienna-brown)] uppercase tracking-wider mb-1">
              Live Resolution Engine Simulator
            </div>
            <h3 className="font-serif text-3xl text-[var(--sa-ink-black)]">
              Select Customer Ticket Scenario
            </h3>
          </div>

          {/* Dedicated Full-Width Scenario Selector Row */}
          <div className="flex flex-wrap items-center gap-3 mb-6 p-2 rounded-2xl bg-[var(--sa-mist-gray)] border border-[var(--sa-hairline)]">
            {supportAgentData.sampleTickets.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setSelectedTicketIdx(idx)}
                className={`sa-btn text-xs !py-2.5 !px-4 rounded-full transition-all duration-150 ${selectedTicketIdx === idx
                    ? "bg-[var(--sa-ink-black)] text-white shadow-sm font-semibold"
                    : "bg-white text-[var(--sa-ink-black)] hover:bg-gray-100 border border-[var(--sa-hairline)] font-normal"
                  }`}
              >
                <span className="font-bold">{t.id}:</span> {t.title}
              </button>
            ))}
          </div>

          {/* Ticket Input & Context Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-2">
            {/* Input Ticket Box */}
            <div className="lg:col-span-5 bg-[var(--sa-mist-gray)] p-5 rounded-2xl border border-[var(--sa-hairline)]">
              <div className="flex items-center justify-between mb-3">
                <span className="font-sans text-xs font-semibold uppercase tracking-wider text-[var(--sa-ink-black)]">
                  Input Support Ticket ({ticket.id})
                </span>
                <span className="text-[11px] font-sans px-2.5 py-0.5 rounded-full bg-white border border-[var(--sa-hairline)] text-[var(--sa-slate-gray)] font-medium">
                  Customer Input
                </span>
              </div>
              <p className="font-sans text-sm text-[var(--sa-ink-black)] mb-4 bg-white p-3.5 rounded-xl border border-[var(--sa-hairline)] font-medium">
                &quot;{ticket.text}&quot;
              </p>

              <div className="font-sans text-xs font-semibold text-[var(--sa-slate-gray)] mb-2">
                Structured Order Context Payload:
              </div>
              <div className="bg-[#17191c] text-emerald-400 p-3.5 rounded-xl font-mono text-xs overflow-x-auto">
                <pre>{JSON.stringify(ticket.context, null, 2)}</pre>
              </div>
            </div>

            {/* AI Agent Resolution Output Box */}
            <div className="lg:col-span-7 bg-[var(--sa-blush-peach)] p-5 rounded-2xl border border-rgba(93, 42, 26, 0.15) flex flex-col justify-between text-[var(--sa-sienna-brown)]">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b border-[var(--sa-sienna-brown)]/15">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-[var(--sa-sienna-brown)]" />
                    <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--sa-sienna-brown)]">
                      Multi-Agent Structured Output
                    </span>
                  </div>

                  {/* Tabs */}
                  <div className="flex items-center gap-1 bg-white p-1 rounded-full border border-[var(--sa-sienna-brown)]/20">
                    <button
                      onClick={() => setActiveViewTab("resolution")}
                      className={`px-3 py-1 text-xs font-sans rounded-full transition-colors ${activeViewTab === "resolution" ? "bg-[var(--sa-sienna-brown)] text-white font-medium" : "text-[var(--sa-slate-gray)]"}`}
                    >
                      Resolution
                    </button>
                    <button
                      onClick={() => setActiveViewTab("citations")}
                      className={`px-3 py-1 text-xs font-sans rounded-full transition-colors ${activeViewTab === "citations" ? "bg-[var(--sa-sienna-brown)] text-white font-medium" : "text-[var(--sa-slate-gray)]"}`}
                    >
                      Citations
                    </button>
                    <button
                      onClick={() => setActiveViewTab("json")}
                      className={`px-3 py-1 text-xs font-sans rounded-full transition-colors ${activeViewTab === "json" ? "bg-[var(--sa-sienna-brown)] text-white font-medium" : "text-[var(--sa-slate-gray)]"}`}
                    >
                      JSON
                    </button>
                  </div>
                </div>

                {/* Tab 1: Resolution View */}
                {activeViewTab === "resolution" && (
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center justify-between gap-2 bg-white/90 p-3 rounded-xl border border-[var(--sa-sienna-brown)]/15">
                      <div>
                        <span className="font-sans text-xs text-[var(--sa-slate-gray)]">Decision: </span>
                        <span className="font-sans text-xs font-bold uppercase tracking-wide text-[var(--sa-sienna-brown)]">
                          {ticket.expectedOutput.decision}
                        </span>
                      </div>
                      <div>
                        <span className="font-sans text-xs text-[var(--sa-slate-gray)]">Confidence: </span>
                        <span className="font-sans text-xs font-bold text-emerald-700">
                          {(ticket.expectedOutput.confidence * 100).toFixed(0)}%
                        </span>
                      </div>
                      <div>
                        <span className="font-sans text-xs text-[var(--sa-slate-gray)]">Compliance: </span>
                        <span className="font-sans text-xs font-bold text-emerald-700">
                          ✓ Passed
                        </span>
                      </div>
                    </div>

                    <div>
                      <div className="font-sans text-xs font-semibold text-[var(--sa-sienna-brown)] mb-1">
                        Agent Rationale:
                      </div>
                      <p className="font-sans text-xs text-[var(--sa-ink-black)] bg-white/90 p-3 rounded-xl border border-[var(--sa-sienna-brown)]/15">
                        {ticket.expectedOutput.rationale}
                      </p>
                    </div>

                    <div>
                      <div className="font-sans text-xs font-semibold text-[var(--sa-sienna-brown)] mb-1">
                        Customer-Facing Reply:
                      </div>
                      <p className="font-sans text-xs text-[var(--sa-ink-black)] bg-white/90 p-3 rounded-xl border border-[var(--sa-sienna-brown)]/15 italic">
                        &quot;{ticket.expectedOutput.customer_response}&quot;
                      </p>
                    </div>
                  </div>
                )}

                {/* Tab 2: Citations View */}
                {activeViewTab === "citations" && (
                  <div className="space-y-3 font-sans text-xs">
                    <div className="font-semibold text-[var(--sa-sienna-brown)]">
                      Evidence & FAISS Document Citations:
                    </div>
                    {ticket.expectedOutput.citations.map((cit, idx) => (
                      <div key={idx} className="bg-white/90 p-3 rounded-xl border border-[var(--sa-sienna-brown)]/15 flex items-center justify-between">
                        <span className="font-bold text-[var(--sa-sienna-brown)]">{cit}</span>
                        <span className="text-[10px] text-emerald-700 font-semibold">Relevance Score &ge; 0.89</span>
                      </div>
                    ))}
                    <div className="bg-white/90 p-3 rounded-xl border border-[var(--sa-sienna-brown)]/15">
                      <span className="font-semibold text-[var(--sa-sienna-brown)]">Compliance Check: </span>
                      <span className="text-[var(--sa-ink-black)]">{ticket.expectedOutput.compliance_notes}</span>
                    </div>
                  </div>
                )}

                {/* Tab 3: JSON View */}
                {activeViewTab === "json" && (
                  <div className="bg-[#17191c] text-emerald-400 p-4 rounded-xl font-mono text-xs max-h-[220px] overflow-y-auto">
                    <pre>{JSON.stringify(ticket.expectedOutput, null, 2)}</pre>
                  </div>
                )}
              </div>

              {/* Verified Badge */}
              <div className="mt-4 pt-3 border-t border-[var(--sa-sienna-brown)]/15 flex items-center justify-between text-xs font-sans">
                <span className="text-[var(--sa-sienna-brown)]/80">Ingestion → FAISS Retrieval → CrewAI Multi-Agent → Output</span>
                <span className="text-emerald-800 font-semibold flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Policy Compliant
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DotGridPattern>
  );
}

/* ============================================================================
   02. PROBLEM — What real problem exists?
   ============================================================================ */
export function ProblemSection() {
  const p = supportAgentData.problem;
  return (
    <section id="problem" className="sa-section sa-section-alt">
      <div className="sa-container">
        <h2 className="sa-heading-lg mb-4 max-w-3xl">{p.heading}</h2>
        <p className="sa-lead mb-12 max-w-3xl">{p.subheading}</p>

        {/* Humanized 1-2-3 Numbered List */}
        <div className="space-y-6 mb-12">
          {p.issues.map((issue, idx) => (
            <div
              key={idx}
              className="sa-card bg-white flex flex-col md:flex-row md:items-start gap-6 hover:-translate-y-1 transition-all duration-300 shadow-2xs"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#121316] text-white flex items-center justify-center font-sans font-bold text-lg flex-shrink-0 shadow-sm">
                0{idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-2xl text-[var(--sa-ink-black)] mb-2">{issue.title}</h3>
                <p className="sa-body text-base text-[var(--sa-slate-gray)] leading-relaxed">{issue.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Manual Bottleneck Flow Visualization */}
        <div className="sa-card bg-white border border-[var(--sa-hairline)] shadow-2xs">
          <div className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--sa-sienna-brown)] mb-6">
            The Traditional Manual Support Bottleneck
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
            {p.manualFlow.map((step, i) => (
              <div
                key={i}
                className="p-4 rounded-2xl bg-[var(--sa-mist-gray)] border border-[var(--sa-hairline)] text-center flex flex-col items-center justify-center hover:scale-105 transition-transform"
              >
                <span className="w-7 h-7 rounded-full bg-[#121316] text-white font-bold text-xs flex items-center justify-center mb-2">
                  0{i + 1}
                </span>
                <span className="font-sans text-xs font-semibold text-[var(--sa-ink-black)]">{step}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 font-sans text-xs font-medium flex items-center gap-2">
            <AlertTriangle className="w-4 h-4 text-amber-700 flex-shrink-0" />
            <strong>Outcome:</strong> Slow resolution + inconsistent decisions + repetitive work + risk of incorrect policy responses.
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   03. WHY IT MATTERS — Why existing AI chatbots aren't enough
   ============================================================================ */
export function WhyItMattersSection() {
  const w = supportAgentData.whyItMatters;
  return (
    <section id="why-it-matters" className="sa-section">
      <div className="sa-container">
        <h2 className="sa-heading-lg mb-4 max-w-3xl">{w.heading}</h2>
        <p className="sa-lead mb-12 max-w-3xl">{w.subheading}</p>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Generic Chatbot */}
          <div className="sa-card bg-white border-rose-200">
            <div className="font-sans text-xs font-bold uppercase tracking-wider text-rose-700 mb-2">
              Traditional LLM Chatbot
            </div>
            <h3 className="font-serif text-3xl text-[var(--sa-ink-black)] mb-4">Focus: Text Fluency</h3>
            <p className="sa-body mb-6">{w.comparison[0].behavior}</p>
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 font-sans text-xs text-rose-800">
              <strong>Risk:</strong> {w.comparison[0].risk}
            </div>
          </div>

          {/* Support Resolution Agent */}
          <div className="sa-card-peach">
            <div className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--sa-sienna-brown)] mb-2">
              Our Support Resolution Agent
            </div>
            <h3 className="font-serif text-3xl text-[var(--sa-sienna-brown)] mb-4">Focus: Evidence & Policy</h3>
            <p className="sa-body mb-6 text-[var(--sa-sienna-brown)]/90">{w.comparison[1].behavior}</p>
            <div className="p-4 rounded-2xl bg-white/90 border border-[var(--sa-sienna-brown)]/20 font-sans text-xs text-emerald-800">
              <strong>Guarantee:</strong> {w.comparison[1].risk}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   04. SOLUTION — What did I build to solve it?
   ============================================================================ */
export function SolutionSection() {
  const s = supportAgentData.solution;
  return (
    <section id="solution" className="sa-section sa-section-alt">
      <div className="sa-container">
        <h2 className="sa-heading-lg mb-4 max-w-3xl">{s.heading}</h2>
        <p className="sa-lead mb-12 max-w-3xl">{s.subheading}</p>

        {/* 7-Step Solution Pipeline Flow */}
        <div className="sa-card bg-white">
          <div className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--sa-sienna-brown)] mb-8">
            End-to-End Architectural Solution Flow
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {s.steps.map((step, i) => (
              <div key={i} className="p-5 rounded-2xl bg-[var(--sa-mist-gray)] border border-[var(--sa-hairline)] flex flex-col justify-between">
                <div>
                  <span className="font-sans text-xs font-bold text-[var(--sa-sienna-brown)] block mb-2">
                    {step.number}
                  </span>
                  <h4 className="font-serif text-xl text-[var(--sa-ink-black)] mb-2">{step.name}</h4>
                  <p className="sa-body text-xs">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   05. HOW IT WORKS — What is the end-to-end flow?
   ============================================================================ */
export function HowItWorksSection() {
  const h = supportAgentData.howItWorks;
  return (
    <section id="how-it-works" className="sa-section">
      <div className="sa-container">
        <h2 className="sa-heading-lg mb-4 max-w-3xl">{h.heading}</h2>
        <p className="sa-lead mb-12 max-w-3xl">{h.subheading}</p>

        {/* Vertical Stepper Timeline */}
        <div className="space-y-4">
          {h.pipeline.map((item, idx) => (
            <div key={idx} className="sa-card bg-white flex flex-col md:flex-row md:items-center justify-between gap-6 hover:border-[var(--sa-ink-black)] transition-colors">
              <div className="flex items-center gap-4 min-w-[200px]">
                <div className="w-10 h-10 rounded-full bg-[var(--sa-blush-peach)] text-[var(--sa-sienna-brown)] flex items-center justify-center font-sans font-bold text-sm">
                  {idx + 1}
                </div>
                <div>
                  <span className="font-sans text-xs text-[var(--sa-slate-gray)] uppercase block">{item.step}</span>
                  <h4 className="font-serif text-2xl text-[var(--sa-ink-black)]">{item.name}</h4>
                </div>
              </div>
              <p className="sa-body text-sm text-[var(--sa-slate-gray)] max-w-2xl flex-1">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   06. INTELLIGENCE — Where does AI/ML actually help?
   ============================================================================ */
export function IntelligenceSection() {
  const intel = supportAgentData.intelligence;
  return (
    <section id="intelligence" className="sa-section sa-section-alt">
      <div className="sa-container">
        <h2 className="sa-heading-lg mb-4 max-w-3xl">{intel.heading}</h2>
        <p className="sa-lead mb-12 max-w-3xl">{intel.subheading}</p>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
          {/* Why RAG */}
          <div className="lg:col-span-5 sa-card bg-white flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-[var(--sa-mist-gray)] text-[var(--sa-ink-black)] flex items-center justify-center mb-6">
                <Database className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl text-[var(--sa-ink-black)] mb-4">{intel.rag.title}</h3>
              <p className="sa-body text-sm mb-6">{intel.rag.reason}</p>
            </div>
            <div className="p-4 rounded-2xl bg-[var(--sa-mist-gray)] border border-[var(--sa-hairline)] font-sans text-xs text-[var(--sa-ink-black)]">
              <strong>Execution:</strong> {intel.rag.flow}
            </div>
          </div>

          {/* Why Multi-Agent */}
          <div className="lg:col-span-7 sa-card-peach flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-white text-[var(--sa-sienna-brown)] flex items-center justify-center mb-6">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-3xl text-[var(--sa-sienna-brown)] mb-4">{intel.agents.title}</h3>
              <p className="sa-body text-sm text-[var(--sa-sienna-brown)]/90 mb-6">{intel.agents.reason}</p>

              {/* 4 Agent Roles Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {intel.agents.crew.map((ag, i) => (
                  <div key={i} className="p-3.5 rounded-xl bg-white/90 border border-[var(--sa-sienna-brown)]/20">
                    <span className="font-sans text-[11px] font-bold text-[var(--sa-sienna-brown)] uppercase block mb-1">
                      {ag.name}
                    </span>
                    <p className="font-sans text-xs text-[var(--sa-ink-black)]">{ag.task}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   07. ARCHITECTURE — How is the system engineered?
   ============================================================================ */
export function ArchitectureSection() {
  const arch = supportAgentData.architecture;
  return (
    <section id="architecture" className="sa-section">
      <div className="sa-container">
        <h2 className="sa-heading-lg mb-4 max-w-3xl">{arch.heading}</h2>
        <p className="sa-lead mb-10 max-w-3xl">{arch.subheading}</p>

        {/* Visual Interactive Node Architecture Graph */}
        <div className="sa-card bg-white mb-10 border border-[var(--sa-hairline)] shadow-2xs">
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[var(--sa-hairline)]">
            <span className="font-sans text-xs font-bold uppercase tracking-wider text-[var(--sa-sienna-brown)] flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-[var(--sa-sienna-brown)]" /> Visual System Control Flow & RAG Graph
            </span>
            <span className="font-sans text-xs text-[var(--sa-slate-gray)] font-medium">CrewAI + FAISS + Gemini</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-4 rounded-2xl bg-indigo-50 border border-indigo-200/80">
              <span className="font-sans text-[11px] font-bold text-indigo-700 uppercase block mb-1">01. Ingestion</span>
              <h4 className="font-sans text-sm font-bold text-indigo-950">Customer Ticket & Payload</h4>
            </div>

            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200/80">
              <span className="font-sans text-[11px] font-bold text-amber-800 uppercase block mb-1">02. Triage</span>
              <h4 className="font-sans text-sm font-bold text-amber-950">Intent Detection Agent</h4>
            </div>

            <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200/80">
              <span className="font-sans text-[11px] font-bold text-emerald-800 uppercase block mb-1">03. RAG Retrieval</span>
              <h4 className="font-sans text-sm font-bold text-emerald-950">FAISS Policy Search</h4>
            </div>

            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200/80">
              <span className="font-sans text-[11px] font-bold text-rose-800 uppercase block mb-1">04. Compliance</span>
              <h4 className="font-sans text-sm font-bold text-rose-950">Pydantic Citation Output</h4>
            </div>
          </div>
        </div>

        {/* Tech Stack List */}
        <div className="sa-card bg-[var(--sa-mist-gray)]">
          <h3 className="font-serif text-2xl text-[var(--sa-ink-black)] mb-6">Production Technology Stack</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {arch.stack.map((item, idx) => (
              <div key={idx} className="p-4 rounded-2xl bg-white border border-[var(--sa-hairline)]">
                <span className="font-sans text-xs text-[var(--sa-slate-gray)] uppercase block mb-1">{item.name}</span>
                <span className="font-sans text-sm font-bold text-[var(--sa-ink-black)]">{item.tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   08. BUSINESS VALUE — What does this enable/save/improve?
   ============================================================================ */
export function BusinessValueSection() {
  const bv = supportAgentData.businessValue;
  return (
    <section id="business-value" className="sa-section sa-section-alt">
      <div className="sa-container">
        <h2 className="sa-heading-lg mb-4 max-w-3xl">{bv.heading}</h2>
        <p className="sa-lead mb-12 max-w-3xl">{bv.subheading}</p>

        {/* Value Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bv.metrics.map((m, idx) => (
            <div key={idx} className="sa-card bg-white">
              <div className="w-10 h-10 rounded-full bg-[var(--sa-blush-peach)] text-[var(--sa-sienna-brown)] flex items-center justify-center font-sans font-bold text-sm mb-4">
                0{idx + 1}
              </div>
              <h3 className="font-serif text-2xl text-[var(--sa-ink-black)] mb-3">{m.title}</h3>
              <p className="sa-body text-sm">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   09. RESULTS — What did I achieve/measure?
   ============================================================================ */
export function ResultsSection() {
  const r = supportAgentData.results;
  return (
    <section id="results" className="sa-section">
      <div className="sa-container">
        <h2 className="sa-heading-lg mb-4 max-w-3xl">{r.heading}</h2>
        <p className="sa-lead mb-12 max-w-3xl">{r.subheading}</p>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {r.benchmarks.map((b, idx) => (
            <div key={idx} className="sa-card-peach text-center">
              <span className="font-sans text-4xl font-bold text-[var(--sa-sienna-brown)] block mb-2">{b.score}</span>
              <h4 className="font-serif text-xl text-[var(--sa-sienna-brown)] mb-1">{b.name}</h4>
              <p className="sa-body text-xs text-[var(--sa-sienna-brown)]/80">{b.note}</p>
            </div>
          ))}
        </div>

        {/* System Capabilities Table */}
        <div className="sa-card bg-white">
          <h3 className="font-serif text-2xl text-[var(--sa-ink-black)] mb-6">System Capabilities Summary</h3>
          <div className="space-y-3">
            {r.capabilities.map((c, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-[var(--sa-mist-gray)] border border-[var(--sa-hairline)] font-sans text-sm">
                <span className="font-medium text-[var(--sa-ink-black)]">{c.label}</span>
                <span className="font-bold text-[var(--sa-sienna-brown)]">{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================================
   10. CONCLUSION — What did I learn + what would I do next?
   ============================================================================ */
export function ConclusionSection() {
  const c = supportAgentData.conclusion;
  return (
    <DotGridPattern className="sa-section pb-28 pt-20 relative overflow-hidden">
      <div className="sa-container relative z-10">
        <h2 className="sa-heading-lg mb-6 max-w-3xl">{c.heading}</h2>

        {/* Main Quote Card */}
        <div className="sa-card bg-white mb-12 border border-[var(--sa-hairline)] shadow-2xs">
          <p className="font-serif text-2xl md:text-3xl text-[var(--sa-ink-black)] leading-relaxed italic">
            &quot;{c.quote}&quot;
          </p>
        </div>

        {/* Key Learnings List */}
        <div className="sa-card bg-white mb-12 border border-[var(--sa-hairline)] shadow-2xs">
          <h3 className="font-serif text-2xl text-[var(--sa-ink-black)] mb-6">Engineering Takeaways</h3>
          <div className="space-y-4">
            {c.learned.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-[var(--sa-mist-gray)] border border-[var(--sa-hairline)]">
                <CheckCircle2 className="w-5 h-5 text-[var(--sa-ink-black)] flex-shrink-0 mt-0.5" />
                <p className="sa-body text-sm text-[var(--sa-ink-black)] font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="sa-card-dark text-center flex flex-col items-center">
          <h3 className="font-serif text-3xl md:text-4xl text-white font-normal mb-4">
            Explore the Source Code & Evaluation Benchmarks
          </h3>
          <p className="font-sans text-sm md:text-base text-gray-300 max-w-2xl mb-8 leading-relaxed">
            The full repository contains ingestion scripts, vectorstore indexes, CrewAI agent definitions, evaluation datasets, and FastAPI endpoints.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={SUPPORT_AGENT_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-white text-[#121316] font-sans text-sm font-semibold hover:bg-gray-100 transition-all shadow-sm hover:scale-[1.02] active:scale-[0.98] inline-flex items-center gap-2"
            >
              <Github className="w-4 h-4 text-[#121316]" />
              GitHub Repository
            </a>
            <Link
              href="/"
              className="px-6 py-3.5 rounded-full bg-transparent text-gray-200 border border-gray-700 font-sans text-sm font-medium hover:bg-white/10 hover:border-gray-500 hover:text-white transition-all inline-flex items-center gap-2"
            >
              Back to Portfolio
            </Link>
          </div>
        </div>
      </div>
    </DotGridPattern>
  );
}
