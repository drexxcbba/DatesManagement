import React, { Fragment, useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  const [citas, setCitas] = useState([]);

  const crearCita = cita => {
    setCitas([
      ...citas,
      cita
    ]);
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
            2
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
