import React from 'react';
import { Link } from 'react-router-dom';
import { formatDate } from '../../utils/dateUtils';
import type { BlogPost } from './types';

export default function BlogCard({ title, excerpt, date, author, readTime, image, externalUrl, id }: BlogPost & { slug?: string }) {
  const CardContent = (
    <>
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>{formatDate(date)}</span>
          <span>·</span>
          <span>{readTime} min read</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full mr-3" />
            <span className="text-sm text-gray-700">{author.name}</span>
          </div>
          {externalUrl && (
            <span className="text-sm text-accent font-medium">Read on Substack →</span>
          )}
        </div>
      </div>
    </>
  );

  if (externalUrl) {
    return (
      <a
        href={externalUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden cursor-pointer"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <Link
      to={`/blog/${id}`}
      className="block bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
    >
      {CardContent}
    </Link>
  );
}