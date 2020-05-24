import React from "react";
import { NavLink } from "react-router-dom";
import "./Drawer.css";
const Drawer = (props) => {
  return (
    <div
      className="drawer"
      style={{
        display: props.showDrawer ? "block" : "none",
      }}
    >
      <ul className="drawer_list">
        <button className="close_btn" onClick={props.drawerClose}>
          X
        </button>
        <li>
          <NavLink
            to="/"
            className="nav-item"
            activeClassName="active-link"
            exact
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="nav-item"
            activeClassName="active-link"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/help"
            className="nav-item"
            activeClassName="active-link"
          >
            Help
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/shop"
            className="nav-item"
            activeClassName="active-link"
          >
            Shop
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Drawer;
