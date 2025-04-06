// HeroCategories.js
import React from 'react';
import styles from './HeroCategories.module.css';

const HeroCategories = () => {
  const categories = [
    'All', 'Cafe', 'Home', 'Toys', 'Fresh', 
    'Electronics', 'Mobiles', 'Beauty', 'Fashion', 
    'Deal Zone', 'Baby Store'
  ];

  return (
    <section className={styles.heroContainer}>
      
      {/* Sticky Categories Bar */}
      <div className={styles.categoriesBar}>
        <div className={styles.categoriesContainer}>
          {categories.map((category, index) => (
            <button 
              key={index}
              className={styles.categoryButton}
              aria-label={`Browse ${category}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCategories;