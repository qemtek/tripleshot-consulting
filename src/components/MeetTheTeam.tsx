import React from 'react';
import { Brain, Palette, TrendingUp, Code, Linkedin, Github, Mail } from 'lucide-react';

export default function MeetTheTeam() {
  const teamMembers = [
    {
      name: 'Chris',
      role: 'AI & Data Science',
      description: 'Specializes in machine learning, predictive analytics, and AI-driven solutions that transform business operations.',
      icon: Brain,
      color: 'from-blue-600 to-cyan-600',
      skills: ['Machine Learning', 'Python', 'TensorFlow', 'Data Analytics']
    },
    {
      name: 'Maria',
      role: 'Branding & Web Design',
      description: 'Creates compelling brand identities and user-centered web experiences that drive engagement.',
      icon: Palette,
      color: 'from-purple-600 to-pink-600',
      skills: ['UI/UX Design', 'Brand Strategy', 'Figma', 'Creative Direction']
    },
    {
      name: 'John',
      role: 'Marketing & SEO',
      description: 'Drives growth through strategic marketing and search engine optimization techniques.',
      icon: TrendingUp,
      color: 'from-green-600 to-emerald-600',
      skills: ['SEO', 'Content Marketing', 'Analytics', 'Growth Hacking']
    },
    {
      name: 'Harry',
      role: 'Software Development',
      description: 'Builds robust, scalable software solutions and technical architectures that perform at scale.',
      icon: Code,
      color: 'from-orange-600 to-red-600',
      skills: ['Full Stack', 'React', 'Node.js', 'DevOps']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet the Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our diverse team of experts brings together decades of experience in technology, design, and business strategy
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 text-center h-full">
                {/* Profile Image/Icon */}
                <div className="relative mb-6">
                  <div className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.color} mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <member.icon className="h-12 w-12 text-white" />
                  </div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                    <div className={`w-8 h-8 rounded-full bg-gradient-to-r ${member.color} flex items-center justify-center`}>
                      <span className="text-white font-bold text-sm">{member.name[0]}</span>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                
                <p className={`font-semibold mb-4 bg-gradient-to-r ${member.color} bg-clip-text text-transparent`}>
                  {member.role}
                </p>
                
                <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                  {member.description}
                </p>
                
                {/* Skills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Social Links */}
                <div className="flex justify-center space-x-3">
                  <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-blue-100 flex items-center justify-center transition-colors group">
                    <Linkedin className="h-5 w-5 text-gray-600 group-hover:text-blue-600" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-800 flex items-center justify-center transition-colors group">
                    <Github className="h-5 w-5 text-gray-600 group-hover:text-white" />
                  </button>
                  <button className="w-10 h-10 rounded-full bg-gray-100 hover:bg-green-100 flex items-center justify-center transition-colors group">
                    <Mail className="h-5 w-5 text-gray-600 group-hover:text-green-600" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to work with us?</h3>
            <p className="text-lg text-gray-700 mb-6">
              Our team is ready to tackle your next challenge. Let's build something amazing together.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}