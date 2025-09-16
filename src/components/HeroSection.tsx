import React from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const slides = [
  {
    text: 'We are Licensed, Insured and Bonded In the State of NJ.',
    image: '/slide1.jpg',
    fallbackBg: 'bg-gradient-to-br from-mani-dark-azure via-mani-azure to-mani-dark-blue',
  },
  {
    text: 'Compassionate Care, Right at Home.',
    image: '/slide2.jpg',
    fallbackBg: 'bg-gradient-to-br from-mani-azure via-mani-dark-azure to-mani-dark-blue',
  },
  {
    text: '24-hour Professional Care You Can Rely On.',
    image: '/slide3.jpg',
    fallbackBg: 'bg-gradient-to-br from-mani-dark-blue via-mani-dark-azure to-mani-azure',
  },
];

const HeroSection: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div 
              className="w-full h-[70vh] min-h-[500px] relative"
              style={{
                background: slide.image 
                  ? `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${slide.image})`
                  : '',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              {!slide.image && (
                <div className={`absolute inset-0 ${slide.fallbackBg}`}></div>
              )}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="max-w-3xl mx-auto px-4 text-center">
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20 inline-block">
                    <h1 className="brand-header text-3xl md:text-4xl lg:text-5xl text-mani-yellow leading-tight">
                      {slide.text}
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
      <div className="relative -mt-20 pb-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-mani-light-azure p-6 md:p-8 lg:p-10 rounded-xl shadow-2xl text-center">
            <p className="text-mani-dark-blue text-base md:text-lg leading-relaxed mb-8 font-medium">
              We are a licensed home health care agency dedicated to providing quality, reliable, and personalized care for seniors, individuals with disabilities, and those recovering from illness. At Manicare Home Health, we tailor our services to meet each client's unique needs.
            </p>
            <Link to="/contact" className="btn-primary shadow-lg block">
              Get a Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;