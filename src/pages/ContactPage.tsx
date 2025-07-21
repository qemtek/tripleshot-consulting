import React, { useState } from 'react';
import { Send, Mail, MessageCircle, Coffee, Heart, Calendar, CheckCircle, AlertCircle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import { Card, CardContent } from '../components/ui/card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import LoadingSpinner from '../components/ui/LoadingSpinner';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    challenge: '',
    message: ''
  });

  const [submissionState, setSubmissionState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmissionState('loading');
    setErrorMessage('');
    
    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiBaseUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmissionState('success');
        // Reset form after success
        setTimeout(() => {
          setFormData({ name: '', email: '', company: '', challenge: '', message: '' });
          setSubmissionState('idle');
        }, 3000);
      } else {
        setSubmissionState('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
        setTimeout(() => setSubmissionState('idle'), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmissionState('error');
      setErrorMessage('Network error. Please check your connection and try again.');
      setTimeout(() => setSubmissionState('idle'), 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEOHead 
        title="Contact Tripleshot Solutions - Let's Start a Conversation"
        description="Ready to transform your business? Get in touch with our friendly team of automation experts. No sales pitch, just a genuine conversation about your challenges and goals."
        keywords={[
          'contact business automation consultants',
          'get in touch tripleshot solutions',
          'business consultation call',
          'AI consulting contact',
          'automation experts contact'
        ]}
      />
      <StructuredData type="webpage" data={{
        title: "Contact Tripleshot Solutions",
        description: "Get in touch with professional but personal business automation consultants.",
        url: "https://tripleshotsolutions.com/contact"
      }} />
    
      <main className="min-h-screen bg-gradient-to-b from-warm-50 via-white to-warm-50 relative overflow-hidden pt-20">
        {/* Background elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 left-20 w-40 h-40 bg-brand-primary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-brand-accent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-brand-secondary rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-accent rounded-3xl mb-8 relative">
              <Heart className="h-10 w-10 text-white" />
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center">
                <Mail className="h-4 w-4 text-white" />
              </div>
            </div>
            
            <h1 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-warm-900 mb-6 leading-tight">
              Drop us a Line
            </h1>
            
            <div className="w-24 h-1.5 bg-gradient-to-r from-brand-primary to-brand-accent mx-auto mb-8 rounded-full"></div>
            
            <p className="text-lg md:text-xl text-warm-600 max-w-3xl mx-auto leading-relaxed">
              Ready to solve your biggest business challenge? Tell us about it and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <Card variant="elevated" className="overflow-hidden">
            <CardContent className="p-8 lg:p-12 bg-gradient-to-br from-white to-brand-primary/5">
              <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                  <Input
                    label="What should we call you?"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    required
                  />
                  <Input
                    label="Best email to reach you"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                  />
                </div>
                
                <Input
                  label="Company (optional)"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  helpText="Helps us understand your context better"
                />
                
                <Input
                  label="What's your biggest challenge right now?"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="e.g., Too much manual work, need better website, want to use AI..."
                  helpText="This helps us prepare for our conversation"
                />
                
                <Textarea
                  label="Anything else you'd like us to know?"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us more about your situation, timeline, or what success looks like to you..."
                  helpText="The more context, the better we can help"
                />
                
                <Button
                  type="submit"
                  size="lg"
                  disabled={submissionState === 'loading'}
                  className={`w-full shadow-large group transition-all duration-300 ${
                    submissionState === 'success' 
                      ? 'bg-brand-success hover:bg-green-600' 
                      : submissionState === 'error'
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-gradient-to-r from-brand-primary to-brand-secondary hover:from-brand-secondary hover:to-brand-accent'
                  }`}
                >
                  {submissionState === 'loading' && (
                    <LoadingSpinner size="sm" color="white" className="mr-2" />
                  )}
                  {submissionState === 'success' && (
                    <CheckCircle className="h-5 w-5 mr-2 animate-scale-in" />
                  )}
                  {submissionState === 'idle' && (
                    <Send className="h-5 w-5 mr-2 group-hover:translate-x-1 transition-transform" />
                  )}
                  {submissionState === 'error' && (
                    <Send className="h-5 w-5 mr-2" />
                  )}
                  
                  {submissionState === 'loading' && 'Sending...'}
                  {submissionState === 'success' && 'Message Sent!'}
                  {submissionState === 'error' && 'Try Again'}
                  {submissionState === 'idle' && 'Send Message'}
                </Button>
                
                {submissionState === 'error' && errorMessage && (
                  <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3 backdrop-blur-sm mt-4">
                    <div className="flex items-start">
                      <AlertCircle className="h-4 w-4 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-red-100 text-sm font-medium">{errorMessage}</span>
                    </div>
                  </div>
                )}
                
                <p className="text-sm text-warm-500 text-center">
                  Usually respond within a few hours ⚡
                </p>
              </form>
            </CardContent>
          </Card>


        </div>
      </main>
    </>
  );
}