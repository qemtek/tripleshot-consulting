import { LucideIcon } from 'lucide-react';

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  headline: string;
  summary: string;
  challenge: string;
  solution: string;
  scope: string[];
  image: string;
  Icon: LucideIcon;
  detailedContext: {
    industryBackground: string;
    keyPainPoints: string[];
  };
  process: {
    steps: {
      title: string;
      description: string;
    }[];
    timeline: {
      phase: string;
      duration: string;
      description: string;
    }[];
    tools: string[];
  };
  transformation: {
    before: string[];
    after: string[];
  };
  results: {
    metrics: Record<string, string>;
    longTermImpact: string;
  };
  cta: {
    question: string;
    description: string;
  };
}
