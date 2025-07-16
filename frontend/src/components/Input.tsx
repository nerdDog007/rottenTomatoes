import React from 'react'

function Input({type,className,placeholder}) {
  return (
    <input type={type} className={className} placeholder={placeholder}/>
  )
}

export default Input