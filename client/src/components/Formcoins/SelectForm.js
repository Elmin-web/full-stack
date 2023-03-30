import React from "react";
const SelectForm = ({
  title,
  data,
  onChange,
  countryIndex,
  setcountryIndex,
  setmetalIndex,
  setqualityIndex,
}) => {
  const getData = (e) => {
    switch (onChange) {
      case "country":
        setcountryIndex(e.target.value);
        break;
      case "metal":
        setmetalIndex(e.target.value);
        break;
      case "quality":
        setqualityIndex(e.target.value);
        break;
      default: {
        console.log(null);
      }
    }
  };
  return (
    <div className="select__form">
      <h5>{title}</h5>
      <select
        className="select__form-selection"
        value={countryIndex}
        onChange={getData}
        name={title}
        id={title}
      >
        {data?.map((data) => (
          <option
            className="select__form-selection-option"
            value={data.id}
            key={data.id}
          >
            {data.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectForm;
