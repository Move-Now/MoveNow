import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';
import styled from "styled-components";
import { Footer } from "../../components/Footer/Footer";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import "./style.css";

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
`;

export function Driver() {
  const [directions, setDirections] = useState(null);
  const [directionsLoaded, setDirectionsLoaded] = useState(false);
  const [distance, setDistance] = useState(null);

  const origin = 'R. Sírius, 140 - Jardim Antares, São Bernardo do Campo - SP, 09606-100';
  const destination = 'Senac Lapa Tito, R. Tito, 54 - Vila Romana, São Paulo - SP, 05051-000';

   const handleDirectionsResult = (result, status) => {
    if (status === 'OK') {
      setDirections(result);
      const totalDistance = result.routes[0].legs[0].distance.text;
      setDistance(totalDistance);
    } else {
      console.error(status);
    }
  };
  const handleLoadMap = () => {

    if (!directionsLoaded) {
      setDirectionsLoaded(true);
      const directionsService = new window.google.maps.DirectionsService();
      directionsService.route(
        {
          origin: origin,
          destination: destination,
          travelMode: 'DRIVING',
        },
        handleDirectionsResult
        );
    }
  };

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
            <div className="client-order">
              <div className="order-map">
                <LoadScript
                  id="script-loader"
                  googleMapsApiKey="AIzaSyByBrJO4UaLMh_0B8nLzKxVjbhg14WF5Bs"
                >
                  <GoogleMap
                    mapContainerStyle={{ width: '100%', height: '100%' }}
                    center={{
                      lat: -23.528211621427616,
                      lng: -46.691804675537156,
                    }}
                    zoom={15}
                    onLoad={handleLoadMap}
                  >
                    {directions && (
                  <DirectionsRenderer
                    options={{
                      directions: directions
                    }}
                  />
                )}
                  </GoogleMap>
                </LoadScript>
              </div>

              <div className="order-details">
                <div className="order-details-content">
                  <div className="details-content-left">
                    <p className="details-title">Local de origem:</p>
                    <p className="details-paragraph">{origin}</p>
                    <p className="details-title">Local de destino:</p>
                    <p className="details-paragraph">{destination}</p>
                  </div>

                  <div className="division-vertical"></div>

                  <div className="division-horizontal"></div>

                  <div className="details-content-right">
                    <p className="details-title">Distância:</p>
                    <p className="details-paragraph">{distance}</p>
                    <p className="details-title">Total de itens:</p>
                    <p className="details-paragraph">15</p>
                  </div>
                </div>
                <div className="details-button">
                  <button className="details-button-content">Veja mais</button>
                  <p className="details-post-data">Data de postagem: 23/06</p>
                </div>
              </div>
            </div>



          </div>
        </div>
      </div>
      <Footer />
    </StyledDriver>
  );
}
