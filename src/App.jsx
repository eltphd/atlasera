import React from 'react';
import researchImg from './assets/research.png';
import learningImg from './assets/learning.png';
import knowledgeImg from './assets/knowledge.png';
import globalImg from './assets/global.png';
import innovationImg from './assets/innovation.png';

/**
 * The main application component for the Atlas ERA website. This component
 * defines the navigation bar, header and the cards that represent the
 * research pillars of the Atlas Education Research Association. Images are
 * imported statically from the assets folder so that they can be bundled
 * correctly by Vite.
 */
export default function App() {
  // Configuration for each research pillar. Changing the title,
  // description or image here will automatically update the UI.
  const pillars = [
    {
      key: 'research',
      title: 'Research & Inquiry',
      description: 'Cultivating critical thinking and investigation.',
      image: researchImg,
    },
    {
      key: 'learning',
      title: 'Learning Ecosystems',
      description: 'Designing holistic educational environments.',
      image: learningImg,
    },
    {
      key: 'knowledge',
      title: 'Knowledge Mobilization',
      description: 'Translating research into practice.',
      image: knowledgeImg,
    },
    {
      key: 'global',
      title: 'Global Collaborations',
      description: 'Forging partnerships across borders.',
      image: globalImg,
    },
    {
      key: 'innovation',
      title: 'Applied Innovation',
      description: 'Bridging ideas and technology for impact.',
      image: innovationImg,
    },
  ];

  return (
    <>
      {/* Navigation bar */}
      <nav>
        <div className="logo">ATLAS EDUCATION<br />RESEARCH ASSOCIATION</div>
        <ul>
          <li>Programs</li>
          <li>Membership</li>
          <li>Join</li>
        </ul>
        <div className="cta">Join</div>
      </nav>

      {/* Header section */}
      <header>
        <h1>Research Pillars</h1>
        <p>Explore our core areas of focus and expertise</p>
      </header>

      {/* Pillars list */}
      <div className="pillars-container">
        {pillars.map((pillar) => (
          <div className="pillar-card" key={pillar.key}>
            <img src={pillar.image} alt={pillar.title} />
            <h3>{pillar.title}</h3>
            <p>{pillar.description}</p>
            <button type="button">Learn More</button>
          </div>
        ))}
      </div>
    </>
  );
}