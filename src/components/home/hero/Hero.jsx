import React from "react";
import "./hero.css";
import Heading from "../../common/heading/Heading";
const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="row">
            <Heading
              subtitle="WELCOME TO ACADEMIA"
              title="BEST ONLINE EDUCATION EXPERIENCE"
            />
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia .
            </p>
            <div className="button">
              <button className="primary-btn">
                GET STARTED NOW <i className="fas fa-long-arrow-alt-right"></i>
              </button>
              <button>
                VIEW COURSES <i className="fas fa-long-arrow-alt-right"></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  );
};

export default Hero;
