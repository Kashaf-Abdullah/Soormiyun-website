// mission

import React, { useEffect } from "react";
import "./mission.css";
import campaign from "../../img/4.png";
import CheckmakerContainer from "../CheckmakerContainer/CheckmakerContainer";
import Aos from "aos";

import "aos/dist/aos.css";
const Mission = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="mission" id="mission-section">
      <div className="mission-section container" data-aos="fade-right">
        <CheckmakerContainer
          header="Our Mission"
          heading="Empowering Sindhi Women for Equality and Success"
          text="Empowering Sindhi women through networking, advocacy, and mentorship to achieve gender equality, personal growth, and well-being"
          cm1="To empower Sindhi women through networking"
          cm2="Foster Collaboration and Networking"
          cm3="Promote Health and Well-being"
          cm4="Inspire and Mentor Future Leaders"
        ></CheckmakerContainer>

        <div className="mission-left-section">
          <img src={campaign}></img>
        </div>
      </div>
    </div>
  );
};

export default Mission;
