import React from 'react';
import { Mail, CheckCircle } from 'lucide-react';

const AdminPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-brown-500 mb-2">Notifications</h1>
          <p className="text-gray-600">How form submissions are handled</p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-200 max-w-2xl">
          <div className="flex items-start mb-6">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <CheckCircle className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">Email Notifications Active</h2>
              <p className="text-gray-600">
                All form submissions are sent directly to your email inbox.
              </p>
            </div>
          </div>

          <div className="border-t border-gray-200 pt-6">
            <h3 className="font-semibold text-gray-900 mb-4 flex items-center">
              <Mail className="h-5 w-5 mr-2 text-gray-500" />
              You'll receive emails for:
            </h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                Newsletter subscriptions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Contact form submissions
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                Chatbot lead captures
              </li>
            </ul>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-500">
              Notifications are sent to: <strong>christopher.collins.ds@gmail.com</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
