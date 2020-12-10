import React from 'react';
import ProductName from './productName';
import CustomImage from '../layoutCustomComponents/image/customImage';
import ProductPrice from './productPrice';
import './product.css';

const Product = ({
  name, price, currency, imageSrc, type,
}) => (
  <div className="product">
    <CustomImage type={type} imageSrc={imageSrc} />
    <div className="product-container">
      { name !== '' ? <ProductName name={name} type={type} /> : undefined }
      <ProductPrice price={price} />
    </div>
  </div>
);
export default Product;
