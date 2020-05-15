import React, { Component } from "react";

import { NavLink } from "react-router-dom";
import "./Navbar.css";
import "../../fonts.css";
import { connect } from "react-redux";

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
          {/* <NavLink
            to="/your-cart"
            activeClassName="active-link"
            className="main-btn your-cart-btn"
            style={
              this.props.isCartEmpty
                ? {
                    background: "#fff",
                    border: "1px solid #df4550",
                    color: "#df4550",
                  }
                : {
                    background: "#df4550",
                    border: "1px solid #df4550",
                    color: "#fff",
                  }
            }
          >
            Your Cart ({this.props.addedItems.length})
          </NavLink> */}
          <NavLink to="/your-cart" className="cart-icon">
            <img src={require("./img/cart-icon.png")} alt="cart" />
            <div className="cart-dot">
              <h4>{this.props.addedItems.length}</h4>
            </div>
          </NavLink>
        </li>
      </ul>
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
