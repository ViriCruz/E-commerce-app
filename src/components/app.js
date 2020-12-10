import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './productList';
import ProductDetailedView from './productDetailedView';

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/">
        <ProductList />
      </Route>
      <Route path="/products/:id">
        <ProductDetailedView />
      </Route>
    </Switch>
  </Router>

);

export default App;
