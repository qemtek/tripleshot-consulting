import React from 'react';

const Mission = () => {
  const values = [
    {
      title: 'Our Mission',
      description: 'To provide practical technology solutions that help businesses streamline operations, improve customer service, and make better decisions.',
    },
    {
      title: 'Our Approach',
      description: 'We focus on real-world business challenges and deliver solutions that are practical, easy to implement, and deliver measurable results.',
    },
    {
      title: 'Our Vision',
      description: 'A future where businesses of all sizes can leverage the right technology tools to achieve their goals without unnecessary complexity.',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value) => (
            <div key={value.title} className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;