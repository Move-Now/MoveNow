import React from "react";
import styled from "styled-components";
import "./SecaoIndex2.css";

const StyledSecaoIndex2 = styled.div`
  .section2 {
    transition: ${props => props.theme.transitionComponents};
    background-color: ${props => props.theme.glass};
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.textColor};
  }

  span {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.spanColor};
  }

  .iconIndex2 {
    transition: ${props => props.theme.transitionComponents};
    color: ${props => props.theme.spanColor};
  }

  .buttonIndex2 {
    background-color: ${props => props.theme.backgroundColor};
    transition: ${props => props.theme.transitionComponents};
    color : ${props => props.theme.textColor};
  }

  .buttonIndex2-origem {
    transition: ${props => props.theme.transitionComponents};
    color : ${props => props.theme.textColor};
    border-color: ${props => props.theme.spanColor};
  } 

  input:focus {
    outline: 1px solid ${props => props.theme.spanColor};;
}

  /* Adicione outros estilos personalizados específicos do componente aqui */
`;

const ButtonPrimary = styled.button` 
  font-weight: ${props => props.theme.buttonFontWeight};
  color: ${props => props.theme.buttonPrimaryColor};
  background-color: ${props => props.theme.buttonBackgroundPrimaryColor};
`;

export function SecaoIndex2(props) {

  return (
    <StyledSecaoIndex2>
      <div className="section2">
        {/* <div className="eclipse"></div> */}
        {/* por enquanto vamos deixar esse eclipse aqui, até encontrarmos uma maneira mais eficiente de reproduzir */}
        <div className="topIndex2">
          <h2 className="titleIndex2">Transporte de carretos e mudanças na região de São Paulo</h2>
          <p className="contentIndex2">Faça a <span>escolha certa</span> para sua mudança. Peça um <span>orçamento</span>!</p>
        </div>
        <div className="bottomIndex2">
          <div className="form">
              <p>Peça seu orçamento <span>grátis</span> <br/> e sem compromisso</p>

              <span className="buttonIndex2-origem">Origem:</span>
              <input type="text" className="buttonIndex2" placeholder="CEP de origem"/>

              <span className="buttonIndex2-origem">Destino:</span>
              <input type="text" className="buttonIndex2" placeholder="CEP de destino"/>
              <ButtonPrimary className="buttonSection2">Solicite já seu orçamento</ButtonPrimary>
              
          </div>
          <img src={props.img} alt=""/>
        </div>
      </div>
    </StyledSecaoIndex2>
  );
}
