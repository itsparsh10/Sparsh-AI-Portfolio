"use client";

import { useState } from "react";
import Link from "next/link";
import { Github, ArrowLeft, Menu, X } from "lucide-react";
import { SUPPORT_AGENT_GITHUB } from "../support-agent-data";

export function SupportAgentNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sa-nav">
      <div className="sa-container flex h-16 items-center justify-between gap-4">
        {/* Brand Name */}
        <Link href="/" className="flex items-center gap-2 group whitespace-nowrap">
          <span className="font-sans text-xs sm:text-sm font-bold uppercase tracking-wider text-[var(--sa-ink-black)] group-hover:opacity-80 transition-opacity truncate max-w-[200px] sm:max-w-none">
            Support Resolution Agent
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#hero"
            className="font-sans text-sm font-normal text-[var(--sa-slate-gray)] hover:text-[var(--sa-ink-black)] transition-colors whitespace-nowrap"
          >
            Overview
          </a>
          <a
            href="#demo-simulator"
            className="font-sans text-sm font-normal text-[var(--sa-slate-gray)] hover:text-[var(--sa-ink-black)] transition-colors whitespace-nowrap"
          >
            Simulator
          </a>
          <a
            href="#architecture"
            className="font-sans text-sm font-normal text-[var(--sa-slate-gray)] hover:text-[var(--sa-ink-black)] transition-colors whitespace-nowrap"
          >
            Architecture
          </a>
          <a
            href="#results"
            className="font-sans text-sm font-normal text-[var(--sa-slate-gray)] hover:text-[var(--sa-ink-black)] transition-colors whitespace-nowrap"
          >
            Metrics
          </a>
        </nav>

        {/* Action Controls & Mobile Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={SUPPORT_AGENT_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="sa-btn sa-btn-ghost text-xs !py-1.5 !px-3 sm:!px-3.5"
          >
            <Github className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <Link href="/" className="sa-btn sa-btn-primary text-xs !py-1.5 !px-3 sm:!px-4">
            <ArrowLeft className="h-3.5 w-3.5 mr-0.5" />
            <span className="hidden xs:inline">Portfolio</span>
            <span className="xs:hidden">Back</span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-[var(--sa-ink-black)] hover:bg-black/5 transition-colors"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF8F5] border-b border-[var(--sa-hairline)] px-6 py-4 space-y-3 animate-in slide-in-from-top-2 duration-200">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-sans text-sm font-medium text-[var(--sa-ink-black)] py-1"
          >
            Overview
          </a>
          <a
            href="#demo-simulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-sans text-sm font-medium text-[var(--sa-ink-black)] py-1"
          >
            Live Simulator
          </a>
          <a
            href="#architecture"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-sans text-sm font-medium text-[var(--sa-ink-black)] py-1"
          >
            System Architecture
          </a>
          <a
            href="#results"
            onClick={() => setMobileMenuOpen(false)}
            className="block font-sans text-sm font-medium text-[var(--sa-ink-black)] py-1"
          >
            Metrics & Evaluation
          </a>
        </div>
      )}
    </header>
  );
}


