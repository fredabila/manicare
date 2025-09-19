import React from 'react';

const HIPAAPrivacyStatementPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="py-20" style={{background: 'linear-gradient(135deg, #10416e 0%, #1d5981 50%, #0c1929 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="brand-header text-4xl md:text-5xl mb-6" style={{color: '#fec900'}}>
            HIPAA Privacy Statement
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
                At Manicare Home Health Agency, we are committed to protecting the privacy and security of
                your health information in accordance with the Health Insurance Portability and Accountability
                Act of 1996 (HIPAA) and all applicable federal and New Jersey state privacy laws.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">Your Health Information</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                When you receive services from Manicare Home Health Agency, we create a record of your care.
                This record may include details about your medical condition, the services we provide, and
                billing information. We use this information to:
              </p>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Provide safe and effective care</li>
                <li>Communicate with your doctors and other healthcare providers</li>
                <li>Bill for services and comply with legal and regulatory requirements</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">Your Privacy Rights</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li>Access and request a copy of your health records</li>
                <li>Request corrections to your health information if you believe it is incorrect or incomplete</li>
                <li>Request restrictions on how your information is used or shared (to the extent permitted by
                law)</li>
                <li>Receive an accounting of certain disclosures of your health information</li>
                <li>Request confidential communications (for example, asking us to contact you at a specific
                phone number or address)</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">How We Protect Your Information</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                We use physical, electronic, and administrative safeguards to protect your information against
                unauthorized access, use, or disclosure. Only authorized staff are permitted to access your health
                information, and only for legitimate business or care purposes.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">How We May Use and Share Information</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                We may use or share your information for:
              </p>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-6 space-y-2 font-medium">
                <li><strong>Treatment</strong> – to coordinate your care with doctors, hospitals, or other providers</li>
                <li><strong>Payment</strong> – to bill insurance companies or government programs</li>
                <li><strong>Healthcare operations</strong> – to improve our services and ensure quality care</li>
                <li><strong>When required by law</strong> – such as reporting public health risks or responding to legal
                requests</li>
              </ul>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">Questions or Concerns</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                If you have any questions about this Privacy Statement or believe your privacy rights have been
                violated, please contact:
              </p>
              <div className="bg-mani-light-azure/50 p-6 rounded-lg mb-6">
                <div className="text-mani-dark-blue font-medium">
                  <p className="mb-2"><strong>Manicare Home Health Agency, Privacy Officer</strong></p>
                  <p className="mb-2">2165 Morris Ave. St #15. Union, NJ. 07083</p>
                  <p className="mb-2">
                    <strong>Tel:</strong> <a href="tel:8482802532" className="text-mani-yellow hover:underline">848-280-2532</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:a.greene@manicarehomehealth.com" className="text-mani-yellow hover:underline">a.greene@manicarehomehealth.com</a>
                  </p>
                </div>
              </div>
              <p className="text-mani-dark-blue leading-relaxed font-medium">
                You may also file a complaint directly with the U.S. Department of Health & Human Services,
                Office for Civil Rights. Filing a complaint will not affect the care you receive.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HIPAAPrivacyStatementPage;
