import React from 'react';
import { Link } from 'react-router-dom';

const MobileMenu = ({ onClose }) => {
  return (
    <div className="mobile-menu">
      <button onClick={onClose} className="close-button">×</button>
      <nav>
        <Link to="/" onClick={onClose}>Home</Link>
        <Link to="/categories" onClick={onClose}>Categories</Link>
        <Link to="/offers" onClick={onClose}>Offers</Link>
      </nav>
    </div>
  );
};

export default MobileMenu;