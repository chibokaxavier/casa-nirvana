import React from "react";

interface Item {
  id: number;
  title: string;
  img: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  address: string;
  latitude: number;
  longitude: number;
}

interface ItemProps {
  item: Item;
}

const Card = ({ item }: ItemProps) => {
  return <div>
    {item.title}
  </div>;
};

export default Card;
