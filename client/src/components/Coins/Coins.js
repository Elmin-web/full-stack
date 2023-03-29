import React, { useState } from "react";
import Coinsitem from "./Coinsitem";
import "./coinsitems.scss";
const Coins = () => {
  const [coins] = useState([
    {
      id: 1,
      title: "Canadian Beaver",
      country: "Canada",
      composition: "nickel",
      price: 40,
    },
    {
      id: 2,
      title: "Looney",
      country: "Canada",
      composition: "gold",
      price: 65,
    },
  ]);
  return (
    <div className="coin__items">
      {coins?.map((coin) => (
        <Coinsitem key={coin.id} {...coin} />
      ))}
    </div>
  );
};

export default Coins;
