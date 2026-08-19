import type { Metadata } from "next";
import { RigelPage } from "@/projects/rigel/rigel-page";

export const metadata: Metadata = {
  title: "RIGEL -- MK-I — The Intelligence Layer for Personal Computing",
  description:
    "A portable, private, context-aware local AI environment for personal computing. Local models, memory, RAG, and developer workflows — all offline-first.",
  openGraph: {
    title: "RIGEL -- MK-I — The Intelligence Layer for Personal Computing",
    description:
      "A portable, private, context-aware local AI environment for personal computing.",
    type: "website",
    images: ["/RIGEL-MK-I.png"],
  },
};

export default function RigelRoute() {
  return <RigelPage />;
}
