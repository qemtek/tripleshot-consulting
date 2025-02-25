import { LucideIcon } from 'lucide-react';

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  summary: string;
  challenge: string;
  solution: string;
  scope: string[];
  image: string;
  Icon: LucideIcon;
  detailedContext: {
    industryBackground: string;
    businessChallenges: string[];
  };
  implementation: {
    approach: string[];
    technologies: string[];
    timeline: {
      phase: string;
      duration: string;
      description: string;
    }[];
  };
  results: {
    metrics: Record<string, string>;
    longTermImpact: string;
  };
  lessonsLearned: {
    successFactors: string[];
    challenges: string[];
    bestPractices: string[];
  };
}
