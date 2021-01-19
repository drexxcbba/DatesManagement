import React, { Fragment, useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({crearCita}) => {

    const [cita, setCita] = useState({
        mascota:'',
        propietario:'',
        fecha:'',
        hora:'',
        sintomas:''
    });

    const [error, setError] = useState(false);

    const actualizarState = e => {
        setCita({
            ...cita,
            [e.target.name]: e.target.value
        })
    }

    const submitCita = e => {
        e.preventDefault();

        if(mascota.trim() === '' || propietario.trim() === '' || fecha.trim() === ''
           || hora.trim() === '' || sintomas.trim() === ''){
               setError(true);
               return;
           }

        setError(false);
        cita.id = uuidv4();
        crearCita(cita);
        setCita({
            mascota:'',
            propietario:'',
            fecha:'',
            hora:'',
            sintomas:''
        })
    }

    const { mascota, propietario, fecha, hora, sintomas } = cita;

    return (  
        <Fragment>
            <h2>Crear cita</h2>
            {error ? <p className="alerta-error">Todos los campos son obligatorios</p> : null}
            <form
              onSubmit={submitCita}>
                <label>Nombre mascota</label>
                <input 
                   type="text"
                   name="mascota"
                   className="u-full-width"
                   placeholder="Nombre mascota"
                   onChange={actualizarState}
                   value={mascota}
                /> 

                <label>Nombre dueño</label>
                <input 
                   type="text"
                   name="propietario"
                   className="u-full-width"
                   placeholder="Nombre dueño de la mascota"
                   onChange={actualizarState}
                   value={propietario}
                /> 

                <label>Fecha</label>
                <input 
                   type="date"
                   name="fecha"
                   className="u-full-width"
                   onChange={actualizarState}
                   value={fecha}
                /> 

                <label>Hora</label>
                <input 
                   type="time"
                   name="hora"
                   className="u-full-width"
                   onChange={actualizarState}
                   value={hora}
                /> 

                <label>Sintomas</label>
                <textarea
                  className="u-full-width"
                  name="sintomas"
                  onChange={actualizarState}
                  value={sintomas}
                ></textarea>

                <button
                  type="submit"
                  className="u-full-width button-primary"
                >Crear cita</button>
            </form>
        </Fragment>
    );
}
 
export default Formulario;