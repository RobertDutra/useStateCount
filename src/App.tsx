import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  var isActive;
  
  function iniciar(){
    
    isActive = setTimeout(() => {
      let interval = null;
      interval = setInterval(() => {
      setCount((count) => count + 1);
      }, 1000);
    });
      
    
      
  }

  function stop(){
    setCount(0);
    clearTimeout(0);
  }

  return (
    <div className="App">
      <h1>Contador: {count} </h1>
      <div className='buttons'>
        <button className='button' onClick={iniciar}>Iniciar</button>
        <button className='button' onClick={stop}>Parar</button>
      </div>
      
    </div>
  )
}

export default App
