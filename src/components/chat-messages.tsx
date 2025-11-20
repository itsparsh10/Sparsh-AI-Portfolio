"use client";

import { useEffect, useRef } from "react";
import { useChat } from "@/contexts/chat-context";
import AboutMeTemplate from "@/components/about-me-template";
import ExperienceTemplate from "@/components/experience-template";
import ProjectsTemplate from "@/components/projects-template";
import ContactTemplate from "@/components/contact-template";
import SkillsTemplate from "@/components/skills-template";
import FormattedMessage from "@/components/formatted-message";
import ProjectCard from "@/components/project-card";
import SkillCard from "@/components/skill-card";
import ExperienceCard from "@/components/experience-card";
import CertificationCard from "@/components/certification-card";
import { findProject } from "@/lib/projects";

export default function ChatMessages() {
  const { messages, isChatActive, isTyping } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const lastStreamingMessageRef = useRef<string | null>(null);
  const messageRefs = useRef<Map<string, HTMLDivElement>>(new Map());

  // Scroll to bottom during streaming (follow content)
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Scroll to top of the last assistant message (where content starts)
  const scrollToMessageTop = (messageId: string) => {
    const messageElement = messageRefs.current.get(messageId);
    if (messageElement) {
      messageElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Check if there's a streaming message
  const streamingMessage = messages.find(msg => msg.isStreaming && msg.sender === "assistant");

  useEffect(() => {
    if (streamingMessage) {
      // During streaming: scroll to bottom to follow content (ChatGPT-like)
      lastStreamingMessageRef.current = streamingMessage.id;
      scrollToBottom();
    } else if (lastStreamingMessageRef.current && !isTyping) {
      // After streaming completes: scroll to top of the message (where content starts)
      setTimeout(() => {
        scrollToMessageTop(lastStreamingMessageRef.current!);
        lastStreamingMessageRef.current = null;
      }, 150);
    }
  }, [streamingMessage?.streamedText, streamingMessage, isTyping]);

  // Handle template messages - scroll to top when they appear
  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === "assistant" && !isTyping && !lastMessage.isStreaming) {
      const isTemplate = lastMessage.type === "about-me" ||
        lastMessage.type === "experience" ||
        lastMessage.type === "projects" ||
        lastMessage.type === "contact" ||
        lastMessage.type === "skills";
      if (isTemplate) {
        setTimeout(() => {
          scrollToMessageTop(lastMessage.id);
        }, 300);
      }
    }
  }, [messages, isTyping]);

  if (!isChatActive) {
    return null;
  }

  // Check if there's already a streaming message
  const hasStreamingMessage = messages.some(msg => msg.isStreaming);

  return (
    <div ref={containerRef} className="w-full max-w-4xl mx-auto px-6 py-8 pb-48 sm:pb-44 flex-1 overflow-y-auto min-h-0 bg-transparent">
      <div className="space-y-6">
        {messages.map((message) => (
          <div
            key={message.id}
            ref={(el) => {
              if (el && message.sender === "assistant") {
                messageRefs.current.set(message.id, el);
              } else if (!el) {
                messageRefs.current.delete(message.id);
              }
            }}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"
              }`}
          >
            {message.type === "about-me" ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AboutMeTemplate />
              </div>
            ) : message.type === "experience" ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ExperienceTemplate />
              </div>
            ) : message.type === "projects" ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ProjectsTemplate />
              </div>
            ) : message.type === "contact" ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ContactTemplate />
              </div>
            ) : message.type === "skills" ? (
              <div className="w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
                <SkillsTemplate />
              </div>
            ) : message.type === "project-card" && message.cardData ? (
              <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                {(() => {
                  const project = findProject(message.cardData.identifier);
                  return project ? (
                    <ProjectCard project={project} className="w-full" />
                  ) : (
                    <div className="text-gray-600">Project not found</div>
                  );
                })()}
              </div>
            ) : message.type === "skill-card" && message.cardData ? (
              <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <SkillCard skillName={message.cardData.identifier} className="w-full" />
              </div>
            ) : message.type === "experience-card" && message.cardData ? (
              <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <ExperienceCard companyName={message.cardData.identifier} className="w-full" />
              </div>
            ) : message.type === "certification-card" && message.cardData ? (
              <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <CertificationCard certName={message.cardData.identifier} className="w-full" />
              </div>
            ) : message.type === "resume-card" && message.cardData ? (
              <div className="w-full max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                <div className="bg-white rounded-xl border border-base-100 overflow-hidden shadow-sm">
                  <div className="p-4 border-b border-base-100 flex items-center justify-between bg-base-50/50">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center text-red-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" /><polyline points="14 2 14 8 20 8" /></svg>
                      </div>
                      <div>
                        <h3 className="font-medium text-base-900">Sparsh_Sharma Resume.pdf</h3>
                        <p className="text-xs text-base-900/60">PDF Document</p>
                      </div>
                    </div>
                    <a
                      href={message.cardData.identifier}
                      download="Sparsh_Sharma_Resume.pdf"
                      className="p-2 hover:bg-base-100 rounded-lg text-base-900/60 transition-colors"
                      title="Download Resume"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" x2="12" y1="15" y2="3" /></svg>
                    </a>
                  </div>
                  <div className="w-full h-[500px] bg-base-100/50">
                    <iframe
                      src={`${message.cardData.identifier}#toolbar=0`}
                      className="w-full h-full border-none"
                      title="Resume Preview"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div
                className={`max-w-[80%] sm:max-w-[70%] rounded-2xl px-5 py-3 ${message.sender === "user"
                  ? "bg-blue-500 text-white rounded-br-sm"
                  : "bg-gray-100 text-gray-900 rounded-bl-sm"
                  }`}
              >
                <FormattedMessage
                  text={message.isStreaming ? (message.streamedText || "") : message.text}
                  isStreaming={message.isStreaming}
                />
              </div>
            )}
          </div>
        ))}
        {/* Only show typing dots if there's no streaming message already */}
        {isTyping && !hasStreamingMessage && (
          <div className="flex justify-start">
            <div className="max-w-[80%] sm:max-w-[70%] rounded-2xl rounded-bl-sm bg-gray-100 text-gray-900 px-5 py-3">
              <div className="flex gap-1.5 items-center">
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                <div className="w-2 h-2 bg-gray-600 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

