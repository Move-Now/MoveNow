import React from "react";
import styled from "styled-components";
import "./Partnerships.css";

const StyledPartnerships = styled.div`
  .parcerias {
    background-color: ${props => props.theme.backgroundColor};
    box-shadow: ${props => props.theme.boxShadow};
    border: ${props => props.theme.borderBottom};
    transition: ${props => props.theme.transitionComponents};
  }

  .parceiro:hover {
    background: ${props => props.theme.hoverBackground};
    transition: 0.4s;
}
  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

export function Partnerships() {
  return (
    <StyledPartnerships>
      <div className="parcerias">
        <div className="parceiro">
          <img src="../src/assets/image 1.png" />
        </div>
        <div className="parceiro">
          <img src="../src/assets/image 2.png" />
        </div>
        <div className="parceiro">
          <img src="../src/assets/g32.svg" />
        </div>
        <div className="parceiro">
          <img src="../src/assets/image 3.png" />
        </div>
        <div className="parceiro">
          <img src="../src/assets/logoRutter.png" />
        </div>
      </div>
    </StyledPartnerships>
  );
}
