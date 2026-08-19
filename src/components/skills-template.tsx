"use client";

import React from "react";
import Image from "next/image";
import { profileData, certifications } from "@/lib/profile";

// ChatGPT-like minimal design - neutral colors
const SkillBadge = ({ skill }: { skill: string }) => {
  return (
    <span className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 text-sm font-medium border border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all">
      {skill}
    </span>
  );
};

export default function SkillsTemplate() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="prose prose-gray max-w-none">
        {/* Header Section */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            Skills and Certifications
          </h1>
          <p className="text-base text-gray-600">
            My technical skills and professional certifications
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* Skills Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Skills & Technologies</h3>
            <div className="space-y-3">
              {profileData.skills.programming && profileData.skills.programming.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Programming Languages:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.programming.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
              {profileData.skills.frameworks && profileData.skills.frameworks.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Frameworks & Libraries:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.frameworks.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
              {profileData.skills.databases && profileData.skills.databases.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Databases & Storage:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.databases.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
              {profileData.skills.aiTools && profileData.skills.aiTools.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">AI & ML Tools:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.aiTools.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
              {profileData.skills.cloudServices && profileData.skills.cloudServices.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Cloud Services & Platforms:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.cloudServices.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
              {profileData.skills.integrations && profileData.skills.integrations.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Integrations & APIs:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.integrations.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
              {profileData.skills.dataStructures && profileData.skills.dataStructures.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Core Concepts:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.dataStructures.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
              {profileData.skills.versionControl && profileData.skills.versionControl.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Version Control & Tools:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.versionControl.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
              {profileData.skills.soft && profileData.skills.soft.length > 0 && (
                <div>
                  <p className="text-sm font-semibold text-gray-700 mb-2">Soft Skills:</p>
                  <div className="flex flex-wrap gap-2.5">
                    {profileData.skills.soft.map((skill, index) => (
                      <SkillBadge key={index} skill={skill} />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Certifications Section */}
          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Certifications</h3>
            <div className="space-y-3">
              {certifications.map((cert, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-4 hover:border-gray-300 hover:shadow-sm transition-all bg-white">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-gray-100 rounded flex items-center justify-center overflow-hidden relative">
                      <Image
                        src={cert.logo}
                        alt={`${cert.issuer} Logo`}
                        fill
                        className="object-contain p-1"
                        unoptimized
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-base font-semibold text-gray-900 mb-0.5">{cert.displayName || cert.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{cert.issuer}</p>
                      <div className="space-y-1">
                        <p className="text-xs text-gray-500">
                          Issued {cert.issued}
                          {cert.expires ? ` · Expires ${cert.expires}` : ''}
                        </p>
                        <p className="text-xs text-gray-500">Credential ID {cert.credentialId}</p>
                        {cert.skills && (
                          <p className="text-xs text-gray-500">Skills: {cert.skills}</p>
                        )}
                        {cert.link && (
                          <p className="text-xs">
                            <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Show credential</a>
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

