import React from 'react'

function Input({type,className,placeholder,onChange,value}) {
  return (
    <input type={type} value={value} onChange={onChange} className={className} placeholder={placeholder}/>
  )
}

export default Input