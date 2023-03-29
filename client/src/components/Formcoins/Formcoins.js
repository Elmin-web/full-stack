import React, { useState } from "react";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";
import "./styles/formcoins.scss";
import arrowup from "./FormSvg/arrowup.svg";
const Formcoins = () => {
  const [isOpened, setisOpened] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  const handleAdvancedOptions = () => {
    setisOpened(!isOpened);
  };
  return (
    <form className="input__field" onClick={handleSubmit}>
      <h1>
        List of the coins
        <p>Homepage — List of the coins</p>
      </h1>
      <div className="input__field__form">
        <p>Input field</p>
        <input
          className="input__field__form-input"
          type="text"
          placeholder="Search Coins..."
        />
        <button className="input__field__form-button" type="submit">
          Search
        </button>
        <div
          className="input__field__form-options"
          onClick={handleAdvancedOptions}
        >
          <span>advanced filter</span>
          <img src={arrowup} alt="arrow" />
        </div>
        {isOpened && <AdvancedFilter />}
      </div>
    </form>
  );
};

export default Formcoins;
