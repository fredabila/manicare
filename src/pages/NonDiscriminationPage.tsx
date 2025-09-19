import React from 'react';

const NonDiscriminationPage: React.FC = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="py-20" style={{background: 'linear-gradient(135deg, #10416e 0%, #1d5981 50%, #0c1929 100%)'}}>
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="brand-header text-4xl md:text-5xl mb-6" style={{color: '#fec900'}}>
            Non-Discrimination Policy
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
                Manicare Home Health Agency complies with applicable federal civil rights laws and the New
                Jersey Law Against Discrimination. We do not discriminate against any person on the basis of
                race, color, national origin, religion, creed, sex, sexual orientation, gender identity or expression,
                disability, age, marital status, veteran status, or any other characteristic protected under federal or
                state law in admission, treatment, or participation in our programs, services, activities, or in
                employment practices. Manicare Home Care Agency provides Certified Home Care Services and
                ensures that all clients have equal access to care and services, and that all employees are treated
                fairly in hiring, training, promotion, and employment opportunities. We also provide free
                language assistance services to people whose primary language is not English.
              </p>

              <div className="bg-mani-yellow/10 p-6 rounded-lg mt-8">
                <h2 className="brand-header text-xl text-mani-dark-blue mb-4">Filing a Grievance</h2>
                <p className="text-mani-dark-blue leading-relaxed mb-4 font-medium">
                  If you believe you have been discriminated against, you may file a grievance with:
                </p>
                <div className="text-mani-dark-blue font-medium">
                  <p className="mb-2"><strong>Manicare Home Care Agency, Compliance Officer</strong></p>
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

export default NonDiscriminationPage;
