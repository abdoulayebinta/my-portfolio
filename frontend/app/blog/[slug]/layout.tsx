import type { Metadata } from "next";
import { getProductThinkingPostBySlug } from "@/lib/product-thinking";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getProductThinkingPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article | Abdoulaye Bah",
      description: "Article not found",
    };
  }

  return {
    title: `${post.title} | Abdoulaye Bah`,
    description: post.summary,
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
