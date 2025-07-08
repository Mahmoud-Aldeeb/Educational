import React from "react";
import "../blog/blog.css";
import Heading from "../common/heading/Heading";
import { blog } from "../../dummydata";
const Hblog = () => {
  return (
    <>
      <section className="blog">
        <div className="container">
          <Heading subtitle="OUR BLOG" title="Recent From Blog" />
          <div className="grid2">
            {blog.slice(0, 3).map((val) => {
              return (
                <div className="items shadow">
                  <div className="img">
                    <img src={val.cover} alt="" />
                  </div>
                  <div className="text">
                    <div className="admin flexSB">
                      <span>
                        <i className="far fa-user"></i>
                        <label>{val.type}</label>
                      </span>
                      <span>
                        <i class="fa fa-calendar-alt"></i>
                        <label>{val.date}</label>
                      </span>
                      <span>
                        <i class="fa fa-comments"></i>
                        <label>{val.com}</label>
                      </span>
                    </div>
                    <h1>{val.title}</h1>
                    <p>{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hblog;
