import React from "react";
import TopNav from "../components/TopNav.js";
import Footer from "../components/Footer";
import Dish from "../components/Dish.js";
// import Slide from "../components/Slide.js";
import Bslide from "../components/Bslide.js";

const Home = () => {
  return (
    <div>
      <TopNav />
      <Bslide />
      <Dish />
      <Footer />
    </div>
  );
};

export default Home;
