import './App.css';
import { Boton } from './componentes/Boton';
import { BotonClear } from './componentes/BotonClear';
import { Pantalla } from './componentes/Pantalla';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');

  const añadirInput = valor => {
    setInput(input + valor);
  }

  const borrarPantalla = valor => {
    setInput('');
  }

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else{
      alert('Añade valores para calcular.')
    }
    
  }

  return (
    <div className="App">
      <h1>Calculadora</h1>
      <div className='contenedor-calculadora'>
        <Pantalla 
        input={input} />
        <Boton darClick={añadirInput}>1</Boton>
        <Boton darClick={añadirInput}>2</Boton>
        <Boton darClick={añadirInput}>3</Boton>
        <Boton darClick={añadirInput}>+</Boton>
        <Boton darClick={añadirInput}>4</Boton>
        <Boton darClick={añadirInput}>5</Boton>
        <Boton darClick={añadirInput}>6</Boton>
        <Boton darClick={añadirInput}>-</Boton>
        <Boton darClick={añadirInput}>7</Boton>
        <Boton darClick={añadirInput}>8</Boton>
        <Boton darClick={añadirInput}>9</Boton>
        <Boton darClick={añadirInput}>*</Boton>
        <Boton darClick={añadirInput}>0</Boton>
        <BotonClear darClick={borrarPantalla}>C</BotonClear>
        <Boton darClick={añadirInput}>/</Boton>
        <Boton darClick={calcularResultado}>=</Boton>
      </div>
    </div>
  );
}

export default App;
