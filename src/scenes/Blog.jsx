import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import blogArticles from "../dummy Data/blogs";
import { motion } from "framer-motion";
import useMediaQuery from "../hooks/useMediaQuery";

const Article = ({ image, description, title }) => {
  return (
    <div>
      <div className="flex flex-col md:flex-row gap-2 items-center rounded-lg p-1">
        <div className="w-[85vw] md:min-w-[50%] h-[56] md:h-[200px] rounded-lg border shadow-lg border-gray-300 p-1">
          <img src={image} alt="" className="w-full h-full rounded-lg" />
        </div>
        <div className="w-[82vw] mt-3 md:mt-0 md:min-w-[50%]">
          <p className="font-bold text-lg">{title}</p>
          <p className="break-normal mt-3 md:mt-0 text-sm w-full">
            {description}
          </p>
          <p className="flex mt-3 md:mt-0 items-center gap-2 text-orange-500">
            <span>Read more</span>
            <span>
              <AiOutlineArrowRight />
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

const Blog = () => {
  const isAboveMediumScreens = useMediaQuery("(min-width:768px)");
  const once = isAboveMediumScreens ? false : true;
  return (
    <div>
      <div className="min-h-[100vh] md:h-[100vh] mt-16  md:mt-16">
        <p className="text-center text-2xl font-bold">Our best blog?</p>
        <p className="mt-2 md:mt-0 text-center">
          An insight to the incredible experience of the world
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            amount: 0.2,
            once,
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
          className="grid grid-cols-1 md:grid-cols-2 w-[75%] gap-y-8 md:gap-2 mx-auto mt-4 md:mt-10 "
        >
          {blogArticles.map((article) => {
            return (
              <div>
                <Article
                  image={article.image}
                  description={article.description}
                  title={article.title}
                />
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
