"use client";

import React, { createContext, useContext, useRef, useState } from "react";
import { ShapeOverlay, type ShapeOverlayRef } from "@/components/shape-overlay";

interface TransitionContextType {
  playTransition: (action: () => Promise<void> | void) => Promise<void>;
  isTransitioning: boolean;
}

const TransitionContext = createContext<TransitionContextType | null>(null);

export const useTransition = () => {
  const ctx = useContext(TransitionContext);
  if (!ctx) throw new Error("Missing TransitionProvider");
  return ctx;
};

export const TransitionProvider = ({ children }: { children: React.ReactNode }) => {
  const overlayRef = useRef<ShapeOverlayRef>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const isTransitioningRef = useRef(false);

  const playTransition = async (action: () => Promise<void> | void) => {
    // Guard: prevent overlapping transitions from rapid clicks
    if (isTransitioningRef.current) return;
    isTransitioningRef.current = true;

    try {
      if (overlayRef.current) {
        // 1. Signal transition start — components use this to hide fixed UI
        setIsTransitioning(true);

        // 2. Orange liquid slides up, washing over the still-visible page
        await overlayRef.current.open();

        // 3. Perform the page navigation or theme switch behind full coverage
        await action();

        // 4. Wait for the new page components to mount behind the overlay
        await new Promise(resolve => setTimeout(resolve, 1000));

        // 5. Slide up to reveal the new page
        await overlayRef.current.close();
      } else {
        await action();
      }
    } finally {
      setIsTransitioning(false);
      isTransitioningRef.current = false;
    }
  };

  return (
    <TransitionContext.Provider value={{ playTransition, isTransitioning }}>
      {children}
      {/* The overlay is mounted at the root layout level, so it never unmounts during navigation! */}
      <ShapeOverlay ref={overlayRef} />
    </TransitionContext.Provider>
  );
};
