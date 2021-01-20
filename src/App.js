import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';
import Cita from './components/Cita';

function App() {

  const [citas, setCitas] = useState([]);

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
  }

  const eliminarCita = id => {
    const lista = citas.filter(it => it.id !== id);
    setCitas(lista);
  }

  return (
    <Fragment>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Formulario
              crearCita={crearCita}/>
          </div>
          <div className="one-half column">
            <h2>Administra tus citas</h2>
            {citas.map(it => {
              return(
                <Cita
                key={it.id}
                item={it} 
                eliminarCita={eliminarCita}
                />
              )
            })}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
