// src/components/Home/Home.js
import React from 'react';
import HeroCategories from '../HeroSection/HeroCategories';
import HeroSection from '../HeroSection/HeroSection';
import Footer from '../Footer/Footer';

const Home = () => {
  return (
    <>
      <HeroCategories />
      <HeroSection />
      <Footer />
    </>
  );
};

export default Home;