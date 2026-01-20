import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-gray-200 shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="relative w-full h-16 sm:h-20">
        <div className="flex justify-between items-center h-full">
          {/* Logo */}
          <div className="flex items-center pl-4 sm:pl-6 lg:pl-8">
            <Link to="/" className="flex items-center group">
              <img
                src="/images/new_tripleshot.svg"
                alt="Tripleshot"
                className="h-8 transition-opacity duration-200 group-hover:opacity-80"
              />
            </Link>
          </div>

          {/* Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`relative px-3 py-2 text-sm font-medium tracking-wide transition-all duration-200 hover:scale-105 ${
                    isActive
                      ? 'text-accent'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-accent rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Button - Right */}
          <div className="flex items-center pr-4 sm:pr-6 lg:pr-8">
            <div className="hidden md:flex">
              <Button
                variant="gradient"
                size="sm"
                onClick={() => navigate('/contact')}
              >
                Let's Talk
              </Button>
            </div>
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-xl text-gray-600 hover:text-accent hover:bg-gray-100 transition-all duration-200"
                aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white/95 backdrop-blur-lg">
            <div className="py-4 space-y-2">
              {navigation.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl mx-3 transition-all duration-200 ${
                      isActive
                        ? 'bg-accent/10 text-accent border border-accent/20'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="w-2 h-2 bg-accent rounded-full" />
                    )}
                  </Link>
                );
              })}
              <div className="px-3 pt-4 border-t border-gray-200 mt-4">
                <Button
                  variant="gradient"
                  size="sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/contact');
                  }}
                  className="w-full"
                >
                  Let's Talk
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
