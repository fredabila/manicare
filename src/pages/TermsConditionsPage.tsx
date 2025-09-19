import React from 'react';

const TermsConditionsPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="py-20" style={{background: 'linear-gradient(135deg, #10416e 0%, #1d5981 50%, #0c1929 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="brand-header text-4xl md:text-5xl mb-6" style={{color: '#fec900'}}>
            Terms & Conditions
          </h1>
          <p className="text-xl text-white leading-relaxed font-medium">
            Effective Date: September 1, 2025
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-mani-light-azure">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="prose prose-lg max-w-none">
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                By accessing or using Manicare Home Health Agency's website and services, you agree to the
                following terms:
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">1. Use of Our Website</h2>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>You agree to use the website only for lawful purposes.</li>
                <li>You will not attempt to disrupt or misuse the site's functionality.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">2. Service Eligibility & Enrollment</h2>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Services require physician orders, insurance approval (if applicable), and clinical
                eligibility.</li>
                <li>You must provide accurate personal and health information to ensure proper care
                coordination.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">3. Payments and Billing</h2>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Private-pay clients must submit payment according to their service agreement.</li>
                <li>Insurance-covered services will be billed directly to the payer; you are responsible for
                any co-pays, deductibles, or uncovered services.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">4. Service Participation</h2>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>You agree to follow the agreed care plan and notify us of any schedule changes at least 24
                hours in advance.</li>
                <li>We reserve the right to discontinue services for safety concerns, non-payment, or
                repeated last-minute cancellations.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">5. Staff and Caregiver Conduct</h2>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Our staff are trained and licensed per state requirements.</li>
                <li>Clients and household members must provide a safe and respectful environment for
                caregivers.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">6. Confidentiality</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                All patient information is kept confidential in compliance with HIPAA. See details
                under HIPAA policy.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">7. Limitation of Liability</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                While we strive to deliver high-quality care, Manicare Home Health Agency is not liable for any
                indirect, incidental, or consequential damages arising from the use of our services.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">8. Policy Changes</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                We may update these Terms & Conditions periodically. Updates will be posted with a
                revised Effective Date.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">9. Contact Us</h2>
              <div className="bg-mani-light-azure/50 p-6 rounded-lg">
                <p className="text-mani-dark-blue font-medium mb-2">
                  <strong>Email:</strong> <a href="mailto:manicarehh@gmail.com" className="text-mani-yellow hover:underline">manicarehh@gmail.com</a>
                </p>
                <p className="text-mani-dark-blue font-medium">
                  <strong>Phone:</strong> <a href="tel:8482801168" className="text-mani-yellow hover:underline">(848) 280-1168</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsPage;
