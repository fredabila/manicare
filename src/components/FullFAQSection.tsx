import React from 'react';

const faqs = [
  {
    question: "What services does Manicare Home Health provide?",
    answer: "We offer a wide range of services, including personal care, companion care, respite care, live-in/24-hour care, and homemaking services: all tailored to meet the unique needs of each client."
  },
  {
    question: "Are your caregivers licensed and trained?",
    answer: "Yes. All our caregivers are carefully screened, trained, licensed or certified as required, and undergo background checks to ensure safety, professionalism, and quality care."
  },
  {
    question: "Is Manicare Home Health licensed in New Jersey?",
    answer: "Absolutely. Manicare Home Health is licensed, insured, and bonded in the State of New Jersey, giving you peace of mind that you are receiving regulated, professional care. Verify HERE."
  },
  {
    question: "Can I customize the care plan for my loved one?",
    answer: "Yes. We work with you and your family to create a personalized care plan that fits your loved one's health, lifestyle, and preferences."
  },
  {
    question: "Do you provide 24-hour or live-in care?",
    answer: "Yes. We offer flexible care options, including part-time, full-time, and 24-hour live-in care, depending on your needs."
  },
  {
    question: "Do you provide CHHA training and certification?",
    answer: "Yes. Manicare Home Health offers Certified Home Health Aide (CHHA) training programs approved in New Jersey. We provide classroom instruction, hands-on training, and certification preparation to help individuals start a rewarding career in home health care. Click HERE."
  },
  {
    question: "How do you ensure the safety of clients at home?",
    answer: "Our caregivers are trained to follow safety protocols, assist with mobility, and monitor for risks. We also match caregivers based on clients' needs and personalities to ensure comfort and trust."
  },
  {
    question: "Do you accept insurance or private pay?",
    answer: "We accept a variety of payment options, including private pay, long-term care insurance, and certain state programs. Please call us and we will be happy to guide you through your coverage options."
  },
  {
    question: "How quickly can services start?",
    answer: "In most cases, services can begin within 12-24 hours after the initial assessment and care plan approval."
  },
  {
    question: "How do I get started with Manicare Home Health?",
    answer: "Simply contact us to schedule a free in-home consultation. We will discuss your needs, create a tailored care plan, and match you with the right caregiver."
  }
];

const FullFAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="py-16 lg:py-24 bg-mani-light-azure w-full">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-header text-3xl md:text-4xl text-mani-dark-blue mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-mani-azure text-lg leading-relaxed max-w-3xl mx-auto font-medium">
            Get answers to the most common questions about our home healthcare services, 
            caregivers, and how we can help you and your loved ones.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-mani-light-azure transition-colors focus:outline-none focus:bg-mani-light-azure"
              >
                <span className="font-semibold text-mani-dark-blue pr-4 text-lg">
                  {index + 1}. {faq.question}
                </span>
                <div className="flex-shrink-0">
                  <svg
                    className={`w-6 h-6 text-mani-azure transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}>
                <div className="px-6 pb-5 bg-mani-light-azure/30">
                  <div className="border-t border-mani-azure/30 pt-4">
                    <p className="text-mani-dark-blue leading-relaxed text-base font-medium">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-16 text-center bg-white rounded-xl p-8 shadow-lg">
          <h3 className="brand-header text-2xl text-mani-dark-blue mb-4">
            Still Have Questions?
          </h3>
          <p className="text-mani-azure mb-6 text-lg font-medium">
            We're here to help! Contact us for personalized answers and a free consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:848.280.1169" 
              className="btn-secondary inline-flex items-center justify-center shadow-lg"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us Now
            </a>
            <button className="btn-primary shadow-lg">
              Get Free Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullFAQSection;