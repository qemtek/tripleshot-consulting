import React from 'react';
import { Star } from 'lucide-react';
import type { Review } from './reviewsData';

const ReviewCard = ({ name, role, company, image, content, rating }: Review) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg border border-tan-100 relative">
      <div className="absolute top-6 right-6 flex">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
        ))}
      </div>
      <div className="flex items-center mb-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-tan-200"
        />
        <div>
          <h4 className="font-semibold text-brown-500 text-lg">{name}</h4>
          <p className="text-brown-400">{role}</p>
          <p className="text-brown-400 font-medium">{company}</p>
        </div>
      </div>
      <p className="text-brown-500 text-lg leading-relaxed italic">&ldquo;{content}&rdquo;</p>
    </div>
  );
}

export default ReviewCard;