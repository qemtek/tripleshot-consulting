import { useState, useEffect } from 'react';
import type { BlogPost } from '../components/blog/types';
import { mockPosts } from '../data/mockPosts';

export function useBlogPosts() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Simulate API call with mock data
    const fetchPosts = async () => {
      try {
        // Simulate network delay
        await new Promise(resolve => setTimeout(resolve, 500));
        setPosts(mockPosts);
        setLoading(false);
      } catch (err) {
        setError(err as Error);
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return { posts, loading, error };
}