"use client";

import Image from "next/image";
import { profileData } from "@/lib/profile";

export default function ExperienceTemplate() {
  if (!profileData.experience || profileData.experience.length === 0) {
    return (
      <div className="w-full max-w-4xl mx-auto">
        <p className="text-base text-gray-700">No experience information available.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="prose prose-gray max-w-none">
        {/* Header Section */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Professional Experience
          </h1>
          <p className="text-base text-gray-600">
            My professional journey and work history
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          {profileData.experience.map((exp, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Experience Card */}
              <div className="rounded-xl border border-gray-200 bg-white p-6 hover:border-gray-300 hover:shadow-sm transition-all duration-200">
                {/* Header */}
                <div className="mb-4 pb-4 border-b border-gray-100">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      {/* Company Logo */}
                      {exp.company === "CODE N CREATIVE" && (
                        <div className="flex-shrink-0 mt-3">
                          <Image
                            src="/CNC-removebg-preview.png"
                            alt={exp.company}
                            width={128}
                            height={128}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      {exp.company === "LetsUpgrade" && (
                        <div className="flex-shrink-0 mt-3">
                          <Image
                            src="/LU.png"
                            alt={exp.company}
                            width={128}
                            height={128}
                            className="object-contain"
                            unoptimized
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                          {exp.role}
                        </h3>
                        <p className="text-base font-medium text-gray-700">
                          {exp.company}
                        </p>
                        {exp.location && (
                          <p className="text-sm text-gray-500 mt-1">
                            {exp.location}
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="flex-shrink-0">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Responsibilities */}
                {exp.points && exp.points.length > 0 && (
                  <div className="space-y-3">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2.5">
                      {exp.points.map((point, pointIndex) => (
                        <li
                          key={pointIndex}
                          className="flex items-start gap-3 text-base text-gray-700 leading-relaxed"
                        >
                          <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 mt-2"></span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

