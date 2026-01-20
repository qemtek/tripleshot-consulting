import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import FreelanceCollage from './FreelanceCollage';

const teamMembers = [
  {
    name: 'Chris',
    role: 'AI & Data Science',
    image: '/images/team/chris-collins-upscaled.jpg',
    color: 'emerald' as const,
    bio: 'Machine learning expert with 10+ years building intelligent systems for Fortune 500 companies. Turns complex data problems into elegant solutions.',
  },
  {
    name: 'Maria',
    role: 'Branding & Web Design',
    image: '/images/team/maria-benitez-upscaled.jpg',
    color: 'purple' as const,
    bio: 'Creative visionary who has designed visual identities for over 100 companies. Transforms brands into memorable experiences.',
  },
];

const colorConfig = {
  cyan: {
    textColor: 'text-accent',
    glowClass: 'glow-pulse-cyan',
  },
  purple: {
    textColor: 'text-purple',
    glowClass: 'glow-pulse-purple',
  },
  emerald: {
    textColor: 'text-emerald',
    glowClass: 'glow-pulse-emerald',
  },
};

export default function MeetTheTeam() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-emerald/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-purple/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={elementRef}
          className={`text-center mb-8 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-display-sm md:text-display-md font-bold text-gray-900 mb-6">
            Meet the people behind Tripleshot
          </h2>

          {/* Freelance network text */}
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            Behind Tripleshot is a network of skilled freelancers that we have had the pleasure of working with throughout our careers. Their professionalism and ability to adapt in the face of a rapidly changing technology landscape have made Tripleshot what it is today.
          </p>
        </div>

        {/* Interactive collage */}
        <FreelanceCollage />

        {/* Core team intro */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="max-w-3xl mx-auto text-gray-600 text-lg">
            At its core are Chris and Maria, two experts in their respective fields, with almost two decades of combined experience.
          </p>
        </div>

        {/* Team members - side by side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {teamMembers.map((member, index) => {
            const config = colorConfig[member.color];

            return (
              <div
                key={index}
                className={`flex flex-col items-center transition-all duration-700 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Large photo with glow effect */}
                <div className="relative mb-8">
                  <div className={`relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden ${config.glowClass}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Name and role */}
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
                <p className={`text-sm font-medium ${config.textColor} mb-4`}>{member.role}</p>

                {/* Bio */}
                <p className="text-gray-600 text-center max-w-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
