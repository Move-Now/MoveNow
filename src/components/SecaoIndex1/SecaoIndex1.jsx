import React from "react";
import styled from "styled-components";
import "./SecaoIndex1.css";

const StyledSecaoIndex1 = styled.div`
  transition: ${props => props.theme.transitionComponents};
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};

  span {
    color: ${props => props.theme.spanColor};
  }
  /* Adicione outros estilos aqui */
`;

const ButtonPrimary = styled.button` 
  font-weight: ${props => props.theme.buttonFontWeight};
  color: ${props => props.theme.buttonPrimaryColor};
  background-color: ${props => props.theme.buttonBackgroundPrimaryColor};
`;

const ButtonSecondary = styled.button`
  font-weight: ${props => props.theme.buttonFontWeight};
  color: ${props => props.theme.buttonSecondaryColor};
  background-color: ${props => props.theme.buttonBackgroundSecondaryColor};
  border: ${props => props.theme.buttonBorderSecondary};
`;


export function SecaoIndex1(props) {

  return (
    <StyledSecaoIndex1>

      <div className="section1">
        {/* <div className="eclipse"></div> */}
        {/* por enquanto vamos deixar esse eclipse aqui, até encontrarmos uma maneira mais eficiente de reproduzir */}

        {/* a imagem do caminhão também é provisória, até acharmos uma melhor */}

        <div className="wrapperContent">
          <h1>
          <span className="span1">Movimente</span> sua vida com tranquilidade. <br /> Deixe o
          <span> transporte</span> por nossa conta.
          </h1>

          <p>
            Se você está procurando um serviço de fretes ou carretos
            confiável e eficiente, então você veio ao lugar certo! Não
            deixe para depois, peça “<span>Now</span>” com a <span>MoveNow</span>.
          </p>

          <div className="wrapperButtons">
            <ButtonPrimary>Solicite um carreto</ButtonPrimary>
            <ButtonSecondary>Seja um motorista</ButtonSecondary>
          </div>
        </div>

        <img src={props.img} alt="" />
      </div>
    
    </StyledSecaoIndex1>
  );
}
