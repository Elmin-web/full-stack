import React, { useState, useEffect } from "react";
import AdvancedFilterItems from "../AdvancedFilter/AdvancedFilterItems";
import SelectForm from "../SelectForm";
import "../styles/advancedfilter.scss";
const AdvancedFilter = () => {
  const [countries, setCountries] = useState([]);
  const [countryIndex, setcountryIndex] = useState("2");
  const [metalIndex, setmetalIndex] = useState("2");
  const [qualityIndex, setqualityIndex] = useState("2");
  const [metal, setMetal] = useState([]);
  const quality = [
    {
      id: 1,
      name: "Proof",
    },
    {
      id: 2,
      name: "Good",
    },
    {
      id: 3,
      name: "Very Good",
    },
  ];
  useEffect(() => {
    fetch("http://localhost:3001/countries")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  useEffect(() => {
    fetch("http://localhost:3001/metal")
      .then((res) => res.json())
      .then((data) => setMetal(data));
  }, []);
  return (
    <div className="advanced-filter">
      <div className="select-box">
        <SelectForm
          countryIndex={countryIndex}
          setcountryIndex={setcountryIndex}
          onChange="country"
          title="Issuing country"
          data={countries}
        />
        <SelectForm
          metalIndex={metalIndex}
          setmetalIndex={setmetalIndex}
          onChange="metal"
          title="Metal"
          data={metal}
        />
        <SelectForm
          qualityIndex={qualityIndex}
          setqualityIndex={setqualityIndex}
          onChange="quality"
          title="Quality of the coin"
          data={quality}
        />
      </div>
      <div className="input-box">
        <AdvancedFilterItems title="Price" />
        <AdvancedFilterItems title="Year of issue" />
      </div>
    </div>
  );
};

export default AdvancedFilter;
