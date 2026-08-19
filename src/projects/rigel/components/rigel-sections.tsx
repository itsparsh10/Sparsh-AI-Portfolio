"use client";

import { ArrowUpRight } from "lucide-react";
import { rigel, RIGEL_GITHUB } from "../rigel-data";

// ==========================================
// 1. HERO
// ==========================================
export function RigelHero() {
return (
    <section id="overview" className="rg-section relative !pt-20 !pb-8">
      <div className="rg-container relative flex flex-col">
        <h2 className="rg-hero-title mt-4 max-w-[900px] leading-[1.1]">
          {rigel.headline.map((line) => (
            <span key={line} className="rg-hero-line block overflow-hidden pb-2">
              <span className="block">{line}</span>
            </span>
          ))}
        </h2>

        <p className="rg-hero-fade mt-6 rg-lead max-w-[650px]">
          {rigel.oneLiner}
        </p>

        <p className="rg-hero-fade mt-6 font-mono text-[14px] tracking-wide text-[var(--rg-muted)]">
          {rigel.motto}
        </p>

        <div className="rg-hero-fade mt-6 flex flex-wrap items-center gap-4">
          <a
            href="#download"
            className="rg-btn rg-btn-primary"
          >
            Download RIGEL
          </a>
          <a
            href={RIGEL_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rg-btn rg-btn-ghost"
          >
            Explore GitHub
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>

        <div className="rg-hero-fade mt-8 flex flex-wrap gap-3">
          {rigel.pills.map((p) => (
            <span key={p} className="rg-pill">
              {p}
            </span>
          ))}
        </div>

        <div className="relative mt-12 w-full overflow-hidden rounded-lg">
          <div className="rg-hero-app">
            <img
              src="/images/rigel/landing.png"
              alt="RIGEL UI"
              className="w-full max-w-full h-auto object-contain border border-[var(--rg-border-strong)] rounded-lg shadow-[0_8px_32px_rgba(0,0,0,0.04)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 2. THE PROBLEM
// ==========================================
export function RigelWhy() {
  return (
    <section className="rg-section rg-section-white">
      <div className="rg-container">
        <div className="max-w-[720px]">
          <span className="rg-kicker">The Problem</span>
          <p className="rg-h2 mt-6 md:mt-8 !text-[22px] md:!text-[32px] !leading-[1.3] whitespace-pre-wrap">{rigel.why.problem}</p>
        </div>

        <div className="mt-12 md:mt-20 grid gap-8 md:gap-12 md:grid-cols-3 border-t border-[var(--rg-border-strong)] pt-12">
          <div className="flex flex-col opacity-80">
            <div className="rg-label !text-[var(--rg-ink)] mb-4">{rigel.why.cloud[0]}</div>
            <div className="text-[20px] font-[500] text-[var(--rg-muted)] whitespace-pre-wrap">{rigel.why.cloud[1]}</div>
          </div>
          <div className="flex flex-col opacity-80">
            <div className="rg-label !text-[var(--rg-ink)] mb-4">{rigel.why.local[0]}</div>
            <div className="text-[20px] font-[500] text-[var(--rg-muted)] whitespace-pre-wrap">{rigel.why.local[1]}</div>
          </div>
          <div className="flex flex-col">
            <div className="rg-label !text-[var(--rg-orange)] mb-4">{rigel.why.rigel[0]}</div>
            <div className="text-[20px] font-[500] text-[var(--rg-ink)] whitespace-pre-wrap">{rigel.why.rigel[1]}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 3. THE IDEA
// ==========================================
export function RigelIdea() {
  return (
    <section className="rg-section">
      <div className="rg-container">
        <span className="rg-kicker">The Idea</span>
        <p className="rg-h2 mt-8 max-w-[800px] whitespace-pre-wrap">{rigel.idea.intro}</p>
        <p className="rg-lead mt-6 max-w-[650px]">{rigel.idea.desc}</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rigel.idea.layers.map((layer) => (
            <div key={layer.name} className="p-8 border border-[var(--rg-border-strong)] bg-white">
              <h4 className="text-[20px] font-medium text-[var(--rg-ink)] mb-4">{layer.name}</h4>
              <p className="text-[15px] text-[var(--rg-muted)]">{layer.desc}</p>
            </div>
          ))}
        </div>

        <p className="rg-lead mt-16 w-full text-center md:text-left">{rigel.idea.outro}</p>
      </div>
    </section>
  );
}

// ==========================================
// 4. MEMORY
// ==========================================
export function RigelMemory() {
  return (
    <section className="rg-section rg-section-white border-t-0" id="intelligence">
      <div className="rg-container">
        <div className="mb-16">
          <span className="rg-kicker">Memory</span>
          <h2 className="rg-h2 mt-8 max-w-[800px]">How <span className="text-[var(--rg-orange)]">RIGEL</span> Remembers.</h2>
        </div>

        <div className="flex flex-col md:flex-row gap-16 border-t border-[var(--rg-border-strong)] pt-16">
          <div className="flex-1 flex flex-col gap-6 w-full">
            {rigel.memory.pipeline.map((step) => (
              <div key={step.step} className="flex flex-col gap-2 border-b border-[var(--rg-border)] pb-6">
                <div className="flex items-center gap-6">
                  <div className="text-[12px] font-mono text-[var(--rg-muted)]">{step.step} — {step.name}</div>
                </div>
                <div className="text-[20px] font-[500] text-[var(--rg-ink)]">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>

          <div className="flex-1 w-full bg-[var(--rg-elevated)] p-10 border border-[var(--rg-border-strong)] self-start sticky top-32 mt-8 lg:mt-12">
            <div className="rg-mono text-[12px] text-[var(--rg-orange)] uppercase tracking-wider mb-8">Example Context</div>
            <div className="space-y-8">
              {rigel.memory.example.map((item) => (
                <div key={item.label} className="border-l-2 border-[var(--rg-ink)] pl-6">
                  <div className="text-[13px] font-mono text-[var(--rg-muted)] mb-2">{item.label}</div>
                  <div className="text-[18px] font-[500] text-[var(--rg-ink)]">{item.val}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 5. ENGINEERING / WORKFLOW
// ==========================================
export function RigelEngineering() {
return (
    <section className="rg-section" id="engineering">
      <div className="rg-container">
        <span className="rg-kicker">Engineering</span>
        <p className="rg-h2 mt-8">{rigel.engineering.tagline}</p>
        <p className="rg-lead mt-6 max-w-[800px]">{rigel.engineering.desc}</p>

        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {rigel.engineering.workflow.map((step, i) => (
              <div key={step.step} className="flex flex-col items-start bg-[var(--rg-canvas)]">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-mono text-[13px] border ${i === rigel.engineering.workflow.length - 1 ? "bg-[var(--rg-orange)] text-white border-[var(--rg-orange)]" : "bg-[var(--rg-canvas)] text-[var(--rg-muted)] border-[var(--rg-border-strong)]"}`}>
                  {step.step}
                </div>
                <div className={`mt-6 text-[15px] font-[500] mb-2 ${i === rigel.engineering.workflow.length - 1 ? "text-[var(--rg-orange)]" : "text-[var(--rg-ink)]"}`}>
                  {step.name}
                </div>
                <div className="text-[13px] text-[var(--rg-muted)] leading-relaxed">
                  {step.desc}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8">
          <p className="rg-mono text-[13px] tracking-wide text-[var(--rg-muted)] leading-relaxed text-center">
            {rigel.engineering.techLine}
          </p>
        </div>

      </div>
    </section>
  );
}

// ==========================================
// 6. PORTABILITY
// ==========================================
export function RigelPortability() {
  return (
    <section className="rg-section rg-section-white border-t-0">
      <div className="rg-container">
        <div className="max-w-[700px]">
          <span className="rg-kicker">Portable Intelligence</span>
          <p className="rg-h2 mt-8">{rigel.portability.tagline}</p>
          <p className="rg-lead mt-6 whitespace-pre-wrap">{rigel.portability.desc}</p>
        </div>

        <div className="mt-16 flex flex-wrap justify-center items-center gap-4 pb-4">
          {rigel.portability.flow.split("→").map((item, i, arr) => (
            <div key={i} className="flex items-center gap-4 shrink-0">
              <div className="px-6 py-4 bg-white border border-[var(--rg-border-strong)] font-mono text-[14px] text-[var(--rg-ink)] whitespace-nowrap text-center">
                {item.trim()}
              </div>
              {i < arr.length - 1 && (
                <div className="w-8 h-px bg-[var(--rg-border-strong)]"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 7. MODELS
// ==========================================
export function RigelModels() {
  return (
    <section className="rg-section border-t-0" id="models">
      <div className="rg-container">
        <span className="rg-kicker">Models</span>
        <p className="rg-h2 mt-8 max-w-[800px] whitespace-pre-wrap">{rigel.models.intro}</p>
        <p className="rg-lead mt-6 max-w-[700px] text-[var(--rg-muted)]">{rigel.models.desc}</p>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-3 gap-px bg-[var(--rg-border-strong)] border border-[var(--rg-border-strong)]">
          {rigel.models.local.map((model) => (
            <div key={model.name} className="flex flex-col bg-white p-8 md:p-12">
              <span className="text-[24px] md:text-[32px] font-medium tracking-tight text-[var(--rg-ink)] mb-2">
                {model.name}
              </span>
              <span className="text-[14px] font-mono text-[var(--rg-muted)] uppercase tracking-wider">
                {model.company}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-8 border-l-2 border-[var(--rg-orange)] pl-4">
          <p className="text-[14px] text-[var(--rg-muted)] font-mono max-w-[600px] leading-relaxed">
            {rigel.models.note}
          </p>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 8. WHY RIGEL
// ==========================================
export function RigelFeatures() {
  return (
    <section className="rg-section rg-section-white border-t-0">
      <div className="rg-container">
        <span className="rg-kicker">Why Rigel</span>
        <p className="rg-h2 mt-8 mb-16">{rigel.features.tagline}</p>

        <div className="flex flex-col gap-6 w-full max-w-[800px] border-t border-[var(--rg-border-strong)] pt-12">
          {rigel.features.list.map((feature, i) => (
            <div key={feature.name} className="flex flex-col md:flex-row md:items-start gap-4 md:gap-12 border-b border-[var(--rg-border)] pb-6">
              <div className="text-[12px] font-mono text-[var(--rg-muted)] w-12 shrink-0 pt-1">0{i+1}</div>
              <div className="flex flex-col gap-2">
                <h4 className="text-[20px] font-[500] text-[var(--rg-ink)]">{feature.name}</h4>
                <p className="text-[16px] text-[var(--rg-muted)] leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 9. ARCHITECTURE
// ==========================================
export function RigelArchitecture() {
  return (
    <section className="rg-section border-t-0">
      <div className="rg-container">
        <span className="rg-kicker">Architecture</span>
        <p className="rg-h2 mt-8 mb-6">{rigel.architecture.tagline}</p>
        <p className="rg-lead mb-16 max-w-[650px]">{rigel.architecture.desc}</p>

        <div className="flex flex-col max-w-[500px]">
          {rigel.architecture.layers.map((layer, i) => (
            <div key={layer} className="flex flex-col">
              <div className="p-6 bg-white border border-[var(--rg-border-strong)] text-center font-mono text-[14px] text-[var(--rg-ink)] tracking-wide">
                {layer}
              </div>
              {i < rigel.architecture.layers.length - 1 && (
                <div className="flex justify-center py-2">
                  <div className="w-px h-8 bg-[var(--rg-border-strong)]"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        <p className="rg-lead mt-16 max-w-[700px]">{rigel.architecture.outro}</p>
      </div>
    </section>
  );
}

// ==========================================
// 10. GET RIGEL (DOWNLOAD)
// ==========================================
export function RigelDownload() {
  return (
    <section className="rg-section rg-section-white border-t-0" id="download">
      <div className="rg-container">
        <span className="rg-kicker">Get Rigel</span>
        <p className="rg-h2 mt-8">{rigel.download.tagline}</p>
        <p className="rg-lead mt-6">{rigel.download.desc}</p>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {rigel.download.versions.map((v) => (
            <div key={v.name} className="flex flex-col p-10 border border-[var(--rg-border-strong)] bg-[var(--rg-canvas)] relative overflow-hidden group">
              <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--rg-border-strong)] group-hover:bg-[var(--rg-orange)] transition-colors"></div>
              <h4 className="text-[24px] font-medium text-[var(--rg-ink)]">{v.name}</h4>
              <p className="rg-mono text-[12px] text-[var(--rg-orange)] uppercase tracking-wider mt-2 mb-6">{v.subtitle}</p>
              <p className="text-[15px] text-[var(--rg-body)] mb-10 flex-1">{v.desc}</p>
              
              <div className="border-t border-[var(--rg-border-strong)] pt-6 mb-8">
                <span className="text-[12px] uppercase text-[var(--rg-muted)] font-mono block mb-2">Best For:</span>
                <span className="text-[14px] font-medium text-[var(--rg-ink)]">{v.bestFor}</span>
              </div>
              
              <a href={v.name.includes("Full") ? "https://github.com/itsparsh10/RIGEL/releases/download/v1.0.0-MKI/RIGEL-MK-I-Full.zip" : "https://github.com/itsparsh10/RIGEL/releases/download/v1.0.0-MKI/RIGEL-MK-I-Lite.zip"} download className="rg-btn rg-btn-primary w-full mt-auto">Download {v.name.split("—")[1].trim()}</a>
            </div>
          ))}
        </div>

        <div className="mt-32">
          <h3 className="text-[24px] font-[500] text-[var(--rg-ink)] mb-12">Quick Start</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {rigel.download.quickStart.map((step) => (
              <div key={step.step} className="flex flex-col">
                <div className="text-[14px] font-mono text-[var(--rg-orange)] mb-3">{step.step} — {step.name}</div>
                <div className="text-[15px] text-[var(--rg-muted)] leading-relaxed">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24">
          <h4 className="rg-kicker mb-6">{rigel.download.note.title}</h4>
          <ul className="space-y-4 max-w-[800px] list-none">
            {rigel.download.note.desc.split("\n\n").map((point, i) => (
              <li key={i} className="text-[15px] text-[var(--rg-muted)] leading-relaxed flex items-start gap-3">
                <span className="text-[var(--rg-orange)] mt-1">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 11. FINAL CTA & FOOTER
// ==========================================
export function RigelClosing() {
  return (
    <section className="rg-section bg-[#111111] text-white flex flex-col justify-between min-h-[600px] !pb-0">
      <div className="rg-container flex-1 flex flex-col justify-center items-center text-center w-full pb-20 pt-10">
        <h2 className="rg-mono text-[14px] tracking-[0.2em] text-[var(--rg-orange)] uppercase mb-6">
          {rigel.finalCta.title}
        </h2>
        <h3 className="rg-display !text-white max-w-[900px] leading-[1.05]">
          {rigel.finalCta.subtitle}
        </h3>
        <p className="rg-lead mt-8 !text-white max-w-[650px]">
          {rigel.finalCta.desc}
        </p>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-6">
          <a
            href="#download"
            className="rg-btn"
            style={{ background: "white", color: "var(--rg-ink)", border: "1px solid white" }}
          >
            Download RIGEL
          </a>
          <a
            href={RIGEL_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rg-btn"
            style={{ background: "var(--rg-orange)", color: "var(--rg-ink)", border: "1px solid var(--rg-orange)" }}
          >
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 12. WHAT I BUILT
// ==========================================
export function RigelWhatIBuilt() {
  return (
    <section className="rg-section">
      <div className="rg-container">
        <span className="rg-kicker">What I built</span>
        <p className="rg-h2 mt-8 mb-16 max-w-[850px]">{rigel.whatIBuilt.intro}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rigel.whatIBuilt.items.map((item) => (
            <div key={item.name} className="p-8 border border-[var(--rg-border-strong)] bg-white flex flex-col hover:border-[var(--rg-orange)] transition-colors">
              <h4 className="text-[18px] font-[500] text-[var(--rg-ink)] mb-3">{item.name}</h4>
              <p className="text-[15px] text-[var(--rg-muted)] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 13. ENGINEERING CHALLENGES
// ==========================================
export function RigelEngineeringChallenges() {
  return (
    <section className="rg-section bg-[#111111] text-white border-t border-[var(--rg-border-strong)]">
      <div className="rg-container">
        <span className="rg-kicker">Problem Solving</span>
        <h2 className="rg-h2 mt-8 mb-16 !text-white">Engineering Challenges</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-[1000px]">
          {rigel.engineeringChallenges.items.map((chal, i) => (
            <div key={i} className="flex flex-col group">
              <h3 className="text-[20px] md:text-[24px] font-[500] text-white mb-4 leading-tight group-hover:text-[var(--rg-orange)] transition-colors">
                {chal.name}
              </h3>
              <p className="text-[16px] text-[#a1a1aa] leading-relaxed">
                {chal.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 14. TECH STACK
// ==========================================
export function RigelTechStack() {
  return (
    <section className="rg-section border-t-0" id="tech-stack">
      <div className="rg-container">
        <span className="rg-kicker">Technical Stack</span>
        <h2 className="rg-h2 mt-8 mb-16">Built with</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 border-t border-[var(--rg-border-strong)] pt-12 max-w-[1000px] mx-auto">
          {rigel.techStack.items.map((stack) => (
            <div key={stack.name} className="flex flex-col items-center text-center">
              <span className="rg-label !text-[var(--rg-orange)] mb-4">{stack.name}</span>
              <span className="text-[18px] font-[500] text-[var(--rg-ink)] whitespace-pre-wrap leading-snug">
                {stack.desc.split(" · ").join("\n")}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ==========================================
// 15. WHAT THIS DEMONSTRATES
// ==========================================
export function RigelDemonstrates() {
  return (
    <section className="rg-section rg-section-white border-t-0" id="value">
      <div className="rg-container">
        <span className="rg-kicker">The Value</span>
        <h2 className="rg-h2 mt-8 mb-16 max-w-[800px]">What RIGEL demonstrates</h2>
        
        <div className="flex flex-col gap-6 max-w-[800px]">
          {rigel.demonstrates.items.map((item) => (
            <div key={item.name} className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-8 border-b border-[var(--rg-border)] pb-6">
              <div className="text-[16px] font-[500] text-[var(--rg-ink)] sm:w-[220px] shrink-0 pt-1">
                {item.name}
              </div>
              <div className="text-[16px] text-[var(--rg-muted)] leading-relaxed">
                {item.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
