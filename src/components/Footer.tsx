import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-mani-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-0 pt-2 pb-2">
              <img 
                src="/logo.svg" 
                alt="Manicare Home Health Logo" 
                className="h-36 w-36"
                style={{marginTop: '-12px'}}
              />
            </div>
            <p className="text-mani-light-azure text-sm leading-relaxed mb-4 font-medium">
              Licensed home health care agency dedicated to providing quality, reliable, and personalized care for seniors, individuals with disabilities, and those recovering from illness.
            </p>
            {/* Address */}
            <div className="mb-4">
              <h4 className="brand-header text-mani-yellow mb-2 text-sm">Our Location</h4>
              <div className="text-mani-light-azure text-sm">
                <p>2165 Morris Ave, Suite 15</p>
                <p>Union, NJ 07083</p>
                <p>United States</p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="lg:col-span-1">
            <h4 className="brand-header text-mani-yellow mb-4 text-sm">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-mani-yellow" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.518.758a10.024 10.024 0 006.46 6.46l.758-1.518a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="text-mani-light-azure text-sm font-medium">848.280.1169</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-mani-yellow" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <span className="text-mani-light-azure text-sm font-medium">manicarehh@gmail.com</span>
              </div>
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3 text-mani-yellow" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
                <div className="text-mani-light-azure text-sm">
                  <p>Tuesday: 9:00 AM - 5:00 PM</p>
                  <p>Thursday: 9:00 AM - 5:00 PM</p>
                  <p>Friday: 9:00 AM - 5:00 PM</p>
                  <p className="text-mani-yellow text-xs mt-1">On-call support: 24/7</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links Menu */}
          <div className="lg:col-span-1">
            <h4 className="brand-header text-mani-yellow mb-4 text-sm">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-sm font-medium">HOME</a></li>
              <li><a href="/#services" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-sm font-medium">OUR SERVICES</a></li>
              <li><a href="/about" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-sm font-medium">ABOUT US</a></li>
              <li><a href="/careers" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-sm font-medium">CAREERS</a></li>
              <li><a href="/blog" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-sm font-medium">BLOG</a></li>
              <li><a href="/contact" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-sm font-medium">CONTACT</a></li>
              <li><a href="/contact" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-sm font-medium">GET FREE CONSULTATION</a></li>
            </ul>
          </div>

          {/* Social Media and Legal */}
          <div className="lg:col-span-1">
            <h4 className="brand-header text-mani-yellow mb-4 text-sm">Follow Us</h4>
            <div className="flex space-x-4 mb-6">
              {/* Facebook */}
              <a href="https://www.facebook.com/share/14NeXiUQVxL/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-mani-light-azure hover:text-mani-yellow transition-colors p-2 bg-mani-azure/20 rounded-lg hover:bg-mani-yellow/20">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/company/manicare-home-health/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer" className="text-mani-light-azure hover:text-mani-yellow transition-colors p-2 bg-mani-azure/20 rounded-lg hover:bg-mani-yellow/20">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              {/* Instagram */}
              <a href="https://www.instagram.com/manicare_home_health/?igsh=YW9jeDEwOWpsOWEw&utm_source=qr#" target="_blank" rel="noopener noreferrer" className="text-mani-light-azure hover:text-mani-yellow transition-colors p-2 bg-mani-azure/20 rounded-lg hover:bg-mani-yellow/20">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="http://www.tiktok.com/@manicare_home_health" target="_blank" rel="noopener noreferrer" className="text-mani-light-azure hover:text-mani-yellow transition-colors p-2 bg-mani-azure/20 rounded-lg hover:bg-mani-yellow/20">
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>

            {/* Legal Links */}
            <div className="space-y-2">
              <h5 className="brand-header text-mani-yellow text-sm">Legal</h5>
              <ul className="space-y-1">
                <li><a href="/privacy-policy" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-xs font-medium">PRIVACY POLICY</a></li>
                <li><a href="/terms-conditions" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-xs font-medium">TERMS & CONDITIONS</a></li>
                <li><a href="/service-refund-policy" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-xs font-medium">SERVICE & REFUND POLICY</a></li>
                <li><a href="/non-discrimination" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-xs font-medium">NON-DISCRIMINATION</a></li>
                <li><a href="/hipaa-privacy-statement" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-xs font-medium">HIPAA PRIVACY STATEMENT</a></li>
                <li><a href="/patient-rights-responsibilities" className="text-mani-light-azure hover:text-mani-yellow transition-colors text-xs font-medium">PATIENT RIGHTS AND RESPONSIBILITIES</a></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-mani-azure/30 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-mani-light-azure text-sm font-medium">
              © 2025 Manicare Home Healthcare. All rights reserved. Licensed in New Jersey.
            </p>
            <div className="flex items-center mt-4 md:mt-0">
              <span className="text-mani-light-azure text-xs mr-4 font-medium">Licensed • Insured • Bonded</span>
              <div className="flex items-center bg-mani-yellow/10 px-3 py-1 rounded-lg">
                <svg className="h-4 w-4 text-mani-yellow mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-mani-yellow text-xs font-bold">NJ STATE LICENSED</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;