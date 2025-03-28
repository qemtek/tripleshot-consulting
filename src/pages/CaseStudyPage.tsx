/** @jsx React.createElement */
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle } from 'lucide-react';
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
      {/* Hero Section */}
      <div className="relative h-[400px] w-full">
        <img
          src={caseStudy.image}
          alt={caseStudy.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
        <div className="container mx-auto px-4 absolute inset-0 flex flex-col justify-center">
          <div className="max-w-3xl">
            <div className="inline-flex items-center bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
              {caseStudy.industry}
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{caseStudy.title}</h1>
            <p className="text-lg text-white/90">{caseStudy.headline}</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-8"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        {/* Main Content */}
        <div className="space-y-12">
          {/* The Problem */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">The Problem They Faced</h2>
            <p className="text-gray-700 text-lg mb-6">{caseStudy.challenge}</p>
            <div className="bg-red-50 p-6 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-3">Key Pain Points:</h3>
              <ul className="space-y-3">
                {caseStudy.detailedContext.keyPainPoints.map((point, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-red-500 mr-2">•</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* How We Helped */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Helped</h2>
            <p className="text-gray-700 text-lg mb-6">{caseStudy.solution}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {caseStudy.scope.map((item, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* The Results */}
          <section className="bg-white rounded-xl shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">The Results</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Before:</h3>
                <ul className="space-y-3">
                  {caseStudy.transformation.before.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-red-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">After:</h3>
                <ul className="space-y-3">
                  {caseStudy.transformation.after.map((item, index) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-green-500 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              {Object.entries(caseStudy.results.metrics).map(([key, value]) => (
                <div key={key} className="flex items-start">
                  <span className="text-lg mr-3">{key.split(' ')[0]}</span>
                  <div>
                    <div className="font-medium text-gray-900">{value}</div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-blue-600 rounded-xl shadow-sm p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">{caseStudy.cta.question}</h2>
            <p className="text-lg mb-8 text-white/90">{caseStudy.cta.description}</p>
            <Link
              to="/#contact-us"
              className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
            >
              Let's Talk About Your Business
            </Link>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
