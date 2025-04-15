import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CartProvider } from './components/Cart/CartContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/HomePage';
import CategoryPage from './pages/CategoryPage';
import Signup from './components/Login/Signup';
import LocationModel from './components/Location/LocationModel';

function App() {
  const [showSignup, setShowSignup]     = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [location, setLocation]         = useState('');

  const bodyClass = (showSignup || showLocation) ? 'modal-open' : '';

  return (
    <CartProvider>
      <div className={bodyClass}>
        <Header
          onLoginClick={() => setShowSignup(true)}
          onLocationClick={() => setShowLocation(true)}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>

        <Footer />

        {showSignup && <Signup onClose={() => setShowSignup(false)} />}
        {showLocation && (
          <LocationModel
            isOpen={showLocation}
            onClose={() => setShowLocation(false)}
            onSelectLocation={loc => {
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
