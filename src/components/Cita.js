import React from 'react'

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
 
export default Cita;