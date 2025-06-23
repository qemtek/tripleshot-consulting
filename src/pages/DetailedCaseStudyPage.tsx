import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, Database, Cpu, BarChart3, Clock, Users, Target, CheckCircle, TrendingUp, Zap } from 'lucide-react';

interface TechnicalSection {
  title: string;
  content: string;
  codeExample?: string;
  diagram?: string;
}

interface DetailedCaseStudyData {
  id: string;
  title: string;
  subtitle: string;
  industry: string;
  client: string;
  duration: string;
  location: string;
  teamSize: string;
  projectType: string;
  complexity: 'High' | 'Medium' | 'Low';
  impact: 'Enterprise' | 'Business Critical' | 'Operational';
  
  // Executive Summary
  executiveSummary: string;
  
  // Problem Definition
  businessContext: string;
  technicalChallenges: string[];
  constraints: string[];
  
  // Technical Solution
  solutionOverview: string;
  architecture: string;
  technicalSections: TechnicalSection[];
  
  // Implementation
  developmentApproach: string;
  keyInnovations: string[];
  
  // Results & Impact
  quantitativeResults: {
    metric: string;
    before: string;
    after: string;
    improvement: string;
    impact: string;
  }[];
  
  // Technical Stack
  technologies: {
    category: string;
    tools: string[];
    purpose: string;
  }[];
  
  // Lessons & Future
  lessonsLearned: string[];
  futureEnhancements: string[];
  
  image: string;
}

const detailedCaseStudyData: Record<string, DetailedCaseStudyData> = {
  'smart-routing-logistics': {
    id: 'smart-routing-logistics',
    title: 'Smart Routing Engine',
    subtitle: 'Large-Scale Route Optimization with Real-Time Adaptation',
    industry: 'Logistics & Transportation',
    client: 'London-Based Logistics Startup',
    duration: '6 Months',
    location: 'London, UK',
    teamSize: '1 Data Scientist',
    projectType: 'Production System Development',
    complexity: 'High',
    impact: 'Enterprise',
    
    executiveSummary: 'Engineered a production-grade route optimization system capable of handling 100,000+ delivery nodes with sub-30 minute computation times. The system enabled scaling from 1,000 to 10,000 weekly deliveries without operational team expansion, achieving 90% reduction in manual intervention through advanced algorithmic optimization and real-time adaptation capabilities.',
    
    businessContext: 'The client was revolutionizing logistics in London, but manual route planning was becoming a critical bottleneck. The operations team spent 3-4 hours daily building routes, and this approach couldn\'t scale beyond 1,000 deliveries per week. As the business grew exponentially, the complexity was increasing faster than the team could handle, threatening the company\'s ability to capitalize on market opportunities.',
    
    technicalChallenges: [
      'Route planning complexity increasing exponentially with delivery volume (O(n!) complexity)',
      'Need to handle 100K+ delivery nodes with real-time constraints',
      'Multiple optimization constraints: vehicle capacity, time windows, driver availability, traffic',
      'Required sub-30 minute computation time for practical deployment',
      'No access to affordable traffic-aware routing APIs at required scale',
      'System needed to adapt to real-time changes (cancellations, urgent deliveries)'
    ],
    
    constraints: [
      'Budget limitations for external routing APIs (£5000+ per optimization run)',
      'Legacy systems integration requirements',
      'Peak computation times during morning planning sessions',
      'Need for 99.9% system availability during business hours',
      'Compliance with UK data protection regulations'
    ],
    
    solutionOverview: 'Developed a comprehensive route optimization engine using Google OR-Tools as the core solver, enhanced with custom algorithms for scale and performance. The solution combined mathematical optimization with practical engineering to handle real-world constraints while maintaining computational efficiency.',
    
    architecture: 'The system follows a microservices architecture with containerized components: (1) Data ingestion layer for real-time delivery updates, (2) Preprocessing engine with hexagon-based clustering, (3) Optimization core using OR-Tools with custom heuristics, (4) Results processing and route generation, (5) Real-time adaptation service for dynamic changes.',
    
    technicalSections: [
      {
        title: 'Hexagon-Based Location Clustering',
        content: 'Implemented Uber H3 hexagon library to group nearby delivery locations, reducing API calls by 1500x and computation time from 55 hours to 5 minutes. This spatial indexing approach groups deliveries within 1KM diameter hexagons, dramatically reducing the cost matrix size while maintaining routing accuracy.',

      },
      {
        title: 'Self-Hosted Routing Infrastructure',
        content: 'Built custom routing API using GraphHopper and OpenStreetMap data, eliminating per-request costs and achieving sub-second response times. The system maintains a routing database with regular OSM updates and provides distance/duration calculations for optimization algorithms.',

      },
      {
        title: 'OR-Tools Optimization Engine',
        content: 'Leveraged Google OR-Tools Vehicle Routing Problem (VRP) solver with custom constraints and objectives. Implemented capacity constraints, time windows, and driver availability while optimizing for minimal total travel time and balanced workload distribution.',

      }
    ],
    
    developmentApproach: 'Followed agile development methodology with 2-week sprints, focusing on incremental improvements and continuous testing with real data. Implemented comprehensive monitoring and logging to track system performance and optimization quality. Used A/B testing to validate improvements against existing manual routing.',
    
    keyInnovations: [
      'Symmetrical cost matrix optimization reducing computation by 50%',
      'Job grouping algorithm combining similar deliveries to reduce node count by 60%',
      'Cached routing database eliminating redundant API calls',
      'Horizontal scaling architecture handling 100K+ nodes across multiple servers',
      'Real-time adaptation without full re-optimization using insertion heuristics'
    ],
    
    quantitativeResults: [
      {
        metric: 'Weekly Delivery Capacity',
        before: '1,000 deliveries',
        after: '10,000 deliveries',
        improvement: '1000% increase',
        impact: 'Enabled business scaling without operational team expansion'
      },
      {
        metric: 'Route Planning Time',
        before: '4 hours daily',
        after: '5 minutes daily',
        improvement: '4700% faster',
        impact: 'Operations team freed for strategic work'
      },
      {
        metric: 'Manual Intervention',
        before: '100% routes manual',
        after: '~10% routes need adjustment',
        improvement: '90% reduction',
        impact: 'Significant reduction in human error and workload'
      },
      {
        metric: 'API Cost Optimization',
        before: '£5,000 per run',
        after: '£0 per run',
        improvement: '100% cost elimination',
        impact: 'Massive operational cost savings'
      },
      {
        metric: 'Computation Performance',
        before: '55 hours processing',
        after: '5 minutes processing',
        improvement: '1500x faster',
        impact: 'Real-time optimization capabilities'
      }
    ],
    
    technologies: [
      {
        category: 'Optimization & Algorithms',
        tools: ['Google OR-Tools', 'Custom VRP Algorithms', 'Uber H3 Spatial Indexing'],
        purpose: 'Core optimization engine and spatial data processing'
      },
      {
        category: 'Infrastructure & Deployment',
        tools: ['Docker', 'AWS ECS', 'PostgreSQL', 'Redis'],
        purpose: 'Containerized deployment and data storage'
      },
      {
        category: 'Routing & Mapping',
        tools: ['GraphHopper', 'OpenStreetMap', 'Custom Routing API'],
        purpose: 'Self-hosted routing calculations and mapping data'
      },
      {
        category: 'Development & Monitoring',
        tools: ['Python', 'GitHub Actions', 'Multiprocessing', 'Logging'],
        purpose: 'Development, CI/CD, and system monitoring'
      }
    ],
    
    lessonsLearned: [
      'Practical constraints often require creative solutions beyond standard algorithms',
      'Performance optimization is critical for real-world deployment at scale',
      'Horizontal scaling architecture essential for handling exponential growth',
      'Real-time adaptation capabilities are as important as initial optimization',
      'Infrastructure automation crucial for maintaining complex systems',
      'Cost optimization can be achieved through algorithmic innovation rather than just better hardware'
    ],
    
    futureEnhancements: [
      'Machine learning integration for demand prediction and proactive routing',
      'Real-time traffic integration for dynamic route adjustment',
      'Multi-modal transportation optimization (bikes, vans, walking)',
      'Predictive analytics for delivery time estimation',
      'Integration with IoT sensors for real-time vehicle tracking'
    ],
    
    image: '/images/case-studies/modern-website-desk.jpg'
  },
  
  'dynamic-pricing-ai': {
    id: 'dynamic-pricing-ai',
    title: 'AI-Driven Dynamic Pricing',
    subtitle: 'Machine Learning Price Optimization at Scale',
    industry: 'Pricing Strategy',
    client: 'Moving Services Comparison Platform',
    duration: '6 Months',
    location: 'Remote/UK',
    teamSize: '1 Data Scientist',
    projectType: 'ML Production System',
    complexity: 'High',
    impact: 'Business Critical',
    
    executiveSummary: 'Developed production-grade machine learning models for real-time pricing optimization, achieving 20% profit margin improvements while maintaining competitive win rates. The system processes thousands of daily quote requests with sub-100ms response times and 85%+ prediction accuracy, transforming a cost-plus pricing strategy into a data-driven competitive advantage.',
    
    businessContext: 'The client operated a comparison platform for moving services, connecting customers with service providers. Pricing was based on simple cost-plus formulas that failed to capture market dynamics, customer price sensitivity, or competitive positioning. This left significant profit opportunities on the table and made it difficult to balance competitiveness with profitability.',
    
    technicalChallenges: [
      'Predicting customer price sensitivity across diverse market segments',
      'Real-time pricing optimization with sub-100ms API response requirements',
      'Handling thousands of concurrent pricing requests during peak periods',
      'Balancing profit maximization with competitive win rate maintenance',
      'Limited historical data for cold-start customer segments',
      'Integration with existing quoting systems and CRM workflows'
    ],
    
    constraints: [
      'Existing legacy quoting system integration requirements',
      'Regulatory compliance for transparent pricing practices',
      'Limited computational budget for real-time inference',
      'Need for explainable pricing decisions for sales team',
      'Data privacy requirements for customer information'
    ],
    
    solutionOverview: 'Built an end-to-end machine learning pipeline with customer conversion modeling, real-time pricing API deployment on serverless architecture, and comprehensive A/B testing framework. The system integrates market condition analysis and competitive intelligence for dynamic pricing adjustments while maintaining transparency and explainability.',
    
    architecture: 'Serverless ML architecture using AWS Lambda for real-time inference, with batch training pipelines on AWS SageMaker. Data flows from CRM → Feature Engineering → ML Model → Pricing API → Quote System, with continuous monitoring and model retraining based on conversion feedback.',
    
    technicalSections: [
      {
        title: 'Customer Conversion Modeling',
        content: 'Developed gradient boosting models to predict quote acceptance probability at various price points. Used extensive feature engineering including customer demographics, historical behavior, market conditions, and competitive landscape to achieve 85%+ prediction accuracy.',

      },
      {
        title: 'Dynamic Price Optimization',
        content: 'Implemented price optimization algorithm that maximizes expected profit by finding the optimal balance between conversion probability and margin. Uses gradient-based optimization with business constraints to ensure competitive positioning.',

      },
      {
        title: 'Real-Time Pricing API',
        content: 'Deployed serverless pricing API using AWS Lambda with sub-100ms response times. Includes caching, rate limiting, and comprehensive monitoring to handle thousands of concurrent requests during peak periods.',

      }
    ],
    
    developmentApproach: 'Implemented MLOps best practices with automated model training pipelines, A/B testing framework for pricing strategies, and comprehensive monitoring. Used feature stores for consistent feature engineering and model versioning for safe deployments. Continuous model retraining based on conversion feedback.',
    
    keyInnovations: [
      'Multi-objective optimization balancing conversion probability and profit margin',
      'Real-time feature engineering with sub-100ms latency requirements',
      'Adaptive pricing models that learn from market feedback',
      'Explainable AI features for sales team transparency',
      'Automated A/B testing framework for pricing strategy validation'
    ],
    
    quantitativeResults: [
      {
        metric: 'Profit Margin Improvement',
        before: 'Fixed 15% markup',
        after: '35% average margin',
        improvement: '20% absolute increase',
        impact: 'Significant profit optimization across all quotes'
      },
      {
        metric: 'Conversion Prediction Accuracy',
        before: 'No prediction capability',
        after: '85%+ accuracy',
        improvement: 'New capability',
        impact: 'Data-driven pricing decisions with high confidence'
      },
      {
        metric: 'API Response Time',
        before: 'N/A (manual pricing)',
        after: '<100ms average',
        improvement: 'Real-time capability',
        impact: 'Seamless integration with existing quote workflow'
      },
      {
        metric: 'Quote Processing Volume',
        before: 'Limited by manual review',
        after: '1000s/day automated',
        improvement: 'Unlimited scalability',
        impact: 'Handle peak demand without bottlenecks'
      },
      {
        metric: 'Win Rate Maintenance',
        before: '65% win rate',
        after: '67% win rate',
        improvement: '2% improvement',
        impact: 'Maintained competitiveness while increasing margins'
      }
    ],
    
    technologies: [
      {
        category: 'Machine Learning',
        tools: ['XGBoost', 'Scikit-learn', 'Feature Engineering', 'Model Validation'],
        purpose: 'Core ML models for conversion prediction and price optimization'
      },
      {
        category: 'Cloud Infrastructure',
        tools: ['AWS Lambda', 'AWS SageMaker', 'S3', 'CloudWatch'],
        purpose: 'Serverless deployment and model training infrastructure'
      },
      {
        category: 'Data & APIs',
        tools: ['PostgreSQL', 'REST APIs', 'Redis Cache', 'API Gateway'],
        purpose: 'Data storage, API management, and caching'
      },
      {
        category: 'MLOps & Monitoring',
        tools: ['MLflow', 'A/B Testing', 'Model Monitoring', 'Python'],
        purpose: 'Model lifecycle management and performance monitoring'
      }
    ],
    
    lessonsLearned: [
      'Real-time ML inference requires careful optimization of both model and infrastructure',
      'A/B testing is crucial for validating pricing strategies in production',
      'Explainability features increase adoption by sales teams',
      'Continuous model retraining essential for adapting to market changes',
      'Feature engineering quality directly impacts model performance',
      'Balancing multiple objectives (profit vs. conversion) requires sophisticated optimization'
    ],
    
    futureEnhancements: [
      'Deep learning models for sequence modeling of customer behavior',
      'Real-time feature updates for immediate risk score changes',
      'Personalized retention recommendations based on customer characteristics',
      'Integration with product analytics for more granular usage insights',
      'Expansion to predict other customer lifecycle events (upsell, downgrade)',
      'Multi-model ensemble for improved prediction accuracy'
    ],
    
    image: '/images/case-studies/pricing-strategy.png'
  },
  
  'customer-churn-prediction': {
    id: 'customer-churn-prediction',
    title: 'Predictive Customer Churn System',
    subtitle: 'Early Warning ML Models for Customer Retention',
    industry: 'Customer Analytics',
    client: 'SaaS Platform with High Churn Risk',
    duration: '4 Months',
    location: 'Remote/UK',
    teamSize: '1 Data Scientist',
    projectType: 'Predictive Analytics System',
    complexity: 'Medium',
    impact: 'Business Critical',
    
    executiveSummary: 'Implemented predictive churn modeling system providing 60-90 day early warning with 85%+ accuracy. Reduced customer churn by 40% through targeted retention campaigns, achieving 5:1 ROI on retention investments and 25% increase in customer lifetime value. Transformed customer success from reactive fire-fighting to proactive relationship management.',
    
    businessContext: 'The SaaS platform was experiencing high customer churn rates that were entirely reactive - by the time patterns were noticed, valuable customers had already churned. The customer success team was overwhelmed with manual monitoring, retention marketing spend was inefficient without targeting insights, and the business lacked data-driven insights for proactive intervention.',
    
    technicalChallenges: [
      'Identifying early warning signals 60-90 days before churn occurs',
      'Handling imbalanced datasets with low churn rates (~5-10%)',
      'Feature engineering from diverse data sources (usage, support, billing)',
      'Real-time scoring for thousands of customers with automated alerts',
      'Integrating predictions with existing CRM and marketing automation',
      'Avoiding false positives that waste retention budget on stable customers'
    ],
    
    constraints: [
      'Limited historical churn data for model training',
      'Real-time processing requirements for daily customer scoring',
      'Integration with existing customer success workflows',
      'Privacy compliance for customer data usage',
      'Budget constraints for retention campaign targeting'
    ],
    
    solutionOverview: 'Developed comprehensive customer behavior analysis pipeline with advanced feature engineering, XGBoost-based churn prediction models, and automated alert systems. Created customer health scoring, risk segmentation, and integrated retention campaign management with continuous model monitoring and feedback loops.',
    
    architecture: 'Event-driven architecture with real-time data ingestion from multiple sources (product usage, support tickets, billing events), feature engineering pipeline, ML model inference, and automated alerting system. Daily batch processing for customer scoring with real-time updates for critical events.',
    
    technicalSections: [
      {
        title: 'Feature Engineering Pipeline',
        content: 'Developed comprehensive feature engineering from multiple data sources including product usage patterns, support interaction history, billing events, and engagement metrics. Created rolling window aggregations and trend analysis to capture behavioral changes over time.'
      },
      {
        title: 'XGBoost Churn Prediction Model',
        content: 'Implemented XGBoost classifier optimized for imbalanced churn prediction with custom evaluation metrics. Used SMOTE for handling class imbalance and extensive hyperparameter tuning to maximize recall while maintaining precision for actionable predictions.'
      },
      {
        title: 'Automated Alert System',
        content: 'Built real-time alerting system that monitors customer health scores and triggers automated retention workflows. Integrates with CRM and marketing automation to ensure timely intervention for at-risk customers.'
      }
    ],
    
    developmentApproach: 'Used iterative development with weekly model evaluation cycles. Implemented comprehensive data validation and monitoring to ensure model reliability. Collaborated closely with customer success team to validate predictions and refine alert thresholds based on real-world outcomes.',
    
    keyInnovations: [
      'Multi-dimensional feature engineering capturing behavioral change patterns',
      'Time-series aware model validation preventing data leakage',
      'Risk segmentation system enabling targeted retention strategies',
      'Automated feedback loop for continuous model improvement',
      'Integration with existing customer success workflows for seamless adoption'
    ],
    
    quantitativeResults: [
      {
        metric: 'Churn Rate Reduction',
        before: '12% monthly churn',
        after: '7.2% monthly churn',
        improvement: '40% reduction',
        impact: 'Significant improvement in customer retention'
      },
      {
        metric: 'Prediction Accuracy',
        before: 'No prediction capability',
        after: '85%+ accuracy',
        improvement: 'New capability',
        impact: 'Reliable early warning system for customer success'
      },
      {
        metric: 'Early Warning Period',
        before: 'Reactive (post-churn)',
        after: '60-90 days advance',
        improvement: 'Proactive intervention',
        impact: 'Time for meaningful retention efforts'
      },
      {
        metric: 'Customer Lifetime Value',
        before: '£2,400 average LTV',
        after: '£3,000 average LTV',
        improvement: '25% increase',
        impact: 'Higher revenue per customer through retention'
      },
      {
        metric: 'Retention Campaign ROI',
        before: 'Unmeasured/low',
        after: '5:1 ROI',
        improvement: 'Measurable ROI',
        impact: 'Efficient allocation of retention budget'
      }
    ],
    
    technologies: [
      {
        category: 'Machine Learning',
        tools: ['XGBoost', 'Pandas', 'Scikit-learn', 'SMOTE'],
        purpose: 'Churn prediction modeling and data preprocessing'
      },
      {
        category: 'Data Processing',
        tools: ['Python', 'SQL', 'Apache Airflow', 'Feature Stores'],
        purpose: 'Data pipeline and feature engineering'
      },
      {
        category: 'Infrastructure',
        tools: ['AWS Lambda', 'SNS', 'CloudWatch', 'PostgreSQL'],
        purpose: 'Automated processing and alerting system'
      },
      {
        category: 'Integration',
        tools: ['REST APIs', 'CRM Integration', 'Marketing Automation', 'Webhooks'],
        purpose: 'Customer success and marketing workflow integration'
      }
    ],
    
    lessonsLearned: [
      'Feature engineering quality is more important than model complexity for churn prediction',
      'Time-series validation essential to prevent overly optimistic model performance',
      'Close collaboration with customer success team crucial for practical implementation',
      'Alert fatigue can be prevented with proper risk segmentation and thresholds',
      'Continuous monitoring and feedback loops essential for model accuracy over time',
      'Integration with existing workflows more important than perfect predictions'
    ],
    
    futureEnhancements: [
      'Deep learning models for sequence modeling of customer behavior',
      'Real-time feature updates for immediate risk score changes',
      'Personalized retention recommendations based on customer characteristics',
      'Integration with product analytics for more granular usage insights',
      'Expansion to predict other customer lifecycle events (upsell, downgrade)',
      'Multi-model ensemble for improved prediction accuracy'
    ],
    
    image: '/images/case-studies/customer-service.png'
  }
};

export default function DetailedCaseStudyPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const caseStudy = id ? detailedCaseStudyData[id] : null;
  
  if (!caseStudy) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Case Study Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Return to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-slate-300 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
          </button>
          
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center gap-4 mb-6">
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  caseStudy.complexity === 'High' ? 'bg-red-500/20 text-red-300' :
                  caseStudy.complexity === 'Medium' ? 'bg-yellow-500/20 text-yellow-300' :
                  'bg-green-500/20 text-green-300'
                }`}>
                  {caseStudy.complexity} Complexity
                </div>
                <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                  caseStudy.impact === 'Enterprise' ? 'bg-purple-500/20 text-purple-300' :
                  caseStudy.impact === 'Business Critical' ? 'bg-blue-500/20 text-blue-300' :
                  'bg-gray-500/20 text-gray-300'
                }`}>
                  {caseStudy.impact}
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-bold mb-4">{caseStudy.title}</h1>
              <p className="text-xl text-slate-300 mb-6">{caseStudy.subtitle}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Target className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">Industry:</span>
                  <span>{caseStudy.industry}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">Duration:</span>
                  <span>{caseStudy.duration}</span>
                </div>

                <div className="flex items-center gap-2">
                  <Code className="w-4 h-4 text-slate-400" />
                  <span className="text-slate-400">Type:</span>
                  <span>{caseStudy.projectType}</span>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <img 
                src={caseStudy.image} 
                alt={caseStudy.title}
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3 space-y-12">
            
            {/* Executive Summary */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Executive Summary
              </h2>
              <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-lg">
                <p className="text-gray-800 leading-relaxed text-lg">{caseStudy.executiveSummary}</p>
              </div>
            </section>

            {/* Problem Definition */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-red-600" />
                Problem Definition
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Context</h3>
                  <p className="text-gray-700 leading-relaxed">{caseStudy.businessContext}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Challenges</h3>
                  <ul className="space-y-2">
                    {caseStudy.technicalChallenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Constraints</h3>
                  <ul className="space-y-2">
                    {caseStudy.constraints.map((constraint, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700">{constraint}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Technical Solution */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Cpu className="w-6 h-6 text-green-600" />
                Technical Solution
              </h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Solution Overview</h3>
                  <p className="text-gray-700 leading-relaxed mb-4">{caseStudy.solutionOverview}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">System Architecture</h3>
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700 leading-relaxed">{caseStudy.architecture}</p>
                  </div>
                </div>
                
                {/* Technical Implementation Sections */}
                {caseStudy.technicalSections.map((section, idx) => (
                  <div key={idx} className="border border-gray-200 rounded-lg overflow-hidden">
                    <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                      <h3 className="text-lg font-semibold text-gray-900">{section.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">{section.content}</p>
                      {section.codeExample && (
                        <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-green-400 text-sm">
                            <code>{section.codeExample}</code>
                          </pre>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Implementation & Innovation */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Zap className="w-6 h-6 text-yellow-600" />
                Implementation & Innovation
              </h2>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Development Approach</h3>
                  <p className="text-gray-700 leading-relaxed">{caseStudy.developmentApproach}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Innovations</h3>
                  <ul className="space-y-2">
                    {caseStudy.keyInnovations.map((innovation, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{innovation}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* Results & Impact */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-purple-600" />
                Results & Impact
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6">
                {caseStudy.quantitativeResults.map((result, idx) => (
                  <div key={idx} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                    <h3 className="font-semibold text-gray-900 mb-2">{result.metric}</h3>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Before:</span>
                        <span className="font-medium text-red-600">{result.before}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">After:</span>
                        <span className="font-medium text-green-600">{result.after}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Improvement:</span>
                        <span className="font-bold text-blue-600">{result.improvement}</span>
                      </div>
                    </div>
                    <p className="text-gray-700 text-sm mt-3 pt-3 border-t border-gray-100">{result.impact}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Lessons & Future */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Lessons Learned & Future Enhancements</h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Lessons Learned</h3>
                  <ul className="space-y-2">
                    {caseStudy.lessonsLearned.map((lesson, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{lesson}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Future Enhancements</h3>
                  <ul className="space-y-2">
                    {caseStudy.futureEnhancements.map((enhancement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{enhancement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Project Details */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Project Details</h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="text-gray-600">Client:</span>
                    <div className="font-medium text-gray-900">{caseStudy.client}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Location:</span>
                    <div className="font-medium text-gray-900">{caseStudy.location}</div>
                  </div>
                  <div>
                    <span className="text-gray-600">Duration:</span>
                    <div className="font-medium text-gray-900">{caseStudy.duration}</div>
                  </div>

                </div>
              </div>

              {/* Technology Stack */}
              <div className="bg-gray-50 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Database className="w-4 h-4" />
                  Technology Stack
                </h3>
                <div className="space-y-4">
                  {caseStudy.technologies.map((category, idx) => (
                    <div key={idx}>
                      <h4 className="font-medium text-gray-800 text-sm mb-2">{category.category}</h4>
                      <div className="flex flex-wrap gap-1 mb-2">
                        {category.tools.map((tool, toolIdx) => (
                          <span 
                            key={toolIdx}
                            className="bg-white text-gray-700 px-2 py-1 rounded text-xs font-medium border"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-600">{category.purpose}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 text-white rounded-lg p-6">
                <h3 className="font-semibold mb-3">Interested in Similar Solutions?</h3>
                <p className="text-blue-100 text-sm mb-4">
                  Let's discuss how we can solve your technical challenges with custom AI and data science solutions.
                </p>
                <button
                  onClick={() => {
                    navigate('/');
                    setTimeout(() => {
                      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                    }, 100);
                  }}
                  className="w-full bg-white text-blue-600 px-4 py-2 rounded font-semibold text-sm hover:bg-gray-100 transition-colors"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 