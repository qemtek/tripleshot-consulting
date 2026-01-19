import React from 'react';
import BlogList from '../components/blog/BlogList';

export default function Blog() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Insights & Articles
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest thoughts on sports trading, analytics, and market strategies
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <BlogList />
        </div>
      </div>
    </section>
  );
}