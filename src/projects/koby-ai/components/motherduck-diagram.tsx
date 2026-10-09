"use client";

import React, { useState } from "react";
import { ArrowRight, Code2, Database, FileText, Server, ShieldCheck, Sparkles, Terminal, Users } from "lucide-react";

type Layer = "tools" | "ingest" | "admin" | "storage" | "interface" | "security" | "runtime";

const layerNames: Record<Layer, string> = {
  tools: "Tools & Languages",
  ingest: "PDF Ingestion",
  admin: "Admin & Collaboration",
  storage: "Data & Vector Storage",
  interface: "Application Interfaces",
  security: "Security & Access",
  runtime: "Retrieval & Answering",
};

const palette = {
  mint: { top: "#53dbc9", left: "#2ab5a3", right: "#218f82" },
  blue: { top: "#6fc2ff", left: "#4ea3dd", right: "#317db3" },
  yellow: { top: "#ffde00", left: "#e0c200", right: "#bda300" },
  orange: { top: "#ff9538", left: "#e0791f", right: "#ba5e10" },
  neutral: { top: "#ffffff", left: "#818181", right: "#575757" },
};

function StackSlab({ primary, secondary, active, tone }: { primary: string; secondary: string; active: boolean; tone: keyof typeof palette }) {
  const colors = active ? palette[tone] : palette.neutral;
  return (
    <svg viewBox="0 0 300 108" className="block w-full drop-shadow-md" aria-label={`${primary} ${secondary}`}>
      <polygon points="150,6 294,38 150,70 6,38" fill={colors.top} stroke="#383838" strokeWidth="2.5" />
      <polygon points="6,38 150,70 150,98 6,66" fill={colors.left} stroke="#383838" strokeWidth="2.5" />
      <polygon points="150,70 294,38 294,66 150,98" fill={colors.right} stroke="#383838" strokeWidth="2.5" />
      <text x="150" y="34" textAnchor="middle" dominantBaseline="middle" fill="#383838" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="12" fontWeight="800" letterSpacing="0.5">{primary}</text>
      <text x="150" y="50" textAnchor="middle" dominantBaseline="middle" fill="#383838" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9.5" fontWeight="700" letterSpacing="0.35">{secondary}</text>
    </svg>
  );
}

function SplitSlab({ lines, active, tone }: { lines: [string, string]; active: boolean; tone: keyof typeof palette }) {
  const colors = active ? palette[tone] : palette.neutral;
  return (
    <svg viewBox="0 0 170 94" className="block w-full drop-shadow-md" aria-label={lines.join(" ")}>
      <polygon points="85,5 164,32 85,59 6,32" fill={colors.top} stroke="#383838" strokeWidth="2.5" />
      <polygon points="6,32 85,59 85,84 6,57" fill={colors.left} stroke="#383838" strokeWidth="2.5" />
      <polygon points="85,59 164,32 164,57 85,84" fill={colors.right} stroke="#383838" strokeWidth="2.5" />
      <text x="85" y="28" textAnchor="middle" dominantBaseline="middle" fill="#383838" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="9" fontWeight="800" letterSpacing="0.35">{lines[0]}</text>
      <text x="85" y="41" textAnchor="middle" dominantBaseline="middle" fill="#383838" fontFamily="ui-monospace, SFMono-Regular, Menlo, monospace" fontSize="8.5" fontWeight="700">{lines[1]}</text>
    </svg>
  );
}

function DiagramCard({ layer, activeLayer, onActivate, accent, children }: { layer: Layer; activeLayer: Layer; onActivate: (layer: Layer) => void; accent: string; children: React.ReactNode }) {
  const active = activeLayer === layer;
  return (
    <button type="button" onMouseEnter={() => onActivate(layer)} onFocus={() => onActivate(layer)} onClick={() => onActivate(layer)} className={`w-full text-left p-4 rounded-[2px] border-2 border-[#383838] transition-all cursor-pointer ${active ? `${accent} shadow-[-5px_5px_0_0_#383838] -translate-y-0.5` : "bg-white hover:bg-[#ebf9ff]"}`}>
      {children}
    </button>
  );
}

export function MotherDuckIsometricDiagram() {
  const [activeLayer, setActiveLayer] = useState<Layer>("tools");
  const authActive = activeLayer === "ingest" || activeLayer === "admin" || activeLayer === "security";

  return (
    <div className="w-full bg-[#f4efea] border-2 border-[#383838] rounded-[2px] p-4 sm:p-8 md:p-10 shadow-[-8px_8px_0_0_#383838] relative overflow-hidden select-none">
      <div className="flex flex-wrap items-end justify-between gap-4 mb-7 border-b-2 border-[#383838] pb-4">
        <div>
          <span className="inline-flex font-mono text-xs font-bold uppercase bg-[#ffde00] text-[#383838] px-2.5 py-1 border border-[#383838] rounded-[2px]">INTERACTIVE 3D KNOWLEDGE TOPOLOGY</span>
          <h3 className="font-mono text-xl sm:text-2xl font-bold text-[#383838] uppercase mt-2">Koby&apos;s Cafe PDF-Q&amp;A Production Stack</h3>
        </div>
        <div className="font-mono text-xs text-[#818181] flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full bg-[#38c1b0]" />Hover, focus, or click a node to inspect its layer</div>
      </div>

      <div className="relative">
        <svg className="absolute inset-0 hidden lg:block w-full h-full pointer-events-none z-0" viewBox="0 0 1200 620" preserveAspectRatio="none" fill="none" aria-hidden="true">
          <g stroke="#383838" strokeWidth="2" strokeLinecap="round">
            <path d="M350 78 C420 78 448 104 505 104" /><path d="M850 78 C785 78 758 104 695 104" />
            <path d="M350 220 C420 220 450 242 505 242" /><path d="M850 250 C785 250 752 242 695 242" />
            <path d="M350 365 C420 365 450 375 505 375" /><path d="M850 468 C775 468 755 375 695 375" />
            <path d="M350 535 C425 535 454 508 505 508" />
          </g>
          <g stroke="#383838" strokeWidth="2">
            {[{cx:350,cy:78,fill:"#53dbc9"},{cx:850,cy:78,fill:"#6fc2ff"},{cx:350,cy:220,fill:"#ff9538"},{cx:850,cy:250,fill:"#ffde00"},{cx:350,cy:365,fill:"#6fc2ff"},{cx:850,cy:468,fill:"#ff9538"},{cx:350,cy:535,fill:"#6fc2ff"}].map(({cx,cy,fill}) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="5" fill={fill} />)}
          </g>
        </svg>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.9fr_1fr] gap-7 lg:gap-9 items-stretch relative z-10">
          <div className="space-y-4 lg:min-h-[620px] lg:flex lg:flex-col lg:justify-between">
            <DiagramCard layer="tools" activeLayer={activeLayer} onActivate={setActiveLayer} accent="bg-[#53dbc9]">
              <div className="flex items-center justify-between gap-3 font-mono text-xs font-bold uppercase tracking-wider mb-2"><span className="flex items-center gap-2"><Code2 className="w-4 h-4" />Tools &amp; Languages</span><span className="text-[10px] px-1.5 py-0.5 bg-[#383838] text-white rounded-[2px]">INGEST</span></div>
              <div className="flex flex-wrap items-center gap-2 mb-2">{["🐍 Python","Django","PyPDF2","HTML / CSS / JS"].map(item => <span key={item} className="px-2 py-0.5 bg-[#f4efea] border border-[#383838] rounded-[2px] font-mono text-xs font-bold">{item}</span>)}</div>
              <p className="font-mono text-xs text-[#545454] leading-relaxed">Django ingests the cafe PDF library, extracts text with PyPDF2, and prepares overlapping chunks for embedding.</p>
            </DiagramCard>
            <DiagramCard layer="ingest" activeLayer={activeLayer} onActivate={setActiveLayer} accent="bg-[#ffde00]">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider mb-2"><span className="flex items-center gap-2"><FileText className="w-4 h-4" />PDF Ingestion</span><ArrowRight className="w-4 h-4" /></div>
              <p className="font-mono text-xs font-semibold leading-relaxed">Upload → extract → 1,000-character chunks → embed → index</p>
            </DiagramCard>
            <DiagramCard layer="admin" activeLayer={activeLayer} onActivate={setActiveLayer} accent="bg-[#ff9538]">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider mb-2"><span className="flex items-center gap-2"><Users className="w-4 h-4" />Admin &amp; Collaboration</span><ArrowRight className="w-4 h-4" /></div>
              <p className="font-mono text-xs font-semibold leading-relaxed">Role-based users, live sessions, document control, feedback, and contribution moderation</p>
            </DiagramCard>
            <DiagramCard layer="storage" activeLayer={activeLayer} onActivate={setActiveLayer} accent="bg-[#6fc2ff]">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider mb-2"><span className="flex items-center gap-2"><Database className="w-4 h-4" />Storage Engine</span></div>
              <div className="space-y-1.5 font-mono text-xs">{[["FAISS index + metadata.json","Local","#38c1b0"],["Supabase Postgres + pgvector","Cloud","#6fc2ff"],["SQLite users, sessions & feedback","App","#ff9538"]].map(([name,badge,color]) => <div key={name} className="px-2.5 py-1 bg-[#f4efea] border border-[#383838] rounded-[2px] flex items-center justify-between gap-3 font-semibold"><span>{name}</span><span style={{color}} className="font-bold shrink-0">{badge}</span></div>)}</div>
            </DiagramCard>
          </div>

          <div className="flex flex-col items-center justify-center gap-1 lg:min-h-[620px] py-4 lg:py-0">
            <div className="grid grid-cols-2 gap-2 w-full max-w-[360px] mb-1">
              <button type="button" onMouseEnter={() => setActiveLayer("tools")} onFocus={() => setActiveLayer("tools")} onClick={() => setActiveLayer("tools")} className="cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none"><SplitSlab lines={["WEB","EXPERIENCE"]} active={activeLayer === "tools"} tone="mint" /></button>
              <button type="button" onMouseEnter={() => setActiveLayer("interface")} onFocus={() => setActiveLayer("interface")} onClick={() => setActiveLayer("interface")} className="cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none"><SplitSlab lines={["DJANGO","REST API"]} active={activeLayer === "interface"} tone="blue" /></button>
            </div>
            <button type="button" onMouseEnter={() => setActiveLayer("security")} onFocus={() => setActiveLayer("security")} onClick={() => setActiveLayer("security")} className="w-full max-w-[300px] cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none"><StackSlab primary="AUTH + ADMIN" secondary="CONTRIBUTIONS" active={authActive} tone="yellow" /></button>
            <button type="button" onMouseEnter={() => setActiveLayer("runtime")} onFocus={() => setActiveLayer("runtime")} onClick={() => setActiveLayer("runtime")} className="w-full max-w-[300px] cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none"><StackSlab primary="PDF CHUNKS + FAISS" secondary="GEMINI ANSWERING" active={activeLayer === "runtime"} tone="orange" /></button>
            <button type="button" onMouseEnter={() => setActiveLayer("storage")} onFocus={() => setActiveLayer("storage")} onClick={() => setActiveLayer("storage")} className="w-full max-w-[300px] cursor-pointer transition-transform hover:-translate-y-1 focus:outline-none"><StackSlab primary="SQLITE + SUPABASE" secondary="PDF & VECTOR STORAGE" active={activeLayer === "storage"} tone="blue" /></button>
          </div>

          <div className="space-y-4 lg:min-h-[620px] lg:flex lg:flex-col lg:justify-between">
            <DiagramCard layer="interface" activeLayer={activeLayer} onActivate={setActiveLayer} accent="bg-[#6fc2ff]">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider mb-2"><span className="flex items-center gap-2"><Terminal className="w-4 h-4" />Application Interfaces</span><span>&gt;_</span></div>
              <div className="grid grid-cols-3 gap-2 mb-2">{["USER Q&A","ADMIN","REST API"].map(item => <span key={item} className="p-2 bg-[#f4efea] border border-[#383838] rounded-[2px] text-center font-mono text-[11px] font-bold">{item}</span>)}</div>
              <p className="font-mono text-xs text-[#545454] leading-relaxed">Responsive cafe assistant, Django admin workflows, and authenticated REST endpoints for search and management.</p>
            </DiagramCard>
            <DiagramCard layer="security" activeLayer={activeLayer} onActivate={setActiveLayer} accent="bg-[#ffde00]">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider mb-2"><span className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" />Security &amp; Access</span><span className="text-[10px] px-1.5 py-0.5 bg-[#383838] text-[#ffde00] rounded-[2px]">DJANGO</span></div>
              <p className="font-mono text-xs leading-relaxed">Registration, login, Admin/Manager/User roles, password hashing, CSRF protection, secure sessions, and input validation.</p>
            </DiagramCard>
            <DiagramCard layer="runtime" activeLayer={activeLayer} onActivate={setActiveLayer} accent="bg-[#ffecd6]">
              <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider mb-1"><span className="flex items-center gap-2"><Server className="w-4 h-4" />Production Services</span></div>
              <p className="font-mono text-[11px] text-[#818181] mb-2">Local-first retrieval with an optional managed Supabase path</p>
              <div className="space-y-1 font-mono text-xs">{[["◆ DJANGO","Web, API, auth, admin","#f38e844d"],["◆ FAISS","Local semantic retrieval","#38c1b04d"],["◆ SUPABASE","PDF storage + pgvector","#6fc2ff4d"]].map(([name,detail,color]) => <div key={name} style={{backgroundColor:color}} className="flex items-center justify-between gap-3 px-2 py-1 border border-[#383838] rounded-[2px]"><span className="font-bold shrink-0">{name}</span><span className="text-[10px] text-[#545454] text-right">{detail}</span></div>)}</div>
            </DiagramCard>
          </div>
        </div>
      </div>

      <div className="mt-7 pt-4 border-t-2 border-[#383838] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
        <div className="flex items-center gap-2 text-[#383838] font-bold"><Sparkles className="w-4 h-4 text-[#ff9538]" /><span>Active layer:</span><span className="px-2 py-0.5 bg-[#383838] text-white rounded-[2px] uppercase">{layerNames[activeLayer]}</span></div>
        <div className="text-[#818181]">Django 4.2+ · DRF · FAISS · sentence-transformers · Gemini 2.0 Flash · SQLite · Supabase</div>
      </div>
    </div>
  );
}
