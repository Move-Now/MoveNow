import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import "./SecaoIndex2.css";
import { useNavigate } from 'react-router-dom';

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
  const [cepOrigem, setCepOrigem] = useState("");
  const [cepDestino, setCepDestino] = useState("");
  const navigate = useNavigate();

  const handleOriginCepChange = (event) => {
    setCepOrigem(event.target.value, "origem");
  };

  const handleDestinationCepChange = (event) => {
    setCepDestino(event.target.value, "destino");
  };

  const buscarDetalhesCEP = async () => {
    try {
      const origemResponse = await axios.get(
        `https://viacep.com.br/ws/${cepOrigem}/json/`
      );
      const origemData = origemResponse.data;

      const destinoResponse = await axios.get(
        `https://viacep.com.br/ws/${cepDestino}/json/`
      );
      const destinoData = destinoResponse.data;

      if (!origemData.erro && !destinoData.erro) {
        localStorage.setItem("cepOrigem", cepOrigem);
        localStorage.setItem("cepDestino", cepDestino);
        document.getElementById('cep-origin').value = "";
        document.getElementById('cep-destination').value = "";
        
        alert("Redirecionando...");
        setCepOrigem("");
        setCepDestino("");
        navigate('/orcamento');
      }

    } catch (error) {
      alert("CEP inválido!");

      setCepOrigem("");
      setCepDestino("");

      document.getElementById("cep-origin").value = "";
      document.getElementById("cep-destination").value = "";

      localStorage.removeItem("cepOrigem");
      localStorage.removeItem("cepDestino");

      const cepInput = document.querySelector("#cep-origin");
      if (cepInput) {
        cepInput.focus();
      }
    }
  };

  const handleCepOrigemKeyDown = (event) => {
    if (event.key === "Enter") {
      const cepInputDestino = document.querySelector("#cep-destination");
      if (cepInputDestino) {
        cepInputDestino.focus();
      }
    }
  };

  const handleCepDestinoKeyDown = (event) => {
    if (event.key === "Enter") {
      buscarDetalhesCEP(cepDestino)
    }
  };

  return (
    <StyledSecaoIndex2>
      <div className="section2">

        <div className="topIndex2">
          <h2 className="titleIndex2">Transporte de carretos e mudanças na região de São Paulo</h2>
          <p className="contentIndex2">Faça a <span>escolha certa</span> para sua mudança. Peça um <span>orçamento</span>!</p>
        </div>
        <div className="bottomIndex2">
          <div className="form">
              <p>Peça seu orçamento <span>grátis</span> <br/> e sem compromisso</p>

              <span className="buttonIndex2-origem">Origem:</span>
              <input type="number" className="buttonIndex2" placeholder="CEP de origem" id="cep-origin" value={cepOrigem}
              onChange={handleOriginCepChange} onKeyDown={handleCepOrigemKeyDown}/>

              <span className="buttonIndex2-origem">Destino:</span>
              <input type="number" className="buttonIndex2" placeholder="CEP de destino" id="cep-destination" value={cepDestino}
              onChange={handleDestinationCepChange} onKeyDown={handleCepDestinoKeyDown}/>

              <ButtonPrimary className="buttonSection2" onClick={buscarDetalhesCEP}>Solicite já seu orçamento</ButtonPrimary>
              
          </div>
          <img src={props.img} alt=""/>
        </div>
      </div>
    </StyledSecaoIndex2>
  );
}
