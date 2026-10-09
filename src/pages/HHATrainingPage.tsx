import React, { useState } from 'react';

// Set this to Manicare's online payment link (e.g. Square, Stripe, Autobooks) to show the
// "Pay Tuition" buttons. While it is empty, applicants are asked to call to arrange payment.
const TUITION_PAYMENT_URL = '';

const topics = ['Personal care', 'Patient rights', 'Infection control', 'Safety procedures', 'Nutrition', 'Communication skills'];

const eligibility = [
  'Be at least 18 years old',
  'Hold a high school diploma or GED',
  'Complete a criminal background check and fingerprinting',
  'Demonstrate basic communication skills and compassion for patient care',
];

const reasons = [
  { title: 'State-Approved & CAHC Accredited', text: 'Train with a state-approved home health agency accredited by CAHC.' },
  { title: 'Hybrid Flexibility', text: 'Complete 60 hours of theory online, then build skills in 16 hours of in-person clinicals.' },
  { title: 'Fast Track', text: 'A 3-week program designed for quick entry into the home care workforce.' },
  { title: 'Career Pathway', text: 'Prepares you for NJ CHHA certification and a meaningful career in home care.' },
];

const CheckIcon: React.FC = () => (
  <svg className="h-5 w-5 flex-shrink-0 text-mani-dark-blue" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
  </svg>
);

const PayButton: React.FC<{ className?: string }> = ({ className = '' }) =>
  TUITION_PAYMENT_URL ? (
    <a href={TUITION_PAYMENT_URL} target="_blank" rel="noopener noreferrer" className={`btn-secondary ${className}`}>
      Pay Tuition
    </a>
  ) : null;

const HHATrainingPage: React.FC = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    setStatus('sending');
    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          formType: 'hha-training',
          position: 'HHA Training Program',
          name: data.get('name'),
          phone: data.get('phone'),
          email: data.get('email'),
          message: data.get('message') || 'Applying for the HHA Training Program.',
        }),
      });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setStatus('sent');
      form.reset();
    } catch (err) {
      console.error('HHA application error', err);
      setStatus('error');
    }
  };

  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section
        className="relative text-white py-20 px-4 sm:px-6 lg:px-8"
        style={{
          backgroundImage:
            'linear-gradient(135deg, rgba(12, 25, 41, 0.92) 0%, rgba(16, 65, 110, 0.88) 55%, rgba(29, 89, 129, 0.9) 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto grid gap-10 lg:grid-cols-[1.2fr_1fr] items-center">
          <div>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase text-mani-yellow">HHA Training</p>
            <h1 className="mt-3 text-4xl md:text-5xl font-bold brand-header leading-tight">
              Home Health Aide (HHA) Training Program
            </h1>
            <p className="mt-5 text-lg md:text-xl text-mani-light-azure">
              Compassionate care training for New Jersey's home healthcare professionals.
            </p>
            <div className="mt-6 inline-flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white/10 border border-white/25 px-4 py-2 text-sm font-medium">State-approved agency</span>
              <span className="rounded-full bg-white/10 border border-white/25 px-4 py-2 text-sm font-medium">Accredited by CAHC</span>
              <span className="rounded-full bg-white/10 border border-white/25 px-4 py-2 text-sm font-medium">3-week hybrid program</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#apply" className="btn-primary text-lg px-8 py-4 shadow-xl">Apply Now</a>
              <PayButton className="text-lg px-8 py-4 !text-white !border-white hover:!bg-white hover:!text-mani-dark-blue" />
            </div>
          </div>
          <img
            src="/hha-training-cover.jpg"
            alt="Online HHA Training & Certification — 3 weeks — Manicare Home Health"
            className="w-full max-w-md mx-auto rounded-2xl shadow-2xl border-4 border-white/20"
          />
        </div>
      </section>

      {/* Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border-l-4 border-mani-yellow bg-mani-light-azure p-8 shadow-sm space-y-4 text-lg text-gray-700 leading-relaxed">
            <p>
              The Home Health Aide (HHA) program is offered through Manicare Home Health, a state-approved agency authorized
              to provide home health aide training and services.
            </p>
            <p>
              The program prepares students with the knowledge, skills, and hands-on training needed to provide safe,
              compassionate, and competent care to individuals in their homes. Manicare Home Health is Accredited by CAHC.
            </p>
          </div>
        </div>
      </section>

      {/* Program Format */}
      <section className="py-16 bg-mani-light-azure">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold brand-header text-mani-dark-blue text-center">Program Format</h2>
          <div className="mt-10 grid gap-8 md:grid-cols-2 items-start">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-mani-dark-blue">Hybrid Training Program</h3>
              <div className="mt-6 rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-semibold text-mani-dark-blue">Online Instruction</h4>
                  <span className="rounded-full bg-mani-yellow px-3 py-1 text-sm font-semibold text-mani-dark-blue whitespace-nowrap">60 hours</span>
                </div>
                <p className="mt-3 text-gray-600">Comprehensive online coursework covering:</p>
                <ul className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {topics.map((t) => (
                    <li key={t} className="flex items-center gap-2 text-gray-700">
                      <CheckIcon /> {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 rounded-xl border border-gray-200 p-5">
                <div className="flex items-center justify-between gap-4">
                  <h4 className="font-semibold text-mani-dark-blue">In-Person Clinicals</h4>
                  <span className="rounded-full bg-mani-yellow px-3 py-1 text-sm font-semibold text-mani-dark-blue whitespace-nowrap">16 hours</span>
                </div>
                <p className="mt-3 text-gray-600">
                  Supervised hands-on practice of patient care tasks such as bathing, feeding, mobility assistance, and vital
                  signs under the guidance of licensed professionals.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-mani-dark-blue">Program Length</h3>
              <p className="mt-6 text-5xl font-bold text-mani-azure">3 weeks</p>
              <p className="mt-2 text-gray-600">Hybrid program combining online theory with in-person clinical training.</p>
              <dl className="mt-6 divide-y divide-gray-200 border-t border-gray-200">
                <div className="flex justify-between py-3"><dt className="text-gray-600">Online</dt><dd className="font-semibold text-mani-dark-blue">60 hours</dd></div>
                <div className="flex justify-between py-3"><dt className="text-gray-600">In-person Clinicals</dt><dd className="font-semibold text-mani-dark-blue">16 hours</dd></div>
                <div className="flex justify-between py-3"><dt className="text-gray-600">Total Program</dt><dd className="font-semibold text-mani-dark-blue">76 hours</dd></div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold brand-header text-mani-dark-blue text-center">Student Eligibility &amp; Prerequisites</h2>
          <p className="mt-3 text-center text-gray-600">To enroll in the program, applicants must:</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {eligibility.map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-mani-light-azure p-4 text-gray-700">
                <CheckIcon /> {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certification */}
      <section className="py-16 bg-mani-light-azure">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold brand-header text-mani-dark-blue text-center">Certification Requirements</h2>
          <div className="mt-10 rounded-2xl bg-white p-8 shadow-lg border-t-4 border-mani-yellow">
            <h3 className="text-xl font-bold text-mani-dark-blue">New Jersey Board of Nursing Certification</h3>
            <p className="mt-2 text-gray-600">
              Graduates are eligible to apply for NJ Certified Homemaker-Home Health Aide certification through the New
              Jersey Board of Nursing.
            </p>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-6 shadow">
              <h4 className="font-semibold text-mani-dark-blue">Complete All Requirements</h4>
              <p className="mt-2 text-gray-600">Students must complete all required online and clinical hours to be eligible for certification.</p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow">
              <h4 className="font-semibold text-mani-dark-blue">2-Year Validity</h4>
              <p className="mt-2 text-gray-600">Certification is valid for 2 years; recertification requires continuing education and employment verification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Manicare */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold brand-header text-mani-dark-blue text-center">Why Train With Manicare?</h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r) => (
              <div key={r.title} className="rounded-2xl border-t-4 border-mani-yellow bg-mani-light-azure p-6 text-center shadow-sm">
                <h3 className="font-bold text-mani-dark-blue">{r.title}</h3>
                <p className="mt-2 text-sm text-gray-600">{r.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-2xl border border-mani-yellow bg-yellow-50 p-6">
            <h3 className="font-bold text-mani-dark-blue">Important Notice</h3>
            <p className="mt-2 text-gray-700">
              All applicants who wish to become a Certified Homemaker-Home Health Aide (CHHA) must apply for initial
              certification with the New Jersey Board of Nursing online. The Board of Nursing does not issue
              conditional/temporary work certifications, so all applicants must undergo a criminal background check before
              beginning employment as a CHHA.
            </p>
          </div>
        </div>
      </section>

      {/* Apply */}
      <section id="apply" className="py-20 bg-mani-light-azure scroll-mt-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold brand-header text-mani-dark-blue">Apply for HHA Training</h2>
            <p className="mt-4 text-lg text-gray-600">
              Complete the application below and our team will contact you about class dates, enrollment, and tuition
              payment.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 rounded-2xl bg-white p-8 shadow-lg">
            <div className="sm:col-span-2">
              <label htmlFor="hha-name" className="block text-sm font-medium text-gray-700">Full Name *</label>
              <input id="hha-name" name="name" type="text" required autoComplete="name" className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border border-gray-300 rounded-md" placeholder="Your full name" />
            </div>
            <div>
              <label htmlFor="hha-phone" className="block text-sm font-medium text-gray-700">Phone *</label>
              <input id="hha-phone" name="phone" type="tel" required autoComplete="tel" className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border border-gray-300 rounded-md" placeholder="(123) 456-7890" />
            </div>
            <div>
              <label htmlFor="hha-email" className="block text-sm font-medium text-gray-700">Email *</label>
              <input id="hha-email" name="email" type="email" required autoComplete="email" className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border border-gray-300 rounded-md" placeholder="you@example.com" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="hha-message" className="block text-sm font-medium text-gray-700">Anything we should know?</label>
              <textarea id="hha-message" name="message" rows={4} className="mt-1 py-3 px-4 block w-full shadow-sm focus:ring-mani-yellow focus:border-mani-yellow border border-gray-300 rounded-md" placeholder="Preferred start date, questions, etc." />
            </div>
            <div className="sm:col-span-2 flex flex-wrap items-center justify-center gap-4">
              <button type="submit" disabled={status === 'sending'} className="btn-primary px-10 disabled:opacity-60">
                {status === 'sending' ? 'Submitting…' : 'Submit Application'}
              </button>
              <PayButton className="px-10" />
            </div>
            {status === 'sent' && (
              <p className="sm:col-span-2 rounded-lg border border-green-400 bg-green-100 p-4 text-green-700 font-medium">
                Thank you! Your application has been submitted. Our team will contact you soon about next steps and payment.
              </p>
            )}
            {status === 'error' && (
              <p className="sm:col-span-2 rounded-lg border border-red-300 bg-red-50 p-4 text-red-700 font-medium">
                Something went wrong sending your application. Please call or text us at (848) 280-1169.
              </p>
            )}
          </form>

          <p className="mt-6 text-center text-gray-600">
            {TUITION_PAYMENT_URL ? 'Already applied? Use "Pay Tuition" to complete your payment. ' : ''}
            Questions about the program or payment? Call or text{' '}
            <a href="tel:8482801169" className="font-semibold text-mani-azure underline">(848) 280-1169</a>.
          </p>
        </div>
      </section>
    </div>
  );
};

export default HHATrainingPage;
