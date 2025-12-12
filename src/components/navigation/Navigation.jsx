import React from 'react';
import { Link } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'Research Pillars', path: '/research' },
  { label: 'Membership', path: '/membership' },
  { label: 'About', path: '/about' }
];

const Navigation = () => {
  return (
    <nav>
      <Link to="/" className="logo">
        ATLAS EDUCATION<br />RESEARCH ASSOCIATION
      </Link>
      <ul>
        {NAV_LINKS.map(link => (
          <li key={link.path}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
      <Link to="/membership" className="cta">Join</Link>
    </nav>
  );
};

export default Navigation;

