import React from 'react';
import './productPrice.css';

const ProductPrice = ({ price }) => (
  <div>
    <span>{`$${price}`}</span>
  </div>
);

export default ProductPrice;
