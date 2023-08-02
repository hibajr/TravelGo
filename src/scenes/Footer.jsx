import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import logo from "../assets/Logo/png/logo-no-background.png";
import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoTwitter,
} from "react-icons/bi";

const Footer = () => {
  return (
    <div className="w-[100%] mt-10 md:mt-0 bg-gray-200">
      <div
        className="flex flex-col gap-4 md:gap-0 md:flex-row md:justify-around w-[52vw] items-center md:items-start
      md:w-[75%] mx-auto md:m-auto min-h-[30vh] md:h-[30vh] pt-8"
      >
        <div>
          <div className="h-8 w-20">
            <img src={logo} alt="" className="h-full w-full" />
          </div>
          <div className="flex mt-1 gap-1">
            <BiLogoFacebook />
            <BiLogoInstagramAlt />
            <BiLogoTwitter />
          </div>
        </div>
        <div className="text-center">
          <p className="my-3 md:my-0 font-bold text-lg">Information</p>
          <p className="my-3 md:my-0 text-md">Home</p>
          <p className="my-3 md:my-0 text-md">Explore</p>
          <p className="my-3 md:my-0 text-md">Travel</p>
          <p className="my-3 md:my-0 text-md">Blog</p>
        </div>
        <div className="text-center">
          <p className="my-3 md:my-0 font-bold text-lg">Helpful Links</p>
          <p className="my-3 md:my-0 text-md">Destination</p>
          <p className="my-3 md:my-0 text-md">Support</p>
          <p className="my-3 md:my-0 text-md">Travel Conditions</p>
          <p className="my-3 md:my-0 text-md">Privacy</p>
        </div>
        <div className="hidden md:block">
          <p className="font-bold">Contact</p>
          <p className="text-sm">+255 788 767 006</p>
          <p className="text-sm">hibaabraham477@gmail.com</p>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Footer;
