import React from 'react';
import BlogList from '../components/blog/BlogList';
import Newsletter from '../components/blog/Newsletter';

export default function Blog() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            AI Insights & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Latest thoughts on AI technology, business automation, and success stories
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <BlogList />
          </div>
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              <Newsletter />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}