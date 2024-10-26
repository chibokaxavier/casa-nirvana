import React from "react";
import { CiSearch } from "react-icons/ci";

const Buy = () => {
  return (
    <div className="flex flex-col">
      <input
        type="text"
        className="border border-black h-12 p-2 outline-none focus:outline-1"
        placeholder="City Location"
      />{" "}
      <input
        className="border border-black h-12 p-2 outline-none focus:outline-1"
        placeholder="Min Price"
        type="number"
      />{" "}
      <input
        type="number"
        className="border border-black h-12 p-2 outline-none focus:outline-1"
        placeholder="Max Price"
      />
      <div className=" h-12 flex justify-center items-center border border-black bg-yellow-400 cursor-pointer ">
        <CiSearch className="text-3xl" />
      </div>
    </div>
  );
};

export default Buy;
