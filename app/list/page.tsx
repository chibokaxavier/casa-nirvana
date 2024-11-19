'use client'
import Card from "@/components/Card";
import Filter from "@/components/Filter";
import Map from "@/components/Map";
import { dummyData } from "@/lib/data";
import React from "react";

const page = () => {
  return (
    <div className="flex sm:max-w-[738px] md:max-w-[1024px] lg:max-w-[1366px]    lg:mx-20  mx-10">
      <div className="w-[70%] ">
        <h2 className="text-2xl">Search results for </h2>
        <Filter />
        {dummyData.map((item, index) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>
      <div className="w-[30%] "><Map item={dummyData}/></div>
    </div>
  );
};

export default page;
