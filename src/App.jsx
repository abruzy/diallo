import React from 'react';

import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';

import './App.scss';

function App() {
  return (
    <>
      <NavBar />
      <Portfolio />
      <About />
      <Contact />
    </>
  );
}

export default App;
