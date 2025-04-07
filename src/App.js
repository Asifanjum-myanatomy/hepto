import React, { useState } from 'react';
import Header from './components/Header/Header';
import HeroCategories from './components/HeroSection/HeroCategories';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';
import Signup from './components/Login/Signup';

function App() {
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className={showSignup ? 'modal-open' : ''}>
      <Header onLoginClick={() => setShowSignup(true)} />
      <HeroCategories />
      <HeroSection />
      <Footer />
      
      {showSignup && (
        <Signup onClose={() => setShowSignup(false)} />
      )}
    </div>
  );
}

export default App;