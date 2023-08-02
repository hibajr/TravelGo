import React, { useEffect, useState } from "react";
import Home from "./scenes/Hero";
import Navbar from "./components/Navbar";
import Popular from "./scenes/Popular";
import SpecialOffers from "./scenes/SpecialOffers";
import Hiking from "./scenes/Hiking";
import Blog from "./scenes/Blog";
import Footer from "./scenes/Footer";

const App = () => {
  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  console.log(isTopOfPage);

  return (
    <div className="overflow-x-hidden">
      <Navbar isTopOfPage={isTopOfPage} />
      <Home />
      <Popular />
      <SpecialOffers />
      <Hiking />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
