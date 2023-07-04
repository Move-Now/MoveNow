import React, { useState, useEffect } from "react";
import {
  GoogleMap,
  LoadScript,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useNavigate } from "react-router-dom";


export function GoogleMapComponent({ origin, destination, quantidadeItens }) {

  const [currentDate, setCurrentDate] = useState("");
  const navigate = useNavigate();
  const [directions, setDirections] = useState(null);
  const [directionsLoaded, setDirectionsLoaded] = useState(false);
  const [distance, setDistance] = useState(null);
  const [mapKey, setMapKey] = useState(0);

  const getCurrentDate = () => {
    const date = new Date();
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const formattedDate = `${day}/${month}`;
    setCurrentDate(formattedDate);
  };

  useEffect(() => {
    getCurrentDate();
  }, []);

  const handleDirectionsResult = (result, status) => {
    if (status === "OK") {
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
          travelMode: "DRIVING",
        },
        handleDirectionsResult
      );
    }
  };

  useEffect(() => {
    return () => {
      setDirectionsLoaded(false);
      setMapKey((prevKey) => prevKey + 1);
    };
  }, []);

  const RedirectDetailsOrder = () => {
    navigate("/orderDetails");
  };

  return (
    <div className="client-order">
      <div className="order-map">
        <LoadScript
          id="script-loader"
          key={mapKey}
          googleMapsApiKey="AIzaSyByBrJO4UaLMh_0B8nLzKxVjbhg14WF5Bs"
        >
          <GoogleMap
            mapContainerStyle={{
              width: "100%",
              height: "100%",
              borderRadius: "20px",
              boxShadow: "0px 5px 5px rgba(0, 0, 0, 0.2)",
            }}
            zoom={15}
            onLoad={handleLoadMap}
            streetView={0}
            options={{
              disableDefaultUI: true,
              disableDoubleClickZoom: true,
              draggable: false,
            }}
          >
            {directions && (
              <DirectionsRenderer
                options={{
                  directions: directions,
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
            <p className="details-paragraph">{quantidadeItens}</p>
          </div>
        </div>
        <div className="details-button">
          <button
            className="details-button-content"
            onClick={RedirectDetailsOrder}
          >
            Veja mais
          </button>
          <p className="details-post-data">Data de postagem: {currentDate}</p>
        </div>
      </div>
    </div>
  );
}
