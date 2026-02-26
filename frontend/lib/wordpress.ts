const WORDPRESS_API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL || 'https://cms.abdoulayebah.com/wp-json/wp/v2';

export interface BlogPost {
  id: number;
  slug: string;
  title: { rendered: string };
  content: { rendered: string };
  excerpt: { rendered: string };
  date: string;
  _embedded?: {
    'wp:featuredmedia'?: Array<{
      source_url: string;
      alt_text: string;
    }>;
    'wp:term'?: Array<Array<{
      name: string;
      id: number;
    }>>;
  };
}

export async function getPosts(): Promise<BlogPost[]> {
  try {
    // In a real scenario, you might filter by language category or tag
    // For now, we just fetch the latest posts
    const res = await fetch(`${WORDPRESS_API_URL}/posts?_embed&per_page=6`);
    
    if (!res.ok) {
      console.warn('Failed to fetch posts from WordPress');
      return [];
    }

    return await res.json();
  } catch (error) {
    console.warn('Error fetching WordPress posts:', error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const res = await fetch(`${WORDPRESS_API_URL}/posts?slug=${slug}&_embed`);
    
    if (!res.ok) {
      return null;
    }

    const posts = await res.json();
    return posts.length > 0 ? posts[0] : null;
  } catch (error) {
    console.warn(`Error fetching post ${slug}:`, error);
    return null;
  }
}

// Helper to format WP date
export function formatDate(dateString: string): string {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Helper to get featured image
export function getFeaturedImage(post: BlogPost): string {
  return post._embedded?.['wp:featuredmedia']?.[0]?.source_url || 
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'; // Fallback
}

// Helper to get tags
export function getTags(post: BlogPost): string[] {
  const terms = post._embedded?.['wp:term'] || [];
  // Flatten all terms (categories and tags)
  return terms.flat().map(term => term.name).slice(0, 3);
}

