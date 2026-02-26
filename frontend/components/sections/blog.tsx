"use client";

import React, { useEffect, useState } from "react";
import { blogPosts as localPosts } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight, Calendar, Clock, PlayCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/context/language-context";
import { getPosts, getFeaturedImage, getTags, formatDate, BlogPost } from "@/lib/wordpress";
import Image from "next/image";

export function Blog() {
  const { t, language } = useLanguage();
  const [posts, setPosts] = useState<any[]>(localPosts);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isUsingWordPress, setIsUsingWordPress] = useState(false);

  useEffect(() => {
    async function fetchWPPosts() {
      // getPosts currently doesn't use the language parameter, so we remove it to fix the type error
      const wpPosts = await getPosts();
      if (wpPosts && wpPosts.length > 0) {
        // Transform WP posts to match our local data structure for the UI
        const transformedPosts = wpPosts.map((post: BlogPost) => ({
          slug: post.slug,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered.replace(/<[^>]*>?/gm, '').slice(0, 150) + '...',
          date: formatDate(post.date),
          readTime: "5 min read", // Placeholder as WP doesn't provide this by default
          tags: getTags(post),
          image: getFeaturedImage(post),
          content: post.content.rendered
        }));
        setPosts(transformedPosts);
        setIsUsingWordPress(true);
      }
    }

    fetchWPPosts();
  }, [language]);

  return (
    <section id="insights" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">{t.insights.title}</h2>
            <p className="text-muted-foreground text-lg">
              {t.insights.subtitle}
            </p>
          </div>
          <Button variant="ghost" className="hidden md:flex">
            {t.insights.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div
              key={post.slug}
              className="group flex flex-col bg-background border border-border rounded-2xl overflow-hidden hover:shadow-lg hover:border-purple-500/30 transition-all duration-300 h-full"
            >
              <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                <div className="aspect-[16/9] overflow-hidden relative">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t.insights.readBtn} <ArrowUpRight size={12} />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                    <span className="flex items-center gap-1"><Calendar size={12} /> {post.date}</span>
                    <span className="flex items-center gap-1"><Clock size={12} /> {post.readTime}</span>
                  </div>
                  <h3 
                    className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors line-clamp-2"
                    dangerouslySetInnerHTML={{ __html: post.title }}
                  />
                  <div 
                    className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-grow"
                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  />
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {post.tags.slice(0, 2).map((tag: string) => (
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
             <h3 className="text-xl font-bold mb-3">{t.insights.talk.title}</h3>
             <p className="text-muted-foreground text-sm max-w-xs mb-6">
               {t.insights.talk.desc}
             </p>
             <Button variant="outline" className="bg-background/50 backdrop-blur-sm group-hover:bg-purple-500 group-hover:text-white group-hover:border-purple-500 transition-all">
               {t.insights.talk.btn}
             </Button>
          </div>
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <Button variant="outline" className="w-full">
            {t.insights.viewAll} <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

