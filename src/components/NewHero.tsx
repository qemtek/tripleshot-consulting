import React from 'react';
import { Zap } from 'lucide-react';
import Button from './ui/Button';

export default function NewHero() {
  const goToContact = () => {
    window.location.href = '/contact';
  };


  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <picture>
          <source srcSet="/images/hero.webp" type="image/webp" />
          <img
            src="/images/hero.jpeg"
            alt="Team collaboration"
            className="w-full h-full object-cover object-center"
            loading="eager"
          />
        </picture>
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1958]/60 via-[#0A1958]/50 to-black/60 z-10"></div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 z-30 bg-black/5" 
           style={{
             backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Ccircle cx='30' cy='30' r='1.5'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
           }}>
      </div>
      
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center min-h-screen">
        <div className="text-center animate-fade-in">
          {/* Simplified icon */}
          <div className="mb-8 flex justify-center">
            <img src="/images/new_logo.svg" alt="Tripleshot Logo" className="h-16 w-16" />
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-8 bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent leading-tight">
            Looking to<br />
            <span className="text-[calc(1em+10px)]">level up your business?</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-12 max-w-3xl mx-auto text-gray-200 leading-relaxed font-medium">
            We supercharge businesses with AI, Data Science, Software Engineering and Digital Branding solutions, helping you stay competitive in a crowded market.
          </p>
          
          <div className="flex justify-center mb-16">
            <Button 
              variant="cta"
              size="lg"
              onClick={goToContact}
            >
              Get Started Today
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}