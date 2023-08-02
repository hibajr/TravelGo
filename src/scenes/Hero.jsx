import React from "react";
import gym from "../assets/gym.jpg";
import useMediaQuery from "../hooks/useMediaQuery";
import bahamas from "../assets/bahamas.mp4";

const Hero = () => {
  const isAboveMediumScreen = useMediaQuery("(min-width:768px)");
  return (
    <div>
      <div className="h-[90vh]">
        <div className="w-[100vw] h-[80%] relative">
          <video
            autoPlay={true}
            loop
            muted
            controls={false}
            src={bahamas}
            className="absolute left-0 top-0 object-cover md:object-cover h-full w-full"
            alt=""
          />
          <div className="bg-black/40 h-full w-full absolute"></div>
          <div className="absolute z-40  left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[40vh]">
            <p className="text-white z-40  text-center text-3xl md:text-5xl font-bold ">
              Plan Your Trip With TravelGo
            </p>
            <p className=" z-40 text-center text-white mt-7 text-lg font-semibold">
              Travel your favorite city while respecting the <br />
              environment
            </p>
          </div>
          <button
            className="absolute top-[70%] left-1/2 right-1/2 -translate-x-1/2 z-40 mx-auto w-[40vw] 
            md:w-[15vw] p-2 rounded-r-full rounded-l-full  text-white text-sm font-semibold
            bg-orange-500 hover:bg-orange-500/90"
          >
            Explore Now
          </button>
        </div>
        <div
          className="bg-white md:h-28 w-[70%] shadow-2xl rounded-xl absolute top-[58%] md:top-[59%] 
        left-1/2 transform -translate-x-1/2 border"
        >
          <form
            action=""
            className="p-3 w-[85vw] md:w-full flex md:flex-row flex-col md:gap-4  md:items-center "
          >
            <div>
              <label htmlFor="location" className="text-gray-600">
                Location
              </label>
              <input
                type="text"
                id="location"
                className="block px-2 py-1 rounded-md bg-gray-300"
                placeholder="Dream Destination"
              />
            </div>
            <div>
              <label htmlFor="distance" className="text-gray-600">
                Distance
              </label>
              <input
                type="text"
                id="distance"
                className="block px-2 py-1 rounded-md bg-gray-300"
                placeholder="In kilometers"
              />
            </div>
            <div>
              <label htmlFor="price range" className="text-gray-600">
                Price Range
              </label>
              <input
                type="text"
                id="price range"
                className="block px-2 py-1 rounded-md bg-gray-300"
                placeholder="eg. $150-$200"
              />
            </div>
            <div>
              <button className="px-20 py-1 rounded-l-full rounded-r-full bg-orange-500 mt-5 text-white">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Hero;
