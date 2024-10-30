import React from "react";
import { CiSearch } from "react-icons/ci";

const Filter = () => {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="" className="text-sm">
          Location
        </label>
        <input
          type="text"
          placeholder="City location"
          className="w-[80%] border border-black focus:outline-none p-2"
        />
      </div>
      <div className="flex mt-4 justify-between items-center w-[80%]">
        <div className="flex flex-col">
          <label htmlFor="">Type</label>{" "}
          <select name="" id="" className="border border-black w-[100px] p-1">
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>{" "}
        <div className="flex flex-col">
          <label htmlFor="">Property</label>{" "}
          <select name="" id="" className="border border-black w-[100px] p-1">
            <option value="">any</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>{" "}
            <option value="land">Land</option>
          </select>
        </div>{" "}
        <div className="flex flex-col">
          <label htmlFor="">Max Price</label>{" "}
          <input
            type="text"
            placeholder="any"
            className="w-[100px] border border-black focus:outline-none px-3 py-1"
          />
        </div>{" "}
        <div className="flex flex-col">
          <label htmlFor="">Min Price</label>{" "}
          <input
            type="text"
            placeholder="any"
            className="w-[100px] border border-black focus:outline-none px-3 py-1"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Bedroom</label>{" "}
          <input
            type="text"
            placeholder="any"
            className="w-[100px] border border-black focus:outline-none px-3 py-1"
          />
        </div>
        <div className="  flex justify-center items-center border mt-6 h-9 w-12 bg-yellow-400 cursor-pointer ">
          <CiSearch className="text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Filter;
