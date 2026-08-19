"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projects';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';

export function PinnedProjects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const router = useRouter();

  return (
    <div className="w-full relative my-32">
      <div className="text-[#6b8eff] text-sm tracking-widest uppercase mb-12" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
        Things I&apos;ve Built
      </div>
      
      <div className="border-t border-[#2d3748]">
        {projects.map((project, idx) => {
          const isRigel = project.slug === "rigel";
          const isNC = project.slug === "ncDashboard";
          const isRouteProject = isRigel || isNC;

          return (
            <div key={idx} className="border-b border-[#2d3748] py-6 group transition-colors hover:bg-[#6b8eff]/5">
              <div 
                className="flex flex-row items-center justify-between gap-2 sm:gap-4 cursor-pointer px-2 sm:px-4 w-full"
                onClick={() => {
                  if (isRigel) {
                    router.push("/rigel");
                  } else if (isNC) {
                    router.push("/ncDashboard");
                  } else {
                    setExpandedIndex(expandedIndex === idx ? null : idx);
                  }
                }}
              >
                <div className="flex flex-row items-center gap-2 sm:gap-4 min-w-0 flex-1">
                  <h3 className="text-xl sm:text-3xl md:text-5xl text-[#e6e6e6] tracking-wider uppercase group-hover:text-[#6b8eff] transition-colors truncate" style={{ fontFamily: '"VT323", monospace' }}>
                    {project.title}
                  </h3>
                  <span className="hidden sm:block text-[10px] sm:text-xs md:text-sm text-[#7a8190] uppercase tracking-widest mt-1 whitespace-nowrap" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    · {project.category}
                  </span>
                </div>
                
                <div className="flex flex-row items-center gap-2 sm:gap-3 flex-shrink-0">
                  {project.githubLink && (
                    <a 
                      href={project.githubLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-xs font-mono border border-[#2d3748] rounded-full hover:border-[#6b8eff] text-[#e6e6e6] hover:text-[#6b8eff] transition-all whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="hidden sm:inline">GitHub</span> <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {project.liveLink && (
                    <a 
                      href={project.liveLink} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 sm:gap-1.5 px-2 sm:px-3 py-1 sm:py-1.5 text-[9px] sm:text-xs font-mono border border-[#2d3748] rounded-full hover:border-[#6b8eff] text-[#e6e6e6] hover:text-[#6b8eff] transition-all whitespace-nowrap"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span className="hidden sm:inline">Demo</span> <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                  {!isRigel && (
                    <div className="ml-1 sm:ml-2 text-[#7a8190] group-hover:text-[#6b8eff] transition-colors">
                      {expandedIndex === idx ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Expanded Content — only for non-RIGEL projects */}
              {!isRigel && (
                <div className={`grid transition-all duration-300 ease-in-out ${expandedIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                  <div className="overflow-hidden px-4 md:px-8">
                    <div className="mb-6 text-[#d1d5db] font-serif text-lg leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {project.description}
                    </div>
                    
                    <div className="space-y-4 mb-4">
                      {project.details?.split(/(?<=\.)\s+(?=[A-Z])/).filter(Boolean).map((bullet, i) => (
                        <div key={i} className="flex items-start gap-4 text-[#a1a1aa] text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
                          <span className="text-[#6b8eff] font-mono mt-1 opacity-70">+</span>
                          <span>{bullet.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
