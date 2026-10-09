import type { Metadata } from "next";
import { SupportAgentPage } from "@/projects/ecommerce-support-agent/support-agent-page";

export const metadata: Metadata = {
  title: "AI-Powered Support Resolution Agent — Multi-Agent RAG System",
  description:
    "An intelligent multi-agent customer support platform that combines AI agents, Retrieval-Augmented Generation (RAG), and policy-aware reasoning to automatically analyze support tickets and generate structured, evidence-backed resolutions.",
  openGraph: {
    title: "AI-Powered Support Resolution Agent — Multi-Agent RAG System",
    description:
      "Transforming customer-support tickets into evidence-backed, policy-compliant resolutions using CrewAI, Gemini, FAISS, and FastAPI.",
    type: "website",
    images: ["/Support-Resolution-Agent.png"],
  },
};

export default function SupportAgentRoute() {
  return <SupportAgentPage />;
}
