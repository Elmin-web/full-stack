import React, { useState } from "react";
import CoincategoryItems from "./CoincategoryItems";
import img from "../Formcoins/FormSvg/cent.png";
import "./coincategories.scss";
const Coincategory = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Bullion coins",
      img,
    },
    {
      id: 2,
      name: "Exclusive coins",
      img,
    },
    {
      id: 3,
      name: "Commemorative coins",
      img,
    },
  ]);
  return (
    <div className="coin__categories">
      {data.map((item) => (
        <CoincategoryItems key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Coincategory;
