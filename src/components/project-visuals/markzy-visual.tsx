import React from 'react';

export function MarkzyVisual() {
  const branches = [
    "LinkedIn", 
    "Instagram", 
    "Blog", 
    "SEO", 
    "Google Ads", 
    "Facebook Ads", 
    "YouTube", 
    "100+ AI TOOLS"
  ];

  return (
    <div className="w-full py-8 md:py-12 flex flex-col items-center justify-center overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none' }}>
      
      {/* DESKTOP VIEW */}
      <div className="hidden md:flex items-center min-w-max px-4 font-mono tracking-widest text-sm text-[#e6e6e6]">
        
        {/* ONE IDEA */}
        <div className="px-4 py-2 border border-[#4b5563] bg-[#0a0d1a] whitespace-nowrap">
          ONE IDEA
        </div>
        
        {/* Arrow to MARKZY */}
        <div className="flex items-center text-[#6b8eff] ml-4">
          <div className="w-16 h-px bg-[#6b8eff]"></div>
          <div className="w-2 h-2 border-t border-r border-[#6b8eff] rotate-45 -ml-1"></div>
        </div>

        {/* MARKZY */}
        <div className="font-bold text-[#6b8eff] px-4 py-2 border border-[#6b8eff] bg-[#0a0d1a] shadow-[0_0_15px_rgba(107,142,255,0.2)] whitespace-nowrap z-10 ml-4">
          MARKZY
        </div>
        
        {/* Line to Trunk */}
        <div className="flex items-center text-[#4b5563] ml-4">
          <div className="w-12 h-px bg-[#4b5563]"></div>
        </div>

        {/* The Trunk and Branches */}
        <div className="flex flex-col relative">
          {/* Main vertical trunk */}
          <div className="absolute left-0 top-5 bottom-5 w-px bg-[#4b5563]"></div>

          {branches.map((item) => (
            <div key={item} className="flex items-center h-10 relative">
              <div className="absolute left-0 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#4b5563]"></div>
              {/* Horizontal line */}
              <div className="w-8 h-px bg-[#4b5563]"></div>
              <div className="ml-3 text-[#a1a1aa] whitespace-nowrap">{item}</div>
            </div>
          ))}
        </div>

      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center px-4 w-full text-[#e6e6e6] font-mono tracking-widest text-sm">
        
        {/* ONE IDEA */}
        <div className="px-6 py-4 border border-[#4b5563] bg-[#0a0d1a] w-full text-center">
          ONE IDEA
        </div>
        
        <div className="text-[#6b8eff] flex flex-col items-center">
          <div className="h-4 w-px bg-[#6b8eff]"></div>
          <div className="text-[#6b8eff] text-[10px]">▼</div>
        </div>
        
        {/* MARKZY */}
        <div className="px-6 py-4 border border-[#6b8eff] bg-[#0a0d1a] text-[#6b8eff] font-bold shadow-[0_0_15px_rgba(107,142,255,0.2)] w-full text-center">
          MARKZY
        </div>
        
        <div className="text-[#4b5563] flex flex-col items-center mb-2">
          <div className="h-4 w-px bg-[#4b5563]"></div>
          <div className="text-[#4b5563] text-[10px]">▼</div>
        </div>
        
        {/* Branches */}
        <div className="flex flex-wrap justify-center gap-2 w-full mt-2">
          {branches.map((channel) => (
            <div key={channel} className="px-3 py-2 border border-[#4b5563] text-xs text-[#a1a1aa] bg-[#0a0d1a]">
              {channel}
            </div>
          ))}
        </div>
        
      </div>

    </div>
  );
}
