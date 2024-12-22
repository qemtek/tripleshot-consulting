import type { BlogPost } from '../components/blog/types';

export const mockPosts: (BlogPost & { slug: string })[] = [
  {
    id: '1',
    slug: 'getting-started-with-ai',
    title: 'Getting Started with AI: A Guide for Small Businesses',
    excerpt: 'Learn how to implement AI solutions in your small business without breaking the bank.',
    content: `
      <h2>Why AI Matters for Small Businesses</h2>
      <p>Artificial Intelligence isn't just for big tech companies anymore. Small businesses can now leverage AI tools to automate tasks, improve customer service, and boost sales.</p>
      
      <h2>Key Areas Where AI Can Help</h2>
      <ul>
        <li>Customer Service Automation</li>
        <li>Sales Forecasting</li>
        <li>Marketing Optimization</li>
        <li>Inventory Management</li>
      </ul>

      <h2>Getting Started</h2>
      <p>The key to successful AI implementation is starting small and scaling gradually. Begin with one area of your business where AI can make the biggest impact.</p>
    `,
    date: '2024-03-21',
    author: {
      id: '1',
      name: 'Dr. Emily Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'AI Research Director with 10+ years of experience'
    },
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=1200',
    readTime: 5,
    tags: ['AI', 'Small Business', 'Getting Started']
  },
  {
    id: '2',
    slug: 'ai-customer-service',
    title: 'How AI is Revolutionizing Customer Service',
    excerpt: 'Discover how AI-powered chatbots and automation tools are transforming customer support.',
    content: `
      <h2>The Evolution of Customer Service</h2>
      <p>Traditional customer service models are being transformed by AI technologies, enabling 24/7 support and faster response times.</p>

      <h2>Benefits of AI in Customer Service</h2>
      <ul>
        <li>24/7 Availability</li>
        <li>Instant Response Times</li>
        <li>Consistent Service Quality</li>
        <li>Cost Reduction</li>
      </ul>

      <h2>Implementation Strategies</h2>
      <p>Learn how to integrate AI chatbots with your existing customer service infrastructure for maximum efficiency.</p>
    `,
    date: '2024-03-20',
    author: {
      id: '2',
      name: 'Sarah Thompson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Customer Success Manager'
    },
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200',
    readTime: 6,
    tags: ['Customer Service', 'Chatbots', 'Automation']
  },
  {
    id: '3',
    slug: 'ai-marketing-strategies',
    title: 'AI-Powered Marketing Strategies for 2024',
    excerpt: 'Explore how AI is transforming digital marketing and helping businesses reach their target audience more effectively.',
    content: `
      <h2>The Future of Marketing is AI-Driven</h2>
      <p>AI technologies are revolutionizing how businesses approach marketing, from content creation to campaign optimization.</p>

      <h2>Key AI Marketing Tools</h2>
      <ul>
        <li>Predictive Analytics</li>
        <li>Content Generation</li>
        <li>Personalization Engines</li>
        <li>Campaign Optimization</li>
      </ul>

      <h2>Implementation Guide</h2>
      <p>Step-by-step guide to incorporating AI tools into your marketing strategy for better results.</p>
    `,
    date: '2024-03-18',
    author: {
      id: '3',
      name: 'David Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Marketing Technology Expert'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200',
    readTime: 7,
    tags: ['Marketing', 'AI Tools', 'Digital Strategy']
  },
  {
    id: '4',
    slug: 'ai-data-analytics',
    title: 'Leveraging AI for Better Business Analytics',
    excerpt: 'How small businesses can use AI-powered analytics to make data-driven decisions.',
    content: `
      <h2>The Power of AI Analytics</h2>
      <p>AI is transforming how businesses analyze data, making it easier to extract actionable insights and make informed decisions.</p>

      <h2>Key Benefits</h2>
      <ul>
        <li>Automated Data Processing</li>
        <li>Predictive Analytics</li>
        <li>Real-time Insights</li>
        <li>Pattern Recognition</li>
      </ul>

      <h2>Getting Started with AI Analytics</h2>
      <p>Learn how to implement AI analytics tools in your business and start making data-driven decisions.</p>
    `,
    date: '2024-03-15',
    author: {
      id: '4',
      name: 'Michael Foster',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Data Analytics Specialist'
    },
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    readTime: 8,
    tags: ['Analytics', 'Data Science', 'Business Intelligence']
  }
];