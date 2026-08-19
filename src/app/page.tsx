"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { MagneticButton } from '@/components/magnetic-button';
import { BouncyFooter } from '@/components/bouncy-footer';
import { PinnedProjects } from '@/components/pinned-projects';
import { ExperienceSection } from '@/components/experience';
import { SkillsCertifications } from '@/components/skills-certifications';
import { SectionDivider } from '@/components/section-divider';
import { LoadingScreen } from '@/components/loading-screen';
import { useTransition } from '@/contexts/transition-context';

export default function V2Page() {
  const router = useRouter();
  const { playTransition } = useTransition();

  const handleReturn = async () => {
    await playTransition(() => {
      router.push('/ai-mode');
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0d1a] bg-grid text-[#e6e6e6] font-sans flex flex-col">
      <LoadingScreen />

      {/* Hide theme toggle from layout */}
      <style>{`
        #themeToggle {
          display: none !important;
        }
        ::selection {
          background: #6b8eff;
          color: #0a0d1a;
        }
        ::-moz-selection {
          background: #6b8eff;
          color: #0a0d1a;
        }
      `}</style>

      <main className="max-w-7xl w-full mx-auto px-4 py-8 md:py-12 relative z-10 flex-grow">

        {/* Top Header & AI Mode Button */}
        <div className="flex flex-row justify-between items-center mb-12 h-20">
          {/* Top Meta Area */}
          <div className="flex items-center text-[10px] sm:text-xs md:text-sm tracking-widest text-[#7a8190]" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            <div className="text-[#7a8190]">FULL STACK · AI ENGINEER</div>
          </div>

          {/* AI Mode Button */}
          <div className="scale-[0.65] sm:scale-90 origin-right">
            <MagneticButton label="AI Mode" onClick={handleReturn} />
          </div>
        </div>

        {/* Hero Title Area */}
        <div className="mb-12">
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-[#6b8eff] leading-[0.9] tracking-tight mb-8 drop-shadow-sm break-words hyphens-auto"
            style={{ fontFamily: '"VT323", monospace', fontSmooth: 'never', WebkitFontSmoothing: 'none' }}
          >
            SPARSH SHARMA
          </h1>

          <p className="text-xl md:text-2xl text-[#d1d5db] font-serif leading-relaxed mb-8" style={{ fontFamily: 'var(--font-playfair)' }}>
            Just a guy obsessed with AI, building the ideas in my head into things people can actually use — turning &quot;what if?&quot; into &quot;it works&quot; while becoming the main character of my own story.
          </p>

          <div className="flex flex-wrap gap-4 mt-8" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            <a href="mailto:sparshvishan@gmail.com" className="flex items-center gap-2 border border-[#2d3748] hover:border-[#6b8eff] hover:bg-[#6b8eff]/10 transition-colors bg-transparent px-4 py-2 rounded-sm text-xs sm:text-sm text-[#e6e6e6]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b8eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-mail"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
              sparshvishan@gmail.com
            </a>

            <a href="https://linkedin.com/in/sparshs10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#2d3748] hover:border-[#6b8eff] hover:bg-[#6b8eff]/10 transition-colors bg-transparent px-4 py-2 rounded-sm text-xs sm:text-sm text-[#e6e6e6]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b8eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
              sparshs10
            </a>

            <a href="https://github.com/itsparsh10" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 border border-[#2d3748] hover:border-[#6b8eff] hover:bg-[#6b8eff]/10 transition-colors bg-transparent px-4 py-2 rounded-sm text-xs sm:text-sm text-[#e6e6e6]">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6b8eff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
              itsparsh10
            </a>
          </div>
        </div>

        <SectionDivider />

        {/* Two Column Content Area */}
        <div className="grid grid-cols-1 md:grid-cols-[150px_1fr] lg:grid-cols-[150px_1fr] gap-8 md:gap-16">
          <div className="text-[#6b8eff] text-sm tracking-widest uppercase" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            ABOUT ME
          </div>

          <div className="text-[#d1d5db] font-serif text-lg md:text-xl leading-relaxed lg:columns-2 gap-12" style={{ fontFamily: 'var(--font-playfair)' }}>
            <p className="mb-8">
              <span className="float-left text-6xl text-[#6b8eff] pr-2 font-bold leading-none mt-1 drop-shadow-sm" style={{ fontFamily: '"VT323", monospace' }}>I</span>
              &apos;m a passionate Full-Stack Developer and AI Engineer currently pursuing my B.Tech in Computer Science Engineering at ITM Skills University. With a strong foundation in software engineering, artificial intelligence, and machine learning, I specialize in building scalable, enterprise-grade web applications and cutting-edge AI-driven solutions.
            </p>
            <p className="mb-8">
              Currently serving as a Software Developer Intern at Code N Creative, where I develop production-grade web tools and work across full-stack modules. Previously, I interned at Let&apos;s Upgrade, where I enhanced UI accessibility by 12% and optimized website performance, resulting in a 10% increase in user engagement and admissions.
            </p>
            <p className="mb-0">
              My expertise spans modern web technologies including React.js, Node.js, Express.js, and MongoDB, along with advanced AI/ML frameworks. I&apos;m actively involved in tech communities (GDG Mumbai, Swift Mumbai, MTW), contribute to open-source projects, and build innovative, production-ready applications that solve real-world problems.
            </p>
          </div>
        </div>

        <SectionDivider />

        {/* Pinned Projects Section */}
        <PinnedProjects />

        <SectionDivider />

        {/* Experience Section */}
        <ExperienceSection />

        <SectionDivider />

        {/* Skills and Certifications */}
        <SkillsCertifications />

      </main>

      <BouncyFooter />
    </div>
  );
}
