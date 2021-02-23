import React, { useEffect } from "react";
import "./Map.css";
import { TileLayer, useMap } from "react-leaflet";
import { showDataOnMap } from "./util";

const MapConsumer = ({ center, zoom, countries, casesType }) => {
  const map = useMap();

  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);

  return (
    <>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {showDataOnMap(countries, casesType)}
    </>
  );
};

export default MapConsumer;
