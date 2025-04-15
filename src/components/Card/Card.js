// src/components/Card/Card.js
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Card.module.css';

/**
 * @param {string} image
 * @param {string} title
 * @param {string} link   – internal route, e.g. "/category/1"
 * @param {object} [style]
 */
export default function Card({ image, title, link, style }) {
  return (
    <Link to={link} className={styles.card} style={style}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <p className={styles.title}>{title}</p>
    </Link>
  );
}
