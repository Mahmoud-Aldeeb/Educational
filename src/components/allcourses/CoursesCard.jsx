import React from "react";
import { coursesCard } from "../../dummydata";
import "./courses.css";
const CoursesCard = () => {
  return (
    <>
      <section className="coursesCard">
        <div className="container grid2">
          {coursesCard.map((val) => {
            return (
              <div className="items">
                <div className="content flex">
                  <div className="left">
                    <div className="img">
                      <img src={val.cover} alt="" />
                    </div>
                  </div>
                  <div className="text">
                    <h1>{val.coursesName}</h1>
                    <div className="rate">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="far fa-star"></i>
                      <label htmlFor="">{val.totalRating}</label>
                    </div>
                    <div className="details">
                      {/* this beacause we are fetch the nested api */}
                      {val.courTeacher.map((details) => {
                        return (
                          <>
                            <div className="box">
                              <div className="dimg">
                                <img src={details.dcover} alt="" />
                              </div>
                              <div className="para">
                                <h4>{details.name}</h4>
                              </div>
                            </div>
                            <span>{details.totalTime}</span>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
                <div className="price">
                  <h3>
                    {val.priceAll} / {val.pricePer}
                  </h3>
                </div>
                <button className="outline-btn">ENROLL NOW !</button>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default CoursesCard;
