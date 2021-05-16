import { Link } from "react-router-dom";
import "../plate.css";

export function Customer_plate(customer) {
  if (!customer) return null;
  const contractURL = customer.contructURL;
  return (
    <div className="plate">
      <div className="plate_part_1">
        <span className="header_text"> Заказчик </span> <br />
        <Link>{customer.fullName}</Link>
        <br />
        <span className="header_text"> ИНН </span> <br />
        <Link>
          {customer.inn} <br />{" "}
        </Link>
        <span className="header_text"> КПП </span> <br />
        <Link>
          {customer.kpp} <br />{" "}
        </Link>
        <br />
      </div>
      <hr />
      <div className="plate_part_2">
        <span className="header_text"> Сумма контрактов </span> <br />
        {parseFloat(customer.contractsSum || customer.contractsTotalSum)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}{" "}
        RUB <br />
        <span className="header_text"> Количество контрактов </span> <br />
        {customer.contractsCount || customer.contractsTotalCount} <br />
      </div>
    </div>
  );
}
