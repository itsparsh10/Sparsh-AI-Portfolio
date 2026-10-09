import { Metadata } from "next";
import { KobyAiPage } from "@/projects/koby-ai/koby-ai-page";

export const metadata: Metadata = {
  title: "Koby's AI — Cafe PDF Search & Grounded Q&A",
  description: "A Django PDF question-answering assistant for Koby's Cafe, powered by FAISS, sentence-transformers, Gemini 2.0 Flash, and optional Supabase retrieval.",
};

export default function Page() {
  return <KobyAiPage />;
}
