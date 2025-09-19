import React from 'react';

const teamMembers = [
  {
    name: "EMMANUEL YEBOAH, FNP-C",
    title: "Director"
  },
  {
    name: "NIKKI G. YEBOAH, BSC. CIS",
    title: "Administrator"
  },
  {
    name: "ANDRAE LACORTE, BSN, RN",
    title: "Director of Nursing (DON)"
  },
  {
    name: "ABEIKU GREENE, EMPA, NYU",
    title: "Billing & Authorization Specialist"
  }
];

const MeetOurTeamSection: React.FC = () => {
  return (
    <div className="py-16 bg-mani-light-azure">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="brand-header text-3xl md:text-4xl text-mani-dark-blue mb-4">Meet Our Team</h2>
          <p className="text-mani-azure text-lg leading-relaxed font-medium">
            Our dedicated professionals are committed to providing exceptional care and service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="text-center">
              {/* Photo Frame */}
              <div className="mb-6">
                <div className="w-48 h-48 mx-auto bg-white rounded-full border-4 border-mani-azure/30 shadow-lg flex items-center justify-center overflow-hidden">
                  {/* Placeholder for photo */}
                  <div className="w-full h-full bg-mani-light-azure/50 flex items-center justify-center">
                    <svg 
                      className="w-24 h-24 text-mani-azure/60" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Name and Title */}
              <div className="space-y-2">
                <h3 className="text-mani-dark-blue font-bold text-sm leading-tight">
                  {member.name}
                </h3>
                <p className="text-mani-azure font-medium text-sm">
                  {member.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MeetOurTeamSection;
