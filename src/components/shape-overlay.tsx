"use client";

import React, { useEffect, useRef, useImperativeHandle, forwardRef } from 'react';
import gsap from 'gsap';

export interface ShapeOverlayRef {
  open: () => Promise<void>;
  close: () => Promise<void>;
}

export const ShapeOverlay = forwardRef<ShapeOverlayRef, {}>((props, ref) => {
  const overlayRef = useRef<SVGSVGElement>(null);
  const path1Ref = useRef<SVGPathElement>(null);
  const path2Ref = useRef<SVGPathElement>(null);

  const isOpenedRef = useRef(false);
  const allPointsRef = useRef<number[][]>([]);

  useEffect(() => {
    const numPaths = 2;
    const numPoints = 10;
    allPointsRef.current = [];
    for (let i = 0; i < numPaths; i++) {
      const points = [];
      for (let j = 0; j < numPoints; j++) {
        points.push(100);
      }
      allPointsRef.current.push(points);
    }
  }, []);

  const animate = (isOpening: boolean): Promise<void> => {
    return new Promise((resolve) => {
      if (!overlayRef.current || !path1Ref.current || !path2Ref.current) {
        resolve();
        return;
      }

      isOpenedRef.current = isOpening;
      const paths = [path1Ref.current, path2Ref.current];
      const numPoints = 10;
      const numPaths = paths.length;
      const delayPointsMax = 0.3;
      const delayPerPath = 0.25;

      // Reset points to 100
      for (let i = 0; i < numPaths; i++) {
        for (let j = 0; j < numPoints; j++) {
          allPointsRef.current[i][j] = 100;
        }
      }

      if (isOpening) {
        overlayRef.current.style.pointerEvents = "auto";
      }

      const render = () => {
        for (let i = 0; i < numPaths; i++) {
          const path = paths[i];
          const points = allPointsRef.current[i];

          let d = "";
          d += isOpening ? `M 0 0 V ${points[0]} C` : `M 0 ${points[0]} C`;

          for (let j = 0; j < numPoints - 1; j++) {
            const p = (j + 1) / (numPoints - 1) * 100;
            const cp = p - (1 / (numPoints - 1) * 100) / 2;
            d += ` ${cp} ${points[j]} ${cp} ${points[j + 1]} ${p} ${points[j + 1]}`;
          }

          d += isOpening ? ` V 100 H 0` : ` V 0 H 0`;
          path.setAttribute("d", d);
        }
      };

      const tl = gsap.timeline({
        onUpdate: render,
        onComplete: () => {
          if (!isOpening && overlayRef.current) {
            overlayRef.current.style.pointerEvents = "none";
          }
          resolve();
        },
        defaults: {
          ease: "power2.inOut",
          duration: 0.9
        }
      });

      const pointsDelay: number[] = [];
      for (let i = 0; i < numPoints; i++) {
        pointsDelay[i] = Math.random() * delayPointsMax;
      }

      for (let i = 0; i < numPaths; i++) {
        const points = allPointsRef.current[i];
        const pathDelay = delayPerPath * (isOpening ? i : (numPaths - i - 1));

        for (let j = 0; j < numPoints; j++) {
          const delay = pointsDelay[j];
          tl.to(points, {
            [j]: 0
          }, delay + pathDelay);
        }
      }
    });
  };

  useImperativeHandle(ref, () => ({
    open: () => animate(true),
    close: () => animate(false)
  }));

  return (
    <svg
      ref={overlayRef}
      className="shape-overlays fixed top-0 left-0 w-full h-[100dvh] pointer-events-none z-[99999]"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="gradient1" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ff8709" />
          <stop offset="100%" stopColor="#f7bdf8" />
        </linearGradient>
        <linearGradient id="gradient2" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#ffd9b0" />
          <stop offset="100%" stopColor="#ff8709" />
        </linearGradient>
      </defs>
      <path ref={path1Ref} className="shape-overlays__path" fill="url(#gradient2)"></path>
      <path ref={path2Ref} className="shape-overlays__path" fill="url(#gradient1)"></path>
    </svg>
  );
});

ShapeOverlay.displayName = 'ShapeOverlay';
