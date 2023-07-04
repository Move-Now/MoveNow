import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import { Link } from 'react-router-dom';

import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./style.css";
import { GoogleMapComponent } from "../../components/GoogleMap/GoogleMap";

const StyledDriver = styled.div`
  color: ${(props) => props.theme.textColor};

  .title-top-index-driver-content {
    background-color: rgba(0, 0, 0, 0.50);
  }

  .index-driver-content-orders {
    background-color: ${(props) => props.theme.glass};
  }

  .client-order {
    transition: ${(props) => props.theme.transitionComponents};
    background: ${(props) => props.theme.backgroundColor};
    border-right: 1px solid ${(props) => props.theme.spanColor};
    border-left: 1px solid ${(props) => props.theme.spanColor};
    border-radius: 20px;
  }

  .details-button-content {
    background: ${(props) => props.theme.spanColor};
    color: #fff;
  }

  .division-vertical {
    border-color: ${(props) => props.theme.textColor};
  }

  button:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
    background: ${props => props.theme.corFraca};
  }
`;

export function IndexDriver() {

  const [orcamentos, setOrcamentos] = useState([]);
  const [quantidadeItens, setQuantidadeItens] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function pegarOrcamentos() {
      try {
        const result = await axios.get("http://localhost:8800/orcamentos");
        const dadosRota = result.data;
        const ultimosCincoOrcamentos = dadosRota.slice(-5);
        setOrcamentos(ultimosCincoOrcamentos);
  
        const quantidadeItensPromises = ultimosCincoOrcamentos.map(async (orcamento) => {
          const response = await axios.get(`http://localhost:8800/orcamentos/${orcamento.id_carreto}`);
          return response.data.length;
        });
  
        const quantidadeItensResult = await Promise.all(quantidadeItensPromises);
        setQuantidadeItens(quantidadeItensResult);
  
        setTimeout(() => setIsLoading(false), 3000);
      } catch (error) {
        console.log(error);
      }
    }
  
    pegarOrcamentos();
  }, []);

  return (
    <StyledDriver>
      <ScrollToTop />
      <div className="index-driver">
        <div className="top-index-driver">
          <div className="title-top-index-driver">
            <h1 className="title-top-index-driver-content">
              Tenha o controle total sobre seu serviço de carreto, escolhendo a
              opção ideal
            </h1>
          </div>
        </div>
      </div>
      <div className="index-driver-content">
        <div className="subtitle-index-driver">
          <h2 className="subtitle-index-driver-content">Fretes Disponíveis</h2>
        </div>
        <div className="index-driver-content-orders">
          <div className="driver-orders-content">
            {/* RETORNAR A API DO BACK NESSE ESPAÇO */}
            {isLoading ? (
              <p className="details-paragraph">Carregando...</p>
            ) : (
              orcamentos.map((item, index) => (
                <div key={index}>
                  <GoogleMapComponent
                    id={item.id_carreto}
                    id_carreto={item.id_carreto}
                    origin={item.origem}
                    destination={item.destino}
                    quantidadeItens={quantidadeItens[index]}
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </StyledDriver>
  );
}
