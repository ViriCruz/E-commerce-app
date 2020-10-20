import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../../components/productList'

describe('ProductList component', () => {
  
  it('renders a div container', () => {
    const productList = shallow(<ProductList />)
    const container = productList.find('div.container')

    expect(container).toHaveLength(1)
  })

  it('has state', () => {
    const productList = shallow(<ProductList />)

    expect(productList.state()).toBeDefined()
  })
})