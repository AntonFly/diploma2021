import { Link } from "react-router-dom";
import "../plate.css";

export function Suppliers_plate(supplier, year) {
  if (!supplier) return null;
  let contractSum = supplier.contractsYearStats
    ? supplier.contractsYearStats[year] !== undefined
      ? supplier.contractsYearStats[year].contractsSum
      : "0"
    : "0";
  let contractCount = supplier.contractsYearStats
    ? supplier.contractsYearStats[year] !== undefined
      ? supplier.contractsYearStats[year].contractsCount
      : "0"
    : "0";
  let contract223Sum = supplier.contracts223YearStats
    ? supplier.contracts223YearStats[year] !== undefined
      ? supplier.contracts223YearStats[year].contractsSum
      : "0"
    : "0";
  let contract223Count = supplier.contracts223YearStats
    ? supplier.contracts223YearStats[year] !== undefined
      ? supplier.contracts223YearStats[year].contractsCount
      : "0"
    : "0";
  return (
    <div className="plate">
      <div className="plate_part_1">
        <span className="header_text"> Поставщик </span> <br />
        <Link>{supplier.allNames[2]}</Link>
        <br />
        <span className="header_text"> ИНН </span> <br />
        <Link>
          {supplier.inn} <br />{" "}
        </Link>
        <span className="header_text"> КПП </span> <br />
        <Link>
          {supplier.kpp} <br />{" "}
        </Link>
        <br />
      </div>
      <hr />
      <div className="plate_part_2">
        <span className="header_text"> Сумма контрактов </span> <br />
        {parseFloat(contractSum)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}{" "}
        RUB <br />
        {parseFloat(contract223Sum)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}{" "}
        RUB (223Фз)
        <br />
        <span className="header_text"> Количество контрактов </span> <br />
        {contractCount} <br />
        {contract223Count} (223Фз)
      </div>
    </div>
  );
}
