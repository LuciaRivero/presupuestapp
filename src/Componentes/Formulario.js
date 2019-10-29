import React, {useState} from 'react';
import Error from './Error';
import shortid from 'shortid';

function Formulario(props) {

    const {guardarGasto, guardarCrearGasto} = props;

    const [nombreGasto, guardarNombreGasto] = useState('');
    const [cantidadGasto, guardarCantidadGasto] = useState(0);
    const [error,guardarError] = useState(false);

    const agregarGasto = e => {
        e.preventDefault();
        if(cantidadGasto < 1 || isNaN(cantidadGasto) || nombreGasto === ''){
            guardarError(true);
            return;
        }
        const gasto = {
            nombreGasto,
            cantidadGasto,
            id: shortid.generate()
        }
        guardarGasto(gasto)
        guardarCrearGasto(true);
        guardarError(false);

        guardarNombreGasto('');
        guardarCantidadGasto('');

    }
    return ( 
        <form onSubmit={agregarGasto}>
            <h3>Agrega un gasto aqui</h3>
            {error? <Error mensaje="Algunos campos son incorrectos"/> :null}
            <div className="campo">
                <label>Nombre gasto</label>
                <input type="text"
                        className="u-full-width"
                        placeholder="Ej. Transporte"
                        onChange={e =>guardarNombreGasto(e.target.value)}
                        value={nombreGasto}/>
            </div>
            <div className="campo">
                <label>Cantidad gasto</label>
                <input type="number"
                        className="u-full-width"
                        placeholder="Ej. $300"
                        onChange={e =>guardarCantidadGasto(parseInt(e.target.value, 10))}
                        value={cantidadGasto}/>
            </div>
            <input type="submit" className="button-primary u-full-width" value="Agregar gasto"/>
        </form>
     );
}
 
export default Formulario;