import React from 'react';

export function VisionSpeakAIVisual() {
  return (
    <div className="w-full py-12 flex flex-col items-center justify-center font-mono tracking-widest overflow-x-auto overflow-y-hidden" style={{ scrollbarWidth: 'none' }}>
      
      {/* DESKTOP VIEW (Horizontal RIGEL-style) */}
      <div className="hidden md:flex items-center justify-center min-w-max px-2 uppercase">
        
        {/* Node 1: Problem */}
        <div className="p-3 border border-[#4b5563] bg-[#0a0d1a] text-[#e6e6e6] text-center w-[160px] whitespace-normal">
          <div className="text-xs font-bold leading-tight">PRESENTATION PROBLEM</div>
          <div className="text-[9px] mt-2 text-[#a1a1aa] italic normal-case leading-relaxed">
            &quot;You can see yourself presenting, but not how you&apos;re actually performing.&quot;
          </div>
        </div>

        <div className="flex items-center mx-1 md:mx-2 text-[#4b5563]">
          <div className="w-4 md:w-6 h-px bg-[#4b5563]"></div>
          <div className="w-2 h-2 border-t border-r border-[#4b5563] rotate-45 -ml-1"></div>
        </div>

        {/* Node 2: Upload */}
        <div className="px-3 py-3 border border-[#4b5563] bg-[#0a0d1a] text-[#e6e6e6] text-center whitespace-nowrap">
          <div className="text-xs font-bold">UPLOAD VIDEO</div>
        </div>

        <div className="flex items-center mx-1 md:mx-2 text-[#6b8eff]">
          <div className="w-4 md:w-6 h-px bg-[#6b8eff]"></div>
          <div className="w-2 h-2 border-t border-r border-[#6b8eff] rotate-45 -ml-1"></div>
        </div>

        {/* Node 3: AI Analysis (Glowing) */}
        <div className="p-3 border border-[#6b8eff] bg-[#0a0d1a] text-[#6b8eff] shadow-[0_0_15px_rgba(107,142,255,0.2)] text-center w-[180px] whitespace-normal">
          <div className="text-xs font-bold">AI ANALYSIS</div>
          <div className="text-[9px] mt-2 text-[#e6e6e6] leading-relaxed">SPEECH • EMOTION • BODY LANGUAGE</div>
          <div className="text-[9px] mt-2 text-[#a1a1aa] leading-relaxed">Whisper • Gemini • MediaPipe</div>
        </div>

        <div className="flex items-center mx-1 md:mx-2 text-[#6b8eff]">
          <div className="w-4 md:w-6 h-px bg-[#6b8eff]"></div>
          <div className="w-2 h-2 border-t border-r border-[#6b8eff] rotate-45 -ml-1"></div>
        </div>

        {/* Node 4: Insights */}
        <div className="p-3 border border-[#4b5563] bg-[#0a0d1a] text-[#e6e6e6] text-center w-[150px] whitespace-normal">
          <div className="text-xs font-bold leading-tight">COACHING INSIGHTS</div>
          <div className="text-[9px] mt-2 text-[#a1a1aa] leading-relaxed">
            SPEECH QUALITY<br/>DELIVERY QUALITY<br/>PRESENCE & GESTURES
          </div>
        </div>

        <div className="flex items-center mx-1 md:mx-2 text-[#4b5563]">
          <div className="w-4 md:w-6 h-px bg-[#4b5563]"></div>
          <div className="w-2 h-2 border-t border-r border-[#4b5563] rotate-45 -ml-1"></div>
        </div>

        {/* Node 5: Result */}
        <div className="px-3 py-3 border border-[#4b5563] bg-[#0a0d1a] text-[#e6e6e6] text-center whitespace-nowrap">
          <div className="text-xs font-bold">PRESENT BETTER</div>
        </div>

      </div>

      {/* MOBILE VIEW (Vertical Flow) */}
      <div className="md:hidden flex flex-col items-center w-full">
        {/* Step 1 */}
        <div className="text-center text-[#e6e6e6] text-sm uppercase">PRESENTATION PROBLEM</div>
        
        <div className="w-px h-6 bg-[#4b5563] mt-2"></div>
        <div className="text-[#e6e6e6] text-[10px]">▼</div>
        
        {/* Step 2 Quote */}
        <div className="text-center text-[#a1a1aa] text-xs md:text-sm mt-2 max-w-xs md:max-w-md italic px-4 leading-relaxed">
          &quot;You can see yourself presenting,<br className="hidden md:block" /> but not how you&apos;re actually performing.&quot;
        </div>
        
        <div className="w-px h-6 bg-[#4b5563] mt-2"></div>
        <div className="text-[#e6e6e6] text-[10px]">▼</div>
        
        {/* Step 3 */}
        <div className="mt-2 px-6 py-4 border border-[#4b5563] bg-[#0a0d1a] text-[#e6e6e6] text-center">
          <div className="text-xs uppercase">UPLOAD</div>
          <div className="text-xs uppercase">YOUR VIDEO</div>
        </div>
        
        <div className="w-px h-6 bg-[#4b5563] mt-2"></div>
        <div className="text-[#e6e6e6] text-[10px]">▼</div>
        
        {/* Step 4: AI Analysis Box (Glowing) */}
        <div className="mt-2 px-8 py-6 border border-[#6b8eff] bg-[#0a0d1a] shadow-[0_0_15px_rgba(107,142,255,0.2)] text-center max-w-[280px]">
          <div className="font-bold text-[#6b8eff] text-sm uppercase">AI ANALYSIS</div>
          
          <div className="text-xs mt-5 opacity-90 uppercase text-[#e6e6e6] leading-relaxed">
            SPEECH • EMOTION •<br /> BODY LANGUAGE
          </div>
          
          <div className="text-[10px] mt-4 opacity-70 uppercase text-[#a1a1aa] leading-relaxed">
            Whisper • Gemini •<br /> MediaPipe
          </div>
        </div>

        <div className="w-px h-6 bg-[#4b5563] mt-2"></div>
        <div className="text-[#e6e6e6] text-[10px]">▼</div>
        
        {/* Step 5 */}
        <div className="text-center text-[#e6e6e6] text-sm mt-2 uppercase">COACHING INSIGHTS</div>

        <div className="w-px h-6 bg-[#4b5563] mt-2"></div>

        {/* Branching Structure */}
        <div className="w-full max-w-[320px] flex flex-col items-center">
          
          {/* Top Branch Container */}
          <div className="w-full flex justify-between relative">
              <div className="absolute top-0 left-[15%] right-[15%] h-px bg-[#4b5563]"></div>
              
              <div className="flex flex-col items-center w-[30%] relative z-10">
                <div className="w-px h-6 bg-[#4b5563]"></div>
                <div className="text-[#e6e6e6] text-[10px]">▼</div>
                <div className="mt-2 text-center text-[10px] font-mono tracking-widest text-[#a1a1aa] uppercase">
                  SPEECH<br/>QUALITY
                </div>
              </div>
              
              <div className="flex flex-col items-center w-[40%] relative z-10">
                <div className="w-px h-6 bg-[#4b5563]"></div>
                <div className="text-[#e6e6e6] text-[10px]">▼</div>
                <div className="mt-2 text-center text-[10px] font-mono tracking-widest text-[#a1a1aa] uppercase">
                  DELIVERY<br/>QUALITY
                </div>
              </div>
              
              <div className="flex flex-col items-center w-[30%] relative z-10">
                <div className="w-px h-6 bg-[#4b5563]"></div>
                <div className="text-[#e6e6e6] text-[10px]">▼</div>
                <div className="mt-2 text-center text-[10px] font-mono tracking-widest text-[#a1a1aa] uppercase">
                  PRESENCE<br/>& GESTURES
                </div>
              </div>
          </div>

          {/* Bottom Merge Container */}
          <div className="w-full flex justify-between relative mt-4">
              <div className="absolute bottom-0 left-[15%] right-[15%] h-px bg-[#4b5563]"></div>
              
              <div className="flex flex-col items-center w-[30%] relative z-10">
                <div className="w-px h-6 bg-[#4b5563]"></div>
              </div>
              
              <div className="flex flex-col items-center w-[40%] relative z-10"></div>
              
              <div className="flex flex-col items-center w-[30%] relative z-10">
                <div className="w-px h-6 bg-[#4b5563]"></div>
              </div>
          </div>
          
          {/* Final line down */}
          <div className="w-px h-6 bg-[#4b5563]"></div>
          <div className="text-[#e6e6e6] text-[10px]">▼</div>
          
          {/* PRESENT BETTER */}
          <div className="mt-2 text-center font-mono text-[#e6e6e6] tracking-widest text-sm uppercase">
            PRESENT BETTER
          </div>
        </div>
      </div>
      
    </div>
  );
}
