import React from 'react';
import { useCart } from './CartContext';
import { XMarkIcon } from '@heroicons/react/24/outline';
import styles from './Cart.module.css';

export default function Cart({ onClose }) {
  const { items, totalItems, totalPrice, updateQuantity, removeItem, clearCart } = useCart();

  return (
    <div className={styles.cartOverlay}>
      <div className={styles.cartContainer}>
        {/* Header */}
        <div className={styles.cartHeader}>
          <div className={styles.headerContent}>
            <img
              src="/image.png"
              alt="Logo"
              className={styles.logo}
            />
            <h3 className={styles.cartTitle}>
              Your Cart ({totalItems} {totalItems === 1 ? 'Item' : 'Items'})
            </h3>
          </div>

          <button
            onClick={onClose}
            className={styles.closeButton}
          >
            <XMarkIcon className={styles.closeIcon} />
          </button>
        </div>

        {/* Items List */}
        <div className={styles.itemsList}>
          {items.length === 0 ? (
            <p className={styles.emptyCart}>Your cart is empty</p>
          ) : (
            items.map(item => (
              <div className={styles.cartItem}>
                <div className={styles.itemContent}>
                  <div className={styles.itemDetails}>
                    <h3 className={styles.itemName}>{item.name}</h3>
                    <p className={styles.itemPrice}>₹{item.price.toFixed(2)}</p>
                  </div>
                  <div className={styles.quantityControls}>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className={styles.quantityButton}
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className={styles.removeButton}
                >
                  Remove
                </button>
              </div>

            ))
          )}
        </div>

        {/* Footer */}
        <div className={styles.cartFooter}>
          <div className={styles.totalPrice}>
            <span>Total Price:</span>
            <span>₹{totalPrice.toFixed(2)}</span>
          </div>
          <div className={styles.actionButtons}>
            <button
              className={styles.checkoutButton}
              style={{ backgroundColor: '#ff3269' }}
            >
              Make Payment
            </button>
            <button
              onClick={clearCart}
              className={styles.clearButton}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}