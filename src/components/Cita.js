import React from 'react'
import PropTypes from 'prop-types';

const Cita = ({item, eliminarCita}) => (  
    <div className="cita">
        <p>Mascota: <span>{item.mascota}</span></p>
        <p>Dueño: <span>{item.propietario}</span></p>
        <p>Fecha: <span>{item.fecha}</span></p>
        <p>Hora: <span>{item.hora}</span></p>
        <p>Sintomas: <span>{item.sintomas}</span></p>
        <button
          className="button eliminar u-full-width"
          onClick={() => eliminarCita(item.id)}
        >Eliminar &times;</button>
    </div>
);

Cita.propTypes = {
    item: PropTypes.object.isRequired,
    eliminarCita: PropTypes.func.isRequired
}
 
export default Cita;