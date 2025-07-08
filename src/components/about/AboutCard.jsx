import React from "react";
import Heading from "../common/heading/Heading";
import { homeAbout } from "../../dummydata";
import Awrapper from "./Awrapper";
import "./about.css";

const AboutCard = () => {
  return (
    <>
      <section className="aboutHome">
        <div className="container flexSB">
          <div className="left row">
            <img src="./images/about.webp" alt="" />
          </div>
          <div className="right row">
            <Heading
              subtitle="LEARN ANYTHING"
              title="Benefits About Online Learning Expertise"
            />
            <div className="items">
              {homeAbout.map((card) => (
                <div className="item flexSB">
                  <div className="img">
                    <img src={card.cover} alt="" />
                  </div>
                  <div className="text">
                    <h2>{card.title}</h2>
                    <p>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default AboutCard;
