import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";
import styled from "styled-components";
import "./SecaoIndex2.css";
import axios from "axios";

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

  .confirmButtonColor {
    color: ${props => props.theme.spanColor};
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
    setCepOrigem(event.target.value);
  };

  const handleDestinationCepChange = (event) => {
    setCepDestino(event.target.value);
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

        // DENTRO DESSA CHAMADA, VERIFICAR SE TA LOGADO OU NAO COMO USUARIO, SE SIM IR PARA /ORCAMENTO SE NAO IR PARA LOGIN...

        const Toast = Swal.mixin({
          
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          color: '#000',
          icon: 'success',
          title: 'CEP validado com sucesso!'
        })
        
        setCepOrigem("");
        setCepDestino("");
        navigate('/orcamento');
      }

    } catch (error) {

      Swal.fire({
        color: '#000',
        confirmButtonColor: '#000',
        icon: 'error',
        title: 'Oops...',
        text: 'CEPs inválidos!',
      })

      setCepOrigem("");
      setCepDestino("");

      document.getElementById("cep-origin").value = "";
      document.getElementById("cep-destination").value = "";

      localStorage.removeItem("cepOrigem");
      localStorage.removeItem("cepDestino");
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
              <p className="contentIndex2">Peça seu orçamento <span>grátis</span> <br/> e sem compromisso</p>

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
