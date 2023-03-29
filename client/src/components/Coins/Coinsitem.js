import React from "react";
import cent from "../Formcoins/FormSvg/cent.png";
const Coinsitem = ({ title, country, composition, price, img }) => {
  return (
    <div className="coin__items-container">
      <div className="coin__items-container-img">
        <img src={cent} alt="coin" />
      </div>
      <div className="coin__items-container-title">
        <h3>{title}</h3>
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus error
          reprehenderit
        </p>
      </div>
    </div>
  );
};

export default Coinsitem;
