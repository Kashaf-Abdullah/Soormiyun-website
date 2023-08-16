import React, { useEffect } from "react";
import "./checkmakercontainer.css";
import Aos from "aos";
import "aos/dist/aos.css";
import cm from "../../img/checkmarker.png";
const CheckmakerContainer = (props) => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="right-section" data-aos="fade-left">
      <div className="right-section-txt">
        <span>{props.header}</span>
        <span>{props.heading}</span>
        <span>{props.text}</span>
        <span class="checkmark">
          <div className="checkmark-txt">
            <img src={cm} />
            {props.cm1}
          </div>
          <div className="checkmark-txt">
            <img src={cm} />
            {props.cm2}
          </div>
          <div className="checkmark-txt">
            <img src={cm} />
            {props.cm3}
          </div>
          <div className="checkmark-txt">
            <img src={cm} />
            {props.cm4}
          </div>
        </span>
      </div>
    </div>
  );
};

export default CheckmakerContainer;
