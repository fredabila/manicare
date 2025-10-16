import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="py-20" style={{background: 'linear-gradient(135deg, #10416e 0%, #1d5981 50%, #0c1929 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="brand-header text-4xl md:text-5xl mb-6" style={{color: '#fec900'}}>
            Privacy Policy
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
                At Manicare Home Health Agency, we value your privacy and are committed to safeguarding the
                personal information you share with us. This Privacy Policy explains how we collect, use,
                disclose, and protect your personal information when you visit our website or use our services.
                By accessing our website or using our services, you consent to the practices described in this
                Privacy Policy. Please read carefully to understand your rights and responsibilities regarding
                your information.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">1. Information We Collect</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                We may collect the following information when you contact us, inquire about services, or receive
                care:
              </p>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li><strong>Personal Information:</strong> Your name, address, email, phone number, date of birth, and
                other details needed for care coordination.</li>
                <li><strong>Health Information:</strong> Medical history, physician orders, care plans, and other health-
                related information (collected and protected under HIPAA).</li>
                <li><strong>Usage Information:</strong> Your IP address, browser type, and interactions with our website
                (for website performance and security).</li>
                <li><strong>Payment & Billing Information:</strong> Processed securely through trusted third-party
                processors.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">2. How We Use Your Information</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                We may use your information to:
              </p>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Coordinate and provide home health services.</li>
                <li>Communicate with you, your family, or authorized representatives.</li>
                <li>Send appointment reminders, care updates, and agency announcements.</li>
                <li>Process billing, claims, and payments.</li>
                <li>Improve the quality and delivery of our services.</li>
                <li>Comply with legal and regulatory requirements.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">3. Sharing Your Information</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                We do not sell or rent your information. We may share it only with:
              </p>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Licensed clinicians, caregivers, and staff involved in your care.</li>
                <li>Health insurance companies, payers, or government programs for billing purposes.</li>
                <li>Trusted service providers (IT, billing processors) under confidentiality agreements.</li>
                <li>When required by law or to protect your health and safety.</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">4. Data Security</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                We use reasonable safeguards to protect your information from unauthorized access or
                disclosure. However, no system is completely secure, and we cannot guarantee absolute
                protection.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">5. Your Rights</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                You may request access, corrections, or copies of your health information by contacting us at
                <a href="mailto:info@manicarehomehealth.com" className="text-mani-yellow hover:underline"> info@manicarehomehealth.com</a>.
                We will respond in accordance with HIPAA and state regulations.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">6. Children's Privacy</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                Our services are directed toward adults and medically eligible patients. We do not knowingly
                collect personal information from children without parental or guardian consent.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">7. Policy Updates</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                We may update this Privacy Policy periodically. The updated version will be posted with a
                revised Effective Date.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">8. Contact Us</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                For questions regarding this Privacy Policy, please contact us:
              </p>
              <div className="bg-mani-light-azure/50 p-6 rounded-lg">
                <p className="text-mani-dark-blue font-medium mb-2">
                  <strong>Email:</strong> <a href="mailto:info@manicarehomehealth.com" className="text-mani-yellow hover:underline">info@manicarehomehealth.com</a>
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

export default PrivacyPolicyPage;
