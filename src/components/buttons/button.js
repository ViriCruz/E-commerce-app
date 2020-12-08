import React from 'react'

const Button = ({content, type, color}) => <button value={content} type={type} className={`btn-${color}`} />


export default Button