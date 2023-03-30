import React from "react";
import Coincategory from "../Coincategory/Coincategory";
import Formcoins from "../Formcoins/Formcoins";
import "./homepage.scss";
const Homepage = () => {
  return (
    <div className="homepage">
      <Formcoins />
      <Coincategory />
    </div>
  );
};

export default Homepage;
