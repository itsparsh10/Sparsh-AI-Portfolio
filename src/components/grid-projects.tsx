"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projects';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function GridProjects() {
  const router = useRouter();
  const [showAll, setShowAll] = useState(false);

  const topProjectTitles = [
    "RIGEL — MK-I",
    "Markzy",
    "NC Dashboard",
    "Delivery Warehouse Connectivity System",
    "VisionSpeak AI"
  ];

  // We map by title to ensure the exact order requested
  const topProjects = topProjectTitles
    .map(title => projects.find(p => p.title === title))
    .filter(Boolean) as typeof projects;

  const remainingProjects = projects.filter(p => !topProjectTitles.includes(p.title));
  const displayedProjects = showAll ? [...topProjects, ...remainingProjects] : topProjects;

  return (
    <div className="w-full relative my-32 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#202737] pb-8">
        <div>
          <h2 className="text-4xl sm:text-5xl text-[#e6e6e6] tracking-wider uppercase mb-4" style={{ fontFamily: '"VT323", monospace' }}>
            Selected Work
          </h2>
          <div className="text-[#687184] text-sm tracking-widest uppercase font-mono flex items-center gap-4">
            <span>Things I built because the problem was interesting.</span>
            <span className="hidden md:inline-block w-12 h-[1px] bg-[#202737]"></span>
          </div>
        </div>
        <button 
          onClick={() => setShowAll(!showAll)}
          className="group flex items-center gap-2 text-xs font-mono font-bold text-[#7C8CFF] hover:text-[#B8FF5A] transition-colors uppercase tracking-widest"
        >
          {showAll ? 'Close Archive' : 'Explore Archive'}
          <ArrowRight className={`w-4 h-4 transition-transform ${showAll ? '-rotate-90' : 'group-hover:translate-x-1'}`} />
        </button>
      </div>
      
      {/* Asymmetric Bento Grid */}
      <div className="grid grid-cols-12 gap-6">
        
        {displayedProjects.map((project, idx) => {
          const isRigel = project.slug === "rigel";
          const isNC = project.slug === "ncDashboard";

          // Determine grid spans based on index
          // 0 = Rigel (span 8)
          // 1 = Markzy (span 4)
          // 2-5 = Others (span 6)
          let spanClass = "col-span-12 md:col-span-6";
          if (idx === 0) spanClass = "col-span-12 md:col-span-8";
          if (idx === 1) spanClass = "col-span-12 md:col-span-4";

          return (
            <div 
              key={idx}
              onClick={() => {
                if (isRigel) {
                  router.push("/rigel");
                } else if (isNC) {
                  router.push("/ncDashboard");
                } else if (project.liveLink) {
                  window.open(project.liveLink, '_blank');
                } else if (project.githubLink) {
                  window.open(project.githubLink, '_blank');
                }
              }}
              className={`
                group relative flex flex-col overflow-hidden rounded-2xl cursor-pointer
                bg-[#0C1018] border border-[#202737] 
                transition-all duration-500 ease-out
                hover:border-[#7C8CFF]/40 hover:bg-[#111622] hover:shadow-[0_10px_40px_rgba(124,140,255,0.05)]
                ${spanClass}
                ${idx === 0 ? 'min-h-[500px]' : 'min-h-[400px]'}
              `}
            >
              {/* Text Content */}
              <div className="p-8 md:p-10 flex flex-col z-10 relative">
                <div className="flex items-center justify-between mb-6">
                  <span className={`text-[10px] uppercase tracking-widest font-mono font-bold px-3 py-1 rounded-full border ${isRigel ? 'text-[#B8FF5A] border-[#B8FF5A]/20 bg-[#B8FF5A]/10' : 'text-[#687184] border-[#202737] bg-[#111622]'}`}>
                    {isRigel ? 'HERO PROJECT' : 'SYSTEM / AI'}
                  </span>
                  
                  {/* Subtle hover icon */}
                  <div className="w-8 h-8 rounded-full bg-[#111622] border border-[#202737] flex items-center justify-center opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                    <ArrowUpRight className="w-4 h-4 text-[#7C8CFF]" />
                  </div>
                </div>

                <h3 className="text-3xl text-[#F3F4F6] uppercase mb-4 group-hover:text-[#7C8CFF] transition-colors duration-500" style={{ fontFamily: '"VT323", monospace' }}>
                  {project.title}
                </h3>
                
                <p className={`text-[#A0A7B7] text-sm leading-relaxed ${idx === 0 ? 'max-w-xl line-clamp-3' : 'line-clamp-2'} font-sans`}>
                  {project.description}
                </p>

                {/* Metadata fading in on hover */}
                <div className="mt-6 flex flex-wrap gap-2 opacity-60 group-hover:opacity-100 transition-opacity duration-500">
                  {project.details?.split(/(?<=\.)\s+(?=[A-Z])/).slice(0, idx === 0 ? 3 : 2).map((bullet, i) => {
                    const tag = bullet.split(':')[0]; 
                    return (
                      <span key={i} className="text-[10px] font-mono border border-[#202737] rounded-md px-2 py-1 text-[#687184] bg-[#070910]">
                        {tag.length < 25 ? tag : 'ARCHITECTURE'}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Image Container - Grows to fill remaining space */}
              <div className="relative flex-1 w-full mt-auto px-8 pb-0 overflow-hidden">
                <div className="relative w-full h-[250px] md:h-[300px] rounded-t-xl overflow-hidden border-t border-x border-[#202737]/50 shadow-2xl translate-y-4 group-hover:translate-y-2 group-hover:scale-[1.02] transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] bg-[#111622]">
                  <Image 
                    src={project.image} 
                    alt={project.title}
                    fill
                    className="object-cover object-top opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Internal overlay gradient for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0C1018]/80 via-transparent to-transparent opacity-100 group-hover:opacity-0 transition-opacity duration-500" />
                </div>
              </div>

            </div>
          );
        })}
      </div>

      {/* Massive Call To Action Redirect */}
      {!showAll ? (
        <div className="w-full mt-16 text-center border border-[#202737] border-dashed rounded-3xl p-12 bg-[#0C1018]/50 hover:bg-[#111622] hover:border-[#7C8CFF]/50 transition-all cursor-pointer group" onClick={() => setShowAll(true)}>
          <h3 className="text-3xl text-[#F3F4F6] uppercase mb-4" style={{ fontFamily: '"VT323", monospace' }}>
            Show More Projects
          </h3>
          <p className="text-[#687184] font-mono text-sm max-w-lg mx-auto mb-8">
            Comprehensive case studies covering AI agents, full-stack systems, mobile applications, and high-performance infrastructure.
          </p>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-mono font-bold rounded-xl group-hover:bg-[#B8FF5A] transition-colors">
            SHOW MORE PROJECTS <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      ) : (
        <div className="w-full mt-16 text-center border border-[#202737] border-dashed rounded-3xl p-12 bg-[#0C1018]/50 hover:bg-[#111622] hover:border-[#7C8CFF]/50 transition-all cursor-pointer group" onClick={() => setShowAll(false)}>
          <h3 className="text-3xl text-[#F3F4F6] uppercase mb-4" style={{ fontFamily: '"VT323", monospace' }}>
            Close Projects
          </h3>
          <button className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black text-xs font-mono font-bold rounded-xl group-hover:bg-[#B8FF5A] transition-colors">
            CLOSE PROJECTS <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      )}

    </div>
  );
}
