import React from 'react';
import type { LucideIcon } from 'lucide-react';

export interface CaseStudyProps {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  scope: string[];
  timeline: string;
  investment: string;
  image: string;
  Icon: LucideIcon;
}

const CaseStudyCard = ({
  title,
  industry,
  challenge,
  solution,
  scope,
  timeline,
  investment,
  image,
  Icon,
}: CaseStudyProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <div className="flex items-center gap-2 mb-2">
            <Icon className="h-6 w-6" />
            <h3 className="text-xl font-semibold">{title}</h3>
          </div>
          <p className="text-sm opacity-90">{industry}</p>
        </div>
      </div>
      
      <div className="p-6">
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Challenge</h4>
          <p className="text-gray-700">{challenge}</p>
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Solution</h4>
          <p className="text-gray-700">{solution}</p>
        </div>

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-gray-500 uppercase mb-2">Project Scope</h4>
          <ul className="space-y-2">
            {scope.map((item, index) => (
              <li key={index} className="flex items-start gap-2">
                <span className="h-2 w-2 bg-indigo-600 rounded-full mt-2" />
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Timeline</p>
            <p className="text-lg font-semibold text-indigo-600">{timeline}</p>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm text-gray-600 mb-1">Investment</p>
            <p className="text-lg font-semibold text-indigo-600">{investment}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyCard;