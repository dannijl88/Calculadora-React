import React from 'react'

export const BotonClear = (props) => {
  return (
    <button className='boton' onClick={() => props.darClick(props.children)}>
        {props.children}
    </button>
  )
}
