import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { BsWifi2 } from "react-icons/bs";
import { BiSolidBed } from "react-icons/bi";
import { MdBathtub } from "react-icons/md";
import { FaShuttleVan } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { AiOutlineArrowRight } from "react-icons/ai";

const SpecialOffer = ({
  image,
  currentPrice,
  status,
  beds,
  bath,
  WiFi,
  shuttle,
  location,
  percentOff,
}) => {
  return (
    <div>
      <div>
        <div className=" h-[80vh] md:h-[400px] w-[90vw] md:w-[330px] p-2 border shadow-lg rounded-lg">
          <div className="h-[50%] md:h-[45%] md:w-[100%] rounded-lg relative">
            <img className="w-full h-full rounded-lg" src={image} alt="" />
            <div className="absolute left-[80%] top-[4%] text-white text-xs bg-orange-500 p-1 rounded-lg opacity-90">
              {percentOff}% Off
            </div>
          </div>
          <div>
            <p className="flex w-[90%] justify-between mt-4 font-bold">
              ${currentPrice}
              <span className="text-xs text-red-500 p-1 bg-gray-300 rounded-lg font-semibold">
                {status}
              </span>
            </p>
            <div className="grid grid-cols-3 gap-1 mt-3">
              <div className="flex items-center gap-2 bg-gray-300 px-2 py-1 rounded-lg">
                <BiSolidBed size={14} /> {beds} Beds
              </div>
              <div className="flex gap-1 items-center bg-gray-300 px-2 py-1 rounded-lg">
                <MdBathtub size={14} /> {bath} Bath
              </div>
              <div className="flex gap-1 items-center bg-gray-300 px-2 py-1 rounded-lg">
                <BsWifi2 size={20} />
                {WiFi}
              </div>
              <div className="flex gap-1 items-center bg-gray-300 px-2 py-1 rounded-lg">
                <FaShuttleVan /> {shuttle}
              </div>
            </div>
            <p className="mt-3 flex gap-1 items-center">
              <FaLocationDot />
              {location}
            </p>
            <div className="flex justify-center">
              <button className="py-1 w-[80%] bg-orange-500 rounded-l-full rounded-r-full text-white mt-3 flex items-center gap-2 justify-center">
                View Details
                <AiOutlineArrowRight size={18} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffer;
