import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProductThinkingPostBySlug, getStaticParamsForProductThinking } from "@/lib/product-thinking";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { Logo } from "@/components/logo";
import Image from "next/image";

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getProductThinkingPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Article | Abdoulaye Bah",
      description: "Article not found",
    };
  }

  return {
    title: `${post.seoTitle || post.title} | Abdoulaye Bah`,
    description: post.seoDescription || post.summary,
    openGraph: {
      title: post.title,
      description: post.summary,
      type: "article",
      publishedTime: post.publishedAt,
      ...(post.image && { images: [{ url: post.image, alt: post.imageAlt || post.title }] }),
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.summary,
      ...(post.image && { image: post.image }),
    },
  };
}

export async function generateStaticParams() {
  return getStaticParamsForProductThinking();
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getProductThinkingPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  const publishedDate = new Date(post.publishedAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />

      <article className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <Link href="/#insights">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Insights
            </Button>
          </Link>

          <div>
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {publishedDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {post.readingTime}
              </span>
              <div className="flex gap-2">
                {post.tags.map((tag: string) => (
                  <span key={tag} className="bg-secondary px-2 py-1 rounded-md text-xs text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">{post.title}</h1>

            <div className="flex items-center justify-between border-y border-border py-6 mb-12">
              <div className="flex items-center gap-3">
                <Logo variant="icon" />
                <div>
                  <p className="font-medium text-sm">Abdoulaye Bah</p>
                  <p className="text-xs text-muted-foreground">Product Manager</p>
                </div>
              </div>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Linkedin size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Twitter size={18} />
                </Button>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Share2 size={18} />
                </Button>
              </div>
            </div>

            {post.image && (
              <div className="rounded-2xl overflow-hidden mb-12 shadow-lg relative aspect-video">
                <Image
                  src={post.image}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            )}

            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
