import React from 'react'

const ProductImage = ({ type, imageSrc }) => <img className={`${type}-image`} src={imageSrc} />

export default ProductImage