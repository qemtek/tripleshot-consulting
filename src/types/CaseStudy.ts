import { LucideIcon } from 'lucide-react';

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  headline: string;
  summary: string;
  problem: {
    description: string;
    painPoints: string[];
  };
  solution: {
    description: string;
    approach: string[];
    tools: string[];
  };
  expectedResults: {
    benefits: string[];
    metrics: Record<string, string>;
    longTermImpact: string;
  };
  image: string;
  Icon: LucideIcon;
  cta: {
    question: string;
    description: string;
  };
}
