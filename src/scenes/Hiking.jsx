import React from "react";
import gym from "../assets/gym.jpg";
import peoplehiking from "../assets/Hiking/peoplehiking.jpg";
import mountain from "../assets/Hiking/mountain.jpg";
import adventure from "../assets/Hiking/adventure.jpg";
import nightcity from "../assets/Hiking/nightcity.mp4";
import customer from "../assets/Hiking/customer.jpg";
import useMediaQuery from "../hooks/useMediaQuery";
import oslo from "../assets/Hiking/oslo.mp4";

const Reason = ({ image, explanation, heading }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[110px] w-[110px] rounded-full">
        <img src={image} alt="" className="h-full w-full rounded-full" />
      </div>
      <p className="text-xl font-semibold text-center my-2">{heading}</p>
      <p className="break-normal text-center">{explanation}</p>
    </div>
  );
};

const Hiking = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)");
  return (
    <div>
      <div className=" mt-16 md:mt-16 block md:h-[120vh]">
        <div>
          <p className="text-xl font-bold text-center">Why Hiking ?</p>
          <div className="flex flex-col md:flex-row gap-5 md:gap- md:justify-between w-[75%] mx-auto mt-12">
            <Reason
              image={mountain}
              explanation={
                "Research shows that a chance to beak away from normal rythms reduces stress and improves health and wellbeing"
              }
              heading={"110+ Mountains"}
            />
            <Reason
              image={peoplehiking}
              explanation={
                " successfully guiding over 1000 intrepid souls on unforgettable hiking adventures across the globe."
              }
              heading={"1000+ Hikings"}
            />
            <Reason
              image={customer}
              explanation={
                " Our commitment to providing a seamless and memorable experience extends beyond the trails to our outstanding customer service"
              }
              heading={"2000+ Customers"}
            />
          </div>
          <div>
            {isAboveMediumScreens ? (
              <div className="h-[60vh] w-[75vw] mx-auto mt-6 relative">
                <img
                  src={adventure}
                  alt=""
                  className="h-full w-full object-cover"
                />
                <div className="bg-black/90 h-full w-full absolute top-0"></div>
                <div
                  className="absolute top-1/2 left-1/2 tranform -translate-x-1/2 -translate-y-1/2 
                flex justify-between items-center w-[80%] "
                >
                  <div className="text-white">
                    <p className="text-2xl font-bold">
                      Adventurous walks through the <br /> charming alleys and
                      captivating <br /> streets of beautiful cities
                    </p>
                    <p className="text-md mt-4">
                      Roaming beneath a tapestry of architecture, <br /> each
                      building stands as a testament to history, art,
                      <br /> and human ingenuity.
                    </p>
                  </div>
                  <div className="h-44 w-[43%] rounded-xl border border-white">
                    <video
                      autoPlay
                      muted
                      loop
                      src={oslo}
                      controls={false}
                      alt=""
                      className="h-full w-full rounded-xl object-cover"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div>
                  <div className="h-[80vh] w-[100vw] mx-auto relative">
                    <img
                      src={adventure}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                    <div className="absolute top-0 bg-black/90 h-full w-full"></div>
                    <div
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-[70%] w-[90%]
                    flex flex-col justify-between"
                    >
                      <div className="text-white">
                        <p className="text-2xl font-bold break-normal w-full">
                          Adventurous walks through the charming alleys and
                          captivating <br /> streets of beautiful cities
                        </p>
                        <p className="mt-5">
                          Roaming beneath a tapestry of architecture, each
                          building stands as a testament to history, art, and
                          human ingenuity.
                        </p>
                      </div>
                      <div className="h-[50%] border border-white rounded-xl mt-3">
                        <video
                          autoPlay
                          loop
                          muted
                          src={oslo}
                          alt=""
                          className="h-full w-full rounded-xl"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hiking;
