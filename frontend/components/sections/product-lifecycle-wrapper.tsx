"use client";

import React, { useState } from "react";
import { ProductLifecycle } from "./product-lifecycle";
import { ProductThinkingLibrary } from "./product-thinking-library";
import type { ProductThinkingPost } from "@/lib/product-thinking";

interface ProductLifecycleWrapperProps {
  posts: ProductThinkingPost[];
  featured?: ProductThinkingPost | null;
}

export function ProductLifecycleWrapper({ posts, featured }: ProductLifecycleWrapperProps) {
  const [filterStage, setFilterStage] = useState<string | null>(null);

  // Include featured draft piece in the posts for lifecycle display
  const allPostsForDisplay = featured && featured.draft ? [featured, ...posts] : posts;

  return (
    <>
      <ProductLifecycle posts={allPostsForDisplay} onStageSelect={setFilterStage} activeStage={filterStage} />
      <ProductThinkingLibrary posts={posts} featured={featured} filterStage={filterStage} />
    </>
  );
}
