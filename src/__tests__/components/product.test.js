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
    const headingText = productWrapper.find('h2').text()

    expect(headingText).toEqual(props.name)
  })

  it('passes type property of props to productName as prop', () => {
    const productWrapper = mount(<Product />)
    const props = { type: 'featured' }
    productWrapper.setProps(props)
    const productNameContainer = productWrapper.find('div.font-weight-bold')
    expect(productNameContainer.hasClass(`${props.type}-title`)).toEqual(true)
  })

  it('renders no ProductName when name property is an empty string', () =>{
    const productWrapper = shallow(<Product />)
    const props = { name: '' }
    productWrapper.setProps(props)

    const productName = productWrapper.find('ProductName')
    expect(productName).toHaveLength(0)
  })
})