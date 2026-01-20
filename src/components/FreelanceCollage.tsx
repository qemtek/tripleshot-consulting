import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export default function FreelanceCollage() {
  const { elementRef, isVisible } = useScrollAnimation();

  return (
    <div
      ref={elementRef}
      className={`my-12 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Bento box grid - 5 images */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto auto-rows-[180px]">
        {/* Large image - spans 2 columns and 2 rows */}
        <div className="col-span-2 row-span-2">
          <img
            src="/images/team1.jpg"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Top right */}
        <div className="col-span-1">
          <img
            src="/images/team2.jpg"
            alt="Team working together"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Top far right */}
        <div className="col-span-1">
          <img
            src="/images/team4.jpg"
            alt="Coworking space"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Bottom middle */}
        <div className="col-span-1">
          <img
            src="/images/team3.jpg"
            alt="Focused work"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Bottom right */}
        <div className="col-span-1">
          <img
            src="/images/team5.jpg"
            alt="Remote team"
            className="w-full h-full object-cover rounded-2xl shadow-lg"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
}
