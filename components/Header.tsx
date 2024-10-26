"use client";
import Link from "next/link";
import React, { useRef, useState } from "react";
// import Nav from "@/components/Nav";
import { Button, Spinner } from "@nextui-org/react";
import { Popover, PopoverContent, PopoverTrigger } from "@nextui-org/react";
import MobileNav from "./MobileNav";
import { GiFoodTruck } from "react-icons/gi";
import { CiLogout, CiSearch } from "react-icons/ci";
import { FaShoppingBasket } from "react-icons/fa";
import { RxAvatar } from "react-icons/rx";
import { FaBagShopping } from "react-icons/fa6";
import { Toast } from "primereact/toast";
import Nav from "./Nav";
import { MdRealEstateAgent } from "react-icons/md";
import { PiBuildingApartmentThin } from "react-icons/pi";

const Header = () => {
  const toast = useRef<Toast>(null);

  const [isPopoverOpen, setPopoverOpen] = useState(false);

  const showSuccess = () => {
    toast.current?.show({
      severity: "success",
      summary: "Success",
      detail: "Successfully logged out",
      life: 3000,
    });
  };

  return (
    <header className="py-8 lg:mx-20  mx-10  sticky top-0 z-50 bg-white sm:max-w-[738px] md:max-w-[1024px] lg:max-w-[1366px] ">
      <Toast ref={toast} />
      <div className=" flex justify-between items-center">
        <Link href={"/"}>
          <h1 className="md:text-4xl text-2xl font-medium text-yellow-400">
            <span className="flex gap-2 items-center justify-center">
              {" "}
              <PiBuildingApartmentThin className="md:text-5xl text-4xl " />
              <span className="mt-4">Casa-Nirvana</span>
              <span className="text-accent">.</span>
            </span>
          </h1>
        </Link>
        <div className="hidden xl:flex gap-8 justify-center items-center">
          <Nav />
        </div>
        <div className="flex items-center ">
          <div className="hidden xl:flex  md:gap-7 gap-3 relative justify-center items-center">
            <button className="bg-gray-100 md:py-3 md:px-8 py-2 px-5  ">Sign in</button>
            <button className="bg-yellow-300 py-3 px-8 ">Sign up</button>

             </div>
          <div className="xl:hidden ml-3">
            <MobileNav />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
