import React from 'react';

import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

import './App.scss';

function App() {
  return (
    <>
      <NavBar />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
