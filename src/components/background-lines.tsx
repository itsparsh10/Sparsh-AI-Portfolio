"use client";

interface BackgroundLinesProps {
  className?: string;
  idPrefix?: string;
  variant?: "hero" | "ai-mode";
}

const gradients = [
  { id: "blue1", color: "#ADD8E6", hero: [0, 0.15, 0.5, 0.15, 0], ai: [0, 0.05, 0.15, 0.05, 0] },
  { id: "blue2", color: "#B0E0E6", hero: [0, 0.12, 0.4, 0.12, 0], ai: [0, 0.04, 0.12, 0.04, 0] },
  { id: "blue3", color: "#C8E6F0", hero: [0, 0.1, 0.35, 0.1, 0], ai: [0, 0.03, 0.1, 0.03, 0] },
  { id: "orange1", color: "#FFDAB9", hero: [0, 0.18, 0.5, 0.18, 0], ai: [0, 0.06, 0.15, 0.06, 0] },
  { id: "orange2", color: "#FFE4B5", hero: [0, 0.14, 0.4, 0.14, 0], ai: [0, 0.05, 0.12, 0.05, 0] },
  { id: "orange3", color: "#FFE8D6", hero: [0, 0.12, 0.35, 0.12, 0], ai: [0, 0.04, 0.1, 0.04, 0] },
  { id: "red1", color: "#F08080", hero: [0, 0.16, 0.45, 0.16, 0], ai: [0, 0.05, 0.13, 0.05, 0] },
  { id: "red2", color: "#FFB6C1", hero: [0, 0.14, 0.4, 0.14, 0], ai: [0, 0.05, 0.12, 0.05, 0] },
  { id: "red3", color: "#FFC0CB", hero: [0, 0.12, 0.35, 0.12, 0], ai: [0, 0.04, 0.1, 0.04, 0] },
  { id: "gray1", color: "#E0E0E0", hero: [0, 0.08, 0.25, 0.08, 0], ai: [0, 0.03, 0.08, 0.03, 0] },
  { id: "gray2", color: "#F5F5F5", hero: [0, 0.06, 0.2, 0.06, 0], ai: [0, 0.02, 0.06, 0.02, 0] },
  { id: "gray3", color: "#FAFAFA", hero: [0, 0.05, 0.15, 0.05, 0], ai: [0, 0.02, 0.05, 0.02, 0] },
  { id: "gray4", color: "#F8F8F8", hero: [0, 0.04, 0.12, 0.04, 0], ai: [0, 0.01, 0.04, 0.01, 0] },
];

const paths = [
  { id: "blue1", d: "M-150,650 Q300,150 960,400 Q1620,650 2070,500", w: 1 },
  { id: "blue2", d: "M-100,250 Q500,50 960,250 Q1420,450 2020,350", w: 0.9 },
  { id: "blue3", d: "M-120,850 Q400,550 960,750 Q1520,950 2040,850", w: 0.8 },
  { id: "orange1", d: "M-80,500 Q400,300 960,500 Q1520,700 2000,600", w: 1 },
  { id: "orange2", d: "M-60,950 Q500,700 960,900 Q1420,1100 1980,1000", w: 0.9 },
  { id: "orange3", d: "M-90,200 Q350,50 960,200 Q1570,350 2010,300", w: 0.8 },
  { id: "red1", d: "M-110,550 Q250,350 960,550 Q1670,750 2030,650", w: 1 },
  { id: "red2", d: "M-40,750 Q450,550 960,750 Q1470,950 1960,850", w: 0.9 },
  { id: "red3", d: "M-70,300 Q200,100 960,300 Q1720,500 1990,400", w: 0.8 },
  { id: "gray1", d: "M-130,400 Q500,200 960,400 Q1420,600 2050,500", w: 0.7 },
  { id: "gray2", d: "M-50,800 Q400,600 960,800 Q1520,1000 1970,900", w: 0.6 },
  { id: "gray3", d: "M-100,100 Q400,0 960,100 Q1520,200 2020,150", w: 0.5 },
  { id: "gray4", d: "M-30,1000 Q450,800 960,1000 Q1470,1200 1940,1100", w: 0.5 },
];

const offsets = ["0%", "25%", "50%", "75%", "100%"];

export default function BackgroundLines({ className = "", idPrefix = "", variant = "hero" }: BackgroundLinesProps) {
  const p = (name: string) => idPrefix ? `${idPrefix}-${name}` : name;
  const ops = variant === "ai-mode" ? "ai" : "hero";

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <svg
        className="w-full h-full"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {gradients.map((g) => (
            <linearGradient key={g.id} id={p(g.id)} x1="0%" y1="0%" x2="100%" y2="0%">
              {g[ops].map((op, i) => (
                <stop key={i} offset={offsets[i]} stopColor={g.color} stopOpacity={op} />
              ))}
            </linearGradient>
          ))}
        </defs>
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke={`url(#${p(path.id)})`}
            strokeWidth={path.w}
            fill="none"
            strokeLinecap="round"
          />
        ))}
      </svg>
    </div>
  );
}
