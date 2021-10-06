import { Switch, Route } from 'react-router-dom';
import React from 'react';
import HomePage from 'pages/HomePage';
import StorePage from 'pages/StorePage';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/stores">
        <StorePage />
      </Route>
      <Route exact path="/">
        <HomePage />
      </Route>
    </Switch>
  );
}
