"use client";

import Image from "next/image";
import { Github, ExternalLink } from "lucide-react";
import { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export default function ProjectCard({ project, className = "" }: ProjectCardProps) {
  return (
    <div className={`group relative rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-200 ${className}`}>
      {/* Project Image */}
      <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-gray-100">
        <div className={`absolute inset-0 ${project.bgColor}`}>
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-contain transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 420px"
              unoptimized
            />
          )}
        </div>
      </div>

      {/* Project Content */}
      <div className="p-4 sm:p-5 md:p-6">
        <div className="mb-2">
          <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
            {project.category}
          </span>
        </div>
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
            {project.title}
          </h3>
          <div className="flex items-center gap-2">
            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={`View ${project.title} on GitHub`}
              >
                <Github className="h-5 w-5" />
              </a>
            )}
            {project.liveLink && (
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900 transition-colors"
                aria-label={`View ${project.title} live site`}
              >
                <ExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
          {project.description}
        </p>
        {project.details && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <p className="text-sm text-gray-700 leading-relaxed">
              {project.details}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

