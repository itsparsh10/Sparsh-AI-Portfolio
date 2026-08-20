import React from 'react';

export function NCDashboardVisual() {
  const inputs = ["USERS", "COMPANIES", "JOBS", "ANALYTICS", "GA4", "ACTIVITY", "EVENTS"];

  return (
    <div className="w-full py-8 md:py-12 flex items-center justify-center overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none' }}>
      
      {/* DESKTOP VIEW */}
      <div className="hidden md:flex items-center min-w-max px-4 text-[#e6e6e6] font-mono text-sm tracking-widest relative">
        
        {/* Left Side: Companies Raw Data */}
        <div className="px-4 py-2 border border-[#4b5563] whitespace-nowrap bg-[#0a0d1a]">
          COMPLEX COMPANIES DATA
        </div>

        {/* Line to trunk */}
        <div className="w-12 h-px bg-[#6b8eff]"></div>

        {/* Center Trunk and Items */}
        <div className="flex flex-col relative w-32 mr-4">
          {/* Main vertical trunk */}
          <div className="absolute left-0 top-5 bottom-5 w-px bg-[#4b5563]"></div>

          {inputs.map((item, i) => (
            <div key={item} className="flex items-center h-10 relative">
              {/* Dot on trunk */}
              <div className={`absolute left-0 -translate-x-1/2 w-1.5 h-1.5 rounded-full ${i === 3 ? 'bg-[#6b8eff] z-10' : 'bg-[#4b5563]'}`}></div>
              
              {/* Horizontal line to text */}
              <div className={`w-8 h-px ${i === 3 ? 'bg-[#6b8eff]' : 'bg-[#4b5563]'}`}></div>
              
              <div className={`ml-3 whitespace-nowrap ${i === 3 ? 'text-[#e6e6e6]' : 'text-[#a1a1aa]'}`}>{item}</div>
            </div>
          ))}
        </div>

        {/* Line from ANALYTICS to NC DASHBOARD */}
        <div className="flex items-center text-[#6b8eff]">
          <div className="w-12 h-px bg-[#6b8eff]"></div>
          <div className="w-2 h-2 border-t border-r border-[#6b8eff] rotate-45 -ml-1"></div>
        </div>

        {/* NC DASHBOARD Node */}
        <div className="mx-4 font-bold text-[#6b8eff] px-4 py-2 border border-[#6b8eff] bg-[#0a0d1a] shadow-[0_0_15px_rgba(107,142,255,0.2)]">
          NC DASHBOARD
        </div>

        {/* Arrow to Operations */}
        <div className="flex items-center text-[#4b5563]">
          <div className="w-12 h-px bg-[#4b5563]"></div>
          <div className="w-2 h-2 border-t border-r border-[#4b5563] rotate-45 -ml-1"></div>
        </div>

        {/* Operations Node (with Decisions hanging below) */}
        <div className="ml-4 relative flex items-center justify-center">
          <div className="text-[#a1a1aa] whitespace-nowrap">OPERATIONS</div>
          
          {/* Arrow down to decisions */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full h-8 w-px bg-[#4b5563] flex items-end justify-center">
            <div className="w-2 h-2 border-b border-r border-[#4b5563] rotate-45 -mb-[1px]"></div>
          </div>
          
          <div className="absolute left-1/2 -translate-x-1/2 top-[calc(100%+32px)] text-[#a1a1aa] whitespace-nowrap">
            DECISIONS
          </div>
        </div>

      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center w-full px-4 text-[#e6e6e6] font-mono text-sm tracking-widest relative">
        <div className="text-center font-bold mb-1">COMPLEX COMPANIES DATA</div>
        
        {/* Upper trunk */}
        <div className="w-px h-4 bg-[#4b5563]"></div>

        <div className="w-full flex flex-col relative">
          {/* Main vertical trunk line perfectly centered */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-[#4b5563]"></div>
          
          {inputs.map((item) => (
            <div key={item} className="w-full flex h-8">
              <div className="w-1/2"></div>
              <div className="w-1/2 flex items-center">
                {/* Horizontal branch */}
                <div className="w-6 h-px bg-[#4b5563]"></div>
                <div className="ml-3 text-[#a1a1aa] whitespace-nowrap">{item}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lower trunk */}
        <div className="w-px h-4 bg-[#4b5563]"></div>
        
        <div className="text-[#e6e6e6] text-xs">▼</div>

        <div className="text-center font-bold text-[#6b8eff] my-2">NC DASHBOARD</div>

        <div className="w-px h-4 bg-[#4b5563]"></div>
        <div className="text-[#e6e6e6] text-xs">▼</div>

        <div className="text-center text-[#a1a1aa] my-2">OPERATIONS</div>

        <div className="w-px h-4 bg-[#4b5563]"></div>
        <div className="text-[#e6e6e6] text-xs">▼</div>

        <div className="text-center text-[#a1a1aa] mt-2">DECISIONS</div>
      </div>

    </div>
  );
}
