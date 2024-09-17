import React from "react";
import "./Header.css";
import Logo from "../../assets/images/logo.png";
import { Bio } from "../../assets/data/Constants";

function Header() {
  return (
    <div className="header-container">
      <img src={Logo} alt="PortFolio" />
      <button className="github-btn">
        <a href={Bio.github} target="_blank" rel="noopener noreferrer">
          GitHub Profile
        </a>
      </button>
    </div>
  );
}

export default Header;
