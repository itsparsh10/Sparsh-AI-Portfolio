import { projects, findProject, getBestProjects } from "./projects";
import { profileData } from "./profile";

export type ResponseType =
  | "text"
  | "project-card"
  | "skill-card"
  | "experience-card"
  | "certification-card"
  | "about-me"
  | "projects"
  | "contact"
  | "skills"
  | "experience";

export interface QueryAnalysis {
  responseType: ResponseType;
  data?: any; // Project, skill, experience, etc.
  shouldShowCard: boolean;
  cardData?: {
    type: "project" | "skill" | "experience" | "certification";
    identifier: string; // title, skill name, company name, cert name
  };
}

export function analyzeQuery(query: string): QueryAnalysis {
  const lowerQuery = query.toLowerCase().trim();

  // Get all skills first for checking
  const allSkills = [
    ...profileData.skills.programming,
    ...profileData.skills.frameworks,
    ...profileData.skills.databases,
    ...profileData.skills.aiTools,
    ...profileData.skills.cloudServices,
    ...profileData.skills.integrations,
    ...profileData.skills.versionControl,
    ...profileData.skills.dataStructures,
  ];

  // ===== PRIORITY 1: Check for specific skill mentions FIRST (before "about me" or general keywords) =====
  for (const skill of allSkills) {
    const skillLower = skill.toLowerCase();
    // Check various patterns: "tell me about react", "about react", "react", "do you know react"
    if (lowerQuery.includes(` ${skillLower} `) ||
      lowerQuery.includes(` ${skillLower}.`) ||
      lowerQuery.includes(` ${skillLower},`) ||
      lowerQuery.includes(` ${skillLower}?`) ||
      lowerQuery.endsWith(` ${skillLower}`) ||
      lowerQuery.startsWith(`${skillLower} `) ||
      lowerQuery === skillLower ||
      lowerQuery.includes(`about ${skillLower}`) ||
      lowerQuery.includes(`tell me about ${skillLower}`) ||
      lowerQuery.includes(`what is ${skillLower}`) ||
      lowerQuery.includes(`explain ${skillLower}`) ||
      lowerQuery.includes(`do you know ${skillLower}`)) {
      return {
        responseType: "text",
        shouldShowCard: true,
        cardData: {
          type: "skill",
          identifier: skill
        }
      };
    }
  }

  // ===== PRIORITY 2: Check for specific company/experience mentions FIRST =====
  for (const exp of profileData.experience) {
    const companyLower = exp.company.toLowerCase();
    const roleLower = exp.role.toLowerCase();

    // More comprehensive matching for company names
    const companyVariations = [
      companyLower,
      companyLower.replace(/\s+/g, ""), // Remove spaces
      companyLower.replace(/\s+/g, " "), // Normalize spaces
      "code n creative",
      "code and creative",
      "code & creative",
      "cnc",
      "letsupgrade",
      "let's upgrade",
      "lets upgrade",
      "let'supgrade"
    ];

    // Check if company name, role, or variations are mentioned
    const isCompanyMentioned = companyVariations.some(variation =>
      lowerQuery.includes(variation)
    ) || lowerQuery.includes(roleLower);

    // Also check for "at [company]" or "experience at [company]" patterns
    const hasAtPattern = (lowerQuery.includes("at ") &&
      (lowerQuery.includes(companyLower) ||
        lowerQuery.includes("code n creative") ||
        lowerQuery.includes("code and creative") ||
        lowerQuery.includes("letsupgrade"))) ||
      (lowerQuery.includes("experience at") &&
        (lowerQuery.includes(companyLower) ||
          lowerQuery.includes("code n creative") ||
          lowerQuery.includes("code and creative") ||
          lowerQuery.includes("letsupgrade")));

    if (isCompanyMentioned || hasAtPattern) {
      return {
        responseType: "text",
        shouldShowCard: true,
        cardData: {
          type: "experience",
          identifier: exp.company
        }
      };
    }
  }

  // ===== PRIORITY 3: Check for specific project mentions FIRST =====
  for (const project of projects) {
    if (lowerQuery.includes(project.title.toLowerCase())) {
      return {
        responseType: "text",
        shouldShowCard: true,
        cardData: {
          type: "project",
          identifier: project.title
        }
      };
    }
  }

  // ===== PROJECT QUERIES =====
  const projectKeywords = [
    "best project", "favorite project", "amazing project", "cool project", "awesome project",
    "one project", "a project", "show project", "tell me about project", "describe project",
    "what project", "which project", "project you", "project have", "project done",
    "show me project", "tell me project", "explain project"
  ];

  if (projectKeywords.some(keyword => lowerQuery.includes(keyword))) {
    // If asking for "best" or similar, return the best project

    // If asking for "best" or similar, return the best project
    if (lowerQuery.includes("best") || lowerQuery.includes("favorite") ||
      lowerQuery.includes("amazing") || lowerQuery.includes("cool") ||
      lowerQuery.includes("one") || lowerQuery.includes("a project")) {
      const bestProjects = getBestProjects(1);
      if (bestProjects.length > 0) {
        return {
          responseType: "text",
          shouldShowCard: true,
          cardData: {
            type: "project",
            identifier: bestProjects[0].title
          }
        };
      }
    }

    // Multiple projects query
    if (lowerQuery.includes("all projects") || lowerQuery.includes("projects") ||
      lowerQuery.includes("some projects") || lowerQuery.includes("show projects")) {
      return {
        responseType: "projects",
        shouldShowCard: false
      };
    }
  }

  // ===== SKILL QUERIES (General) =====
  const skillKeywords = [
    "skill", "technology", "tech stack", "programming language", "framework",
    "what can you do", "what do you know", "expertise", "proficient"
  ];

  if (skillKeywords.some(keyword => lowerQuery.includes(keyword))) {
    // General skills query
    if (lowerQuery.includes("all skills") || lowerQuery.includes("your skills") ||
      lowerQuery.includes("what skills") ||
      (lowerQuery.includes("skills") && !lowerQuery.includes("about"))) {
      return {
        responseType: "skills",
        shouldShowCard: false
      };
    }

    // Single skill query without specific mention
    return {
      responseType: "skills",
      shouldShowCard: false
    };
  }

  // ===== EXPERIENCE QUERIES (General) =====
  const experienceKeywords = [
    "experience", "work experience", "work history", "employment", "jobs",
    "where do you work", "where have you worked", "company", "internship",
    "current job", "previous job", "work at", "what's your experience"
  ];

  if (experienceKeywords.some(keyword => lowerQuery.includes(keyword))) {
    // General experience query - show all experiences
    if (lowerQuery.includes("all experience") || lowerQuery.includes("all your experience") ||
      (lowerQuery.includes("your experience") && !lowerQuery.includes("at"))) {
      return {
        responseType: "experience",
        shouldShowCard: false
      };
    }

    // If asking about experience but no specific company, show template
    return {
      responseType: "experience",
      shouldShowCard: false
    };
  }

  // ===== CERTIFICATION QUERIES =====
  const certKeywords = [
    "certification", "certificate", "cert", "accreditation", "credential",
    "what certifications", "your certifications"
  ];

  if (certKeywords.some(keyword => lowerQuery.includes(keyword))) {
    // Check for specific certification mentions
    if (lowerQuery.includes("databricks") || lowerQuery.includes("generative ai")) {
      return {
        responseType: "text",
        shouldShowCard: true,
        cardData: {
          type: "certification",
          identifier: "Databricks - Generative AI Fundamentals"
        }
      };
    }

    if (lowerQuery.includes("goldman") || lowerQuery.includes("sachs") ||
      lowerQuery.includes("software engineering")) {
      return {
        responseType: "text",
        shouldShowCard: true,
        cardData: {
          type: "certification",
          identifier: "Goldman Sachs - Software Engineering"
        }
      };
    }

    // General certifications query
    return {
      responseType: "text",
      shouldShowCard: false // Will show in skills template
    };
  }

  // ===== ABOUT ME QUERIES =====
  // Only trigger if it's clearly about the person, not about a skill/technology/project
  const aboutMeKeywords = [
    "who are you", "tell me about yourself", "introduce yourself",
    "background", "where are you from"
  ];

  // Only show about-me if it's clearly about the person
  if (aboutMeKeywords.some(keyword => lowerQuery.includes(keyword)) &&
    (lowerQuery.includes("you") || lowerQuery.includes("yourself"))) {
    // Make sure it's not about a skill, project, or experience
    if (!lowerQuery.includes("project") &&
      !lowerQuery.includes("experience") &&
      !lowerQuery.includes("skill")) {
      return {
        responseType: "about-me",
        shouldShowCard: false
      };
    }
  }

  // Handle "what do you do" - this is about the person
  if (lowerQuery.includes("what do you do") &&
    !lowerQuery.includes("project") &&
    !lowerQuery.includes("experience")) {
    return {
      responseType: "about-me",
      shouldShowCard: false
    };
  }

  // ===== CONTACT QUERIES =====
  const contactKeywords = [
    "contact", "reach", "email", "linkedin", "github", "phone", "get in touch",
    "how to contact", "where to find", "social media"
  ];

  if (contactKeywords.some(keyword => lowerQuery.includes(keyword))) {
    return {
      responseType: "contact",
      shouldShowCard: false
    };
  }

  // ===== DEFAULT: TEXT RESPONSE =====
  return {
    responseType: "text",
    shouldShowCard: false
  };
}

