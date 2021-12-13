import React from "react";
import airbnbLogo from "../asset/images/airbnb.svg";
import buzzLogo from "../asset/images/buzz.svg";
import chaseLogo from "../asset/images/chase.svg";
import guccLogo from "../asset/images/gucc.svg";
import microsoft from "../asset/images/microsoft.svg";
import uber from "../asset/images/uber.svg";
import './style.css'

const Partners = () => {
  return (
    <div className="partners-list">
      <p>Our amazing partners</p>
      <div>
        <img src={buzzLogo} alt="" />
        <img src={chaseLogo} alt="" />
        <img src={microsoft} alt="" />
        <img src={guccLogo} alt="" />
        <img src={airbnbLogo} alt="" />
        <img src={uber} alt="" />
      </div>
    </div>
  );
};

export default Partners;