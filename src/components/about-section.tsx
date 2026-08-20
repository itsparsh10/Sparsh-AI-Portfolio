"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  const paragraph = "I am a Full-Stack Developer and AI Engineer. I specialize in building scalable, enterprise-grade web applications and cutting-edge AI solutions. Currently developing production tools at Code N Creative, I leverage modern web technologies and advanced machine learning frameworks to solve real-world problems.";
  
  // Split into words for animation
  const words = paragraph.split(" ");

  useGSAP(() => {
    if (!sectionRef.current || !textRef.current) return;

    const wordElements = textRef.current.querySelectorAll('.about-word');

    // Create a scroll-linked timeline
    gsap.fromTo(wordElements, 
      {
        opacity: 0.1,
        y: 10,
        filter: "blur(4px)"
      },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        stagger: 0.05, // Faster stagger
        ease: "power1.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 50%",
          end: "bottom 100%", // Finish animation much earlier in the scroll
          scrub: 0.2, // Faster response
        }
      }
    );

  }, { scope: sectionRef });

  return (
    <section 
      ref={sectionRef} 
      // Breakout container to stretch full width of the viewport, with Light Mode colors!
      className="w-screen relative left-1/2 -translate-x-1/2 h-[110vh] mt-12 mb-4 bg-[#F5F3EE] bg-grid-dark border-y border-[#e2dfd5]"
    >
      {/* Sticky container keeps the text in place while the section scrolls */}
      <div className="sticky top-0 h-[100vh] flex flex-col justify-center items-center px-4 max-w-7xl mx-auto w-full">
        
        <div className="max-w-6xl w-full">
          <div className="text-[#333333] font-bold text-sm tracking-widest uppercase mb-8" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
            ABOUT ME
          </div>
          
          <div 
            ref={textRef}
            className="text-xl md:text-3xl lg:text-4xl text-[#0a0d1a] font-serif leading-relaxed md:leading-relaxed lg:leading-relaxed flex flex-wrap gap-[0.25em]" 
            style={{ fontFamily: 'var(--font-playfair)' }}
          >
            {words.map((word, idx) => (
              <span key={idx} className="about-word inline-block will-change-transform">
                {word}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
