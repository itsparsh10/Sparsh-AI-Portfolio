"use client";

import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

interface CategoryPageProps {
  params: {
    category: string;
  };
}

export default function CategoryRedirectPage({ params }: CategoryPageProps) {
  const router = useRouter();

  useEffect(() => {
    const rawCategory = params.category || 'all';
    const categoryMap: Record<string, string> = {
      'ai-projects': 'ai-projects',
      'aiprojects': 'ai-projects',
      'ai': 'ai-projects',
      'full-stack': 'full-stack',
      'fullstack': 'full-stack',
      'systems': 'systems',
      'all': 'all'
    };

    const targetFilter = categoryMap[rawCategory.toLowerCase()] || rawCategory;
    router.replace(`/projects?filter=${encodeURIComponent(targetFilter)}`);
  }, [params.category, router]);

  return (
    <div className="min-h-screen bg-[#0a0d1a] flex items-center justify-center text-[#6b8eff] font-mono text-sm">
      Loading {params.category} projects...
    </div>
  );
}
