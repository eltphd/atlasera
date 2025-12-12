import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Atlas ERA</h4>
          <p>Global network of worldschooling educators and researchers</p>
          <p>🇲🇹 Malta Foundation | 🇫🇷 France Association</p>
        </div>
        
        <div className="footer-section">
          <h4>Research Focus</h4>
          <ul>
            <li>Worldschooling Pedagogies</li>
            <li>Neurodivergent Learning</li>
            <li>Mobile Education Infrastructure</li>
            <li>Community-Centered Evaluation</li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Ecosystem</h4>
          <ul>
            <li><a href="https://feelingsunplugged.com" target="_blank" rel="noopener noreferrer">Feelings Unplugged</a></li>
            <li><a href="https://measurementally.com" target="_blank" rel="noopener noreferrer">Measurement Ally</a></li>
            <li><a href="https://baseops.io" target="_blank" rel="noopener noreferrer">BASEops</a></li>
            <li><a href="https://bearita.org" target="_blank" rel="noopener noreferrer">BeaRita Foundation</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h4>Connect</h4>
          <p>📧 research@atlasera.org</p>
          <p>🌐 Beta Launch: Q1 2026</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2025 Atlas Education Research Association | MIT License</p>
      </div>
    </footer>
  );
};

export default Footer;

