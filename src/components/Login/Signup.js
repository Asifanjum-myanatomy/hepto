import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = ({ onClose }) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) setPhoneNumber(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (phoneNumber.length === 10) {
      console.log('Valid phone number:', phoneNumber);
    }
  };

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.signupCard}>
        <button 
          className={styles.closeButton} 
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>

        <img
          alt="app-logo"
          className={styles.logo}
          src="/image.png"
        />

        <h2 className={styles.title}>
          Groceries delivered in 10 minutes
        </h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            <span className={styles.countryCode}>+91</span>
            <input
              type="tel"
              placeholder="Enter phone number"
              className={styles.phoneInput}
              value={phoneNumber}
              onChange={handlePhoneChange}
              maxLength="10"
              required
            />
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={phoneNumber.length !== 10}
          >
            Continue
          </button>
        </form>

        <p className={styles.terms}>
          By continuing, you agree to our <strong>Terms of Service</strong> 
          & <strong>Privacy Policy</strong>
        </p>
      </div>
    </div>
  );
};

export default Signup;