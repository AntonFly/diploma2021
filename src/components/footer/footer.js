import React from "react";
import "./footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-info">{props.footerInfo}</div>
      </div>
    </div>
  );
}

export default Footer;
