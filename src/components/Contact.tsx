import React, { useState } from 'react';
import { Mail, Phone, MessageSquare, ArrowRight, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-bl-full opacity-70" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-gradient-to-tr from-purple-50 to-blue-100 rounded-tr-full opacity-70" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Get Started Today
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ready to transform your business with practical technology solutions? Contact us for a free consultation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-stretch">
            <div className="md:col-span-2 bg-white p-8 rounded-xl shadow-xl">
              <h3 className="text-2xl font-semibold mb-8 text-gray-900">Why Work With Us</h3>
              
              <div className="space-y-6 mb-10">
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Personalized Approach</h4>
                    <p className="text-gray-600 text-sm mt-1">Solutions tailored to your specific business needs</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Practical Results</h4>
                    <p className="text-gray-600 text-sm mt-1">Focus on real-world improvements, not just theory</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-indigo-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-gray-900">Ongoing Support</h4>
                    <p className="text-gray-600 text-sm mt-1">We're with you every step of the way</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium mb-4 text-gray-900">Contact Information</h4>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-600">+44 74 022 474 06</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-600">tripleshot.consulting@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-gray-600 mr-3" />
                    <span className="text-gray-600">Live chat available 24/7</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
              
              {formStatus === 'success' ? (
                <div className="bg-green-50 border border-green-100 rounded-lg p-6 text-center">
                  <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-medium text-green-800 mb-2">Message Received!</h4>
                  <p className="text-green-700">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      How can we help you?
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="w-full bg-gradient-to-r from-indigo-600 to-blue-700 text-white px-6 py-3 rounded-md hover:from-indigo-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center group"
                  >
                    {formStatus === 'submitting' ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                  
                  <p className="text-xs text-gray-500 text-center mt-4">
                    By submitting this form, you agree to our <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a> and <a href="#" className="text-indigo-600 hover:underline">Terms of Service</a>.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;