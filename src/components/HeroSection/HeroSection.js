// HeroSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroSection.module.css';

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <div className={styles.textContainer}>
          <h1 className={styles.mainHeading}>
            Get Everything You Need 
            <span className={styles.highlight}>In Minutes</span>
          </h1>
          <p className={styles.subHeading}>
            Groceries, Toys, Café Delights &amp; More - Delivered Lightning Fast
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;