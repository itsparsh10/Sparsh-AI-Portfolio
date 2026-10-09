"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Menu, X, ChevronDown, Coffee } from "lucide-react";
import { KOBY_AI_GITHUB } from "../koby-ai-data";

export function KobyNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="koby-nav">
      <div className="kdOTzw iGpCog">
        
        {/* Brand mark — Koby's Cafe coffee mug */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 group whitespace-nowrap">
            <div className="w-8 h-8 rounded-[2px] bg-[#ffde00] border-2 border-[#383838] flex items-center justify-center font-mono font-bold text-base text-[#383838] shadow-[-2px_2px_0px_0px_#383838] group-hover:scale-105 transition-transform">
              <Coffee className="w-5 h-5 stroke-[2.4]" aria-hidden="true" />
            </div>
            <span className="font-mono text-base font-bold uppercase tracking-wider text-[#383838] group-hover:opacity-80 transition-opacity">
              KOBY&apos;S AI
            </span>
          </Link>

          {/* Desktop Navigation Links with MotherDuck style dropdown carets */}
          <nav className="hidden xl:flex items-center gap-6 font-mono text-xs font-bold uppercase text-[#383838]">
            <a
              href="#hero"
              className="flex items-center gap-1 hover:text-[#6fc2ff] transition-colors tracking-wider"
            >
              PRODUCT <ChevronDown className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="#problem"
              className="hover:text-[#6fc2ff] transition-colors tracking-wider"
            >
              PROBLEM
            </a>
            <a
              href="#solution"
              className="hover:text-[#6fc2ff] transition-colors tracking-wider"
            >
              SOLUTION
            </a>
            <a
              href="#flow"
              className="hover:text-[#6fc2ff] transition-colors tracking-wider"
            >
              FLOW
            </a>
            <a
              href="#ai-layer"
              className="flex items-center gap-1 hover:text-[#6fc2ff] transition-colors tracking-wider"
            >
              AI LAYER <ChevronDown className="w-3 h-3 opacity-60" />
            </a>
            <a
              href="#architecture"
              className="hover:text-[#6fc2ff] transition-colors tracking-wider"
            >
              3D TOPOLOGY
            </a>
            <a
              href="#results"
              className="hover:text-[#6fc2ff] transition-colors tracking-wider"
            >
              PROJECT FACTS
            </a>
          </nav>
        </div>

        {/* Action Buttons Right Row */}
        <div className="flex items-center gap-3">
          
          <Link
            href="/"
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[2px] bg-white border-2 border-[#383838] font-mono text-xs font-bold uppercase text-[#383838] hover:bg-[#f8f8f7] transition-all shadow-[-2px_2px_0px_0px_#383838]"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Portfolio
          </Link>

          <a
            href={KOBY_AI_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-[2px] bg-[#6fc2ff] border-2 border-[#383838] font-mono text-xs font-bold uppercase text-[#383838] hover:bg-[#5ab6f5] transition-all shadow-[-2px_2px_0px_0px_#383838]"
          >
            START FREE
          </a>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-1.5 rounded-[2px] border-2 border-[#383838] text-[#383838] hover:bg-[#ffde00] transition-colors"
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-[#f4efea] border-b-2 border-[#383838] px-6 py-5 space-y-3 font-mono text-xs font-bold uppercase">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            01. Product &amp; Console
          </a>
          <a
            href="#problem"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            02. Business Problem
          </a>
          <a
            href="#solution"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            03. Solution Pipeline
          </a>
          <a
            href="#flow"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            04. 10-Step User Flow
          </a>
          <a
            href="#ai-layer"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            05. AI Layer (Embeddings &amp; RAG)
          </a>
          <a
            href="#multimodal"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            06. Multimodal Ingestion Engine
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            07. 3D Isometric Topology
          </a>
          <a
            href="#business-value"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            08. Business Value &amp; ROI
          </a>
          <a
            href="#results"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            09. Capabilities &amp; Configuration
          </a>
          <a
            href="#conclusion"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1.5 text-[#383838] hover:text-[#6fc2ff]"
          >
            10. Production Delivery
          </a>
        </div>
      )}
    </header>
  );
}
