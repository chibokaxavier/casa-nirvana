"use client";
import { dummyData } from "@/lib/data";
import React from "react";
import Card from "@/components/Card";
import Messages from "@/components/Messages";

const page = () => {
  return (
    <div>
      <div className="flex  flex-col xl:flex-row   lg:mx-20  mx-10">
        <div className=" xl:w-[70%] flex flex-col justify-between px-5">
          <div className="flex justify-between ">
            <p className="text-3xl">User information</p>{" "}
            <button className="bg-yellow-300 text-black p-3">
              Update profile
            </button>
          </div>

          <div className=" flex flex-col gap-3">
            <div className="flex items-center gap-5">
              {" "}
              <p>Avatar:</p>{" "}
              <img src="/avatar.jpg" className="rounded-full size-10 " alt="" />{" "}
            </div>{" "}
            <div className="flex items-center gap-5">
              {" "}
              <p>Username:</p> <p className="font-semibold">John Doe</p>
            </div>{" "}
            <div className="flex items-center gap-5">
              {" "}
              <p>Email:</p> <p className="font-semibold">JohnDoe@gmail.com</p>
            </div>
          </div>
          <div className="mt-10">
            <div className="flex justify-between ">
              <p className="text-3xl">My List</p>{" "}
              <button className="bg-yellow-300 text-black p-3">
                Create new post
              </button>
            </div>
            {dummyData.map((item, index) => {
              return <Card key={item.id} item={item} />;
            })}
          </div>
        </div>
        <div className="xl:w-[30%] bg-gray-50 sticky top-0 h-fit p-5 rounded-md flex-col ">
        <Messages/>
        </div>
      </div>
    </div>
  );
};

export default page;
