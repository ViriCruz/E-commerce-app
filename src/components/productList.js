import React, { Component } from 'react';

class ProductList extends Component {
  state = {
    products: [],
  }

  render() {
    return (
      <div className="container">
        <ul>
          {
            this.state.products ? this.state.products.map((product, i) => <li key={i} />) : undefined
          }
        </ul>
      </div>
    );
  }
}

export default ProductList;
