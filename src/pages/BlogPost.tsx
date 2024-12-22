import React from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { useBlogPost } from '../hooks/useBlogPost';
import Newsletter from '../components/blog/Newsletter';
import { formatDate } from '../utils/dateUtils';

export default function BlogPost() {
  const { slug } = useParams();
  const { post, loading, error } = useBlogPost(slug);

  if (loading) return <div className="text-center py-20">Loading post...</div>;
  if (error) return <div className="text-center py-20 text-red-600">Failed to load post</div>;
  if (!post) return <div className="text-center py-20">Post not found</div>;

  return (
    <>
      <Helmet>
        <title>{post.title} - Tripleshot Consulting</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.excerpt} />
        <meta property="og:image" content={post.image} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <article className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-lg mb-8" />
            
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
              <div className="flex items-center gap-4 text-gray-600">
                <img src={post.author.avatar} alt={post.author.name} className="w-10 h-10 rounded-full" />
                <div>
                  <p className="font-medium">{post.author.name}</p>
                  <p className="text-sm">{formatDate(post.date)} · {post.readTime} min read</p>
                </div>
              </div>
            </div>

            <div className="prose prose-lg max-w-none mb-12" dangerouslySetInnerHTML={{ __html: post.content }} />
            
            <div className="border-t pt-8">
              <Newsletter />
            </div>
          </div>
        </div>
      </article>
    </>
  );
}