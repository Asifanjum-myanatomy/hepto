import React from 'react'
import styles from './Card.module.css'

/**
 * @param {string} image   – URL of the card image
 * @param {string} title   – Text label below the image
 * @param {string} link    – href to wrap the whole card
 * @param {object} [style] – optional inline style overrides
 */
export default function Card({ image, title, link, style }) {
  return (
    <a href={link} className={styles.card} style={style}>
      <div className={styles.imageWrapper}>
        <img
          src={image}
          alt={title}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <p className={styles.title}>{title}</p>
    </a>
  )
}
