import React from "react";
import Heading from "../common/heading/Heading";
import PriceCard from "../pricing/PriceCard";

const Hprice = () => {
  return (
    <>
      <Heading subtitle="OUR PRICING" title="Pricing & Packages" />
      <div className="container price grid">
        <PriceCard />
      </div>
    </>
  );
};

export default Hprice;
