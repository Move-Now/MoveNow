import "./Input.css";
import React from "react";
import styled from "styled-components";

const StyledInput = styled.div`

input {
  color: ${props => props.theme.textColor};
}

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;


export function Input(props) {
  return (
    <StyledInput>
      <div className="wrapperInput">
        <label>{props.title}</label>
        <div className="input">
          <input type={props.type} placeholder={props.placeholder} />
          {props.icon}
        </div>
      </div>
    </StyledInput>
  );
}
