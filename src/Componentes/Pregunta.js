import React, {Fragment, useState} from 'react';
import Error from './Error';
function Pregunta(props)  {
    const {guardarPresupuesto, savePreguntaPresupuesto, guardarRestante} = props;
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarPresupuesto = e => {
        e.preventDefault();
    
        if(cantidad < 1 || isNaN(cantidad)){
            guardarError(true);
            return;
        }
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        savePreguntaPresupuesto(false);
    }

    return ( 
        <Fragment>
            <h3>Ingresa tu presupuesto</h3>
            {error? <Error mensaje="El presupuesto es incorrecto"/> :null}
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    name="presupuesto"
                    className="u-full-width"
                    placeholder="Agrega tu presupuesto"
                    onChange={e => guardarCantidad(parseInt(e.target.value, 10))}/>
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir presupuesto"
                    />
            </form>
        </Fragment>
        );   
    }
 
export default Pregunta;