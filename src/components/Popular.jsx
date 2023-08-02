import React from "react";

const Popular = ({ city, place, image, number }) => {
  return (
    <div>
      <div>
        <div className="group">
          <div className="h-[42vh] mb-6 w-[90vw] md:w-[200px] border shadow-lg  rounded-2xl mx-auto">
            <div className="w-full h-[60%] rounded-t-2xl relative">
              <img className="w-full h-full rounded-t-2xl" src={image} alt="" />
              <div className="bg-black/40 h-0  w-full absolute bottom-0 group-hover:h-full transition-all duration-150 rounded-2xl"></div>

              <div className="text-white absolute left-[10%] top-[20%] hidden group-hover:block">
                <p className="font-bold text-lg">{city},</p>
                <p className=" text-sm">{place}</p>
              </div>
            </div>

            <div className="flex gap-2 items-center mt-3 pl-2">
              <span className="text-2xl font-semibold">0{number}</span>{" "}
              <span>
                <div className="w-9 h-1 bg-orange-500 rounded-md"></div>
              </span>
            </div>

            <div>
              <p className="pl-2 mt-2 font-semibold">{place}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
