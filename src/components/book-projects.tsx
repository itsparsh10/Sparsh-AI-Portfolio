"use client";

import React, { useRef } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projects';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BookProjects() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bookRef = useRef<HTMLDivElement>(null);
  const pagesRef = useRef<(HTMLDivElement | null)[]>([]);

  const topProjectTitles = [
    "RIGEL — MK-I",
    "Markzy",
    "VisionSpeak AI",
    "AttendIQ",
    "Delivery Warehouse Connectivity System"
  ];

  const selectedProjects = topProjectTitles
    .map(title => projects.find(p => p.title === title))
    .filter(Boolean) as typeof projects;

  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5, // Added a bit of smoothing to the scroll scrub
        pin: true, 
      }
    });

    pagesRef.current.forEach((page, index) => {
      if (!page) return;

      gsap.set(page, { 
        transformOrigin: "left center", 
        rotateY: 0, 
        zIndex: 50 - index,
        transformStyle: "preserve-3d" 
      });

      // Added a slight z translation arc to make it feel like a physical page lifting
      tl.to(page, {
        rotateY: -180,
        ease: "power1.inOut", 
        duration: 1,
      }, index * 0.8); // Slight overlap in animations
    });
  }, { scope: containerRef });

  return (
    // Reduced container height for faster scrolling
    <div ref={containerRef} className="relative w-full h-[350vh] bg-[#070910] my-32">
      <div className="absolute inset-0 w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        
        <div className="mb-12 text-center z-50 relative pointer-events-none">
          <h2 className="text-4xl sm:text-5xl text-[#e6e6e6] tracking-wider uppercase mb-4" style={{ fontFamily: '"VT323", monospace' }}>
            Selected Work
          </h2>
          <div className="text-[#6b8eff] text-sm sm:text-base tracking-widest uppercase font-mono bg-[#070910]/50 px-4 py-2 rounded-full inline-block backdrop-blur-md">
            Scroll to flip the pages
          </div>
        </div>

        {/* 3D Book Container: Made broader and longer as requested */}
        <div 
          className="relative w-full max-w-6xl h-[700px]" 
          style={{ perspective: '3000px' }}
        >
          {/* The Spine - styled like a physical book binding */}
          <div className="absolute left-1/2 top-0 bottom-0 w-8 bg-gradient-to-r from-[#1a0f0d] via-[#3a201a] to-[#1a0f0d] -translate-x-1/2 z-0 rounded-full shadow-[inset_0_0_10px_rgba(0,0,0,0.8)]" />
          
          {/* Right half (where pages anchor) */}
          <div className="absolute left-1/2 top-0 w-1/2 h-full z-10" style={{ transformStyle: 'preserve-3d' }}>
            
            {/* The Cover Page (Index 0) - Harry Potter Style */}
            <div 
              ref={el => { pagesRef.current[0] = el; }}
              className="absolute inset-0 w-full h-full origin-left"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Front of Cover - Dark leather/magical look with gold */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#1a0f0d] border-4 border-[#3a201a] rounded-r-2xl flex flex-col items-center justify-center p-8 shadow-[30px_10px_50px_rgba(0,0,0,0.8)]"
                style={{ backfaceVisibility: 'hidden', transform: 'translateZ(2px)' }}
              >
                {/* Gold border detailing */}
                <div className="border-[3px] border-[#d4af37] border-double w-full h-full rounded-xl flex flex-col items-center justify-center p-8 text-center bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]">
                    {/* Magical star ornament */}
                    <div className="text-[#d4af37] text-4xl mb-6">✧</div>
                    <h3 className="text-6xl text-[#d4af37] tracking-wider uppercase mb-8 drop-shadow-lg font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
                      Sparsh&apos;s Portfolio
                    </h3>
                    <div className="text-[#d4af37] font-mono tracking-[0.3em] text-sm border-t border-b border-[#d4af37]/30 py-2 px-6">
                      VOLUME I
                    </div>
                </div>
              </div>
              
              {/* Back of Cover */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#2a1b18] border-r-4 border-y-4 border-[#1a0f0d] rounded-l-2xl p-8 shadow-inner"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <div className="w-full h-full border border-[#1a0f0d] opacity-80 flex items-center justify-center rounded-xl bg-[url('https://www.transparenttextures.com/patterns/black-paper.png')]">
                  <span className="text-[#1a0f0d] font-serif font-bold text-2xl tracking-widest transform -rotate-90">EX LIBRIS</span>
                </div>
              </div>
            </div>

            {/* Project Pages */}
            {selectedProjects.map((project, idx) => {
              const isRigel = project.slug === "rigel";
              return (
                <div 
                  key={idx}
                  ref={el => { pagesRef.current[idx + 1] = el; }}
                  className="absolute inset-0 w-full h-full origin-left"
                  style={{ transformStyle: 'preserve-3d' }}
                >
                  {/* Front (Right side of open book) */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-[#0C1018] border-r-4 border-y-4 border-[#202737] rounded-r-2xl shadow-[15px_10px_40px_rgba(0,0,0,0.6)] flex flex-col p-8 sm:p-12 overflow-hidden"
                    style={{ backfaceVisibility: 'hidden', transform: 'translateZ(1px)' }}
                  >
                    <div className="flex-1 flex flex-col justify-between z-10 h-full">
                      <div>
                        <div className="flex items-center justify-between mb-6">
                          <span className="text-xs sm:text-sm text-[#B8FF5A] uppercase tracking-widest font-mono font-bold bg-[#B8FF5A]/10 px-4 py-1.5 rounded-full">
                            {isRigel ? 'HERO PROJECT' : 'SYSTEM'}
                          </span>
                          <span className="text-xs sm:text-sm font-mono text-[#687184]">PG {idx + 1}</span>
                        </div>
                        <h3 className="text-4xl sm:text-5xl text-[#F3F4F6] uppercase mb-6" style={{ fontFamily: '"VT323", monospace' }}>
                          {project.title}
                        </h3>
                        <p className="text-[#A0A7B7] text-sm sm:text-base leading-relaxed line-clamp-5 sm:line-clamp-6 mb-8 font-serif" style={{ fontFamily: 'var(--font-playfair)' }}>
                          {project.description}
                        </p>
                      </div>

                      <div className="relative w-full h-48 sm:h-64 rounded-xl overflow-hidden border border-[#202737] mb-8 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] group">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>

                      <div className="flex flex-row gap-4">
                        {project.githubLink && (
                          <a 
                            href={project.githubLink} 
                            target="_blank" 
                            className="flex-1 text-center py-3 sm:py-4 text-xs sm:text-sm font-mono font-bold tracking-widest rounded-xl border border-[#202737] hover:bg-[#7C8CFF]/10 text-[#7C8CFF] transition-colors"
                          >
                            GITHUB
                          </a>
                        )}
                        {(project.liveLink || isRigel) && (
                          <a 
                            href={project.liveLink || (isRigel ? "/rigel" : "#")} 
                            target={isRigel ? "_self" : "_blank"} 
                            className="flex-1 text-center py-3 sm:py-4 text-xs sm:text-sm font-mono font-bold tracking-widest rounded-xl border border-[#7C8CFF] bg-[#7C8CFF]/10 text-[#7C8CFF] hover:bg-[#7C8CFF] hover:text-[#0C1018] transition-colors"
                          >
                            EXPLORE
                          </a>
                        )}
                      </div>
                    </div>
                    {/* Subtle gradient overlaid on page to look like lighting curvature near spine */}
                    <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black/50 to-transparent pointer-events-none" />
                  </div>

                  {/* Back (Left side of open book when flipped) */}
                  <div 
                    className="absolute inset-0 w-full h-full bg-[#0C1018] border-l-4 border-y-4 border-[#202737] rounded-l-2xl p-8 sm:p-12 shadow-[inset_-10px_0_30px_rgba(0,0,0,0.5)]"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                  >
                    <div className="w-full h-full border border-[#202737] border-dashed opacity-30 flex items-center justify-center rounded-xl relative overflow-hidden">
                       {/* Blurred aesthetic backface */}
                       <Image src={project.image} alt="blur" fill className="object-cover opacity-10 blur-xl scale-125" />
                       <span className="text-[#687184] font-mono text-sm tracking-widest z-10 drop-shadow-md">SYSTEM ARCHITECTURE</span>
                    </div>
                    <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
                  </div>
                </div>
              );
            })}
            
            {/* Final "Back Cover" underneath everything */}
            <div 
              className="absolute inset-0 w-full h-full bg-[#1a0f0d] border-4 border-[#3a201a] rounded-r-2xl flex flex-col items-center justify-center shadow-[30px_10px_50px_rgba(0,0,0,0.8)]"
              style={{ zIndex: 0 }}
            >
               <h3 className="text-4xl text-[#d4af37] tracking-wider uppercase mb-12 text-center font-serif drop-shadow-md" style={{ fontFamily: 'var(--font-playfair)' }}>
                  End of Volume I
                </h3>
               <Link href="/projects">
                  <button className="px-8 py-4 bg-[#d4af37] text-[#1a0f0d] text-sm font-mono font-bold tracking-widest rounded-xl hover:bg-white transition-colors shadow-lg">
                    EXPLORE THE ARCHIVE <ArrowUpRight className="w-5 h-5 inline" />
                  </button>
                </Link>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
}
