import React, { useState } from 'react';
import styles from './Signup.module.css';

const Signup = ({ onClose }) => {
  const [useEmail, setUseEmail] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  const toggleSignupMethod = () => {
    setUseEmail(prev => !prev);
    // reset inputs when switching
    setPhoneNumber('');
    setEmail('');
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, '');
    if (value.length <= 10) setPhoneNumber(value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!useEmail) {
      if (phoneNumber.length === 10) {
        console.log('Valid phone number:', phoneNumber);
        // …submit phone signup
      }
    } else {
      // simple HTML5 email validation will run before onSubmit if invalid
      console.log('Valid email address:', email);
      // …submit email signup
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

        {/* Toggle link/button */}
        <button
          type="button"
          className={styles.toggleButton}
          onClick={toggleSignupMethod}
        >
          {useEmail ? 'Sign up with phone' : 'Sign up with email'}
        </button>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.inputContainer}>
            {!useEmail ? (
              <>
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
              </>
            ) : (
              <input
                type="email"
                placeholder="Enter email address"
                className={styles.emailInput}
                value={email}
                onChange={handleEmailChange}
                required
              />
            )}
          </div>

          <button 
            type="submit" 
            className={styles.submitButton}
            disabled={
              !useEmail
                ? phoneNumber.length !== 10
                : email.trim() === ''
            }
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
