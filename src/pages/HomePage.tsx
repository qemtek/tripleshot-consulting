import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import Mission from '../components/Mission';
import Services from '../components/Services';
import DetailedCaseStudies from '../components/DetailedCaseStudies';
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
      <AboutUs />
      <Mission />
      {/* Services section - Desktop only */}
      <div className="hidden lg:block">
        <Services />
      </div>
      <Reviews />
      {/* Detailed Case Studies - Desktop only */}
      <div className="hidden lg:block">
        <DetailedCaseStudies />
      </div>
      <CaseStudies />
      {/* Companies section temporarily removed */}
      {/* <Companies /> */}
      <Team />
      <Contact />
    </main>
  );
}