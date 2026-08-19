"use client";

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function BouncyFooter() {
  useEffect(() => {
    // GSAP's built-in ComplexStringTween handles 'attr' tweening perfectly 
    // when the path segment types/counts match, meaning we don't need the paid MorphSVGPlugin!
    const down = 'M 0 -0.3 C 0 -0.3, 464 156, 1139 156 S 2278 -0.3, 2278 -0.3 V 683 H 0 V -0.3 z';
    const center = 'M 0 -0.3 C 0 -0.3, 464 0, 1139 0 S 2278 -0.3, 2278 -0.3 V 683 H 0 V -0.3 z';

    const st = ScrollTrigger.create({
      trigger: '.bouncy-footer-container',
      start: 'top bottom',
      toggleActions: 'play pause resume reverse',
      onEnter: self => {
        const velocity = self.getVelocity();
        // ensure variation stays within safe parameters even on extreme scrolling
        const variation = Math.max(Math.min(Math.abs(velocity / 10000), 0.8), 0.2);

        gsap.fromTo('#bouncy-path', {
          attr: { d: down }
        }, {
          duration: 2, 
          attr: { d: center }, 
          ease: `elastic.out(${1 + variation}, ${1 - variation})`, 
          overwrite: 'auto'
        });
      }
    });

    return () => {
      st.kill();
    };
  }, []);

  return (
    <div className="bouncy-footer-container relative w-full h-[250px] md:h-[400px] mt-32 overflow-hidden bg-[#0a0d1a] flex items-center justify-center">
      {/* Scroll Down text floating above the path */}
      <p className="absolute top-[20%] text-[#e6e6e6] text-sm tracking-widest font-mono z-20 pointer-events-none">
        SCROLL DOWN
      </p>

      {/* Noise Overlay matching the codepen */}
      <div 
        className="absolute inset-0 w-full h-full z-10 opacity-40 mix-blend-color-dodge pointer-events-none"
        style={{ backgroundImage: 'url("https://assets.codepen.io/16327/noise.png")' }}
      />
      
      <svg 
        preserveAspectRatio="none" 
        id="footer-img" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 2278 683"
        className="absolute bottom-0 w-full h-[80%] block overflow-visible z-0"
      >
        <defs>
          <linearGradient id="grad-footer" x1="0" y1="0" x2="2278" y2="683" gradientUnits="userSpaceOnUse">
            <stop offset="0.2" stopColor="#6b8eff"></stop>
            <stop offset="0.8" stopColor="#5b63ff"></stop>
          </linearGradient>
        </defs>
        <path 
          id="bouncy-path" 
          fill="url(#grad-footer)" 
          d="M 0 -0.3 C 0 -0.3, 464 0, 1139 0 S 2278 -0.3, 2278 -0.3 V 683 H 0 V -0.3 z"
        />
      </svg>
    </div>
  );
}
