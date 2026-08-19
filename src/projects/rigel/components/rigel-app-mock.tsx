"use client";

import { useEffect, useState } from "react";
import {
  Brain,
  Boxes,
  Cpu,
  FolderClosed,
  MessageSquare,
  Settings,
  Sparkles,
} from "lucide-react";

/**
 * Simulated RIGEL -- MK-I product UI.
 * The product carries its own dark chrome + orange brand identity,
 * framed inside the light Linear-style page — the interface is the marketing.
 */

function WindowBar({ view }: { view: string }) {
  return (
    <div className="rg-app-bar">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#383b3f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#383b3f]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#383b3f]" />
      </div>
      <span className="rg-mono text-[11px] tracking-[0.14em] text-[#62666d]">
        RIGEL&nbsp;//&nbsp;MK-I — {view}
      </span>
      <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-[rgba(228,242,34,0.35)] bg-[rgba(228,242,34,0.08)] px-2.5 py-[3px]">
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--rg-lime)]" />
        <span className="rg-mono text-[10px] tracking-[0.12em] text-[#cdd2da]">
          OFFLINE · LOCAL
        </span>
      </span>
    </div>
  );
}

function Sidebar({ active }: { active: string }) {
  const items = [
    { icon: Boxes, label: "Model Manager" },
    { icon: Brain, label: "Memory" },
    { icon: MessageSquare, label: "Chat" },
    { icon: FolderClosed, label: "Workspace" },
    { icon: Settings, label: "Settings" },
  ];
  return (
    <aside className="rg-app-side hidden sm:flex w-[172px] shrink-0 flex-col gap-1 p-3">
      {items.map((item) => (
        <div
          key={item.label}
          className={`rg-app-navitem ${active === item.label ? "is-active" : ""}`}
        >
          <item.icon className="h-3.5 w-3.5" />
          {item.label}
        </div>
      ))}
      <div className="mt-auto rounded-md border border-[#23252a] bg-[#0c0d0e] p-2.5">
        <div className="rg-mono text-[9.5px] tracking-[0.1em] text-[#62666d]">LOADED MODEL</div>
        <div className="mt-1 text-[11.5px] text-[#d0d6e0]">Llama 3.2 · 3B · Q4_K_M</div>
        <div className="mt-2 h-1 overflow-hidden rounded-full bg-[#23252a]">
          <div className="h-full w-[62%] rounded-full bg-[var(--rg-orange)]" />
        </div>
        <div className="rg-mono mt-1 text-[9.5px] text-[#62666d]">RAM 62% · 258 MB</div>
      </div>
    </aside>
  );
}

/** Blinking cursor for the assistant reply — the page feels alive. */
function Caret() {
  const [on, setOn] = useState(true);
  useEffect(() => {
    const t = setInterval(() => setOn((v) => !v), 530);
    return () => clearInterval(t);
  }, []);
  return (
    <span
      className="ml-0.5 inline-block h-[13px] w-[7px] translate-y-[2px] rounded-[2px]"
      style={{ background: on ? "var(--rg-orange)" : "transparent" }}
    />
  );
}

export function RigelAppMock() {
  return (
    <div className="rg-app flex flex-col md:flex-row" aria-label="RIGEL main interface">
      <Sidebar active="Chat" />
      <div className="min-w-0 flex-1">
        <WindowBar view="Chat" />
        <div className="flex flex-col gap-4 p-4 sm:p-5">
          {/* user message */}
          <div className="ml-auto max-w-[86%] rounded-lg rounded-br-sm border border-[#2b2e63] bg-[rgba(99,102,241,0.1)] px-3.5 py-2.5 text-[13.5px] leading-relaxed text-[#e0e4eb]">
            Summarize the auth flow in my project and remember the token strategy I chose.
          </div>

          {/* retrieval chips */}
          <div className="flex flex-wrap gap-1.5">
            <span className="rg-app-chip">
              <Brain className="h-3 w-3 text-[var(--rg-orange)]" /> Memory · 3 sessions
            </span>
            <span className="rg-app-chip">
              <FolderClosed className="h-3 w-3 text-[var(--rg-teal)]" /> Docs · auth-flow.md
            </span>
            <span className="rg-app-chip">
              <Sparkles className="h-3 w-3 text-[var(--rg-violet)]" /> Project · rigel-core
            </span>
          </div>

          {/* assistant response */}
          <div className="max-w-[92%] rounded-lg rounded-bl-sm border border-[#23252a] bg-[#131415] px-3.5 py-3 text-[13.5px] leading-relaxed text-[#c7ccd4]">
            <span className="mb-1.5 flex items-center gap-1.5">
              <Cpu className="h-3 w-3 text-[var(--rg-lime)]" />
              <span className="rg-mono text-[10px] tracking-[0.12em] text-[#8a8f98]">
                LOCAL · CONTEXT BUILT FROM 5 SOURCES
              </span>
            </span>
            Your flow issues a short-lived access token from the local API, refreshes it
            silently, and stores nothing outside the runtime — I&apos;ve saved the strategy to
            memory for future sessions.
            <Caret />
          </div>

          {/* status line */}
          <div className="rg-mono flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-[#1c1d1f] pt-3 text-[10px] tracking-[0.06em] text-[#62666d]">
            <span>tok/s 24.1</span>
            <span>ctx 8k</span>
            <span>model llama-3.2-3b-q4</span>
            <span className="text-[var(--rg-lime)]">● 100% local</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export function RigelMemoryMock() {
  const memories = [
    { text: "Prefers SQLite over Postgres for portable apps", source: "chat · 2d ago", type: "pref" },
    { text: "Project rigel-core uses Rust + Axum local API", source: "workspace · 5d ago", type: "fact" },
    { text: "Token strategy: short-lived access, silent refresh", source: "chat · today", type: "fact" },
    { text: "Runs RIGEL from a 1TB SSD on macOS", source: "session · 1w ago", type: "env" },
  ];
  return (
    <div className="rg-app flex flex-col md:flex-row">
      <Sidebar active="Memory" />
      <div className="min-w-0 flex-1">
        <WindowBar view="Memory" />
        <div className="flex flex-col gap-2 p-4 sm:p-5">
          {memories.map((m) => (
            <div
              key={m.text}
              className="group flex cursor-default items-start gap-3 rounded-md border border-[#23252a] bg-[#131415] px-3 py-2.5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-[#3a3e47] hover:bg-[#17181a] hover:shadow-[0_8px_24px_-8px_rgba(0,0,0,0.5)]"
            >
              <Brain className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[var(--rg-orange)] transition-all duration-500 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_6px_rgba(255,100,0,0.5)]" />
              <div className="min-w-0 transition-transform duration-500 ease-out group-hover:translate-x-1">
                <div className="text-[12.5px] leading-snug text-[#d0d6e0] transition-colors duration-500 group-hover:text-[#f8f9fa]">{m.text}</div>
                <div className="rg-mono mt-1 text-[9.5px] tracking-[0.08em] text-[#62666d] transition-colors duration-500 group-hover:text-[#a1a6b0]">
                  {m.source} · {m.type}
                </div>
              </div>
            </div>
          ))}
          <div className="rg-mono mt-1 text-[10px] tracking-[0.08em] text-[#62666d]">
            1,284 memories · retrieved by semantic similarity · never leaves the device
          </div>
        </div>
      </div>
    </div>
  );
}

export function RigelModelsMock() {
  const models = [
    { name: "Llama 3.2 · 3B", quant: "Q4_K_M", size: "258 MB", state: "loaded" },
    { name: "Qwen 2.5 · 1.5B", quant: "Q5_K_M", size: "1.1 GB", state: "available" },
    { name: "Phi 3.5 · Mini", quant: "Q4_0", size: "2.2 GB", state: "available" },
  ];
  return (
    <div className="rg-app flex flex-col md:flex-row">
      <Sidebar active="Model Manager" />
      <div className="min-w-0 flex-1">
        <WindowBar view="Model Manager" />
        <div className="grid gap-2.5 p-4 sm:p-5 sm:grid-cols-3">
          {models.map((m) => (
            <div
              key={m.name}
              className={`rounded-md border px-3 py-3 ${m.state === "loaded"
                  ? "border-[rgba(228,242,34,0.4)] bg-[rgba(228,242,34,0.05)]"
                  : "border-[#23252a] bg-[#131415]"
                }`}
            >
              <div className="flex items-center justify-between">
                <Boxes className="h-3.5 w-3.5 text-[#8a8f98]" />
                {m.state === "loaded" && (
                  <span className="rg-mono text-[9px] tracking-[0.12em] text-[var(--rg-lime)]">
                    ● LOADED
                  </span>
                )}
              </div>
              <div className="mt-2 text-[12.5px] text-[#d0d6e0]">{m.name}</div>
              <div className="rg-mono mt-1 text-[10px] text-[#62666d]">
                {m.quant} · {m.size}
              </div>
            </div>
          ))}
        </div>
        <div className="rg-mono border-t border-[#1c1d1f] px-5 py-3 text-[10px] tracking-[0.06em] text-[#62666d]">
          GGUF execution via llama.cpp · hardware threads auto-detected
        </div>
      </div>
    </div>
  );
}

export function RigelWorkspaceMock() {
  return (
    <div className="rg-app flex flex-col md:flex-row">
      <Sidebar active="Workspace" />
      <div className="min-w-0 flex-1">
        <WindowBar view="Workspace" />
        <div className="grid gap-0 md:grid-cols-[1fr_260px]">
          <div className="border-b border-[#1c1d1f] p-4 sm:p-5 md:border-b-0 md:border-r">
            <div className="rg-mono mb-3 text-[10px] tracking-[0.12em] text-[#62666d]">
              PROJECT · rigel-core/src
            </div>
            <pre className="rg-mono overflow-hidden text-[11.5px] leading-[1.7] text-[#aeb4bd]">
              <span className="text-[#62666d]">{"// context build pipeline\n"}</span>
              {"let ctx = ContextBuilder::new()\n"}
              {"    .memory(top_k(5))\n"}
              {'    .retrieval(docs("auth-flow.md"))\n'}
              {"    .system(workspace_state())\n"}
              {"    .build()?;"}
            </pre>
          </div>
          <div className="flex flex-col gap-2.5 p-4 sm:p-5">
            <div className="rg-mono text-[10px] tracking-[0.12em] text-[#62666d]">
              AI SIDECAR
            </div>
            <div className="rounded-md border border-[#23252a] bg-[#131415] px-3 py-2.5 text-[12px] leading-relaxed text-[#c7ccd4]">
              &ldquo;This pipeline is why responses carry project context — want me to
              explain the retrieval window?&rdquo;
            </div>
            <div className="flex flex-wrap gap-1.5">
              <span className="rg-app-chip">Explain</span>
              <span className="rg-app-chip">Add tests</span>
              <span className="rg-app-chip">Refactor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
