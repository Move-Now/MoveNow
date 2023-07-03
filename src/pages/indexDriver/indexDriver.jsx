import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./style.css";
import { GoogleMapComponent } from "../../components/GoogleMap/GoogleMap";
import axios from "axios";

const StyledDriver = styled.div`
  color: ${(props) => props.theme.textColor};

  .title-top-index-driver-content {
    background-color: rgba(0, 0, 0, 0.5);
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
`;

export function IndexDriver() {
  // FAZER A API DO BACK-END, PARA RETORNAR O COMPONENTE 'GoogleMapComponent' NELE JA CONTEM A DIV 'client-order' QUE ESTA ESTILIZADA NO CSS DESSE COMPONENTE, DENTRO DESSA API TER VARIAVEL QUE ARMAZENE A ORIGEM E DESTINO QUE NEM O EXEMPLO ABAIXO...
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
        setTimeout(() => setIsLoading(false), 5000);
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
              <p>Carregando...</p>
            ) : (
              orcamentos.map((item, index) => (
                <GoogleMapComponent
                  key={index}
                  id_carreto={item.id_carreto}
                  origin={item.origem}
                  destination={item.destino}
                />
              ))
            )}
          </div>
        </div>
      </div>
      <Footer />
    </StyledDriver>
  );
}
