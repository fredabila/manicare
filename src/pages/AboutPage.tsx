import React from 'react';
import MeetOurTeamSection from '../components/MeetOurTeamSection';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative text-white py-24 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(12, 25, 41, 0.85) 0%, rgba(16, 65, 110, 0.75) 50%, rgba(29, 89, 129, 0.85) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuATd9Un_-M05hRXmoFnqjUv9lqv6_HitPNFdbFEvq_XrwdMLzRfsNnnc9X2HL_OBecUK8zQHaq7iW5cUd5bnBAryBLvv1VomIg-qvP4DQ7D8qITNT8Z7g8ww4UGBF-JsMfdrVoWgNsuwlF4yEjb9GjdEL4ZLX-Rv1PIY8S6WaXNwKC0tDm9gEpymmgZ24pNV8DZbgELUqjKdZGjCqplXBxcGbZBINrdm6gtrAqrskpGOzTyQLq5_TatW03x7XsxhfFqEy84vZuChhM')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-mani-dark-blue/60 via-transparent to-mani-dark-azure/40"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold brand-header text-mani-yellow mb-6">
            Caring Hands, Professional Hearts
          </h1>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <svg className="h-6 w-6 text-mani-yellow mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-lg text-white font-medium">
                2165 Morris Ave, Suite 15, Union, NJ 07083
              </p>
            </div>
            <p className="text-gray-200 mb-4">We proudly serve families across New Jersey.</p>
            <blockquote className="border-l-4 border-mani-yellow pl-6">
              <p className="text-xl italic text-white font-medium leading-relaxed">
                "To help our clients live safely, independently, and with dignity in the comfort of their own homes."
              </p>
              <cite className="text-mani-yellow text-sm font-semibold mt-2 block">Our Mission</cite>
            </blockquote>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <MeetOurTeamSection />

      {/* Why Choose Us Section */}
      <div className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold brand-header text-mani-dark-blue mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our commitment to excellence sets us apart in providing compassionate home healthcare services.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Feature 1 */}
            <div className="bg-mani-light-azure p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-mani-yellow text-mani-dark-blue shadow-md">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-mani-dark-blue mb-2">Licensed, Bonded & Insured</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Fully licensed, bonded, and insured in accordance with New Jersey state regulations.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 2 */}
            <div className="bg-mani-light-azure p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-mani-yellow text-mani-dark-blue shadow-md">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-mani-dark-blue mb-2">Compassionate Caregivers</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Compassionate, trained, and certified caregivers (CHHAs).
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 3 */}
            <div className="bg-mani-light-azure p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-mani-yellow text-mani-dark-blue shadow-md">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-mani-dark-blue mb-2">24/7 Availability</h3>
                  <p className="text-gray-700 leading-relaxed">
                    24/7 availability for care and support.
                  </p>
                </div>
              </div>
            </div>
            {/* Feature 4 */}
            <div className="bg-mani-light-azure p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-mani-yellow text-mani-dark-blue shadow-md">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                    </svg>
                  </div>
                </div>
                <div className="ml-6">
                  <h3 className="text-xl font-bold text-mani-dark-blue mb-2">Excellent Service</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Recognized for excellent care and service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-20 bg-mani-light-azure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="brand-header text-3xl md:text-4xl text-mani-dark-blue mb-6">Our Story</h2>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-mani-dark-blue leading-relaxed text-lg font-medium text-center">
                Manicare Home Health was founded on a simple belief: healing feels most natural at home. After more than ten years of caring for patients at the bedside, our founder, Emmanuel Yeboah, Family Nurse Practitioner, saw that many patients recovered better medically, emotionally, and physically in the comfort of their own homes, surrounded by their loved ones. With this experience in mind, Manicare Home Health was created to bring safe, compassionate, and personalized care directly to families where it matters most. Today, we are proud to be more than just caregivers, we are partners in your health journey. Our team walks with you and your loved ones toward greater strength, independence, and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-mani-dark-azure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold brand-header text-mani-yellow mb-4">
            Ready to Experience Exceptional Care?
          </h2>
          <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
            Contact us today to learn more about our personalized home healthcare services and how we can help your family.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              Get Started Today
            </a>
            <a href="tel:8482801169" className="bg-white text-mani-dark-azure px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Call (848) 280-1169
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
