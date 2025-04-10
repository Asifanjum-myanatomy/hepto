import React, { useState, useEffect, useRef } from 'react';
import styles from './Location.module.css';

const sampleCities = [
  'New York, NY',
  'Los Angeles, CA',
  'Chicago, IL',
  'Houston, TX',
  'Phoenix, AZ',
  'Philadelphia, PA',
  'San Antonio, TX',
  'San Diego, CA',
  'Dallas, TX',
  'San Jose, CA',
];

export default function LocationModal({ isOpen, onClose, onSelectLocation }) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const containerRef = useRef(null);

  useEffect(() => {
    if (query.trim() === '') {
      setSuggestions([]);
    } else {
      const q = query.toLowerCase();
      setSuggestions(
        sampleCities.filter((c) => c.toLowerCase().includes(q)).slice(0, 5)
      );
    }
  }, [query]);

  useEffect(() => {
    function handleClick(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        onClose();
      }
    }
    if (isOpen) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isOpen, onClose]);

  const handleEnableLocation = () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser.');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const { latitude, longitude } = pos.coords;
        onSelectLocation(`${latitude.toFixed(4)}, ${longitude.toFixed(4)}`);
        onClose();
      },
      (err) => {
        alert('Unable to retrieve your location.');
      }
    );
  };

  const handleSuggestionClick = (city) => {
    setQuery(city);
    setSuggestions([]);
    onSelectLocation(city);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.signupCard} ref={containerRef}>
        <button className={styles.closeButton} onClick={onClose}>&times;</button>
        <h2 className={styles.title}>Your Location</h2>

        <div className={styles.form}>
          <div className={styles.inputContainer}>
            <input
              type="text"
              className={styles.locationInput}
              placeholder="Search a new address"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              autoFocus
            />
          </div>

          {suggestions.length > 0 && (
            <ul className={styles.suggestionsList}>
              {suggestions.map((city) => (
                <li
                  key={city}
                  className={styles.suggestionItem}
                  onClick={() => handleSuggestionClick(city)}
                >
                  {city}
                </li>
              ))}
            </ul>
          )}

          <div className={styles.currentLocation}>
            <div className={styles.locationHeader}>
              <span>📍 Current Location</span>
            </div>
            <p className={styles.terms}>
              Enable your current location for better services
            </p>
            <button 
              className={styles.submitButton} 
              onClick={handleEnableLocation}
            >
              Enable
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}