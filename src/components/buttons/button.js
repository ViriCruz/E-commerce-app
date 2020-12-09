import React from 'react'
import './button.css'

const Button = ({text, type, color, style, snipcart={}}) => {
    if(snipcart.id){
      const { id, name, url, price } = snipcart
      return <button
        type={type} 
        className={`btn-${color} ${style}`}
        data-item-id={id}
        data-item-price={price}
        data-item-url={url}
        data-item-name={name}
        >
        {text}
      </button>
    } else {
      return <button
        type={type} 
        className={`btn-${color} ${style}`}
        >
        {text}
      </button>
    }
    
  }


export default Button