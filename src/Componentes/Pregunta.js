import React, {Fragment, Component, useState} from 'react';

const leerDato = e => {
    this.setState({
        [e.target.name] : e.target.value
    })
}

const agregarPresupuesto = e => {
    e.preventDefault();
}

const Pregunta = () => {
    const [cantidad, guardarCantidad] = useState(0);

    return ( 
        <Fragment>
            <h3>Ingresa tu presupuesto</h3>
            <form onSubmit={agregarPresupuesto}>
                <input 
                    type="number"
                    min="0"
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