import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from '../pages/Home';
import AddExpense from '../pages/AddExpense';
import EditExpense from '../pages/EditExpense';
import Help from '../pages/Help';
import NotFound from '../pages/NotFound';
import Header from '../components/Header';

function AppRouter() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
  
        <Route path="/create">
          <AddExpense />
        </Route>
  
        <Route path="/edit/:id">
          <EditExpense />
        </Route>
  
        <Route path="/help">
          <Help />
        </Route>
  
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default AppRouter;