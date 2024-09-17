import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="header-container">
      <img src={Logo} alt="PortFolio" />
    </div>
  );
}

export default Header;
