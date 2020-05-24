import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../fonts.css";
import { connect } from "react-redux";
import Drawer from "./Drawer";

class Navbar extends Component {
  state = {
    showDrawer: false,
  };

  drawerOpen = () => {
    this.setState({ showDrawer: true });
    console.log(this.state.showDrawer);
  };

  drawerClose = () => {
    this.setState({ showDrawer: false });
  };
  render() {
    return (
      <nav className="navbar">
        <NavLink className="logo" to="/">
          LOGO
        </NavLink>
        <div className="nav-links">
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
            <li></li>
          </ul>

          <div className="pos-relative">
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
          </div>
          <div className="menu-bar">
            <button onClick={this.drawerOpen}>
              <i className="fa fa-bars"></i>
            </button>
          </div>
        </div>
        <Drawer
          showDrawer={this.state.showDrawer}
          drawerClose={this.drawerClose}
          addedItems={this.props.addedItems}
        />
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
