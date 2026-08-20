"use client";

import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { projects } from '@/lib/projects';
import { ChevronDown, ChevronUp, ArrowUpRight } from 'lucide-react';
import { RigelWorkflowStory } from '@/projects/rigel/components/rigel-workflow-story';
import { MarkzyVisual } from '@/components/project-visuals/markzy-visual';
import { NCDashboardVisual } from '@/components/project-visuals/nc-dashboard-visual';
import { DeliveryWarehouseVisual } from '@/components/project-visuals/delivery-warehouse-visual';
import { VisionSpeakAIVisual } from '@/components/project-visuals/visionspeak-visual';

export function PinnedProjects() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0);
  const [filter, setFilter] = useState<string>('All');
  const [showMore, setShowMore] = useState<boolean>(false);
  const router = useRouter();
  const headerRefs = useRef<(HTMLDivElement | null)[]>([]);

  const topProjectTitles = [
    "RIGEL — MK-I",
    "Markzy",
    "NC Dashboard",
    "Delivery Warehouse Connectivity System",
    "VisionSpeak AI"
  ];

  const getFilteredProjects = () => {
    let baseProjects = projects;

    // Sort projects to put top projects first if filter is All
    if (filter === 'All') {
      const top = topProjectTitles.map(t => projects.find(p => p.title === t)).filter(Boolean) as typeof projects;
      const rest = projects.filter(p => !topProjectTitles.includes(p.title));
      baseProjects = [...top, ...rest];
    } else if (filter === 'AI Projects') {
      baseProjects = projects.filter(p =>
        p.category.includes('AI') ||
        p.title.includes('AI') ||
        p.slug === 'rigel' ||
        p.title.includes('AttendIQ') ||
        p.title.includes('Support') ||
        p.title.includes('Voice') ||
        p.title.includes('FinEd') ||
        p.title.includes('Markzy')
      );
    } else if (filter === 'Full Stack') {
      baseProjects = projects.filter(p =>
        p.category.includes('Full-Stack') ||
        p.category.includes('MERN') ||
        p.category.includes('E-commerce') ||
        p.title.includes('Munim Ji') ||
        p.title.includes('Mygate') ||
        p.title.includes('Meesho') ||
        p.title.includes('WinkIt')
      );
    } else if (filter === 'Systems') {
      baseProjects = projects.filter(p =>
        p.category.includes('System') ||
        p.category.includes('Logistics') ||
        p.category.includes('Management') ||
        p.category.includes('Dashboard') ||
        p.title.includes('Delivery') ||
        p.slug === 'ncDashboard'
      );
    }
    return baseProjects;
  };

  const filteredProjects = getFilteredProjects();
  const visibleProjects = showMore ? filteredProjects : filteredProjects.slice(0, 5);

  return (
    <div className="w-full relative my-32">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-6">
        <div className="text-[#6b8eff] text-sm tracking-widest uppercase" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
          Things I&apos;ve Built
        </div>

        <div className="flex flex-wrap gap-3">
          {['All', 'AI Projects', 'Full Stack', 'Systems'].map(f => (
            <button
              key={f}
              onClick={() => {
                setFilter(f);
                setShowMore(false);
                setExpandedIndex(null);
              }}
              className={`px-4 py-2 text-xs font-mono tracking-widest rounded-full transition-all ${filter === f
                  ? 'bg-[#6b8eff] text-[#0a0d1a] border border-[#6b8eff] font-bold shadow-[0_0_15px_rgba(107,142,255,0.3)]'
                  : 'border border-[#2d3748] text-[#7a8190] hover:border-[#6b8eff] hover:text-[#6b8eff]'
                }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-[#2d3748] transition-all duration-500">
        {visibleProjects.length === 0 && (
          <div className="py-12 text-center text-[#7a8190] font-mono text-sm">
            No projects found in this category.
          </div>
        )}

        {visibleProjects.map((project, index) => {
          const idx = index;

          return (
            <div
              key={project.title}
              className="border-b border-[#2d3748] py-6 group transition-colors hover:bg-[#6b8eff]/5"
            >
              <div
                className="flex flex-row items-center justify-between gap-2 sm:gap-4 cursor-pointer px-2 sm:px-4 w-full"
                ref={(el) => { headerRefs.current[idx] = el; }}
                data-idx={idx}
                onClick={() => {
                  setExpandedIndex(expandedIndex === idx ? null : idx);
                }}
              >
                <div className="flex flex-row items-center gap-2 sm:gap-4 min-w-0 flex-1">
                  <h3 className="text-xl sm:text-3xl md:text-5xl text-[#e6e6e6] tracking-wider uppercase group-hover:text-[#6b8eff] transition-colors truncate" style={{ fontFamily: '"VT323", monospace' }}>
                    {project.title}
                  </h3>
                  <span className="hidden md:block text-[10px] sm:text-xs md:text-sm text-[#7a8190] uppercase tracking-widest mt-1 whitespace-nowrap" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    · {project.category}
                  </span>
                </div>

                <div className="flex flex-row items-center gap-2 sm:gap-3 flex-shrink-0">
                  {/* Highlighted Live Button (handles both internal case studies and external live links) */}
                  {(project.slug || project.liveLink) && (
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        const url = project.slug ? `/${project.slug}` : project.liveLink;
                        window.open(url, '_blank');
                      }}
                      className="flex items-center gap-1 sm:gap-1.5 px-3 sm:px-4 py-1 sm:py-1.5 text-[9px] sm:text-xs font-bold font-mono bg-[#6b8eff] text-[#0a0d1a] rounded-full hover:bg-white hover:scale-105 transition-all whitespace-nowrap shadow-[0_0_10px_rgba(107,142,255,0.4)]"
                    >
                      <span className="hidden sm:inline">Live</span>
                      <span className="sm:hidden">Live</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </button>
                  )}
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
                  <div className="ml-1 sm:ml-2 text-[#7a8190] group-hover:text-[#6b8eff] transition-colors">
                    {expandedIndex === idx ? <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5" /> : <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5" />}
                  </div>
                </div>
              </div>

              {/* Expanded Content */}
              <div className={`grid transition-all duration-300 ease-in-out ${expandedIndex === idx ? 'grid-rows-[1fr] opacity-100 mt-8' : 'grid-rows-[0fr] opacity-0 mt-0'}`}>
                <div className="overflow-hidden px-4 md:px-8">

                  <div className="mb-6 text-[#d1d5db] font-serif text-lg leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {project.description}
                  </div>

                  <div className="space-y-4 mb-12">
                    {project.details?.split(/(?<=\.)\s+(?=[A-Z])/).filter(Boolean).map((bullet, i) => (
                      <div key={i} className="flex items-start gap-4 text-[#a1a1aa] text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
                        <span className="text-[#6b8eff] font-mono mt-1 opacity-70">+</span>
                        <span>{bullet.trim()}</span>
                      </div>
                    ))}
                  </div>

                  {project.slug === 'rigel' && (
                    <div className="mb-12 mt-8">
                      <RigelWorkflowStory />
                    </div>
                  )}

                  {project.title === 'Markzy' && (
                    <div className="mb-12 mt-8">
                      <MarkzyVisual />
                    </div>
                  )}

                  {project.slug === 'ncDashboard' && (
                    <div className="mb-12 mt-8">
                      <NCDashboardVisual />
                    </div>
                  )}

                  {project.title === 'Delivery Warehouse Connectivity System' && (
                    <div className="mb-12 mt-8">
                      <DeliveryWarehouseVisual />
                    </div>
                  )}

                  {project.title === 'VisionSpeak AI' && (
                    <div className="mb-12 mt-8">
                      <VisionSpeakAIVisual />
                    </div>
                  )}

                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Show More / Close Button */}
      {filteredProjects.length > 5 && (
        <div className="mt-12 flex justify-center w-full relative z-10">
          {!showMore ? (
            <button
              onClick={() => setShowMore(true)}
              className="flex items-center gap-3 px-8 py-3 border border-[#2d3748] hover:border-[#6b8eff] bg-[#0a0d1a] hover:bg-[#6b8eff]/10 rounded-full text-[#6b8eff] transition-all duration-300 font-mono text-sm tracking-widest uppercase shadow-xl"
            >
              Show More Projects <ChevronDown className="w-4 h-4 animate-bounce" />
            </button>
          ) : (
            <button
              onClick={() => setShowMore(false)}
              className="flex items-center gap-3 px-8 py-3 border border-[#2d3748] hover:border-[#6b8eff] bg-[#0a0d1a] hover:bg-[#6b8eff]/10 rounded-full text-[#6b8eff] transition-all duration-300 font-mono text-sm tracking-widest uppercase shadow-xl"
            >
              Close Projects <ChevronUp className="w-4 h-4" />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
