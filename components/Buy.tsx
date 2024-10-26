import React from "react";
import { CiSearch } from "react-icons/ci";

const Buy = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      <input
        type="text"
        className="lg:border-b lg:border-t lg:border-l border lg:border-0 border-black h-12 p-2 outline-none focus:outline-1 focus:border"
        placeholder="City Location"
      />{" "}
      <input
        className="lg:border-b lg:border-t border lg:border-0 border-black h-12 p-2 outline-none focus:outline-1 focus:border"
        placeholder="Min Price"
        type="number"
      />{" "}
      <input
        type="number"
        className="lg:border-b lg:border-t border lg:border-0 border-black h-12 p-2 outline-none focus:outline-1 focus:border"
        placeholder="Max Price"
      />
      <div className=" lg:w-20 h-12 flex justify-center items-center border border-black bg-yellow-400 cursor-pointer ">
        <CiSearch className="text-3xl" />
      </div>
    </div>
  );
};

export default Buy;
