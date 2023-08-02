import React from "react";
import specials from "../dummy Data/specials";
import SpecialOffer from "../components/SpecialOffer";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const SpecialOffers = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)");
  const amount = isAboveMediumScreens ? 0.3 : 0.1;
  const once = isAboveMediumScreens ? false : true;

  return (
    <div>
      <div>
        <div className="w-[100%] min-h-[90vh] md:h-[90vh]  mt-0 block">
          <p className="text-center mx-auto text-3xl font-bold">
            Special Offers
          </p>
          <p className="text-center mx-auto w-[90vw] md:w-">
            Enjoy lavish premium comforts with a remarkable discount!
          </p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: amount,
            }}
            variants={{
              hidden: {
                opacity: 0,
                y: 100,
              },
              visible: {
                opacity: 100,
                y: 0,
              },
            }}
            transition={{
              duration: 2,
            }}
            className="flex flex-col md:flex-row mt-4 w-[90vw] md:w-[75%] mx-auto gap-4 md:gap-0 md:justify-between items-center"
          >
            {specials?.map((item) => {
              return (
                <SpecialOffer
                  image={item.image}
                  status={item.status}
                  currentPrice={item.currentPrice}
                  beds={item.beds}
                  bath={item.bath}
                  WiFi={item.WiFi}
                  shuttle={item.shuttle}
                  location={item.location}
                  percentOff={item.percentOff}
                />
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SpecialOffers;
