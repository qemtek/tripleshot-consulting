import React, { useState } from 'react';
import { Mail, Phone, CheckCircle, AlertCircle, Zap, Heart } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) return;

    setStatus('submitting');
    setMessage('');

    try {
      const apiBaseUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001';
      const response = await fetch(`${apiBaseUrl}/api/newsletter`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email })
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage('Thank you! You\'ve been subscribed to our newsletter.');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('Network error. Please check your connection and try again.');
    }
  };

  return (
    <footer className="bg-gradient-to-br from-warm-900 via-warm-800 to-warm-900 text-white py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-brand-accent rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-6">
              <img src="/images/new_logo.svg" alt="Tripleshot Logo" className="h-12 mr-3" />
              <div className="flex flex-col">
                <span className="font-display text-xl font-bold text-white leading-tight">
                  Tripleshot
                </span>
                <span className="text-sm text-brand-accent font-medium -mt-1">
                  Solutions
                </span>
              </div>
            </div>
            <p className="text-warm-200 mb-6 leading-relaxed">
              We deliver high-quality solutions to complex problems. 
              A small group of professionals helping businesses reach their next level through modern technology and close partnerships.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-warm-200 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-brand-primary/20 flex items-center justify-center mr-3 group-hover:bg-brand-primary/30 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">+44 7861009217</span>
              </div>
              <div className="flex items-center text-warm-200 hover:text-white transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-brand-accent/20 flex items-center justify-center mr-3 group-hover:bg-brand-accent/30 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">tripleshotconsultingltd@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 rounded-lg bg-brand-secondary/20 flex items-center justify-center mr-3">
                <Heart className="h-4 w-4 text-brand-secondary" />
              </div>
              <h3 className="font-display text-xl font-bold text-white">Stay in Touch</h3>
            </div>
            <p className="text-warm-200 mb-6 leading-relaxed">
              Get practical insights and success stories delivered to your inbox. No spam, just valuable content.
            </p>
            
            {status === 'success' ? (
              <div className="bg-brand-success/20 border border-brand-success/30 rounded-xl p-4 backdrop-blur-sm">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-brand-success mr-2" />
                  <span className="text-white text-sm font-medium">{message}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-warm-300 focus:ring-2 focus:ring-brand-primary focus:border-brand-primary backdrop-blur-sm transition-all duration-200 hover:bg-white/15"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white px-6 py-3 rounded-xl hover:from-brand-secondary hover:to-brand-accent transition-all duration-300 font-semibold disabled:opacity-50 disabled:cursor-not-allowed shadow-medium hover:shadow-large hover:scale-[1.02]"
                >
                  {status === 'submitting' ? 'Subscribing...' : 'Keep Me Updated'}
                </button>
                
                {status === 'error' && (
                  <div className="bg-red-500/20 border border-red-400/30 rounded-xl p-3 backdrop-blur-sm">
                    <div className="flex items-start">
                      <AlertCircle className="h-4 w-4 text-red-300 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-red-100 text-sm font-medium">{message}</span>
                    </div>
                  </div>
                )}
                
                <p className="text-xs text-warm-300 leading-relaxed">
                  We respect your privacy. Unsubscribe anytime. 
                  <br />
                  By subscribing, you agree to receive email updates from Tripleshot Solutions.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-warm-700/30 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-warm-300 text-sm">
              &copy; 2025 Tripleshot Solutions. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 text-warm-300 text-sm">
              <span className="flex items-center">
                <Heart className="h-3 w-3 mr-1 text-brand-accent" />
                Made with care in the UK
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 