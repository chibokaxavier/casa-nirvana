"use client";
import { dummyData } from "@/lib/data";
import React, { useState } from "react";
import { BsTools } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaBath, FaMoneyBillWave, FaSchool } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { IoBedOutline } from "react-icons/io5";
import { LuSquareSlash } from "react-icons/lu";
import { MdOutlinePets } from "react-icons/md";
import { TbBusStop } from "react-icons/tb";

const page = ({ params }: { params: { id: string } }) => {
  const prod = dummyData.find((item) => item.id.toLocaleString() === params.id);

  const [selectedImageIndex, setSelectedImageIndex] = useState<any>(null);

  const openImageModal = (index: any) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = () => {
    if (prod?.img && prod.img.length > 0) {
      setSelectedImageIndex(
        (prevIndex: any) => (prevIndex + 1) % prod.img.length
      );
    }
  };

  const showPreviousImage = () => {
    if (prod?.img && prod.img.length > 0) {
      setSelectedImageIndex(
        (prevIndex: any) => (prevIndex - 1 + prod.img.length) % prod.img.length
      );
    }
  };

  return (
    <div>
      <div className="flex sm:max-w-[738px] md:max-w-[1024px] lg:max-w-[1366px]  h-[100vh]  lg:mx-20  mx-10">
        <div className=" w-[70%] flex flex-col justify-between px-5">
          <div className="flex justify-between ">
            <div className="w-[600px] h-[400px] ">
              <img
                src={prod?.img[0]}
                alt=""
                className=" rounded-2xl "
                onClick={() => openImageModal(0)}
              />
            </div>
            <div className=" w-[300px]">
              {prod?.img.slice(1).map((img, index) => {
                return (
                  <img
                    src={img}
                    alt=""
                    className="rounded-lg mb-5"
                    key={index}
                    onClick={() => openImageModal(index + 1)}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-col mt-10">
            <div className="flex  items-center justify-between">
              <div className=" flex flex-col gap-5 ">
                <p className="text-2xl font-semibold"> {prod?.title}</p>

                <p className="flex items-center ">
                  <CiLocationOn /> <span>{prod?.address}</span>
                </p>
                <p className="bg-yellow-200 text-black rounded-md p-1 w-fit">
                  $ {prod?.price}
                </p>
              </div>
              <div className="bg-yellow-100 flex flex-col justify-center items-center size-[100px] rounded-md ">
                <img
                  src="/avatar.jpg"
                  alt=""
                  className="size-12 rounded-full"
                />
                <p>Jon doe</p>
              </div>
            </div>
            {selectedImageIndex !== null && (
              <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                <div className="relative">
                  <button
                    onClick={closeModal}
                    className="absolute top-2 right-2 text-white text-2xl"
                  >
                    &times;
                  </button>
                  <button
                    onClick={showPreviousImage}
                    className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                  >
                    &#9664;
                  </button>
                  <img
                    src={prod?.img[selectedImageIndex]}
                    alt=""
                    className="rounded-xl max-w-full max-h-screen"
                  />
                  <button
                    onClick={showNextImage}
                    className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-3xl"
                  >
                    &#9654;
                  </button>
                </div>
              </div>
            )}
            <div className="mt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              exercitationem architecto eos placeat veniam ab molestias hic
              facere, aut reprehenderit, quaerat fugit recusandae temporibus
              dolor. Velit officia pariatur nostrum voluptatem? Lorem ipsum
              dolor, sit amet consectetur adipisicing elit. Distinctio totam
              facilis velit, sint doloribus doloremque incidunt ratione fugiat
              quisquam explicabo quas quaerat, quasi, praesentium labore magnam
              adipisci dolorem ad quo!
            </div>
          </div>
        </div>

        <div className="w-[30%] bg-yellow-50 p-5 rounded-md flex-col">
          <div className="flex flex-col">
            <p className="font-semibold text-lg">General</p>
            <div className="bg-white rounded-md p-2 h-fit flex flex-col gap-5">
              <div className="flex  items-center">
                <BsTools className="text-xl text-yellow-600 mr-3" />{" "}
                <div className="flex flex-col gap-0">
                  <span className="text-lg">Utilities</span>
                  <span className="text-sm">Renter is responsible</span>
                </div>
              </div>
              <div className="flex  items-center">
                <MdOutlinePets className="text-xl text-yellow-600 mr-3" />
                <div className="flex flex-col gap-0">
                  <span className="text-lg">Pet Policies</span>
                  <span className="text-sm">Pets are allowed</span>
                </div>
              </div>{" "}
              <div className="flex  items-center">
                <FaMoneyBillWave className="text-xl text-yellow-600 mr-3" />
                <div className="flex flex-col gap-0">
                  <span className="text-lg">Property fees</span>
                  <span className="text-sm">Must have 3X the rent </span>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col pt-5">
            <p className="font-semibold text-lg">Sizes</p>
            <div className="flex justify-between">
              {" "}
              <div className=" bg-white p-2 rounded-md flex items-center ">
                <LuSquareSlash className="mr-1" /> 80 sqft
              </div>{" "}
              <div className=" bg-white p-2 rounded-md flex items-center ">
                <IoBedOutline className="mr-1" /> {prod?.bedrooms} Bed(s)
              </div>{" "}
              <div className=" bg-white p-2 rounded-md flex items-center ">
                <FaBath className="mr-1" /> {prod?.bathrooms} Bathroom(s)
              </div>
            </div>
          </div>{" "}
          <div className="flex flex-col pt-5">
            <p className="font-semibold text-lg">Nearby places</p>
            <div className="flex bg-white justify-between">
              {" "}
              <div className=" bg-white p-2 rounded-md flex items-center ">
                <FaSchool className="mr-3 text-lg" />{" "}
                <p className="">
                  <p className="font-semibold">School</p>
                  <p>250m away</p>
                </p>
              </div>{" "}
               <div className=" bg-white p-2 rounded-md flex items-center ">
                <TbBusStop className="mr-3 text-lg" />{" "}
                <p className="">
                  <p className="font-semibold">Bus stop</p>
                  <p>100m away</p>
                </p>
              </div>{" "}
              <div className=" bg-white p-2 rounded-md flex items-center ">
                <FaBowlFood className="mr-3 text-lg" />{" "}
                <p className="">
                  <p className="font-semibold ">Bus stop</p>
                  <p className=''>150m away</p>
                </p>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
