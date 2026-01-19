import type { BlogPost } from '../components/blog/types';

export const mockPosts: (BlogPost & { slug: string })[] = [
  {
    id: '1',
    slug: 'sports-trading-101-a-brief-introduction',
    title: 'Sports Trading 101: A Brief Introduction',
    excerpt: 'The article introduces foundational concepts for approaching sports betting professionally rather than as entertainment. Chris Collins, drawing from four years of trading experience, covers essential principles including expected value calculations, odds interpretation, edge identification, commission impacts, closing line value, variance management, and the Kelly Criterion for bet sizing.',
    content: '',
    date: '2026-01-19',
    author: {
      id: '1',
      name: 'Chris Collins',
      avatar: '/images/team/chris-collins.jpg',
      bio: 'Sports Trading Expert with 4+ years of experience'
    },
    image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc5b26ffd-9e0a-4c94-a8eb-d869f13bc87c_2085x579.png',
    readTime: 8,
    tags: ['Sports Trading', 'Betting', 'Analytics'],
    externalUrl: 'https://chriscollins756.substack.com/p/sports-trading-101-a-brief-introduction'
  }
];