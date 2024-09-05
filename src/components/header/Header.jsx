import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <div className="header-container">
      <ul>
        {/* <li>
          <NavLink to="/">About</NavLink>
        </li>
        <li>
          <NavLink to="/skills">Skills</NavLink>
        </li>
        <li>
          <NavLink to="/experience">Experience</NavLink>
        </li>
        <li>
          <NavLink to="/projects">Projects</NavLink>
        </li>
        <li>
          <NavLink to="/education">Education</NavLink>
        </li> */}
        <li>About</li>
        <li>Skills</li>
        <li>Experience</li>
        <li>Projects</li>
        <li>Education</li>
      </ul>
    </div>
  );
}

export default Header;
