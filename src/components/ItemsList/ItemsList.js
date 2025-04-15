import React, { useState } from 'react';
import { useCart } from '../Cart/CartContext';
import styles from './ItemsList.module.css';

/**
 * @param {{ id:string, name:string, image:string, price:number }[]} items
 */
export default function ItemsList({ items }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(null);

  const handleAdd = item => {
    addItem(item);
    setJustAdded(item.id);
    setTimeout(() => setJustAdded(null), 1000);
  };

  return (
    <div className={styles.grid}>
      {items.map(item => (
        <div
          key={item.id}
          className={styles.card}
          onClick={() => handleAdd(item)}
        >
          <div className={styles.imageWrapper}>
            <img
              src={item.image}
              alt={item.name}
              className={styles.img}
            />
            {justAdded === item.id && (
              <div className={styles.overlay}>Added!</div>
            )}
          </div>
          <div className={styles.info}>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.price}>₹{item.price.toFixed(2)}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
