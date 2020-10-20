import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/index';
import Blog from './pages/Blog';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
    </Switch>
  );
}

export default App;
