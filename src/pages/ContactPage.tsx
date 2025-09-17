import React from 'react';
import FullFAQSection from '../components/FullFAQSection';

const ContactPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section for Contact Page */}
      <div className="py-20" style={{background: 'linear-gradient(135deg, #10416e 0%, #1d5981 50%, #0c1929 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="brand-header text-4xl md:text-5xl mb-6" style={{color: '#fec900'}}>
            We are Just a Call Away
          </h1>
          <p className="text-xl text-white leading-relaxed font-medium">
            We are here to help. Reach out today for a free consultation.
          </p>
        </div>
      </div>

      {/* Contact Information Section */}
      <div className="py-16 bg-mani-light-azure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Inquiry Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="brand-header text-3xl text-mani-dark-blue mb-4">Inquiry Form</h2>
              <p className="text-mani-azure mb-8 font-medium">
                You may also complete our online inquiry form, and a member of our team will contact you promptly.
              </p>
              <form 
                className="space-y-6" 
                action="https://docs.google.com/forms/d/e/1FAIpQLSfzqVQHW9pD_TF7FKl1CuY8ea-poZ1HyVWyM1kTH9Xzay9eaQ/formResponse" 
                method="POST" 
                target="hidden_iframe" 
                onSubmit={(e) => {
                  // keep existing iframe-based Google Forms submit for compatibility
                  // also send JSON payload to our serverless email endpoint
                  try {
                    const form = e.currentTarget as HTMLFormElement;
                    const name = (form.querySelector('#name') as HTMLInputElement)?.value || '';
                    const phone = (form.querySelector('#phone') as HTMLInputElement)?.value || '';
                    const email = (form.querySelector('#email') as HTMLInputElement)?.value || '';
                    const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value || '';

                    // fire-and-forget POST to our API; show success only on client-side after a short delay
                    fetch('/api/send-email', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({ name, phone, email, message })
                    }).catch((err) => {
                      // swallow errors; we still rely on Google Forms as primary delivery
                      console.error('Error sending to /api/send-email', err);
                    });
                  } catch (err) {
                    console.error('Error preparing email payload', err);
                  }

                  // existing success message behavior (keeps showing the message after Google Forms submit)
                  setTimeout(() => {
                    const successMessage = document.getElementById('success-message');
                    if (successMessage) {
                      successMessage.style.display = 'block';
                    }
                  }, 1000);
                }}
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-mani-dark-blue mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 border border-mani-azure/30 rounded-lg focus:ring-2 focus:ring-mani-yellow focus:border-mani-yellow transition-colors"
                    required
                    name="entry.243212961"
                  />
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-mani-dark-blue mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 border border-mani-azure/30 rounded-lg focus:ring-2 focus:ring-mani-yellow focus:border-mani-yellow transition-colors"
                    required
                    name="entry.772845862"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-mani-dark-blue mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 border border-mani-azure/30 rounded-lg focus:ring-2 focus:ring-mani-yellow focus:border-mani-yellow transition-colors"
                    required
                    name="entry.1811585511"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-mani-dark-blue mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 border border-mani-azure/30 rounded-lg focus:ring-2 focus:ring-mani-yellow focus:border-mani-yellow transition-colors"
                    required
                    name="entry.540336316"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="btn-primary w-full shadow-lg"
                >
                  Submit Inquiry
                </button>
              </form>

              {/* Success Message */}
              <div 
                id="success-message" 
                className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg hidden"
              >
                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="font-medium">Thank you! Your inquiry has been submitted successfully. We'll contact you soon.</span>
                </div>
              </div>

              {/* Hidden iframe for form submission */}
              <iframe name="hidden_iframe" style={{ display: 'none' }} title="Hidden iframe for form submission"></iframe>
            </div>
            {/* Contact Information */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="brand-header text-3xl text-mani-dark-blue mb-8">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-mani-yellow/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-mani-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mani-dark-blue mb-1">Address</h3>
                    <p className="text-mani-azure font-medium">
                      2165 Morris Ave, Suite 15<br />
                      Union, NJ 07083
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-mani-yellow/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-mani-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mani-dark-blue mb-1">Phone</h3>
                    <a href="tel:848.280.1169" className="text-mani-azure hover:text-mani-yellow font-medium transition-colors">
                      848.280.1169
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-mani-yellow/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-mani-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mani-dark-blue mb-1">Email</h3>
                    <a href="mailto:manicarehh@gmail.com" className="text-mani-azure hover:text-mani-yellow font-medium transition-colors">
                      manicarehh@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-mani-yellow/20 p-3 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-mani-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-mani-dark-blue mb-1">Office Hours</h3>
                    <div className="text-mani-azure font-medium">
                      <div className="flex flex-col gap-0.5">
                        <p className="ml-0">Tuesday: 9:00 AM - 5:00 PM</p>
                        <p className="ml-0">Thursday: 9:00 AM - 5:00 PM</p>
                        <p className="ml-0">Triday: 9:00 AM - 5:00 PM</p>
                      </div>
                      <p className="text-sm text-mani-yellow font-bold mt-2">On-call support: 24/7</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-mani-yellow/10 rounded-lg">
                <h3 className="font-semibold text-mani-dark-blue mb-2">Quick Response</h3>
                <p className="text-mani-azure text-sm font-medium">
                  We typically respond to all inquiries within 2 hours during business hours. 
                  For urgent needs, please call us directly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Full FAQ Section */}
      <FullFAQSection />
    </div>
  );
};

export default ContactPage;