import React, { useState } from "react";
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./style.css";
import { BsStarFill, BsStarHalf } from "react-icons/bs";
import { Checkbox } from "../../components/Checkbox/Checkbox";


const StyledOrdersReceived = styled.div`
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

  .stars-orders-received svg{
    color: ${(props) => props.theme.spanColor};
  }

  .data-personal-paragraphs-content {
    color: ${(props) => props.theme.spanColor};
  }

  button:hover {
    box-shadow: 0px 1px 10px ${props => props.theme.textColor};
    background: ${props => props.theme.corFraca};
  }
`;

export function OrdersReceived() {
  const [showDetailsDriver, setShowDetailsDriver] = useState(false)
  const [buttonValue, setButtonValue] = useState('Detalhes +');


  const detailsDriver = () => {
    if (showDetailsDriver) {
      setButtonValue('Detalhes +');
    } else {
      setButtonValue('Detalhes -');
    }
    setShowDetailsDriver(!showDetailsDriver);
  }
  
  return (
    <StyledOrdersReceived>
      <ScrollToTop />
      <div className="index-driver-content">
        <div className="subtitle-index-driver">
          <h2 className="subtitle-index-driver-content">Orçamentos recebidos</h2>
        </div>
        <div className="index-driver-content-orders">
          <div className="driver-orders-content">
            <div className="client-order">
              <div className="order-details-driver">
                <div className="order-details-content">
                <div className="iframe-container">
                  <iframe src="https://lumalabs.ai/embed/92797D32-F7A6-4960-95EF-D2DA79F03815?mode=slf&background=%23ffffff&color=%23ffffff&showTitle=false&loadBg=false&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=false" width="450" height="250" frameborder="0" title="luma embed" className="truck3d"></iframe>
                </div>
                  <div className="details-content-left-orders-received ">
                    <p className="details-title">Gabriel Sena</p>
                    <div className="stars-orders-received">
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarFill />
                      <BsStarHalf />
                    </div>
                    <p className="details-paragraph">Motorista desde: 01/2023</p>
                  </div>

                  <div className="division-vertical"></div>

                  <div className="division-horizontal"></div>

                  <div className="details-content-right">

                    <p className="details-title">Preço total: </p>
                    <p className="details-paragraph">R$ 150,00</p>
                  </div>

                </div>
                <div className="details-button">
                  <button className="details-button-content" onClick={detailsDriver} id="button-details-driver">{buttonValue}</button>
                  <p className="details-post-data">Data de envio: 23/06</p>
                </div>

                {showDetailsDriver && (
                  <>
                    <div className="assessment-driver">
                      <div className="assessment-driver-left">
                        <h2 className="details-title">Telefone: </h2>
                        <div className="stars-assessment">
                          <p className="data-personal-paragraphs-content">(11) 99171-2980</p>
                        </div>
                      </div>

                      <div className="assessment-driver-right">
                        <h2 className="details-title">Fretes já realizados</h2>
                        <p className="data-personal-paragraphs-content">10</p>
                        <h2 className="details-title">Posição no ranking</h2>
                        <p className="data-personal-paragraphs-content">1°</p>
                      </div>
                    </div>

                    <div className="assessment-driver-payment">
                        <h2 className="details-title">Formas de Pagamento:</h2>
                        <div className="payment-driver-details">
                          <Checkbox title={"Cartão de crédito"} price={"150,00"} />
                          <Checkbox title={"Cartão de débito"} price={"150,00"} />
                          <Checkbox title={"Boleto"} price={"150,00"} />
                        </div>
                        <button className="details-button-content" id="button-details-driver">Contratar</button>
                    </div>
                    
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </StyledOrdersReceived>
  );
}
