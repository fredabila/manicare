import React from 'react';
import { Link } from 'react-router-dom';

const faqTeasers = [
  {
    question: "What services does Manicare Home Health provide?",
    answer: "We offer a wide range of services, including personal care, companion care, respite care, live-in/24-hour care, and homemaking services: all tailored to meet the unique needs of each client."
  },
  {
    question: "Are your caregivers licensed and trained?",
    answer: "Yes. All our caregivers are carefully screened, trained, licensed or certified as required, and undergo background checks to ensure safety, professionalism, and quality care."
  },
  {
    question: "How quickly can services start?",
    answer: "In most cases, services can begin within 12-24 hours after the initial assessment and care plan approval."
  }
];

const FAQTeaser: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 bg-mani-light-azure w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="brand-header text-3xl md:text-4xl text-mani-dark-blue mb-4">Got Questions?</h2>
          <p className="text-mani-azure text-lg leading-relaxed font-medium">
            Here are some common questions our clients ask. Have more? We're here to help!
          </p>
        </div>

        <div className="space-y-4 mb-8">
          {faqTeasers.map((faq, index) => (
            <div key={index} className="bg-white border-2 border-mani-azure/20 rounded-xl shadow-lg overflow-hidden hover:border-mani-yellow/50 transition-colors">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-mani-light-azure transition-colors"
              >
                <span className="font-semibold text-mani-dark-blue pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-mani-azure transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 bg-mani-light-azure/50">
                  <p className="text-mani-dark-blue leading-relaxed font-medium">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/contact"
            className="btn-secondary inline-block shadow-lg"
          >
            View All FAQs
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQTeaser;