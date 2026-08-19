"use client";

import Hero from "@/components/hero";
import ChatMessages from "@/components/chat-messages";
import StickySearch from "@/components/sticky-search";
import { useChat } from "@/contexts/chat-context";
import BackgroundLines from "@/components/background-lines";

export default function Page() {
  const { isChatActive } = useChat();
  
  return (
    <div className="flex flex-col min-h-dvh bg-white relative overflow-x-hidden">
      <BackgroundLines className="opacity-30 z-0" idPrefix="page" variant="ai-mode" />
      <div className="relative z-10 flex flex-col min-h-dvh">
      <Hero />
      <div className="flex-1 flex flex-col bg-transparent">
        <ChatMessages />
        </div>
      </div>
      {/* AI Mode-only sticky search with quick actions */}
      <StickySearch />
    </div>
  );
}
