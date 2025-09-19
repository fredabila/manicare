import React from 'react';

const PatientRightsResponsibilitiesPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="py-20" style={{background: 'linear-gradient(135deg, #10416e 0%, #1d5981 50%, #0c1929 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="brand-header text-4xl md:text-5xl mb-6" style={{color: '#fec900'}}>
            Patient Rights and Responsibilities
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
                Manicare Home Health Agency is committed to providing safe, respectful, and high-quality care.
                As our client, you have certain rights and responsibilities to ensure that your care is effective and
                that you are treated with dignity at all times.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">Your Rights as a Patient</h2>
              
              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Respect and Dignity</h3>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                Be treated with respect, dignity, courtesy, and privacy regardless of age, race,
                color, religion, sex, gender identity, national origin, disability, marital status,
                veteran status, sexual orientation, or source of payment.
              </p>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Quality Care</h3>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-4 space-y-2 font-medium">
                <li>Receive care that is appropriate, safe, and professional, delivered by qualified
                staff.</li>
                <li>Be informed of the name and role of each caregiver providing services.</li>
              </ul>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Participation in Care</h3>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-4 space-y-2 font-medium">
                <li>Be fully informed of your care plan and participate in planning and decisions
                about your treatment and services.</li>
                <li>Refuse any care, treatment, or service to the extent permitted by law, and be informed of
                the possible consequences of such refusal.</li>
              </ul>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Privacy and Confidentiality</h3>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-4 space-y-2 font-medium">
                <li>Have your medical information kept confidential in accordance with HIPAA and
                other applicable laws.</li>
                <li>Review and request a copy of your medical records.</li>
              </ul>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Information and Communication</h3>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-4 space-y-2 font-medium">
                <li>Receive information about your care in a manner you understand, including
                translation or interpreter services when needed.</li>
                <li>Be informed of any changes in your plan of care or services.</li>
              </ul>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Grievances and Complaints</h3>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-4 space-y-2 font-medium">
                <li>Voice complaints or grievances about your care or treatment without fear of
                discrimination, retaliation, or interruption of services.</li>
                <li>File complaints with Manicare Home Health Agency, the New Jersey Department of
                Health, or other regulatory agencies.</li>
              </ul>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Financial Transparency</h3>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                Receive clear information about charges, billing, and services covered by
                insurance, Medicare, Medicaid, or private pay.
              </p>

              <h2 className="brand-header text-2xl text-mani-dark-blue mb-4 mt-8">Your Responsibilities as a Patient</h2>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                To help us provide the best possible care, we ask that you:
              </p>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Provide Accurate Information</h3>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                Give complete and accurate information about your health, medical history,
                medications, and insurance coverage.
              </p>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Follow the Plan of Care</h3>
              <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                Work with your care team to follow the agreed-upon care plan and inform us if
                you have concerns, difficulties, or changes in your condition.
              </p>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Respect Staff and Property</h3>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-4 space-y-2 font-medium">
                <li>Treat agency staff with respect and consideration.</li>
                <li>Provide a safe environment for staff providing care in your home.</li>
              </ul>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Communication</h3>
              <ul className="list-disc list-inside text-mani-dark-blue leading-relaxed mb-4 space-y-2 font-medium">
                <li>Notify us promptly of any changes in address, phone number, physician,
                insurance, or emergency contacts.</li>
                <li>Inform us if you cannot keep a scheduled visit.</li>
              </ul>

              <h3 className="text-xl text-mani-dark-blue mb-3 mt-6 font-semibold">Financial Responsibility</h3>
              <p className="text-mani-dark-blue leading-relaxed mb-6 font-medium">
                Provide accurate insurance information and fulfill financial obligations for
                services not covered by insurance.
              </p>

              <div className="bg-mani-light-azure/50 p-6 rounded-lg mt-8">
                <h2 className="brand-header text-xl text-mani-dark-blue mb-4">Contact Information</h2>
                <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                  If you have questions about your rights and responsibilities, or if you wish to file a complaint, please contact:
                </p>
                <div className="text-mani-dark-blue font-medium">
                  <p className="mb-2"><strong>Manicare Home Health Agency – Patient Services Office</strong></p>
                  <p className="mb-2">2165 Morris Ave. St #15. Union, NJ. 07083</p>
                  <p className="mb-2">
                    <strong>Tel:</strong> <a href="tel:8482802532" className="text-mani-yellow hover:underline">848-280-2532</a>
                  </p>
                  <p>
                    <strong>Email:</strong> <a href="mailto:a.greene@manicarehomehealth.com" className="text-mani-yellow hover:underline">a.greene@manicarehomehealth.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientRightsResponsibilitiesPage;
