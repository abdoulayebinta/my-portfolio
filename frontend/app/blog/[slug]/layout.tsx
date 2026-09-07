import type { Metadata } from "next";
import { blogPosts as localPosts } from "@/lib/data";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = localPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return {
      title: "Article | Abdoulaye Bah",
      description: "Article not found",
    };
  }

  return {
    title: `${post.title} | Abdoulaye Bah`,
    description: post.excerpt || post.content?.substring(0, 150) || "",
  };
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
