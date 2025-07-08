import React from "react";
import Hero from "./hero/Hero";
import AboutCard from "../about/AboutCard";
import Testimonal from "./testimonal/Testimonal";
import Hblog from "./Hblog";
import HAbout from "./HAbout";
import Hprice from "./Hprice";
// import Footer from "../common/footer/Footer";

const Home = () => {
  return (
    <div>
      <Hero />
      <AboutCard />
      <HAbout />
      <Testimonal />
      <Hblog />
      <Hprice />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
