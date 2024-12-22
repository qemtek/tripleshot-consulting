import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Services from './components/Services';
import CaseStudies from './components/CaseStudies';
import Reviews from './components/reviews/Reviews';
import Companies from './components/companies/Companies';
import Team from './components/Team';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Mission />
        <Services />
        <CaseStudies />
        <Reviews />
        <Companies />
        <Team />
        <Contact />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Tripleshot Consulting. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;