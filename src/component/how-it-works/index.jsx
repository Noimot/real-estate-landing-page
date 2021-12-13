import React from "react";
import search from '../asset/images/search.svg';
import map from '../asset/images/global-map.svg';
import trackIcon from '../asset/images/track-icon.svg'
import "./style.css";

const HowItWorks = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>How it works</h1>
        <div className="row">
          <div className="column">
            <div className="box first-box">
              <img src={search} alt="" />
            </div>
            <h3>Research Suburbs</h3>
            <p>
              Wonder twenty hunted and put income set desire expect. Am cottage
              calling.
            </p>
          </div>
          <div className="column">
            <div className="box second-box">
              <img src={map} alt="" />
            </div>
            <h3>Instant Valuation</h3>
            <p>
              Conveying or northward offending admitting perfectly my. Colonel
              gravit and moonlight.
            </p>
          </div>
          <div className="column">
            <div className="box third-box">
              <img src={trackIcon} alt="" />
            </div>

            <h3>Track Property</h3>
            <p>
              Moderate children at of outweigh it. Unsatiable it considered
              invitation he travelling insensible.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default HowItWorks;
