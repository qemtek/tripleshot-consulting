import React from 'react';
import BlogCard from './BlogCard';
import { useBlogPosts } from '../../hooks/useBlogPosts';

export default function BlogList() {
  const { posts, loading, error } = useBlogPosts();

  if (loading) return <div className="text-center">Loading posts...</div>;
  if (error) return <div className="text-center text-red-600">Failed to load posts</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {posts.map((post) => (
        <BlogCard key={post.id} {...post} />
      ))}
    </div>
  );
}