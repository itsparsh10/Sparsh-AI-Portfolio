"use client";

import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const blocksRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Check if we navigated via the transition button
    const shouldSkip = sessionStorage.getItem("skipV2Loading") === "true";
    if (shouldSkip) {
      sessionStorage.removeItem("skipV2Loading");
      setIsVisible(false);
      return;
    }

    // Build timeline
    const tl = gsap.timeline({ 
      onComplete: () => {
        // Fade out entire screen after animation finishes completely
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.inOut",
          onComplete: () => {
            setIsVisible(false);
          }
        });
      }
    });

    const fDuration = 0.1; // duration of each frame
    const loops = 2; // number of times to loop the pattern

    for (let i = 0; i < loops; i++) {
      // Frame 1: TR, BL
      tl.set(['#block-tr', '#block-bl'], { opacity: 1 })
        .set(['#block-tl', '#block-br'], { opacity: 0 })
        .to({}, { duration: fDuration });

      // Frame 2: TR
      tl.set(['#block-tr'], { opacity: 1 })
        .set(['#block-tl', '#block-bl', '#block-br'], { opacity: 0 })
        .to({}, { duration: fDuration });

      // Frame 3: TR, BL
      tl.set(['#block-tr', '#block-bl'], { opacity: 1 })
        .set(['#block-tl', '#block-br'], { opacity: 0 })
        .to({}, { duration: fDuration });

      // Frame 4: TL, TR, BR
      tl.set(['#block-tl', '#block-tr', '#block-br'], { opacity: 1 })
        .set(['#block-bl'], { opacity: 0 })
        .to({}, { duration: fDuration });

      // Frame 5: TL, BL
      tl.set(['#block-tl', '#block-bl'], { opacity: 1 })
        .set(['#block-tr', '#block-br'], { opacity: 0 })
        .to({}, { duration: fDuration });
    }

  }, { scope: containerRef });

  if (!isVisible) return null;

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-[999] bg-[#0a0d1a] flex items-center justify-center w-full h-dvh overflow-hidden"
    >
      <div 
        ref={blocksRef}
        className="w-16 h-16 grid grid-cols-2 grid-rows-2 gap-1"
      >
        <div id="block-tl" className="w-full h-full bg-white opacity-0" />
        <div id="block-tr" className="w-full h-full bg-white opacity-0" />
        <div id="block-bl" className="w-full h-full bg-white opacity-0" />
        <div id="block-br" className="w-full h-full bg-white opacity-0" />
      </div>
    </div>
  );
}
