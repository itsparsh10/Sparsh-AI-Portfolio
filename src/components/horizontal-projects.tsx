"use client";

import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projects';
import { ArrowUpRight, Github } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function HorizontalProjects() {
  const router = useRouter();
  const sectionRef = useRef<HTMLElement>(null);
  const pinWrapRef = useRef<HTMLDivElement>(null);

  const topProjectTitles = [
    "RIGEL — MK-I",
    "Markzy",
    "VisionSpeak AI",
    "AttendIQ",
    "Delivery Warehouse Connectivity System",
    "E-commerce Support Resolution Agent"
  ];

  const selectedProjects = topProjectTitles
    .map(title => projects.find(p => p.title === title))
    .filter(Boolean) as typeof projects;

  useGSAP(() => {
    if (!sectionRef.current || !pinWrapRef.current) return;

    const sec = sectionRef.current;
    const pinWrap = pinWrapRef.current;

    let pinWrapWidth: number;
    let horizontalScrollLength: number;

    function refresh() {
      pinWrapWidth = pinWrap.scrollWidth;
      horizontalScrollLength = pinWrapWidth - window.innerWidth;
    }

    refresh();

    // The horizontal pinning scrub animation
    const animation = gsap.to(pinWrap, {
      scrollTrigger: {
        scrub: true,
        trigger: sec,
        pin: sec,
        start: "center center",
        end: () => `+=${pinWrapWidth}`,
        invalidateOnRefresh: true,
      },
      x: () => -horizontalScrollLength,
      ease: "none"
    });

    ScrollTrigger.addEventListener("refreshInit", refresh);

    return () => {
      ScrollTrigger.removeEventListener("refreshInit", refresh);
      animation.kill();
    };
  }, { scope: sectionRef });

  return (
    <>
      {/* Intro Panel */}
      <section className="relative w-full text-center py-32 bg-[#070910] border-b border-[#202737]">
        <h2 className="text-4xl sm:text-5xl text-[#e6e6e6] tracking-wider uppercase mb-4" style={{ fontFamily: '"VT323", monospace' }}>
          Selected Work
        </h2>
        <div className="text-[#6b8eff] text-sm sm:text-base tracking-widest uppercase font-mono bg-[#0C1018] border border-[#202737] px-6 py-2 rounded-full inline-block shadow-lg">
          Scroll down to explore the gallery
        </div>
      </section>

      {/* Horizontal Scroll Portfolio */}
      <section 
        id="portfolio" 
        ref={sectionRef} 
        className="relative w-full overflow-hidden bg-[#070910] h-screen flex items-center"
      >
        <div className="w-full relative">
          <div className="flex flex-nowrap will-change-transform relative">
            <div ref={pinWrapRef} className="flex flex-nowrap will-change-transform items-center pl-8 md:pl-[10vw]">
              
              {/* Project Cards */}
              {selectedProjects.map((project, idx) => {
                const isRigel = project.slug === "rigel";
                const isNC = project.slug === "ncDashboard";

                // Extract exactly 2 bullet points from details if available
                const bullets = project.details?.split(/(?<=\.)\s+(?=[A-Z])/)
                  .map(s => s.trim())
                  .filter(s => s.length > 0)
                  .slice(0, 2) || [];

                return (
                  <div 
                    key={idx} 
                    className="w-[85vw] md:w-[35vw] shrink-0 p-4 md:p-8 box-content group"
                  >
                    <div className="bg-[#0C1018] border border-[#202737] rounded-3xl overflow-hidden shadow-2xl transition-all duration-500 hover:border-[#7C8CFF]/50 hover:bg-[#111622] flex flex-col h-[70vh] md:h-[75vh]">
                      
                      {/* Image Top Half */}
                      <div className="relative w-full h-[40%] md:h-[45%] overflow-hidden border-b border-[#202737]">
                        <Image 
                          src={project.image} 
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                          sizes="(max-width: 768px) 100vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018] to-transparent" />
                        
                        {/* Tag */}
                        <div className="absolute top-4 left-4">
                           <span className={`text-[10px] uppercase tracking-widest font-mono font-bold px-3 py-1.5 rounded-full border shadow-lg backdrop-blur-md ${isRigel ? 'text-[#B8FF5A] border-[#B8FF5A]/30 bg-[#B8FF5A]/10' : 'text-[#F3F4F6] border-[#202737] bg-[#0C1018]/80'}`}>
                              {isRigel ? 'HERO PROJECT' : 'SYSTEM'}
                            </span>
                        </div>
                      </div>

                      {/* Content Bottom Half */}
                      <div className="flex flex-col flex-1 p-6 md:p-8">
                        <h3 className="text-3xl md:text-4xl text-[#F3F4F6] uppercase mb-4 group-hover:text-[#7C8CFF] transition-colors" style={{ fontFamily: '"VT323", monospace' }}>
                          {project.title}
                        </h3>
                        
                        <p className="text-[#A0A7B7] text-sm leading-relaxed mb-6 line-clamp-2 md:line-clamp-3">
                          {project.description}
                        </p>

                        {/* Bullet Points */}
                        <ul className="flex-1 space-y-3 mb-8">
                          {bullets.map((bullet, i) => (
                            <li key={i} className="text-[#687184] text-xs font-mono leading-relaxed flex items-start gap-2">
                              <span className="text-[#7C8CFF] mt-0.5">▹</span>
                              <span className="line-clamp-2">{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Buttons */}
                        <div className="flex flex-row gap-3 mt-auto">
                          {project.githubLink && (
                            <button 
                              onClick={() => window.open(project.githubLink, '_blank')}
                              className="flex items-center justify-center gap-2 flex-1 py-3 text-xs font-mono font-bold rounded-xl border border-[#202737] bg-[#111622] hover:bg-[#202737] text-[#F3F4F6] transition-colors"
                            >
                              <Github className="w-4 h-4" /> CODE
                            </button>
                          )}
                          {(project.liveLink || isRigel || isNC) && (
                            <button 
                              onClick={() => {
                                if (isRigel) router.push("/rigel");
                                else if (isNC) router.push("/ncDashboard");
                                else window.open(project.liveLink, '_blank');
                              }}
                              className="flex items-center justify-center gap-2 flex-1 py-3 text-xs font-mono font-bold rounded-xl border border-[#7C8CFF] bg-[#7C8CFF]/10 hover:bg-[#7C8CFF] hover:text-[#0C1018] text-[#7C8CFF] transition-colors"
                            >
                              <ArrowUpRight className="w-4 h-4" /> LIVE
                            </button>
                          )}
                        </div>
                      </div>

                    </div>
                  </div>
                );
              })}
              
              {/* Extra Padding at the end for smooth scrolling completion */}
              <div className="w-[10vw] shrink-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Outro Panel */}
      <section className="relative w-full text-center py-32 bg-[#070910] border-t border-[#202737]">
        <h3 className="text-3xl text-[#F3F4F6] uppercase mb-8" style={{ fontFamily: '"VT323", monospace' }}>
          Want to see more?
        </h3>
        <Link href="/projects">
          <button className="px-8 py-4 bg-white text-black text-sm font-mono font-bold tracking-widest rounded-xl hover:bg-[#B8FF5A] transition-colors shadow-lg">
            EXPLORE THE FULL ARCHIVE <ArrowUpRight className="w-5 h-5 inline ml-2" />
          </button>
        </Link>
      </section>
    </>
  );
}
