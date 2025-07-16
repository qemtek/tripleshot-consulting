import React from 'react';
import DetailedCaseStudies from '../components/DetailedCaseStudies';
import CaseStudies from '../components/CaseStudies';

export default function CaseStudiesPage() {
  return (
    <main className="pt-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Case Studies
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our success stories and see how we've helped businesses transform their operations through innovative technology solutions.
            </p>
          </div>
        </div>
      </div>
      
      <DetailedCaseStudies />
      <CaseStudies />
    </main>
  );
}