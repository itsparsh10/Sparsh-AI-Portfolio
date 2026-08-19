export interface Certification {
  name: string;
  displayName?: string;
  issuer: string;
  issued: string;
  expires: string | null;
  credentialId: string;
  skills: string;
  logo: string;
  link: string;
}

export const certifications: Certification[] = [
  {
    name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle",
    issued: "Feb 2026",
    expires: null,
    credentialId: "B8680F3A059610553A4A51B19AEBDD8188E32881DFE99B82DBC11461C214863B",
    skills: "Artificial Intelligence (AI), Cloud Infrastructure",
    logo: "/oracle.jpeg",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=B8680F3A059610553A4A51B19AEBDD8188E32881DFE99B82DBC11461C214863B"
  },
  {
    name: "Databricks - Generative AI Fundamentals",
    displayName: "Academy Accreditation - Generative AI Fundamentals",
    issuer: "Databricks",
    issued: "Feb 2025",
    expires: "Feb 2027",
    credentialId: "133241213",
    skills: "Artificial Intelligence (AI)",
    logo: "/databricks.png",
    link: "https://credentials.databricks.com/18358125-d2f2-4665-b35a-9f050a810ebc"
  },
  {
    name: "Goldman Sachs - Software Engineering",
    issuer: "Goldman Sachs",
    issued: "Sep 2024",
    expires: null,
    credentialId: "KfXsu5XxM5tQZuvcL",
    skills: "Software Engineering",
    logo: "/goldman.png",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_fBcYFKTefPaKfK5tp_1725289259561_completion_certificate.pdf"
  },
];

export const profileData = {
  name: "Sparsh Sharma",
  title: "Full-Stack Developer • AI Engineer • Software Engineer",
  shortIntro: "Passionate Full-Stack Developer and AI Engineer specializing in building scalable, enterprise-grade solutions and cutting-edge AI-driven products.",
  about: {
    who: "B.Tech Computer Science Engineering Student",
    specialize: "Full-Stack Development • Artificial Intelligence • Machine Learning",
    currentWork: "Software Developer Intern @ Code N Creative • Former Software Development Intern @ Let's Upgrade",
    communities: "GDG Mumbai, Swift Mumbai, MTW",
    outsideAcademics: "Actively contributing to open-source projects, engaging with tech communities, and building innovative, production-ready applications that solve real-world problems",
  },
  skills: {
    programming: ["C++", "Python", "JavaScript", "TypeScript", "Machine Learning", "Artificial Intelligence"],
    frameworks: ["ReactJS", "Next.js", "Node.js", "Express.js", "Django", "Django REST Framework"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "FAISS (Vector Database)"],
    aiTools: ["Google Gemini", "OpenAI Whisper", "MediaPipe", "RAG (Retrieval-Augmented Generation)", "Vector Search"],
    cloudServices: ["AWS RDS", "Firebase", "Vercel"],
    integrations: ["Stripe", "RESTful API", "GraphQL"],
    versionControl: ["Git", "GitHub"],
    dataStructures: ["CS Fundamentals", "Data Structures and Algorithms", "OOPS"],
    soft: ["Problem-Solving", "Team Collaboration", "Critical Thinking", "Time Management"],
  },
  experience: [
    {
      company: "CODE N CREATIVE",
      logo: "/CNC-removebg-preview.png",
      role: "Software Developer Intern",
      period: "April 2025 – November 2025",
      points: [
        "Built scalable AI architecture by creating a Vector AI Database with a full RAG pipeline for Koby's AI and developing the production-ready Markzy platform, improving retrieval speed and automation accuracy by 12%",
        "Designed and integrated high-volume API workflows, managing data flow from 100+ APIs and optimizing Brand Data services for quicker, more reliable responses, reducing data issues by 10%",
        "Developed VisionSpeak AI, a production-level Vision system using Google MediaPipe and ML models for real-time body posture, gesture, and eye movement analysis, enhancing product intelligence by 14%",
        "Collaborated with engineering teams to deploy stable backend and AI pipelines, improving overall system performance and reducing processing delays by 11%",
      ],
    },
    {
      company: "LetsUpgrade",
      logo: "/LU.png",
      role: "Software Development and Engineering Internship",
      period: "Dec 2023 - Jan 2024",
      location: "Mumbai, Maharashtra, India · Hybrid",
      points: [
        "Enhanced UI accessibility by 12%, leading to a 10% boost in user engagement among 500+ students",
        "Collaborated with cross-functional teams to ensure seamless project integration and timely delivery",
        "Optimized website design, which increased admissions by 10% through improved user experience",
        "Enhanced website performance, reducing bounce rates by 8% and boosting overall site efficiency",
      ],
    },
  ],
};

