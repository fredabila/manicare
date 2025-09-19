import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogPage: React.FC = () => {
  const navigate = useNavigate();

  const handleExploreServices = () => {
    navigate('/');
    // Scroll to services section after navigation
    setTimeout(() => {
      const servicesElement = document.getElementById('services');
      if (servicesElement) {
        servicesElement.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
  <div className="bg-mani-dark-blue">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-mani-dark-azure to-mani-dark-blue text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 inline-block">
            <h1 className="text-3xl md:text-5xl font-bold brand-header text-mani-yellow leading-tight mb-6">
              Manicare Blog
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto px-0 py-0 text-white">
              Stay informed with the latest insights on home healthcare, wellness tips, and caregiving guidance from our expert team.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="flex-1 max-w-lg">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-mani-yellow focus:border-mani-yellow"
                  placeholder="Search articles..."
                />
              </div>
            </div>
            <div className="flex gap-2">
              <select className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-mani-yellow focus:border-mani-yellow bg-white">
                <option>All Categories</option>
                <option>Home Care Tips</option>
                <option>Health & Wellness</option>
                <option>Caregiver Resources</option>
                <option>News & Updates</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* No Articles Available */}
          <div className="text-center py-20">
            <div className="mx-auto h-24 w-24 bg-mani-light-azure rounded-full flex items-center justify-center mb-8">
              <svg className="h-12 w-12 text-mani-dark-azure" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H15" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-mani-dark-blue mb-4">
              No Articles Available Yet
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              We're working on creating valuable content about home healthcare, wellness tips, and caregiving resources. Check back soon for informative articles from our healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-primary">
                Contact Us for Information
              </a>
              <button 
                onClick={handleExploreServices}
                className="bg-white text-mani-dark-azure px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg"
              >
                Explore Our Services
              </button>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl mx-auto">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-mani-dark-blue mb-4">
                Stay Updated
              </h3>
              <p className="text-gray-600 mb-6">
                Be the first to know when we publish new articles and healthcare insights. Subscribe to our newsletter.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-mani-yellow focus:border-mani-yellow"
                />
                <button className="btn-primary whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
