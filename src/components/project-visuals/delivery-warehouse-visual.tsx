import React from 'react';

export function DeliveryWarehouseVisual() {
  return (
    <div className="w-full py-12 flex flex-col items-center justify-center font-mono tracking-widest overflow-x-hidden">
      
      {/* Step 1 */}
      <div className="text-center text-[#e6e6e6] text-sm md:text-base uppercase">WAREHOUSE NETWORK</div>
      
      <div className="w-px h-6 bg-[#4b5563] mt-2"></div>
      <div className="text-[#e6e6e6] text-[10px] md:text-xs">▼</div>
      
      {/* Step 2 */}
      <div className="text-center text-[#a1a1aa] text-sm md:text-base mt-2 uppercase">COMPLEX CONNECTIONS</div>
      
      <div className="w-px h-6 bg-[#4b5563] mt-2"></div>
      <div className="text-[#e6e6e6] text-[10px] md:text-xs">▼</div>
      
      {/* Step 3 */}
      <div className="text-center text-[#a1a1aa] text-sm md:text-base mt-2 uppercase">&quot;WHO IS CONNECTED?&quot;</div>
      
      <div className="w-px h-6 bg-[#4b5563] mt-2"></div>
      <div className="text-[#e6e6e6] text-[10px] md:text-xs">▼</div>
      
      {/* Step 4: DSU Engine Box */}
      <div className="mt-2 px-8 py-4 border border-[#6b8eff] bg-[#0a0d1a] text-[#6b8eff] shadow-[0_0_15px_rgba(107,142,255,0.2)] text-center">
        <div className="font-bold text-sm md:text-base uppercase">DSU ENGINE</div>
        <div className="text-xs md:text-sm mt-2 opacity-90 uppercase">Union-Find</div>
        <div className="hidden md:block text-xs md:text-sm mt-1 opacity-90 uppercase">Path Compression</div>
      </div>

      <div className="w-px h-6 bg-[#4b5563] mt-2"></div>
      <div className="text-[#e6e6e6] text-[10px] md:text-xs">▼</div>
      
      {/* Step 5 */}
      <div className="text-center text-[#e6e6e6] text-sm md:text-base mt-2 uppercase">CONNECTIVITY</div>

      <div className="w-px h-6 bg-[#4b5563] mt-2"></div>

      {/* Branching Structure */}
      <div className="w-full max-w-[320px] md:max-w-[450px] flex flex-col items-center">
        
        {/* Top Branch Container */}
        <div className="w-full flex justify-between relative">
            {/* Horizontal line connecting the centers of the outer items */}
            <div className="absolute top-0 left-[15%] right-[15%] h-px bg-[#4b5563]"></div>
            
            {/* NETWORKS */}
            <div className="flex flex-col items-center w-[30%] relative z-10">
              <div className="w-px h-6 bg-[#4b5563]"></div>
              <div className="text-[#e6e6e6] text-[10px] md:text-xs">▼</div>
              <div className="mt-2 text-center text-xs md:text-sm font-mono tracking-widest text-[#a1a1aa] uppercase">
                NETWORKS
              </div>
            </div>
            
            {/* REGIONAL ZONES */}
            <div className="flex flex-col items-center w-[40%] relative z-10">
              <div className="w-px h-6 bg-[#4b5563]"></div>
              <div className="text-[#e6e6e6] text-[10px] md:text-xs">▼</div>
              <div className="mt-2 text-center text-xs md:text-sm font-mono tracking-widest text-[#a1a1aa] uppercase">
                REGIONAL<br/>ZONES
              </div>
            </div>
            
            {/* ISOLATED WAREHOUSES */}
            <div className="flex flex-col items-center w-[30%] relative z-10">
              <div className="w-px h-6 bg-[#4b5563]"></div>
              <div className="text-[#e6e6e6] text-[10px] md:text-xs">▼</div>
              <div className="mt-2 text-center text-xs md:text-sm font-mono tracking-widest text-[#a1a1aa] uppercase">
                ISOLATED<br/>WAREHOUSES
              </div>
            </div>
        </div>

        {/* Bottom Merge Container */}
        <div className="w-full flex justify-between relative mt-4">
            {/* Horizontal line connecting the centers */}
            <div className="absolute bottom-0 left-[15%] right-[15%] h-px bg-[#4b5563]"></div>
            
            {/* Left drop */}
            <div className="flex flex-col items-center w-[30%] relative z-10">
              <div className="w-px h-6 bg-[#4b5563]"></div>
            </div>
            
            {/* Center (empty) */}
            <div className="flex flex-col items-center w-[40%] relative z-10">
            </div>
            
            {/* Right drop */}
            <div className="flex flex-col items-center w-[30%] relative z-10">
              <div className="w-px h-6 bg-[#4b5563]"></div>
            </div>
        </div>
        
        {/* Final line down */}
        <div className="w-px h-6 bg-[#4b5563]"></div>
        <div className="text-[#e6e6e6] text-[10px] md:text-xs">▼</div>
        
        {/* LOGISTICS INSIGHTS */}
        <div className="mt-2 text-center font-mono text-[#e6e6e6] tracking-widest text-sm md:text-base uppercase">
          LOGISTICS INSIGHTS
        </div>
      </div>
      
    </div>
  );
}
