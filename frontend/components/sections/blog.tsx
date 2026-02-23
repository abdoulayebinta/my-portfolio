"use client";

import React from "react";
import { blogPosts } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Blog() {
  return (
    <section id="insights" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Insights & Thought Leadership</h2>
            <p className="text-muted-foreground text-lg">
              Exploring the intersection of AI, Product Management, and Ethics through articles and talks.
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.slug}
              className="group flex flex-col bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-purple-500/30 transition-all duration-300 h-full"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read Article <ArrowUpRight size={12} />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.slice(0, 2).map(tag => (
                      <span key={tag} className="text-[10px] uppercase tracking-wider font-medium bg-secondary px-2 py-1 rounded-md text-secondary-foreground border border-border">
                        {tag}
                      </span>
                    ))}
                    {post.tags.length > 2 && (
                      <span className="text-[10px] uppercase tracking-wider font-medium bg-secondary px-2 py-1 rounded-md text-secondary-foreground border border-border">
                        +{post.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            </div>
          ))}
          
          {/* Video/Talk Card */}
          <div className="group bg-gradient-to-br from-purple-900/10 to-blue-900/10 border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-center items-center p-8 text-center min-h-[300px] relative">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.1)_0,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="w-16 h-16 rounded-full bg-background border border-border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                <PlayCircle size={32} className="text-purple-500" />
             </div>
             <h3 className="text-xl font-bold mb-3">Upcoming Talk: AI in Healthcare</h3>
             <p className="text-muted-foreground text-sm max-w-xs mb-6">
               Join me at the Global Health Tech Summit 2024 where I'll be discussing the future of diagnostic AI.
             </p>
             <Button variant="outline" className="bg-background/50 backdrop-blur-sm group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all">
               Register Interest
             </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            View All Articles <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

