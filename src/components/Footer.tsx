import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Heart, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const navigation = {
    main: [
      { name: 'Home', href: '/' },
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
    ],
  };

  return (
    <footer className="relative bg-gray-900 pt-12 pb-6 overflow-hidden">
      {/* Background effects - using radial gradients instead of blur for performance */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute bottom-0 left-1/4 w-[500px] h-[500px]"
          style={{ background: 'radial-gradient(circle, rgba(0, 212, 255, 0.05) 0%, transparent 70%)' }}
        />
        <div
          className="absolute top-0 right-1/4 w-[400px] h-[400px]"
          style={{ background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="lg:col-span-2">
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
                href="mailto:hello@tripleshot-solutions.com"
                className="flex items-center text-gray-400 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-accent/10 transition-colors">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="font-medium">hello@tripleshot-solutions.com</span>
              </a>
              <a
                href="https://www.linkedin.com/company/tripleshot-solutions"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-gray-800 flex items-center justify-center mr-3 group-hover:bg-accent/10 transition-colors">
                  <Linkedin className="h-4 w-4" />
                </div>
                <span className="font-medium">LinkedIn</span>
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
            <a
              href="https://chriscollins756.substack.com/subscribe"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-6 py-3 bg-accent text-gray-900 font-semibold rounded-xl hover:bg-accent/90 transition-all duration-200 group"
            >
              Subscribe to Newsletter
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
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
