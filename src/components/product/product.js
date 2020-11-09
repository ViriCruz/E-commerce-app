import React from 'react'
import ProductName from './productName'
import ProductImage from './productImage'
import ProductPrice from './productPrice'

const Product = ({ name, type, price, imageSrc }) => {
  return (
    <div>
      <ProductImage type={type} imageSrc={imageSrc} />
      { name !=='' ? <ProductName name={name} type={type} /> : undefined }
      <ProductPrice price={price} />
    </div> 
  )
}
export default Product 