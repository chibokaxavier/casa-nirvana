"use client";
import React from "react";
import { MapContainer, TileLayer,  Popup, Marker } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";



const myIcon = new Icon({
  iconUrl: "/locationn.jpg", // Path relative to the public directory
  iconSize: [38, 95], // Customize the size as needed
  iconAnchor: [22, 94], // Adjust to position the icon correctly
  popupAnchor: [-3, -76], // Position the popup relative to the icon
});

const Map = () => {
  const position: LatLngExpression = [51.505, -0.09];

  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className="h-[100vh]">
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[51.505, -0.09]} icon={myIcon}>
      
      </Marker>
    </MapContainer>
  );
};

export default Map;
