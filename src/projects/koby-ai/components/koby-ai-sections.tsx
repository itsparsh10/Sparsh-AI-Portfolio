"use client";

import React, { useState } from "react";
import {
  kobyData,
  KOBY_AI_GITHUB
} from "../koby-ai-data";
import { MotherDuckIsometricDiagram } from "./motherduck-diagram";
import {
  FileText,
  FileCheck,
  Image as ImageIcon,
  Mic,
  Search,
  Database,
  Cpu,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Layers,
  Zap,
  ExternalLink,
  Bot,
  Sliders,
  ShieldCheck,
  Clock,
  HelpCircle,
  BookOpen,
  Code2,
  Server,
  Workflow,
  Copy,
  Check,
  Send,
  CornerDownRight,
  SlidersHorizontal,
  ArrowUp,
  BrainCircuit,
  Flame
} from "lucide-react";

/* Authentic Google Gemini 4-Point Sparkle Gradient Logo */
function GeminiLogo({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="geminiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1ba1e3" />
          <stop offset="50%" stopColor="#5b7fff" />
          <stop offset="100%" stopColor="#9b51e0" />
        </linearGradient>
      </defs>
      <path
        d="M12 2C12 7.523 7.523 12 2 12C7.523 12 12 16.477 12 22C12 16.477 16.477 12 22 12C16.477 12 12 7.523 12 2Z"
        fill="url(#geminiGrad)"
      />
    </svg>
  );
}

/* MotherDuck Orange Sunburst / Asterisk Glyph */
function OrangeStarburst({ className = "w-4 h-4 text-[#e06842]" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 2V18M2 10H18M4.34 4.34L15.66 15.66M4.34 15.66L15.66 4.34"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/*
 * 01. Hero Section — MotherDuck 1:1 with Q1, Q2, Q3 Scenario Switcher & Live Gemini Terminal
 */
export function HeroSection() {
  const [copiedPrompt, setCopiedPrompt] = useState(false);
  const [queryInput, setQueryInput] = useState("");
  const [customQuery, setCustomQuery] = useState("");
  const [sampleIndex, setSampleIndex] = useState(0);

  const sample = kobyData.sampleQueries[sampleIndex];
  const activeQuery = customQuery || sample.query;

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText("How do I build a local FAISS semantic retrieval pipeline with sentence-transformers and Gemini 2.0 Flash in Koby's AI?");
    setCopiedPrompt(true);
    setTimeout(() => setCopiedPrompt(false), 2500);
  };

  const handleCustomSubmit = () => {
    if (queryInput.trim()) {
      setCustomQuery(queryInput.trim());
      setQueryInput("");
    }
  };

  return (
    <section id="hero" className="border-b-2 border-[#383838] bg-[#f4efea]">
      <div className="kdOTzw bzFZqZ">

        {/* Top Header Typography & CTAs */}
        <div className="koby-hero-copy space-y-6">

          {/* Top Floating Badge */}
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 bg-[#ffde00] border-2 border-[#383838] rounded-[2px] font-mono text-xs font-bold uppercase text-[#383838] shadow-[-2px_2px_0px_0px_#383838]">
              <Sparkles className="w-3.5 h-3.5" />
              KOBY&apos;S CAFE KNOWLEDGE LAYER
            </span>
            <span className="font-mono text-xs font-semibold text-[#818181] hidden sm:inline">
              {"// FAISS CPU + GEMINI 2.0 FLASH RAG"}
            </span>
          </div>

          {/* Display Headline */}
          <h1 className="koby-hero-title font-mono text-4xl font-light text-[#383838] leading-[1.08] tracking-tight uppercase max-w-4xl">
            KNOWLEDGE LAYER BUILT FOR AGENTS
          </h1>

          {/* Subtext */}
          <p className="font-mono text-base sm:text-lg text-[#383838] leading-relaxed max-w-3xl">
            Ask natural-language questions across Koby&apos;s cafe menus, recipes, and operations handbook. Django, FAISS, sentence-transformers, and Gemini turn approved PDFs into cited answers.
          </p>

          {/* 2-Button Action Row */}
          <div className="flex flex-wrap items-center gap-4 pt-1">
            <a
              href="#flow"
              className="koby-btn-primary inline-flex items-center gap-2 text-sm font-bold uppercase px-6 py-3.5"
            >
              TRY KOBY FREE
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href={KOBY_AI_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="koby-btn-secondary inline-flex items-center gap-2 text-sm font-bold uppercase px-6 py-3.5"
            >
              <Code2 className="w-4 h-4 text-[#383838]" />
              SOURCE CODE
            </a>
          </div>

          {/* Vibrant Neo-Brutalist AI Tech Stack Strip */}
          <div className="koby-trusted-strip pt-6 border-t border-[#383838]/20 space-y-3">
            <div className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#818181]">
              POWERED BY MODERN AI TECH STACK
            </div>
            <div className="flex flex-wrap items-center gap-3 font-mono text-xs font-bold text-[#383838]">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ffde00] border-2 border-[#383838] rounded-[2px] shadow-[-2px_2px_0px_0px_#383838]">
                <Database className="w-3.5 h-3.5 stroke-[2.5]" /> FAISS Vector Engine
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#6fc2ff] border-2 border-[#383838] rounded-[2px] shadow-[-2px_2px_0px_0px_#383838]">
                <GeminiLogo className="w-3.5 h-3.5" /> Gemini 2.0 Flash
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#ff9538] border-2 border-[#383838] rounded-[2px] shadow-[-2px_2px_0px_0px_#383838]">
                <Code2 className="w-3.5 h-3.5 stroke-[2.5]" /> Python 3.11
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#38c1b0] border-2 border-[#383838] rounded-[2px] shadow-[-2px_2px_0px_0px_#383838]">
                <BrainCircuit className="w-3.5 h-3.5 stroke-[2.5]" /> SentenceTransformers
              </span>
            </div>
          </div>

        </div>

        {/* Bottom Interactive Showcase Terminal Card */}
        <div className="koby-hero-console bg-white border-2 border-[#383838] rounded-[2px] shadow-[-8px_8px_0px_0px_#383838] overflow-hidden">

          {/* Terminal Top Strip with Q1, Q2, Q3 Scenario Switcher */}
          <div className="koby-scenario-bar bg-[#f4efea] border-b-2 border-[#383838] px-4 py-2.5 flex items-center justify-between gap-3">
            <div className="koby-scenario-options flex items-center gap-2 min-w-0">
              <span className="font-mono text-xs font-bold uppercase text-[#737373] tracking-wider">
                SCENARIOS:
              </span>
              {[
                { idx: 0, label: "Q1", title: "Cafe SOP" },
                { idx: 1, label: "Q2", title: "Menu Row" },
                { idx: 2, label: "Q3", title: "Multi-PDF" }
              ].map((q) => (
                <button
                  key={q.idx}
                  onClick={() => {
                    setSampleIndex(q.idx);
                    setCustomQuery("");
                  }}
                  className={`koby-scenario-button font-mono text-xs font-bold px-3 py-1 rounded-[2px] border-2 border-[#383838] transition-all cursor-pointer ${
                    sampleIndex === q.idx
                      ? "bg-[#ffde00] text-[#383838] shadow-[-2px_2px_0px_0px_#383838] -translate-y-0.5"
                      : "bg-white text-[#545454] hover:bg-[#fff9e6] hover:text-[#383838]"
                  }`}
                >
                  <span>{q.label}</span>
                  <span className="ml-1.5 text-[11px] opacity-70 hidden sm:inline">({q.title})</span>
                </button>
              ))}
            </div>

            <div className="koby-scenario-status flex items-center gap-2 font-mono text-xs font-bold text-[#383838] shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#00a389] animate-pulse" />
              <span className="text-[#818181] hidden sm:inline">FAISS + GEMINI 2.0</span>
            </div>
          </div>

          {/* Terminal Body Area */}
          <div className="koby-hero-console-body p-5 sm:p-7 space-y-4 font-mono text-xs text-[#383838]">

            {/* Top-Right User Question Speech Bubble */}
            <div className="flex justify-end">
              <div className="bg-[#f0efea] border-2 border-[#383838] rounded-2xl p-3.5 max-w-[85%] sm:max-w-[75%] font-medium text-[#383838] shadow-[-2px_2px_0px_0px_#383838] text-xs sm:text-sm leading-relaxed">
                {activeQuery}
              </div>
            </div>

            {/* Left Vertical Timeline Steps with Connecting Lines */}
            <div className="space-y-0">

              {/* Step 1: Query Guide */}
              <div className="flex items-center gap-3">
                <div className="w-6 flex justify-center items-center">
                  <GeminiLogo className="w-4 h-4" />
                </div>
                <span className="font-sans text-sm font-semibold text-[#545454]">
                  Get Query Guide &amp; Dense Embedding
                </span>
              </div>

              {/* Connector Line */}
              <div className="w-px bg-[#d5d2cb] h-5 ml-3 my-0.5" />

              {/* Step 2: Vector Scan */}
              <div className="flex items-center gap-3">
                <div className="w-6 flex justify-center items-center">
                  <GeminiLogo className="w-4 h-4" />
                </div>
                <span className="font-sans text-sm text-[#545454]">
                  {sample.scanLabel}
                </span>
              </div>

              {/* Connector Line */}
              <div className="w-px bg-[#d5d2cb] h-5 ml-3 my-0.5" />

              {/* Step 3: Vector Query Header */}
              <div className="flex items-center gap-3">
                <div className="w-6 flex justify-center items-center">
                  <GeminiLogo className="w-4 h-4" />
                </div>
                <span className="font-sans text-sm font-semibold text-[#545454]">
                  Koby AI / FAISS Vector Query
                </span>
              </div>

              {/* Step 3 Request SQL Code Block */}
              <div className="ml-9 rounded-xl bg-[#f8f9f8] border-2 border-[#383838] p-4 sm:p-5 font-mono text-xs sm:text-[13px] leading-relaxed my-2 shadow-[-2px_2px_0px_0px_#383838]">
                <div className="flex items-center justify-between text-[11px] font-bold text-[#818181] uppercase tracking-wider mb-2">
                  <span>Request</span>
                  <span className="text-[#38c1b0]">SIMILARITY: {(sample.confidence * 100).toFixed(0)}%</span>
                </div>
                <pre className="text-[#383838] font-bold overflow-x-auto leading-relaxed pt-1">
                  <code>
                    <span className="text-[#00a389]">SELECT</span> document_name, chunk_text, similarity{'\n'}
                    <span className="text-[#00a389]">FROM</span> match_document_chunks(:query_vector, 0.30, 5){'\n'}
                    <span className="text-[#00a389]">WHERE</span> document_name = <span className="text-[#e06842]">&apos;{sample.file}&apos;</span>{'\n'}
                    <span className="text-[#00a389]">ORDER BY</span> similarity <span className="text-[#00a389]">DESC</span>;
                  </code>
                </pre>
              </div>

              {/* Connector Line */}
              <div className="w-px bg-[#d5d2cb] h-5 ml-3 my-0.5" />

              {/* Step 4: Grounded Response */}
              <div className="flex items-start gap-3">
                <div className="w-6 flex justify-center items-center pt-0.5">
                  <GeminiLogo className="w-4 h-4" />
                </div>
                <div className="space-y-1.5 font-sans text-sm sm:text-base text-[#383838] leading-relaxed">
                  <p>{sample.response}</p>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-[#818181] font-mono pt-1">
                    <span>Citation: <strong className="text-[#383838]">{sample.citation}</strong></span>
                    <span>Similarity: <strong className="text-[#00a389]">{(sample.confidence * 100).toFixed(0)}%</strong></span>
                    <span>Latency: <strong className="text-[#383838]">{sample.latency}</strong></span>
                  </div>
                </div>
              </div>

            </div>

            {/* Interactive Input Card matching Image 1 */}
            <div className="rounded-2xl border-2 border-[#383838] bg-white p-3.5 sm:p-4 shadow-[-3px_3px_0px_0px_#383838] space-y-3 mt-4">
              {/* Top Row: Input and Connection Dot */}
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={queryInput}
                  onChange={(e) => setQueryInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && queryInput.trim()) {
                      handleCustomSubmit();
                    }
                  }}
                  placeholder="Ask Koby's cafe PDFs a follow-up..."
                  className="flex-1 bg-transparent border-none outline-none font-mono text-xs sm:text-sm text-[#383838] placeholder-[#999]"
                />
                <span className="w-2.5 h-2.5 rounded-full bg-[#00a389] ml-2 shrink-0" title="Connected to FAISS index" />
              </div>

              {/* Bottom Row: + button and Action controls */}
              <div className="flex items-center justify-between pt-1">
                <button
                  type="button"
                  className="text-2xl font-light text-[#737373] hover:text-[#383838] px-1 cursor-pointer transition-colors leading-none"
                  title="Attach document or audio"
                >
                  +
                </button>
                <div className="flex items-center gap-2 sm:gap-3">
                  {/* Gemini 2.0 Flash capsule with Google Gemini Sparkle Gradient Logo */}
                  <div className="flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-lg border border-[#e0ded8] bg-[#f8f7f4] font-sans text-xs font-semibold text-[#383838] cursor-pointer hover:bg-[#edebe6] transition-colors">
                    <GeminiLogo className="w-3.5 h-3.5" />
                    <span>Gemini 2.0 Flash</span>
                    <span className="text-[10px] text-[#737373]">▾</span>
                  </div>

                  {/* Settings Sliders */}
                  <button
                    type="button"
                    className="p-1.5 text-[#737373] hover:text-[#383838] transition-colors cursor-pointer"
                    title="Retrieval Settings"
                  >
                    <SlidersHorizontal className="w-4 h-4" />
                  </button>

                  {/* Orange Submit Button with Arrow Up */}
                  <button
                    type="button"
                    onClick={handleCustomSubmit}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-[#e06842] hover:bg-[#cf5832] text-white flex items-center justify-center font-bold shadow-sm transition-transform active:scale-95 cursor-pointer"
                    title="Send Query"
                  >
                    <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Status Bar Line */}
            <div className="flex items-center justify-between text-[11px] pt-2 border-t border-[#383838]/10 font-mono">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38c1b0]" />
                <span className="font-bold text-[#383838]">CONNECTED</span>
                <span className="px-1.5 py-0.5 bg-[#ffde00] border border-[#383838] rounded-[2px] text-[10px] font-bold">
                  LOCAL FAISS + SUPABASE READY
                </span>
              </div>
              <span className="text-[#818181] hidden sm:inline">CITED PDF CONTEXT</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

/*
 * 02. Problem Section
 */
export function ProblemSection() {
  const { problem } = kobyData;

  return (
    <section id="problem" className="py-16 md:py-24 border-b-2 border-[#383838] bg-white">
      <div className="koby-container">

        {/* Section Header */}
        <div className="mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#6fc2ff] bg-[#383838] px-3 py-1 rounded-[2px] uppercase">
            02. Business Problem
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            {problem.heading}
          </h2>
          <p className="font-mono text-base sm:text-lg text-[#383838] max-w-3xl mt-2 leading-relaxed">
            {problem.subheading}
          </p>
        </div>

        {/* Trapped Formats Visual Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 mb-12">
          {problem.trappedFormats.map((fmt, idx) => (
            <div
              key={idx}
              className="koby-card p-5 text-center hover:bg-[#ebf9ff] transition-all cursor-default space-y-2"
            >
              <div className="w-12 h-12 mx-auto mb-2 rounded-[2px] bg-[#ffde00] border-2 border-[#383838] flex items-center justify-center text-[#383838] shadow-[-2px_2px_0px_0px_#383838]">
                {idx === 0 && <FileText className="w-6 h-6" />}
                {idx === 1 && <FileCheck className="w-6 h-6" />}
                {idx === 2 && <BookOpen className="w-6 h-6" />}
                {idx === 3 && <ImageIcon className="w-6 h-6" />}
                {idx === 4 && <Mic className="w-6 h-6" />}
              </div>
              <h3 className="font-mono text-xs sm:text-sm font-bold text-[#383838] uppercase">
                {fmt.name}
              </h3>
              <p className="font-mono text-xs text-[#545454]">
                {fmt.count}
              </p>
            </div>
          ))}
        </div>

        {/* The Keyword Search Paradox Card (Canary Yellow Highlight Box) */}
        <div className="bg-[#ffde00] border-2 border-[#383838] rounded-[2px] p-6 sm:p-8 shadow-[-6px_6px_0px_0px_#383838] mb-12">
          <div className="flex items-center gap-2 mb-4">
            <span className="font-mono text-xs sm:text-sm font-bold uppercase bg-[#383838] text-white px-3 py-1 rounded-[2px]">
              THE TRADITIONAL KEYWORD SEARCH PARADOX
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            {/* User Knows */}
            <div className="bg-white border-2 border-[#383838] p-6 rounded-[2px] shadow-[-3px_3px_0px_0px_#383838]">
              <div className="font-mono text-xs sm:text-sm font-bold text-[#38c1b0] uppercase mb-1">
                ✓ THE USER OFTEN KNOWS:
              </div>
              <div className="font-mono text-lg sm:text-xl font-bold text-[#383838]">
                &ldquo;{problem.keywordParadox.userKnows}&rdquo;
              </div>
            </div>

            {/* User Does Not Know */}
            <div className="bg-white border-2 border-[#383838] p-6 rounded-[2px] shadow-[-3px_3px_0px_0px_#383838]">
              <div className="font-mono text-xs sm:text-sm font-bold text-[#f38e84] uppercase mb-1">
                ✕ BUT DOESN&apos;T KNOW:
              </div>
              <div className="font-mono text-lg sm:text-xl font-bold text-[#383838]">
                &ldquo;{problem.keywordParadox.userDoesNotKnow}&rdquo;
              </div>
            </div>
          </div>
        </div>

        {/* Friction Points List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problem.frictionPoints.map((point, idx) => (
            <div
              key={idx}
              className="koby-card p-6 flex gap-4 items-start"
            >
              <span className="w-9 h-9 shrink-0 rounded-[2px] bg-[#6fc2ff] border-2 border-[#383838] flex items-center justify-center font-mono font-bold text-base text-[#383838] shadow-[-2px_2px_0px_0px_#383838]">
                0{idx + 1}
              </span>
              <p className="font-mono text-xs sm:text-sm font-medium text-[#383838] leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * 03. Solution Section
 */
export function SolutionSection() {
  const { solution } = kobyData;

  const sketchBorders = [
    "border-[#f38e84]", // Coral
    "border-[#38c1b0]", // Mint
    "border-[#b291de]", // Lilac
    "border-[#6fc2ff]"  // Sky
  ];

  return (
    <section id="solution" className="py-16 md:py-24 border-b-2 border-[#383838]">
      <div className="koby-container">

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#ffde00] px-3 py-1 border-2 border-[#383838] rounded-[2px] uppercase shadow-[-2px_2px_0px_0px_#383838]">
            03. Solution
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            {solution.heading}
          </h2>
          <p className="font-mono text-base sm:text-lg text-[#383838] max-w-3xl mt-2 leading-relaxed">
            {solution.subheading}
          </p>
        </div>

        {/* Transformation Steps Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {solution.transformationSteps.map((item, idx) => (
            <div
              key={idx}
              className={`koby-card p-6 bg-white border-2 ${sketchBorders[idx % sketchBorders.length]} space-y-4 relative group hover:-translate-y-1 transition-transform`}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-3xl font-bold text-[#383838]">
                  {item.step}
                </span>
                <span className="w-9 h-9 rounded-[2px] bg-[#ebf9ff] border-2 border-[#383838] flex items-center justify-center font-mono text-xs font-bold text-[#6fc2ff]">
                  {idx === 0 ? "RAW" : idx === 1 ? "VEC" : idx === 2 ? "KNN" : "AI"}
                </span>
              </div>

              <div>
                <h3 className="font-mono text-sm sm:text-base font-bold text-[#383838] uppercase">
                  {item.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#545454] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              {idx < solution.transformationSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-4 top-1/2 -translate-y-1/2 z-10">
                  <div className="w-8 h-8 rounded-[2px] bg-[#ffde00] border-2 border-[#383838] flex items-center justify-center text-[#383838] font-bold text-xs shadow-[-2px_2px_0px_0px_#383838]">
                    ↓
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * 04. User Flow Section
 */
export function UserFlowSection() {
  const { userFlow } = kobyData;

  return (
    <section id="flow" className="py-16 md:py-24 border-b-2 border-[#383838] bg-white">
      <div className="koby-container">

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#38c1b0] px-3 py-1 border-2 border-[#383838] rounded-[2px] uppercase">
            04. User Flow Pipeline
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            {userFlow.heading}
          </h2>
          <p className="font-mono text-base sm:text-lg text-[#383838] max-w-3xl mt-2 leading-relaxed">
            {userFlow.subheading}
          </p>
        </div>

        {/* 10-Step Pipeline Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {userFlow.pipeline.map((step, idx) => (
            <div
              key={idx}
              className="koby-card p-5 bg-white border-2 border-[#383838] hover:bg-[#ebf9ff] transition-all flex flex-col justify-between"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="px-2.5 py-1 bg-[#6fc2ff] border border-[#383838] rounded-[2px] font-mono text-xs font-bold text-[#383838]">
                  STEP {step.number}
                </span>
                <span className="font-mono text-xs font-bold text-[#818181]">
                  STAGE {idx + 1}/10
                </span>
              </div>

              <div>
                <h3 className="font-mono text-sm font-bold text-[#383838] uppercase">
                  {step.title}
                </h3>
                <p className="font-mono text-xs sm:text-sm text-[#545454] mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              <div className="mt-4 pt-2 border-t border-[#383838]/10 text-right">
                <span className="font-mono text-xs text-[#38c1b0] font-bold uppercase">
                  {idx < 5 ? "INGESTION →" : "RETRIEVAL →"}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * 05. AI Layer Section
 */
export function AiLayerSection() {
  const { aiLayer } = kobyData;

  return (
    <section id="ai-layer" className="py-16 md:py-24 border-b-2 border-[#383838]">
      <div className="koby-container">

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#b291de] px-3 py-1 border-2 border-[#383838] rounded-[2px] uppercase">
            05. AI Layer Core
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            {aiLayer.heading}
          </h2>
          <p className="font-mono text-base sm:text-lg text-[#383838] max-w-3xl mt-2 leading-relaxed">
            {aiLayer.subheading}
          </p>
        </div>

        {/* 5 Core AI Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiLayer.components.map((comp, idx) => (
            <div
              key={idx}
              className="koby-card p-6 bg-white space-y-3 hover:border-[#6fc2ff] transition-colors"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-bold uppercase px-3 py-1 bg-[#ffde00] border border-[#383838] rounded-[2px]">
                  {comp.tag}
                </span>
                <span className="font-mono text-sm text-[#818181] font-bold">
                  0{idx + 1}
                </span>
              </div>

              <h3 className="font-mono text-lg font-bold text-[#383838] uppercase">
                {comp.name}
              </h3>

              <p className="font-mono text-xs sm:text-sm text-[#545454] leading-relaxed">
                {comp.desc}
              </p>
            </div>
          ))}

          {/* Architectural Note Box */}
          <div className="koby-card p-6 bg-[#6fc2ff]/30 border-2 border-[#383838] space-y-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-[#383838] font-mono text-sm font-bold uppercase mb-2">
                <Sparkles className="w-5 h-5" />
                INTELLIGENT KNOWLEDGE GRAPH
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#383838] leading-relaxed">
                By pairing 384-dimensional dense vector embeddings with FAISS CPU indexing, Koby resolves semantic context in &lt; 2.4 seconds across multi-gigabyte document archives.
              </p>
            </div>
            <div className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#6fc2ff] px-4 py-2 border border-[#383838] rounded-[2px] text-center shadow-[-2px_2px_0px_0px_#383838]">
              100% HALLUCINATION-FREE RAG
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * 06. Multimodal Section
 */
export function MultimodalSection() {
  const { multimodal } = kobyData;

  return (
    <section id="multimodal" className="py-16 md:py-24 border-b-2 border-[#383838] bg-white">
      <div className="koby-container">

        {/* Header */}
        <div className="mb-12 text-center max-w-3xl mx-auto">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#f38e84] px-3 py-1 border-2 border-[#383838] rounded-[2px] uppercase shadow-[-2px_2px_0px_0px_#383838]">
            06. Multimodal Engine
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            {multimodal.heading}
          </h2>
          <p className="font-mono text-base sm:text-lg text-[#383838] mt-2 leading-relaxed">
            {multimodal.subheading}
          </p>
        </div>

        {/* Multimodal Flow Diagram Visual */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          {multimodal.inputs.map((input, idx) => (
            <div
              key={idx}
              className="koby-card p-6 bg-[#f4efea] text-center space-y-3"
            >
              <div className="w-14 h-14 mx-auto rounded-[2px] bg-white border-2 border-[#383838] flex items-center justify-center text-[#383838] shadow-[-3px_3px_0px_0px_#383838]">
                {idx === 0 && <FileText className="w-7 h-7 text-[#6fc2ff]" />}
                {idx === 1 && <FileCheck className="w-7 h-7 text-[#f38e84]" />}
                {idx === 2 && <ImageIcon className="w-7 h-7 text-[#38c1b0]" />}
                {idx === 3 && <Mic className="w-7 h-7 text-[#ffde00]" />}
              </div>

              <h3 className="font-mono text-sm sm:text-base font-bold text-[#383838] uppercase">
                {input.type}
              </h3>
              <p className="font-mono text-xs sm:text-sm text-[#545454] leading-relaxed">
                {input.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Central Convergence Arrow & Unified Interface Box */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="font-mono text-3xl font-bold text-[#383838]">
            ↓
          </div>
          <div className="bg-[#6fc2ff] border-2 border-[#383838] p-6 sm:p-8 rounded-[2px] shadow-[-6px_6px_0px_0px_#383838]">
            <div className="font-mono text-xs sm:text-sm font-bold text-[#383838] uppercase tracking-widest mb-1">
              OUTPUT TARGET
            </div>
            <div className="font-mono text-xl sm:text-2xl font-bold text-[#383838]">
              {multimodal.unifiedOutput}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * 07. Architecture Section — Featuring the Authentic MotherDuck Isometric 3D Stack!
 */
export function ArchitectureSection() {
  const { architecture } = kobyData;

  return (
    <section id="architecture" className="py-16 md:py-24 border-b-2 border-[#383838]">
      <div className="koby-container">

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#ffde00] px-3 py-1 border-2 border-[#383838] rounded-[2px] uppercase shadow-[-2px_2px_0px_0px_#383838]">
            07. System Architecture
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            Koby AI 3D Topology &amp; Application Services
          </h2>
          <p className="font-mono text-base sm:text-lg text-[#383838] max-w-3xl mt-2 leading-relaxed">
            The real production topology: Django APIs, authenticated cafe workflows, PDF ingestion, local FAISS retrieval, Gemini answering, and optional Supabase storage.
          </p>
        </div>

        {/* Interactive 3D Isometric Topology Stack */}
        <div>
          <MotherDuckIsometricDiagram />
        </div>
      </div>
    </section>
  );
}

/*
 * 08. Business Value Section
 */
export function BusinessValueSection() {
  const { businessValue } = kobyData;

  return (
    <section id="business-value" className="py-16 md:py-24 border-b-2 border-[#383838] bg-white">
      <div className="koby-container">

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#6fc2ff] px-3 py-1 border-2 border-[#383838] rounded-[2px] uppercase shadow-[-2px_2px_0px_0px_#383838]">
            08. Business Value &amp; ROI
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            {businessValue.heading}
          </h2>
          <p className="font-mono text-base sm:text-lg text-[#383838] max-w-3xl mt-3 bg-[#ffde00]/40 p-4 border-2 border-[#383838] rounded-[2px] shadow-[-3px_3px_0px_0px_#383838]">
            &ldquo;{businessValue.subheading}&rdquo;
          </p>
        </div>

        {/* 4 Core Outcomes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {businessValue.outcomes.map((outcome, idx) => (
            <div
              key={idx}
              className="koby-card p-6 bg-[#f4efea] border-2 border-[#383838] space-y-3 hover:bg-[#ebf9ff] transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-[2px] bg-[#ffde00] border-2 border-[#383838] flex items-center justify-center font-mono font-bold text-sm text-[#383838] shadow-[-2px_2px_0px_0px_#383838]">
                  0{idx + 1}
                </span>
                <h3 className="font-mono text-base sm:text-lg font-bold text-[#383838] uppercase">
                  {outcome.title}
                </h3>
              </div>
              <p className="font-mono text-xs sm:text-sm text-[#545454] leading-relaxed">
                {outcome.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/*
 * 09. Results & Benchmarks Section
 */
export function ResultsSection() {
  const { results } = kobyData;

  return (
    <section id="results" className="py-16 md:py-24 border-b-2 border-[#383838]">
      <div className="koby-container">

        {/* Header */}
        <div className="mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#38c1b0] px-3 py-1 border-2 border-[#383838] rounded-[2px] uppercase">
            09. Capabilities &amp; Configuration
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            {results.heading}
          </h2>
          <p className="font-mono text-base sm:text-lg text-[#383838] max-w-3xl mt-2 leading-relaxed">
            {results.subheading}
          </p>
        </div>

        {/* Benchmarks Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {results.benchmarks.map((bm, idx) => (
            <div
              key={idx}
              className="koby-card p-6 bg-white border-2 border-[#383838] text-center space-y-2"
            >
              <div className="font-mono text-3xl sm:text-4xl font-bold text-[#383838]">
                {bm.score}
              </div>
              <div className="font-mono text-xs sm:text-sm font-bold text-[#6fc2ff] uppercase">
                {bm.name}
              </div>
              <div className="font-mono text-xs text-[#545454]">
                {bm.note}
              </div>
            </div>
          ))}
        </div>

        {/* Capabilities Delivered List */}
        <div className="bg-[#ffde00] border-2 border-[#383838] p-6 sm:p-8 rounded-[2px] shadow-[-6px_6px_0px_0px_#383838]">
          <h3 className="font-mono text-sm sm:text-base font-bold text-[#383838] uppercase mb-4">
            CAPABILITIES DELIVERED IN PRODUCTION:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {results.capabilities.map((cap, idx) => (
              <div
                key={idx}
                className="bg-white border-2 border-[#383838] p-4 rounded-[2px] flex items-center gap-3 font-mono text-xs sm:text-sm font-bold text-[#383838] shadow-[-2px_2px_0px_0px_#383838]"
              >
                <CheckCircle2 className="w-5 h-5 text-[#38c1b0] shrink-0" />
                <span>{cap}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/*
 * 10. Conclusion Section
 */
export function ConclusionSection() {
  const { conclusion } = kobyData;

  return (
    <section id="conclusion" className="py-16 md:py-24 bg-white">
      <div className="koby-container max-w-4xl">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="font-mono text-xs sm:text-sm font-bold text-[#383838] bg-[#ffde00] px-3 py-1 border-2 border-[#383838] rounded-[2px] uppercase shadow-[-2px_2px_0px_0px_#383838]">
            10. Production Delivery
          </span>
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-[#383838] uppercase mt-3">
            {conclusion.heading}
          </h2>
        </div>

        {/* Quote Card with Open Quotation Marks */}
        <div className="koby-card p-8 bg-[#ffde00] border-2 border-[#383838] rounded-[2px] space-y-4 mb-8 text-center shadow-[-8px_8px_0px_0px_#383838] relative">
          <div className="font-mono text-6xl text-[#383838] leading-none select-none opacity-40">
            &ldquo;
          </div>
          <p className="font-mono text-lg sm:text-xl md:text-2xl font-bold text-[#383838] leading-relaxed -mt-6">
            &ldquo;{conclusion.quote}&rdquo;
          </p>
        </div>

        {/* Production implementation highlight */}
        <div className="bg-[#ebf9ff] border-2 border-[#383838] p-6 sm:p-8 rounded-[2px] space-y-3 mb-12 shadow-[-6px_6px_0px_0px_#383838]">
          <div className="font-mono text-xs sm:text-sm font-bold text-[#6fc2ff] uppercase bg-[#383838] px-3 py-1 rounded-[2px] inline-block">
            PRODUCTION IMPLEMENTATION
          </div>
          <p className="font-mono text-sm sm:text-base text-[#383838] leading-relaxed">
            {conclusion.zsConnection}
          </p>
        </div>

        {/* Final CTA Card */}
        <div className="text-center bg-[#f4efea] border-2 border-[#383838] p-8 sm:p-10 rounded-[2px] space-y-6 shadow-[-8px_8px_0px_0px_#383838]">
          <h3 className="font-mono text-2xl sm:text-3xl font-bold text-[#383838] uppercase">
            READY TO TRY KOBY&apos;S AI VECTOR SYSTEM?
          </h3>
          <p className="font-mono text-sm sm:text-base text-[#545454]">
            Inspect the Django application, PDF ingestion, FAISS retrieval, admin workflows, and Supabase path on GitHub.
          </p>
          <div className="pt-2">
            <a
              href={KOBY_AI_GITHUB}
              target="_blank"
              rel="noopener noreferrer"
              className="koby-btn-primary inline-flex items-center gap-2 text-sm sm:text-base px-6 py-3.5"
            >
              <Terminal className="w-5 h-5" />
              OPEN GITHUB REPOSITORY
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
