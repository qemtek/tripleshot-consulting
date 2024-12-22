import { useState, useEffect } from 'react';
import type { BlogPost } from '../components/blog/types';
import { mockPosts } from '../data/mockPosts';

export function useBlogPost(slug: string | undefined) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // Simulated API call
        const foundPost = mockPosts.find(p => p.slug === slug);
        setPost(foundPost || null);
      } catch (err) {
        setError(err as Error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

  return { post, loading, error };
}