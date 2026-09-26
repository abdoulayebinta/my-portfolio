"use client";

import React from "react";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface ArticleDecisionMemoProps {
  post: ProductThinkingPost;
}

const DECISION_MEMO_SECTIONS = [
  { id: "decision", label: "Decision" },
  { id: "evidence", label: "Evidence" },
  { id: "alternatives-considered", label: "Alternatives Considered" },
  { id: "trade-off-accepted", label: "Trade-off Accepted" },
  { id: "what-followed", label: "What Followed" },
  { id: "what-i-learned", label: "What I Learned" }
];

function renderMarkdown(markdown: string) {
  const lines = markdown.split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      const id = line.replace('## ', '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      elements.push(
        <h2 key={`h2-${i}`} id={id} className="text-2xl md:text-3xl font-bold mt-8 mb-4">
          {line.replace('## ', '')}
        </h2>
      );
      i++;
      continue;
    }

    if (line.startsWith('### ')) {
      elements.push(
        <h3 key={`h3-${i}`} className="text-xl md:text-2xl font-semibold mt-6 mb-3">
          {line.replace('### ', '')}
        </h3>
      );
      i++;
      continue;
    }

    if (line.startsWith('- ')) {
      const listItems: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        listItems.push(lines[i].replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 mb-4 text-base leading-relaxed">
          {listItems.map((item, idx) => (
            <li key={idx} className="text-foreground">{item}</li>
          ))}
        </ul>
      );
      continue;
    }

    if (line.trim() === '') {
      i++;
      continue;
    }

    if (line.trim()) {
      const parts = parseInlineMarkdown(line);
      elements.push(
        <p key={`p-${i}`} className="text-base leading-relaxed text-foreground mb-4">
          {parts}
        </p>
      );
    }

    i++;
  }

  return elements;
}

function parseInlineMarkdown(text: string): React.ReactNode[] {
  const parts: React.ReactNode[] = [];
  let remaining = text;
  let key = 0;

  while (remaining.length > 0) {
    const boldMatch = remaining.match(/\*\*([^*]+)\*\*/);
    if (boldMatch && boldMatch.index === 0) {
      parts.push(
        <strong key={`bold-${key++}`} className="font-semibold">
          {boldMatch[1]}
        </strong>
      );
      remaining = remaining.slice(boldMatch[0].length);
      continue;
    }

    const emphMatch = remaining.match(/\*([^*]+)\*/);
    if (emphMatch && emphMatch.index === 0) {
      parts.push(
        <em key={`em-${key++}`} className="italic">
          {emphMatch[1]}
        </em>
      );
      remaining = remaining.slice(emphMatch[0].length);
      continue;
    }

    const nextBold = remaining.indexOf('**');
    const nextEmph = remaining.indexOf('*');
    let nextIndex = remaining.length;

    if (nextBold !== -1) nextIndex = Math.min(nextIndex, nextBold);
    if (nextEmph !== -1 && nextEmph !== nextBold) nextIndex = Math.min(nextIndex, nextEmph);

    parts.push(remaining.slice(0, nextIndex));
    remaining = remaining.slice(nextIndex);
  }

  return parts;
}

export function ArticleDecisionMemo({ post }: ArticleDecisionMemoProps) {
  return (
    <article className="max-w-3xl">
      {post.content ? (
        <div className="text-foreground space-y-4">
          {renderMarkdown(post.content)}
        </div>
      ) : (
        <div className="bg-muted/50 rounded-lg p-8 border border-border/40 text-center">
          <p className="text-muted-foreground">
            This article is currently being written and validated.
          </p>
        </div>
      )}
    </article>
  );
}

export { DECISION_MEMO_SECTIONS };
