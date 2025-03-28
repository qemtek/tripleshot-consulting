import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../../types/CaseStudy';

type CaseStudyCardProps = Pick<CaseStudy, 'id' | 'title' | 'industry' | 'headline' | 'summary' | 'image' | 'transformation'>;

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  id,
  title,
  industry,
  headline,
  summary,
  image,
  transformation
}) => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden flex flex-col h-full transition-all hover:shadow-md">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={`${title} illustration`} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end">
          <div className="p-4 text-white">
            <div className="text-xs font-medium bg-blue-600 inline-block px-2 py-1 rounded mb-2">
              {industry}
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h4 className="text-lg font-semibold text-gray-900 mb-2">{headline}</h4>
        <p className="text-gray-700 mb-6">{summary}</p>
        
        {transformation && (
          <div className="mb-6 grid grid-cols-2 gap-4 bg-gray-50 p-4 rounded-lg">
            <div>
              <h5 className="text-sm font-semibold text-gray-600 mb-2">Before</h5>
              <ul className="space-y-2">
                {transformation.before.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700">• {item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h5 className="text-sm font-semibold text-gray-600 mb-2">After</h5>
              <ul className="space-y-2">
                {transformation.after.map((item, index) => (
                  <li key={index} className="text-sm text-gray-700">• {item}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        <Link 
          to={`/case-studies/${id}`}
          className="mt-auto inline-flex items-center text-blue-600 font-medium hover:text-blue-800"
        >
          Read the full story
          <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CaseStudyCard;