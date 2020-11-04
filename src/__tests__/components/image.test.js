import React from 'react';
import { shallow } from 'enzyme';
import ProductImage from '../../components/image'


describe('ProductImage', () => {
  it('has type property', () => {
    const productImage = shallow(<ProductImage />)
    expect(productImage.props().type).toBeDefined()
  })
})