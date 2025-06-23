import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from './reviewsData';

const ReviewCard = ({ name, role, company, image, content, rating }: Review) => {
  return (
    <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg border border-tan-100 relative">
      {/* Stars - Desktop: top-right, Mobile: below name */}
      <div className="hidden sm:flex absolute top-6 right-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
        ))}
      </div>
      
      <div className="flex items-start mb-6">
        <img
          src={image}
          alt={name}
          className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover mr-3 sm:mr-4 border-2 border-tan-200 flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-semibold text-brown-500 text-base sm:text-lg">{name}</h4>
          <p className="text-brown-400 text-sm sm:text-base">{role}</p>
          <p className="text-brown-400 font-medium text-sm sm:text-base">{company}</p>
          
          {/* Stars - Mobile: below company */}
          <div className="flex sm:hidden mt-2">
            {[...Array(rating)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500 fill-current" />
            ))}
          </div>
        </div>
      </div>
      <p className="text-brown-500 text-base sm:text-lg leading-relaxed italic">&ldquo;{content}&rdquo;</p>
    </div>
  );
}

export default ReviewCard;