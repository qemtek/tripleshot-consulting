import React from 'react';
import { Brain, Code, TrendingUp, Users } from 'lucide-react';
import TeamMember from './TeamMember';

const Team = () => {
  const team = [
    {
      name: 'Dr. Emily Chen',
      role: 'AI Research Director',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Ph.D. in Machine Learning with 10+ years experience making AI accessible to businesses.',
      Icon: Brain,
    },
    {
      name: 'David Rodriguez',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Full-stack developer specializing in AI integration and automation solutions.',
      Icon: Code,
    },
    {
      name: 'Sarah Thompson',
      role: 'Business Strategy Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Former small business owner helping others leverage AI for growth.',
      Icon: TrendingUp,
    },
    {
      name: 'Michael Foster',
      role: 'Customer Success Manager',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150',
      bio: 'Dedicated to ensuring businesses get the most from their AI tools.',
      Icon: Users,
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experts dedicated to making AI accessible and effective for your business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <TeamMember key={member.name} {...member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;