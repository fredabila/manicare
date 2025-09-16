import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-mani-dark-azure text-white w-full shadow-lg">
      <div className="w-full p-0 m-0">
        <div className="flex items-center justify-between h-16 w-full m-0 p-0">
          <Link to="/" className="flex items-center group ml-0">
            <img 
              src="/logo.png" 
              alt="Manicare Home Health Logo" 
              className="h-40 w-auto transition-transform group-hover:scale-105 ml-0"
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
            <Link to="/" className="text-sm font-medium text-white hover:text-mani-yellow transition-colors">HOME</Link>
            <a href="#services" className="text-sm font-medium text-white hover:text-mani-yellow transition-colors">SERVICES</a>
            <Link to="/about" className="text-sm font-medium text-white hover:text-mani-yellow transition-colors">ABOUT US</Link>
            <Link to="/careers" className="text-sm font-medium text-white hover:text-mani-yellow transition-colors">CAREERS</Link>
            <Link to="/blog" className="text-sm font-medium text-white hover:text-mani-yellow transition-colors">BLOG</Link>
            <Link 
              to="/contact"
              className="btn-primary ml-2"
            >
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;