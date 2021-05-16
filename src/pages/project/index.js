import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import regions from "../../data/regions.json";
import getRegionContracts from "../../backend/getRegionContracts";
import searchRegionContracts from "../../backend/searchRegionContracts";
import "./style.css";

import "../../index.css";
import { mainRegionInfo } from "../../components/main_region_info/mainRegionInfo";
import Tabs, { useStyles } from "../../components/tabs/tabs";
import { PreLoading } from "../../components/loading_animation/loading_animation";
import getRegionGrant from "../../backend/getRegionGrant";
import Year_box from "../../components/options/year_box";
import { Context } from "./Context.js";
import Checkboxes from "../../components/options/check_box";
import RangeSlider from "../../components/options/price_slider";
import Search_button from "../../components/options/search_button";
import getRegionDebt from "../../backend/getRegionDebt";
import getRegionIncome from "../../backend/getRegionIncome";
import getRegionCustomer from "../../backend/getRegionCustomer";
import Sort_box from "../../components/options/sort_box";
import getRegionSuppliers from "../../backend/getRegionSuppliers";
import Products from "../../components/products/products";

const year = String(new Date().getFullYear());

function ProjectPage() {
  const [context, setContext] = useState({
    year: year,
    fz: "",
    price: [1, 16],
    load: 0,
    sort: "-contractsSum",
  });

  const classes = useStyles();
  const [contracts, setContracts] = useState();
  const [grants, setGrants] = useState();
  const [dept, setDept] = useState();
  const [income, setIncome] = useState();
  const [customers, setCustomers] = useState();
  const [suppliers, setSuppliers] = useState();

  let region;
  let error = 0;
  const code = useParams().code;
  const indexP = useParams().index;
  const product = useParams();
  region = regions.find((region) => region.code === code);
  useEffect(() => {
    getRegionDebt().then((result) => {
      setDept(result);
    });
    getRegionIncome().then((result) => {
      setIncome(result);
    });
    getRegionContracts({
      region: code,
      year: context.year,
      pricerange: context.price,
      fz: context.fz,
      count: 3,
      sort: context.sort,
    })
      .then((result) => setContracts(result))
      .catch((e) => console.log(e));
    getRegionGrant({
      pricerange: context.price,
      region: code,
      year: context.year,
      sort: context.sort,
    })
      .then((result) => setGrants(result))
      .catch((e) => console.log(e));
    getRegionCustomer({
      region: code,
      fz: context.fz,
      count: 3,
      sort: context.sort,
    })
      .then((result) => setCustomers(result))
      .catch((e) => {
        console.log(e);
        setCustomers({ customers: { total: 0, data: [] } });
      });
    getRegionSuppliers({
      region: code,
      count: 3,
      sort: context.sort,
    })
      .then((result) => setSuppliers(result))
      .catch((e) => {
        console.log(e);
      });
  }, [context.load]);

  console.log(contracts);

  if (/^\/product/.test(useHistory().location.pathname) && contracts)
    return (
      <div className="project">
        <div className="container">
          {Products(contracts.contracts.data[indexP])}
        </div>
      </div>
    );

  if (error) {
    alert(error);
    return <div className="container">Что-то пошло не так...</div>;
  }
  if (region && contracts && grants && customers && suppliers)
    return (
      <div className="project">
        <div className="container">
          {mainRegionInfo({ dept: dept, income: income }, region)}
          <hr />
          <Context.Provider value={[context, setContext]}>
            <div className="parameters_fields">
              <span>Год:</span>
              <Year_box />
              <div className="checkboxes">
                <Checkboxes />
              </div>
              <RangeSlider />
              <br />
              <span className="sort_title">Сортировать заказчиков по:</span>
              <Sort_box />
              <div className="search_button">
                <Search_button />
              </div>
            </div>
            {Tabs({
              classes,
              contracts: contracts.contracts,
              grants: grants,
              customers: customers.customers,
              suppliers: suppliers.suppliers,
              year: context.year,
            })}
          </Context.Provider>
        </div>
      </div>
    );
  else return PreLoading();
}

export default ProjectPage;
