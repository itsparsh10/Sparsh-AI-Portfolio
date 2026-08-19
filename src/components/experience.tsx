import { profileData } from '@/lib/profile';

export function ExperienceSection() {
  return (
    <div className="w-full relative my-32">
      <div className="text-[#6b8eff] text-sm tracking-widest uppercase mb-12" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
        Experience & Internships
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-start">
        {profileData.experience.map((job, idx) => (
          <div key={idx} className="flex flex-col border border-[#2d3748] rounded-xl p-6 md:p-8 hover:bg-[#6b8eff]/5 transition-colors group relative overflow-hidden">
            {/* Top Info */}
            <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center gap-4 mb-6">
              <div className="flex flex-row items-center gap-4">
                {/* Logo */}
                {job.logo && (
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg bg-white flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-200">
                    <img src={job.logo} alt={job.company} className="w-full h-full object-contain p-1" />
                  </div>
                )}
                
                <div className="flex flex-col justify-center">
                  <h3 className="text-2xl md:text-3xl text-[#e6e6e6] tracking-wider uppercase group-hover:text-[#6b8eff] transition-colors" style={{ fontFamily: '"VT323", monospace' }}>
                    {job.company}
                  </h3>
                  <div className="text-xs md:text-sm text-[#d1d5db] font-serif mt-1" style={{ fontFamily: 'var(--font-playfair)' }}>
                    {job.role}
                  </div>
                </div>
              </div>
              
              <div className="text-[10px] md:text-xs text-[#7a8190] uppercase tracking-widest lg:text-right mt-2 lg:mt-0" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                <div className="whitespace-nowrap">{job.period}</div>
                {job.location && <div className="mt-1 opacity-70">{job.location}</div>}
              </div>
            </div>
            
            {/* Bullet points */}
            <div className="space-y-4 mt-4 border-t border-[#2d3748]/50 pt-6">
              {job.points.map((point, i) => (
                <div key={i} className="flex items-start gap-4 text-[#a1a1aa] text-sm md:text-base leading-relaxed" style={{ fontFamily: 'var(--font-playfair)' }}>
                  <span className="text-[#6b8eff] font-mono mt-1 opacity-70">+</span>
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
