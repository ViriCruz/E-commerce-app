import React from 'react'
import { shallow } from 'enzyme'
import Product from '../../components/product/product'

describe('ProductName', () => {
  it('has an empty string as default value on name property when name prop is not passed from Product component', () => {
    const productWrapper = shallow(<Product />)
    const productNameWrapper = productWrapper.find('ProductName')

    expect(productNameWrapper.props().name).toEqual('')
  })
})