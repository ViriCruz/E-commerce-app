import React from 'react'

const ProductName = ({ name, type }) => (
  <div className={`font-weight-bold ${type}-title`}>
    <h2>{name}</h2>
  </div>
)
export default ProductName 