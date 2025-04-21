import React from 'react'

const Button = ({children,...props}) => {
  return (
    <button className= "px-2 py-2 text-xs rounded-md bg-stone-700 md:text-base text-stone-300 hover:text-stone-100 hover:bg-stone-800" {...props}>
     
      {children}
      </button>
  )
}

export default Button;




