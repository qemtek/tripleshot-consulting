import React from 'react';
import type { LucideIcon } from 'lucide-react';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  bio: string;
  Icon: LucideIcon;
}

const TeamMember = ({ name, role, image, bio, Icon }: TeamMemberProps) => {
  return (
    <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="relative mb-4">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 rounded-full object-cover"
        />
        <div className="absolute bottom-0 right-0 bg-indigo-600 p-2 rounded-full">
          <Icon className="h-5 w-5 text-white" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-indigo-600 mb-2">{role}</p>
      <p className="text-gray-600 text-center">{bio}</p>
    </div>
  );
};

export default TeamMember;