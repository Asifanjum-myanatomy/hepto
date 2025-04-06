import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Left Section */}
        <div className={styles.leftSection}>
          <Link to="/" className={styles.logo}>
            Hepto
          </Link>
          <div className={styles.locationSelector}>
            <span className={styles.locationText}>Select Location</span>
          </div>
        </div>

        {/* Center Section - Search */}
        <div className={styles.searchBar}>
          <input 
            type="text" 
            placeholder="Search for..." 
            className={styles.searchInput}
          />
        </div>

        {/* Right Section */}
        <div className={styles.rightSection}>
          <Link to="/login" className={styles.navItem}>
            Login
          </Link>
          <Link to="/cart" className={styles.navItem}>
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;