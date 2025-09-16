import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();

  // Scroll to services section after navigation
  const [servicesActive, setServicesActive] = React.useState(false);

  React.useEffect(() => {
    if (currentPath === '/') {
      const handleScroll = () => {
        const el = document.getElementById('services');
        if (el) {
          const rect = el.getBoundingClientRect();
          setServicesActive(rect.top <= 80 && rect.bottom > 80);
        } else {
          setServicesActive(false);
        }
      };
      window.addEventListener('scroll', handleScroll);
      handleScroll();
      return () => window.removeEventListener('scroll', handleScroll);
    } else {
      setServicesActive(false);
    }
  }, [currentPath]);

  const handleServicesClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (currentPath !== '/') {
      navigate('/', { replace: false });
      setTimeout(() => {
        const el = document.getElementById('services');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const el = document.getElementById('services');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };
  return (
  <header className="text-white w-full shadow-lg sticky top-0 z-50" style={{backgroundColor: '#0c1929'}}>
      <div className="w-full p-0 m-0">
  <div className="flex items-center justify-between h-24 w-full m-0 p-0 pr-6">
          <Link to="/" className="flex items-center group ml-0">
            <img 
              src="/logo.svg" 
              alt="Manicare Home Health Logo" 
              className="h-20 w-auto max-w-[200px] transition-transform group-hover:scale-105 ml-0 object-contain"
              style={{marginLeft: 0, paddingLeft: 0}}
            />
          </Link>
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center text-mani-light-azure">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-mani-yellow" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a10.024 10.024 0 006.46 6.46l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              <span className="text-sm font-medium">848.280.1169</span>
            </div>
            <div className="flex items-center text-mani-light-azure">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-mani-yellow" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span className="text-sm font-medium">manicarehh@gmail.com</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center space-x-6">
            <Link to="/" className={`text-sm font-medium transition-colors ${currentPath === '/' && !servicesActive ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`}>HOME</Link>
            <a href="#services" className={`text-sm font-medium transition-colors ${servicesActive ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`} onClick={handleServicesClick}>SERVICES</a>
            <Link to="/about" className={`text-sm font-medium transition-colors ${currentPath === '/about' ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`}>ABOUT US</Link>
            <Link to="/careers" className={`text-sm font-medium transition-colors ${currentPath === '/careers' ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`}>CAREERS</Link>
            <Link to="/blog" className={`text-sm font-medium transition-colors ${currentPath === '/blog' ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`}>BLOG</Link>
            <Link 
              to="/contact"
              className={`btn-primary ml-2 ${currentPath === '/contact' ? 'ring-2 ring-mani-yellow' : ''}`}
            >
              Contact Us
            </Link>
          </nav>
          {/* Mobile menu button */}
          <button
            className="lg:hidden flex items-center px-3 py-2 border rounded text-mani-yellow border-mani-yellow focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
        {/* Mobile menu slide down */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 w-full z-50 bg-mani-dark-azure shadow-xl animate-slide-down">
            <div className="flex flex-col items-center py-8 space-y-6">
              <Link to="/" className={`text-lg font-bold transition-colors ${currentPath === '/' ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`} onClick={() => setMobileMenuOpen(false)}>HOME</Link>
              <a href="#services" className={`text-lg font-bold transition-colors ${servicesActive ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`} onClick={handleServicesClick}>SERVICES</a>
              <Link to="/about" className={`text-lg font-bold transition-colors ${currentPath === '/about' ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`} onClick={() => setMobileMenuOpen(false)}>ABOUT US</Link>
              <Link to="/careers" className={`text-lg font-bold transition-colors ${currentPath === '/careers' ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`} onClick={() => setMobileMenuOpen(false)}>CAREERS</Link>
              <Link to="/blog" className={`text-lg font-bold transition-colors ${currentPath === '/blog' ? 'text-mani-yellow' : 'text-white hover:text-mani-yellow'}`} onClick={() => setMobileMenuOpen(false)}>BLOG</Link>
              <Link to="/contact" className={`btn-primary w-40 text-center ${currentPath === '/contact' ? 'ring-2 ring-mani-yellow' : ''}`} onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
              <div className="flex flex-col items-center mt-6 space-y-2">
                <div className="flex items-center text-mani-light-azure">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mani-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a10.024 10.024 0 006.46 6.46l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span className="text-base font-medium">848.280.1169</span>
                </div>
                <div className="flex items-center text-mani-light-azure">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-mani-yellow" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-base font-medium">manicarehh@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;