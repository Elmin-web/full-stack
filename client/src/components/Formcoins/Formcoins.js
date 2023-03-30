import React, { useState } from "react";
import AdvancedFilter from "./AdvancedFilter/AdvancedFilter";
import "./styles/formcoins.scss";
import arrowup from "./FormSvg/arrowup.svg";
import { useCollapse } from "react-collapsed";
const Formcoins = () => {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });
  const handleSubmit = (e) => {
    e.preventDefault();
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
          {...getToggleProps({
            onClick: () => setExpanded((prevExpanded) => !prevExpanded),
          })}
        >
          <span>advanced filter</span>
          <img
            src={arrowup}
            alt="arrow"
            className={isExpanded ? "expanded" : "collapsed"}
          />
        </div>
        <div {...getCollapseProps()}>
          <AdvancedFilter />
        </div>
      </div>
    </form>
  );
};

export default Formcoins;
