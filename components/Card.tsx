import React from "react";
import { CiBookmark, CiLocationOn } from "react-icons/ci";
import { FaBath } from "react-icons/fa";
import { IoBedOutline } from "react-icons/io5";
import { LuMessageSquarePlus } from "react-icons/lu";

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
  item: Item;
}

const Card = ({ item }: ItemProps) => {
  return (
    <div className="flex mt-10 gap-6">
      <img src={item.img[0]} alt="" className="w-[400px] h-[300px] rounded-md" />{" "}
      <div className=" text-xl flex flex-col gap-5">
        <p className="text-2xl font-semibold"> {item.title}</p>

        <p className="flex items-center ">
          <CiLocationOn /> <span>{item.address}</span>
        </p>
        <p className="bg-yellow-200 text-black rounded-md p-1 w-fit">
          $ {item.price}
        </p>

        <div className="flex gap-10 mt-20">
          <div className="flex gap-10">
            <p className="border border-gray-300 p-[2px] px-2 flex items-center rounded-md cursor-pointer">
              <IoBedOutline className="mr-3" />{" "}
              <span>{item.bedrooms} Bedroom(s)</span>
            </p>{" "}
            <p className="border border-gray-300 p-[2px] px-2 flex items-center rounded-md cursor-pointer">
              <FaBath className="mr-3" />{" "}
              <span> {item.bathrooms} Bathroom(s)</span>
            </p>
          </div>

          <div className="flex gap-5 items-center">
            <div className="p-1 border border-gray-300 rounded-md cursor-pointer ">
              <CiBookmark />
            </div>
            <div className="p-1 border border-gray-300 rounded-md cursor-pointer ">
              <LuMessageSquarePlus />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
