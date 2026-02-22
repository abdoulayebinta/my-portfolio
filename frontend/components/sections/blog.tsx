"use client";

import React from "react";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";

export function Blog() {
  return (
    <section id="blog" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Thought Leadership</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, Product Management, and Ethics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="aspect-[2/1] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                    <ArrowUpRight size={14} /> Read
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span key={tag} className="text-xs bg-secondary px-2 py-1 rounded-md text-secondary-foreground">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

