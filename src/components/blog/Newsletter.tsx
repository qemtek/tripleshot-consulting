import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { subscribeToNewsletter } from '../../utils/newsletterUtils';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await subscribeToNewsletter(email);
      setStatus('success');
      setEmail('');
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="bg-indigo-50 p-8 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-6 w-6 text-indigo-600" />
        <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
      </div>
      <p className="text-gray-600 mb-6">
        Get the latest AI insights and tips delivered to your inbox monthly.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {status === 'success' && (
        <p className="mt-4 text-green-600">Thanks for subscribing!</p>
      )}
      {status === 'error' && (
        <p className="mt-4 text-red-600">Something went wrong. Please try again.</p>
      )}
    </div>
  );
}