import React from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
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

  // FAZER A API DO BACK-END, PARA RETORNAR O COMPONENTE 'GoogleMapComponent' NELE JA CONTEM A DIV 'client-order' QUE ESTA ESTILIZADA NO CSS DESSE COMPONENTE, DENTRO DESSA API TER VARIAVEL QUE ARMAZENE A ORIGEM E DESTINO QUE NEM O EXEMPLO ABAIXO...

  const origem = "R. Sírius, 140 - Jardim Antares, São Bernardo do Campo - SP, 09606-100";
  const destino = "Senac Lapa Tito, R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000";
  
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

          <GoogleMapComponent origin={origem} destination={destino} />

          <GoogleMapComponent origin="Rua Santa Catarina - Cidade São Jorge, Santo André - SP, 09111-520" destination="R. Sírius, 140 - Jardim Antares, São Bernardo do Campo - SP, 09606-100" />

          <GoogleMapComponent origin="Neo Química Arena - Artur Alvim, São Paulo - SP" destination="Jardim Antares, São Bernardo do Campo - SP, 09606-100" />

          </div>
        </div>
      </div>
      <Footer />
    </StyledDriver>
  );
}
