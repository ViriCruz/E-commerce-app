import React from 'react'
import  Product from '../components/product/product'
import Button from '../components/buttons/button'

const DetailedView = (props) => (
  <div>
    <Product name={props.history} price='' currency='USD' imageSrc="" type="standard" />
    <Button />
  </div>
)

export default DetailedView