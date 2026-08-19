"use client";
import heroImg3 from "./images/7.png";
import Image from "next/image";
import heroImg1 from "./images/3.png";
import heroImg4 from "./images/8.png";
import heroImg5 from "./images/11.png";
import heroImg2 from "./images/5.png";
import Link from "next/link";
import { Activity, ArrowDown, ArrowRight, BarChart3, Box, Briefcase, Building, CheckCircle2, ChevronRight, Code2, Database, Download, Layers, LayoutDashboard, LayoutTemplate, LineChart, Lock, LogIn, Network, ShieldCheck, Sliders, UserPlus, Users } from "lucide-react";

import { NC_GITHUB, bentoFeatures, engineeringChallenges, ncNavLinks, platformFlow, techStack } from "./nc-data";

import { useEffect, useState } from "react";


export default function NCDashboardPage() {
  return (
    <>
      <NcNav />
      <main className="flex flex-col">
        <NcHero />
        
        <NcWhatIBuilt />

        <div className="bg-[#eff6ff] w-full py-32 border-y border-[#bfdbfe]">
          <NcBento />
        </div>

        <NcProblem />

        <div className="bg-white w-full">
          <NcFeatures />
        </div>
        
        <div className="w-full">
          <NcFlow />
        </div>

        <NcHighlights />

        <NcDemonstrates />

        <NcCta />
      </main>
      <NcFooter />
    </>
  );
}


function NcFeatures() {
  return (
    <>
      {/* Platform Flow Section */}
      <section id="platform" className="py-24 border-b border-[#e4e7ec] bg-white">
        <div className="attio-container flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <div className="attio-eyebrow mb-6">The Platform</div>
            <h2 className="attio-heading text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] mb-6">
              From raw data <br />to <span className="text-[#6f7988]">insight.</span>
            </h2>
            <p className="attio-body mb-8">
              Instead of forcing teams to move between disconnected systems, NC Dashboard provides a common operational layer for organizing the information behind day-to-day decisions.
            </p>
          </div>
          <div className="lg:w-1/2 w-full flex justify-center">
            <div className="flex flex-col gap-3 w-full max-w-sm">
              {platformFlow.map((step, i) => (
                <div key={i} className="flex items-center gap-4 w-full p-4 rounded-xl border border-[#e4e7ec] bg-[#f4f5f6]/50 shadow-sm">
                  <div className="flex-1 font-mono text-[13px] font-medium tracking-wider text-[#1c1d1f]">{step}</div>
                  {i < platformFlow.length - 1 && <ArrowRight className="h-4 w-4 text-[#8f99a8]" />}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <NcCapabilities />

      {/* Engineering Challenges */}
      <section id="engineering" className="py-32 bg-[#020617] text-white border-t border-[#1e293b]">
        <div className="attio-container">
          <div className="mb-20 text-center">
            <div className="inline-block px-4 py-1.5 rounded-full border border-[#3b82f6]/40 bg-[#3b82f6]/10 text-[13px] text-[#93c5fd] font-medium mb-6 shadow-[0_0_15px_rgba(59,130,246,0.15)]">
              Problem Solving
            </div>
            <h2 className="attio-heading text-[32px] sm:text-[40px] md:text-[56px] leading-[1.1] mb-6 !text-white">
              Engineering Architecture
            </h2>
            <p className="attio-body text-[18px] text-[#bfdbfe] max-w-2xl mx-auto">
              Designing the system meant solving real-world persistence, authentication, connectivity, and analytics problems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 max-w-[1100px] mx-auto">
            {engineeringChallenges.map((chal, i) => (
              <div key={i} className="group">
                <h3 className="attio-heading text-[28px] !text-white mb-4">{chal.title}</h3>
                <p className="attio-body text-[18px] !text-white leading-relaxed">{chal.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NcSystemArchitecture />

      {/* Tech Stack */}
      <section id="architecture" className="py-32 bg-[#f8fafc] border-t border-[#e4e7ec]">
        <div className="attio-container text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[13px] text-[#1d4ed8] mb-6 shadow-sm">
            Technology
          </div>
          <h2 className="attio-heading text-[36px] sm:text-[48px] md:text-[64px] mb-20 tracking-[-0.03em]">Pragmatic full-stack <br className="hidden md:block" />architecture</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 max-w-[1200px] mx-auto">
            {techStack.map((stack, i) => (
              <div key={i} className="text-left p-10 rounded-[24px] bg-white border border-[#e4e7ec] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(37,99,235,0.08)] transition-all duration-300 hover:-translate-y-1">
                <h3 className="text-[20px] font-semibold text-[#1c1d1f] mb-6 pb-6 border-b border-[#e4e7ec]">{stack.category}</h3>
                <ul className="space-y-5">
                  {stack.items.map((item, j) => (
                    <li key={j} className="flex items-center text-[16px] text-[#505967] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#2563eb] mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <NcTechDecisions />
    </>
  );
}


function NcNav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full top-0 z-50">
      <header className={`border-b transition-colors duration-300 ${scrolled ? 'bg-white/95 border-[#e4e7ec] backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
        {/* Banner */}
        <div className="flex h-10 w-full items-center justify-center bg-[#2563eb] border-b border-[#1d4ed8] shadow-[0_1px_2px_rgba(0,0,0,0.01)] text-[13px] text-white hover:underline cursor-pointer group">
          <span className="relative font-medium tracking-wide">
            Orchestrate operational data with NC Dashboard
            <ArrowRight className="inline-block h-3.5 w-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        </div>
        
        {/* Main Nav */}
        <div className="attio-container flex items-center justify-between py-4 relative">
          <Link href="/" className="font-mono text-xl font-bold tracking-tighter text-[#1c1d1f] flex items-center group z-10">
            NC Dashboard
          </Link>
          
          <nav className="hidden lg:flex items-center gap-2 absolute left-1/2 -translate-x-1/2">
            {ncNavLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                className="px-3 py-2 text-[15px] font-medium text-[#505967] hover:text-[#1c1d1f] transition-colors rounded-lg hover:bg-[#f4f5f6]"
              >
                {link.label}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center gap-3 z-10">
            <Link href="/" className="hidden md:inline-flex px-4 py-2 text-[15px] font-medium text-[#1c1d1f] hover:bg-[#f4f5f6] rounded-xl transition-colors">
              Portfolio Home
            </Link>
            <a href={NC_GITHUB} target="_blank" rel="noopener noreferrer" className="attio-btn-primary">
              View on GitHub
            </a>
          </div>
        </div>
      </header>
    </div>
  );
}


function NcBento() {
  const icons = [
    <Users key="users" className="text-[#1c1d1f] h-6 w-6" />,
    <Building key="building" className="text-[#1c1d1f] h-6 w-6" />,
    <Activity key="activity" className="text-[#1c1d1f] h-6 w-6" />,
    <Briefcase key="briefcase" className="text-[#1c1d1f] h-6 w-6" />
  ];

  const cardStyles = [
    { bg: "bg-[#eff6ff]", text: "text-[#1d4ed8]", border: "border-[#bfdbfe]" },
    { bg: "bg-[#f0fdf4]", text: "text-[#15803d]", border: "border-[#bbf7d0]" },
    { bg: "bg-[#fefce8]", text: "text-[#b45309]", border: "border-[#fef08a]" },
    { bg: "bg-[#fdf2f8]", text: "text-[#be185d]", border: "border-[#fbcfe8]" },
  ];

  const descriptions = [
    "Manage profiles, roles, account status, and user records from a centralized workspace.",
    "Track entities, office locations, hierarchy structures, and organizational performance data.",
    "Monitor real-time workflow statuses, system event logs, and operational health metrics.",
    "Coordinate job openings, applicant pipelines, recruitment stages, and hiring outcomes."
  ];

  return (
    <section id="use-cases" className="attio-container py-12">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="attio-heading text-[32px] md:text-[48px] tracking-[-0.02em] mb-4">
          One platform. <span className="text-[#2563eb]">Multiple surfaces.</span>
        </h2>
        <p className="attio-body max-w-2xl mx-auto mb-16">
          NC Dashboard provides a centralized operational layer for managing the data and workflows that connect users, companies, jobs, and analytics.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {bentoFeatures.map((feat, i) => (
          <div 
            key={i} 
            className={`attio-bento p-8 flex flex-col justify-between ${feat.colSpan} min-h-[300px] bg-white group cursor-pointer`}
          >
            <div>
              <div className={`h-12 w-12 rounded-xl ${cardStyles[i].bg} border ${cardStyles[i].border} flex items-center justify-center mb-6 shadow-sm transition-transform duration-300 group-hover:scale-110`}>
                <div className={cardStyles[i].text}>
                  {icons[i]}
                </div>
              </div>
              <h3 className="attio-heading text-[24px] mb-3">{feat.title}</h3>
              <p className="attio-body text-[16px] leading-[1.5] text-[#505967]">{descriptions[i]}</p>
            </div>
            
            <div className={`mt-8 flex items-center text-[15px] font-medium opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 ${cardStyles[i].text}`}>
              Explore {feat.title.toLowerCase()} <ChevronRight className="h-4 w-4 ml-1" />
            </div>
            
            {/* Optional: Add abstract UI graphics here in the future to mimic Attio's bento visuals */}
          </div>
        ))}
      </div>
    </section>
  );
}


function NcHighlights() {
  const highlights = [
    { label: "2 databases", value: "PostgreSQL + MongoDB" },
    { label: "4 core surfaces", value: "Users · Companies · Jobs · Analytics" },
    { label: "External analytics", value: "GA4 integration" },
    { label: "Remote connectivity", value: "SSH tunneling + fallback" },
    { label: "Full-stack application", value: "Next.js + Django" }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#e4e7ec]">
      <div className="attio-container max-w-5xl">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="attio-heading text-[32px] md:text-[40px] leading-[1.1]">
            Engineering Highlights
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((h, i) => (
            <div key={i} className="flex flex-col">
              <span className="text-[20px] font-bold text-[#1c1d1f] mb-2">{h.label}</span>
              <span className="text-[15px] text-[#505967]">{h.value}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function NcFlow() {
  const flowSteps = [
    { 
      title: "Registration", 
      desc: "Users create an account and establish their application identity.",
      icon: <UserPlus className="w-6 h-6 text-[#2563eb]" /> 
    },
    { 
      title: "Authentication", 
      desc: "MongoDB-backed authentication manages login and session state.",
      icon: <LogIn className="w-6 h-6 text-[#2563eb]" /> 
    },
    { 
      title: "Dashboard Hub", 
      desc: "Users access centralized users, companies, jobs, and analytics surfaces.",
      icon: <LayoutDashboard className="w-6 h-6 text-[#2563eb]" /> 
    },
    { 
      title: "Administration", 
      desc: "Authorized users manage records, users, and analytics configuration.",
      icon: <ShieldCheck className="w-6 h-6 text-[#2563eb]" /> 
    },
    { 
      title: "Export & Save", 
      desc: "Operational views can be saved and data can be extracted for further use.",
      icon: <Download className="w-6 h-6 text-[#2563eb]" /> 
    }
  ];

  return (
    <section id="user-flow" className="py-32 bg-white border-t border-[#e4e7ec]">
      <div className="attio-container">
        <div className="mb-24 text-center">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#bfdbfe] bg-[#eff6ff] text-[13px] text-[#1d4ed8] font-medium mb-6 shadow-sm">
            User Journey
          </div>
          <h2 className="attio-heading text-[36px] sm:text-[48px] md:text-[64px] tracking-[-0.03em] max-w-4xl mx-auto">
            From account to <span className="text-[#2563eb]">insight.</span>
          </h2>
        </div>

        {/* Horizontal Flow Container */}
        <div className="relative max-w-[1200px] mx-auto px-4 md:px-12 mt-12">
          {/* Continuous Line (Desktop only) */}
          <div className="hidden lg:block absolute top-[44px] left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-[#eff6ff] via-[#bfdbfe] to-[#eff6ff]"></div>
          
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 lg:gap-4 relative z-10">
            {flowSteps.map((step, index) => (
              <div key={index} className="flex flex-row lg:flex-col items-center group w-full lg:w-1/5 relative">
                
                {/* Arrow connector for mobile */}
                {index !== flowSteps.length - 1 && (
                  <div className="lg:hidden absolute left-10 top-[70px] bottom-[-30px] w-[2px] bg-[#e4e7ec]"></div>
                )}
                
                {/* Icon Node */}
                <div className="relative flex-shrink-0 w-24 h-24 lg:w-[88px] lg:h-[88px] rounded-2xl bg-white border border-[#e4e7ec] shadow-sm flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:border-[#bfdbfe] group-hover:shadow-[0_8px_30px_rgba(37,99,235,0.12)] z-10 mb-0 lg:mb-6 mr-6 lg:mr-0">
                  <div className="w-16 h-16 rounded-xl bg-[#eff6ff] flex items-center justify-center">
                    {step.icon}
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-[#1c1d1f] text-white flex items-center justify-center text-[13px] font-bold border-2 border-white shadow-sm">
                    {index + 1}
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 lg:text-center">
                  <h3 className="attio-heading text-[20px] mb-2">{step.title}</h3>
                  <p className="attio-body text-[15px] text-[#6f7988] leading-snug lg:px-2">{step.desc}</p>
                </div>
                
                {/* Arrow indicating direction (Desktop) */}
                {index !== flowSteps.length - 1 && (
                  <div className="hidden lg:flex absolute top-[32px] -right-6 w-12 items-center justify-center bg-[#f8fafc] z-20">
                    <ArrowRight className="w-5 h-5 text-[#8f99a8] group-hover:text-[#2563eb] transition-colors group-hover:translate-x-1" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


function NcCapabilities() {
  const capabilities = [
    {
      title: "Custom Authentication",
      desc: "MongoDB-backed authentication and session management with controlled user states.",
      icon: <Lock className="w-5 h-5 text-[#2563eb]" />
    },
    {
      title: "Hybrid Data Layer",
      desc: "PostgreSQL for structured operational data and MongoDB for authentication-oriented application state.",
      icon: <Database className="w-5 h-5 text-[#2563eb]" />
    },
    {
      title: "Analytics Integration",
      desc: "GA4 metrics transformed into dashboard-ready data with caching to reduce repeated requests.",
      icon: <LineChart className="w-5 h-5 text-[#2563eb]" />
    },
    {
      title: "Remote Database Access",
      desc: "PostgreSQL connectivity supporting SSH tunneling and fallback connection strategies.",
      icon: <Network className="w-5 h-5 text-[#2563eb]" />
    },
    {
      title: "Administrative Controls",
      desc: "Centralized workflows for managing users, analytics, and operational records.",
      icon: <Sliders className="w-5 h-5 text-[#2563eb]" />
    },
    {
      title: "Data Export",
      desc: "Save and extract dashboard data for downstream workflows and analysis.",
      icon: <Download className="w-5 h-5 text-[#2563eb]" />
    }
  ];

  return (
    <section className="py-24 bg-[#F8FBFC] border-b border-[#e4e7ec]">
      <div className="attio-container">
        
        <div className="mb-16 text-center">
          <h2 className="attio-heading text-[32px] md:text-[40px] leading-[1.1] mb-4">
            Built for operational workflows
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((cap, i) => (
            <div key={i} className="p-8 rounded-[16px] bg-white border border-[#e4e7ec] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow group">
              <div className="w-12 h-12 rounded-xl bg-[#eff6ff] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {cap.icon}
              </div>
              <h3 className="font-semibold text-[#1c1d1f] text-[16px] mb-3">{cap.title}</h3>
              <p className="text-[15px] text-[#505967] leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function NcFooter() {
  return (
    <footer className="bg-[#1d4ed8] text-white pt-20 pb-10">
      <div className="attio-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
        {/* Brand Section */}
        <div className="lg:col-span-4">
          <div className="font-mono text-xl font-bold tracking-tighter text-white flex items-center mb-6">
            NC Dashboard
          </div>
          <p className="text-[15px] text-[#bfdbfe] max-w-sm mb-8">
            The platform for operational data and enterprise workflows.
          </p>
        </div>
        
        {/* Links Grid */}
        <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 gap-8 lg:gap-12">
          <div>
            <div className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Platform</div>
            <ul className="space-y-4">
              <li><a href="#platform" className="text-[15px] text-[#bfdbfe] hover:text-white transition-colors">Overview</a></li>
              <li><a href="#use-cases" className="text-[15px] text-[#bfdbfe] hover:text-white transition-colors">Use Cases</a></li>
              <li><a href="#architecture" className="text-[15px] text-[#bfdbfe] hover:text-white transition-colors">Architecture</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[13px] font-semibold text-white uppercase tracking-wider mb-4">Connect</div>
            <ul className="space-y-4">
              <li><a href={NC_GITHUB} target="_blank" rel="noopener noreferrer" className="text-[15px] text-[#bfdbfe] hover:text-white transition-colors">GitHub Source</a></li>
              <li><Link href="/" className="text-[15px] text-[#bfdbfe] hover:text-white transition-colors">Portfolio Home</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="attio-container mt-20 pt-8 flex flex-col md:flex-row items-center justify-between">
        <p className="text-[13px] text-[#bfdbfe]">&copy; {new Date().getFullYear()} NC Dashboard. All rights reserved.</p>
        <div className="flex gap-4 mt-4 md:mt-0 text-[13px] text-[#bfdbfe]">
          Built with Next.js, Django, PostgreSQL & MongoDB
        </div>
      </div>
    </footer>
  );
}


const heroImages = [heroImg1, heroImg2, heroImg3, heroImg4, heroImg5];

function NcHero() {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIdx((prev) => (prev + 1) % heroImages.length);
    }, 4500); // Wait 4.5 seconds before crossfading
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative pt-[220px] pb-32 overflow-hidden border-b border-[#e4e7ec] bg-[#F8FBFC]">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2563eb] opacity-[0.03] blur-[100px] rounded-full pointer-events-none"></div>

      <div className="attio-container flex flex-col items-center text-center relative z-10">
        {/* Eyebrow */}
        <div className="attio-eyebrow mb-8 shadow-sm border-[#bfdbfe] bg-[#eff6ff]">
          <span className="flex items-center gap-2 text-[#1d4ed8] uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#2563eb]"></span>
            Built for enterprise-style pharmaceutical operations
          </span>
        </div>
        
        {/* Main Heading (Massive InterDisplay) */}
        <h1 className="attio-heading text-[42px] sm:text-[56px] md:text-[72px] lg:text-[88px] max-w-[1000px] tracking-[-0.03em] leading-[1.05] mb-8">
          The operational intelligence platform for <span className="text-[#2563eb]">complex business data.</span>
        </h1>
        
        {/* Subtitle */}
        <p className="attio-body text-[18px] sm:text-[20px] md:text-[22px] max-w-[800px] text-[#505967] mb-10 leading-[1.5]">
          Centralize users, companies, jobs, and analytics in one full-stack platform built to turn operational data into actionable workflows.
        </p>
        
        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-[500px] mb-12">
          <a href={NC_GITHUB} target="_blank" rel="noopener noreferrer" className="attio-btn-primary w-full sm:w-auto px-8 !h-14 !text-[16px]">
            View source code
          </a>
          <Link href="/ncDashboard/demo" className="attio-btn-outline w-full sm:w-auto px-8 !h-14 !text-[16px] group border-[#e4e7ec] hover:border-[#bfdbfe] hover:bg-[#eff6ff] hover:text-[#1d4ed8]">
            Live Demo <ArrowRight className="inline-block ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        
        {/* Massive Hero Image Slideshow */}
        <div className="w-full max-w-[1100px] relative z-10 mt-12 flex flex-col items-center">
          <div className="text-[13px] font-bold text-[#1c1d1f] mb-4 tracking-wide uppercase">
            A unified workspace for operational data
          </div>
          <div className="w-full relative rounded-xl border border-[#e4e7ec] bg-white shadow-[0_4px_30px_rgba(0,0,0,0.03)] flex items-center justify-center">
            <div className="relative w-full">
              {/* Invisible spacer to perfectly preserve the aspect ratio and height of the images */}
              <Image 
                src={heroImg1} 
                alt="Spacer" 
                className="w-full h-auto invisible" 
                priority 
              />
              
              {/* Fading UI Images */}
              {heroImages.map((img, idx) => (
                <Image 
                  key={idx}
                  src={img} 
                  alt={`NC Dashboard UI view ${idx + 1}`} 
                  className={`absolute top-0 left-0 w-full h-auto object-contain transition-opacity duration-1000 ease-in-out ${idx === currentIdx ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'}`}
                  priority={idx === 0}
                />
              ))}
            </div>
          </div>
          <div className="text-[15px] text-[#505967] mt-6 max-w-2xl text-center">
            Users, companies, jobs, analytics, and administrative workflows connected through a single operational layer.
          </div>
        </div>

      </div>
    </section>
  );
}


function NcSystemArchitecture() {
  return (
    <section className="py-24 bg-white border-b border-[#e4e7ec]" id="system-architecture">
      <div className="attio-container max-w-5xl">
        
        <div className="mb-16 text-center">
          <h2 className="attio-heading text-[32px] md:text-[40px] leading-[1.1] mb-4 text-[#1c1d1f]">
            System Architecture
          </h2>
        </div>

        {/* ASCII Diagram Container */}
        <div className="bg-[#0f172a] border border-[#1e293b] rounded-[16px] p-6 md:p-12 font-mono text-[11px] sm:text-[13px] md:text-[15px] leading-relaxed text-[#93c5fd] overflow-x-auto shadow-2xl mb-12 text-left w-full">
<pre className="text-left w-fit mx-auto">
{`                    NC DASHBOARD
                         │
             ┌───────────┴───────────┐
             │                       │
         Next.js                 Django API
             │                       │
             │             ┌─────────┴─────────┐
             │             │                   │
             │         PostgreSQL          MongoDB
             │             │                   │
             │       Operational Data    Auth / Sessions
             │
             └──────────────┬───────────────┐
                            │
                     Analytics Layer
                            │
                          GA4`}
</pre>
        </div>

        {/* Technology Layers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e4e7ec]">
            <div className="flex items-center gap-3 mb-3 text-[#1d4ed8]">
              <Box className="w-5 h-5" />
              <h3 className="font-semibold uppercase tracking-wider text-[13px] text-[#1c1d1f]">External services</h3>
            </div>
            <p className="text-[15px] text-[#505967]">GA4 &middot; SMTP &middot; SSH</p>
          </div>

          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e4e7ec]">
            <div className="flex items-center gap-3 mb-3 text-[#1d4ed8]">
              <Layers className="w-5 h-5" />
              <h3 className="font-semibold uppercase tracking-wider text-[13px] text-[#1c1d1f]">Application layer</h3>
            </div>
            <p className="text-[15px] text-[#505967]">Next.js &middot; Django REST APIs</p>
          </div>

          <div className="p-6 rounded-xl bg-[#f8fafc] border border-[#e4e7ec]">
            <div className="flex items-center gap-3 mb-3 text-[#1d4ed8]">
              <Database className="w-5 h-5" />
              <h3 className="font-semibold uppercase tracking-wider text-[13px] text-[#1c1d1f]">Persistence</h3>
            </div>
            <p className="text-[15px] text-[#505967]">PostgreSQL &middot; MongoDB &middot; SQLite</p>
          </div>
        </div>

      </div>
    </section>
  );
}


function NcDemonstrates() {
  const points = [
    {
      title: "Full-stack development",
      desc: "Designing and connecting frontend, backend, APIs, authentication, and databases."
    },
    {
      title: "System design",
      desc: "Separating application responsibilities across multiple persistence layers."
    },
    {
      title: "Data engineering",
      desc: "Integrating external analytics data and transforming it for operational use."
    },
    {
      title: "Production-oriented thinking",
      desc: "Handling remote connectivity, caching, sessions, environment configuration, and administrative workflows."
    }
  ];

  return (
    <section className="py-24 bg-[#F8FBFC] border-b border-[#e4e7ec]" id="demonstrates">
      <div className="attio-container max-w-4xl">
        
        <div className="mb-12 text-center md:text-left">
          <h2 className="attio-heading text-[32px] md:text-[40px] leading-[1.1]">
            What this project demonstrates
          </h2>
        </div>
        
        <div className="flex flex-col gap-8">
          {points.map((p, i) => (
            <div key={i} className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-[#e4e7ec] shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
              <CheckCircle2 className="w-6 h-6 text-[#2563eb] flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-[18px] font-bold text-[#1c1d1f] mb-1">{p.title}</h3>
                <p className="text-[15px] text-[#505967] leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function NcTechDecisions() {
  const decisions = [
    {
      title: "PostgreSQL",
      desc: "Chosen for structured operational data and relational business relationships."
    },
    {
      title: "MongoDB",
      desc: "Used for authentication-oriented application state and flexible user records."
    },
    {
      title: "Django",
      desc: "Provides the backend foundation, API layer, middleware, and business logic."
    },
    {
      title: "Next.js",
      desc: "Provides the frontend application and dashboard experience."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#e4e7ec]">
      <div className="attio-container">
        
        <div className="mb-16 text-center">
          <h2 className="attio-heading text-[32px] md:text-[40px] leading-[1.1] mb-4">
            Why these technologies?
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {decisions.map((item, i) => (
            <div key={i} className="p-8 rounded-[16px] bg-[#f8fafc] border border-[#e4e7ec] shadow-sm">
              <h3 className="font-bold text-[#1c1d1f] text-[18px] mb-3">{item.title}</h3>
              <p className="text-[15px] text-[#505967] leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


function NcProblem() {
  return (
    <section className="py-24 bg-white border-b border-[#e4e7ec]">
      <div className="attio-container max-w-4xl">
        
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1.5 rounded-full border border-[#fecaca] bg-[#fef2f2] text-[13px] text-[#dc2626] font-medium mb-6 shadow-sm">
            The problem
          </div>
          <h2 className="attio-heading text-[36px] md:text-[48px] leading-[1.1] mb-6">
            Operational data becomes difficult to manage when it is scattered across disconnected systems.
          </h2>
          <p className="attio-body text-[18px] md:text-[20px] text-[#505967] leading-relaxed max-w-3xl mx-auto">
            Users, company records, job information, authentication state, and analytics often live in different systems. NC Dashboard brings these surfaces together into a single operational workspace, reducing the friction between raw data and day-to-day decisions.
          </p>
        </div>

        {/* Visual Diagram */}
        <div className="flex flex-col items-center bg-[#f8fafc] p-10 rounded-2xl border border-[#e4e7ec] shadow-sm">
          
          <div className="flex flex-col items-center w-full">
            <span className="text-[12px] font-bold text-[#64748b] uppercase tracking-widest mb-4">Disconnected Systems</span>
            <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 w-full">
              <div className="px-4 py-2 bg-white rounded-lg border border-[#e4e7ec] font-mono text-[14px]">Users</div>
              <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
              <div className="px-4 py-2 bg-white rounded-lg border border-[#e4e7ec] font-mono text-[14px]">Companies</div>
              <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
              <div className="px-4 py-2 bg-white rounded-lg border border-[#e4e7ec] font-mono text-[14px]">Jobs</div>
              <ArrowRight className="w-4 h-4 text-[#94a3b8]" />
              <div className="px-4 py-2 bg-white rounded-lg border border-[#e4e7ec] font-mono text-[14px]">Analytics</div>
            </div>
          </div>

          <div className="my-8 flex justify-center">
            <ArrowDown className="w-6 h-6 text-[#2563eb]" />
          </div>

          <div className="flex flex-col items-center w-full mb-8">
            <div className="px-8 py-4 bg-[#1d4ed8] text-white rounded-xl font-bold tracking-wide text-[16px] shadow-md">
              NC Dashboard
            </div>
          </div>

          <div className="my-4 flex justify-center">
            <ArrowDown className="w-6 h-6 text-[#2563eb]" />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 w-full mt-4">
            <div className="px-6 py-3 bg-[#eff6ff] text-[#1d4ed8] rounded-lg border border-[#bfdbfe] font-bold text-[15px]">Operations</div>
            <ArrowRight className="w-5 h-5 text-[#2563eb]" />
            <div className="px-6 py-3 bg-[#eff6ff] text-[#1d4ed8] rounded-lg border border-[#bfdbfe] font-bold text-[15px]">Decisions</div>
          </div>

        </div>

      </div>
    </section>
  );
}


function NcCta() {
  return (
    <section className="py-32 bg-white border-b border-[#e4e7ec]">
      <div className="attio-container flex flex-col items-center text-center max-w-3xl mx-auto">
        
        <h2 className="attio-heading text-[36px] sm:text-[48px] md:text-[64px] tracking-[-0.03em] leading-[1.05] mb-6">
          Explore the system behind the <span className="text-[#2563eb]">dashboard.</span>
        </h2>
        
        <p className="attio-body text-[20px] text-[#505967] mb-12">
          Dive into the architecture, infrastructure, and real-world data implementations powering NC Dashboard.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full">
          <a href={NC_GITHUB} target="_blank" rel="noopener noreferrer" className="attio-button attio-button-primary text-[15px] px-10 py-4 w-full sm:w-auto group">
            View Source Code
            <ArrowRight className="w-4 h-4 ml-2 inline-block group-hover:translate-x-1 transition-transform" />
          </a>
          <a href="#architecture" className="attio-button attio-button-secondary text-[15px] px-10 py-4 w-full sm:w-auto">
            View Architecture
          </a>
        </div>
        
      </div>
    </section>
  );
}


function NcWhatIBuilt() {
  const cards = [
    {
      title: "01 — Operational Data",
      desc: "Centralized management of users, companies, jobs, and business records.",
      icon: <Database className="w-5 h-5 text-[#2563eb]" />
    },
    {
      title: "02 — Authentication & Access",
      desc: "Custom authentication, sessions, user status, and administrative controls.",
      icon: <ShieldCheck className="w-5 h-5 text-[#2563eb]" />
    },
    {
      title: "03 — Analytics",
      desc: "External GA4 data transformed into dashboard-ready operational insights with caching.",
      icon: <BarChart3 className="w-5 h-5 text-[#2563eb]" />
    },
    {
      title: "04 — Data Infrastructure",
      desc: "PostgreSQL and MongoDB working together across different application responsibilities.",
      icon: <Layers className="w-5 h-5 text-[#2563eb]" />
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-[#e4e7ec]" id="what-i-built">
      <div className="attio-container">
        <div className="flex flex-col md:flex-row gap-12 md:gap-20">
          
          {/* Header */}
          <div className="md:w-1/3">
            <h2 className="attio-heading text-[32px] md:text-[40px] leading-[1.1] mb-6">
              What I built
            </h2>
            <p className="attio-body text-[16px] md:text-[18px] leading-relaxed">
              A full-stack operational platform designed around real-world data, authentication, analytics, and administrative workflows.
            </p>
          </div>
          
          {/* Grid */}
          <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {cards.map((card, i) => (
              <div key={i} className="p-6 rounded-[16px] bg-[#f8fafc] border border-[#e4e7ec] shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 rounded-full bg-[#eff6ff] flex items-center justify-center mb-4">
                  {card.icon}
                </div>
                <h3 className="font-semibold text-[#1c1d1f] text-[15px] mb-2">{card.title}</h3>
                <p className="text-[14px] text-[#505967] leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
