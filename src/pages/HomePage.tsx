import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
// Import kept for future use
import Reviews from '../components/reviews/Reviews';
// Import kept for future use
// import Companies from '../components/companies/Companies';
import Team from '../components/Team';
import Contact from '../components/Contact';

export default function HomePage() {
  const location = useLocation();
  
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <main>
      <Hero />
      <Mission />
      <Services />
      <CaseStudies />
      {/* Reviews section temporarily removed until we have real testimonials */}
      {/* <Reviews /> */}
      {/* Companies section temporarily removed */}
      {/* <Companies /> */}
      <Team />
      <Contact />
    </main>
  );
}