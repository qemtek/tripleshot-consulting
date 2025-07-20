import React from 'react';
import { Truck, Settings, Star, ArrowRight, CheckCircle } from 'lucide-react';

export default function PreviousClients() {
  const clients = [
    {
      name: 'FreightHitch',
      description: 'Logistics and freight management solutions',
      icon: Truck,
      industry: 'Logistics & Transportation',
      results: [
        '40% reduction in delivery times',
        'Automated 80% of manual processes',
        'Real-time tracking for all shipments'
      ],
      challenge: 'Streamline freight operations and improve delivery efficiency',
      solution: 'Custom logistics platform with AI-powered route optimization',
      color: 'from-blue-600 to-cyan-600'
    },
    {
      name: 'FSB Technology',
      description: 'Technology consulting and implementation',
      icon: Settings,
      industry: 'Technology Services',
      results: [
        '60% increase in client satisfaction',
        'Reduced project delivery time by 35%',
        'Improved team collaboration by 50%'
      ],
      challenge: 'Modernize project management and client communication systems',
      solution: 'Integrated project management dashboard with client portal',
      color: 'from-purple-600 to-pink-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Previous Clients
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies to deliver exceptional results and drive meaningful transformation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {clients.map((client, index) => (
            <div key={index} className="group">
              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 border border-gray-100">
                {/* Header */}
                <div className="flex items-center mb-6">
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${client.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <client.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">
                      {client.name}
                    </h3>
                    <p className="text-gray-600 text-sm font-medium">
                      {client.industry}
                    </p>
                  </div>
                </div>
                
                {/* Challenge */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Challenge</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {client.challenge}
                  </p>
                </div>
                
                {/* Solution */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Solution</h4>
                  <p className="text-gray-600 leading-relaxed">
                    {client.solution}
                  </p>
                </div>
                
                {/* Results */}
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Results</h4>
                  <div className="space-y-3">
                    {client.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* CTA */}
                <div className="pt-6 border-t border-gray-100">
                  <button className="group flex items-center text-gray-600 hover:text-blue-600 transition-colors">
                    <span className="text-sm font-medium">View Full Case Study</span>
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Success Stats */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-2xl border border-blue-100">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">100%</div>
              <div className="text-gray-700">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">45%</div>
              <div className="text-gray-700">Average Efficiency Gain</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">2+</div>
              <div className="text-gray-700">Years Partnership</div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to join our success stories?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Let's discuss how we can help transform your business operations
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
            Start Your Transformation
          </button>
        </div>
      </div>
    </section>
  );
}