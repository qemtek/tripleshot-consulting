import React from 'react';
import AboutUs from '../components/AboutUs';
import Mission from '../components/Mission';
import Team from '../components/Team';
import Reviews from '../components/reviews/Reviews';

export default function AboutPage() {
  return (
    <main className="pt-16">
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About Tripleshot Solutions
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Learn more about our company, our mission, and the experienced team that makes it all possible.
            </p>
          </div>
        </div>
      </div>
      
      <AboutUs />
      <Mission />
      <Team />
      <Reviews />
    </main>
  );
}