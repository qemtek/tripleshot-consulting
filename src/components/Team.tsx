import React from 'react';
import { Brain, Code, TrendingUp, Users } from 'lucide-react';
import TeamMember from './TeamMember';

const Team = () => {
  const team = [
    {
      name: 'Christopher Collins',
      role: 'CEO/Technology Lead',
      image: '/images/team/chris-collins.jpg',
      bio: 'Machine Learning Expert with 10+ years experience making AI accessible to businesses.',
      Icon: Brain,
    },
    {
      name: 'John Primavesi',
      role: 'Lead Developer',
      image: '/images/team/john-primavesi.jpg',
      bio: 'Full-stack developer specializing in AI integration and automation solutions.',
      Icon: Code,
    },
    {
      name: 'Harry Godwin',
      role: 'Infrastructure Lead',
      image: '/images/team/harry-godwin.jpg',
      bio: 'Dedicated to ensuring businesses get the most from their AI tools.',
      Icon: Users,
    },
    {
      name: 'Maria Benitez',
      role: 'Branding & Design Specialist',
      image: '/images/team/maria-benitez.png',
      bio: 'Expert in helping businesses find their identity through branding and design.',
      Icon: TrendingUp,
    }
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