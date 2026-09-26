"use client";

import React from "react";
import type { ProductThinkingPost } from "@/lib/product-thinking";
import { FRAMEWORK_SECTIONS } from "./article-framework";
import { FIELD_NOTE_SECTIONS } from "./article-field-note";
import { DECISION_MEMO_SECTIONS } from "./article-decision-memo";

interface ArticleTableOfContentsProps {
  post: ProductThinkingPost;
}

export function ArticleTableOfContents({ post }: ArticleTableOfContentsProps) {
  let sections = FRAMEWORK_SECTIONS;

  if (post.format === "Field Note") {
    sections = FIELD_NOTE_SECTIONS;
  } else if (post.format === "Decision Memo") {
    sections = DECISION_MEMO_SECTIONS;
  }

  return (
    <div className="hidden lg:block sticky top-24">
      <nav className="text-sm">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          In This Article
        </p>
        <ul className="space-y-3">
          {sections.map(section => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-muted-foreground hover:text-foreground transition-colors text-xs"
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
