import React from 'react';

export const Boton = (props) => {

  const esOperador = valor => {
    return isNaN(valor);
  }

  return (
    <button 
      className={`boton  ${esOperador(props.children) ? 'boton-operador' : null}`.trimEnd()} onClick={() => props.darClick(props.children)}>
      {props.children}
    </button>
  )
}
