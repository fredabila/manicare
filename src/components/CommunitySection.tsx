import React from 'react';

const counties = [
  'Atlantic', 'Bergen', 'Burlington', 'Camden', 'Cape May', 'Cumberland',
  'Essex', 'Gloucester', 'Hudson', 'Hunterdon', 'Mercer', 'Middlesex',
  'Monmouth', 'Morris', 'Ocean', 'Passaic', 'Salem', 'Somerset',
  'Sussex', 'Union', 'Warren',
];

const CommunitySection: React.FC = () => {
  return (
    <div className="py-16 lg:py-24 bg-white w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="brand-header text-3xl md:text-4xl text-mani-dark-blue mb-6">Serving Our Community</h2>
          <p className="text-mani-azure text-lg max-w-4xl mx-auto leading-relaxed font-medium">
            We are proud to offer our comprehensive home healthcare services across the following counties in New Jersey:
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {counties.map((county, index) => (
            <span 
              key={county} 
              className="bg-mani-light-azure px-4 py-2 rounded-xl text-mani-dark-blue font-semibold shadow-md hover:shadow-lg transition-all hover:bg-mani-yellow/10"
            >
              {county}
              {index < counties.length - 1 && <span className="mx-2 text-mani-azure">•</span>}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommunitySection;