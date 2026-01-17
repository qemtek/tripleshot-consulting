import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, CheckCircle, AlertCircle, Heart, ArrowRight } from 'lucide-react';
import Button from './ui/Button';

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

  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="relative bg-gray-900 pt-12 pb-6 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute top-0 right-1/4 w-[400px] h-[400px] bg-purple/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <p className="text-gray-400 mb-4 leading-relaxed max-w-md">
              A small team of senior engineers and strategists. We build apps, transform businesses, and solve the problems others walk away from.
            </p>
            <div className="space-y-2">
              <a
                href="tel:+447861009217"
                className="flex items-center text-gray-400 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-accent/10 transition-colors">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="font-medium">+44 7861 009217</span>
              </a>
              <a
                href="mailto:tripleshotconsultingltd@gmail.com"
                className="flex items-center text-gray-400 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-accent/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">tripleshotconsultingltd@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navigation</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href}
                    className="text-gray-400 hover:text-accent transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-4">Stay Updated</h4>
            <p className="text-gray-400 text-sm mb-4">
              Get insights and updates delivered to your inbox.
            </p>

            {status === 'success' ? (
              <div className="bg-emerald/10 border border-emerald/20 rounded-xl p-4">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-emerald mr-2 flex-shrink-0" />
                  <span className="text-white text-sm">{message}</span>
                </div>
              </div>
            ) : (
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 hover:border-gray-600"
                  required
                  disabled={status === 'submitting'}
                />

                <Button
                  type="submit"
                  variant="primary"
                  size="sm"
                  disabled={status === 'submitting'}
                  className="w-full"
                >
                  {status === 'submitting' ? 'Subscribing...' : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </>
                  )}
                </Button>

                {status === 'error' && (
                  <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-3">
                    <div className="flex items-start">
                      <AlertCircle className="h-4 w-4 text-red-400 mr-2 flex-shrink-0 mt-0.5" />
                      <span className="text-red-300 text-sm">{message}</span>
                    </div>
                  </div>
                )}
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} Tripleshot Consulting. All rights reserved.
            </p>
            <div className="flex items-center text-gray-500 text-sm">
              <Heart className="h-3 w-3 mr-1.5 text-accent" />
              Made with care in the UK
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
