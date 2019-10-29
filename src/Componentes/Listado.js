import React from 'react';
import Gasto from './Gasto';

function Listado ({gastos}) {
    return (
        <div className="gastos-realizados">
            <h3>Listado</h3>
            {gastos.map(gasto => (
                <Gasto key={gasto.id} gasto={gasto} />
            ))}
        </div>
    )
}

export default Listado