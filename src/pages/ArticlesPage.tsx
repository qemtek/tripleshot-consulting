import React from 'react';

export default function ArticlesPage() {
  return (
    <main className="pt-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Articles & Insights
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay updated with the latest trends in technology, business optimization, and digital transformation.
            </p>
          </div>
        </div>
      </div>
      
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="bg-white p-12 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                Coming Soon
              </h2>
              <p className="text-gray-600 mb-6">
                We're working on creating valuable content about technology trends, 
                business optimization strategies, and digital transformation insights.
              </p>
              <p className="text-sm text-gray-500">
                Check back soon for technical articles, case study deep-dives, and industry analysis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}