import React from 'react';
import { Mail, MessageCircle, Heart, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import Button from './ui/Button';
import { useScrollAnimation, useStaggeredScrollAnimation } from '../hooks/useScrollAnimation';

export default function GetInTouch() {
  const headerAnimation = useScrollAnimation({ threshold: 0.3 });
  const startersAnimation = useStaggeredScrollAnimation(3, { threshold: 0.2 });
  const trustAnimation = useScrollAnimation({ threshold: 0.4 });

  const conversationStarters = [
    {
      icon: Calendar,
      title: 'Book a Call',
      description: 'Schedule a 30-minute discovery session to discuss your project in detail',
      action: 'Choose a Time',
      color: 'from-brand-secondary to-purple-600'
    },
    {
      icon: MessageCircle,
      title: 'Drop us a Line',
      description: 'Tell us about your challenge and we\'ll get back to you within 24 hours',
      action: 'Send Message',
      color: 'from-brand-primary to-blue-600'
    }
  ];


  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-warm-50 via-white to-warm-50 relative overflow-hidden">
      {/* Simplified background elements */}
      <div className="absolute inset-0 opacity-3">
        <div className="absolute top-20 left-20 w-40 h-40 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-accent rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl mb-8 relative">
            <Heart className="h-10 w-10 text-white" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
              <Mail className="h-4 w-4 text-white" />
            </div>
          </div>
          
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
            Let's Start a Conversation
          </h2>
          
          <div className="w-24 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-8 rounded-full"></div>
          
          <p className="text-lg md:text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
            Ready to solve your biggest business challenge? Choose how you'd like to connect with us.
          </p>
        </div>

        {/* Conversation starters */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {conversationStarters.map((starter, index) => (
            <Card key={index} hover className="group text-center">
              <CardContent className="p-8">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${starter.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-medium`}>
                  <starter.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="font-display text-xl font-bold text-warm-900 mb-4">
                  {starter.title}
                </h3>
                
                <p className="text-warm-600 mb-6 leading-relaxed">
                  {starter.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="group/btn border-2 border-warm-300 hover:border-current text-warm-700 hover:scale-105 w-full"
                  onClick={() => {
                    if (starter.title === 'Drop us a Line') {
                      window.location.href = '/contact';
                    } else if (starter.title === 'Book a Call') {
                      // Replace with your actual Google Calendar/Calendly link
                      window.open('https://calendar.google.com/calendar/appointments/schedules/AcZssZ1Y7zGnJKGCqiGKX7G8Q4vt5TvwJb4KzDfTk2_example', '_blank');
                    }
                  }}
                >
                  {starter.action}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}