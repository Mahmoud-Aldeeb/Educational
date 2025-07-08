import React from "react";
import { team } from "../../dummydata";
import "./team.css";
import Awrapper from "../about/Awrapper";
const TeamCard = () => {
  return (
    <>
      <section className="team padding">
        <div className="container grid">
          {team.map((val) => {
            return (
              <div className="items shadow">
                <div className="img">
                  <img src={val.cover} alt="" />
                  <div className="overlay">
                    <i className="fab fa-facebook-f icon"></i>
                    <i className="fab fa-instagram icon"></i>
                    <i className="fab fa-twitter icon"></i>
                    <i className="fab fa-youtube icon"></i>
                  </div>
                </div>
                <div className="details">
                  <h2>{val.name}</h2>
                  <p>{val.work}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <Awrapper />
    </>
  );
};

export default TeamCard;
