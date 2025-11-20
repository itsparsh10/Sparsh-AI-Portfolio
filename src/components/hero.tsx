"use client";

import { useState, useEffect } from "react";
import { useChat } from "@/contexts/chat-context";

export default function Hero() {
  const { isChatActive } = useChat();
  const fullText = "Hi, I'm Sparsh Sharma Full-Stack and AI Developer.";
  const [displayedText, setDisplayedText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  // Color palette - darker versions for better visibility
  const baseColors = [
    "#5BA3C7", // Darker blue/cyan (from #ADD8E6)
    "#4A90B8", // Darker blue/cyan (from #B0E0E6)
    "#6BB3D0", // Darker blue/cyan (from #C8E6F0)
    "#D4A574", // Darker orange/peach (from #FFDAB9)
    "#C8965F", // Darker orange/peach (from #FFE4B5)
    "#E0B88A", // Darker orange/peach (from #FFE8D6)
    "#D45A5A", // Darker red/rose (from #F08080)
    "#C04A4A", // Darker red/rose (from #FFB6C1)
    "#D96B6B", // Darker red/rose (from #FFC0CB)
    "#808080", // Darker gray (from #E0E0E0)
    "#909090", // Darker gray (from #FAFAFA)
  ];
  
  // Shuffle function (Fisher-Yates algorithm)
  const shuffleArray = <T,>(array: T[]): T[] => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };
  
  // Get last used color from sessionStorage to avoid repetition
  const getLastColor = (): string | null => {
    if (typeof window !== 'undefined') {
      return sessionStorage.getItem('lastNameColor');
    }
    return null;
  };
  
  // Select a random color on mount (shuffled and avoids repetition)
  const [nameColor, setNameColor] = useState(() => {
    const shuffledColors = shuffleArray(baseColors);
    const lastColor = getLastColor();
    
    // If there's a last color and it's in the array, remove it and add to end
    let availableColors = shuffledColors;
    if (lastColor && shuffledColors.includes(lastColor)) {
      availableColors = shuffledColors.filter(c => c !== lastColor);
      // Add last color to the end so it's least likely to be picked
      availableColors.push(lastColor);
    }
    
    // Pick from first 80% of shuffled array to avoid the last color
    const pickRange = Math.floor(availableColors.length * 0.8);
    const selectedColor = availableColors[Math.floor(Math.random() * pickRange)];
    
    // Store in sessionStorage
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('lastNameColor', selectedColor);
    }
    
    return selectedColor;
  });

  useEffect(() => {
    let currentIndex = 0;
    const typingSpeed = 100; // milliseconds per character
    let typingTimeout: NodeJS.Timeout;

    const typeText = () => {
      if (currentIndex < fullText.length) {
        setDisplayedText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
        typingTimeout = setTimeout(typeText, typingSpeed);
      } else {
        // Stop cursor blinking when typing is complete
        setIsTypingComplete(true);
        setShowCursor(false);
      }
    };

    // Start typing after a short delay
    const startTimeout = setTimeout(typeText, 500);
    
    return () => {
      clearTimeout(startTimeout);
      if (typingTimeout) clearTimeout(typingTimeout);
    };
  }, []);

  // Split the displayed text to apply styling
  const renderText = () => {
    if (!displayedText) {
      return showCursor ? <span className="animate-pulse">|</span> : null;
    }

    // Fixed positions based on the full text structure
    // "Hi, I'm " = 0-8
    // "Sparsh Sharma" = 8-21
    // " " = 21-22
    // "Full-Stack and AI Developer." = 22-51
    
    const prefixEnd = 8; // "Hi, I'm "
    const nameStart = 8;
    const nameEnd = 21; // "Sparsh Sharma"
    const middleStart = 21;
    const middleEnd = 22; // space
    const roleStart = 22; // "Full-Stack and AI Developer."
    const roleEnd = fullText.length;

    const prefix = displayedText.slice(0, Math.min(prefixEnd, displayedText.length));
    const name = displayedText.length > nameStart 
      ? displayedText.slice(nameStart, Math.min(nameEnd, displayedText.length))
      : "";
    const middle = displayedText.length > middleStart
      ? displayedText.slice(middleStart, Math.min(middleEnd, displayedText.length))
      : "";
    const role = displayedText.length > roleStart
      ? displayedText.slice(roleStart, Math.min(roleEnd, displayedText.length))
      : "";

  return (
      <>
        {prefix}
        {name && (
          <span 
            className="font-bold transition-colors duration-300"
            style={{ color: nameColor }}
          >
            {name}
                </span>
        )}
        {middle}
        {role && <span className="italic font-normal">{role}</span>}
        {!isTypingComplete && showCursor && <span className="animate-pulse">|</span>}
      </>
    );
  };

  return (
    <section
      className={`relative bg-white flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${
        isChatActive
          ? "min-h-[140px] sm:min-h-[120px] py-4 sm:py-3"
          : "min-h-screen"
      }`}
    >
      {/* Abstract flowing lines background */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden opacity-100"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            {/* Light blue/cyan gradients */}
            <linearGradient id="blue1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ADD8E6" stopOpacity="0" />
              <stop offset="25%" stopColor="#ADD8E6" stopOpacity="0.15" />
              <stop offset="50%" stopColor="#ADD8E6" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#ADD8E6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#ADD8E6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blue2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B0E0E6" stopOpacity="0" />
              <stop offset="25%" stopColor="#B0E0E6" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#B0E0E6" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#B0E0E6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#B0E0E6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="blue3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C8E6F0" stopOpacity="0" />
              <stop offset="25%" stopColor="#C8E6F0" stopOpacity="0.1" />
              <stop offset="50%" stopColor="#C8E6F0" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#C8E6F0" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#C8E6F0" stopOpacity="0" />
            </linearGradient>
            
            {/* Light orange/peach gradients */}
            <linearGradient id="orange1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFDAB9" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFDAB9" stopOpacity="0.18" />
              <stop offset="50%" stopColor="#FFDAB9" stopOpacity="0.5" />
              <stop offset="75%" stopColor="#FFDAB9" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#FFDAB9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orange2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE4B5" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFE4B5" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#FFE4B5" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#FFE4B5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="orange3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE8D6" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFE8D6" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#FFE8D6" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#FFE8D6" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#FFE8D6" stopOpacity="0" />
            </linearGradient>
            
            {/* Light red/rose gradients */}
            <linearGradient id="red1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F08080" stopOpacity="0" />
              <stop offset="25%" stopColor="#F08080" stopOpacity="0.16" />
              <stop offset="50%" stopColor="#F08080" stopOpacity="0.45" />
              <stop offset="75%" stopColor="#F08080" stopOpacity="0.16" />
              <stop offset="100%" stopColor="#F08080" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="red2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFB6C1" stopOpacity="0.14" />
              <stop offset="50%" stopColor="#FFB6C1" stopOpacity="0.4" />
              <stop offset="75%" stopColor="#FFB6C1" stopOpacity="0.14" />
              <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="red3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFC0CB" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFC0CB" stopOpacity="0.12" />
              <stop offset="50%" stopColor="#FFC0CB" stopOpacity="0.35" />
              <stop offset="75%" stopColor="#FFC0CB" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#FFC0CB" stopOpacity="0" />
            </linearGradient>
            
            {/* Very light gray/white gradients */}
            <linearGradient id="gray1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E0E0E0" stopOpacity="0" />
              <stop offset="25%" stopColor="#E0E0E0" stopOpacity="0.08" />
              <stop offset="50%" stopColor="#E0E0E0" stopOpacity="0.25" />
              <stop offset="75%" stopColor="#E0E0E0" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#E0E0E0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gray2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5F5F5" stopOpacity="0" />
              <stop offset="25%" stopColor="#F5F5F5" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#F5F5F5" stopOpacity="0.2" />
              <stop offset="75%" stopColor="#F5F5F5" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#F5F5F5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gray3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FAFAFA" stopOpacity="0" />
              <stop offset="25%" stopColor="#FAFAFA" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#FAFAFA" stopOpacity="0.15" />
              <stop offset="75%" stopColor="#FAFAFA" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FAFAFA" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="gray4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F8F8F8" stopOpacity="0" />
              <stop offset="25%" stopColor="#F8F8F8" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#F8F8F8" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#F8F8F8" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Light blue/cyan lines - very large sweeping arcs from edge to edge */}
          <path
            d="M-150,650 Q300,150 960,400 Q1620,650 2070,500"
            stroke="url(#blue1)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-100,250 Q500,50 960,250 Q1420,450 2020,350"
            stroke="url(#blue2)"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-120,850 Q400,550 960,750 Q1520,950 2040,850"
            stroke="url(#blue3)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Light orange/peach lines - expansive tiled curves */}
          <path
            d="M-80,500 Q400,300 960,500 Q1520,700 2000,600"
            stroke="url(#orange1)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-60,950 Q500,700 960,900 Q1420,1100 1980,1000"
            stroke="url(#orange2)"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-90,200 Q350,50 960,200 Q1570,350 2010,300"
            stroke="url(#orange3)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Light red/rose lines - organic flowing arcs */}
          <path
            d="M-110,550 Q250,350 960,550 Q1670,750 2030,650"
            stroke="url(#red1)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-40,750 Q450,550 960,750 Q1470,950 1960,850"
            stroke="url(#red2)"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-70,300 Q200,100 960,300 Q1720,500 1990,400"
            stroke="url(#red3)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          
          {/* Very light gray/white lines - barely visible, very large arcs */}
          <path
            d="M-130,400 Q500,200 960,400 Q1420,600 2050,500"
            stroke="url(#gray1)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-50,800 Q400,600 960,800 Q1520,1000 1970,900"
            stroke="url(#gray2)"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-100,100 Q400,0 960,100 Q1520,200 2020,150"
            stroke="url(#gray3)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-30,1000 Q450,800 960,1000 Q1470,1200 1940,1100"
            stroke="url(#gray4)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
                </div>

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-4xl mx-auto px-6 text-center transition-all duration-700 ${
          isChatActive
            ? "-mt-0 sm:-mt-0 md:-mt-0"
            : "-mt-16 sm:-mt-20 md:-mt-24"
        }`}
      >
        {/* Main heading */}
        <h1
          className={`font-serif text-[#1A2F2F] leading-tight transition-all duration-700 ${
            isChatActive
              ? "text-2xl sm:text-3xl md:text-4xl mb-2"
              : "text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-8"
          }`}
        >
          {renderText()}
        </h1>
      </div>
    </section>
  );
}
