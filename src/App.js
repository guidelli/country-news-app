import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import { availableCountries } from './utils/countryInformation';

import { FaArrowUp } from 'react-icons/fa';

import styles from './App.module.scss';

import Home from './pages/Home/Home';
import Countries from './pages/Countries/Countries';
import Country from './pages/Country/Country';

import Navigation from './components/Navigation/Navigation';

const App = () => {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route exact path='/countries'>
          <Countries countries={availableCountries} />
        </Route>
        <Route
          path='/countries/:id'
          render={(props) => (
            <Country {...props} countries={availableCountries} />
          )}
        />
      </Switch>
      <FaArrowUp
        onClick={() => window.scrollTo(0, 0)}
        className={styles.arrowToTop}
      />
    </div>
  );
};

export default App;
