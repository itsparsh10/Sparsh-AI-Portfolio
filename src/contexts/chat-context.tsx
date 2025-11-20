"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export interface Message {
  id: string;
  text: string;
  sender: "user" | "assistant";
  timestamp: Date;
  type?: "about-me" | "experience" | "projects" | "contact" | "skills" | "text" | "project-card" | "skill-card" | "experience-card" | "certification-card" | "resume-card";
  isStreaming?: boolean;
  streamedText?: string;
  cardData?: {
    type: "project" | "skill" | "experience" | "certification" | "resume";
    identifier: string;
  };
}

interface ChatContextType {
  messages: Message[];
  isChatActive: boolean;
  isTyping: boolean;
  typingSpeed: number; // Words per minute
  addMessage: (text: string, sender: "user" | "assistant", type?: "about-me" | "experience" | "projects" | "contact" | "skills" | "text" | "project-card" | "skill-card" | "experience-card" | "certification-card" | "resume-card", cardData?: { type: "project" | "skill" | "experience" | "certification" | "resume"; identifier: string }) => void;
  activateChat: () => void;
  setIsTyping: (typing: boolean) => void;
  setTypingSpeed: (speed: number) => void;
  startStreamingMessage: (sender: "user" | "assistant", type?: "about-me" | "experience" | "projects" | "contact" | "skills" | "text" | "project-card" | "skill-card" | "experience-card" | "certification-card" | "resume-card") => string;
  updateStreamingMessage: (messageId: string, text: string) => void;
  completeStreamingMessage: (messageId: string, finalText: string) => void;
}

const ChatContext = createContext<ChatContextType | undefined>(undefined);

export function ChatProvider({ children }: { children: ReactNode }) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isChatActive, setIsChatActive] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState<number>(150); // Default: 150 WPM (words per minute)

  const addMessage = (text: string, sender: "user" | "assistant", type: "about-me" | "experience" | "projects" | "contact" | "skills" | "text" | "project-card" | "skill-card" | "experience-card" | "certification-card" | "resume-card" = "text", cardData?: { type: "project" | "skill" | "experience" | "certification" | "resume"; identifier: string }) => {
    const newMessage: Message = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      text,
      sender,
      timestamp: new Date(),
      type,
      isStreaming: false,
      cardData,
    };
    // Keep all messages - don't remove previous ones for better flow
    setMessages((prev) => [...prev, newMessage]);
  };

  const startStreamingMessage = (sender: "user" | "assistant", type: "about-me" | "experience" | "projects" | "contact" | "skills" | "text" | "project-card" | "skill-card" | "experience-card" | "certification-card" | "resume-card" = "text"): string => {
    const messageId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
    const newMessage: Message = {
      id: messageId,
      text: "",
      sender,
      timestamp: new Date(),
      type,
      isStreaming: true,
      streamedText: "",
    };
    // Keep all messages - don't remove previous ones for better flow
    setMessages((prev) => [...prev, newMessage]);
    return messageId;
  };

  const updateStreamingMessage = (messageId: string, text: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? { ...msg, streamedText: text, text: text }
          : msg
      )
    );
  };

  const completeStreamingMessage = (messageId: string, finalText: string) => {
    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === messageId
          ? { ...msg, text: finalText, streamedText: finalText, isStreaming: false }
          : msg
      )
    );
  };

  const activateChat = () => {
    setIsChatActive(true);
  };

  return (
    <ChatContext.Provider
      value={{
        messages,
        isChatActive,
        isTyping,
        typingSpeed,
        addMessage,
        activateChat,
        setIsTyping,
        setTypingSpeed,
        startStreamingMessage,
        updateStreamingMessage,
        completeStreamingMessage,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}

export function useChat() {
  const context = useContext(ChatContext);
  if (context === undefined) {
    throw new Error("useChat must be used within a ChatProvider");
  }
  return context;
}

