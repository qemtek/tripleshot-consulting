import React from 'react';
import { Users, Target, Lightbulb, Award } from 'lucide-react';

const AboutUs = () => {
  const values = [
    {
      icon: Target,
      title: "Practical Focus",
      description: "Real solutions that work in the real world, not just in theory."
    },
    {
      icon: Users,
      title: "Personal Service", 
      description: "We work closely with you, not as distant consultants but as partners."
    },
    {
      icon: Lightbulb,
      title: "Clear Communication",
      description: "No jargon, no confusion – just clear explanations you can understand."
    },
    {
      icon: Award,
      title: "Proven Results",
      description: "Track record of delivering measurable improvements for our clients."
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
                  src="/images/logo-no-background.png" 
                  alt="Tripleshot Logo" 
                  className="h-12" 
                />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-brown-500 mb-4 leading-tight">
              Our Story
            </h2>
            <p className="text-lg sm:text-xl text-brown-600 max-w-3xl mx-auto leading-relaxed">
              We're a team of experienced consultants who believe that modern technology should work for your business, not against it.
            </p>
          </div>

          {/* Main Content */}
          <div className="space-y-12 mb-12">
            {/* Story Section */}
            <div className="text-center max-w-4xl mx-auto space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-brown-500 leading-tight">
                Making AI Accessible for Everyone
              </h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  Founded with a simple belief: small and mid-size companies shouldn't need a computer science degree to benefit from modern technology. We've seen too many businesses struggle with overly complex solutions that promise the world but deliver frustration.
                </p>
                <p>
                  That's why we focus on practical, step-by-step approaches that actually work. Our team combines deep technical expertise with real-world business experience to deliver solutions that make sense for your company's size, budget, and goals.
                </p>
                <p>
                  We don't just implement technology – we ensure you understand it, can use it effectively, and see real results from day one.
                </p>
              </div>
            </div>

            {/* Values Section - Hidden on mobile, visible on desktop */}
            <div className="space-y-6 hidden sm:block">
              {/* Desktop Grid - 2-column on larger screens */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {values.map((value, index) => {
                  const IconComponent = value.icon;
                  return (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                      <div className="w-12 h-12 bg-tan-500/20 rounded-lg flex items-center justify-center mb-4">
                        <IconComponent className="w-6 h-6 text-brown-500" />
                      </div>
                      <h4 className="font-semibold text-brown-500 mb-2">{value.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center sm:bg-tan-500/10 p-8 sm:rounded-2xl">
            <h3 className="text-2xl font-bold text-brown-500 mb-4">
              Ready to Work with a Team That Gets It?
            </h3>
            <p className="text-brown-600 mb-6 max-w-2xl mx-auto leading-relaxed">
              We understand the challenges facing UK businesses today. Let's talk about how we can help you modernize without the headaches.
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 bg-brown-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-brown-600 transition-colors duration-300"
            >
              Start the Conversation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 