import { profileData, certifications } from '@/lib/profile';
import { ArrowUpRight } from 'lucide-react';

const categoryMap: Record<string, string> = {
  programming: "LANGUAGES",
  frameworks: "FRAMEWORKS",
  aiTools: "ML & RETRIEVAL", // Updated to match user's screenshot aesthetic
  databases: "DATABASES",
  cloudServices: "CLOUD & INFRA",
  integrations: "INTEGRATIONS",
  versionControl: "VERSION CONTROL",
  dataStructures: "COMPUTER SCIENCE",
  soft: "SOFT SKILLS",
};

export function SkillsCertifications() {
  return (
    <div className="w-full relative my-32">

      {/* --- SKILLS SECTION --- */}
      <div className="mb-32">
        <div className="text-[#6b8eff] text-sm tracking-widest uppercase mb-12" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
          What I work with
        </div>

        <div className="border-t border-[#2d3748]">
          {Object.entries(profileData.skills).map(([key, skills]) => {
            const label = categoryMap[key] || key.toUpperCase();

            return (
              <div key={key} className="flex flex-col md:flex-row gap-6 md:gap-12 border-b border-[#2d3748] py-8 hover:bg-[#6b8eff]/5 transition-colors px-4 md:px-6">

                {/* Category Header */}
                <div className="w-full md:w-1/4 lg:w-1/5 flex-shrink-0 pt-1">
                  <h3 className="text-[#7a8190] text-xs tracking-widest uppercase font-bold" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                    {label}
                  </h3>
                </div>

                {/* Skills Pills */}
                <div className="w-full md:w-3/4 lg:w-4/5 flex flex-wrap gap-3">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="px-4 py-2 text-xs md:text-sm border border-[#2d3748] rounded-full text-[#d1d5db] hover:border-[#6b8eff] hover:text-[#6b8eff] hover:shadow-[0_0_15px_rgba(143,164,248,0.15)] transition-all bg-[#0a0d1a] z-10"
                      style={{ fontFamily: '"JetBrains Mono", monospace' }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>
      </div>

      {/* --- CERTIFICATIONS SECTION --- */}
      <div>
        <h3 className="text-4xl md:text-5xl text-[#e6e6e6] tracking-wider uppercase mb-12 px-4 md:px-0" style={{ fontFamily: '"VT323", monospace' }}>
          Certifications
        </h3>

        <div className="space-y-4">
          {certifications.map((cert, idx) => (
            <div key={idx} className="border border-[#2d3748] rounded-xl p-3 md:p-4 flex flex-row items-center gap-3 md:gap-5 hover:bg-[#6b8eff]/5 hover:border-[#6b8eff]/50 transition-all group overflow-hidden">

              {/* Logo */}
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-white flex-shrink-0 flex items-center justify-center overflow-hidden border border-gray-200">
                <img src={cert.logo} alt={cert.issuer} className="w-full h-full object-contain p-1" />
              </div>

              {/* Info */}
              <div className="flex-grow min-w-0 flex flex-col justify-center">
                <div className="flex flex-row items-baseline gap-2 md:gap-3 truncate">
                  <h4 className="text-lg sm:text-xl md:text-2xl text-[#e6e6e6] group-hover:text-[#6b8eff] transition-colors truncate" style={{ fontFamily: '"VT323", monospace' }}>
                    {cert.name}
                  </h4>
                  <span className="hidden sm:inline text-[#d1d5db] text-xs sm:text-sm font-serif flex-shrink-0" style={{ fontFamily: 'var(--font-playfair)' }}>
                    — {cert.issuer}
                  </span>
                </div>

                <div className="text-[#7a8190] text-[10px] md:text-xs uppercase tracking-wide flex flex-row items-center gap-2 md:gap-3 mt-0.5 truncate" style={{ fontFamily: '"JetBrains Mono", monospace' }}>
                  <div className="hidden sm:block">
                    Issued {cert.issued} {cert.expires ? `· Expires ${cert.expires}` : ''}
                  </div>
                  <div className="hidden sm:block opacity-50">•</div>
                  <div className="truncate">
                    ID: <span className="text-[#a1a1aa] normal-case">{cert.credentialId}</span>
                  </div>
                </div>
              </div>

              {/* Show Credential Button */}
              {cert.link && cert.link !== "#" && (
                <div className="flex-shrink-0 ml-auto pl-2">
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 md:px-4 md:py-2 text-[9px] sm:text-[11px] uppercase tracking-wider font-bold border border-[#6b8eff] rounded-full text-[#6b8eff] hover:bg-[#6b8eff] hover:text-[#0a0d1a] transition-all whitespace-nowrap"
                    style={{ fontFamily: '"JetBrains Mono", monospace' }}
                  >
                    <span className="hidden sm:inline">Show Credential</span> <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </a>
                </div>
              )}

            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
