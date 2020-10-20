import React from 'react';
import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/index';

import './App.scss';

function App() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
    </Switch>
  );
}

export default App;
