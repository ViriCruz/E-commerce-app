import React from 'react';
import { useLocation } from 'react-router-dom';
import Product from './product/product';
import Button from './layoutCustomComponents/buttons/button';

const ProductDetailedView = () => {
  const location = useLocation();
  return (
    <div>
      <Product
        name="Steren Stv-205 Arm Support Monitor"
        price="30.00"
        currency="USD"
        imageSrc="https://www.gravatar.com/avatar/02e8389ff167786b83973f7c54521720?s=32&d=identicon&r=PG&f=1"
        type="standard"
      />
      <Button
        text="Add"
        type="button"
        color="green"
        style="snipcart-add-item"
        snipcart={
        {
          id: 'Steren Stv-205 Arm Support Monitor',
          price: '30.00',
          url: location.pathname,
          name: 'Steren Stv-205 Arm Support Monitor',
        }
      }
      />
      <Button
        text="click here to Checkout"
        type="button"
        color="green"
        style="snipcart-checkout"
      />
    </div>
  );
};

export default ProductDetailedView;
