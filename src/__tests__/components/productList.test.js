import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../../components/productList';

describe('ProductList component', () => {
  it('renders a div container', () => {
    const productListWrapper = shallow(<ProductList />);
    const container = productListWrapper.find('div.container');

    expect(container).toHaveLength(1);
  });

  it('has state', () => {
    const productListWrapper = shallow(<ProductList />);

    expect(productListWrapper.state()).toBeDefined();
  });

  it('has products property on state', () => {
    const productListWrapper = shallow(<ProductList />);
    const productListState = productListWrapper.state();
    expect(productListState.products).toBeDefined();
  });

  it('renders a ul element', () => {
    const productListWrapper = shallow(<ProductList />);
    const productsListUl = productListWrapper.find('ul');
    expect(productsListUl).toHaveLength(1);
  });

  it('renders no li elements when no products exist', () => {
    const productListWrapper = shallow(<ProductList />);
    productListWrapper.setState({ products: [] });
    const productListItems = productListWrapper.find('li');

    expect(productListItems).toHaveLength(0);
  });

  it('render one li element when one product exists', () => {
    const productListWrapper = shallow(<ProductList />);
    productListWrapper.setState({ products: [{ name: 'Chair' }] });
    const productListItems = productListWrapper.find('li');

    expect(productListItems).toHaveLength(1);
  });

  it('', () => {
    const productListWrapper = shallow(<ProductList />);
    const products = [
      { name: 'Chair' },
      { name: 'Bed' },
      { name: 'mirror' },
      { name: 'paint wall' },
    ];
    productListWrapper.setState({ products });
    const productListItems = productListWrapper.find('li');

    expect(productListItems).toHaveLength(4);
  });
});
