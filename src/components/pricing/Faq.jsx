import React, { useState } from "react";
import Heading from "../common/heading/Heading";
import { faq } from "../../dummydata";
const Faq = () => {
  const [click, setClick] = useState(false);

  const toggle = (index) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <>
      <Heading subtitle="FAQ" title="Frequesntly Ask Question" />
      <section className="faq">
        <div className="container">
          {faq.map((val, index) => {
            return (
              <div className="box">
                <button
                  className="accordion"
                  onClick={() => toggle(index)}
                  key={index}
                >
                  <h2>{val.title}</h2>
                  <span>
                    {click === index ? (
                      <i className="fa fa-chevron-down"></i>
                    ) : (
                      <i className="fa fa-chevron-right"></i>
                    )}
                  </span>
                </button>
                {click === index ? (
                  <div className="text">
                    <p>{val.desc}</p>
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Faq;
