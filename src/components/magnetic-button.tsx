"use client";

import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { CustomEase } from 'gsap/dist/CustomEase';
import { useRouter } from 'next/navigation';

if (typeof window !== "undefined") {
  gsap.registerPlugin(CustomEase);
}

interface MagneticButtonProps {
  label: string;
  onClick?: () => void;
  className?: string;
  href?: string;
}

export function MagneticButton({ label, onClick, className = "", href }: MagneticButtonProps) {
  const zoneRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);
  const router = useRouter();

  useEffect(() => {
    const zone = zoneRef.current;
    const btn = btnRef.current;
    const labelEl = labelRef.current;

    if (!zone || !btn || !labelEl) return;

    const strength = 0.4;
    const labelStrength = 0.24;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = zone.getBoundingClientRect();
      const mapX = gsap.utils.mapRange(rect.left, rect.right, -rect.width / 2, rect.width / 2, e.clientX);
      const mapY = gsap.utils.mapRange(rect.top, rect.bottom, -rect.height / 2, rect.height / 2, e.clientY);

      gsap.to(btn, {
        x: mapX * strength,
        y: mapY * strength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: "auto" // Auto overwrite keeps any other tweens (like wiggle) if we added them
      });

      gsap.to(labelEl, {
        x: mapX * labelStrength,
        y: mapY * labelStrength,
        duration: 0.4,
        ease: "power2.out",
        overwrite: true
      });
    };

    const handleMouseLeave = () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: "auto"
      });

      gsap.to(labelEl, {
        x: 0,
        y: 0,
        duration: 0.7,
        ease: "elastic.out(1, 0.4)",
        overwrite: true
      });
    };

    zone.addEventListener("mousemove", handleMouseMove);
    zone.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      zone.removeEventListener("mousemove", handleMouseMove);
      zone.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (onClick) {
      onClick();
    }
  };

  return (
    <div 
      ref={zoneRef} 
      className={`mag-zone w-32 h-32 md:w-40 md:h-40 flex items-center justify-center rounded-full relative cursor-pointer group ${className}`}
      onClick={handleClick}
    >
      <button
        ref={btnRef}
        className="mag-btn relative flex items-center justify-center px-6 py-3 rounded-full border-none cursor-pointer text-[#0a0d1a] overflow-hidden will-change-transform shadow-lg"
      >
        <div 
          className="bg absolute inset-0 rounded-full z-0 transition-transform duration-300 group-hover:scale-110" 
          style={{ background: 'linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)' }}
        />
        <span 
          ref={labelRef} 
          className="label relative z-10 pointer-events-none tracking-widest text-[#0a0d1a] text-2xl uppercase mt-1"
          style={{ fontFamily: '"VT323", monospace', fontSmooth: 'never', WebkitFontSmoothing: 'none' }}
        >
          {label}
        </span>
      </button>
    </div>
  );
}
