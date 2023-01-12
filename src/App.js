import './App.css';
import logito from './imagenes/Logotipo Original (PNG).png'
import Boton from './componentes/Boton'
import Contador from './componentes/Contador';
import { useState } from 'react';


function App() {

  const  [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks + 1);
  };

  const reinciarContador = () => {
    setNumClicks(0);
  };


  return (
    <div className="App">
      <div className="logo_contenedor">
        <img 
          className="logo__peluqueria"
          src={logito}
          alt="Logo de timePeluqueria"/>
      </div>

      <div className="contenedor__principal">
        <Contador 
          numeroDeClicks={numClicks} />
        <Boton
          texto="Click"
          esBotonClick={true}
          manejarClick={manejarClick} />

        <Boton
          texto="Reinciar"
          esBotonDeClick={false}
          manejarClick={reinciarContador} />

      </div>
    </div>
  );
}

export default App;
