import React from 'react';
import { Mail, Calendar, Zap, Handshake, Target, Eye } from 'lucide-react';

const AboutUs = () => {
  const team = [
    {
      name: 'Christopher Collins',
      role: 'CEO/Technology Lead',
      image: '/images/team/chris-collins.jpg',
      specialty: 'Machine Learning & AI Strategy',
      superpower: 'Chris has spent over a decade making complex AI accessible to real businesses. He\'s the guy who takes your "we have too much data but no insights" problem and turns it into competitive advantage. His approach? Start with your business goals, then find the simplest AI solution that delivers maximum impact.',
      email: 'chris@tripleshot-consulting.com'
    },
    {
      name: 'Maria Benitez',
      role: 'Branding & Design Specialist',
      image: '/images/team/maria-benitez.png',
      specialty: 'Brand Identity & Visual Strategy',
      superpower: 'Maria believes your brand should work as hard as you do. She\'s transformed countless businesses from "just another company" to "the one everyone remembers." Her secret? Understanding that great branding isn\'t about looking pretty – it\'s about making your customers feel something.',
      email: 'maria@tripleshot-consulting.com'
    },
    {
      name: 'John Primavesi',
      role: 'Lead Developer',
      image: '/images/team/john-primavesi.jpg',
      specialty: 'Full-Stack Development & AI Integration',
      superpower: 'John is the bridge between "wouldn\'t it be cool if..." and "here\'s how we make it happen." He specializes in taking cutting-edge AI concepts and turning them into rock-solid, scalable systems that your team can actually use. No black boxes, no magic – just smart solutions that work.',
      email: 'john@tripleshot-consulting.com'
    },
    {
      name: 'Harry Godwin',
      role: 'Infrastructure Lead',
      image: '/images/team/harry-godwin.jpg',
      specialty: 'Cloud Infrastructure & DevOps',
      superpower: 'Harry is the reason you\'ll never have to worry about whether your systems can handle growth. He builds infrastructure that scales seamlessly from startup to enterprise, ensuring your technology supports your ambitions rather than limiting them. His motto: "Set it up right the first time."',
      email: 'harry@tripleshot-consulting.com'
    }
  ];

  return (
    <section id="about" className="py-12 bg-gradient-to-br from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-white shadow-sm p-3">
                <img 
                  src="/images/new_logo.svg" 
                  alt="Tripleshot Logo" 
                  className="h-12" 
                />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown-500 mb-4 leading-tight">
              Our Mission
            </h2>
            <p className="text-lg sm:text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
              We're a group of friends, each experienced professionals in their own field, with a common belief- modern technology should work for your business, not against it.
            </p>
          </div>

          {/* Story and Image */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Left Side - Company Story */}
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <div>
                  <h3 className="text-xl font-semibold text-brown-500 mb-3">The Current Landscape</h3>
                  <p className="mb-4">
                    Here's what we see: whilst some businesses are thriving in this new world, others are struggling to keep up with the pace of technology.
                  </p>
                  <p>
                    Data-first companies using automation and AI are pulling ahead with massive competitive advantages. Yet adoption remains surprisingly low. Why?
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brown-500 mb-3">Our Solution</h3>
                  <p className="mb-4">
                    Because most business owners face the same dilemma: they know they need to modernize, but they don't know where to start or who to trust with something so critical.
                  </p>
                  <p>
                    <strong>That's exactly why we exist.</strong> We don't just implement technology – we become your guides. We provide the training, support, and partnership you need to modernize confidently, at a pace that works for your business.
                  </p>
                </div>
              </div>
              
              {/* Right Side - Image Placeholder */}
              <div className="flex items-center justify-center">
                <div className="w-full h-80 bg-gray-200 rounded-lg flex items-center justify-center">
                  <p className="text-gray-500 text-center">
                    Image placeholder<br />
                    <span className="text-sm">Replace with your chosen image</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-white shadow-sm p-3">
                  <img 
                    src="/images/new_logo.svg" 
                    alt="Tripleshot Logo" 
                    className="h-12" 
                  />
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown-500 mb-4 leading-tight">
                Our Values
              </h3>
              <p className="text-lg sm:text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brown-100 rounded-lg mr-4">
                    <Zap className="h-6 w-6 text-brown-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-brown-500">Simplicity Over Complexity</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  The best solution is usually the simplest one that works. We cut through the noise to deliver what you actually need.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brown-100 rounded-lg mr-4">
                    <Handshake className="h-6 w-6 text-brown-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-brown-500">Partnership Over Transactions</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We're not here for quick wins. We build long-term relationships and celebrate your success as our own.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brown-100 rounded-lg mr-4">
                    <Target className="h-6 w-6 text-brown-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-brown-500">Results Over Process</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  We care about outcomes, not how impressive our methods sound. If it doesn't move your business forward, we don't do it.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-brown-100 rounded-lg mr-4">
                    <Eye className="h-6 w-6 text-brown-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-brown-500">Transparency Over Mystique</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  No black boxes, no technical jargon as a shield. We explain everything in plain English so you're always in control.
                </p>
              </div>
            </div>
          </div>

          {/* Team Section */}
          <div className="max-w-6xl mx-auto mb-12">
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="rounded-full bg-white shadow-sm p-3">
                  <img 
                    src="/images/new_logo.svg" 
                    alt="Tripleshot Logo" 
                    className="h-12" 
                  />
                </div>
              </div>
                             <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown-500 mb-4 leading-tight">
                Meet The Team
              </h3>
            </div>
            <div className="space-y-16">
              {team.map((member, index) => (
                <div key={member.name} className={`flex flex-col lg:flex-row gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  <div className="lg:w-1/3 flex justify-center">
                    <div className="relative overflow-hidden rounded-2xl shadow-xl max-w-sm">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-auto object-contain"
                        style={{ imageRendering: 'auto' }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
                    </div>
                  </div>

                  <div className="lg:w-2/3 space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-brown-500 mb-3">{member.name} - {member.role}</h4>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {member.superpower}
                      </p>
                      <p className="text-gray-700 leading-relaxed">
                        Specializing in <strong>{member.specialty}</strong>, {
                          member.name === 'Christopher Collins' ? 'Chris believes in making AI practical, not just impressive. No buzzwords, no over-engineering – just solutions that actually move the needle for your business.' :
                          member.name === 'Maria Benitez' ? 'Maria knows that behind every great business is a brand that tells a story people want to be part of. She helps you find that story and bring it to life.' :
                          member.name === 'John Primavesi' ? 'John has a gift for translating complex technical concepts into systems that your team will actually want to use. He builds with the end user in mind, every time.' :
                          'Harry understands that great infrastructure is invisible – it just works. He designs systems that grow with you, so technology never becomes your bottleneck.'
                        }
                      </p>
                    </div>


                  </div>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default AboutUs; 