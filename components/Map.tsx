"use client";
import React from "react";
import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
import { Icon, LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css";
import Link from "next/link";

const myIcon = new Icon({
  iconUrl: "/locationn.jpg", // Path relative to the public directory
  iconSize: [18, 65], // Customize the size as needed
  iconAnchor: [22, 94], // Adjust to position the icon correctly
  popupAnchor: [-3, -76], // Position the popup relative to the icon
});

interface Item {
  id: number;
  title: string;
  img: string[];
  bedrooms: number;
  bathrooms: number;
  price: number;
  address: string;
  latitude: number ;
  longitude: number ;
}

interface ItemProps {
  item: Item[];
}

const Map = ({ item }: ItemProps) => {
  const position: LatLngExpression = [51.505, -0.09];

  return (
    <MapContainer
      center={[40.7128, -74.006]}
      zoom={13}
      scrollWheelZoom={true}
      className="h-[100vh]"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {item.map((marker, index) => {
        return (
          <Marker
            key={index}
            position={[marker.latitude, marker.longitude]}
            icon={myIcon}
          >
            <Popup>
              <Link href={`/${marker.id}`}>
                <div className="flex gap-10 w-[200px] h-[100px] justify-center items-center">
                  <img src={marker.img[0]} alt="" className="size-10" />
                  <div className="">
                    <p>Apartment {marker.id}</p>
                    <p>{marker.bedrooms} Bedroom</p>
                    <p className="font-semibold">$ {marker.price}</p>
                  </div>
                </div>
              </Link>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
};

export default Map;
