import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home/Home';
import Countries from './pages/Countries/Countries';

import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div style={{ background: '#f3f3f4' }}>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/countries'>
          <Countries />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
