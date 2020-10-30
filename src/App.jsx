import React from 'react';

import Header from './components/Header';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

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
