import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Mission from '../components/Mission';
import Services from '../components/Services';
import CaseStudies from '../components/CaseStudies';
import Reviews from '../components/reviews/Reviews';
import Companies from '../components/companies/Companies';
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
      <Reviews />
      <Companies />
      <Team />
      <Contact />
    </main>
  );
}