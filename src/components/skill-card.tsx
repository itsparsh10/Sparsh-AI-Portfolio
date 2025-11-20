"use client";

import { Code, Database, Cloud, Brain, Zap, Settings } from "lucide-react";
import { profileData } from "@/lib/profile";

interface SkillCardProps {
  skillName: string;
  className?: string;
}

const skillIcons: Record<string, any> = {
  "programming": Code,
  "database": Database,
  "cloud": Cloud,
  "ai": Brain,
  "framework": Zap,
  "default": Settings,
};

export default function SkillCard({ skillName, className = "" }: SkillCardProps) {
  // Find which category the skill belongs to
  let category = "Programming Languages";
  let icon = Code;
  
  if (profileData.skills.programming.includes(skillName)) {
    category = "Programming Languages";
    icon = Code;
  } else if (profileData.skills.frameworks.includes(skillName)) {
    category = "Frameworks & Libraries";
    icon = Zap;
  } else if (profileData.skills.databases.includes(skillName)) {
    category = "Databases & Storage";
    icon = Database;
  } else if (profileData.skills.aiTools.includes(skillName)) {
    category = "AI & ML Tools";
    icon = Brain;
  } else if (profileData.skills.cloudServices.includes(skillName)) {
    category = "Cloud Services";
    icon = Cloud;
  } else if (profileData.skills.integrations.includes(skillName)) {
    category = "Integrations & APIs";
    icon = Settings;
  }
  
  const Icon = icon;

  return (
    <div className={`group relative rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-200 p-6 ${className}`}>
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 p-3 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-100">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-2">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {skillName}
          </h3>
          <p className="text-sm text-gray-600 leading-relaxed">
            {skillName} is part of my technical expertise. I use this technology to build scalable, production-ready applications and solutions.
          </p>
        </div>
      </div>
    </div>
  );
}

