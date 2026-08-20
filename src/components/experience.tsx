import { profileData } from '@/lib/profile';

export function ExperienceSection() {
  return (
    <div className="w-screen relative left-1/2 -translate-x-1/2 py-32 my-12 bg-[#F5F3EE] bg-grid-dark border-y border-[#e2dfd5]">
      <div className="max-w-7xl mx-auto px-4 w-full">
        <div className="text-[#333333] font-bold text-sm tracking-widest uppercase mb-12" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
          Experience & Internships
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
          {profileData.experience.map((job, idx) => (
            <div key={idx} className="flex flex-col border border-[#d0caba] bg-white/50 backdrop-blur-sm rounded-xl p-6 md:p-8 hover:bg-white transition-colors group relative overflow-hidden shadow-sm hover:shadow-md">
              {/* Top Info */}
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
                <div className="flex flex-row items-center gap-4">
                  {/* Logo */}
                  {job.logo && (
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm">
                      <img src={job.logo} alt={job.company} className="w-full h-full object-contain p-1" />
                    </div>
                  )}
                  
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl text-[#0a0d1a] tracking-wider uppercase group-hover:text-[#3182ce] transition-colors" style={{ fontFamily: '"VT323", monospace' }}>
                      {job.company}
                    </h3>
                    <div className="text-xs md:text-sm text-[#4a5568] font-serif mt-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                      {job.role}
                    </div>
                  </div>
                </div>
                
                <div className="text-[10px] md:text-xs text-[#718096] font-bold uppercase tracking-widest lg:text-right mt-2 lg:mt-0" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                  <div className="whitespace-nowrap">{job.period}</div>
                  {job.location && <div className="mt-1 opacity-80">{job.location}</div>}
                </div>
              </div>
              
              {/* Bullet points */}
              <div className="space-y-4 mt-4 border-t border-[#d0caba]/50 pt-6">
                {job.points.map((point, i) => (
                  <div key={i} className="flex items-start gap-4 text-[#2d3748] text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
                    <span className="text-[#3182ce] font-bold font-mono mt-1 opacity-90">+</span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
