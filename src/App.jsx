import React from 'react';

import Header from './pages/Header'
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

import './App.scss';

function App() {
  return (
    <>
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
