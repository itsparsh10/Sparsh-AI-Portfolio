"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Github } from "lucide-react";
import { rigelNavSections, RIGEL_GITHUB } from "../rigel-data";

export function RigelNav() {
  const [active, setActive] = useState<string>("overview");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    rigelNavSections.forEach(({ id }) => {
      const section = document.getElementById(id);
      if (!section) return;
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      observer.observe(section);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="rg-nav">
      <div className="rg-container flex h-14 items-center justify-between gap-4">
        <Link
          href="/"
          className="flex items-center"
        >
          <img src="/images/rigel/Logo.png" alt="RIGEL MK-I" className="h-8 w-auto object-contain mix-blend-multiply pointer-events-none select-none" draggable={false} />
          <span className="ml-3 font-mono font-[500] text-[var(--rg-orange)] tracking-widest uppercase text-[15px]">RIGEL</span>
        </Link>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-4">
          {rigelNavSections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`rg-nav-link ${active === s.id ? "is-active" : ""}`}
            >
              {s.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={RIGEL_GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="rg-btn rg-btn-ghost"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <Link href="/" className="rg-btn rg-btn-primary">
            Portfolio
          </Link>
        </div>
      </div>
    </header>
  );
}
