import React from 'react';
import Modal from 'react-modal';

interface ServiceModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  service: {
    title: string;
    image: string;
    fullDescription: string;
  };
}

const ServiceModal: React.FC<ServiceModalProps> = ({ isOpen, onRequestClose, service }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={service.title}
      className="bg-mani-light-azure rounded-xl shadow-2xl p-0 max-w-2xl mx-4 my-8 max-h-[90vh] overflow-auto"
      overlayClassName="fixed inset-0 bg-mani-dark-blue/80 flex items-center justify-center z-50"
    >
      <div className="relative">
        <div className="relative">
          <img src={service.image} alt={service.title} className="w-full h-64 object-cover rounded-t-xl" />
          <div className="absolute inset-0 bg-gradient-to-t from-mani-azure/30 to-transparent rounded-t-xl"></div>
        </div>
        <button
          onClick={onRequestClose}
          className="absolute top-4 right-4 bg-mani-yellow hover:bg-mani-yellow-secondary text-mani-dark-blue rounded-full p-2 shadow-lg transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="p-8">
        <h2 className="brand-header text-2xl md:text-3xl text-mani-dark-blue mb-6">{service.title}</h2>
        <p className="text-mani-azure text-lg leading-relaxed font-medium mb-8">{service.fullDescription}</p>
        <button
          onClick={onRequestClose}
          className="btn-primary w-full shadow-lg"
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default ServiceModal;