import React from 'react'
import PropTypes from 'prop-types';
import './productName.css'

const ProductName = ({ name, type }) => (
  <div className={`font-weight-bold ${type}-title`}>
    <h2>{name}</h2>
  </div>
)

ProductName.defaultProps = {
  name: ''
}

ProductName.propTypes = {
  name: PropTypes.string
}

export default ProductName 