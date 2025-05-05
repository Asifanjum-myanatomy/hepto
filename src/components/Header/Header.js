// src/components/Header/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSearch, FaUser, FaShoppingCart } from 'react-icons/fa'; // Fixed imports
import Cart from '../Cart/Cart';
import styles from './Header.module.css';

const Header = ({ onLoginClick, onLocationClick }) => {
  const [showCart, setShowCart] = useState(false);

  const openCart = (e) => {
    e.preventDefault();
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
            <FaSearch className={styles.searchIcon} />
          </div>

          {/* <div className={styles.rightSection}>
            <button onClick={onLoginClick} className={styles.navItem}>
              Login
            </button> */}

          <div className={styles.navItems}>
            {/* Login Button */}
            <Link to="/login" className={styles.navItem}>
              <div className={styles.navLink}>
                <FaUser className={styles.icon} /> {/* Using FaUser icon */}
                <span className={styles.navText}>Login</span>
              </div>
            </Link>

            {/* Cart Button */}
            <Link to="/cart" className={styles.navItem} onClick={openCart}>
              <div className={styles.navLink}>
                <FaShoppingCart className={styles.icon} /> {/* Using FaShoppingCart icon */}
                <span className={styles.navTextSmall}>Cart</span>
              </div>
            </Link>
          </div>
        </div>
      </header>

      {showCart && <Cart onClose={closeCart} />}
    </>
  );
};

export default Header;