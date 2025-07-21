import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import NewHero from '../components/NewHero';
import WhoWeAre from '../components/WhoWeAre';
import WhatWeDo from '../components/WhatWeDo';
import BusinessValues from '../components/BusinessValues';
import TripleshotMethod from '../components/TripleshotMethod';
import MeetTheTeam from '../components/MeetTheTeam';
import PreviousClients from '../components/PreviousClients';
import GetInTouch from '../components/GetInTouch';

// Original components kept for potential fallback
// import Hero from '../components/Hero';
// import AboutUs from '../components/AboutUs';
// import Mission from '../components/Mission';
// import Services from '../components/Services';
// import DetailedCaseStudies from '../components/DetailedCaseStudies';
// import CaseStudies from '../components/CaseStudies';
// import Reviews from '../components/reviews/Reviews';
// import Contact from '../components/Contact';

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
    <>
      <SEOHead 
        title="Tripleshot Solutions - Professional but Personal Business Automation"
        description="Meet your business automation partners. We build close working relationships while delivering expert AI, web development, and process optimization solutions for growing businesses."
        keywords={[
          'business automation consultants',
          'professional but personal service',
          'AI consulting small business',
          'web development partners',
          'process optimization experts',
          'tripleshot solutions'
        ]}
      />
      <StructuredData type="webpage" data={{
        title: "Tripleshot Solutions - Business Automation Partners",
        description: "Professional but personal business automation consultants specializing in AI, web development, and process optimization.",
        url: "https://tripleshotsolutions.com/"
      }} />
    
    <main>
      <NewHero />
      <WhoWeAre />
      <WhatWeDo />
      <BusinessValues />
      <TripleshotMethod />
      <MeetTheTeam />
      <PreviousClients />
      <GetInTouch />
      
      {/* Original sections temporarily removed but kept for reference */}
      {/* <Hero />
      <AboutUs />
      <Mission />
      <Services />
      <Reviews />
      <DetailedCaseStudies />
      <CaseStudies />
      <Contact /> */}
    </main>
    </>
  );
}