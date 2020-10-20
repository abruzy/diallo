import React from 'react';

import NavBar from './components/NavBar';
import Portfolio from './components/Portfolio';
import About from './components/About';

import './App.scss';

function App() {
  return (
    <>
      <NavBar />
      <Portfolio />
      <About />
    </>
  );
}

export default App;
