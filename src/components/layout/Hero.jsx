import React from 'react';

const Hero = () => {
  return (
    <header className="hero">
      <h1>Atlas Education Research Association</h1>
      <p className="tagline">
        Building the infrastructure for a global network of worldschooling educators and researchers
      </p>
      <div className="hero-stats">
        <div className="stat">
          <span className="stat-number">5</span>
          <span className="stat-label">Research Pillars</span>
        </div>
        <div className="stat">
          <span className="stat-number">2</span>
          <span className="stat-label">Legal Entities (Malta + France)</span>
        </div>
        <div className="stat">
          <span className="stat-number">Q1 2026</span>
          <span className="stat-label">Membership Launch</span>
        </div>
      </div>
    </header>
  );
};

export default Hero;

