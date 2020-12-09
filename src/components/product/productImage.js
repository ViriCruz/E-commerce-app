import React from 'react'
import './productImage.css'

const ProductImage = ({ type, imageSrc }) => {
  
 return <div className="image-container">
  <img className={`${type}-image`} src={imageSrc} />
  </div>
}
 


export default ProductImage