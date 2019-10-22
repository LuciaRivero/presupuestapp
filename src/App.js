import React, {useState} from 'react';
import Pregunta from './Componentes/Pregunta';

function App() {
  return (
    <div className="App container">
      <h1>Gasto semanal</h1>
      <div className=" contenido-principal contenido">
        <Pregunta/>
      </div>
      
    </div>
  );
}

export default App;
