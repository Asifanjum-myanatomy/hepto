import React from 'react';
import { Link } from 'react-router-dom';

const NavMenu = () => {
  return (
    <ul className="nav-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/categories">Categories</Link></li>
      <li><Link to="/offers">Offers</Link></li>
    </ul>
  );
};

export default NavMenu;