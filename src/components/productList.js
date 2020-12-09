import React, { Component } from 'react';
import Product from './product/product'
import { Link } from 'react-router-dom'

class ProductList extends Component {
  state = {
    products: [
      {
        name: 'Steren Stv-205 Arm Support Monitor',
        price: 30.00,
        currency: 'USD',
        imageSrc: 'custom_assets/stv-205.jpg',
        type: 'standard'
      }
    ],
  }

  render() {
    const { products } = this.state
    return (
      <div className="container">
        <ul>
          {
            products.map((product, i) => <li key={i}><Link to={`/products/${product.name}`}><Product {...product} /></Link></li>)
          }
        </ul>
      </div>
    );
  }
}

export default ProductList;
