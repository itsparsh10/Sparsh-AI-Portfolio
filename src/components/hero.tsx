"use client";

import { useState, useEffect } from "react";
import { useChat } from "@/contexts/chat-context";
import BackgroundLines from "@/components/background-lines";

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
    "#D96B6B", // Darker red/rose (from #FFC0CB)as you
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
    const role1Start = 22; // "Full-Stack and AI"
    const role1End = 39;
    const role2Start = 40; // "Developer."
    const role2End = fullText.length;

    const prefix = displayedText.slice(0, Math.min(prefixEnd, displayedText.length));
    const name = displayedText.length > nameStart 
      ? displayedText.slice(nameStart, Math.min(nameEnd, displayedText.length))
      : "";
    const role1 = displayedText.length > role1Start
      ? displayedText.slice(role1Start, Math.min(role1End, displayedText.length))
      : "";
    const role2 = displayedText.length > role2Start
      ? displayedText.slice(role2Start, Math.min(role2End, displayedText.length))
      : "";

  return (
      <>
        <span className="block">
          {prefix}
          {name && (
            <span 
              className="font-bold transition-colors duration-300"
              style={{ color: nameColor }}
            >
              {name}
            </span>
          )}
          {displayedText.length <= role1Start && !isTypingComplete && showCursor && <span className="animate-pulse">|</span>}
        </span>
        {(displayedText.length > role1Start) && (
          <span className="block">
            <span className="italic font-normal">{role1}</span>
            {displayedText.length > role1Start && displayedText.length <= role2Start && !isTypingComplete && showCursor && <span className="animate-pulse">|</span>}
          </span>
        )}
        {(displayedText.length > role2Start) && (
          <span className="block">
            <span className="italic font-normal">{role2}</span>
            {displayedText.length > role2Start && !isTypingComplete && showCursor && <span className="animate-pulse">|</span>}
          </span>
        )}
      </>
    );
  };

  return (
    <section
      className={`relative bg-white flex items-center justify-center overflow-hidden transition-all duration-700 ease-in-out ${
        isChatActive
          ? "min-h-[140px] sm:min-h-[120px] py-4 sm:py-3"
          : "min-h-dvh"
      }`}
    >
      <BackgroundLines className="opacity-100" idPrefix="hero" />

      {/* Content */}
      <div
        className={`relative z-10 w-full max-w-4xl mx-auto px-4 xs:px-5 sm:px-6 text-center transition-all duration-700 ${
          isChatActive
            ? "-mt-0 sm:-mt-0 md:-mt-0"
            : "-mt-12 xs:-mt-14 sm:-mt-16 md:-mt-20 lg:-mt-24"
        }`}
      >
        {/* Main heading */}
        <h1
          className={`font-serif text-[#1A2F2F] leading-tight transition-all duration-700 ${
            isChatActive
              ? "text-lg xs:text-xl sm:text-2xl md:text-3xl mb-2"
              : "text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-4 xs:mb-6 sm:mb-8"
          }`}
        >
          {renderText()}
        </h1>
      </div>
    </section>
  );
}
