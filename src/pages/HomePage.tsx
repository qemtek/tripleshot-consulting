import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import DarkHero from '../components/DarkHero';
import IntroShowcase from '../components/IntroShowcase';
import WorkShowcase from '../components/WorkShowcase';
import ThreePillars from '../components/ThreePillars';
import GradientTransition from '../components/ui/GradientTransition';
import MeetTheTeam from '../components/MeetTheTeam';
import PreviousClients from '../components/PreviousClients';
import GetInTouch from '../components/GetInTouch';

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
        title="Tripleshot - We Build Apps, Transform Businesses & Solve Problems"
        description="A small team of senior engineers and strategists. We build apps, transform businesses, and solve the problems others walk away from."
        keywords={[
          'app development',
          'business transformation',
          'AI consulting',
          'software engineering',
          'data science',
          'digital transformation',
          'technology consulting',
          'tripleshot'
        ]}
      />
      <StructuredData
        type="webpage"
        data={{
          title: "Tripleshot - Technology Partners for Ambitious Businesses",
          description: "We build apps, transform businesses, and solve complex technical problems with AI, data science, and deep engineering expertise.",
          url: "https://tripleshotsolutions.com/"
        }}
      />

      <main className="bg-dark-800">
        <DarkHero />
        <IntroShowcase />

        {/* Work Showcase - Alternating image/text layout */}
        <WorkShowcase />

        {/* Three Pillars - What We Do */}
        <ThreePillars />

        {/* Gradient: Dark to Light */}
        <GradientTransition from="dark" to="light" variant="layered" height="lg" />
        <MeetTheTeam />
        <PreviousClients />
        {/* Gradient: Light to Dark */}
        <GradientTransition from="light" to="dark" variant="animated" height="lg" />
        <GetInTouch />
      </main>
    </>
  );
}
