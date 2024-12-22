import React from 'react';
import { companies } from './companiesData';

const Companies = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join the growing list of companies transforming their business with our AI solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {companies.map((company) => (
            <div
              key={company.name}
              className="group relative aspect-[2/1] flex items-center justify-center p-4"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="max-h-12 w-auto object-contain filter grayscale transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                <div className="text-center">
                  <p className="font-semibold text-gray-900">{company.name}</p>
                  <p className="text-sm text-gray-600">{company.industry}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;