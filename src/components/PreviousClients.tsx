import React from 'react';

export default function PreviousClients() {
  const clients = [
    {
      name: 'FreightHitch',
      description: 'Logistics and freight management solutions'
    },
    {
      name: 'FSB Technology',
      description: 'Technology consulting and implementation'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Previous Clients
          </h2>
          <p className="text-lg text-gray-600">
            Trusted by leading companies to deliver exceptional results
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {clients.map((client, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-gray-100 h-16 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl font-bold text-gray-500">
                  {client.name}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {client.name}
              </h3>
              <p className="text-gray-600">
                {client.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}