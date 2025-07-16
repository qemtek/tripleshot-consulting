import React from 'react';

export default function TripleshotMethod() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            The Tripleshot Method
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Lay your Digital Foundations
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Digitise records</li>
              <li>• Automate manual processes</li>
              <li>• Build dashboards to track key performance indicators</li>
            </ul>
          </div>
          
          {/* Step 2 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Build your Lead Magnet
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Focus on building a solid brand identity and website that draws customers in</li>
              <li>• Build a brand presence on social media platforms</li>
              <li>• Maximise search engine ranking (SEO) and optimise your marketing spend</li>
            </ul>
          </div>
          
          {/* Step 3 */}
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Supercharge Performance
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li>• Use AI to optimise prices</li>
              <li>• Predict customer behaviour</li>
              <li>• Forecast future growth</li>
              <li>• Automate support with chat bots</li>
              <li>• Optimise logistical networks</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}