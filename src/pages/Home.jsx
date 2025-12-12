import React, { useState } from 'react';
import Hero from '../components/layout/Hero';
import PillarCard from '../components/pillars/PillarCard';
import { RESEARCH_PILLARS } from '../components/pillars/pillars.config';

const Home = () => {
  const [selectedPillar, setSelectedPillar] = useState(null);

  const handlePillarClick = (pillarId) => {
    setSelectedPillar(pillarId);
    // TODO: Navigate to pillar detail page or open modal
    console.log('Selected pillar:', pillarId);
  };

  return (
    <>
      <Hero />
      <section className="pillars-section">
        <div className="pillars-container">
          {RESEARCH_PILLARS.map(pillar => (
            <PillarCard 
              key={pillar.id}
              pillar={pillar}
              onClick={handlePillarClick}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;

