import React from "react";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const Slider = ({ array }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.5, once: true }}
      variants={{
        hidden: { opacity: 0, y: 70 },
        visible: { opacity: 1, y: 0 },
      }}
      transition={{
        duration: 1.2,
      }}
    >
      <div className="md:flex flex-col md:flex-row md:justify-between w-[80%] mx-auto mt-6">
        {array.map((item) => {
          return (
            <div className="group">
              <div className="h-[250px] w-[90vw] md:w-[200px] border shadow-lg  rounded-2xl">
                <div className="w-full h-[60%] rounded-t-2xl relative">
                  <img
                    className="w-full h-full rounded-t-2xl"
                    src={item.image}
                    alt=""
                  />
                  <div className="bg-black/40 h-0  w-full absolute bottom-0 group-hover:h-full transition-all duration-150 rounded-2xl"></div>

                  <div className="text-white absolute left-[10%] top-[20%] hidden group-hover:block">
                    <p className="font-bold text-lg">{item.city},</p>
                    <p className=" text-sm">{item.place}</p>
                  </div>
                </div>

                <div className="flex gap-2 items-center mt-3 pl-2">
                  <span className="text-2xl font-semibold">0{item.number}</span>{" "}
                  <span>
                    <div className="w-9 h-1 bg-orange-500 rounded-md"></div>
                  </span>
                </div>

                <div>
                  <p className="pl-2 mt-2 font-semibold">{item.place}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Slider;
