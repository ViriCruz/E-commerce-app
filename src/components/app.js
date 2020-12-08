import React from 'react';
import ProductList from './productList';
import DetailedView from './productDetailedView'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => (
    <Router >
      <Switch>
        <Route exact path="/">
          <ProductList />
        </Route>
        <Route path="/products/:id">
          <DetailedView />
        </Route>
      </Switch>
    </Router>
   
)

export default App;
