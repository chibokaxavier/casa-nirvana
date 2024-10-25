"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { Sidebar } from "primereact/sidebar";
import { useState } from "react";

const MobileNav = () => {
  const links = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About",
      path: "/services",
    },

    {
      name: "Agents",
      path: "/resume",
    },
    {
      name: "Contact",
      path: "/contact",
    },  {
      name: "Sign in",
      path: "/contact",
    },  {
      name: "Sign up",
      path: "/contact",
    },
  ];
  const pathName = usePathname();
  const [visible, setVisible] = useState(false);
  return (
    <>
      <CiMenuFries onClick={() => setVisible(true)} className="text-[30px] lg:text-[40px] md:text-[35px]" />
      <Sidebar
        visible={visible}
        position="right"
        color="black"
        className="bg-black text-white"
        onHide={() => setVisible(false)}
      >
        <div className="mt-32 mb-40 text-center text-2xl">
          <Link href={"/"}>
            <h1 className="tetx-4xl font-semibold">
              Casa-Nirvana<span className="text-accent">.</span>
            </h1>
          </Link>
        </div>
        <nav className="flex flex-col space-y-8 items-center justify-center">
          {links.map((link, index) => {
            return (
              <Link
                href={link.path}
                key={index}
                className={`${
                  link.path === pathName &&
                  "text-accent border-b-2 border-accent"
                } text-xl capitalize hover:text-accent transition-all `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      </Sidebar>
    </>
  );
};

export default MobileNav;
