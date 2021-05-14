import flag_sources from "../../data/flag-sources";
import React from "react";
import getRegionContracts from "../../backend/getRegionContracts";
import "./style.css";

export function mainRegionInfo(props, region) {
  console.log(props.dept);

  const dept = props.dept
    ? props.dept.map((item) => {
        if (item.f1 === region.region) return item.f7;
      })
    : " ";

  const capIncome = props.income
    ? props.income.map((item) => {
        if (item.f1 === region.region) return item.f2;
      })
    : "";

  return (
    <div className="region_header">
      <img
        className="region_flag"
        src={flag_sources[region.code].default}
        alt={region.region}
      />
      <div>
        <h1 className="region__title">
          {region.region}
          <br />
        </h1>
        <div className="added_info">
          <span className="region_code">
            Код региона: {region.code}
            <br />
            Госдолг региона: {dept} RUB
            <br />
            Доход бюджета на душу население: {capIncome} RUB
          </span>
          <br />
        </div>
      </div>
    </div>
  );
}
