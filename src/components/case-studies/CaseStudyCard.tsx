import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import type { CaseStudy } from '../../types/CaseStudy';
import { Card, CardContent } from '../ui/card';

interface CaseStudyCardProps {
  study: CaseStudy;
}

export function CaseStudyCard({ study }: CaseStudyCardProps) {
  const { id, title, summary, industry, image } = study;
  
  return (
    <Card hover className="h-full overflow-hidden group flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
            {industry}
          </span>
        </div>
      </div>
      <CardContent className="p-6 flex-1 flex flex-col bg-gradient-to-br from-white to-warm-50/50">
        <h3 className="font-display text-xl font-bold text-warm-900 mb-3 group-hover:text-brand-primary transition-colors leading-tight">{title}</h3>
        <p className="text-warm-600 mb-6 leading-relaxed text-sm">{summary}</p>
        <div className="mt-auto">
          <Link 
            to={`/case-studies/${id}`}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-brand-primary/10 to-brand-secondary/10 text-brand-primary font-semibold hover:from-brand-primary hover:to-brand-secondary hover:text-white rounded-lg transition-all duration-300 group/link border border-brand-primary/20 hover:border-transparent shadow-soft hover:shadow-medium"
          >
            Read Case Study
            <ArrowRight className="ml-2 h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}