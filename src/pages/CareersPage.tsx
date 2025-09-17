import React, { useState, useRef, useEffect } from 'react';

const CareersPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const onLoad = () => {
      // When the hidden iframe finishes loading, show success
      setSubmitted(true);
      // auto-hide after 6s
      setTimeout(() => setSubmitted(false), 6000);
    };
    iframe.addEventListener('load', onLoad);
    return () => iframe.removeEventListener('load', onLoad);
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div 
        className="relative text-white py-24 px-4 sm:px-6 lg:px-8 min-h-[80vh] flex items-center"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(12, 25, 41, 0.85) 0%, rgba(16, 65, 110, 0.75) 50%, rgba(29, 89, 129, 0.85) 100%), url('/chha.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-mani-dark-blue/60 via-transparent to-mani-dark-azure/40"></div>
        <div className="relative max-w-5xl mx-auto text-center">
          <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold brand-header text-mani-yellow leading-tight mb-6">
              We will pay for your CHHA Certification: Call Us to find out.
            </h1>
            <p className="mt-6 text-xl md:text-2xl text-white font-medium tracking-wide">
              Grow Your Career While Making a Difference.
            </p>
            <div className="mt-10">
              <a
                href="#application-form"
                className="btn-primary text-lg px-8 py-4 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                Get Certified!
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Intro Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Whether you are a client or a caregiver, Manicare Home Health cares about YOU. Join a team that values compassion, professionalism, and growth. We are always looking for dedicated Certified Home Health Aides (CHHAs), nurses, and care professionals who share our mission.
          </p>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="py-16 bg-mani-light-azure">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold brand-header text-mani-dark-blue">Why Work With Us?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 text-center">
            {/* Benefit 1 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <svg className="h-8 w-8 text-mani-yellow-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18.5A6.5 6.5 0 1012 5.5a6.5 6.5 0 000 13z" />
                </svg>
              </div>
              <h3 className="font-semibold text-mani-dark-blue">Competitive pay and benefits</h3>
            </div>
            {/* Benefit 2 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <svg className="h-8 w-8 text-mani-yellow-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-mani-dark-blue">Weekly Pay</h3>
            </div>
            {/* Benefit 3 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <svg className="h-8 w-8 text-mani-yellow-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-mani-dark-blue">Flexible scheduling</h3>
            </div>
            {/* Benefit 4 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <svg className="h-8 w-8 text-mani-yellow-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="font-semibold text-mani-dark-blue">Supportive and respectful work environment</h3>
            </div>
            {/* Benefit 5 */}
            <div className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-full shadow-lg mb-4">
                <svg className="h-8 w-8 text-mani-yellow-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" />
                </svg>
              </div>
              <h3 className="font-semibold text-mani-dark-blue">Ongoing training and career development</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Application Form Section */}
      <div id="application-form" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold brand-header text-mani-dark-blue">Ready to Join Our Team?</h2>
            <p className="mt-4 text-lg text-gray-600">
              Fill out the registration form below to start your application process.
            </p>
          </div>
          <form
            className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
            action="https://docs.google.com/forms/d/e/1FAIpQLSf-U_wFlDFF1PiKNzSG_ODu9AzfER0EfCy6eoNbd5rngSTHqQ/formResponse"
            method="POST"
            target="hidden_iframe"
            onSubmit={(e) => {
              // Prevent navigating away. Submit the form to the hidden iframe so the
              // Google Forms POST happens in the background, then also POST to our API.
              e.preventDefault();
              try {
                const form = e.currentTarget as HTMLFormElement;
                const fullName = (form.querySelector('#full-name') as HTMLInputElement)?.value || '';
                const phone = (form.querySelector('#phone') as HTMLInputElement)?.value || '';
                const email = (form.querySelector('#email') as HTMLInputElement)?.value || '';
                const position = (form.querySelector('#position') as HTMLSelectElement)?.value || '';
                const message = (form.querySelector('#message') as HTMLTextAreaElement)?.value || '';

                // ensure the position is sent as plain text: set hidden input value to selected position
                const positionHidden = document.getElementById('entry-280374718') as HTMLInputElement | null;
                if (positionHidden) {
                  positionHidden.value = position;
                }

                // submit to Google Forms via the form element targeting the hidden iframe
                // this keeps the main window from redirecting
                // note: this triggers the form action (formResponse URL) into the iframe
                form.submit();

                // show a local success UI immediately as a friendly UX (we also rely on iframe load)
                setSubmitted(true);
                setTimeout(() => setSubmitted(false), 6000);

                // fire-and-forget JSON POST to our email API; also show success when it completes
                fetch('/api/send-email', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    name: fullName,
                    phone,
                    email,
                    position,
                    message,
                  }),
                })
                  .then(() => {
                    setSubmitted(true);
                    setTimeout(() => setSubmitted(false), 6000);
                  })
                  .catch((err) => console.error('Careers form email error', err));
              } catch (err) {
                console.error('Error preparing Careers form payload', err);
              }
            }}
          >
            {/* Hidden inputs for Google Form fields (keep constants if needed) */}
            <input type="hidden" name="entry.280374718" id="entry-280374718" value="" />
            <div className="sm:col-span-2">
              <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Name</label>
              <div className="mt-1">
                <input type="text" name="entry.1926683995" id="full-name" autoComplete="name" className="py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border-gray-300 rounded-md" placeholder="Your Full Name" />
              </div>
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
              <div className="mt-1">
                  <input type="text" name="entry.1265675249" id="phone" autoComplete="tel" className="py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border-gray-300 rounded-md" placeholder="(123) 456-7890" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <div className="mt-1">
                <input id="email" name="entry.1252002960" type="email" autoComplete="email" className="py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border-gray-300 rounded-md" placeholder="you@example.com" />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position Applying For</label>
              <div className="mt-1">
                <select id="position" className="py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border-gray-300 rounded-md bg-white">
                  <option value="CHHA (Certified Home Health Aide)">CHHA (Certified Home Health Aide)</option>
                  <option value="Companion">Companion</option>
                  <option value="RN (Registered Nurse)">RN (Registered Nurse)</option>
                </select>
              </div>
            </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                <div className="mt-1">
                  <textarea id="message" name="entry.1904084952" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border-gray-300 rounded-md" placeholder="Tell us a little about yourself..."></textarea>
                </div>
              </div>
            <div className="sm:col-span-2 text-center">
              <button type="submit" className="btn-primary w-full sm:w-auto">
                SUBMIT
              </button>
            </div>
          </form>
          {/* Hidden iframe to receive the Google Forms response so the page doesn't navigate */}
          <iframe ref={iframeRef} name="hidden_iframe" style={{ display: 'none' }} title="hidden_iframe"></iframe>

          {/* Success banner */}
          {submitted && (
            <div className="mt-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Thank you! Your application has been submitted successfully. We'll contact you soon.</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
