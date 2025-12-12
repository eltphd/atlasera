import React from 'react';

const MEMBERSHIP_TIERS = [
  {
    id: 'practitioner',
    name: 'Practitioner',
    price: '$15/month',
    description: 'For worldschooling families and alternative educators',
    features: [
      'Access to research library',
      'Monthly community calls',
      'Quarterly newsletter',
      'Peer support forum',
      'Early access to tools'
    ],
    highlighted: false
  },
  {
    id: 'researcher',
    name: 'Researcher',
    price: '$25/month',
    description: 'For PhD students, postdocs, and independent scholars',
    features: [
      'All Practitioner benefits',
      'Research collaboration opportunities',
      'Co-authorship on publications',
      'Data access for approved studies',
      'Methodological workshops',
      'Conference travel stipends'
    ],
    highlighted: true
  },
  {
    id: 'institutional',
    name: 'Institutional',
    price: 'Custom',
    description: 'For universities, foundations, and NGOs',
    features: [
      'All Researcher benefits',
      'Institutional partnership agreements',
      'Bulk member licenses',
      'Custom research projects',
      'Priority technical support',
      'Quarterly impact reports'
    ],
    highlighted: false
  },
  {
    id: 'founding',
    name: 'Founding Circle',
    price: '$100/month',
    description: 'Early supporters shaping our research agenda',
    features: [
      'All membership benefits',
      'Voting rights on research priorities',
      'Exclusive strategy sessions with leadership',
      'Recognition on website + publications',
      'Lifetime membership lock-in rate',
      'Direct line to research team'
    ],
    highlighted: false
  }
];

const TierComparison = () => {
  return (
    <section className="membership-tiers">
      <h2>Join the Network</h2>
      <p className="subtitle">
        Atlas ERA is building a global community of practice for worldschooling families, 
        researchers, educators, and technologists. Beta launch Q1 2026.
      </p>
      
      <div className="tiers-grid">
        {MEMBERSHIP_TIERS.map(tier => (
          <div 
            key={tier.id} 
            className={`tier-card ${tier.highlighted ? 'highlighted' : ''}`}
          >
            <div className="tier-header">
              <h3>{tier.name}</h3>
              <div className="tier-price">{tier.price}</div>
              <p className="tier-description">{tier.description}</p>
            </div>
            
            <ul className="tier-features">
              {tier.features.map((feature, idx) => (
                <li key={idx}>
                  <span className="check-icon">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
            
            <button className="tier-cta" type="button">
              {tier.id === 'institutional' ? 'Contact Us' : 'Join Waitlist'}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TierComparison;

