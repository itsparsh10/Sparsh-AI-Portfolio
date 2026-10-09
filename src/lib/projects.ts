export interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  liveLink?: string;
  githubLink: string;
  details?: string;
  slug?: string;
}

export const projects: Project[] = [
  {
    slug: "rigel",
    category: "Local-First AI Intelligence Platform",
    title: "RIGEL — MK-I",
    description: "RIGEL — The Intelligence Layer for Personal Computing. A portable, local-first AI workspace that combines persistent memory, local LLMs, document intelligence, and automatic context into one privacy-first system.",
    image: "/RIGEL-MK-I.png",
    bgColor: "bg-gradient-to-r from-gray-900 to-black",
    githubLink: "https://github.com/itsparsh10/RIGEL",
    details: "Portable AI Runtime: Runs the AI workspace directly from portable storage. Local Intelligence: GGUF models + llama.cpp provide local inference. Persistent Context: Memory and retrieval systems maintain context across sessions. Developer Workspace: Local API, VS Code integration and workspace tooling."
  },
  {
    slug: "ecommerce-support-agent",
    category: "Multi-Agent AI Customer Support Platform",
    title: "E-commerce Support Resolution Agent",
    description: "An intelligent multi-agent customer support platform that combines AI agents, Retrieval-Augmented Generation (RAG), and policy-aware reasoning to automatically analyze support tickets and generate structured, evidence-backed resolutions.",
    image: "/Support-Resolution-Agent.png",
    bgColor: "bg-gradient-to-br from-teal-500 to-emerald-700",
    githubLink: "https://github.com/itsparsh10/E-commerce-Support-Resolution-Agent",
    details: "CrewAI Multi-Agent Architecture: Engineered specialized autonomous agents (Triage, Policy Retrieval, Resolution Writer, Compliance) that collaborate to classify support tickets and automate customer query resolution. Evidence-Grounded RAG Pipeline: Built FAISS vector search with local Sentence Transformer embeddings over chunked internal business policies, eliminating AI hallucinations with verified citations. Automated AI Compliance & Escalation: Integrated Google Gemini structured Pydantic outputs with a real-time compliance engine that auto-rewrites non-compliant responses and escalates edge cases to human review. Production FastAPI & Quality Benchmarking: Deployed high-throughput `/v1/resolve` REST endpoints with a 20-scenario automated evaluation suite measuring citation coverage and resolution accuracy."
  },
  {
    slug: "koby-ai",
    category: "AI Assistant",
    title: "Koby's AI",
    description: "An advanced RAG-powered PDF Question-Answering system that transforms documents into intelligent, searchable knowledge. Extracts and indexes PDFs using AI embeddings and FAISS, uses Google Gemini for precise answers, and combines text, voice, and image search with AI, machine learning, and vector search for fast, powerful document intelligence.",
    image: "/Koby's AI.png",
    bgColor: "bg-[linear-gradient(135deg,_#fdf6ee_0%,_#f7e8e7_35%,_#e9e3f1_65%,_#e5f0f7_100%)]",
    githubLink: "https://github.com/itsparsh10/Koby-s-Ai-Vector-DB",
    details: "RAG-Powered PDF Intelligence: Engineered an end-to-end Retrieval-Augmented Generation pipeline transforming static PDF documents into interactive, context-aware knowledge bases. High-Speed FAISS Vector Engine: Developed a sub-millisecond similarity search infrastructure using custom neural embeddings and FAISS vector indexing for instant, accurate document query matching. Google Gemini LLM Integration: Integrated Google Gemini for structured natural language answer synthesis with precise semantic context, source attribution, and document reasoning. Multi-Modal Interaction & Search: Built multi-input capabilities combining text, voice speech recognition, and image search for seamless knowledge discovery and document interaction."
  },
  {
    category: "AI Marketing Platform",
    title: "Markzy",
    description: "Markzy your marketing buddy - An AI-powered marketing platform that helps businesses create high-converting content across all channels using 100+ AI tools, with powerful AI SEO and free content writing capabilities.",
    image: "/Markzy.png",
    bgColor: "bg-gradient-to-b from-blue-500 to-blue-700",
    liveLink: "https://markzy-ai.vercel.app/",
    githubLink: "https://github.com/itsparsh10/Markzy.ai",
  },
  {
    category: "Dashboard & Analytics Platform",
    title: "NC Dashboard",
    slug: "ncDashboard",
    description: "A comprehensive Django-based dashboard platform with PostgreSQL integration, featuring real-time user analytics, interactive charts, and advanced user management capabilities.",
    image: "/NC.png",
    bgColor: "bg-white",
    liveLink: "https://analytics.nubinnoconnect.com/users/",
    githubLink: "https://github.com/itsparsh10/NC-Dashboard",
  },
  {
    category: "AI Analysis Platform",
    title: "VisionSpeak AI",
    description: "An AI presentation coach that analyzes your recorded presentation for speech, emotion, body language, and delivery, then turns those insights—powered by Gemini for highly accurate analysis—into actionable feedback to help you present with greater clarity and confidence.",
    image: "/VisionSpeak-Ai.png",
    bgColor: "bg-white",
    githubLink: "https://github.com/itsparsh10/VisionSpeak-AI",
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
    category: "AI-Powered Face Recognition Attendance System",
    title: "AttendIQ",
    description: "AttendIQ is an intelligent, real-time attendance automation platform that replaces traditional roll calls with AI-powered facial recognition, live camera processing, and seamless cloud synchronization for faster and more reliable attendance management.",
    image: "/AttendIQ.png",
    bgColor: "bg-gradient-to-br from-indigo-500 to-purple-600",
    githubLink: "https://github.com/itsparsh10/AttendIQ",
    details: "Real-Time Face Recognition Engine: Engineered a live computer vision pipeline using OpenCV and Face Recognition to process browser camera feeds, generate unique facial encodings, and accurately identify enrolled students and staff in real time. Intelligent Attendance Automation: Built a fully automated recognition-to-attendance workflow that validates detected users, instantly records attendance, prevents duplicate daily entries, and captures unrecognized faces for administrative review. Hybrid Cloud & Local Architecture: Integrated Django with Supabase/PostgreSQL and SQLite to deliver centralized cloud synchronization while maintaining efficient local data access and reliable attendance operations. Secure Management Ecosystem: Developed role-based staff authentication, streamlined student enrollment, real-time attendance dashboards, and staff management workflows with protected administrative access. Production-Ready Infrastructure: Implemented API rate limiting, CSRF protection, Gunicorn, and Whitenoise to strengthen endpoint security and support efficient production deployment. End-to-End AI Workflow: Designed the complete pipeline from student enrollment and facial encoding to live frame analysis, identity matching, automated attendance marking, and database synchronization."
  },
  {
    category: "Logistics Network & DSU System",
    title: "Delivery Warehouse Connectivity System",
    description: "From complex warehouse connections to one intelligent, scalable network. A high-performance C++ connectivity engine using Disjoint Set Union to efficiently merge warehouse networks, identify regional zones, detect isolated facilities, and generate structured connectivity insights.",
    image: "/Warehouse-System.png",
    bgColor: "bg-gradient-to-br from-blue-700 to-blue-900",
    githubLink: "https://github.com/itsparsh10/itsparsh10-Delivery-Warehouse-Connectivity-System-DSA-III-Project-By-Sparsh-Sharma-37",
  },
  {
    category: "Full-Stack Cross-Platform Finance Application",
    title: "Munim Ji",
    description: "A full-stack personal finance application designed to simplify daily expense management through real-time tracking, intelligent filtering, and interactive spending analytics across mobile, web, and desktop platforms.",
    image: "/Munim-Ji.png",
    bgColor: "bg-gradient-to-br from-green-500 to-green-700",
    githubLink: "https://github.com/itsparsh10/Flutter_Project_Case-Study_4_Expense_Tracker",
    details: "Cross-Platform Flutter Experience: Built a responsive Material 3 application using Flutter and Dart, delivering a unified expense management experience across Android, iOS, Web, and Desktop environments. Full-Stack Expense Management: Engineered an end-to-end CRUD system with Node.js, Express.js, MongoDB, and Mongoose to securely create, retrieve, update, and delete financial records through RESTful APIs. Interactive Financial Analytics: Developed monthly spending summaries with category-wise expense breakdowns, interactive pie charts, percentage insights, and dynamic total calculations for clear financial visibility. Advanced Search & Filtering Engine: Implemented real-time expense search and multi-level filtering by month, category, date, notes, and amount with dynamically calculated totals for filtered records. Scalable Application Architecture: Designed a modular frontend and backend architecture with reusable Flutter widgets, dedicated API services, structured controllers, Mongoose models, and route-based business logic. User-Centric Expense Workflow: Created smart category mapping with 100+ keyword-based icons, pull-to-refresh interactions, validation, graceful server error handling, and streamlined add, edit, and delete workflows."
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
  const bestProjectTitles = ["RIGEL — MK-I", "E-commerce Support Resolution Agent", "Koby's AI", "Markzy"];
  const bestProjects = projects.filter(p => bestProjectTitles.includes(p.title));
  return bestProjects.slice(0, count);
}
