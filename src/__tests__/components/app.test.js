import React from 'react';
import App from '../../components/app';
import { shallow } from 'enzyme';
import ProductList from '../../components/productList'

describe('App component', () => {
  
  it('renders product list', () => {
    
    const appWrapper = shallow(<App />)
    const productList = appWrapper.find(ProductList)

    expect(productList).toHaveLength(1)
  })
})