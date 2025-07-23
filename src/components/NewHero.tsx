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
      <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/50 via-indigo-600/50 to-brand-secondary/50 z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute inset-0 z-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-brand-accent/10 to-yellow-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
      
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
            <div className="bg-gradient-to-r from-brand-accent to-yellow-400 p-4 rounded-2xl">
              <Zap className="h-12 w-12 text-white" />
            </div>
          </div>
          
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-white to-gray-200 bg-clip-text text-transparent leading-tight">
            Tripleshot Solutions
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 max-w-4xl mx-auto text-gray-200 leading-relaxed font-medium">
            Delivering high quality solutions to complex problems
          </p>
          
          <p className="text-sm sm:text-base md:text-lg mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
            A small group of professionals helping businesses reach their next level through modern technology and close partnerships.
          </p>
          
          <div className="flex justify-center mb-16">
            <Button 
              size="lg"
              onClick={goToContact}
              className="bg-gradient-to-r from-brand-accent to-orange-500 hover:from-orange-500 hover:to-red-500 shadow-large text-lg px-10 py-4"
            >
              Let's Chat
            </Button>
          </div>
          
        </div>
      </div>
    </section>
  );
}