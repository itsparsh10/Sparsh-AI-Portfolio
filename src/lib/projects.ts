export interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  liveLink?: string;
  githubLink: string;
  details?: string;
}

export const projects: Project[] = [
  {
    category: "AI Marketing Platform",
    title: "Markzy",
    description: "Markzy your marketing buddy - An AI-powered marketing platform that helps businesses create high-converting content across all channels using 100+ AI tools, with powerful AI SEO and free content writing capabilities.",
    image: "/Markzy.png",
    bgColor: "bg-gradient-to-b from-blue-500 to-blue-700",
    liveLink: "https://markzy-ai.vercel.app/",
    githubLink: "https://github.com/itsparsh10/Markzy.ai",
    details: "State-of-the-Art AI Platform: Revolutionary Next.js-powered SaaS platform featuring 100+ specialized AI tools delivering real-time, high-converting content across social media, email, SEO, ads, and sales channels with enterprise-grade precision. Advanced AI Architecture: Built on cutting-edge large language models (GPT-4 & Claude) with intelligent content generation, delivering platform-tailored copy optimized for maximum conversion rates and engagement. Enterprise-Grade Infrastructure: Seamless Stripe payment integration, advanced team collaboration tools, comprehensive performance analytics, and enterprise security protocols for scalable, mission-critical marketing operations. Intelligent Content Production: Transforms marketing workflows into lightning-fast, infinitely scalable, AI-driven content production, boosting conversions by 40% and saving 10+ hours weekly through automated optimization."
  },
  {
    category: "AI Assistant",
    title: "Koby's AI",
    description: "An advanced RAG-powered PDF Question-Answering system that transforms documents into intelligent, searchable knowledge. Extracts and indexes PDFs using AI embeddings and FAISS, uses Google Gemini for precise answers, and combines text, voice, and image search with AI, machine learning, and vector search for fast, powerful document intelligence.",
    image: "/Koby's AI.png",
    bgColor: "bg-[linear-gradient(135deg,_#fdf6ee_0%,_#f7e8e7_35%,_#e9e3f1_65%,_#e5f0f7_100%)]",
    githubLink: "https://github.com/itsparsh10/Koby-s-Ai-Vector-DB",
    details: "Breakthrough RAG Architecture: State-of-the-art Retrieval-Augmented Generation system transforming PDFs into intelligent, searchable knowledge bases with deep semantic understanding, context-aware responses, and advanced neural language processing. High-Performance Vector Database: FAISS-powered distributed vector database with ultra-precise AI embeddings enabling sub-millisecond similarity search across massive document collections with enterprise-scale performance. Google Gemini AI Integration: Leverages cutting-edge Google Gemini for precise, intelligent answer generation with advanced natural language understanding, semantic analysis, and contextual reasoning capabilities. Multi-Modal Intelligence: Revolutionary text, voice, and image search capabilities providing intuitive, flexible document interaction for seamless knowledge discovery with advanced computer vision and speech recognition."
  },
  {
    category: "AI Analysis Platform",
    title: "VisionSpeak AI",
    description: "Advanced transcription, emotion detection, and presentation coaching platform that transforms videos into actionable insights using cutting-edge AI.",
    image: "/VisionSpeak-Ai.png",
    bgColor: "bg-white",
    githubLink: "https://github.com/itsparsh10/VisionSpeak-AI",
    details: "Breakthrough Multi-Language Transcription: OpenAI Whisper-powered state-of-the-art engine with 99+ language support, 95%+ accuracy, advanced speaker diarization, and word-level timestamp precision for enterprise-grade transcription. Advanced AI Analysis Pipeline: Google Gemini-enhanced sophisticated text processing with real-time emotion detection (85%+ accuracy), deep sentiment analysis, and intelligent content enhancement using neural networks. Comprehensive Presentation Coaching: Cutting-edge analytics combining MediaPipe pose detection, advanced gesture tracking, eye contact analysis, and voice dynamics for holistic, data-driven performance insights. Enterprise-Grade Django Architecture: Highly scalable backend processing MP4/AVI/MOV/MP3/WAV formats at ~0.1x video length with 30+ FPS emotion recognition, parallel processing, and distributed computing capabilities."
  },
  {
    category: "Dashboard & Analytics Platform",
    title: "NC Dashboard",
    description: "A comprehensive Django-based dashboard platform with PostgreSQL RDS integration, featuring real-time user analytics, interactive charts, and advanced user management capabilities.",
    image: "/NC.png",
    bgColor: "bg-white",
    liveLink: "https://analytics.nubinnoconnect.com/users/",
    githubLink: "https://github.com/itsparsh10/NC-Dashboard",
    details: "Real-Time PostgreSQL RDS Analytics: Live data visualization with dynamic donut charts, interactive bar charts, and comprehensive user metrics powered by AWS PostgreSQL RDS for instant, actionable insights. Dual Database Architecture: Revolutionary hybrid microservices architecture combining PostgreSQL RDS for primary data and MongoDB for authentication, delivering seamless horizontal scalability and high-performance operations. Advanced RESTful API: Comprehensive RESTful API endpoints with intelligent pagination, advanced filtering, rate limiting, and standardized JSON responses for users, companies, jobs, and analytics management. Enterprise User Management: Complete CRUD operations with advanced filtering, full-text search capabilities, bulk CSV import/export, and automated email system integration with SMTP configuration."
  },
  {
    category: "Communication Analytics Platform",
    title: "U-Speak",
    description: "An AI-powered communication analysis platform that transforms video and audio into actionable coaching. Uses Whisper transcription, MediaPipe pose detection, and Google Gemini to score body language, vocal tone, and content with built-in learning lessons and personalized recommendations.",
    image: "/Uspeek.png",
    bgColor: "bg-gradient-to-br from-blue-50 to-indigo-100",
    githubLink: "https://github.com/itsparsh10/U-Speak",
    details: "Breakthrough AI Communication Analysis: State-of-the-art platform transforming video and audio into actionable coaching insights using OpenAI Whisper transcription, MediaPipe pose detection, and Google Gemini for comprehensive, data-driven communication scoring. Advanced Multi-Modal AI Pipeline: Cutting-edge architecture combining OpenAI Whisper, MediaPipe computer vision, and Google Gemini to analyze body language, vocal tone, and content quality with machine learning precision. Intelligent Learning Platform: Built-in adaptive learning lessons with personalized AI recommendations powered by neural networks, tailored to individual communication patterns for measurable, quantifiable skill improvement. Enterprise-Grade Full-Stack Architecture: Next.js 15 + Django REST framework with granular analytics, comprehensive employee management, and advanced performance tracking designed for enterprise-scale teams and organizations."
  },
  {
    category: "Visitor Management System",
    title: "Mygate",
    description: "Mygate is a quick and secure visitor registration system that allows visitors to scan QR codes and register their visits instantly with a streamlined process.",
    image: "/Mygate.png",
    bgColor: "bg-gradient-to-b from-blue-600 to-blue-800",
    githubLink: "https://github.com/itsparsh10/My-Gate",
    details: "QR Code-Based Visitor Management: Revolutionary secure visitor registration system with instant QR code scanning, streamlined three-step check-in process, and advanced encryption protocols. Real-Time Access Control: Advanced system enabling instant visitor registration and access management for properties and buildings with seamless API integration and cloud-based architecture. Property Management Dashboard: Comprehensive platform providing property managers with efficient visitor tracking, advanced access control, and registration management tools with real-time notifications."
  },
  {
    category: "Transcription Service",
    title: "Voice & Video to Script",
    description: "A transcription service that converts video and audio files to text, supporting multiple formats (MP4, AVI, MOV, MP3, WAV) with a user-friendly workflow interface.",
    image: "/voice&videotoscript.png",
    bgColor: "bg-[linear-gradient(135deg,_#fefaf4_0%,_#f7e8e7_30%,_#e9e5f5_65%,_#e6f0f9_100%)]",
    githubLink: "https://github.com/itsparsh10/Voice-Video-to-Script",
    details: "OpenAI Whisper Transcription Engine: State-of-the-art multi-language transcription with 95%+ accuracy, automatic accent adaptation, intelligent audio quality optimization, and advanced noise reduction algorithms. Real-Time Processing Architecture: Near-instant transcription with smart optimization, delivering results immediately after upload without queueing or delays using distributed computing and parallel processing. Enterprise Django Backend: Highly scalable microservices architecture with robust security, real-time admin dashboard, comprehensive user management, and advanced role-based access control (RBAC). Intuitive Cross-Platform Design: Elegant drag-and-drop interface with smooth animations, responsive design, and progressive web app capabilities for seamless desktop, tablet, and mobile experience."
  },
  {
    category: "MERN Project",
    title: "Meesho",
    description: "Meesho is a full-stack MERN reseller platform that empowers individuals to start online businesses with social media integration.",
    image: "/meesho.png",
    bgColor: "bg-gradient-to-b from-pink-500 to-pink-700",
    githubLink: "https://github.com/itsparsh10/Meesho-Reseller-Platform",
    details: "Full-Stack MERN Architecture: Complete MongoDB, Express.js, React, Node.js application delivering highly scalable reseller platform with robust performance, microservices design, and cloud-native deployment. Comprehensive Business Management: Advanced reseller profiles, sophisticated customer transaction management, intelligent order processing, and dynamic product catalog with seamless API integration. Social Media Integration: Revolutionary social media connectivity enabling effortless selling, automated business growth, and intelligent marketing workflows with multi-platform API integration. Enterprise-Grade Features: Secure JWT authentication, payment gateway integration, comprehensive business analytics, and advanced reporting for complete e-commerce operations."
  },
  {
    category: "E-commerce Platform",
    title: "WinkIt",
    description: "WinkIt is a React-based e-commerce grocery delivery platform clone with optimized performance and user experience.",
    image: "/winkit.png",
    bgColor: "bg-gradient-to-b from-yellow-400 to-yellow-600",
    githubLink: "https://github.com/itsparsh10/BlinkIt-Clone-Final-Demo-Days",
    details: "High-Performance React Architecture: Optimized JavaScript processing with advanced React patterns, code splitting, lazy loading, and virtual DOM optimization delivering lightning-fast grocery delivery platform performance. Complete E-Commerce Ecosystem: Comprehensive product listings, intelligent shopping cart with state management, seamless checkout process, and advanced order management system with real-time updates. Cross-Platform Responsive Design: Elegant responsive architecture with mobile-first approach, optimized for fast loading, smooth animations, and exceptional user experience across mobile and desktop platforms."
  },
  {
    category: "Financial AI Platform",
    title: "FinEd",
    description: "FinEd is a comprehensive financial education platform powered by AI, making learning finance accessible through interactive content.",
    image: "/fined.png",
    bgColor: "bg-gradient-to-b from-purple-900 to-blue-900",
    githubLink: "https://github.com/itsparsh10/FinED",
    details: "AI-Powered Financial Education: Revolutionary platform combining advanced AI-powered learning modules with interactive content, adaptive algorithms, and personalized recommendations for accessible, engaging financial education. Comprehensive Learning Ecosystem: Advanced financial challenges, comprehensive educational resources, and sophisticated real-world simulations designed for measurable, data-driven skill development. Professional Development Focus: Intelligent platform with machine learning algorithms designed for young professionals to level up their financial future through personalized learning paths and progress tracking."
  },
];

// Helper function to find project by title (case-insensitive, partial match)
export function findProject(query: string): Project | null {
  const lowerQuery = query.toLowerCase().trim();
  
  // Exact match first
  let project = projects.find(p => p.title.toLowerCase() === lowerQuery);
  if (project) return project;
  
  // Partial match
  project = projects.find(p => p.title.toLowerCase().includes(lowerQuery));
  if (project) return project;
  
  // Category match
  project = projects.find(p => p.category.toLowerCase().includes(lowerQuery));
  if (project) return project;
  
  // Description keywords
  project = projects.find(p => 
    p.description.toLowerCase().includes(lowerQuery) ||
    p.details?.toLowerCase().includes(lowerQuery)
  );
  if (project) return project;
  
  return null;
}

// Get best/most impressive projects
export function getBestProjects(count: number = 1): Project[] {
  // Markzy, Koby's AI, and VisionSpeak AI are considered the best
  const bestProjectTitles = ["Markzy", "Koby's AI", "VisionSpeak AI"];
  const bestProjects = projects.filter(p => bestProjectTitles.includes(p.title));
  return bestProjects.slice(0, count);
}

