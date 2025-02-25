import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle, Download, ExternalLink, X, Settings } from 'lucide-react';
import { getCaseStudyById } from '../data/caseStudies';

const CaseStudyPage = () => {
  const { id } = useParams<{ id: string }>();
  const caseStudy = getCaseStudyById(id || '');

  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <h1>Case study not found</h1>
          <Link to="/" className="text-blue-600 hover:text-blue-800">
            Return to homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Gradient Overlay */}
      <div className="relative h-[500px] w-full">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        <div className="container mx-auto px-4 absolute inset-0 flex flex-col justify-center">
          <div className="max-w-4xl">
            <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {caseStudy.industry}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{caseStudy.title}</h1>
            <p className="text-xl text-white/90 max-w-2xl">{caseStudy.summary}</p>
            <div className="mt-4 bg-white/20 backdrop-blur-sm inline-block px-3 py-1 rounded-md">
              <p className="text-sm text-white">
                Hypothetical Case Study - Potential Scenario
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Quick Stats Section */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
              <p className="text-gray-700">{caseStudy.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Solution</h2>
              <p className="text-gray-700">{caseStudy.solution}</p>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Project Scope</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {caseStudy.scope.map((item) => (
                <div key={item} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content Column */}
          <div className="lg:col-span-2">
            {/* Context Section */}
            <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Context & Challenges</h2>
              
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Industry Background</h3>
                <p className="text-gray-700 leading-relaxed">{caseStudy.detailedContext.industryBackground}</p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Business Challenges</h3>
                <ul className="space-y-2">
                  {caseStudy.detailedContext.businessChallenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center mr-3 flex-shrink-0 mt-0.5">
                        <X className="h-3 w-3" />
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* Implementation Section */}
            <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Would Help You</h2>
              <div className="space-y-6">
                {caseStudy.implementation.approach.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-gray-700">{step}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-4">What The Process Looks Like</h3>
              <div className="space-y-6 mb-8">
                {caseStudy.implementation.timeline.map((phase, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-0 h-full">
                      <div className="h-full w-0.5 bg-blue-200"></div>
                    </div>
                    <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-blue-500 -ml-2"></div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">{phase.phase}</h4>
                      <p className="text-sm text-blue-600 font-medium mb-2">{phase.duration}</p>
                      <p className="text-gray-600">{phase.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools We Might Use</h3>
              <div className="grid grid-cols-2 gap-3">
                {caseStudy.implementation.technologies.map((tech, index) => (
                  <div key={index} className="flex items-center bg-gray-50 p-3 rounded-lg">
                    <div className="h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mr-3">
                      <Settings className="h-4 w-4" />
                    </div>
                    <span className="text-gray-700">{tech}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Results Section */}
            <section className="bg-white rounded-xl shadow-sm p-8 mb-8">
              <div className="mb-4 bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> This case study shows how we could help a business like yours. It's based on our research and experience, but represents a typical scenario rather than a specific client.
                </p>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What You Could Achieve</h2>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {Object.entries(caseStudy.results.metrics).map(([key, value]) => (
                  <div key={key} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="text-sm font-semibold text-gray-500 uppercase mb-1">{key}</h3>
                    <p className="text-xl font-bold text-blue-600">{value}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Long-term Benefits</h3>
                <div className="prose prose-blue max-w-none">
                  {caseStudy.results.longTermImpact}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-8 sticky top-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We'll Cover</h3>
              <ul className="space-y-2">
                {caseStudy.scope.map((item) => (
                  <li key={item} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-8 pt-6 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Have Questions?</h3>
                <p className="text-gray-600 mb-4">We're here to help you understand how these approaches could work for your business.</p>
                <a 
                  href="/#contact" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg flex items-center justify-center"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <section className="bg-blue-600 rounded-xl shadow-sm p-8 mb-12 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Would you like to explore similar solutions for your business?</h2>
          <p className="text-white text-opacity-90 mb-6 max-w-2xl mx-auto">
            We'd love to learn about your specific challenges and discuss how we could help you achieve similar results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/#contact" 
              className="bg-white text-blue-600 hover:bg-blue-50 font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center"
            >
              Schedule a Free Consultation
            </a>
            <a 
              href="/#services" 
              className="bg-blue-700 text-white hover:bg-blue-800 font-medium py-3 px-6 rounded-lg inline-flex items-center justify-center"
            >
              View Our Services
            </a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CaseStudyPage;
