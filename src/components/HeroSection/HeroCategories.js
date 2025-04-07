// HeroCategories.js
import React from 'react';
import styles from './HeroCategories.module.css';

const categoryData = [
  {
    name: 'All',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"/></svg>`
  },
  {
    name: 'Cafe',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 3H4v10c0 2.21 1.79 4 4 4h6c2.21 0 4-1.79 4-4v-3h2c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2zm0 5h-2V5h2v3zM4 19h16v2H4z"/></svg>`
  },
  {
    name: 'Home',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2 2 12h3v8h6v-6h2v6h6v-8h3L12 2z"/></svg>`
  },
  {
    name: 'Toys',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 12c0-3 2.5-5.5 5.5-5.5S23 9 23 12H12zm0 0c0 3-2.5 5.5-5.5 5.5S1 15 1 12h11zm0 0c-3 0-5.5-2.5-5.5-5.5S9 1 12 1v11zm0 0c3 0 5.5 2.5 5.5 5.5S15 23 12 23V12z"/></svg>`
  },
  {
    name: 'Fresh',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2 4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83v-4.7l6-2.25 6 2.25v4.7zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm1.65 7.35L11.5 12.2V9h1v2.79l1.85 1.85-.7.71z"/></svg>`
  },
  {
    name: 'Electronics',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4v2h16V4zm1 10v-2l-3-2h-4.1c-.21-.78-.54-1.47-1-2.06L18 8.4V6H6v2.4l3.1 3.54c-.46.59-.79 1.28-1 2.06H4l-3 2v2l3 2h4.05c.25.71.62 1.36 1.09 1.95L8 20.6V22h8v-1.4l-2.14-2.65c.47-.59.84-1.24 1.09-1.95H20l3-2z"/></svg>`
  },
  {
    name: 'Mobiles',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14z"/></svg>`
  },
  {
    name: 'Beauty',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M4 17v5h16v-5H4zm14-2h2v5h-2v-5zM18 3c1.1 0 2 .9 2 2v1h-2V5h-5v3H9V5H4v1H2V5c0-1.1.9-2 2-2h14zM9 8h6v2.55c-.94.34-1.64 1.3-1.64 2.45v4h-2.72v-4c0-1.15-.7-2.11-1.64-2.45V8z"/></svg>`
  },
  {
    name: 'Fashion',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21.6 18.2 13 11.75v-.91c1.65-.49 2.8-2.17 2.43-4.05-.26-1.31-1.3-2.4-2.61-2.7-1.76-.4-3.37.53-4.02 1.98-.3.67-.18 1.4.11 2.03.81 1.73 2.49 2.97 4.49 3.22v.96l-8.6 6.45c-.34.25-.4.7-.15 1.05.25.35.7.4 1.05.15L12 15.9l6.7 5.03c.35.25.8.2 1.05-.15.25-.35.2-.8-.15-1.05zM12 6.5c.83 0 1.5-.67 1.5-1.5s-.67-1.5-1.5-1.5-1.5.67-1.5 1.5.67 1.5 1.5 1.5z"/></svg>`
  },
  {
    name: 'Deal Zone',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM8.5 15h2.25v1.5h1.5V15H14c.55 0 1-.45 1-1v-4c0-.55-.45-1-1-1h-3.25v1.5h-1.5V9H8.5c-.55 0-1 .45-1 1v4c0 .55.45 1 1 1zm.5-4.5h3v3H9v-3z"/></svg>`
  },
  {
    name: 'Baby Store',
    icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M9 17c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm8 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1zm-4-1.5c-2.33 0-7 1.17-7 3.5V20h14v-1c0-2.33-4.67-3.5-7-3.5zM8.16 8.82c.39-.39 1.03-.39 1.42 0l1.41 1.41 1.42-1.42c.39-.39 1.03-.39 1.42 0 .39.39.39 1.03 0 1.42l-1.42 1.42 1.42 1.42c.39.39.39 1.03 0 1.42-.39.39-1.03.39-1.42 0L12 13.23l-1.42 1.42c-.39.39-1.03.39-1.42 0-.39-.39-.39-1.03 0-1.42l1.42-1.42-1.42-1.42c-.39-.39-.39-1.03 0-1.42zM15 2c-1.1 0-2 .9-2 2 0 .74.4 1.38 1 1.72V7h1v7h2V7h1V5.72c.6-.34 1-.98 1-1.72 0-1.1-.9-2-2-2z"/></svg>`
  }
];

const HeroCategories = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.categoriesBar}>
        <div className={styles.categoriesContainer}>
          {categoryData.map((category) => (
            <button 
              key={category.name}
              className={styles.categoryButton}
              aria-label={`Browse ${category.name}`}
            >
              <span 
                className={styles.categoryIcon}
                dangerouslySetInnerHTML={{ __html: category.icon }}
                aria-hidden="true"
              />
              <span className={styles.categoryName}>{category.name}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroCategories;