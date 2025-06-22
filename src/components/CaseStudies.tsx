import { CaseStudyCard } from './case-studies/CaseStudyCard';
import { caseStudies } from '../data/caseStudies';
import type { CaseStudy } from '../types/CaseStudy';

export default function CaseStudies() {
  return (
    <section id="our-approach-in-action" className="py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-white shadow-sm p-3">
              <img 
                src="/images/logo_white.png" 
                alt="Tripleshot Logo" 
                className="h-12" 
              />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brown-500 mb-6">
            How We Can Help
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study: CaseStudy) => (
            <div key={study.id}>
              <CaseStudyCard study={study} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}