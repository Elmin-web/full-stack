import React from "react";
import Coins from "../Coins/Coins";
import Formcoins from "../Formcoins/Formcoins";
import "./homepage.scss";
const Homepage = () => {
  return (
    <div className="homepage">
      <Formcoins />
      <Coins />
    </div>
  );
};

export default Homepage;
