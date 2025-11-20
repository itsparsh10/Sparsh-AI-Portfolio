"use client";

import { useMemo } from "react";
import Link from "next/link";

interface FormattedMessageProps {
  text: string;
  isStreaming?: boolean;
}

export default function FormattedMessage({ text, isStreaming }: FormattedMessageProps) {
  const formattedContent = useMemo(() => {
    if (!text) return null;

    // Split text into lines to handle lists and paragraphs
    const lines = text.split('\n');
    const elements: React.ReactNode[] = [];
    let keyCounter = 0;
    let currentList: React.ReactNode[] = [];

    const flushList = () => {
      if (currentList.length > 0) {
        elements.push(
          <ul key={`ul-${keyCounter++}`} className="list-disc list-inside mb-2 space-y-1 ml-4">
            {currentList}
          </ul>
        );
        currentList = [];
      }
    };

    lines.forEach((line, lineIndex) => {
      const trimmedLine = line.trim();

      // Empty line
      if (trimmedLine === '') {
        flushList();
        if (lineIndex < lines.length - 1) {
          elements.push(<br key={`br-${keyCounter++}`} />);
        }
        return;
      }

      // Check if it's a list item (starts with -, *, or •)
      const listMatch = trimmedLine.match(/^[-*•]\s+(.+)$/);
      if (listMatch) {
        const listContent = listMatch[1];
        const processedContent = processInlineFormatting(listContent);
        currentList.push(
          <li key={`li-${keyCounter++}`} className="mb-1">
            {processedContent}
          </li>
        );
        return;
      }

      // Not a list item - flush any current list and add as paragraph
      flushList();
      const processedLine = processInlineFormatting(trimmedLine);
      elements.push(
        <p key={`p-${keyCounter++}`} className="text-xs xs:text-sm sm:text-base leading-relaxed mb-2 last:mb-0 break-words">
          {processedLine}
        </p>
      );
    });

    // Flush any remaining list items
    flushList();

    return elements.length > 0 ? elements : <span className="text-xs xs:text-sm sm:text-base leading-relaxed break-words">{text}</span>;
  }, [text]);

  function processInlineFormatting(content: string): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    let lastIndex = 0;
    let keyCounter = 0;

    // Process in order: markdown links, URLs, emails, phones, then formatting
    // First pass: find markdown links [text](url)
    const markdownLinkPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
    const matches: Array<{ start: number; end: number; type: string; content: string; original: string; linkText?: string }> = [];

    let match: RegExpExecArray | null;
    while ((match = markdownLinkPattern.exec(content)) !== null) {
      matches.push({
        start: match.index!,
        end: match.index! + match[0].length,
        type: 'markdown-link',
        content: match[2],
        original: match[0],
        linkText: match[1],
      });
    }

    // Second pass: find URLs, emails, and phones (but not if they're inside markdown links)
    const urlPattern = /(https?:\/\/[^\s<>"']+|www\.[^\s<>"']+)/gi;
    const emailPattern = /\b([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)\b/g;
    const phonePattern = /\b(\+?\d{1,4}[-.\s]?\(?\d{1,4}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9})\b/g;

    // Find URLs (but not if they're inside markdown links)
    while ((match = urlPattern.exec(content)) !== null) {
      const currentMatch = match;
      const isInMarkdownLink = matches.some(m => m.type === 'markdown-link' && currentMatch.index >= m.start && currentMatch.index < m.end);
      if (isInMarkdownLink) continue;
      const url = match[0];
      const normalizedUrl = url.startsWith('www.') ? `https://${url}` : url;
      matches.push({
        start: match.index!,
        end: match.index! + url.length,
        type: 'url',
        content: normalizedUrl,
        original: url,
      });
    }

    // Find emails
    while ((match = emailPattern.exec(content)) !== null) {
      matches.push({
        start: match.index!,
        end: match.index! + match[0].length,
        type: 'email',
        content: match[0],
        original: match[0],
      });
    }

    // Find phones
    while ((match = phonePattern.exec(content)) !== null) {
      matches.push({
        start: match.index!,
        end: match.index! + match[0].length,
        type: 'phone',
        content: match[0],
        original: match[0],
      });
    }

    // Sort by position
    matches.sort((a, b) => a.start - b.start);

    // Remove overlapping matches (prioritize URLs > emails > phones)
    const filteredMatches: typeof matches = [];
    matches.forEach((m) => {
      const overlaps = filteredMatches.some(
        (existing) => !(m.end <= existing.start || m.start >= existing.end)
      );
      if (!overlaps) {
        filteredMatches.push(m);
      }
    });

    // Build parts
    filteredMatches.forEach((match) => {
      // Add text before match
      if (match.start > lastIndex) {
        const textBefore = content.substring(lastIndex, match.start);
        if (textBefore) {
          parts.push(...processTextFormatting(textBefore, keyCounter));
          keyCounter += 100; // Increment to avoid key conflicts
        }
      }

      // Add formatted element
      if (match.type === 'markdown-link') {
        const href = match.content.startsWith('www.') ? `https://${match.content}` : match.content;
        parts.push(
          <Link
            key={`md-link-${keyCounter++}`}
            href={href}
            target={href.startsWith('http') ? "_blank" : undefined}
            rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {match.linkText || match.content}
          </Link>
        );
      } else if (match.type === 'url') {
        parts.push(
          <Link
            key={`link-${keyCounter++}`}
            href={match.content}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 hover:underline break-all"
          >
            {match.original}
          </Link>
        );
      } else if (match.type === 'email') {
        parts.push(
          <Link
            key={`email-${keyCounter++}`}
            href={`mailto:${match.content}`}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {match.content}
          </Link>
        );
      } else if (match.type === 'phone') {
        const phoneHref = `tel:${match.content.replace(/[\s\-\(\)\.]/g, '')}`;
        parts.push(
          <Link
            key={`phone-${keyCounter++}`}
            href={phoneHref}
            className="text-blue-600 hover:text-blue-800 hover:underline"
          >
            {match.content}
          </Link>
        );
      }

      lastIndex = match.end;
    });

    // Add remaining text
    if (lastIndex < content.length) {
      const remainingText = content.substring(lastIndex);
      if (remainingText) {
        parts.push(...processTextFormatting(remainingText, keyCounter));
      }
    }

    return parts.length > 0 ? parts : [<span key="default">{content}</span>];
  }

  function processTextFormatting(text: string, startKey: number): React.ReactNode[] {
    const parts: React.ReactNode[] = [];
    let keyCounter = startKey;
    let lastIndex = 0;

    // Process bold (**text** or __text__)
    const boldPattern = /(\*\*|__)(.*?)\1/g;
    const matches: Array<{ start: number; end: number; content: string; type: string }> = [];

    let match: RegExpExecArray | null;
    while ((match = boldPattern.exec(text)) !== null) {
      matches.push({
        start: match.index!,
        end: match.index! + match[0].length,
        content: match[2],
        type: 'bold',
      });
    }

    // Process italic (*text* or _text_) - but not if it's part of bold
    // Use a simpler pattern that avoids lookbehind
    const italicPattern = /\*([^*]+?)\*|_([^_]+?)_/g;
    while ((match = italicPattern.exec(text)) !== null) {
      const currentMatch = match;
      const isBold = matches.some(m => currentMatch.index >= m.start && currentMatch.index < m.end);
      if (!isBold) {
        // Check if it's not part of a bold pattern (not **text** or __text__)
        const fullMatch = match[0];
        const before = text.substring(Math.max(0, match.index! - 1), match.index!);
        const after = text.substring(match.index! + fullMatch.length, match.index! + fullMatch.length + 1);
        const isPartOfBold = (before === '*' && after === '*') || (before === '_' && after === '_');

        if (!isPartOfBold) {
          matches.push({
            start: match.index!,
            end: match.index! + fullMatch.length,
            content: match[1] || match[2],
            type: 'italic',
          });
        }
      }
    }

    // Process code (`code`)
    const codePattern = /`([^`]+)`/g;
    while ((match = codePattern.exec(text)) !== null) {
      const currentMatch = match;
      const isFormatted = matches.some(m => currentMatch.index >= m.start && currentMatch.index < m.end);
      if (!isFormatted) {
        matches.push({
          start: match.index!,
          end: match.index! + match[0].length,
          content: match[1],
          type: 'code',
        });
      }
    }

    matches.sort((a, b) => a.start - b.start);

    matches.forEach((match) => {
      if (match.start > lastIndex) {
        parts.push(<span key={`text-${keyCounter++}`}>{text.substring(lastIndex, match.start)}</span>);
      }

      if (match.type === 'bold') {
        parts.push(
          <strong key={`bold-${keyCounter++}`} className="font-semibold">
            {match.content}
          </strong>
        );
      } else if (match.type === 'italic') {
        parts.push(
          <em key={`italic-${keyCounter++}`} className="italic">
            {match.content}
          </em>
        );
      } else if (match.type === 'code') {
        parts.push(
          <code
            key={`code-${keyCounter++}`}
            className="bg-gray-200 dark:bg-gray-700 px-1.5 py-0.5 rounded text-sm font-mono"
          >
            {match.content}
          </code>
        );
      }

      lastIndex = match.end;
    });

    if (lastIndex < text.length) {
      parts.push(<span key={`text-${keyCounter++}`}>{text.substring(lastIndex)}</span>);
    }

    return parts.length > 0 ? parts : [<span key={`text-${startKey}`}>{text}</span>];
  }

  return (
    <div className="prose prose-sm max-w-none">
      {formattedContent}
      {isStreaming && (
        <span className="inline-block w-0.5 h-4 ml-1 bg-current animate-pulse" style={{ animationDuration: '1s' }} />
      )}
    </div>
  );
}

