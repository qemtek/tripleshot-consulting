import { useParams, useNavigate } from 'react-router-dom';
import { caseStudies } from '../data/caseStudies';
import type { CaseStudy } from '../types/CaseStudy';
import { Check, Clock, DollarSign, TrendingUp, Target, Heart, Zap } from 'lucide-react';
import Button from '../components/ui/Button';
import DetailedCaseStudyPage from './DetailedCaseStudyPage';

export default function CaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  // Check if this is a detailed case study ID
  const detailedCaseStudyIds = ['smart-routing-logistics', 'dynamic-pricing-ai', 'customer-churn-prediction'];
  if (id && detailedCaseStudyIds.includes(id)) {
    return <DetailedCaseStudyPage />;
  }
  
  const study: CaseStudy | undefined = caseStudies.find((s) => s.id === id);

  const goToContact = () => {
    navigate('/contact');
  };

  if (!study) {
    return <div>Case study not found</div>;
  }

  // Map metric keys to appropriate icons
  const getMetricIcon = (key: string) => {
    if (key.includes('Time') || key.includes('⏱️')) return Clock;
    if (key.includes('Cost') || key.includes('💰')) return DollarSign;
    if (key.includes('Growth') || key.includes('📈')) return TrendingUp;
    if (key.includes('Accuracy') || key.includes('🎯')) return Target;
    if (key.includes('Peace') || key.includes('😌')) return Heart;
    if (key.includes('Response') || key.includes('🚀')) return Zap;
    return TrendingUp; // default
  };

  // Generate unique story intro for each article
  const getStoryIntro = (studyId: string): string => {
    switch (studyId) {
      case 'resource-optimization-business':
        return "Does this sound familiar? You started your business to pursue your passion, but somehow you've become a full-time administrator. Here are the daily struggles we hear from business owners just like you:";
      
      case 'digital-marketing-strategy':
        return "Every business owner knows they need marketing to grow, but the reality is often frustrating and expensive. Here's what we consistently hear from businesses struggling with their marketing:";
      
      case 'financial-management-optimization':
        return "Money is the lifeblood of your business, but managing finances often feels overwhelming and time-consuming. Here are the financial challenges that keep business owners up at night:";
      
      case 'customer-service-automation':
        return "Great customer service is what sets successful businesses apart, but as you grow, maintaining that personal touch becomes increasingly difficult. Here's what growing businesses tell us:";
      
      case 'price-optimisation':
        return "Setting the right prices can make or break your business, but many owners struggle with pricing strategy and leaving money on the table. Here are the pricing challenges we see:";
      
      case 'brand-identity-evolution':
        return "Your brand is often the first impression potential customers have of your business. Here's what established businesses tell us about their brand challenges:";
      
      default:
        return "Here's what business owners in your situation typically face:";
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Brand Consistent */}
      <div className="relative h-[70vh] bg-gradient-to-br from-brand-primary via-brand-secondary to-brand-accent">
        <img
          src={study.image}
          alt={study.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl">
              <div className="text-sm font-medium text-white/90 bg-brand-primary/50 backdrop-blur-sm inline-block px-4 py-2 rounded-full mb-6">
                {study.industry} • Real Results
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                {study.headline}
              </h1>
              <p className="text-xl sm:text-2xl text-white/80 mb-8 leading-relaxed">
                {study.summary}
              </p>
              <Button 
                variant="cta"
                size="lg"
                onClick={goToContact}
              >
                Let's Talk About Your Business
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-40 space-y-40">
        {/* The Reality Check - Brand Consistent */}
        <section>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-white shadow-sm p-3">
                <img 
                  src="/images/new_logo.svg" 
                  alt="Tripleshot Logo" 
                  className="h-12" 
                />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-warm-900 mb-6">{study.title}</h2>
            <p className="text-lg text-warm-600 max-w-3xl mx-auto">
              {getStoryIntro(study.id)}
            </p>
          </div>
          
          <div className="bg-red-50 border-l-4 border-red-400 p-8 rounded-r-lg mb-12">
            <p className="text-lg text-gray-800 italic leading-relaxed">
              "{study.problem.description}"
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {study.problem.painPoints.map((point, index) => (
              <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-red-600 font-bold text-sm">!</span>
                  </div>
                  <p className="text-gray-700 font-medium">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* The Solution - Brand Consistent */}
        <section>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-white shadow-sm p-3">
                <img 
                  src="/images/coffee-cup.png" 
                  alt="Coffee Cup" 
                  className="h-12 w-12 object-contain" 
                />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-warm-900 mb-6">Here's How We Change the Game</h2>
            <p className="text-lg text-warm-600 max-w-3xl mx-auto">
              No complicated tech jargon. No overwhelming systems. Just practical solutions that work.
            </p>
          </div>

          <div className="bg-brand-primary/10 border-l-4 border-brand-primary p-8 rounded-r-lg mb-16">
            <p className="text-lg text-warm-700 leading-relaxed">
              {study.solution.description}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-warm-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">1</span>
                  </div>
                  Our Step-by-Step Process
                </h3>
                <div className="space-y-4">
                  {study.solution.approach.map((step, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-warm-700">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden">
              {/* Background accent */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-50/50 to-transparent"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-warm-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-bold">2</span>
                  </div>
                  What We'll Set Up for You
                </h3>
                <div className="space-y-4">
                  {study.solution.tools.map((tool, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <Check className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-warm-700">{tool}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results - Brand Consistent */}
        <section>
          <div className="text-center mb-16">
            <div className="flex justify-center mb-6">
              <div className="rounded-full bg-white shadow-sm p-3">
                <img 
                  src="/images/new_logo.svg" 
                  alt="Tripleshot Logo" 
                  className="h-12" 
                />
              </div>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-warm-900 mb-6">The Results Speak for Themselves</h2>
            <p className="text-lg text-warm-600 max-w-3xl mx-auto">
              Here's what happens when you stop working harder and start working smarter:
            </p>
          </div>

          {/* Metrics Grid - Brand Consistent */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 max-w-5xl mx-auto">
            {Object.entries(study.expectedResults.metrics).map(([key, value], index) => {
              const IconComponent = getMetricIcon(key);
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="w-12 h-12 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-6 h-6 text-brand-primary" />
                  </div>
                  <h4 className="font-bold text-warm-900 mb-2">{key}</h4>
                  <p className="text-2xl font-bold text-brand-primary">{value}</p>
                </div>
              );
            })}
          </div>

          {/* Benefits - Brand Consistent */}
          <div className="bg-brand-primary/10 p-8 rounded-xl mb-12">
            <h3 className="text-2xl font-bold text-warm-900 mb-6 text-center">What This Means for Your Daily Life</h3>
            <div className="grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {study.expectedResults.benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <p className="text-warm-700 font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Long-term Impact - Brand Consistent */}
          <div className="bg-gradient-to-r from-brand-primary to-brand-secondary p-8 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4 text-center">Picture Your Business in 6 Months</h3>
            <p className="text-lg leading-relaxed text-center max-w-4xl mx-auto text-white/80">
              {study.expectedResults.longTermImpact}
            </p>
          </div>
        </section>

        {/* Enhanced Call to Action - Brand Consistent */}
        <section className="bg-brand-primary/10 p-12 rounded-2xl text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-warm-900 mb-6">{study.cta.question}</h2>
          <p className="text-lg text-warm-700 mb-8 max-w-2xl mx-auto">
            {study.cta.description}
          </p>
          <div className="space-y-4">
            <Button 
              variant="cta"
              size="lg"
              onClick={goToContact}
            >
              Schedule a Free Strategy Call
            </Button>
            <p className="text-sm text-warm-600">
              No pressure, no sales pitch. Just a friendly chat about your business goals.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
