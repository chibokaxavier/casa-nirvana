"use client";
import React, { useState } from "react";
import Buy from "./Buy";
import Rent from "./Rent";

const Search = () => {
  const [tab, setTab] = useState("buy");
  return (
    <div>
      <div className="flex">
        <div
          className={`${
            tab === "buy" ? "text-white bg-black" : ""
          } h-10 w-28 border cursor-pointer border-black flex justify-center items-center`}
          onClick={() => setTab("buy")}
        >
          Buy
        </div>
        <div
          className={`${
            tab === "rent" ? "text-white bg-black" : ""
          } h-10 w-28 border cursor-pointer border-black flex justify-center items-center`}
          onClick={() => setTab("rent")}
        >
          Rent
        </div>
      </div>
      {tab === "buy" && <Buy />}
      {tab === "rent" && <Rent />}
    </div>
  );
};

export default Search;
