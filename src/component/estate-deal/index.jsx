import React from "react";
import house1 from '../asset/images/house1.svg'
import house2 from "../asset/images/house2.svg";
import house3 from "../asset/images/house3.svg";
import "./style.css";

const EstateDeal = () => {
  return (
    <div className="property-display-container">
      <div className="flex">
        <div>
          <h1>Best Real Estate Deals</h1>
          <p>
            Colonel gravity get thought fat smiling add but. Wonder twenty
            hunted and put income set desire expect.
          </p>
        </div>
        <button>View All Property</button>
      </div>
      <section className="property-section">
        <div>
          <ul>
            <li>Residentail Property</li>
            <li>Commercial Property</li>
            <li>Agriculture Property</li>
            <li>Industrial property</li>
          </ul>
        </div>
        <div className="flex property-section">
          <div className="image-container">
            <img src={house1} alt="" />
          </div>
          <div className="image-container">
            <img src={house2} alt="" />
          </div>
          <div className="image-container">
            <img src={house3} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EstateDeal;
