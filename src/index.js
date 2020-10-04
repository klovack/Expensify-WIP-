import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Home from './components/Home';
import AddExpense from './components/AddExpense';

const routes = (
  <BrowserRouter>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/create">
      <AddExpense />
    </Route>
  </BrowserRouter>
);

ReactDOM.render(
  <React.StrictMode>
    {routes}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
