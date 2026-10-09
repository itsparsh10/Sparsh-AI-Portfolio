import React from 'react';

const steps = [
  "PDF Ingestion",
  "Chunking & Embeddings",
  "FAISS Vector DB",
  "Gemini RAG Engine",
  "Multi-Modal Answers"
];

export function KobyAiVisual() {
  return (
    <div className="w-full py-6 md:py-10 flex flex-col items-center justify-center overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
      
      {/* DESKTOP VIEW */}
      <div className="hidden md:flex items-center justify-center w-full max-w-full px-2 font-mono tracking-wider text-xs lg:text-sm uppercase">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            {/* Box */}
            <div className={`px-3 lg:px-4 py-2.5 lg:py-3.5 border ${idx === 2 ? 'border-[#6b8eff] bg-[#0a0d1a] text-[#6b8eff] font-bold shadow-[0_0_15px_rgba(107,142,255,0.25)]' : 'border-[#4b5563] bg-[#0a0d1a] text-[#e6e6e6]'} whitespace-nowrap text-center`}>
              {step}
            </div>
            
            {/* Connecting Arrow */}
            {idx < steps.length - 1 && (
              <div className={`flex items-center mx-1 lg:mx-2 flex-shrink-0 ${idx < 2 ? 'text-[#6b8eff]' : 'text-[#4b5563]'}`}>
                <div className={`w-3 sm:w-4 lg:w-6 h-px ${idx < 2 ? 'bg-[#6b8eff]' : 'bg-[#4b5563]'}`}></div>
                <div className={`w-1.5 h-1.5 lg:w-2 lg:h-2 border-t border-r ${idx < 2 ? 'border-[#6b8eff]' : 'border-[#4b5563]'} rotate-45 -ml-1`}></div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>

      {/* MOBILE VIEW */}
      <div className="md:hidden flex flex-col items-center px-4 w-full font-mono tracking-widest text-xs uppercase">
        {steps.map((step, idx) => (
          <React.Fragment key={idx}>
            {/* Box */}
            <div className={`px-4 py-3 border w-full text-center ${idx === 2 ? 'border-[#6b8eff] bg-[#0a0d1a] text-[#6b8eff] font-bold shadow-[0_0_15px_rgba(107,142,255,0.25)]' : 'border-[#4b5563] bg-[#0a0d1a] text-[#e6e6e6]'}`}>
              {step}
            </div>
            
            {/* Connecting Arrow */}
            {idx < steps.length - 1 && (
              <div className={`flex flex-col items-center my-2 ${idx < 2 ? 'text-[#6b8eff]' : 'text-[#4b5563]'}`}>
                <div className={`h-4 w-px ${idx < 2 ? 'bg-[#6b8eff]' : 'bg-[#4b5563]'}`}></div>
                <div className="text-[10px] leading-none">▼</div>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
      
    </div>
  );
}
