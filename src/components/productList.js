import React, { Component } from 'react';
import Product from './product'
class ProductList extends Component {
  state = {
    products: [],
  }

  render() {
    const { products } = this.state
    return (
      <div className="container">
        <ul>
          {
            products.map((product, i) => <li key={i}><Product product={product} /></li>)
          }
        </ul>
      </div>
    );
  }
}

export default ProductList;
