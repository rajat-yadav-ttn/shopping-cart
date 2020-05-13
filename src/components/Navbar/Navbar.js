import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../fonts.css";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <ul className="nav-list">
        <li>
          <NavLink to="/" activeClassName="active-link" exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" activeClassName="active-link">
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/help" activeClassName="active-link">
            Help
          </NavLink>
        </li>
        <li>
          <NavLink to="/shop" activeClassName="active-link">
            Shop
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/your-cart"
            activeClassName="active-link"
            className="main-btn your-cart-btn"
          >
            Your Cart
          </NavLink>
        </li>
      </ul>
    );
  }
}

export default Navbar;
