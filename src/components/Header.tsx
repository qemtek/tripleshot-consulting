import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Our Story', href: '/#about' },
    { name: 'White Papers', href: '/#our-approach-in-action' },
    { name: 'Case Studies', href: '/#our-approach-in-action' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on homepage, navigate to homepage first, then scroll
      window.location.href = `/#${sectionId}`;
    } else {
      // If on homepage, scroll directly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 sm:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo-no-background.png" 
                alt="Tripleshot Consulting Logo" 
                className="h-8 sm:h-10 md:h-14 w-auto mr-2 sm:mr-4"
              />
              <img 
                src="/images/text_white.png" 
                alt="Tripleshot Consulting" 
                className="hidden sm:block h-6 md:h-9 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            <button
              onClick={() => handleNavClick('about')}
              className="text-brown-600 hover:text-brown-700 transition-colors py-1 border-b-2"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNavClick('our-approach-in-action')}
              className="text-brown-600 hover:text-brown-700 transition-colors py-1 border-b-2"
            >
              White Papers
            </button>
            <button
              onClick={() => handleNavClick('our-approach-in-action')}
              className="text-brown-600 hover:text-brown-700 transition-colors py-1 border-b-2"
            >
              Case Studies
            </button>
            <button
              onClick={() => handleNavClick('team')}
              className="text-brown-600 hover:text-brown-700 transition-colors py-1 border-b-2"
            >
              Team
            </button>
            <button
              onClick={() => handleNavClick('contact')}
              className="text-brown-600 hover:text-brown-700 transition-colors py-1 border-b-2"
            >
              Contact
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-brown-600 hover:text-brown-700 p-2 rounded-md transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden">
            <div className="pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavClick('about')}
                className="block px-3 py-2 text-brown-600 hover:text-brown-700 transition-colors w-full text-left"
              >
                Our Story
              </button>
              <button
                onClick={() => handleNavClick('our-approach-in-action')}
                className="block px-3 py-2 text-brown-600 hover:text-brown-700 transition-colors w-full text-left"
              >
                White Papers
              </button>
              <button
                onClick={() => handleNavClick('team')}
                className="block px-3 py-2 text-brown-600 hover:text-brown-700 transition-colors w-full text-left"
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick('contact')}
                className="block px-3 py-2 text-brown-600 hover:text-brown-700 transition-colors w-full text-left"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;