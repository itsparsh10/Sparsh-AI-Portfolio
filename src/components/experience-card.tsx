"use client";

import Image from "next/image";
import { profileData } from "@/lib/profile";

interface ExperienceCardProps {
  companyName: string;
  className?: string;
}

export default function ExperienceCard({ companyName, className = "" }: ExperienceCardProps) {
  const experience = profileData.experience.find(
    exp => exp.company.toLowerCase() === companyName.toLowerCase()
  );

  if (!experience) {
    return null;
  }

  const getCompanyLogo = () => {
    if (experience.company === "CODE N CREATIVE") {
      return "/CNC-removebg-preview.png";
    }
    if (experience.company === "LetsUpgrade") {
      return "/LU.png";
    }
    return null;
  };

  const logo = getCompanyLogo();

  return (
    <div className={`group relative rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-200 p-6 ${className}`}>
      <div className="mb-4 pb-4 border-b border-gray-100">
        <div className="flex items-start gap-4">
          {logo && (
            <div className="flex-shrink-0">
              <Image
                src={logo}
                alt={experience.company}
                width={80}
                height={80}
                className="object-contain"
                unoptimized
              />
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-semibold text-gray-900 mb-1">
              {experience.role}
            </h3>
            <p className="text-base font-medium text-gray-700 mb-1">
              {experience.company}
            </p>
            {experience.location && (
              <p className="text-sm text-gray-500 mb-2">
                {experience.location}
              </p>
            )}
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
              {experience.period}
            </span>
          </div>
        </div>
      </div>

      {experience.points && experience.points.length > 0 && (
        <div className="space-y-3">
          <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
            Key Responsibilities
          </h4>
          <ul className="space-y-2.5">
            {experience.points.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-3 text-sm text-gray-700 leading-relaxed"
              >
                <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

