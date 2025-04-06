import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  const products = [
    'Avocado',
    'Strawberry',
    'Pomegranate',
    'Beetroot',
    'Ash gourd',
    'Bottle gourd',
    'Lady finger',
    'Potato',
    'Lemon',
    'Dalchini',
    'Fennel seeds',
    'Blueberry',
    'Papaya',
    'Dragon fruit'
  ];

  const brands = [
    'Yakult',
    'My Muse',
    'Asahinwad Atta',
    'Too Yumm',
    'Lays'
  ];

  const categories = [
    'Grocery',
    'Curd',
    'Hukka flavour',
    'Paan shop near me',
    'Eggs price'
  ];

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContainer}>
        
        {/* Popular Searches Section */}
        <div className={styles.popularSearches}>
          <h3>Popular Searches</h3>
          <div className={styles.searchCategories}>
            {/* Products */}
            <div className={styles.searchCategory}>
              <span className={styles.categoryLabel}>Products:</span>
              <span className={styles.itemsList}>
                {products.map((item, index) => (
                  <span key={index} className={styles.item}>
                    <a href="/">{item}</a>
                  </span>
                ))}
              </span>
            </div>
            
            {/* Brands */}
            <div className={styles.searchCategory}>
              <span className={styles.categoryLabel}>Brands:</span>
              <span className={styles.itemsList}>
                {brands.map((item, index) => (
                  <span key={index} className={styles.item}>
                    <a href="/">{item}</a>
                  </span>
                ))}
              </span>
            </div>
            
            {/* Categories */}
            <div className={styles.searchCategory}>
              <span className={styles.categoryLabel}>Categories:</span>
              <span className={styles.itemsList}>
                {categories.map((item, index) => (
                  <span key={index} className={styles.item}>
                    <a href="/">{item}</a>
                  </span>
                ))}
              </span>
            </div>
          </div>
        </div>

        <h3>Categories</h3>
        <div className={styles.categoriesGrid}>
        
          {[
            [
              'Fruits & Vegetables',
              'Atta, Rice, Oil & Dals',
              'Masala & Dry Fruits',
              'Sweet Cravings',
              'Frozen Food & Ice Creams'
            ],
            [
              'Baby Food',
              'Dairy, Bread & Eggs',
              'Cold Drinks & Juices',
              'Munchies',
              'Meats, Fish & Eggs'
            ],
            [
              'Breakfast & Succes',
              'Tea, Coffee & More',
              'Biscuits',
              'Makeup & Beauty',
              'Bath & Body'
            ],
            [
              'Cleaning Essentials',
              'Home Needs',
              'Electricals & Accessories',
              'Hygiene & Grooming',
              'Health & Baby Care'
            ],
            [
              'Homegrown Brands',
              'Paan Corner'
            ]
          ].map((column, colIndex) => (
            <div key={colIndex} className={styles.categoryColumn}>
              {column.map((item, index) => (
                <a key={index} href="/" className={styles.categoryItem}>
                  {item}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Footer Bottom */}
        <div className={styles.footerBottom}>
          <div className={styles.companyInfo}>
            <div className={styles.heptoBrand}>Hepto</div>
            <div className={styles.copyright}>
              © 2025 Hepto (Kiranakat Technologies Private Limited)
            </div>
            <div className={styles.legalLinks}>
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Use</a>
              <a href="/disclosure">Responsible Disclosure Policy</a>
            </div>
          </div>

          <div className={styles.downloadSection}>
            <h4>Download App</h4>
            <div className={styles.appBadges}>
              <img src="/google-play-badge.png" alt="Get on Google Play" />
              <img src="/app-store-badge.png" alt="Download on App Store" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
