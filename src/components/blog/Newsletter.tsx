import React from 'react';
import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <div className="bg-indigo-50 p-8 rounded-lg">
      <div className="flex items-center gap-3 mb-4">
        <Mail className="h-6 w-6 text-indigo-600" />
        <h3 className="text-xl font-semibold">Subscribe to Our Newsletter</h3>
      </div>
      <p className="text-gray-600 mb-6">
        Get the latest AI insights and tips delivered to your inbox monthly.
      </p>

      <iframe
        src="https://chriscollins756.substack.com/embed"
        width="100%"
        height="150"
        style={{ border: 'none', background: 'transparent' }}
        frameBorder="0"
        scrolling="no"
        title="Subscribe to newsletter"
      />
    </div>
  );
}