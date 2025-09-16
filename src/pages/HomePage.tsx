import React from 'react';
import CommunitySection from '../components/CommunitySection';
import FAQTeaser from '../components/FAQTeaser';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';

const HomePage: React.FC = () => {
  return (
    <main className="w-full">
      <HeroSection />
      <ServicesSection />
      <CommunitySection />
      <FAQTeaser />
    </main>
  );
};

export default HomePage;