"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Github, ExternalLink } from "lucide-react";
import { projects } from "@/lib/projects";

export default function ProjectsTemplate() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const handleResize = () => checkScroll();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 420;
      const gap = 24; // gap-6 = 1.5rem = 24px
      scrollContainerRef.current.scrollBy({
        left: -(cardWidth + gap),
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 420;
      const gap = 24;
      scrollContainerRef.current.scrollBy({
        left: cardWidth + gap,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="prose prose-gray max-w-none">
        {/* Header Section */}
        <div className="mb-8 pb-6 border-b border-gray-200">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 tracking-tight">
            My Projects
          </h1>
          <p className="text-base text-gray-600">
            A collection of my work, from hackathon winners to production applications
          </p>
        </div>

        {/* Introduction */}
        <div className="mb-8 space-y-4">
          <p className="text-lg text-gray-800 leading-relaxed">
            I&apos;ve got some cool projects under my belt! 🎉 Here are a few highlights:
          </p>
          <p className="text-base text-gray-700 leading-relaxed">
            Right now, I&apos;m super focused on building SaaS products that blend AI with user-friendly design. 
            Each project represents a unique challenge and learning experience.
          </p>
        </div>

        {/* Projects Horizontal Scroll */}
        <div className="relative -mx-6 px-6">
          <style dangerouslySetInnerHTML={{__html: `
            .projects-scroll-container::-webkit-scrollbar {
              height: 8px;
            }
            .projects-scroll-container::-webkit-scrollbar-track {
              background: #f1f5f9;
              border-radius: 4px;
            }
            .projects-scroll-container::-webkit-scrollbar-thumb {
              background: #cbd5e1;
              border-radius: 4px;
            }
            .projects-scroll-container::-webkit-scrollbar-thumb:hover {
              background: #94a3b8;
            }
          `}} />
          
          {/* Left Navigation Button */}
          <button
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:bg-gray-50 hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={scrollRight}
            disabled={!canScrollRight}
            className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white border border-gray-200 shadow-md hover:bg-gray-50 hover:shadow-lg disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 text-gray-700" />
          </button>

          <div 
            ref={scrollContainerRef}
            onScroll={checkScroll}
            className="projects-scroll-container overflow-x-auto overflow-y-hidden pb-4 scroll-smooth"
            style={{
              scrollbarWidth: 'thin',
              scrollbarColor: '#cbd5e1 #f1f5f9',
            }}
          >
            <div className="flex gap-4 sm:gap-5 md:gap-6" style={{ width: 'max-content' }}>
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative flex-shrink-0 rounded-xl border border-gray-200 bg-white overflow-hidden hover:border-gray-300 hover:shadow-lg transition-all duration-200 w-[280px] sm:w-[320px] md:w-[380px] lg:w-[420px]"
                >
                  {/* Project Image */}
                  <div className="relative h-56 sm:h-64 md:h-72 w-full overflow-hidden bg-gray-100">
                    <div className={`absolute inset-0 ${project.bgColor}`}>
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={project.title}
                          fill
                          className="object-contain transition-transform duration-300 group-hover:scale-105"
                          sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 380px, 420px"
                          unoptimized
                        />
                      )}
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-4 sm:p-5 md:p-6">
                    <div className="flex items-center justify-between mb-2">
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
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>Markzy - Your Marketing Buddy</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>State-of-the-Art AI Platform:</strong> Revolutionary Next.js-powered SaaS platform featuring 100+ specialized AI tools delivering real-time, high-converting content across social media, email, SEO, ads, and sales channels with enterprise-grade precision</li>
                <li><strong>Advanced AI Architecture:</strong> Built on cutting-edge large language models (GPT-4 & Claude) with intelligent content generation, delivering platform-tailored copy optimized for maximum conversion rates and engagement</li>
                <li><strong>Enterprise-Grade Infrastructure:</strong> Seamless Stripe payment integration, advanced team collaboration tools, comprehensive performance analytics, and enterprise security protocols for scalable, mission-critical marketing operations</li>
                <li><strong>Intelligent Content Production:</strong> Transforms marketing workflows into lightning-fast, infinitely scalable, AI-driven content production, boosting conversions by 40% and saving 10+ hours weekly through automated optimization</li>
                <li>Live platform available at <a href="https://www.markzy.ai/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">markzy.ai</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>Koby&apos;s AI</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>Breakthrough RAG Architecture:</strong> State-of-the-art Retrieval-Augmented Generation system transforming PDFs into intelligent, searchable knowledge bases with deep semantic understanding, context-aware responses, and advanced neural language processing</li>
                <li><strong>High-Performance Vector Database:</strong> FAISS-powered distributed vector database with ultra-precise AI embeddings enabling sub-millisecond similarity search across massive document collections with enterprise-scale performance</li>
                <li><strong>Google Gemini AI Integration:</strong> Leverages cutting-edge Google Gemini for precise, intelligent answer generation with advanced natural language understanding, semantic analysis, and contextual reasoning capabilities</li>
                <li><strong>Multi-Modal Intelligence:</strong> Revolutionary text, voice, and image search capabilities providing intuitive, flexible document interaction for seamless knowledge discovery with advanced computer vision and speech recognition</li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/Koby-s-Ai-Vector-DB" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Koby-s-Ai-Vector-DB</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>VisionSpeak AI</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>Breakthrough Multi-Language Transcription:</strong> OpenAI Whisper-powered state-of-the-art engine with 99+ language support, 95%+ accuracy, advanced speaker diarization, and word-level timestamp precision for enterprise-grade transcription</li>
                <li><strong>Advanced AI Analysis Pipeline:</strong> Google Gemini-enhanced sophisticated text processing with real-time emotion detection (85%+ accuracy), deep sentiment analysis, and intelligent content enhancement using neural networks</li>
                <li><strong>Comprehensive Presentation Coaching:</strong> Cutting-edge analytics combining MediaPipe pose detection, advanced gesture tracking, eye contact analysis, and voice dynamics for holistic, data-driven performance insights</li>
                <li><strong>Enterprise-Grade Django Architecture:</strong> Highly scalable backend processing MP4/AVI/MOV/MP3/WAV formats at ~0.1x video length with 30+ FPS emotion recognition, parallel processing, and distributed computing capabilities</li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/VisionSpeak-AI" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">VisionSpeak-AI</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>NC Dashboard</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>Real-Time PostgreSQL RDS Analytics:</strong> Live data visualization with dynamic donut charts, interactive bar charts, and comprehensive user metrics powered by AWS PostgreSQL RDS for instant, actionable insights</li>
                <li><strong>Dual Database Architecture:</strong> Revolutionary hybrid microservices architecture combining PostgreSQL RDS for primary data and MongoDB for authentication, delivering seamless horizontal scalability and high-performance operations</li>
                <li><strong>Advanced RESTful API:</strong> Comprehensive RESTful API endpoints with intelligent pagination, advanced filtering, rate limiting, and standardized JSON responses for users, companies, jobs, and analytics management</li>
                <li><strong>Enterprise User Management:</strong> Complete CRUD operations with advanced filtering, full-text search capabilities, bulk CSV import/export, and automated email system integration with SMTP configuration</li>
                <li>Live platform available at <a href="https://analytics.nubinnoconnect.com/users/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">analytics.nubinnoconnect.com</a></li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/NC-Dashboard" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">NC-Dashboard</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>U-Speak</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>Breakthrough AI Communication Analysis:</strong> State-of-the-art platform transforming video and audio into actionable coaching insights using OpenAI Whisper transcription, MediaPipe pose detection, and Google Gemini for comprehensive, data-driven communication scoring</li>
                <li><strong>Advanced Multi-Modal AI Pipeline:</strong> Cutting-edge architecture combining OpenAI Whisper, MediaPipe computer vision, and Google Gemini to analyze body language, vocal tone, and content quality with machine learning precision</li>
                <li><strong>Intelligent Learning Platform:</strong> Built-in adaptive learning lessons with personalized AI recommendations powered by neural networks, tailored to individual communication patterns for measurable, quantifiable skill improvement</li>
                <li><strong>Enterprise-Grade Full-Stack Architecture:</strong> Next.js 15 + Django REST framework with granular analytics, comprehensive employee management, and advanced performance tracking designed for enterprise-scale teams and organizations</li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/U-Speak" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">U-Speak</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>Mygate</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>QR Code-Based Visitor Management:</strong> Revolutionary secure visitor registration system with instant QR code scanning, streamlined three-step check-in process, and advanced encryption protocols</li>
                <li><strong>Real-Time Access Control:</strong> Advanced system enabling instant visitor registration and access management for properties and buildings with seamless API integration and cloud-based architecture</li>
                <li><strong>Property Management Dashboard:</strong> Comprehensive platform providing property managers with efficient visitor tracking, advanced access control, and registration management tools with real-time notifications</li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/My-Gate" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">My-Gate</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>Voice & Video to Script</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>OpenAI Whisper Transcription Engine:</strong> State-of-the-art multi-language transcription with 95%+ accuracy, automatic accent adaptation, intelligent audio quality optimization, and advanced noise reduction algorithms</li>
                <li><strong>Real-Time Processing Architecture:</strong> Near-instant transcription with smart optimization, delivering results immediately after upload without queueing or delays using distributed computing and parallel processing</li>
                <li><strong>Enterprise Django Backend:</strong> Highly scalable microservices architecture with robust security, real-time admin dashboard, comprehensive user management, and advanced role-based access control (RBAC)</li>
                <li><strong>Intuitive Cross-Platform Design:</strong> Elegant drag-and-drop interface with smooth animations, responsive design, and progressive web app capabilities for seamless desktop, tablet, and mobile experience</li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/Voice-Video-to-Script" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Voice-Video-to-Script</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>Meesho</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>Full-Stack MERN Architecture:</strong> Complete MongoDB, Express.js, React, Node.js application delivering highly scalable reseller platform with robust performance, microservices design, and cloud-native deployment</li>
                <li><strong>Comprehensive Business Management:</strong> Advanced reseller profiles, sophisticated customer transaction management, intelligent order processing, and dynamic product catalog with seamless API integration</li>
                <li><strong>Social Media Integration:</strong> Revolutionary social media connectivity enabling effortless selling, automated business growth, and intelligent marketing workflows with multi-platform API integration</li>
                <li><strong>Enterprise-Grade Features:</strong> Secure JWT authentication, payment gateway integration, comprehensive business analytics, and advanced reporting for complete e-commerce operations</li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/Meesho-Reseller-Platform" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Meesho-Reseller-Platform</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>WinkIt</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>High-Performance React Architecture:</strong> Optimized JavaScript processing with advanced React patterns, code splitting, lazy loading, and virtual DOM optimization delivering lightning-fast grocery delivery platform performance</li>
                <li><strong>Complete E-Commerce Ecosystem:</strong> Comprehensive product listings, intelligent shopping cart with state management, seamless checkout process, and advanced order management system with real-time updates</li>
                <li><strong>Cross-Platform Responsive Design:</strong> Elegant responsive architecture with mobile-first approach, optimized for fast loading, smooth animations, and exceptional user experience across mobile and desktop platforms</li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/BlinkIt-Clone-Final-Demo-Days" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">BlinkIt-Clone-Final-Demo-Days</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3"><strong>FinEd</strong></h3>
              <ul className="text-base text-gray-700 leading-relaxed space-y-2 list-disc list-inside ml-4">
                <li><strong>AI-Powered Financial Education:</strong> Revolutionary platform combining advanced AI-powered learning modules with interactive content, adaptive algorithms, and personalized recommendations for accessible, engaging financial education</li>
                <li><strong>Comprehensive Learning Ecosystem:</strong> Advanced financial challenges, comprehensive educational resources, and sophisticated real-world simulations designed for measurable, data-driven skill development</li>
                <li><strong>Professional Development Focus:</strong> Intelligent platform with machine learning algorithms designed for young professionals to level up their financial future through personalized learning paths and progress tracking</li>
                <li>GitHub repository: <a href="https://github.com/itsparsh10/FinED" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">FinED</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
