import React, { useState } from 'react';
import "./Button.css";

export function Button(props, css) {

    const name = useState(props.buttonName)

  return (  
    <>
        <button>{name}</button> {/* Utilizar o event.preventDefault() para cancelar o submit do botão */}
    </>
  );
}
