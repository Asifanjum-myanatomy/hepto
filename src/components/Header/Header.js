import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = ({ onLoginClick }) => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <Link to="/" className={styles.logo}>
            Hepto
          </Link>
          <div className={styles.locationSelector}>
            <span className={styles.locationText}>Select Location</span>
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
          <button
            onClick={onLoginClick}
            className={styles.navItem}
          >
            Login
          </button>
          <Link to="/cart" className={styles.navItem}>
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;