import { shallow, mount } from 'enzyme'
import React from 'react'
import Product from '../../components/product/product'

describe('Product', () => {
  it('renders correctly', () => {
    const productWrapper = shallow(<Product />)

    expect(productWrapper.find('div')).toHaveLength(1)
  })

  it('renders productName component', () => {
    const productWrapper = shallow(<Product />)
    const productName = productWrapper.find('ProductName')
    expect(productName).toHaveLength(1)
  })

  it('passes name property of props to productName as prop', () => {
    const productWrapper = mount(<Product />)
    const props = { name: 'Smart TV 14 inches' }
    productWrapper.setProps(props)
    const productNameProp = productWrapper.find('ProductName').props().name

    expect(productNameProp).toEqual(productWrapper.props().name)
  })

  it('passes type property of props to productName as prop', () => {
    const productWrapper = mount(<Product />)
    const props = { type: 'featured' }
    productWrapper.setProps(props)
    const productNameType = productWrapper.find('ProductName').props().type
    expect(productNameType).toEqual(productWrapper.props().type)
  })

  it('renders no ProductName when name property is an empty string', () =>{
    const productWrapper = shallow(<Product />)
    const props = { name: '' }
    productWrapper.setProps(props)

    const productName = productWrapper.find('ProductName')
    expect(productName).toHaveLength(0)
  })

  it('renders productImage component', () => {
    const productWrapper = shallow(<Product />)
    const productImage = productWrapper.find('ProductImage')

    expect(productImage).toHaveLength(1)
  })

  it('passes type property of props to productImage as prop', () => {
    const productWrapper = mount(<Product />)
    const props = { type: 'featured' }
    productWrapper.setProps(props)

    const productImageType = productWrapper.find('ProductImage').prop('type')
    expect(productImageType).toEqual(productWrapper.props().type)

  })

  it('passes imageSrc property of props to productImage as prop', () => {
    const productWrapper = mount(<Product />)
    const props = { imageSrc: '../../assets/icon-no-image.svg' }
    productWrapper.setProps(props)

    const productImageSrc = productWrapper.find('ProductImage').prop('imageSrc')

    expect(productImageSrc).toEqual(productWrapper.props().imageSrc)
  })

  it('render productPrice component', () => {
    const productWrapper = shallow(<Product />)
    const productPrice = productWrapper.find('ProductPrice')
    
    expect(productPrice).toHaveLength(1)
  })

  it('passes price property of props to productPrice as prop', () => {
    const productWrapper = mount(<Product />)
    const props = { price: 20.00 }
    productWrapper.setProps(props)
    const productPriceProp = productWrapper.find('ProductPrice').props().price

    expect(productPriceProp).toEqual(productWrapper.props().price)
  })
})