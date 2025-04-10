// src/components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import styles from './Header.module.css';

const Header = ({ onLoginClick, onLocationClick }) => {
  const [showCart, setShowCart] = useState(false);

  const openCart = e => {
    e.preventDefault();       // keep it from navigating away
    setShowCart(true);
  };
  const closeCart = () => setShowCart(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.leftSection}>
            <Link to="/" className={styles.logo}>Hepto</Link>
            <div className={styles.locationSelector}>
              <button onClick={onLocationClick} className={styles.navItem}>
                Location
              </button>
            </div>
          </div>

          <div className={styles.searchBar}>
            <input 
              type="text"
              placeholder="Search for..."
              className={styles.searchInput}
            />
          </div>

          <div className={styles.rightSection}>
            <button onClick={onLoginClick} className={styles.navItem}>
              Login
            </button>
            {/* intercept this link to open the cart drawer */}
            <Link 
              to="/cart" 
              className={styles.navItem} 
              onClick={openCart}
            >
              Cart
            </Link>
          </div>
        </div>
      </header>

      {/* render your Cart component as an overlay/drawer */}
      {showCart && <Cart onClose={closeCart} />}
    </>
  );
};

export default Header;
