import React, { useState } from 'react';
import Logo from './Logo';
import NavMenu from './NavMenu';
import UserActions from './UserActions';
import MobileMenu from './MobileMenu';
import styles from './Header.module.css';

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Logo />
        <nav className={styles.desktopNav}>
          <NavMenu />
        </nav>
        <UserActions />
        <button 
          className={styles.hamburger} 
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>
      {isMobileMenuOpen && <MobileMenu onClose={toggleMobileMenu} />}
    </header>
  );
};

export default Header;