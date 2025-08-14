import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Zap } from 'lucide-react';
import Button from './ui/Button';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'Our Work', href: '/case-studies' },
    { name: 'Articles', href: '/articles' },
    { name: 'Contact', href: '/contact' },
  ];


  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed w-full z-50 transition-all duration-300 bg-white shadow-soft border-b border-warm-200/50">
      <nav className="relative w-full h-16 sm:h-20">
        <div className="flex justify-between items-center h-full">
            {/* Logo - Far Left */}
            <div className="flex items-center pl-4 sm:pl-6 lg:pl-8">
                <Link to="/" className="flex items-center group">
                  <img src="/images/new_tripleshot.svg" alt="Tripleshot Logo" className="h-8" />
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
                          ? 'text-brand-primary' 
                          : 'text-warm-700 hover:text-brand-primary'
                      }`}
                    >
                      {item.name}
                      {isActive && (
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full" />
                      )}
                    </Link>
                  );
                })}
            </div>

            {/* Button - Far Right */}
            <div className="flex items-center pr-8 sm:pr-12 lg:pr-16">
                <div className="hidden md:flex">
                    <Button 
                      variant="primary" 
                      size="sm"
                      onClick={() => navigate('/contact')}
                      className="shadow-soft hover:shadow-medium"
                    >
                      Let's Chat
                    </Button>
                </div>
                <div className="md:hidden flex items-center">
                    <button
                      onClick={() => setIsMenuOpen(!isMenuOpen)}
                      className="p-2 rounded-xl text-warm-700 hover:text-brand-primary hover:bg-warm-100 transition-all duration-200"
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

        {isMenuOpen && (
          <div className="md:hidden border-t border-warm-200/50 bg-white/95 backdrop-blur-md">
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
                        ? 'bg-brand-primary/10 text-brand-primary border border-brand-primary/20' 
                        : 'text-warm-700 hover:bg-warm-100 hover:text-brand-primary'
                    }`}
                  >
                    <span className="font-medium">{item.name}</span>
                    {isActive && (
                      <div className="w-2 h-2 bg-brand-primary rounded-full" />
                    )}
                  </Link>
                );
              })}
              <div className="px-3 pt-4 border-t border-warm-200/50 mt-4">
                <Button 
                  variant="primary" 
                  size="sm"
                  onClick={() => {
                    setIsMenuOpen(false);
                    navigate('/contact');
                  }}
                  className="w-full"
                >
                  Let's Chat
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