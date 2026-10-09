"use client";

import React, { useState, useEffect } from 'react';
import { PinnedProjects } from '@/components/pinned-projects';
import { Navbar } from '@/components/navbar';
import { MagneticButton } from '@/components/magnetic-button';
import { BouncyFooter } from '@/components/bouncy-footer';
import { useRouter } from 'next/navigation';
import { useTransition } from '@/contexts/transition-context';

export default function ProjectsPage() {
  const router = useRouter();
  const { playTransition } = useTransition();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleReturn = async () => {
    await playTransition(() => {
      router.push('/ai-mode');
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0d1a] bg-grid text-[#e6e6e6] font-sans flex flex-col">
      {/* Sticky Scroll-Responsive Header Bar */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#0a0d1a]/85 backdrop-blur-xl border-b border-[#2d3748]/70 shadow-2xl shadow-black/50 py-2.5'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex flex-row justify-between items-center h-14 sm:h-16">
          {/* Left: Meta Link */}
          <div className="flex items-center text-[10px] sm:text-xs md:text-sm tracking-widest text-[#7a8190]" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            <a href="/" className="text-[#7a8190] hover:text-[#6b8eff] whitespace-nowrap font-medium transition-colors">FULL STACK · AI ENGINEER</a>
          </div>

          {/* Center: Centered Navbar */}
          <div className="flex-1 flex justify-center px-2">
            <Navbar isScrolled={isScrolled} />
          </div>

          {/* Right: AI Mode Button */}
          <div className="scale-[0.65] sm:scale-90 origin-right flex-shrink-0">
            <MagneticButton label="AI Mode" onClick={handleReturn} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl w-full mx-auto px-4 py-8 relative z-10 flex-grow">
        <PinnedProjects />
      </main>

      <BouncyFooter />
    </div>
  );
}
