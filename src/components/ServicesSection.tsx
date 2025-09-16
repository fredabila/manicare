import React, { useState } from 'react';
import ServiceModal from './ServiceModal';

const services = [
  {
    title: 'Companion Care',
    image: '/assets/companion-care.png',
    shortDescription: 'Friendly support through conversation, companionship, and emotional connection.',
    fullDescription: 'Our companion care services provide friendly support through conversation, companionship, and emotional connection to help clients stay engaged, active, and connected. Whether it’s playing games, reading together, or accompanying clients on walks and outings, our team ensures that every day feels meaningful and uplifting.',
  },
  {
    title: 'Personal Care',
    image: '/assets/personal-care.png',
    shortDescription: 'Support with daily living activities while promoting dignity and independence.',
    fullDescription: 'Our Personal Care services are designed to support daily living while promoting dignity, independence, and comfort. Our caregivers assist clients with essential activities such as bathing, grooming, dressing, toileting, mobility, and feeding.',
  },
  {
    title: 'Respite Care',
    image: '/assets/respite-care.png',
    shortDescription: 'Giving family caregivers a chance to rest and recharge.',
    fullDescription: 'Caring for a loved one is rewarding, but it can also be physically and emotionally demanding. Our Respite Care services give family caregivers the chance to rest, recharge, or attend to personal responsibilities while knowing their loved one is in safe hands. Whether you need a few hours a week, overnight support, or extended coverage, our trained caregivers are available to help.',
  },
  {
    title: 'Homemaking',
    image: '/assets/homemaking.png',
    shortDescription: 'Helping clients maintain a clean, safe, and organized home.',
    fullDescription: 'Our homemaking services help clients maintain a clean, safe, and organized home environment. From light housekeeping and laundry to meal preparation and errands, we provide support that makes daily life easier and more comfortable for you or your loved ones.',
  },
  {
    title: 'Live-In/24-Hour Care',
    image: '/assets/live-in-care.png',
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
              <div className="p-4 bg-white group-hover:bg-mani-light-azure transition-colors duration-300">
                <h3 className="text-lg font-semibold text-mani-dark-blue text-center group-hover:text-mani-azure transition-colors duration-300">{service.title}</h3>
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