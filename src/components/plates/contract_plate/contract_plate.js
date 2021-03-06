import { Link } from "react-router-dom";
import "../plate.css";

export function Contract_plate(contract, index) {
  if (!contract) return null;

  const contractURL = contract.contructURL;
  let contLink = "/contract/" + contract.regNum;
  let orgLink = "organization" + contract.customer.refNum;
  let product = `/product${contract.regionCode}/${index}`;
  let date = "";
  contract.signDate
    ? (date = new Date(contract.signDate).toLocaleDateString())
    : (date = new Date(contract.publishDate).toLocaleDateString());

  return (
    <div className="plate">
      <div className="plate_part_1">
        <span className="header_text"> Контракт </span> <br />
        <Link to={contLink}>{contract.regNum}</Link>
        <br />
        <span className="header_text"> Заказчик </span> <br />
        <Link to={contLink}>
          {contract.customer.fullName} <br />{" "}
        </Link>
        <Link to={product}>
          <span className="header_text" id="product">
            Предмет{" "}
          </span>{" "}
        </Link>
        <br />
        <br />
      </div>
      <hr />
      <div className="plate_part_2">
        <span className="header_text"> Цена контракта </span> <br />
        {parseFloat(contract.price)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}{" "}
        {contract.currency.code} <br />
        <span className="header_text"> Дата заключения </span> <br />
        {date} <br />
      </div>
    </div>
  );
}
