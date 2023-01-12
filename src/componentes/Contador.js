import React from "react";
import "../hojas-de-estilos/Contador.css"

function Contador({ numeroDeClicks }) {

    return (
        <div className="contador">
            {numeroDeClicks}

        </div>
    );
    
}

export default Contador;