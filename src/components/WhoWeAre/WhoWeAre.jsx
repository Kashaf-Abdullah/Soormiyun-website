import React, { useEffect } from "react";
import "./whoweare.css";
import frame from "../../img/img1.jpg";
import CheckmakerContainer from "../WhoWeAre/WhoWeAre";

const WhoWeAre = () => {

  return (
    <div className="Whoweare" id="whoweare-section">
      <div className="whoweare-section container">
        <div className="left-section" >
          <img src={frame}></img>
        </div>
        <CheckmakerContainer
          header="Who are we?"
          heading="We're a Non-Profit Charity & Welfare Organziation"
          text="Join us and make your life more satisfactory by being a part of a community that is making every step toward betterment of the nation’s youth"
          cm1="Support youngster to get educated"
          cm2="Promote technical education nationwide"
          cm3="Help those in need"
          cm4="Help us reach more people"
        ></CheckmakerContainer>
      </div>
    </div>
  );
};

export default WhoWeAre;
