"use client";

import { useEffect, useState, useRef } from "react";
import { Search, ArrowRight, Mic, Briefcase, User, Code, Award, FolderKanban, Mail, Square, MoreVertical, FileText } from "lucide-react";
import { useChat } from "@/contexts/chat-context";

// Type definitions for Speech Recognition API
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
}

interface SpeechRecognitionEvent {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent {
  error: string;
  message: string;
}

declare global {
  interface Window {
    SpeechRecognition: {
      new(): SpeechRecognition;
    };
    webkitSpeechRecognition: {
      new(): SpeechRecognition;
    };
  }
}

export default function StickySearch() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const [isListening, setIsListening] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const finalTranscriptRef = useRef<string>("");
  const shouldStopRef = useRef<boolean>(false);
  const currentMessageIdRef = useRef<string | null>(null);
  const { messages, addMessage, activateChat, isChatActive, isTyping, setIsTyping, typingSpeed, setTypingSpeed, startStreamingMessage, updateStreamingMessage, completeStreamingMessage } = useChat();

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    // Initialize Speech Recognition
    if (typeof window !== "undefined") {
      const SpeechRecognitionConstructor =
        window.SpeechRecognition ||
        window.webkitSpeechRecognition;

      if (SpeechRecognitionConstructor) {
        const recognition = new SpeechRecognitionConstructor();
        recognition.continuous = true;
        recognition.interimResults = true;
        recognition.lang = "en-US";

        recognition.onresult = (event: SpeechRecognitionEvent) => {
          let interimTranscript = "";
          let finalTranscript = "";

          for (let i = event.resultIndex; i < event.results.length; i++) {
            const transcript = event.results[i][0].transcript;
            if (event.results[i].isFinal) {
              finalTranscript += transcript + " ";
            } else {
              interimTranscript += transcript;
            }
          }

          // Update final transcript
          if (finalTranscript) {
            finalTranscriptRef.current += finalTranscript;
          }

          // Combine final transcript with interim results for real-time display
          setQuery(finalTranscriptRef.current + interimTranscript);
        };

        recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
          console.error("Speech recognition error:", event.error);
          setIsListening(false);
        };

        recognition.onend = () => {
          setIsListening(false);
        };

        recognitionRef.current = recognition;
      }
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
    };
  }, []);

  const toggleListening = () => {
    if (!recognitionRef.current) {
      alert("Speech recognition is not supported in your browser.");
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
      setIsListening(false);
    } else {
      // Reset transcript when starting new session
      finalTranscriptRef.current = query;
      recognitionRef.current.start();
      setIsListening(true);
    }
  };

  // Stop streaming function
  const stopStreaming = () => {
    shouldStopRef.current = true;
    if (currentMessageIdRef.current) {
      // Complete the message with whatever text we have so far
      const currentMessage = messages.find(msg => msg.id === currentMessageIdRef.current);
      if (currentMessage) {
        completeStreamingMessage(currentMessageIdRef.current, currentMessage.streamedText || currentMessage.text);
      }
      currentMessageIdRef.current = null;
    }
    setIsTyping(false);
  };

  // Stream text word by word (ChatGPT-like effect) using typing speed
  const streamText = async (messageId: string, fullText: string, wordsPerChunk: number = 1) => {
    shouldStopRef.current = false;
    currentMessageIdRef.current = messageId;
    setIsTyping(true);
    try {
      const words = fullText.split(/(\s+)/); // Split by spaces but keep them
      let currentText = "";

      // Calculate delay based on typing speed (WPM to milliseconds per word)
      // Average word length is 5 characters, so WPM = (chars/5) / (minutes) = chars / (5 * minutes)
      // For 150 WPM: 150 words/min = 150/60 words/sec = 2.5 words/sec = 400ms per word
      const baseDelayPerWord = (60 / typingSpeed) * 1000; // Convert WPM to ms per word
      const minDelay = baseDelayPerWord * 0.6; // 60% of base for faster words
      const maxDelay = baseDelayPerWord * 1.4; // 140% of base for slower words

      for (let i = 0; i < words.length; i += wordsPerChunk) {
        // Check if we should stop
        if (shouldStopRef.current) {
          break;
        }

        const chunk = words.slice(i, i + wordsPerChunk).join("");
        currentText += chunk;
        updateStreamingMessage(messageId, currentText);

        // Variable delay: faster for spaces, slower for words (ChatGPT-like timing)
        // Use typing speed for consistent experience
        const delay = chunk.trim()
          ? minDelay + Math.random() * (maxDelay - minDelay)
          : 10; // Very fast for spaces
        await new Promise((resolve) => setTimeout(resolve, delay));
      }

      // Only complete if we didn't stop
      if (!shouldStopRef.current) {
        completeStreamingMessage(messageId, fullText);
      } else {
        // Complete with current text if stopped
        completeStreamingMessage(messageId, currentText);
      }
    } catch (error) {
      console.error("Error streaming text:", error);
      const currentMessage = messages.find(msg => msg.id === messageId);
      completeStreamingMessage(messageId, currentMessage?.streamedText || currentMessage?.text || fullText);
    } finally {
      // Always reset typing state after completion or error
      setIsTyping(false);
      currentMessageIdRef.current = null;
      shouldStopRef.current = false;
    }
  };

  // AI response function using Google Gemini API
  const generateResponse = async (userMessage: string): Promise<{
    text: string;
    responseType?: string;
    shouldShowCard?: boolean;
    cardData?: { type: string; identifier: string };
  }> => {
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: userMessage }),
      });

      if (!response.ok) {
        throw new Error("Failed to get response from API");
      }

      const data = await response.json();
      return {
        text: data.response || "I apologize, but I couldn't generate a response. Please try again.",
        responseType: data.responseType,
        shouldShowCard: data.shouldShowCard,
        cardData: data.cardData
      };
    } catch (error) {
      console.error("Error generating response:", error);
      return {
        text: "I'm sorry, I encountered an error while processing your request. Please try again in a moment."
      };
    }
  };

  const handleQuickAction = async (action: string, actionType?: "experience" | "about-me" | "projects" | "contact" | "skills" | "resume") => {
    // Prevent multiple clicks while typing
    if (isTyping) return;

    // Activate chat if not already active
    if (!isChatActive) {
      activateChat();
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    }

    // Always add user message for consistent flow
    addMessage(action, "user");

    // Small delay before starting response
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Handle special template types with streaming intro
    if (actionType === "experience") {
      const messageId = startStreamingMessage("assistant", "text");
      const introText = "Here's my professional experience and work history:";
      await streamText(messageId, introText);
      // After streaming completes, add the template as a separate message
      setTimeout(() => {
        addMessage("", "assistant", "experience");
      }, 300);
      return;
    }

    if (actionType === "about-me") {
      const messageId = startStreamingMessage("assistant", "text");
      const introText = "Let me tell you about myself:";
      await streamText(messageId, introText);
      // After streaming completes, add the template as a separate message
      setTimeout(() => {
        addMessage("", "assistant", "about-me");
      }, 300);
      return;
    }

    if (actionType === "projects") {
      const messageId = startStreamingMessage("assistant", "text");
      const introText = "Here are some of my projects:";
      await streamText(messageId, introText);
      // After streaming completes, add the template as a separate message
      setTimeout(() => {
        addMessage("", "assistant", "projects");
      }, 300);
      return;
    }

    if (actionType === "contact") {
      const messageId = startStreamingMessage("assistant", "text");
      const introText = "Here's how you can reach me:";
      await streamText(messageId, introText);
      // After streaming completes, add the template as a separate message
      setTimeout(() => {
        addMessage("", "assistant", "contact");
      }, 300);
      return;
    }

    if (actionType === "skills") {
      const messageId = startStreamingMessage("assistant", "text");
      const introText = "Here are my skills and certifications:";
      await streamText(messageId, introText);
      // After streaming completes, add the template as a separate message
      setTimeout(() => {
        addMessage("", "assistant", "skills");
      }, 300);
      return;
    }

    if (actionType === "resume") {
      const messageId = startStreamingMessage("assistant", "text");
      const introText = "Here is my resume:";
      await streamText(messageId, introText);
      // After streaming completes, add the template as a separate message
      setTimeout(() => {
        addMessage("", "assistant", "resume-card" as any, { type: "resume", identifier: "/Sparsh_Sharma Resume.pdf" } as any);
      }, 300);
      return;
    }

    // Generate streaming response for other actions
    try {
      setIsTyping(true);
      const response = await generateResponse(action.toLowerCase());

      // Determine message type based on response
      let messageType: "text" | "project-card" | "skill-card" | "experience-card" | "certification-card" | "about-me" | "projects" | "contact" | "skills" | "experience" = "text";

      if (response.responseType && ["about-me", "projects", "contact", "skills", "experience"].includes(response.responseType)) {
        messageType = response.responseType as any;
      } else if (response.shouldShowCard && response.cardData) {
        messageType = `${response.cardData.type}-card` as any;
      }

      const messageId = startStreamingMessage("assistant", messageType);
      await streamText(messageId, response.text);

      // If card should be shown, add it after streaming completes
      if (response.shouldShowCard && response.cardData) {
        setTimeout(() => {
          addMessage("", "assistant", messageType as any, response.cardData as any);
        }, 500);
      } else if (response.responseType && ["about-me", "projects", "contact", "skills", "experience"].includes(response.responseType)) {
        // Show template after streaming
        setTimeout(() => {
          addMessage("", "assistant", messageType as any);
        }, 300);
      }
    } catch (error) {
      const errorMessage = "Sorry, I encountered an error. Please try again.";
      const messageId = startStreamingMessage("assistant", "text");
      await streamText(messageId, errorMessage);
    }
  };

  const handleSendMessage = async () => {
    if (!query.trim() || isTyping) return;

    // Activate chat if not already active
    if (!isChatActive) {
      activateChat();
      // Scroll to top smoothly after a small delay to allow animation to start
      setTimeout(() => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }, 100);
    }

    // Add user message
    addMessage(query.trim(), "user");
    const userMessage = query.trim().toLowerCase();
    setQuery("");
    finalTranscriptRef.current = "";

    // Small delay before starting response
    await new Promise((resolve) => setTimeout(resolve, 300));

    // Generate streaming AI response
    try {
      setIsTyping(true);
      const response = await generateResponse(userMessage);

      // Determine message type based on response
      let messageType: "text" | "project-card" | "skill-card" | "experience-card" | "certification-card" | "about-me" | "projects" | "contact" | "skills" | "experience" = "text";

      if (response.responseType && ["about-me", "projects", "contact", "skills", "experience"].includes(response.responseType)) {
        messageType = response.responseType as any;
      } else if (response.shouldShowCard && response.cardData) {
        messageType = `${response.cardData.type}-card` as any;
      }

      const messageId = startStreamingMessage("assistant", messageType);
      await streamText(messageId, response.text);

      // If card should be shown, add it after streaming completes
      if (response.shouldShowCard && response.cardData) {
        setTimeout(() => {
          addMessage("", "assistant", messageType as any, response.cardData as any);
        }, 500);
      } else if (response.responseType && ["about-me", "projects", "contact", "skills", "experience"].includes(response.responseType)) {
        // Show template after streaming
        setTimeout(() => {
          addMessage("", "assistant", messageType as any);
        }, 300);
      }
    } catch (error) {
      const errorMessage = "Sorry, I encountered an error. Please try again.";
      const messageId = startStreamingMessage("assistant", "text");
      await streamText(messageId, errorMessage);
    }
  };

  const quickActions = [
    { label: "Me", icon: User, action: "about me", type: "about-me" as const, iconColor: "text-teal-500" },
    { label: "Projects", icon: FolderKanban, action: "projects", type: "projects" as const, iconColor: "text-green-500" },
    { label: "Skills", icon: Code, action: "skills", type: "skills" as const, iconColor: "text-purple-500" },
    { label: "Experience", icon: Briefcase, action: "experience", type: "experience" as const, iconColor: "text-pink-500" },
    { label: "Contact", icon: Mail, action: "contact", type: "contact" as const, iconColor: "text-amber-600" },
    { label: "Resume", icon: FileText, action: "resume", type: "resume" as const, iconColor: "text-blue-600" },
  ];

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-2 sm:bottom-4 z-50 flex flex-col items-center gap-2 sm:gap-3 px-2 sm:px-4">
      {/* Quick Action Buttons */}
      <div className="pointer-events-auto w-full max-w-[859px] flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 md:gap-3">
        {quickActions.map(({ label, icon: Icon, action, type, iconColor }) => (
          <button
            key={label}
            onClick={(e) => {
              e.preventDefault();
              if (!isTyping) {
                handleQuickAction(action, type);
              }
            }}
            disabled={isTyping}
            className={`h-auto min-w-[70px] xs:min-w-[80px] sm:min-w-[90px] md:min-w-[100px] flex-shrink-0 rounded-lg sm:rounded-xl border px-2 xs:px-2.5 sm:px-3 md:px-4 py-1.5 xs:py-2 sm:py-2.5 md:py-3 shadow-none backdrop-blur-sm transition-all duration-200 flex items-center justify-center gap-1 xs:gap-1.5 sm:gap-2 md:gap-3 ${isTyping
              ? "bg-gray-100/50 border-gray-200 cursor-not-allowed opacity-50 pointer-events-none"
              : "bg-white/80 border-gray-200 hover:bg-gray-100 active:scale-95"
              }`}
            aria-label={label}
          >
            <Icon size={14} className={`xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px] ${isTyping ? "text-gray-400" : iconColor}`} />
            <span className={`text-xs xs:text-xs sm:text-sm font-medium whitespace-nowrap ${isTyping ? "text-gray-400" : "text-gray-700"
              }`}>{label}</span>
          </button>
        ))}
      </div>

      {/* Search Input */}
      <div className="pointer-events-auto w-full max-w-[859px] rounded-2xl sm:rounded-full border border-base-100 bg-white/90 backdrop-blur-xl shadow-lg">
        <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-5 px-3 xs:px-4 sm:px-5 md:px-7 py-3 xs:py-3.5 sm:py-4 md:py-5">
          <Search size={16} className="xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px] text-base-900/60 flex-shrink-0" />
          <input
            name="q"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              // Update final transcript ref when user manually types
              if (!isListening) {
                finalTranscriptRef.current = e.target.value;
              }
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !isTyping) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
            placeholder={isChatActive ? "Ask me anything" : "Search projects, skills, posts…"}
            className="flex-1 bg-transparent outline-none placeholder:text-base-900/40 text-sm xs:text-base sm:text-lg min-w-0"
            disabled={isTyping}
          />
          <div className="flex items-center gap-1 flex-shrink-0">
            <button
              onClick={(e) => {
                e.preventDefault();
                if (!isTyping) {
                  toggleListening();
                }
              }}
              disabled={isTyping}
              className={`w-8 h-8 xs:w-9 xs:h-9 rounded-full flex items-center justify-center transition-colors ${isTyping
                ? "bg-transparent text-base-900/30 cursor-not-allowed"
                : isListening
                  ? "bg-red-500 text-white hover:bg-red-600 animate-pulse"
                  : "bg-transparent text-base-900/60 hover:bg-base-100"
                }`}
              aria-label={isListening ? "Stop listening" : "Start voice search"}
            >
              <Mic size={14} className="xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />
            </button>
            {isTyping ? (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  stopStreaming();
                }}
                className="w-8 h-8 xs:w-9 xs:h-9 rounded-full flex items-center justify-center transition-colors bg-gray-900 text-white hover:bg-gray-800"
                aria-label="Stop generation"
              >
                <Square size={12} className="xs:w-3 xs:h-3 sm:w-3.5 sm:h-3.5" fill="currentColor" />
              </button>
            ) : (
              <button
                onClick={(e) => {
                  e.preventDefault();
                  if (!isTyping) {
                    handleSendMessage();
                  }
                }}
                disabled={!query.trim()}
                className={`w-8 h-8 xs:w-9 xs:h-9 rounded-full flex items-center justify-center transition-colors ${!query.trim()
                  ? "bg-transparent text-base-900/30 cursor-not-allowed opacity-50 pointer-events-none"
                  : "bg-blue-500 text-white hover:bg-blue-600"
                  }`}
                aria-label="Send message"
              >
                <ArrowRight size={14} className="xs:w-4 xs:h-4 sm:w-[18px] sm:h-[18px]" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
