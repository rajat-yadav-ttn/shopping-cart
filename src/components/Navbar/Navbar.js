import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../fonts.css";
import { connect } from "react-redux";

class Navbar extends Component {
  state = {};

  render() {
    return (
      <nav className="navbar">
        <h1>LOGO</h1>
        <ul className="nav-list">
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
          <li>
            <NavLink
              to="/your-cart"
              activeClassName="active-link"
              className="cart-icon"
            >
              <img
                src={require("./img/bag-icon.png")}
                className="bag-icon"
                alt="cart"
              />
              {this.props.addedItems.length === 0 ? null : (
                <div className="cart-dot">
                  <h4>{this.props.addedItems.length}</h4>
                </div>
              )}
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCartEmpty: state.isCartEmpty,
    addedItems: state.addedItems,
    quantity: state.quantity,
  };
};

export default connect(mapStateToProps)(Navbar);
