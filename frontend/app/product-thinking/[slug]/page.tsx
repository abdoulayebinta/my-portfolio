import type { Metadata } from "next";
import React from "react";
import Link from "next/link";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { getProductThinkingPostBySlug, getAllProductThinkingPosts } from "@/lib/product-thinking";
import { ProductThinkingArticleHero } from "@/components/product-thinking/article-hero";
import { ArticleFrameworkHero } from "@/components/product-thinking/article-framework-hero";
import { ArticleVisionIntro } from "@/components/product-thinking/article-vision-intro";
import { ArticleVisionFramework } from "@/components/product-thinking/article-vision-framework";
import { ArticleVisionTesting } from "@/components/product-thinking/article-vision-testing";
import { ArticleVisionMistakes } from "@/components/product-thinking/article-vision-mistakes";
import { ArticleVisionExample } from "@/components/product-thinking/article-vision-example";
import { ArticleVisionTemplate } from "@/components/product-thinking/article-vision-template";
import { ArticleVisionSummary } from "@/components/product-thinking/article-vision-summary";
import { ArticleVideo } from "@/components/product-thinking/article-video";
import { ArticleNextSteps } from "@/components/product-thinking/article-next-steps";
import { DecisionSummary } from "@/components/product-thinking/decision-summary";
import { ArticleTableOfContents } from "@/components/product-thinking/article-toc";
import { ArticleFramework } from "@/components/product-thinking/article-framework";
import { ArticleFieldNote } from "@/components/product-thinking/article-field-note";
import { ArticleDecisionMemo } from "@/components/product-thinking/article-decision-memo";
import { RelatedNavigation } from "@/components/product-thinking/related-navigation";

export async function generateStaticParams() {
  const posts = getAllProductThinkingPosts();
  return posts.map(post => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getProductThinkingPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Not Found"
    };
  }

  return {
    title: `${post.title} | Product Thinking | Abdoulaye Bah`,
    description: post.seoDescription || post.summary,
    openGraph: {
      title: post.title,
      description: post.seoDescription || post.summary,
      type: "article",
      url: `https://abdoulayebah.com/product-thinking/${post.slug}`
    }
  };
}

export default function ProductThinkingArticlePage({ params }: { params: { slug: string } }) {
  const post = getProductThinkingPostBySlug(params.slug);

  if (!post) {
    return (
      <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
        <Navbar />
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-8 text-center">
            <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">This article could not be found.</p>
            <Link href="/product-thinking" className="inline-flex items-center gap-2 text-primary hover:underline">
              Back to Product Thinking
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  // Get next published piece
  const allPosts = getAllProductThinkingPosts();
  const currentIndex = allPosts.findIndex(p => p.slug === post.slug);
  const nextPost = currentIndex > 0 ? allPosts[currentIndex - 1] : null;

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navbar />

      {/* Article Hero - Format-Specific */}
      {post.format === "Framework" || post.format === "Playbook" || post.format === "Mental Model" || post.format === "Technical Deep Dive" ? (
        <ArticleFrameworkHero post={post} />
      ) : (
        <>
          {/* Breadcrumb / Back Link for non-framework articles */}
          <section className="py-6 md:py-8 border-b border-border/40">
            <div className="container mx-auto px-4 md:px-8">
              <Link href="/product-thinking" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
                <ArrowLeft className="w-4 h-4" />
                Back to Product Thinking
              </Link>
            </div>
          </section>
          <ProductThinkingArticleHero post={post} />
        </>
      )}

      {/* Article Intro Section - Only for Product Vision Framework */}
      {post.slug === "product-vision-framework" && (
        <ArticleVisionIntro />
      )}

      {/* Framework Section - Only for Product Vision Framework */}
      {post.slug === "product-vision-framework" && (
        <ArticleVisionFramework />
      )}

      {/* Testing Section - Only for Product Vision Framework */}
      {post.slug === "product-vision-framework" && (
        <ArticleVisionTesting />
      )}

      {/* Mistakes Section - Only for Product Vision Framework */}
      {post.slug === "product-vision-framework" && (
        <ArticleVisionMistakes />
      )}

      {/* Real-world Example Section - Only for Product Vision Framework */}
      {post.slug === "product-vision-framework" && (
        <ArticleVisionExample />
      )}

      {/* Template Section - Only for Product Vision Framework */}
      {post.slug === "product-vision-framework" && (
        <ArticleVisionTemplate />
      )}

      {/* Summary Section - Only for Product Vision Framework */}
      {post.slug === "product-vision-framework" && (
        <ArticleVisionSummary />
      )}

      {/* Decision Summary - Hidden for Product Vision Framework */}
      {post.slug !== "product-vision-framework" && (
        <DecisionSummary post={post} />
      )}

      {/* Main Article Content with Sidebar TOC - Hidden for Product Vision Framework */}
      {post.slug !== "product-vision-framework" && (
        <section className="py-16 md:py-20">
          <div className="container mx-auto px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 md:gap-12">
              {/* Article Body */}
              <div className="lg:col-span-3">
                {post.format === "Field Note" ? (
                  <ArticleFieldNote post={post} />
                ) : post.format === "Decision Memo" ? (
                  <ArticleDecisionMemo post={post} />
                ) : (
                  <ArticleFramework post={post} />
                )}
              </div>

              {/* Table of Contents Sidebar */}
              <div className="lg:col-span-1">
                <ArticleTableOfContents post={post} />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Optional Video Section - Renders only when videoUrl exists */}
      <ArticleVideo post={post} />

      {/* Next Steps Navigation */}
      <ArticleNextSteps />

      {/* Related Navigation */}
      <RelatedNavigation post={post} nextPost={nextPost} />

      <Footer />
    </main>
  );
}
