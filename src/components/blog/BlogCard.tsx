import React from 'react';
import { formatDate } from '../../utils/dateUtils';
import type { BlogPost } from './types';

export default function BlogCard({ title, excerpt, date, author, readTime, image }: BlogPost) {
  return (
    <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span>{formatDate(date)}</span>
          <span>·</span>
          <span>{readTime} min read</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 text-gray-900">{title}</h3>
        <p className="text-gray-600 mb-4">{excerpt}</p>
        <div className="flex items-center">
          <img src={author.avatar} alt={author.name} className="w-10 h-10 rounded-full mr-3" />
          <span className="text-sm text-gray-700">{author.name}</span>
        </div>
      </div>
    </article>
  );
}