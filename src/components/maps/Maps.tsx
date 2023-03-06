import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { MarkerF } from "@react-google-maps/api";
const containerStyle = {
  width: "100%",
  height: "200px",
};

const center = { lat: 48.1776851, lng: 11.631317 };
interface Props {}

const GoogleMapWrapper = () => {
  const [map, setMap] = useState<google.maps.Map | null>(null);

  // useEffect(() => {
  //   if (map) {
  //     console.log(map.getCenter());
  //   }
  // }, [map]);

  const onLoad = (mapInstance: google.maps.Map) => {
    setMap(mapInstance);
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyCftTOzpxG-_65wM94Abdu9TPU4Lxq0cfc">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={16}
        onLoad={onLoad}
      >
        <MarkerF position={center} />
      </GoogleMap>
    </LoadScript>
  );
};

export default GoogleMapWrapper;
