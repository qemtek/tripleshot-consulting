import React, { useState } from 'react';
import { Mail, Phone, CheckCircle, AlertCircle } from 'lucide-react';

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
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img 
                src="/images/logo_white.png" 
                alt="Tripleshot Logo" 
                className="h-8 mr-3" 
              />
              <span className="text-xl font-bold">Tripleshot Consulting</span>
            </div>
            <p className="text-gray-300 mb-4">
              Data & AI solutions for UK small and mid-size companies. 
              We make modernisation simple, effective, and accessible.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                <span>+44 74 022 474 06</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-2" />
                <span>tripleshot.consulting@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>Workflow Automation</li>
              <li>Digital Branding</li>
              <li>Online Marketing</li>
              <li>Analytics & Insights</li>
              <li>Predictive Modelling</li>
              <li>AI Implementation</li>
            </ul>
          </div>

          {/* Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Stay Updated</h3>
            <p className="text-gray-300 mb-4">
              Get practical insights and case studies delivered to your inbox.
            </p>
            
            {status === 'success' ? (
              <div className="bg-green-900/50 border border-green-600 rounded-lg p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  <span className="text-green-100 text-sm">{message}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-tan-500 focus:border-transparent"
                    required
                    disabled={status === 'submitting'}
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-tan-500 text-brown-700 px-4 py-2 rounded-md hover:bg-tan-600 transition-colors duration-300 font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
                </button>
                
                {status === 'error' && (
                  <div className="bg-red-900/50 border border-red-600 rounded-lg p-3">
                    <div className="flex items-start">
                      <AlertCircle className="h-4 w-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-red-100 text-sm">{message}</span>
                    </div>
                  </div>
                )}
                
                <p className="text-xs text-gray-400">
                  We respect your privacy. Unsubscribe anytime. 
                  <br />
                  By subscribing, you agree to receive email updates from Tripleshot Consulting.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Tripleshot Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 