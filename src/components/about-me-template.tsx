"use client";

import Image from "next/image";
import { profileData } from "@/lib/profile";

export default function AboutMeTemplate() {
  // Combine all skills into one array for tags
  const allSkills = [
    ...profileData.skills.programming,
    ...profileData.skills.frameworks,
    ...(profileData.skills.databases || []),
    ...(profileData.skills.aiTools || []),
    ...(profileData.skills.cloudServices || []),
    ...(profileData.skills.integrations || []),
    ...(profileData.skills.versionControl || []),
    ...(profileData.skills.dataStructures || []),
    ...profileData.skills.soft,
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="prose prose-gray max-w-none">
        {/* Profile Header Section */}
        <div className="flex flex-col sm:flex-row gap-4 xs:gap-6 sm:gap-8 mb-6 xs:mb-8 pb-6 xs:pb-8 border-b border-gray-200">
          {/* Profile Picture */}
          <div className="flex-shrink-0 flex justify-center sm:justify-start">
            <div className="relative w-48 h-48 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-xl xs:rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200/50 bg-gradient-to-br from-gray-50 to-gray-100">
              <Image
                src="/Sparsh.jpeg"
                alt={profileData.name}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 256px, (max-width: 768px) 320px, 384px"
              />
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 min-w-0 space-y-3 xs:space-y-4">
            <div>
              <h1 className="text-2xl xs:text-3xl sm:text-4xl font-bold text-gray-900 mb-2 tracking-tight text-center sm:text-left">
                {profileData.name}
              </h1>
              {profileData.about.who && (
                <p className="text-sm xs:text-base text-gray-600 font-medium text-center sm:text-left">
                  {profileData.about.who}
                  {profileData.about.specialize && (
                    <span className="text-gray-400"> • {profileData.about.specialize}</span>
                  )}
                </p>
              )}
            </div>

            {/* Short Intro */}
            <p className="text-base xs:text-lg text-gray-700 leading-relaxed text-center sm:text-left">
              {profileData.shortIntro}
            </p>

            {/* Current Work */}
            {profileData.about.currentWork && (
              <p className="text-xs xs:text-sm text-gray-600 text-center sm:text-left">
                <span className="font-medium">Currently:</span> {profileData.about.currentWork}
              </p>
            )}
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          {/* About Section */}
          <div className="space-y-4">
            <div className="space-y-3">
              <h2 className="text-xl font-semibold text-gray-900 mb-3">About Me</h2>
              <p className="text-base text-gray-700 leading-relaxed">
                I&apos;m a passionate <strong className="text-gray-900">Full-Stack Developer</strong> and <strong className="text-gray-900">AI Engineer</strong> currently pursuing my B.Tech in Computer Science Engineering at ITM Skills University. With a strong foundation in software engineering, artificial intelligence, and machine learning, I specialize in building scalable, enterprise-grade web applications and cutting-edge AI-driven solutions.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                Currently serving as a <strong className="text-gray-900">Software Developer Intern</strong> at Code N Creative, where I develop production-grade web tools and work across full-stack modules. Previously, I interned at Let&apos;s Upgrade, where I enhanced UI accessibility by 12% and optimized website performance, resulting in a 10% increase in user engagement and admissions.
              </p>
              <p className="text-base text-gray-700 leading-relaxed">
                My expertise spans <strong className="text-gray-900">modern web technologies</strong> including React.js, Node.js, Express.js, and MongoDB, along with advanced AI/ML frameworks. I&apos;m actively involved in tech communities (GDG Mumbai, Swift Mumbai, MTW), contribute to open-source projects, and build innovative, production-ready applications that solve real-world problems.
              </p>
            </div>
          </div>

          {/* Education Section */}
          <div className="pt-4 border-t border-gray-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-base font-semibold text-gray-900">B.Tech in Computer Engineering</h4>
                <p className="text-sm font-medium text-gray-700">ITM Skills University | Aug 2023 – Aug 2027</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">Higher Secondary (HSC)</h4>
                <p className="text-sm font-medium text-gray-700">Pratibha Srijan Peeth, Pachore, Madhya Pradesh | Apr 2021 – Apr 2023</p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-gray-900">Secondary School (SSC)</h4>
                <p className="text-sm font-medium text-gray-700">Kendriya Vidyalaya, Bina, Madhya Pradesh | Apr 2011 – Apr 2020</p>
              </div>
            </div>
          </div>

          {/* Communities Section */}
          {profileData.about.communities && (
            <div className="pt-4 border-t border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Communities</h3>
              <p className="text-base text-gray-700">GDG Mumbai • Swift Mumbai • MTW</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
