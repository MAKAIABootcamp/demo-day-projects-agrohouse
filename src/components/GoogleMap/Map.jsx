import { GoogleMap, Marker } from "@react-google-maps/api";
import React from "react";

const Map = ({ center }) => {
  return (
    <GoogleMap center={center} zoom={17} mapContainerStyle={{ width: '100%', height: '500px', border: '1px solid black' }}>
      <Marker position={center} />
    </GoogleMap>
  )
};

export default Map;
