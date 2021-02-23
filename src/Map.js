import React from "react";
import "./Map.css";
import { MapContainer as LeafletMap } from "react-leaflet";
import MapConsumer from "./MapConsumer";

function Map({ countries, center, zoom, casesType }) {
  return (
    <div className="map">
      <LeafletMap center={center} zoom={zoom}>
        <MapConsumer
          countries={countries}
          center={center}
          zoom={zoom}
          casesType={casesType}
        />
        {/* <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {showDataOnMap(countries, casesType)}  */}
      </LeafletMap>
    </div>
  );
}

export default Map;
