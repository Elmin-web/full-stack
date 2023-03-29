import React from "react";

const AdvancedFilterItems = ({ title }) => {
  return (
    <>
      <h5>{title}</h5>
      <label>
        <span>from</span>
        <input type="text" className="from-input" />
      </label>
      <label>
        <span>to</span>
        <input type="text" />
      </label>
    </>
  );
};

export default AdvancedFilterItems;
