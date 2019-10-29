import React, {useState, useEffect} from 'react';
import Pregunta from './Componentes/Pregunta';
import Formulario from './Componentes/Formulario';
import Listado from './Componentes/Listado';
import ControlPresupuesto from './Componentes/ControlPresupuesto';

function App() {

  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [preguntaPresupuesto, savePreguntaPresupuesto] = useState(true);
  const [gasto, guardarGasto] = useState({});
  const [gastos, guardarGastos] = useState([]);
  const [crearGasto, guardarCrearGasto] = useState(false);

  useEffect(() => {
    if(crearGasto){
      const listadosGastos = [...gastos, gasto];
      guardarGastos(listadosGastos);

      const presupuestoRestante = restante - gasto.cantidadGasto;
      guardarRestante(presupuestoRestante);
      guardarCrearGasto(false)
    }  
  }, [crearGasto])

  return (
    <div className="App container">
      <h1>Gastos</h1>
      <div className=" contenido-principal contenido">
        {preguntaPresupuesto ? <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          savePreguntaPresupuesto={savePreguntaPresupuesto}
          guardarRestante={guardarRestante}/>
        : <div className="row">
            <div className="one-half column">
              <Formulario 
                guardarGasto={guardarGasto}
                guardarCrearGasto={guardarCrearGasto} />
            </div>
            <div className="one-half column">
              <Listado gastos={gastos}/>
              <ControlPresupuesto 
                presupuesto={presupuesto}
                restante={restante}/>
            </div>
          </div>
          }
      </div>
    </div>
  );
}

export default App;
