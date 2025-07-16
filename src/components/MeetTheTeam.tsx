import React from 'react';

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Chris',
      role: 'AI & Data Science',
      description: 'Specializes in machine learning, predictive analytics, and AI-driven solutions.'
    },
    {
      name: 'Maria',
      role: 'Branding & Web Design',
      description: 'Creates compelling brand identities and user-centered web experiences.'
    },
    {
      name: 'John',
      role: 'Marketing & SEO',
      description: 'Drives growth through strategic marketing and search engine optimization.'
    },
    {
      name: 'Harry',
      role: 'Software Development',
      description: 'Builds robust, scalable software solutions and technical architectures.'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet the Team
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              <div className="bg-gray-100 w-32 h-32 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-gray-500">
                  {member.name[0]}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {member.name}
              </h3>
              <p className="text-indigo-600 font-medium mb-3">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}