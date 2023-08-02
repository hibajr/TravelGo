import React, { useEffect, useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import logo from "../assets/Logo/png/logo-no-background.png";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Navbar = ({ isTopOfPage }) => {
  const [showNav, setShowNav] = useState(false);
  const isAboveMediumScreen = useMediaQuery("(min-width:768px)");
  const navBg = isTopOfPage ? "" : "bg-black";

  const handleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <div className={`${navBg}`}>
      {isAboveMediumScreen ? (
        <div>
          <div
            className={` w-[100vw] ${navBg}  text-md h-16 flex justify-between p-4 py-8 items-center text-white fixed z-50 `}
          >
            <div className="ml-4 h-12 w-32">
              <img src={logo} alt="" className="w-full h-full" />
            </div>
            <div className="flex gap-7 items-center mr-4">
              <p>Home</p>
              <p>Products</p>
              <p>Resources</p>
              <p>Contact</p>
              <p>Blog</p>
              <p className="px-3 py-1 border hover:bg-orange-600 border-orange-600 rounded-l-full rounded-r-full">
                Login
              </p>
              <p className="px-3 py-1 border border-orange-600 bg-orange-600 rounded-l-full rounded-r-full hover:bg-opacity-80">
                Sign Up
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div
            className={`flex justify-between items-center fixed w-[100vw] ${navBg} h-16 text-white z-50 
            left-1/2 transform -translate-x-1/2`}
          >
            <div className="mx-4 my-2 py-2 h-11 w-20">
              <img src={logo} alt="" className="h-full w-full" />
            </div>
            <div className="mx-4 my-2 py-2" onClick={handleNav}>
              <AiOutlineMenu color="white" size={24} />
            </div>
          </div>
          <div
            className={`fixed z-50 h-[50vh] w-[100vw] bg-gray-300 top-0
          ${showNav ? "left-0" : "left-[-110%]"} transition-all`}
          >
            <div>
              <button
                className="p-3 rounded-full bg-orange-400/90 ml-[80%] mt-2"
                onClick={handleNav}
              >
                <RxCross2 size={28} color="white" />
              </button>
            </div>
            <div className="text-center flex flex-col gap-3 text-lg font-semibold mt-3">
              <p>Home</p>
              <p>Product</p>
              <p>Resources</p>
              <p>Contact</p>
              <p>Blog</p>
              <p className="px-4 py-1 border border-orange-500 rounded-l-full rounded-r-full w-[25vw] mx-auto">
                Login
              </p>
              <p className="px-4 py-1 border bg-orange-500 border-orange-500 rounded-l-full rounded-r-full mx-auto">
                Sign Up
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
