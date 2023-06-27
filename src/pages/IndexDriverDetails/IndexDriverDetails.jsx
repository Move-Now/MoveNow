import React, { useState, useEffect, useContext } from "react";
import { GoogleMap, LoadScript, DirectionsRenderer } from '@react-google-maps/api';
import { Footer } from "../../components/Footer/Footer";
import { BsPersonCircle } from "react-icons/bs";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import styled from "styled-components";
import "./style.css";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";



const StyledIndexDriverDetails = styled.div`
    color: ${(props) => props.theme.textColor};

    .address-order {
        color: ${(props) => props.theme.spanColor};
    }

    .top-details-content-map-address {
        padding: 20px;
        border-bottom: 1px solid ${(props) => props.theme.textColor};
        border-right: 1px solid ${(props) => props.theme.textColor};
        border-radius: 20px;
    }

    .details-change {
        background: ${(props) => props.theme.glass};
    }

    th {
        background: ${props => props.theme.spanColor};
        color: #FFFFFF;
      }
    
      td {
        transition: ${props => props.theme.transitionComponents};
        color: ${props => props.theme.textColor};
        background: ${props => props.theme.backgroundColor};
      }
    
      td::before {
        color: ${props => props.theme.spanColor};
      }

      .details-paragraph {
        color: ${props => props.theme.spanColor};
      }

      .input-budget-send {
        border: 1px solid ${props => props.theme.textColor};
        color: ${props => props.theme.spanColor};
      }

      input:focus {
        border: none;
        outline: 2px solid ${props => props.theme.spanColor};
    }

    .button-budget-send {
        color: #fff;
        font-weight: 600;
        background: ${props => props.theme.spanColor};
    }
`;

export function IndexDriverDetails() {

    return (
        <StyledIndexDriverDetails>
            <ScrollToTop />
            <div className="index-driver-order-details">
                <div className="top-details">
                    <div className="top-details-content">
                        <h1 className="title-details-index-driver">Trajeto do carreto</h1>
                        <div className="top-details-content-map-address">
                            <div className="details-map">
                                <LoadScript
                                    id="script-loader"

                                    googleMapsApiKey="AIzaSyByBrJO4UaLMh_0B8nLzKxVjbhg14WF5Bs"
                                >
                                    <GoogleMap
                                        mapContainerStyle={{ width: '100%', height: '100%', borderRadius: '20px', boxShadow: '0px 5px 5px rgba(0, 0, 0, 0.2)' }}
                                        zoom={15}
                                        center={{ lat: -23.67563227872147, lng: -46.56379114669698 }}
                                    >

                                    </GoogleMap>
                                </LoadScript>
                            </div>

                            <div className="details-content">
                                <div className="details-content-address">
                                    <h2 className="subtitle-details-address">Local de origem: </h2>
                                    <p className="address-order">R.Simao vieira lindo</p>

                                    <h2 className="subtitle-details-address">Local de origem: </h2>
                                    <p className="address-order">R.Simao vieira lindo</p>
                                </div>

                                <div className="user-order">
                                    <p className="user-order-content"><BsPersonCircle />Fabricio Herculano da Silva</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="details-change">
                    <div className="details-change-content">
                        <h2 className="title-details-index-driver">Detalhes da mudança</h2>
                        <div className="change-details-itens">
                            <div className="column">
                                <table className="table-order">
                                    <thead>
                                        <tr>
                                            <th>Item</th>
                                            <th>Área</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Geladeira</td>
                                            <td>1,44 m²</td>
                                        </tr>
                                        <tr>
                                            <td>Geladeira</td>
                                            <td>1,44 m²</td>
                                        </tr>
                                        <tr>
                                            <td>Geladeira</td>
                                            <td>1,44 m²</td>
                                        </tr>
                                        <tr>
                                            <td>Geladeira</td>
                                            <td>1,44 m²</td>
                                        </tr>
                                        <tr>
                                            <td>Geladeira</td>
                                            <td>1,44 m²</td>
                                        </tr>
                                        <tr>
                                            <td>Geladeira</td>
                                            <td>1,44 m²</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div className="change-details-right">
                                <div className="details-left">
                                    <h2 className="subtitle-details-address">Total de itens</h2>
                                    <br />
                                    <p className="details-paragraph-order">6</p>
                                </div>

                                <div className="details-right">
                                    <h2 className="subtitle-details-address">Área total</h2>
                                    <br />
                                    <p className="details-paragraph-order">1,44 m²</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="send-budget">
                    <div className="send-budget-content">
                        <h2 className="title-details-index-driver">Mande um orçamento!</h2>
                        <div className="send-budget-form">
                            <div className="budget-form-inputs">
                                <div className="form-inputs-budget">
                                    <div className="budget-form-inputs-content">
                                        <p className="form-input-name"><BsPersonCircle />Nome</p>
                                        <input type="text" className="input-budget-send" placeholder="Nome Completo" />
                                    </div>

                                    <div className="budget-form-inputs-content">
                                        <p className="form-input-name"><BsPersonCircle />Telefone</p>
                                        <input type="text" className="input-budget-send" placeholder="00 00000-0000" />
                                    </div>
                                </div>

                                <div className="budget-value-order">
                                    <div className="icon-budget-value">
                                        <p className="form-input-name"><RiMoneyDollarCircleLine className="icon-budget-content"/>Valor</p>
                                    </div>
                                    
                                    <div className="budget-form-value-content">
                                        <div className="budget-form-inputs-content">
                                            <input type="text" className="input-budget-send" placeholder="R$ 00,00" />
                                        </div>

                                        <div className="budget-form-inputs-content">
                                            <input type="text" className="input-budget-send" placeholder="Confirmar o valor" />
                                        </div>
                                    </div>
                                    
                                </div>
                                    <button className="button-budget-send">Enviar orçamento</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </StyledIndexDriverDetails>
    );
}