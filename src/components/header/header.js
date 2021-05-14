import React from "react";
import "./header.css";
import { Link } from "@material-ui/core";

function Header(props) {
  return (
    <div className="header">
      <div className="container">
        <div className="header-brand">
          <a href="/">{props.brand}</a>
        </div>
      </div>
    </div>
  );
}

export default Header;
