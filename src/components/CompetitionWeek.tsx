import React from 'react';
import ParticleBackground from './ParticleBackground';
import renderHeroSection from './Section/renderHeroSection';
import renderBenefitsSection from './Section/renderBenefitsSection';
import renderEventsSection from './Section/renderEventsSection';
import renderSpeakersSection from './Section/renderSpeakersSection';
import renderContactSection from './Section/renderContactSection';  
import CountdownSection from './Section/CountdownSection';
const CompetitionWeek: React.FC = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-teal-900 to-green-900 relative overflow-hidden">
        <ParticleBackground />
        <div className="relative z-10">
          {renderHeroSection()}
          {CountdownSection()}
          {renderBenefitsSection()}
          {renderEventsSection()}
          {renderSpeakersSection()}

          {renderContactSection()}
        </div>
       
      </div>
    </div>
  );
};

export default CompetitionWeek;