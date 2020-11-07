import React from 'react'
import ProductName from './productName'

const Product = ({name, type}) => {
  return (
    <div>
      { name !=='' ? <ProductName name={name} type={type} /> : undefined }
    </div> 
  )
}
export default Product 