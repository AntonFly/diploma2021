import * as React from "react";
import { DataGrid } from "@material-ui/data-grid";
import { useState } from "react";
import { Link } from "react-router-dom";

const columns = [
  { field: "name", headerName: "Название", width: 800 },
  { field: "price", headerName: "Цена, руб.", type: "number", width: 300 },
  { field: "quantity", headerName: "Количество", width: 130 },
  {
    field: "sum",
    headerName: "Сумма, руб.",
    type: "number",
    width: 300,
  },
];

export default function Products(contract) {
  const [value, setValue] = useState(0);

  let contLink = "/contract/" + contract.regNum;
  return (
    <div>
      <span className="header_text"> Продукты контракта: </span>
      <Link to={contLink}>{contract.regNum}</Link> <br />
      <div style={{ height: 400, width: "100%" }}>
        <DataGrid
          getRowId={(row) => row.name}
          rows={contract.products}
          columns={columns}
          pageSize={5}
        />
      </div>
    </div>
  );
}
