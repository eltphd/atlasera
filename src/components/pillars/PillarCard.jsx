import React from 'react';
import PropTypes from 'prop-types';

const PillarCard = ({ pillar, onClick }) => {
  return (
    <div 
      className="pillar-card" 
      onClick={() => onClick(pillar.id)}
      style={{ borderColor: pillar.color }}
    >
      <div className="pillar-icon">{pillar.icon}</div>
      <img src={pillar.image} alt={pillar.title} className="pillar-image" />
      <h3>{pillar.title}</h3>
      <p className="short-desc">{pillar.shortDesc}</p>
      <button 
        className="learn-more-btn"
        style={{ backgroundColor: pillar.color }}
        type="button"
      >
        Learn More →
      </button>
    </div>
  );
};

PillarCard.propTypes = {
  pillar: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    shortDesc: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired
  }).isRequired,
  onClick: PropTypes.func.isRequired
};

export default PillarCard;

