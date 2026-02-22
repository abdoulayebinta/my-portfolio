"use client";

import React from "react";
import { useParams, notFound } from "next/navigation";
import { blogPosts } from "@/lib/data";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Calendar, Clock, Share2, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return notFound();
  }

  // Simple markdown parser for the content (since we're using a string in data.ts)
  // In a real app, use next-mdx-remote or similar
  const renderContent = (content: string) => {
    return content.split('\n').map((line, index) => {
      if (line.trim().startsWith('### ')) {
        return <h3 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('### ', '')}</h3>;
      }
      if (line.trim().startsWith('## ')) {
        return <h2 key={index} className="text-3xl font-bold mt-12 mb-6 text-foreground">{line.replace('## ', '')}</h2>;
      }
      if (line.trim().startsWith('1. ')) {
        return <li key={index} className="ml-6 list-decimal mb-2 pl-2" dangerouslySetInnerHTML={{ __html: line.replace('1. ', '').replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />;
      }
      if (line.trim() === '') {
        return <br key={index} />;
      }
      return <p key={index} className="mb-4 text-lg text-muted-foreground leading-relaxed" dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.*?)\*\*/g, '<strong class="text-foreground">$1</strong>') }} />;
    });
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <article className="pt-32 pb-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          <Link href="/#blog">
            <Button variant="ghost" className="mb-8 pl-0 hover:pl-2 transition-all">
              <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
            </Button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-4 items-center text-sm text-muted-foreground mb-6">
              <span className="flex items-center gap-1"><Calendar size={14} /> {post.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {post.readTime}</span>
              <div className="flex gap-2">
                {post.tags.map(tag => (
                  <span key={tag} className="bg-secondary px-2 py-1 rounded-md text-xs text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>

            <div className="flex items-center justify-between border-y border-border py-6 mb-12">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-white font-bold">
                  AI
                </div>
                <div>
                  <p className="font-medium text-sm">Alex.PM</p>
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

            <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
              <img src={post.image} alt={post.title} className="w-full h-auto" />
            </div>

            <div className="prose prose-lg dark:prose-invert max-w-none">
              {renderContent(post.content)}
            </div>

          </motion.div>
        </div>
      </article>

      <Footer />
    </main>
  );
}

