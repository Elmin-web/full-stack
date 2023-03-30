import React from "react";
import { Link } from "react-router-dom";
const CoincategoryItems = ({ id, name, img }) => {
  return (
    <div className="coin__categories-box">
      <div className="coin__categories-box-title">
        <h4>{name}</h4>
      </div>
      <div className="coin__categories-box-show-all">
        <Link to="/homepage">show all &gt;</Link>
      </div>
      <div className="coin__categories-box-img">
        <img src={img} alt="" />
      </div>
    </div>
  );
};

export default CoincategoryItems;
