import React, { useState } from 'react';
import { Send, Mail, CheckCircle, AlertCircle, ArrowRight } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import StructuredData from '../components/StructuredData';
import Button from '../components/ui/Button';
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
        title="Contact Tripleshot - Let's Start a Conversation"
        description="Ready to build something great? Get in touch with our team. No sales pitch, just a genuine conversation about your challenges and goals."
        keywords={[
          'contact tripleshot',
          'app development consultation',
          'business transformation consulting',
          'AI consulting contact',
          'technology consulting'
        ]}
      />
      <StructuredData
        type="webpage"
        data={{
          title: "Contact Tripleshot",
          description: "Get in touch with technology consultants who build apps, transform businesses, and solve complex problems.",
          url: "https://tripleshotsolutions.com/contact"
        }}
      />

      <main className="min-h-screen bg-gray-50 relative overflow-hidden pt-24">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6">
              <Mail className="h-4 w-4 text-accent" />
              <span className="text-sm text-gray-600">Get in touch</span>
            </div>

            <h1 className="text-display-sm md:text-display-md font-bold text-gray-900 mb-4">
              Let's build something{' '}
              <span className="text-gradient">great</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              Tell us about your project or challenge. We'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-gray-200 rounded-3xl p-8 md:p-12 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6" aria-label="Contact form">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-900 mb-2">
                    Your name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-gray-300"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-900 mb-2">
                    Email address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@company.com"
                    required
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-gray-300"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-medium text-gray-900 mb-2">
                  Company <span className="text-gray-400">(optional)</span>
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your company name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="challenge" className="block text-sm font-medium text-gray-900 mb-2">
                  What are you looking to build or solve?
                </label>
                <input
                  type="text"
                  id="challenge"
                  name="challenge"
                  value={formData.challenge}
                  onChange={handleChange}
                  placeholder="e.g., Mobile app, business automation, AI solution..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-gray-300"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-900 mb-2">
                  Tell us more
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Share any details about your project, timeline, or what success looks like..."
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-gray-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gradient"
                size="lg"
                disabled={submissionState === 'loading'}
                className={`w-full group ${
                  submissionState === 'success'
                    ? 'bg-emerald hover:bg-emerald-dark'
                    : submissionState === 'error'
                    ? 'bg-red-500 hover:bg-red-600'
                    : ''
                }`}
              >
                {submissionState === 'loading' && (
                  <LoadingSpinner size="sm" className="mr-2" />
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
                <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                    <span className="text-red-300 text-sm">{errorMessage}</span>
                  </div>
                </div>
              )}

              <p className="text-sm text-gray-500 text-center">
                We typically respond within a few hours
              </p>
            </form>
          </div>

          {/* Alternative contact */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Prefer to schedule a call?</p>
            <a
              href="https://calendly.com/tripleshotconsultingltd/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-accent hover:text-accent-dark transition-colors group"
            >
              Book a 30-minute chat
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </main>
    </>
  );
}
