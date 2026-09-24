import fs from 'fs';
import path from 'path';

export interface ProductThinkingPost {
  slug: string;
  title: string;
  summary: string;
  category: 'Product Strategy' | 'Discovery' | 'Technical PM' | 'AI' | 'Execution';
  tags: string[];
  publishedAt: string;
  updatedAt?: string;
  readingTime: string;
  featured: boolean;
  draft: boolean;
  image?: string;
  imageAlt?: string;
  seoTitle?: string;
  seoDescription?: string;
  content: string;
}

const contentDir = path.join(process.cwd(), 'content', 'product-thinking');

function parseYamlFrontmatter(content: string): { metadata: Record<string, any>; content: string } {
  const match = content.match(/^---\n([\s\S]*?)\n---\n([\s\S]*)$/);
  if (!match) {
    return { metadata: {}, content };
  }

  const yamlContent = match[1];
  const bodyContent = match[2].trim();

  const metadata: Record<string, any> = {};
  const lines = yamlContent.split('\n');

  for (const line of lines) {
    if (!line.trim()) continue;
    const colonIndex = line.indexOf(':');
    if (colonIndex === -1) continue;

    const key = line.substring(0, colonIndex).trim();
    const value = line.substring(colonIndex + 1).trim();

    if (value.startsWith('[') && value.endsWith(']')) {
      metadata[key] = value.slice(1, -1).split(',').map(v => v.trim().replace(/['"]/g, ''));
    } else if (value === 'true') {
      metadata[key] = true;
    } else if (value === 'false') {
      metadata[key] = false;
    } else {
      metadata[key] = value.replace(/^["']|["']$/g, '');
    }
  }

  return { metadata, content: bodyContent };
}

function getPostFilenames(): string[] {
  try {
    return fs.readdirSync(contentDir).filter(file => file.endsWith('.mdx'));
  } catch {
    return [];
  }
}

function parsePost(filename: string): ProductThinkingPost | null {
  try {
    const filePath = path.join(contentDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { metadata, content } = parseYamlFrontmatter(fileContent);

    return {
      slug: metadata.slug,
      title: metadata.title,
      summary: metadata.summary,
      category: metadata.category,
      tags: Array.isArray(metadata.tags) ? metadata.tags : [],
      publishedAt: metadata.publishedAt,
      updatedAt: metadata.updatedAt,
      readingTime: metadata.readingTime,
      featured: metadata.featured || false,
      draft: metadata.draft || false,
      image: metadata.image,
      imageAlt: metadata.imageAlt,
      seoTitle: metadata.seoTitle,
      seoDescription: metadata.seoDescription,
      content: content.trim(),
    };
  } catch (error) {
    console.error(`Error parsing ${filename}:`, error);
    return null;
  }
}

export function getAllProductThinkingPosts(): ProductThinkingPost[] {
  const filenames = getPostFilenames();
  const posts = filenames
    .map(parsePost)
    .filter((post): post is ProductThinkingPost => post !== null)
    .filter(post => !post.draft)
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime());

  return posts;
}

export function getProductThinkingPostBySlug(slug: string): ProductThinkingPost | null {
  const filenames = getPostFilenames();
  for (const filename of filenames) {
    const post = parsePost(filename);
    if (post && post.slug === slug) {
      return post;
    }
  }
  return null;
}

export function getFeaturedProductThinkingPosts(limit: number = 3): ProductThinkingPost[] {
  return getAllProductThinkingPosts()
    .filter(post => post.featured)
    .slice(0, limit);
}

export function getProductThinkingPostsByCategory(category: ProductThinkingPost['category']): ProductThinkingPost[] {
  return getAllProductThinkingPosts().filter(post => post.category === category);
}

export function getStaticParamsForProductThinking(): Array<{ slug: string }> {
  return getAllProductThinkingPosts().map(post => ({
    slug: post.slug,
  }));
}
