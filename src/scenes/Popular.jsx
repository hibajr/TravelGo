import React from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import Slider from "../components/Slider";
import popularDestns from "../dummy Data/popular";
import useMediaQuery from "../hooks/useMediaQuery";
import PopularComp from "../components/Popular";

const Popular = () => {
  const isAboveMediaQuery = useMediaQuery("(min-width:768px)");
  return (
    <div>
      {isAboveMediaQuery ? (
        <div className="w-[100%] h-[77vh] mt-10">
          <div className="w-[75%] md:flex justify-between mx-auto">
            <div>
              <p className="text-2xl md:text-3xl font-bold">
                Popular Destinations
              </p>
              <p>
                From historical cities to natural spectacular, come see the best
                of the world!
              </p>
            </div>
            <div className="hidden md:block ">
              <button className="p-2 rounded-full bg-black/90 mr-2">
                <AiOutlineArrowLeft color="white" />
              </button>
              <button className="p-2 rounded-full bg-black/90">
                <AiOutlineArrowRight color="white" />
              </button>
            </div>
          </div>
          <Slider array={popularDestns} />
        </div>
      ) : (
        <div>
          <div className="mt-10 w-[90vw] mx-auto">
            <p className="text-2xl font-semibold ">Popular Destinations</p>
            <p className="text-sm">
              From historical cities to natural spectacular, come see the best
              of the world!
            </p>
          </div>
          <div className="mt-6">
            {popularDestns.map((destinantion) => {
              return (
                <PopularComp
                  city={destinantion.city}
                  number={destinantion.number}
                  place={destinantion.place}
                  image={destinantion.image}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Popular;
