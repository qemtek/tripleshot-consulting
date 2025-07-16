import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import NewHero from '../components/NewHero';
import WhoWeAre from '../components/WhoWeAre';
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
    <main>
      <NewHero />
      <WhoWeAre />
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
  );
}