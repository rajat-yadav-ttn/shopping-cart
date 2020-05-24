import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
const Footer = (props) => {
  return (
    <footer className="center">
      <ul className="footer-list">
        <li>
          <NavLink to="/" className="nav-item" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="nav-item">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" className="nav-item">
            Help
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" className="nav-item">
            Shop
          </NavLink>
        </li>
        <li></li>
      </ul>
      &copy; All Rights Reserved
    </footer>
  );
};

export default Footer;
