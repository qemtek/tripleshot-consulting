import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navigation = [
    { name: 'Services', href: '/#services' },
    { name: 'Case Studies', href: '/#case-studies' },
    // { name: 'Blog', href: '/blog' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/#contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const id = sectionId.replace('#', '');
    
    if (location.pathname !== '/') {
      navigate('/', { state: { scrollTo: id } });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleNavClick = (href: string, e: React.MouseEvent) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      scrollToSection(href.substring(1));
    }
  };

  return (
    <header className="fixed w-full bg-white shadow-md z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/logo_white.png" 
                alt="Tripleshot Consulting Logo" 
                className="h-14 w-auto mr-4"
              />
              <img 
                src="/images/text_white.png" 
                alt="Tripleshot Consulting" 
                className="h-9 w-auto"
              />
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-10">
            {navigation.map((item) => {
              const isActive = location.hash === item.href || 
                             (location.pathname === '/' && !location.hash && item.href === '/#services');
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  className={`text-gray-600 hover:text-gray-900 transition-colors py-1 border-b-2 ${
                    isActive ? 'border-gray-900' : 'border-transparent'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 p-2 rounded-md transition-colors"
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
              {navigation.map((item) => {
                const isActive = location.hash === item.href || 
                               (location.pathname === '/' && !location.hash && item.href === '/#services');
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={(e) => handleNavClick(item.href, e)}
                    className={`block px-3 py-2 text-gray-600 hover:text-gray-900 transition-colors ${
                      isActive ? 'bg-gray-50' : ''
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;