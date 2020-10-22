import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/app';
import ProductList from '../../components/productList';

describe('App component', () => {
  it('renders product list', () => {
    const appWrapper = shallow(<App />);
    const productList = appWrapper.find(ProductList);

    expect(productList).toHaveLength(1);
  });
});
