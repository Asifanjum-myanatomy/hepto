// App.js
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/Header/Header';
import HeroCategories from './components/HeroSection/HeroCategories';
import HeroSection from './components/HeroSection/HeroSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <Router>
      <Header />
      <HeroCategories />
      <HeroSection />
      <Footer />
      
    </Router>
  );
}

export default App;