"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { useRouter, usePathname } from "next/navigation";
import { useTransition } from "@/contexts/transition-context";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const [isToggled, setIsToggled] = React.useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { playTransition, isTransitioning } = useTransition();

  // Reset toggle when navigating back to this page
  React.useEffect(() => {
    setIsToggled(false);
  }, [pathname]);

  // Avoid hydration mismatch by waiting for mount
  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (pathname !== '/ai-mode') {
    return null;
  }

  if (!mounted) {
    return (
      <button
        className="fixed z-50 flex items-center justify-center opacity-50"
        id="themeToggle"
        aria-label="Toggle theme"
        type="button"
        disabled
        style={{ top: 'calc(1rem + env(safe-area-inset-top, 0px))', right: '1rem' }}
      >
        <div className="w-[50px] h-[28px] md:w-[60px] md:h-[32px] rounded-full p-[3px] relative bg-[#eef2f6]"></div>
      </button>
    );
  }

  const toggleTheme = async (e: React.MouseEvent) => {
    e.preventDefault();
    setIsToggled(true);

    // Slight delay to let the toggle animation play before transition
    setTimeout(async () => {
      await playTransition(() => {
        setTheme("dark");
        sessionStorage.setItem("skipV2Loading", "true");
        if (pathname === '/ai-mode') {
          router.push("/");
        } else {
          router.push("/ai-mode");
        }
      });
    }, 400);
  };

  return (
    <button
      onClick={toggleTheme}
      className="fixed z-50 flex items-center justify-center cursor-pointer group rounded-full outline-none hover:scale-105 transition-transform duration-300" style={{ top: 'calc(1rem + env(safe-area-inset-top, 0px))', right: '1rem' }}
      id="themeToggle"
      aria-label="Switch to AI Mode"
      type="button"
    >
      {/* Liquid Glass Track */}
      <div
        className="w-[50px] h-[28px] md:w-[60px] md:h-[32px] rounded-full p-[3px] relative overflow-hidden backdrop-blur-xl border border-white/40 dark:border-white/10 transition-all duration-500"
        style={{
          backgroundColor: 'rgba(238, 242, 246, 0.75)',
          boxShadow: 'inset 0px 3px 6px rgba(0,0,0,0.1), inset 0px -2px 4px rgba(255,255,255,0.7), 0 4px 15px rgba(0,0,0,0.1)'
        }}
      >
        {/* Liquid Glass Thumb */}
        <div
          className={`h-[22px] w-[26px] md:h-[24px] md:w-[30px] rounded-full relative transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] ${isToggled ? 'translate-x-[18px] md:translate-x-[24px]' : 'translate-x-0'}`}
          style={{
            backgroundColor: '#cbd4df',
            boxShadow: '3px 0px 8px rgba(0,0,0,0.2), inset -2px -2px 4px rgba(0,0,0,0.05), inset 2px 2px 4px rgba(255,255,255,0.3)'
          }}
        >
          {/* Intense C-Shape Glass Highlight */}
          <div
            className="absolute inset-[1px] rounded-full opacity-90"
            style={{
              boxShadow: 'inset 5px 0px 4px -1px rgba(255,255,255,1), inset 0px 3px 4px -1px rgba(255,255,255,1), inset 0px -3px 4px -1px rgba(255,255,255,1)'
            }}
          ></div>
        </div>
      </div>
    </button>
  );
}
