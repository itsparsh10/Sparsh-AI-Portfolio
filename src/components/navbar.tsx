"use client";

import React, { useState, useEffect } from 'react';
import { Sparkles, Code2, Briefcase, Cpu, Mail } from 'lucide-react';

interface NavItem {
  id: string;
  label: string;
  icon: React.ElementType;
}

const navItems: NavItem[] = [
  { id: 'about', label: 'About', icon: Sparkles },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'skills', label: 'Skills', icon: Cpu },
  { id: 'contact', label: 'Contact', icon: Mail },
];

interface NavbarProps {
  isScrolled?: boolean;
}

export function Navbar({ isScrolled = false }: NavbarProps) {
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      const sections = navItems.map((item) => item.id);

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }

      if (window.scrollY < 150) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav
      className={`relative flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121829]/90 border border-[#6b8eff]/40 shadow-[0_4px_25px_rgba(107,142,255,0.2)] backdrop-blur-xl'
          : 'bg-[#11162b]/85 border border-[#2d3748]/80 shadow-lg shadow-black/40 backdrop-blur-md hover:border-[#6b8eff]/40'
      }`}
      aria-label="Main Navigation"
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6b8eff]/10 via-transparent to-[#6b8eff]/10 pointer-events-none opacity-50" />

      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeSection === item.id;

        return (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => scrollToSection(e, item.id)}
            className={`relative flex items-center gap-1.5 px-2.5 sm:px-3.5 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 group ${
              isActive
                ? 'text-[#6b8eff] bg-[#6b8eff]/15 font-semibold border border-[#6b8eff]/40 shadow-[0_0_12px_rgba(107,142,255,0.25)]'
                : 'text-[#94a3b8] hover:text-[#ffffff] hover:bg-[#6b8eff]/10 hover:border hover:border-[#6b8eff]/20'
            }`}
            style={{ fontFamily: '"JetBrains Mono", monospace' }}
          >
            <Icon
              className={`w-3.5 h-3.5 transition-transform duration-200 group-hover:scale-110 ${
                isActive ? 'text-[#6b8eff]' : 'text-[#7a8190] group-hover:text-[#6b8eff]'
              }`}
            />
            <span className="hidden sm:inline">{item.label}</span>

            {isActive && (
              <span className="w-1.5 h-1.5 rounded-full bg-[#6b8eff] animate-pulse shadow-[0_0_8px_#6b8eff]" />
            )}
          </a>
        );
      })}
    </nav>
  );
}
