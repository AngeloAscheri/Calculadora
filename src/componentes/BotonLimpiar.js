import React from "react";
import '../hojas-de-estilo/BotonLimpiar.css'

const BotonLimpiar = (props) => (
  <div className='boton-limpiar' onClic={props.manejarClic}> 
    {props.children}
  </div>
);

export default BotonLimpiar;