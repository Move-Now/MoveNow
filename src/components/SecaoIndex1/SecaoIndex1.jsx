import React from "react";
import styled from "styled-components";
import "./SecaoIndex1.css";
import { Link } from "react-router-dom";

const StyledSecaoIndex1 = styled.div`
  transition: ${props => props.theme.transitionComponents};
  background-color: ${props => props.theme.backgroundColor};
  color: ${props => props.theme.textColor};

  span {
    color: ${props => props.theme.spanColor};
  }

  .span1 {
    font-style: italic;
    color: ${props => props.theme.textColor};
    transition: ${props => props.theme.transitionComponents};
  }

  .button-one:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
    background: ${props => props.theme.corFraca};
  }

  .button-two:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
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

        <div className="wrapperContent">
          <h1>
          <span className="span1">Movimente</span> sua vida com tranquilidade. <br /> Deixe o
          <span> transporte</span> por nossa conta.
          </h1>

          <p>Se você está procurando um serviço confiável e eficiente de fretes ou carretos, então você veio ao lugar certo! Não deixe para depois, peça “<span>Now</span>” com a <span>MoveNow</span>.
          </p>

          <div className="wrapperButtons">
            <Link to={"/login"}>
              <ButtonPrimary className="button-one">Solicite um carreto</ButtonPrimary>
            </Link>

            <Link to={"/trabalheConosco"}>
              <ButtonSecondary className="button-two">Seja um motorista</ButtonSecondary>
            </Link>
          </div>
        </div>

        <img src={props.img} alt="" />
      </div>
    
    </StyledSecaoIndex1>
  );
}
