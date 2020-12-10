import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Product from './product/product';
import Button from './layoutCustomComponents/button/customButton'

class ProductList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
        {
          name: 'Steren Stv-205 Arm Support Monitor',
          price: 30.00,
          currency: 'USD',
          imageSrc: 'custom_assets/arm-monitor.webp',
          type: 'standard',
        },
      ],
    };
  }

  render() {
    const { products } = this.state;
    return (
      <div className="container">
        <ul className="product-list flex-container flex-wrap">
          {
            products.map((product, i) => (
              <li key={i}>
                <Link to={`/products/${product.name}`}>
                  <Product {...product} />
                  <div className="container justify-content-center py-2">
                    <Button type='button' text='Buy' color='yellow' />
                  </div>
                </Link>
              </li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default ProductList;
