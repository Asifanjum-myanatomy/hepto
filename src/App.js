import React, { useState } from 'react';
import { CartProvider } from './components/Cart/CartContext';
import Header from './components/Header/Header';
import HeroCategories from './components/HeroSection/HeroCategories';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Signup from './components/Login/Signup';
import LocationModel from './components/Location/LocationModel'

function App() {
  const [showSignup, setShowSignup] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation] = useState('');

  // combine modal-open class when either modal is showing
  const bodyClass = (showSignup || showLocation) ? 'modal-open' : '';

  return (

    <CartProvider>
    <div className={bodyClass}>
      <Header
        onLoginClick={() => setShowSignup(true)}
        onLocationClick={() => setShowLocation(true)}
      />

      <HeroCategories />
      <HeroSection />
      <Footer />

      {showSignup && (
        <Signup onClose={() => setShowSignup(false)} />
      )}

      {showLocation && (
        <LocationModel
          isOpen={showLocation}
          onClose={() => setShowLocation(false)}
          onSelectLocation={(loc) => {
            setLocation(loc);
            setShowLocation(false);
          }}
        />
      )}

      {location && (
        <div style={{ padding: '1rem', textAlign: 'center' }}>
          📍 Selected location: <strong>{location}</strong>
        </div>
      )}
    </div>
    </CartProvider>
  );
}

export default App;
