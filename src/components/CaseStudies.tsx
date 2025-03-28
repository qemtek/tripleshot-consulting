/** @jsx React.createElement */
import React from 'react';
import CaseStudyCard from './case-studies/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';

const CaseStudies = () => {
  return (
    <section id="case-studies" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            How We Help Businesses Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Real success stories from businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <CaseStudyCard 
              key={study.id}
              id={study.id}
              title={study.title}
              industry={study.industry}
              headline={study.headline}
              summary={study.summary}
              image={study.image}
              transformation={study.transformation}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;