export const NC_GITHUB = "https://github.com/itsparsh10/NC-Dashboard";

export const ncNavLinks = [
  { id: "what-i-built", label: "Overview" },
  { id: "architecture", label: "Tech Stack" },
  { id: "system-architecture", label: "Architecture" },
  { id: "demonstrates", label: "Value" },
];

export const bentoFeatures = [
  {
    title: "Users",
    desc: "Manage profiles, roles, account status, and user records from a centralized workspace.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
  },
  {
    title: "Companies",
    desc: "Explore company records, attributes, relationships, and operational data.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    title: "Analytics",
    desc: "Transform external analytics data into actionable dashboard views.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-1"
  },
  {
    title: "Jobs",
    desc: "Manage job-related records, organizational structures, and operational information.",
    colSpan: "col-span-1 md:col-span-2 lg:col-span-2"
  }
];

export const platformFlow = ["DATA", "USERS", "COMPANIES", "JOBS", "ANALYTICS", "OPERATIONS", "DECISIONS"];

export const engineeringChallenges = [
  { 
    title: "01 — HYBRID PERSISTENCE", 
    desc: "The application separates authentication state from operational business data, using MongoDB and PostgreSQL for their respective responsibilities." 
  },
  { 
    title: "02 — CUSTOM AUTHENTICATION", 
    desc: "Authentication was implemented around MongoDB-backed user records and session state rather than relying entirely on Django's default user model." 
  },
  { 
    title: "03 — REMOTE DATA ACCESS", 
    desc: "PostgreSQL connectivity supports SSH tunneling and fallback connection strategies for development and remote environments." 
  },
  { 
    title: "04 — ANALYTICS INTEGRATION", 
    desc: "External GA4 metrics are transformed into dashboard-ready structures while caching reduces unnecessary repeated requests." 
  }
];

export const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript", "Tailwind CSS"]
  },
  {
    category: "Backend",
    items: ["Python", "Django 5.2.7", "Custom Middleware", "REST APIs"]
  },
  {
    category: "Data",
    items: ["PostgreSQL", "MongoDB", "SQLite", "MongoEngine"]
  },
  {
    category: "Integrations",
    items: ["Google Analytics 4", "SMTP", "SSH Tunneling", "python-dotenv"]
  }
];
