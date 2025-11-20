"use client";

import Hero from "@/components/hero";
import ChatMessages from "@/components/chat-messages";
import { useChat } from "@/contexts/chat-context";

export default function Page() {
  const { isChatActive } = useChat();
  
  return (
    <div className="flex flex-col min-h-screen bg-white relative overflow-hidden">
      {/* Abstract flowing lines background - same as hero, visible in chat section */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden z-0 opacity-30"
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 1920 1080"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="page-blue1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ADD8E6" stopOpacity="0" />
              <stop offset="25%" stopColor="#ADD8E6" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#ADD8E6" stopOpacity="0.15" />
              <stop offset="75%" stopColor="#ADD8E6" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#ADD8E6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-blue2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B0E0E6" stopOpacity="0" />
              <stop offset="25%" stopColor="#B0E0E6" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#B0E0E6" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#B0E0E6" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#B0E0E6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-blue3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#C8E6F0" stopOpacity="0" />
              <stop offset="25%" stopColor="#C8E6F0" stopOpacity="0.03" />
              <stop offset="50%" stopColor="#C8E6F0" stopOpacity="0.1" />
              <stop offset="75%" stopColor="#C8E6F0" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#C8E6F0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-orange1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFDAB9" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFDAB9" stopOpacity="0.06" />
              <stop offset="50%" stopColor="#FFDAB9" stopOpacity="0.15" />
              <stop offset="75%" stopColor="#FFDAB9" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#FFDAB9" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-orange2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE4B5" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFE4B5" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#FFE4B5" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#FFE4B5" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FFE4B5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-orange3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFE8D6" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFE8D6" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#FFE8D6" stopOpacity="0.1" />
              <stop offset="75%" stopColor="#FFE8D6" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FFE8D6" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-red1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F08080" stopOpacity="0" />
              <stop offset="25%" stopColor="#F08080" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#F08080" stopOpacity="0.13" />
              <stop offset="75%" stopColor="#F08080" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#F08080" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-red2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFB6C1" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFB6C1" stopOpacity="0.05" />
              <stop offset="50%" stopColor="#FFB6C1" stopOpacity="0.12" />
              <stop offset="75%" stopColor="#FFB6C1" stopOpacity="0.05" />
              <stop offset="100%" stopColor="#FFB6C1" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-red3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FFC0CB" stopOpacity="0" />
              <stop offset="25%" stopColor="#FFC0CB" stopOpacity="0.04" />
              <stop offset="50%" stopColor="#FFC0CB" stopOpacity="0.1" />
              <stop offset="75%" stopColor="#FFC0CB" stopOpacity="0.04" />
              <stop offset="100%" stopColor="#FFC0CB" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-gray1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#E0E0E0" stopOpacity="0" />
              <stop offset="25%" stopColor="#E0E0E0" stopOpacity="0.03" />
              <stop offset="50%" stopColor="#E0E0E0" stopOpacity="0.08" />
              <stop offset="75%" stopColor="#E0E0E0" stopOpacity="0.03" />
              <stop offset="100%" stopColor="#E0E0E0" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-gray2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5F5F5" stopOpacity="0" />
              <stop offset="25%" stopColor="#F5F5F5" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#F5F5F5" stopOpacity="0.06" />
              <stop offset="75%" stopColor="#F5F5F5" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#F5F5F5" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-gray3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#FAFAFA" stopOpacity="0" />
              <stop offset="25%" stopColor="#FAFAFA" stopOpacity="0.02" />
              <stop offset="50%" stopColor="#FAFAFA" stopOpacity="0.05" />
              <stop offset="75%" stopColor="#FAFAFA" stopOpacity="0.02" />
              <stop offset="100%" stopColor="#FAFAFA" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="page-gray4" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F8F8F8" stopOpacity="0" />
              <stop offset="25%" stopColor="#F8F8F8" stopOpacity="0.01" />
              <stop offset="50%" stopColor="#F8F8F8" stopOpacity="0.04" />
              <stop offset="75%" stopColor="#F8F8F8" stopOpacity="0.01" />
              <stop offset="100%" stopColor="#F8F8F8" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M-150,650 Q300,150 960,400 Q1620,650 2070,500"
            stroke="url(#page-blue1)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-100,250 Q500,50 960,250 Q1420,450 2020,350"
            stroke="url(#page-blue2)"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-120,850 Q400,550 960,750 Q1520,950 2040,850"
            stroke="url(#page-blue3)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-80,500 Q400,300 960,500 Q1520,700 2000,600"
            stroke="url(#page-orange1)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-60,950 Q500,700 960,900 Q1420,1100 1980,1000"
            stroke="url(#page-orange2)"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-90,200 Q350,50 960,200 Q1570,350 2010,300"
            stroke="url(#page-orange3)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-110,550 Q250,350 960,550 Q1670,750 2030,650"
            stroke="url(#page-red1)"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-40,750 Q450,550 960,750 Q1470,950 1960,850"
            stroke="url(#page-red2)"
            strokeWidth="0.9"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-70,300 Q200,100 960,300 Q1720,500 1990,400"
            stroke="url(#page-red3)"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-130,400 Q500,200 960,400 Q1420,600 2050,500"
            stroke="url(#page-gray1)"
            strokeWidth="0.7"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-50,800 Q400,600 960,800 Q1520,1000 1970,900"
            stroke="url(#page-gray2)"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-100,100 Q400,0 960,100 Q1520,200 2020,150"
            stroke="url(#page-gray3)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M-30,1000 Q450,800 960,1000 Q1470,1200 1940,1100"
            stroke="url(#page-gray4)"
            strokeWidth="0.5"
            fill="none"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="relative z-10 flex flex-col min-h-screen">
      <Hero />
      <div className="flex-1 flex flex-col bg-transparent">
        <ChatMessages />
        </div>
      </div>
    </div>
  );
}
