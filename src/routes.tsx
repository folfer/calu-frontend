import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../src/pages/HomePage';

const src: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
    </Switch>
  );
};

export default src;
