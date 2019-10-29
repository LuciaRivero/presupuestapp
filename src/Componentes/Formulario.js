import React, {useState} from 'react';

function Formulario(props) {

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error,guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true);
            return;
        }

        
    }
    return ( 
        <form onSubmit={agregarGasto}>
            <h3>Agrega un gasto aqui</h3>
            <div className="campo">
                <label>Nombre gasto</label>
                <input type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        onChange={e =>guardarNombreGasto(e.target.value)}/>
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input type="number"
                        className="u-full-width"
                        placeholder="Ej. $300"
                        onChange={e =>guardarCantidadGasto(parseInt(e.target.value, 10))}/>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>
        </form>
     );
}
 
export default Formulario;