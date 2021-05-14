import { Link } from "react-router-dom";
import "../plate.css";

export function Gran_plate(grant) {
  if (!grant) return null;
  const contractURL = grant.contructURL;
  // let contLink = "/contract/" + grant.regNum;
  // let orgLink = "organization" + grant.customer.refNum;
  return (
    <div className="plate">
      <div className="plate_part_1">
        <span className="header_text"> Уникальный реестровый номер </span>{" "}
        <br />
        <Link>{grant.info.regNum}</Link>
        <br />
        <span className="header_text"> Наименование ГРБС </span> <br />
        <Link>
          {grant.grbs.fullName} <br />{" "}
        </Link>
        <span className="header_text"> Получатель </span> <br />
        <Link>
          {grant.receiver[0].fullName} <br />{" "}
        </Link>
        <br />
      </div>
      <hr />
      <div className="plate_part_2">
        <span className="header_text"> Размер субсидии </span> <br />
        {parseFloat(grant.info.currencySum)
          .toFixed(2)
          .replace(/(\d)(?=(\d{3})+\.)/g, "$1 ")}{" "}
        {grant.info.currencyName} <br />
        <span className="header_text"> Заключено </span> <br />
        {new Date(grant.info.dateAgreem).toLocaleDateString()} <br />
        <span className="header_text"> Обновлено </span> <br />
        {new Date(grant.info.dateUpdate).toLocaleDateString()} <br />
      </div>
    </div>
  );
}
