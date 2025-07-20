import React from 'react';
import { Users, Target, Shield } from 'lucide-react';

export default function WhoWeAre() {
  const features = [
    {
      icon: Users,
      title: "Expert Team",
      description: "A small group of professionals dedicated to delivering high quality solutions to complex problems."
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "We specialise in helping businesses reach that next level by unlocking modern technology and providing the tools to flourish."
    },
    {
      icon: Shield,
      title: "Trusted Partnership",
      description: "We develop close relationships with our clients, helping them every step of the way. Your business is always in safe hands."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Who We Are
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
              <div className="mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Our combined industry experience means your business is always in safe hands. 
              We don't just deliver solutions – we build lasting partnerships that drive sustainable growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}