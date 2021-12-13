import React, { useState } from "react";
import buildingImg from "../asset/images/building.svg";
import houseIcon from "../asset/images/house-icon.svg";
import "./index.css";

const PropertySearch = () => {
  const [searchProperty, setSearchProperty] = useState("");

  const handleChange = (e) => {
    setSearchProperty(e.target.value);
  };
  return (
    <div className="partners">
      <main>
        <aside className="left-aside">
          <div className="aside-text">
            <p>RESIDENTIAL AND OFFICE SPACES</p>
            <h1>Smart Living Style <br/>for smart people</h1>
            <p>
              Much did had call new drew that kept. Limits expect wonder <br/>law
              she. Now has you views woman noisy match money rooms.
            </p>
          </div>
          <div>
            <form action="">
              <img src={houseIcon} alt="small house icon" />
              <div>
                <input
                  type="text"
                  value={searchProperty}
                  placeholder="Enter Zip code to search properties"
                  onChange={handleChange}
                />
              </div>
              <div className="button">
                <button>Search Now!</button>
              </div>
            </form>
          </div>
        </aside>
        <aside className="left-aside">
          <div className="image-div">
            <img src={buildingImg} alt="photograph of a tall building" />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default PropertySearch;
