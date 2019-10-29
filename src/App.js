import React, {useState} from 'react';
import Pregunta from './Componentes/Pregunta';
import Formulario from './Componentes/Formulario';

function App() {
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [preguntaPresupuesto, savePreguntaPresupuesto] = useState(true);
  return (
    <div className="App container">
      <h1>Gasto semanal</h1>
      <div className=" contenido-principal contenido">
        {preguntaPresupuesto ? <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          savePreguntaPresupuesto={savePreguntaPresupuesto}/>
        : <div className="row">
            <div className="one-half column">
              <Formulario/>
            </div>
            <div className="one-half column">
              
            </div>
          </div>
          }
      </div>
    </div>
  );
}

export default App;
