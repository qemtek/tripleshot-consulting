import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ReviewCard from './ReviewCard';
import { reviews } from './reviewsData';

const Reviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % reviews.length);
  };

  const prev = () => {
    setCurrentIndex((current) => (current - 1 + reviews.length) % reviews.length);
  };

  return (
    <section className="py-40 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-white shadow-sm p-3">
              <img 
                src="/images/logo-no-background.png" 
                alt="Tripleshot Logo" 
                className="h-12" 
              />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-brown-500 mb-6">
            Client Success Stories
          </h2>
          <p className="text-lg text-brown-500 max-w-3xl mx-auto">
            See how UK businesses have transformed their operations with our 3-phase approach
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {reviews.map((review) => (
                  <div key={review.id} className="w-full flex-shrink-0 px-4">
                    <ReviewCard {...review} />
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={prev}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-tan-50 border border-tan-200"
            >
              <ChevronLeft className="w-6 h-6 text-brown-500" />
            </button>
            <button
              onClick={next}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-lg hover:bg-tan-50 border border-tan-200"
            >
              <ChevronRight className="w-6 h-6 text-brown-500" />
            </button>
          </div>

          <div className="flex justify-center mt-8 gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  i === currentIndex ? 'bg-brown-500' : 'bg-tan-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;