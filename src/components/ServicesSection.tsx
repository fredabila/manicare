import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const services = [
  {
    title: 'Companion Care',
    image: 'https://www.firstlighthomecare.com/wp-content/uploads/2023/11/firstlight-companion-care-970x843.jpg',
    shortDescription: 'Friendly support through conversation, companionship, and emotional connection.',
    fullDescription: 'Our companion care services provide friendly support through conversation, companionship, and emotional connection to help clients stay engaged, active, and connected. Whether it’s playing games, reading together, or accompanying clients on walks and outings, our team ensures that every day feels meaningful and uplifting.',
  },
  {
    title: 'Personal Care',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBmUiH-omz3Pnz96d4JBz3OnzCwZ6C_6jVeAYVxGLiIjug_GRbqi6uRNm8jX2YGgyvj0pQ0TKRmN6oucfowtqdp_h23G9wtI_OH8I9nfCbrRXfRLE6Rw3629_RmPuVJ0ugP_SdnZbkDKFpTkXdTKrog96cIk7AarmT7UMoYe3yWb_njmj0Q5D_ztJOdQ2riR9UFzkQC5rfUf9DqyEhihLriBQmQ7uIfy1wkOcoKda29cvBrr2I2maZua2qRam6mgr0r79uLXoSqp5s',
    shortDescription: 'Support with daily living activities while promoting dignity and independence.',
    fullDescription: 'Our Personal Care services are designed to support daily living while promoting dignity, independence, and comfort. Our caregivers assist clients with essential activities such as bathing, grooming, dressing, toileting, mobility, and feeding.',
  },
  {
    title: 'Respite Care',
    image: 'https://www.cranehomecare.com/wp-content/uploads/2021/01/Respite-Care.jpg',
    shortDescription: 'Giving family caregivers a chance to rest and recharge.',
    fullDescription: 'Caring for a loved one is rewarding, but it can also be physically and emotionally demanding. Our Respite Care services give family caregivers the chance to rest, recharge, or attend to personal responsibilities while knowing their loved one is in safe hands. Whether you need a few hours a week, overnight support, or extended coverage, our trained caregivers are available to help.',
  },
  {
    title: 'Homemaking',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBupkVBOzjXCrdKbztcxZpp6zJCIELEklaVb6bqM8zTBCihdOceOguCjbyTY-fiNMrqmYmZGpWU6RGyEJnu6XIy5L67okk_9usDFDVxabezEHwNV-mIS7QZSwrVR-Tt0N4rBvnxtLG_W8J53ijswLR4onc_cJhYJbDhWF9t9dJit2YzMU509S7-rzFBBNF5TfitROSB1MAtYdIav3WT1YyJekwBL57G7PQ_tt75LFr-SuR7MA0G8_UaUNbauUfQWdJF54QwwyrG8N0',
    shortDescription: 'Helping clients maintain a clean, safe, and organized home.',
    fullDescription: 'Our homemaking services help clients maintain a clean, safe, and organized home environment. From light housekeeping and laundry to meal preparation and errands, we provide support that makes daily life easier and more comfortable for you or your loved ones.',
  },
  {
    title: 'Live-In/24-Hour Care',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAlk8AK6-xEx8Bh_wB8Q6eLGQle1AuLO6OatWmM_QBTV_qf12zopjVQi_9TtOCbAfR-oecLsudGqTmgMXsBrjj-G9M4Kov0JXhS0JUC_-vys6AYN-hqRbp2Y5FyJJqdopYeV4imvb4udQKrDD31XAjg0uezJN2HMFrniGmYHoRiK8ufv2k7nk2M-A0D1SHAQpykVtYaB4bVZKfMbTHsK6UcngqEK2Gc1jE0Jip5qH7UPlKS_sHCAfUGETORE-3yCB2gwpGSeiUL1hw',
    shortDescription: 'Continuous support for clients who need round-the-clock assistance.',
    fullDescription: 'For clients who need continuous support, Manicare Home Health offers reliable live-in and 24-hour care services. Our trained caregivers remain in the home to provide round-the-clock assistance with personal care, mobility, medication reminders, meal preparation, and companionship.',
  },
];

interface Service {
  title: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
}

const ServicesSection: React.FC = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <div id="services" className="py-16 lg:py-24 bg-mani-light-azure w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="brand-header text-3xl md:text-4xl text-mani-dark-blue mb-6">Our Services</h2>
          <p className="text-mani-azure text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            We offer a wide range of services tailored to meet the unique needs of each individual, ensuring comfort, safety, and well-being in the familiar surroundings of home.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg hover:shadow-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 group"
              onClick={() => setSelectedService(service)}
            >
              <div className="aspect-square overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-mani-azure/20 to-mani-dark-azure/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-4 bg-white group-hover:bg-mani-light-azure transition-colors duration-300 flex flex-col items-center">
                <h3 className="text-lg font-extrabold text-mani-dark-blue text-center group-hover:text-mani-azure transition-colors duration-300 mb-2 underline decoration-mani-yellow decoration-2">{service.title}</h3>
                <button className="mt-1 px-4 py-2 bg-mani-yellow text-mani-dark-blue rounded-full font-semibold text-xs shadow hover:bg-mani-yellow-secondary transition-colors duration-200">Learn More</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedService && (
        <ServiceModal
          isOpen={!!selectedService}
          onRequestClose={() => setSelectedService(null)}
          service={selectedService}
        />
      )}
    </div>
  );
};

export default ServicesSection;