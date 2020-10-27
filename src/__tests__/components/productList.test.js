import React from 'react';
import { shallow } from 'enzyme';
import ProductList from '../../components/productList';

describe('ProductList component', () => {
  let productListWrapper;

  beforeAll(() => {
    productListWrapper = shallow(<ProductList />);
  })

  it('renders a div container', () => {
    const container = productListWrapper.find('div.container');

    expect(container).toHaveLength(1);
  });

  it('has state', () => {

    expect(productListWrapper.state()).toBeDefined();
  });

  it('has products property on state', () => {
    const productListState = productListWrapper.state();

    expect(productListState.products).toBeDefined();
  });

  it('renders a ul element', () => {
    const productsListUl = productListWrapper.find('ul');

    expect(productsListUl).toHaveLength(1);
  });
  
  it('renders no li elements when no products exist', () => {
    productListWrapper.setState({ products: [] });
    const productListItems = productListWrapper.find('li');

    expect(productListItems).toHaveLength(0);
  });

  it('render one li element when one product exists', () => {
    productListWrapper.setState({ products: [{ name: 'Chair' }] });
    const productListItems = productListWrapper.find('li');

    expect(productListItems).toHaveLength(1);
  });

  it('renders one li element for each product that exists', () => {
    const products = [
      { name: 'Chair', price: 100 },
      { name: 'Bed', price: 200 },
      { name: 'Mirror', price: 200 },
      { name: 'Wall Paint', price: 200 },
    ];
    productListWrapper.setState({ products });
    const productListItems = productListWrapper.find('li');

    expect(productListItems).toHaveLength(4);
  });

  it('renders a product component inside each li element', () => {
    const products = [
      { name: 'Chair', price: 100 },
      { name: 'Wall Paint', price: 200 },
    ];
    productListWrapper.setState({ products });
    const productListItems = productListWrapper.find('li');
    const productItems = productListItems.find('Product')

    expect(productItems).toHaveLength(2)
    
  });

  it('passes product property of state to product as prop', () => {
    const products = [
      { name: 'Chair', price: 100 }
    ];
    productListWrapper.setState({ products });
    const productListItems = productListWrapper.find('li');
    const productItem = productListItems.find('Product')

    expect(productItem.props().product).toEqual(productListWrapper.state().products[0])
  })

});
